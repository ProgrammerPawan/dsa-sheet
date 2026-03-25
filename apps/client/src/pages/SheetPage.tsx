import { useEffect, useMemo, useRef, useState } from "react";
import { TopicCard } from "@/components/problems/TopicCard";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { filterTopicsBySearchAndDifficulty, type DifficultyFilter } from "@/lib/sheetStats";
import { useProgressStore } from "@/store/progressStore";
import { useStatsStore } from "@/store/statsStore";
import { useTopicsStore } from "@/store/topicsStore";

const DIFFICULTIES: DifficultyFilter[] = ["All", "Easy", "Medium", "Hard"];

export default function SheetPage() {
  const topics = useTopicsStore((s) => s.topics);
  const topicsLoading = useTopicsStore((s) => s.loading);
  const topicsError = useTopicsStore((s) => s.error);
  const fetchTopics = useTopicsStore((s) => s.fetchTopics);

  const progress = useProgressStore((s) => s.progress);
  const fetchProgress = useProgressStore((s) => s.fetchProgress);
  const toggleProblem = useProgressStore((s) => s.toggleProblem);

  const summary = useStatsStore((s) => s.summary);
  const statsLoading = useStatsStore((s) => s.loading);
  const statsError = useStatsStore((s) => s.error);
  const fetchStats = useStatsStore((s) => s.fetchStats);

  const [search, setSearch] = useState("");
  const [difficulty, setDifficulty] = useState<DifficultyFilter>("All");
  const [expandedTopicId, setExpandedTopicId] = useState<string | null>(null);

  const topicRefs = useRef<Record<string, HTMLDivElement | null>>({});

  useEffect(() => {
    void fetchTopics();
    void fetchProgress();
    void fetchStats();
  }, [fetchTopics, fetchProgress, fetchStats]);

  useEffect(() => {
    if (!topics.length) return;
    setExpandedTopicId((cur) => {
      if (cur && topics.some((t) => t.id === cur)) return cur;
      return topics[0]?.id ?? null;
    });
  }, [topics]);

  const searchActive = search.trim().length > 0;

  const filteredTopics = useMemo(
    () => filterTopicsBySearchAndDifficulty(topics, search, difficulty),
    [topics, search, difficulty]
  );

  const handleToggleTopic = (topicId: string) => {
    if (searchActive) return;
    setExpandedTopicId((cur) => (cur === topicId ? null : topicId));
  };

  const jumpToTopic = (topicId: string) => {
    if (!searchActive) {
      setExpandedTopicId(topicId);
    }
    requestAnimationFrame(() => {
      topicRefs.current[topicId]?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  };

  const onToggleProblem = (problemId: string) => {
    const current = Boolean(progress[problemId]);
    void toggleProblem(problemId, current);
  };

  const showSkeleton =
    (topicsLoading && topics.length === 0) || (statsLoading && !summary && topics.length > 0);

  if (showSkeleton) {
    return (
      <div className="space-y-6">
        <div className="h-10 w-full max-w-md animate-pulse rounded-md bg-muted" />
        <div className="h-28 animate-pulse rounded-xl bg-muted" />
        <div className="h-12 animate-pulse rounded-lg bg-muted" />
        <div className="h-64 animate-pulse rounded-xl bg-muted" />
        <div className="h-64 animate-pulse rounded-xl bg-muted" />
      </div>
    );
  }

  if (topicsError) {
    return (
      <Alert variant="destructive">
        <AlertTitle>We couldn&apos;t load your problem list</AlertTitle>
        <AlertDescription>{topicsError}</AlertDescription>
      </Alert>
    );
  }

  const overall = summary?.overall;

  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-2xl font-bold tracking-tight">Your DSA Sheet</h1>
        <p className="text-sm text-muted-foreground">
          Curated problems across core chapters - check things off as you go.
        </p>
      </div>

      {statsError ? (
        <Alert variant="destructive">
          <AlertTitle>We couldn&apos;t load your progress overview</AlertTitle>
          <AlertDescription>{statsError}</AlertDescription>
        </Alert>
      ) : null}

      {overall ? (
        <Card className="border-indigo-100 bg-gradient-to-br from-indigo-50/80 via-white to-violet-50/80">
          <CardContent className="space-y-4 p-6">
            <div className="flex flex-wrap items-end justify-between gap-3">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Overall progress</p>
                <p className="text-2xl font-semibold tracking-tight">
                  {overall.solvedCount}/{overall.totalProblems}{" "}
                  <span className="text-base font-normal text-muted-foreground">solved</span>
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                <Badge className="border-transparent bg-emerald-500/15 text-emerald-800">
                  Easy {overall.byDifficulty.Easy.solved}/{overall.byDifficulty.Easy.total}
                </Badge>
                <Badge className="border-transparent bg-amber-500/15 text-amber-900">
                  Medium {overall.byDifficulty.Medium.solved}/{overall.byDifficulty.Medium.total}
                </Badge>
                <Badge className="border-transparent bg-red-500/15 text-red-800">
                  Hard {overall.byDifficulty.Hard.solved}/{overall.byDifficulty.Hard.total}
                </Badge>
              </div>
            </div>
            <Progress
              value={overall.percentComplete}
              className="h-3 [&>div]:bg-gradient-to-r [&>div]:from-indigo-600 [&>div]:to-violet-600"
            />
          </CardContent>
        </Card>
      ) : null}

      <div className="space-y-4">
        <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
          <Input
            placeholder="Search problems by title…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="max-w-xl"
          />
          <div className="flex flex-wrap gap-2">
            {DIFFICULTIES.map((d) => (
              <Button
                key={d}
                type="button"
                size="sm"
                variant={difficulty === d ? "default" : "outline"}
                className={
                  difficulty === d
                    ? "bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700"
                    : ""
                }
                onClick={() => setDifficulty(d)}
              >
                {d}
              </Button>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          {topics.map((topic) => {
            const st = summary?.topics.find((t) => t.id === topic.id);
            return (
              <Button
                key={topic.id}
                type="button"
                size="sm"
                variant="secondary"
                className="gap-2 rounded-full"
                onClick={() => jumpToTopic(topic.id)}
              >
                <span className="font-medium">{topic.title}</span>
                <span className="text-xs text-muted-foreground">
                  {st ? `${st.solvedCount}/${st.totalProblems}` : "—"}
                </span>
              </Button>
            );
          })}
        </div>
      </div>

      {filteredTopics.length === 0 ? (
        <Card>
          <CardContent className="p-8 text-center text-sm text-muted-foreground">
            No problems match your filters. Try clearing search or difficulty.
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-6">
          {filteredTopics.map((topic) => {
            const isExpanded = searchActive || expandedTopicId === topic.id;
            return (
              <div
                key={topic.id}
                ref={(el) => {
                  topicRefs.current[topic.id] = el;
                }}
              >
                <TopicCard
                  topic={topic}
                  progress={progress}
                  onToggle={onToggleProblem}
                  isExpanded={isExpanded}
                  onToggleExpand={() => handleToggleTopic(topic.id)}
                  searchQuery={search}
                />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

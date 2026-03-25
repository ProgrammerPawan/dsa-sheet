import { useEffect } from "react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { useStatsStore } from "@/store/statsStore";

export default function StatsPage() {
  const summary = useStatsStore((s) => s.summary);
  const loading = useStatsStore((s) => s.loading);
  const error = useStatsStore((s) => s.error);
  const fetchStats = useStatsStore((s) => s.fetchStats);

  useEffect(() => {
    void fetchStats();
  }, [fetchStats]);

  if (loading && !summary) {
    return (
      <div className="space-y-4">
        <div className="h-10 w-64 animate-pulse rounded-md bg-muted" />
        <div className="h-40 animate-pulse rounded-lg bg-muted" />
        <div className="h-40 animate-pulse rounded-lg bg-muted" />
      </div>
    );
  }

  if (error && !summary) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>We couldn&apos;t load your stats</CardTitle>
          <CardDescription>{error}</CardDescription>
        </CardHeader>
      </Card>
    );
  }

  if (!summary) {
    return null;
  }

  const { overall, topics } = summary;

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Stats</h1>
        <p className="text-sm text-muted-foreground">Topic-wise breakdown of your completion.</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Overall</CardTitle>
          <CardDescription>
            {overall.solvedCount}/{overall.totalProblems} problems solved
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          <Progress
            value={overall.percentComplete}
            className="h-3 [&>div]:bg-gradient-to-r [&>div]:from-indigo-600 [&>div]:to-violet-600"
          />
        </CardContent>
      </Card>

      <div className="space-y-4">
        {topics.map((topic) => (
          <Card key={topic.id}>
            <CardHeader className="flex flex-row items-start justify-between gap-3 space-y-0">
              <div className="space-y-1">
                <CardTitle className="text-lg">{topic.title}</CardTitle>
                <CardDescription>
                  {topic.solvedCount}/{topic.totalProblems} problems complete
                </CardDescription>
              </div>
              <Badge variant={topic.percentComplete === 100 && topic.totalProblems > 0 ? "default" : "secondary"}>
                {topic.percentComplete === 100 && topic.totalProblems > 0 ? "Topic done" : `${topic.percentComplete}%`}
              </Badge>
            </CardHeader>
            <CardContent className="space-y-4">
              <Progress
                value={topic.percentComplete}
                className="h-2 [&>div]:bg-gradient-to-r [&>div]:from-indigo-600 [&>div]:to-violet-600"
              />

              <div className="grid gap-3 sm:grid-cols-2">
                {topic.subtopics.map((st) => {
                  const doneAll = st.totalProblems > 0 && st.solvedCount === st.totalProblems;

                  return (
                    <div
                      key={st.id}
                      className="flex items-center justify-between rounded-lg border border-border/60 bg-muted/20 px-3 py-2"
                    >
                      <div className="min-w-0 pr-2">
                        <p className="truncate text-sm font-medium">{st.title}</p>
                        <p className="text-xs text-muted-foreground">
                          {st.solvedCount}/{st.totalProblems} solved
                        </p>
                      </div>
                      <Badge
                        className={
                          doneAll ? "border-transparent bg-emerald-500/15 text-emerald-800" : ""
                        }
                        variant={doneAll ? "outline" : "secondary"}
                      >
                        {doneAll ? "100%" : `${st.percentComplete}%`}
                      </Badge>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

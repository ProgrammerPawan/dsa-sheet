import { useMemo } from "react";
import type { ProgressMap, Topic } from "@dsa-sheet/shared";
import { ChevronDown } from "lucide-react";

import { SubtopicBlock } from "@/components/problems/SubtopicBlock";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import {
  countByDifficulty,
  countCompleted,
  flattenProblems,
  solvedByDifficulty,
} from "@/lib/sheetStats";
import { cn } from "@/lib/utils";

export interface TopicCardProps {
  topic: Topic;
  progress: ProgressMap;
  onToggle: (problemId: string) => void;
  isExpanded: boolean;
  onToggleExpand: () => void;
  searchQuery?: string;
}

export function TopicCard({
  topic,
  progress,
  onToggle,
  isExpanded,
  onToggleExpand,
  searchQuery = "",
}: TopicCardProps) {
  const problems = useMemo(() => flattenProblems(topic), [topic]);
  const totals = useMemo(() => countByDifficulty(problems), [problems]);
  const solved = useMemo(() => solvedByDifficulty(progress, problems), [progress, problems]);
  const completedCount = useMemo(() => countCompleted(progress, problems), [progress, problems]);
  const totalCount = problems.length;
  const percent = totalCount === 0 ? 0 : Math.round((completedCount / totalCount) * 100);

  return (
    <Card className="overflow-hidden border-border/70 shadow-sm">
      <CardHeader
        className="cursor-pointer space-y-4 bg-card/60 transition hover:bg-muted/30"
        onClick={onToggleExpand}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            onToggleExpand();
          }
        }}
        role="button"
        tabIndex={0}
      >
        <div className="flex items-start justify-between gap-3">
          <div className="space-y-2">
            <h2 className="text-xl font-semibold tracking-tight">{topic.title}</h2>
            <p className="text-sm text-muted-foreground">{topic.description}</p>
            <div className="flex flex-wrap gap-2">
              {topic.subtopics.map((st) => (
                <Badge key={st.id} variant="secondary" className="text-xs font-normal">
                  {st.title}
                </Badge>
              ))}
            </div>
          </div>
          <ChevronDown
            className={cn(
              "mt-1 h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-300",
              isExpanded ? "rotate-180" : "rotate-0"
            )}
          />
        </div>

        <div className="space-y-2">
          <div className="flex flex-wrap items-center justify-between gap-2 text-sm">
            <span className="font-medium text-foreground">
              {completedCount}/{totalCount} problems
            </span>
            <div className="flex flex-wrap gap-2">
              <Badge className="border-transparent bg-emerald-500/15 text-emerald-800">
                Easy {solved.Easy}/{totals.Easy}
              </Badge>
              <Badge className="border-transparent bg-amber-500/15 text-amber-900">
                Med {solved.Medium}/{totals.Medium}
              </Badge>
              <Badge className="border-transparent bg-red-500/15 text-red-800">
                Hard {solved.Hard}/{totals.Hard}
              </Badge>
            </div>
          </div>
          <Progress
            value={percent}
            className="h-2 [&>div]:bg-gradient-to-r [&>div]:from-indigo-600 [&>div]:to-violet-600"
          />
        </div>
      </CardHeader>

      {isExpanded ? (
        <CardContent className="space-y-6 border-t border-border/60 bg-muted/20 pb-6 pt-6">
          <div className="grid gap-3 sm:grid-cols-3">
            <div className="rounded-lg border border-border/60 bg-background/80 p-3">
              <p className="text-xs font-medium text-muted-foreground">Easy</p>
              <p className="text-lg font-semibold text-emerald-700">
                {solved.Easy}/{totals.Easy}
              </p>
            </div>
            <div className="rounded-lg border border-border/60 bg-background/80 p-3">
              <p className="text-xs font-medium text-muted-foreground">Medium</p>
              <p className="text-lg font-semibold text-amber-800">
                {solved.Medium}/{totals.Medium}
              </p>
            </div>
            <div className="rounded-lg border border-border/60 bg-background/80 p-3">
              <p className="text-xs font-medium text-muted-foreground">Hard</p>
              <p className="text-lg font-semibold text-red-800">
                {solved.Hard}/{totals.Hard}
              </p>
            </div>
          </div>

          <div className="space-y-4">
            {topic.subtopics.map((st, idx) => {
              const offset = topic.subtopics
                .slice(0, idx)
                .reduce((acc, s) => acc + s.problems.length, 0);
              return (
                <SubtopicBlock
                  key={st.id}
                  subtopic={st}
                  progress={progress}
                  onToggle={onToggle}
                  defaultOpen={idx === 0}
                  searchQuery={searchQuery}
                  topicProblemIndexOffset={offset}
                />
              );
            })}
          </div>
        </CardContent>
      ) : null}
    </Card>
  );
}

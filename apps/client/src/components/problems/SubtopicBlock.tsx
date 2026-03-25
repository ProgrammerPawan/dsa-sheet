import { useMemo, useState } from "react";
import type { ProgressMap, Subtopic } from "@dsa-sheet/shared";
import { ChevronDown } from "lucide-react";

import { ProblemRow } from "@/components/problems/ProblemRow";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";

export interface SubtopicBlockProps {
  subtopic: Subtopic;
  progress: ProgressMap;
  onToggle: (problemId: string) => void;
  defaultOpen?: boolean;
  searchQuery?: string;
  topicProblemIndexOffset: number;
}

export function SubtopicBlock({
  subtopic,
  progress,
  onToggle,
  defaultOpen = false,
  searchQuery = "",
  topicProblemIndexOffset,
}: SubtopicBlockProps) {
  const [open, setOpen] = useState(defaultOpen);

  const { done, total, percent } = useMemo(() => {
    const totalProblems = subtopic.problems.length;
    const doneProblems = subtopic.problems.filter((p) => progress[p.id]).length;
    const pct = totalProblems === 0 ? 0 : Math.round((doneProblems / totalProblems) * 100);
    return { done: doneProblems, total: totalProblems, percent: pct };
  }, [progress, subtopic.problems]);

  return (
    <div className="overflow-hidden rounded-lg border border-border/60">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className={cn(
          "flex w-full items-center gap-3 bg-indigo-500/10 px-4 py-3 text-left transition-colors hover:bg-muted/40"
        )}
      >
        <ChevronDown
          className={cn("h-4 w-4 shrink-0 transition-transform duration-300", open ? "rotate-180" : "rotate-0")}
        />
        <div className="flex-1 space-y-2">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <p className="text-sm font-semibold text-foreground">{subtopic.title}</p>
            <span className="text-xs font-medium text-muted-foreground">
              {done}/{total} done
            </span>
          </div>
          <Progress value={percent} className="h-2" />
        </div>
      </button>

      <div
        className={cn(
          "grid transition-[grid-template-rows] duration-300 ease-in-out",
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        )}
      >
        <div className="overflow-hidden">
          <div className="space-y-3 border-t border-border/60 bg-background/40 p-4">
            {subtopic.problems.map((problem, idx) => (
              <ProblemRow
                key={problem.id}
                problem={problem}
                completed={Boolean(progress[problem.id])}
                onToggle={() => onToggle(problem.id)}
                index={topicProblemIndexOffset + idx + 1}
                searchQuery={searchQuery}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

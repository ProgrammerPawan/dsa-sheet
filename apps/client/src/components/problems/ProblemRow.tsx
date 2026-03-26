import type {Problem} from "@dsa-sheet/shared";

import {Badge} from "@/components/ui/badge";
import {Button} from "@/components/ui/button";
import {Checkbox} from "@/components/ui/checkbox";
import {Tooltip, TooltipContent, TooltipTrigger} from "@/components/ui/tooltip";
import {cn} from "@/lib/utils";

function difficultyBadgeClass(difficulty: Problem["difficulty"]): string {
  switch (difficulty) {
    case "Easy":
      return "border-transparent bg-emerald-500/15 text-emerald-800";
    case "Medium":
      return "border-transparent bg-amber-500/15 text-amber-900";
    case "Hard":
      return "border-transparent bg-red-500/15 text-red-800";
    default:
      return "";
  }
}

export interface ProblemRowProps {
  problem: Problem;
  completed: boolean;
  onToggle: () => void;
  index: number;
}

export function ProblemRow({
  problem,
  completed,
  onToggle,
  index,
}: ProblemRowProps) {
  const openUrl = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div
      className={cn(
        "flex flex-col gap-3 rounded-lg border border-border/60 p-4 transition-colors sm:flex-row sm:items-center sm:justify-between",
        completed && "bg-emerald-500/10",
      )}
    >
      <div className="flex flex-1 items-start gap-3">
        <Checkbox
          checked={completed}
          onCheckedChange={() => onToggle()}
          aria-label={`Mark ${problem.title} complete`}
        />
        <div className="space-y-1">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-semibold text-muted-foreground">
              #{index}
            </span>
            <p
              className={cn(
                "text-sm font-medium leading-snug",
                completed && "text-muted-foreground line-through",
              )}
            >
              {problem.title}
            </p>
          </div>
          <Badge
            variant="outline"
            className={cn("border-0", difficultyBadgeClass(problem.difficulty))}
          >
            {problem.difficulty}
          </Badge>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 sm:justify-end">
        {problem.youtube ? (
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={() => openUrl(problem.youtube!)}
              >
                ▶ Video
              </Button>
            </TooltipTrigger>
            <TooltipContent>Open video resource</TooltipContent>
          </Tooltip>
        ) : null}
        {problem.leetcode ? (
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={() => openUrl(problem.leetcode!)}
              >
                ⚡ LeetCode
              </Button>
            </TooltipTrigger>
            <TooltipContent>Open LeetCode problem</TooltipContent>
          </Tooltip>
        ) : null}
        {problem.article ? (
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={() => openUrl(problem.article!)}
              >
                📄 Article
              </Button>
            </TooltipTrigger>
            <TooltipContent>Open article</TooltipContent>
          </Tooltip>
        ) : null}
      </div>
    </div>
  );
}

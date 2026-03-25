import type { Difficulty, Problem, Topic } from "@dsa-sheet/shared";
import type {
  DifficultyBreakdown,
  ProgressStatsSummary,
  SubtopicStats,
  TopicStats,
} from "@dsa-sheet/shared";
import { Progress } from "../models/Progress.model";
import { TopicModel } from "../models/Topic.model";

const emptyBreakdown = (): DifficultyBreakdown => ({
  Easy: { solved: 0, total: 0 },
  Medium: { solved: 0, total: 0 },
  Hard: { solved: 0, total: 0 },
});

function addProblemToBreakdown(b: DifficultyBreakdown, p: Problem, completed: Set<string>): void {
  const slot = b[p.difficulty];
  slot.total += 1;
  if (completed.has(p.id)) slot.solved += 1;
}

function buildSubtopicStats(
  subtopic: Topic["subtopics"][number],
  completed: Set<string>
): SubtopicStats {
  const byDifficulty = emptyBreakdown();
  for (const p of subtopic.problems) {
    addProblemToBreakdown(byDifficulty, p, completed);
  }
  const totalProblems = subtopic.problems.length;
  const solvedCount = subtopic.problems.filter((p) => completed.has(p.id)).length;
  const percentComplete =
    totalProblems === 0 ? 0 : Math.round((solvedCount / totalProblems) * 100);
  return {
    id: subtopic.id,
    title: subtopic.title,
    totalProblems,
    solvedCount,
    percentComplete,
    byDifficulty,
  };
}

function buildTopicStats(topic: Topic, completed: Set<string>): TopicStats {
  const byDifficulty = emptyBreakdown();
  let totalProblems = 0;
  let solvedCount = 0;
  for (const st of topic.subtopics) {
    for (const p of st.problems) {
      addProblemToBreakdown(byDifficulty, p, completed);
      totalProblems += 1;
      if (completed.has(p.id)) solvedCount += 1;
    }
  }
  const percentComplete =
    totalProblems === 0 ? 0 : Math.round((solvedCount / totalProblems) * 100);
  return {
    id: topic.id,
    title: topic.title,
    description: topic.description,
    totalProblems,
    solvedCount,
    percentComplete,
    byDifficulty,
    subtopics: topic.subtopics.map((st) => buildSubtopicStats(st, completed)),
  };
}

export async function getProgressStatsSummaryForUser(userId: string): Promise<ProgressStatsSummary> {
  const [topicDocs, progressDocs] = await Promise.all([
    TopicModel.find().lean<Topic[]>(),
    Progress.find({ userId, completed: true }).lean(),
  ]);

  const completed = new Set(
    progressDocs.map((d) => d.problemId).filter((id): id is string => Boolean(id))
  );

  const topics = topicDocs.map((t) => buildTopicStats(t, completed));

  const overallBreakdown = emptyBreakdown();
  let totalProblems = 0;
  let solvedCount = 0;
  for (const t of topics) {
    (["Easy", "Medium", "Hard"] as Difficulty[]).forEach((d) => {
      overallBreakdown[d].total += t.byDifficulty[d].total;
      overallBreakdown[d].solved += t.byDifficulty[d].solved;
    });
    totalProblems += t.totalProblems;
    solvedCount += t.solvedCount;
  }

  const percentComplete =
    totalProblems === 0 ? 0 : Math.round((solvedCount / totalProblems) * 100);

  return {
    overall: {
      totalProblems,
      solvedCount,
      percentComplete,
      byDifficulty: overallBreakdown,
    },
    topics,
  };
}

import type { Difficulty, Problem, Subtopic, Topic } from "@dsa-sheet/shared";
import type {
  SubtopicRollup,
  TopicNavItem,
  TopicRollup,
  TopicRollupByDifficulty,
} from "@dsa-sheet/shared";

const emptyBreakdown = (): TopicRollupByDifficulty => ({
  Easy: { solved: 0, total: 0 },
  Medium: { solved: 0, total: 0 },
  Hard: { solved: 0, total: 0 },
});

function addProblemToBreakdown(
  b: TopicRollupByDifficulty,
  p: Problem,
  completed: Set<string>,
): void {
  const slot = b[p.difficulty];
  slot.total += 1;
  if (completed.has(p.id)) slot.solved += 1;
}

export function rollupSubtopic(subtopic: Subtopic, completed: Set<string>): SubtopicRollup {
  const totalProblems = subtopic.problems.length;
  const solvedCount = subtopic.problems.filter((p) => completed.has(p.id)).length;
  const percentComplete =
    totalProblems === 0 ? 0 : Math.round((solvedCount / totalProblems) * 100);
  return { solvedCount, totalProblems, percentComplete };
}

export function rollupTopic(topic: Topic, completed: Set<string>): TopicRollup {
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
  return { solvedCount, totalProblems, percentComplete, byDifficulty };
}

/** Full topic list with per-topic and per-subtopic rollups (mutates shape: plain objects). */
export function attachRollupsToTopics(topics: Topic[], completed: Set<string>): Topic[] {
  return topics.map((topic) => ({
    ...topic,
    rollup: rollupTopic(topic, completed),
    subtopics: topic.subtopics.map((st) => ({
      ...st,
      rollup: rollupSubtopic(st, completed),
    })),
  }));
}

export function buildTopicNavItems(topics: Topic[], completed: Set<string>): TopicNavItem[] {
  return topics.map((topic) => {
    const r = rollupTopic(topic, completed);
    return {
      id: topic.id,
      title: topic.title,
      solvedCount: r.solvedCount,
      totalProblems: r.totalProblems,
    };
  });
}

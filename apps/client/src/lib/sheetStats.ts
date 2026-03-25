import type { Difficulty, Problem, ProgressMap, Topic } from "@dsa-sheet/shared";

export type DifficultyFilter = "All" | Difficulty;

export function filterTopicsBySearchAndDifficulty(
  topics: Topic[],
  search: string,
  difficulty: DifficultyFilter
): Topic[] {
  const q = search.trim().toLowerCase();
  return topics
    .map((topic) => {
      const subtopics = topic.subtopics
        .map((st) => {
          const problems = st.problems.filter((p) => {
            const matchDiff = difficulty === "All" || p.difficulty === difficulty;
            const matchSearch = q.length === 0 || p.title.toLowerCase().includes(q);
            return matchDiff && matchSearch;
          });
          return { ...st, problems };
        })
        .filter((st) => st.problems.length > 0);
      return { ...topic, subtopics };
    })
    .filter((t) => t.subtopics.length > 0);
}

export function flattenProblems(topic: Topic): Problem[] {
  return topic.subtopics.flatMap((s) => s.problems);
}

export function countByDifficulty(problems: Problem[]): Record<Difficulty, number> {
  return problems.reduce(
    (acc, p) => {
      acc[p.difficulty] += 1;
      return acc;
    },
    { Easy: 0, Medium: 0, Hard: 0 }
  );
}

export function solvedByDifficulty(
  progress: ProgressMap,
  problems: Problem[]
): Record<Difficulty, number> {
  return problems.reduce(
    (acc, p) => {
      if (progress[p.id]) acc[p.difficulty] += 1;
      return acc;
    },
    { Easy: 0, Medium: 0, Hard: 0 }
  );
}

export function countCompleted(progress: ProgressMap, problems: Problem[]): number {
  return problems.filter((p) => progress[p.id]).length;
}

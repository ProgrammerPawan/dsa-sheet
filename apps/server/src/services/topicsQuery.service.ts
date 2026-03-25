import type { Difficulty, Topic } from "@dsa-sheet/shared";

export type DifficultyFilter = "All" | Difficulty;

/** Filter embedded topic tree by problem title (case-insensitive) and difficulty. */
export function filterTopicsBySearchAndDifficulty(
  topics: Topic[],
  search: string,
  difficulty: DifficultyFilter,
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

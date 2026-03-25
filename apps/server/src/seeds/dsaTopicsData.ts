import type { Topic } from "@dsa-sheet/shared";

/** Exact curriculum from product spec (8 topics). */
export const DSA_TOPICS: Topic[] = [
  {
    id: "arrays",
    title: "Arrays & Hashing",
    description:
      "Foundation of DSA — master array manipulation, prefix sums, and hash maps.",
    subtopics: [
      {
        id: "arr-basics",
        title: "Array Basics",
        problems: [
          {
            id: "a1",
            title: "Two Sum",
            difficulty: "Easy",
            leetcode: "https://leetcode.com/problems/two-sum/",
            youtube: "https://youtube.com/watch?v=KLlXCFG5TnA",
            article:
              "https://www.geeksforgeeks.org/given-an-array-a-and-a-number-x-check-for-pair-in-a-with-sum-as-x/",
          },
          {
            id: "a2",
            title: "Best Time to Buy & Sell Stock",
            difficulty: "Easy",
            leetcode: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/",
            youtube: "https://youtube.com/watch?v=1pkOgXD63yU",
            article: "https://www.geeksforgeeks.org/best-time-to-buy-and-sell-stock/",
          },
          {
            id: "a3",
            title: "Contains Duplicate",
            difficulty: "Easy",
            leetcode: "https://leetcode.com/problems/contains-duplicate/",
            youtube: "https://youtube.com/watch?v=3OamzN90kPg",
            article:
              "https://www.geeksforgeeks.org/check-if-given-array-contains-duplicate-elements/",
          },
          {
            id: "a4",
            title: "Rotate Array",
            difficulty: "Medium",
            leetcode: "https://leetcode.com/problems/rotate-array/",
            youtube: "https://youtube.com/watch?v=BHr381Guz3Y",
            article: "https://www.geeksforgeeks.org/array-rotation/",
          },
        ],
      },
      {
        id: "arr-prefix",
        title: "Prefix Sums & Sliding Window",
        problems: [
          {
            id: "a5",
            title: "Maximum Subarray (Kadane's)",
            difficulty: "Medium",
            leetcode: "https://leetcode.com/problems/maximum-subarray/",
            youtube: "https://youtube.com/watch?v=86CQq3pKSUw",
            article: "https://www.geeksforgeeks.org/largest-sum-contiguous-subarray/",
          },
          {
            id: "a6",
            title: "Product of Array Except Self",
            difficulty: "Medium",
            leetcode: "https://leetcode.com/problems/product-of-array-except-self/",
            youtube: "https://youtube.com/watch?v=bNvIQI2wAjk",
            article: "https://www.geeksforgeeks.org/product-array-puzzle/",
          },
          {
            id: "a7",
            title: "Maximum Sum Subarray of Size K",
            difficulty: "Easy",
            leetcode: "https://leetcode.com/problems/maximum-average-subarray-i/",
            youtube: "https://youtube.com/watch?v=GcW4mgmgSbw",
            article: "https://www.geeksforgeeks.org/window-sliding-technique/",
          },
          {
            id: "a8",
            title: "Subarray Sum Equals K",
            difficulty: "Medium",
            leetcode: "https://leetcode.com/problems/subarray-sum-equals-k/",
            youtube: "https://youtube.com/watch?v=fFVZt-6sgyo",
            article:
              "https://www.geeksforgeeks.org/number-subarrays-sum-exactly-equal-k/",
          },
        ],
      },
      {
        id: "arr-hash",
        title: "Hashing & Frequency Maps",
        problems: [
          {
            id: "a9",
            title: "Longest Consecutive Sequence",
            difficulty: "Hard",
            leetcode: "https://leetcode.com/problems/longest-consecutive-sequence/",
            youtube: "https://youtube.com/watch?v=P6RZZMu_maU",
            article: "https://www.geeksforgeeks.org/longest-consecutive-subsequence/",
          },
          {
            id: "a10",
            title: "Top K Frequent Elements",
            difficulty: "Medium",
            leetcode: "https://leetcode.com/problems/top-k-frequent-elements/",
            youtube: "https://youtube.com/watch?v=YPTqKIgVk-k",
            article:
              "https://www.geeksforgeeks.org/find-k-numbers-occurrences-given-array/",
          },
          {
            id: "a11",
            title: "Group Anagrams",
            difficulty: "Medium",
            leetcode: "https://leetcode.com/problems/group-anagrams/",
            youtube: "https://youtube.com/watch?v=vzdNOK2oB2E",
            article:
              "https://www.geeksforgeeks.org/given-a-sequence-of-words-print-all-anagrams-together/",
          },
        ],
      },
    ],
  },
  {
    id: "twopointers",
    title: "Two Pointers & Strings",
    description:
      "Efficiently solve problems using dual-pointer traversal and string manipulation.",
    subtopics: [
      {
        id: "tp-basic",
        title: "Two Pointer Technique",
        problems: [
          {
            id: "tp1",
            title: "Valid Palindrome",
            difficulty: "Easy",
            leetcode: "https://leetcode.com/problems/valid-palindrome/",
            youtube: "https://youtube.com/watch?v=jJXJ16kPFWg",
            article:
              "https://www.geeksforgeeks.org/check-if-a-number-is-palindrome/",
          },
          {
            id: "tp2",
            title: "Two Sum II – Sorted Array",
            difficulty: "Medium",
            leetcode: "https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/",
            youtube: "https://youtube.com/watch?v=cQ1Oz4ckceM",
            article: "https://www.geeksforgeeks.org/two-pointers-technique/",
          },
          {
            id: "tp3",
            title: "3Sum",
            difficulty: "Medium",
            leetcode: "https://leetcode.com/problems/3sum/",
            youtube: "https://youtube.com/watch?v=jzZsG8n2R9A",
            article:
              "https://www.geeksforgeeks.org/find-a-triplet-that-sum-to-a-given-value/",
          },
          {
            id: "tp4",
            title: "Container With Most Water",
            difficulty: "Medium",
            leetcode: "https://leetcode.com/problems/container-with-most-water/",
            youtube: "https://youtube.com/watch?v=UuiTKBwPgAo",
            article: "https://www.geeksforgeeks.org/container-with-most-water/",
          },
        ],
      },
      {
        id: "tp-strings",
        title: "String Problems",
        problems: [
          {
            id: "tp5",
            title: "Valid Anagram",
            difficulty: "Easy",
            leetcode: "https://leetcode.com/problems/valid-anagram/",
            youtube: "https://youtube.com/watch?v=9UtInBqnCgA",
            article:
              "https://www.geeksforgeeks.org/check-whether-two-strings-are-anagram-of-each-other/",
          },
          {
            id: "tp6",
            title: "Longest Substring Without Repeating Chars",
            difficulty: "Medium",
            leetcode:
              "https://leetcode.com/problems/longest-substring-without-repeating-characters/",
            youtube: "https://youtube.com/watch?v=wiGpQwVHdE0",
            article:
              "https://www.geeksforgeeks.org/length-of-the-longest-substring-without-repeating-characters/",
          },
          {
            id: "tp7",
            title: "Minimum Window Substring",
            difficulty: "Hard",
            leetcode: "https://leetcode.com/problems/minimum-window-substring/",
            youtube: "https://youtube.com/watch?v=jSto0O4AJbM",
            article:
              "https://www.geeksforgeeks.org/find-the-smallest-window-in-a-string-containing-all-characters-of-another-string/",
          },
        ],
      },
    ],
  },
  {
    id: "linkedlist",
    title: "Linked Lists",
    description:
      "Understand pointer manipulation, slow/fast pointers, and list restructuring.",
    subtopics: [
      {
        id: "ll-basic",
        title: "Basic Operations",
        problems: [
          {
            id: "l1",
            title: "Reverse a Linked List",
            difficulty: "Easy",
            leetcode: "https://leetcode.com/problems/reverse-linked-list/",
            youtube: "https://youtube.com/watch?v=D2vI2DNJGd8",
            article: "https://www.geeksforgeeks.org/reverse-a-linked-list/",
          },
          {
            id: "l2",
            title: "Merge Two Sorted Lists",
            difficulty: "Easy",
            leetcode: "https://leetcode.com/problems/merge-two-sorted-lists/",
            youtube: "https://youtube.com/watch?v=XIdigk956u0",
            article: "https://www.geeksforgeeks.org/merge-two-sorted-linked-lists/",
          },
          {
            id: "l3",
            title: "Remove Nth Node From End",
            difficulty: "Medium",
            leetcode: "https://leetcode.com/problems/remove-nth-node-from-end-of-list/",
            youtube: "https://youtube.com/watch?v=XVuQxVej6y8",
            article:
              "https://www.geeksforgeeks.org/delete-nth-node-from-the-end-of-the-given-linked-list/",
          },
        ],
      },
      {
        id: "ll-slow-fast",
        title: "Slow & Fast Pointer",
        problems: [
          {
            id: "l4",
            title: "Linked List Cycle Detection",
            difficulty: "Easy",
            leetcode: "https://leetcode.com/problems/linked-list-cycle/",
            youtube: "https://youtube.com/watch?v=gBTe7lFR3vc",
            article: "https://www.geeksforgeeks.org/detect-loop-in-a-linked-list/",
          },
          {
            id: "l5",
            title: "Find Middle of Linked List",
            difficulty: "Easy",
            leetcode: "https://leetcode.com/problems/middle-of-the-linked-list/",
            youtube: "https://youtube.com/watch?v=A2_ldqM4QcY",
            article:
              "https://www.geeksforgeeks.org/write-a-c-function-to-find-the-middle-of-the-linked-list/",
          },
          {
            id: "l6",
            title: "Reorder List",
            difficulty: "Medium",
            leetcode: "https://leetcode.com/problems/reorder-list/",
            youtube: "https://youtube.com/watch?v=S5bfdUTrKLM",
            article:
              "https://www.geeksforgeeks.org/rearrange-a-given-linked-list-in-place/",
          },
        ],
      },
      {
        id: "ll-advanced",
        title: "Advanced",
        problems: [
          {
            id: "l7",
            title: "Merge K Sorted Lists",
            difficulty: "Hard",
            leetcode: "https://leetcode.com/problems/merge-k-sorted-lists/",
            youtube: "https://youtube.com/watch?v=q5a5OiGbT6Q",
            article: "https://www.geeksforgeeks.org/merge-k-sorted-linked-lists/",
          },
          {
            id: "l8",
            title: "LRU Cache",
            difficulty: "Hard",
            leetcode: "https://leetcode.com/problems/lru-cache/",
            youtube: "https://youtube.com/watch?v=7ABFKPK2hD4",
            article: "https://www.geeksforgeeks.org/lru-cache-implementation/",
          },
        ],
      },
    ],
  },
  {
    id: "trees",
    title: "Trees & BST",
    description:
      "Learn tree traversals, BST properties, recursion patterns, and BFS/DFS on trees.",
    subtopics: [
      {
        id: "tree-traversal",
        title: "Tree Traversals",
        problems: [
          {
            id: "t1",
            title: "Inorder Traversal",
            difficulty: "Easy",
            leetcode: "https://leetcode.com/problems/binary-tree-inorder-traversal/",
            youtube: "https://youtube.com/watch?v=5dySuyZf9Qg",
            article:
              "https://www.geeksforgeeks.org/inorder-tree-traversal-without-recursion/",
          },
          {
            id: "t2",
            title: "Level Order Traversal (BFS)",
            difficulty: "Medium",
            leetcode: "https://leetcode.com/problems/binary-tree-level-order-traversal/",
            youtube: "https://youtube.com/watch?v=6ZnyEApgFYg",
            article: "https://www.geeksforgeeks.org/level-order-tree-traversal/",
          },
          {
            id: "t3",
            title: "Zigzag Level Order",
            difficulty: "Medium",
            leetcode:
              "https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/",
            youtube: "https://youtube.com/watch?v=eDnSMIT7Xwo",
            article: "https://www.geeksforgeeks.org/zigzag-tree-traversal/",
          },
        ],
      },
      {
        id: "tree-props",
        title: "Tree Properties",
        problems: [
          {
            id: "t4",
            title: "Maximum Depth of Binary Tree",
            difficulty: "Easy",
            leetcode: "https://leetcode.com/problems/maximum-depth-of-binary-tree/",
            youtube: "https://youtube.com/watch?v=hTM3phVI6YQ",
            article:
              "https://www.geeksforgeeks.org/write-a-c-program-to-find-the-maximum-depth-or-height-of-a-tree/",
          },
          {
            id: "t5",
            title: "Diameter of Binary Tree",
            difficulty: "Easy",
            leetcode: "https://leetcode.com/problems/diameter-of-binary-tree/",
            youtube: "https://youtube.com/watch?v=bkxqA8Rfv04",
            article: "https://www.geeksforgeeks.org/diameter-of-a-binary-tree/",
          },
          {
            id: "t6",
            title: "Balanced Binary Tree",
            difficulty: "Easy",
            leetcode: "https://leetcode.com/problems/balanced-binary-tree/",
            youtube: "https://youtube.com/watch?v=QfJsau0ItOY",
            article:
              "https://www.geeksforgeeks.org/how-to-determine-if-a-binary-tree-is-balanced/",
          },
          {
            id: "t7",
            title: "Lowest Common Ancestor",
            difficulty: "Medium",
            leetcode:
              "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/",
            youtube: "https://youtube.com/watch?v=gs2LMfuOR9k",
            article:
              "https://www.geeksforgeeks.org/lowest-common-ancestor-binary-tree-set-1/",
          },
        ],
      },
      {
        id: "tree-bst",
        title: "Binary Search Tree",
        problems: [
          {
            id: "t8",
            title: "Validate BST",
            difficulty: "Medium",
            leetcode: "https://leetcode.com/problems/validate-binary-search-tree/",
            youtube: "https://youtube.com/watch?v=s6ATEkipzow",
            article:
              "https://www.geeksforgeeks.org/a-program-to-check-if-a-binary-tree-is-bst-or-not/",
          },
          {
            id: "t9",
            title: "Kth Smallest Element in BST",
            difficulty: "Medium",
            leetcode: "https://leetcode.com/problems/kth-smallest-element-in-a-bst/",
            youtube: "https://youtube.com/watch?v=5LUXSvjmGCw",
            article:
              "https://www.geeksforgeeks.org/find-k-th-smallest-element-in-bst-order-statistics-in-bst/",
          },
          {
            id: "t10",
            title: "Binary Tree Maximum Path Sum",
            difficulty: "Hard",
            leetcode: "https://leetcode.com/problems/binary-tree-maximum-path-sum/",
            youtube: "https://youtube.com/watch?v=Hr5cWUld4vU",
            article:
              "https://www.geeksforgeeks.org/find-maximum-path-sum-in-a-binary-tree/",
          },
        ],
      },
    ],
  },
  {
    id: "dp",
    title: "Dynamic Programming",
    description:
      "Break complex problems into overlapping subproblems using memoization and tabulation.",
    subtopics: [
      {
        id: "dp-1d",
        title: "1D DP",
        problems: [
          {
            id: "d1",
            title: "Climbing Stairs",
            difficulty: "Easy",
            leetcode: "https://leetcode.com/problems/climbing-stairs/",
            youtube: "https://youtube.com/watch?v=Y0lT9Fck7qI",
            article: "https://www.geeksforgeeks.org/count-ways-reach-nth-stair/",
          },
          {
            id: "d2",
            title: "House Robber",
            difficulty: "Medium",
            leetcode: "https://leetcode.com/problems/house-robber/",
            youtube: "https://youtube.com/watch?v=73r3KWiEvyk",
            article:
              "https://www.geeksforgeeks.org/find-maximum-possible-stolen-value-houses/",
          },
          {
            id: "d3",
            title: "House Robber II",
            difficulty: "Medium",
            leetcode: "https://leetcode.com/problems/house-robber-ii/",
            youtube: "https://youtube.com/watch?v=rWAJCfYYOvM",
            article: "https://www.geeksforgeeks.org/house-robber-ii/",
          },
          {
            id: "d4",
            title: "Decode Ways",
            difficulty: "Medium",
            leetcode: "https://leetcode.com/problems/decode-ways/",
            youtube: "https://youtube.com/watch?v=6aEyTjOwlJU",
            article:
              "https://www.geeksforgeeks.org/count-possible-decodings-of-a-given-digit-sequence/",
          },
        ],
      },
      {
        id: "dp-2d",
        title: "2D DP",
        problems: [
          {
            id: "d5",
            title: "Coin Change",
            difficulty: "Medium",
            leetcode: "https://leetcode.com/problems/coin-change/",
            youtube: "https://youtube.com/watch?v=H9bfqozjoqs",
            article: "https://www.geeksforgeeks.org/coin-change-dp-7/",
          },
          {
            id: "d6",
            title: "Longest Common Subsequence",
            difficulty: "Medium",
            leetcode: "https://leetcode.com/problems/longest-common-subsequence/",
            youtube: "https://youtube.com/watch?v=Ua0GhsJSlWM",
            article: "https://www.geeksforgeeks.org/longest-common-subsequence-dp-4/",
          },
          {
            id: "d7",
            title: "0/1 Knapsack",
            difficulty: "Medium",
            leetcode: "https://leetcode.com/problems/partition-equal-subset-sum/",
            youtube: "https://youtube.com/watch?v=8LusJS5-AGo",
            article: "https://www.geeksforgeeks.org/0-1-knapsack-problem-dp-10/",
          },
          {
            id: "d8",
            title: "Edit Distance",
            difficulty: "Hard",
            leetcode: "https://leetcode.com/problems/edit-distance/",
            youtube: "https://youtube.com/watch?v=MiqoA-yF-0M",
            article: "https://www.geeksforgeeks.org/edit-distance-dp-5/",
          },
        ],
      },
      {
        id: "dp-interval",
        title: "Interval / Advanced DP",
        problems: [
          {
            id: "d9",
            title: "Burst Balloons",
            difficulty: "Hard",
            leetcode: "https://leetcode.com/problems/burst-balloons/",
            youtube: "https://youtube.com/watch?v=VFskby7lUbw",
            article: "https://www.geeksforgeeks.org/burst-balloon-to-maximize-coins/",
          },
          {
            id: "d10",
            title: "Longest Increasing Subsequence",
            difficulty: "Medium",
            leetcode: "https://leetcode.com/problems/longest-increasing-subsequence/",
            youtube: "https://youtube.com/watch?v=cjWnW0hdF1Y",
            article: "https://www.geeksforgeeks.org/longest-increasing-subsequence-dp-3/",
          },
        ],
      },
    ],
  },
  {
    id: "graphs",
    title: "Graphs",
    description:
      "Model real-world networks — master BFS, DFS, shortest paths, and cycle detection.",
    subtopics: [
      {
        id: "g-traversal",
        title: "BFS & DFS",
        problems: [
          {
            id: "g1",
            title: "Number of Islands",
            difficulty: "Medium",
            leetcode: "https://leetcode.com/problems/number-of-islands/",
            youtube: "https://youtube.com/watch?v=pV2kpPD66nE",
            article: "https://www.geeksforgeeks.org/find-number-of-islands/",
          },
          {
            id: "g2",
            title: "Clone Graph",
            difficulty: "Medium",
            leetcode: "https://leetcode.com/problems/clone-graph/",
            youtube: "https://youtube.com/watch?v=mQeF6bN8hMk",
            article: "https://www.geeksforgeeks.org/clone-an-undirected-graph/",
          },
          {
            id: "g3",
            title: "Max Area of Island",
            difficulty: "Medium",
            leetcode: "https://leetcode.com/problems/max-area-of-island/",
            youtube: "https://youtube.com/watch?v=iJGr1OtmH0c",
            article:
              "https://www.geeksforgeeks.org/find-the-largest-island-in-a-matrix/",
          },
        ],
      },
      {
        id: "g-topo",
        title: "Topological Sort & DAGs",
        problems: [
          {
            id: "g4",
            title: "Course Schedule I",
            difficulty: "Medium",
            leetcode: "https://leetcode.com/problems/course-schedule/",
            youtube: "https://youtube.com/watch?v=EgI5nU9etnU",
            article: "https://www.geeksforgeeks.org/topological-sorting/",
          },
          {
            id: "g5",
            title: "Course Schedule II",
            difficulty: "Medium",
            leetcode: "https://leetcode.com/problems/course-schedule-ii/",
            youtube: "https://youtube.com/watch?v=Akt3glAwyfY",
            article:
              "https://www.geeksforgeeks.org/all-topological-sorts-of-a-directed-acyclic-graph/",
          },
          {
            id: "g6",
            title: "Alien Dictionary",
            difficulty: "Hard",
            leetcode: "https://leetcode.com/problems/alien-dictionary/",
            youtube: "https://youtube.com/watch?v=6kTZYvNNyps",
            article:
              "https://www.geeksforgeeks.org/given-sorted-dictionary-find-precedence-characters/",
          },
        ],
      },
      {
        id: "g-shortest",
        title: "Shortest Path Algorithms",
        problems: [
          {
            id: "g7",
            title: "Dijkstra's Algorithm",
            difficulty: "Hard",
            leetcode: "https://leetcode.com/problems/network-delay-time/",
            youtube: "https://youtube.com/watch?v=XB4MIexjvY0",
            article:
              "https://www.geeksforgeeks.org/dijkstras-shortest-path-algorithm-greedy-algo-7/",
          },
          {
            id: "g8",
            title: "Bellman-Ford Algorithm",
            difficulty: "Hard",
            leetcode: "https://leetcode.com/problems/cheapest-flights-within-k-stops/",
            youtube: "https://youtube.com/watch?v=FtN3BYH2Zes",
            article: "https://www.geeksforgeeks.org/bellman-ford-algorithm-dp-23/",
          },
        ],
      },
    ],
  },
  {
    id: "sorting",
    title: "Sorting & Searching",
    description:
      "Core sorting algorithms and binary search patterns used in technical interviews.",
    subtopics: [
      {
        id: "sort-algos",
        title: "Sorting Algorithms",
        problems: [
          {
            id: "s1",
            title: "Merge Sort",
            difficulty: "Medium",
            leetcode: "https://leetcode.com/problems/sort-an-array/",
            youtube: "https://youtube.com/watch?v=4VqmGXwpLqc",
            article: "https://www.geeksforgeeks.org/merge-sort/",
          },
          {
            id: "s2",
            title: "Quick Sort",
            difficulty: "Medium",
            leetcode: "https://leetcode.com/problems/sort-an-array/",
            youtube: "https://youtube.com/watch?v=Hoixgm4-P4M",
            article: "https://www.geeksforgeeks.org/quick-sort/",
          },
          {
            id: "s3",
            title: "Sort Colors (Dutch Flag)",
            difficulty: "Medium",
            leetcode: "https://leetcode.com/problems/sort-colors/",
            youtube: "https://youtube.com/watch?v=uvB-Ns_TVis",
            article: "https://www.geeksforgeeks.org/sort-an-array-of-0s-1s-and-2s/",
          },
        ],
      },
      {
        id: "sort-bsearch",
        title: "Binary Search",
        problems: [
          {
            id: "s4",
            title: "Binary Search (Classic)",
            difficulty: "Easy",
            leetcode: "https://leetcode.com/problems/binary-search/",
            youtube: "https://youtube.com/watch?v=s4DPM8ct1pI",
            article: "https://www.geeksforgeeks.org/binary-search/",
          },
          {
            id: "s5",
            title: "Find Minimum in Rotated Sorted Array",
            difficulty: "Medium",
            leetcode:
              "https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/",
            youtube: "https://youtube.com/watch?v=nIVW4P8b1VA",
            article:
              "https://www.geeksforgeeks.org/finding-minimum-element-in-a-sorted-and-rotated-array/",
          },
          {
            id: "s6",
            title: "Search in Rotated Sorted Array",
            difficulty: "Medium",
            leetcode: "https://leetcode.com/problems/search-in-rotated-sorted-array/",
            youtube: "https://youtube.com/watch?v=U8XENwh8Oy8",
            article:
              "https://www.geeksforgeeks.org/search-an-element-in-a-sorted-and-pivoted-array/",
          },
          {
            id: "s7",
            title: "Median of Two Sorted Arrays",
            difficulty: "Hard",
            leetcode: "https://leetcode.com/problems/median-of-two-sorted-arrays/",
            youtube: "https://youtube.com/watch?v=q6IEA26hvXc",
            article: "https://www.geeksforgeeks.org/median-of-two-sorted-arrays/",
          },
        ],
      },
    ],
  },
  {
    id: "stackqueue",
    title: "Stack & Queue",
    description:
      "LIFO and FIFO data structures powering parsing, scheduling, and monotonic algorithms.",
    subtopics: [
      {
        id: "sq-stack",
        title: "Stack",
        problems: [
          {
            id: "sq1",
            title: "Valid Parentheses",
            difficulty: "Easy",
            leetcode: "https://leetcode.com/problems/valid-parentheses/",
            youtube: "https://youtube.com/watch?v=WTzjTskDFMg",
            article:
              "https://www.geeksforgeeks.org/check-for-balanced-parentheses-in-an-expression/",
          },
          {
            id: "sq2",
            title: "Min Stack",
            difficulty: "Medium",
            leetcode: "https://leetcode.com/problems/min-stack/",
            youtube: "https://youtube.com/watch?v=qkLl7nAwDPo",
            article:
              "https://www.geeksforgeeks.org/design-a-stack-that-supports-getmin-in-o1-time-and-o1-extra-space/",
          },
          {
            id: "sq3",
            title: "Daily Temperatures",
            difficulty: "Medium",
            leetcode: "https://leetcode.com/problems/daily-temperatures/",
            youtube: "https://youtube.com/watch?v=cTBiBSnjO3c",
            article: "https://www.geeksforgeeks.org/daily-temperatures/",
          },
          {
            id: "sq4",
            title: "Largest Rectangle in Histogram",
            difficulty: "Hard",
            leetcode: "https://leetcode.com/problems/largest-rectangle-in-histogram/",
            youtube: "https://youtube.com/watch?v=zx5Sw9130L0",
            article:
              "https://www.geeksforgeeks.org/largest-rectangle-under-histogram/",
          },
        ],
      },
      {
        id: "sq-queue",
        title: "Queue & Deque",
        problems: [
          {
            id: "sq5",
            title: "Implement Queue Using Stacks",
            difficulty: "Easy",
            leetcode: "https://leetcode.com/problems/implement-queue-using-stacks/",
            youtube: "https://youtube.com/watch?v=MA6rT5xW8cE",
            article: "https://www.geeksforgeeks.org/queue-using-stacks/",
          },
          {
            id: "sq6",
            title: "Sliding Window Maximum",
            difficulty: "Hard",
            leetcode: "https://leetcode.com/problems/sliding-window-maximum/",
            youtube: "https://youtube.com/watch?v=DfljaUwZsOk",
            article:
              "https://www.geeksforgeeks.org/sliding-window-maximum-maximum-of-all-subarrays-of-size-k/",
          },
        ],
      },
    ],
  },
];

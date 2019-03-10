# Interview Prep Based on Jose Montes's note:

Jose Montes's note: https://gist.github.com/josemontesdeoca/3b0c56ee032b8ef7821f9c5bff4ce5b6

General notes will follow.
TODO: Make TypeScript examples.

## Binary Trees, BFS, DFS, BST, Heaps

Before translating to TypeScript, let's find examples out there:

- Binary Trees:
  - [Go's concurrent binary search trees](https://golang.org/doc/play/tree.go)
  - Red-black tree:
    - https://en.wikipedia.org/wiki/Red%E2%80%93black_tree
    - https://godoc.org/github.com/erriapo/redblacktree
  - Heaps
    - https://www.geeksforgeeks.org/heap-data-structure/
    - Max: root is maximum number
    - Min: root is minimum number
    - Every subsequent layer is lower than the current node's value
      if max.
    - Every subsequent layer is greater than the current node's value
      if min.

## Bit Manipulation

- Bitwise operations
- C stuff: https://en.wikipedia.org/wiki/Bit_manipulation#Bit_manipulation_in_the_C_programming_language

## Stacks

- https://godoc.org/github.com/golang-collections/collections/stack
- Len, Peek, Pop, Push

## Queues

- https://godoc.org/github.com/golang-collections/go-datastructures/queue
  - `The priority queue is almost a spitting image of the logic used for a regular queue. In order to keep the logic fast, this code is repeated instead of using casts to cast to interface{} back and forth. If Go had inheritance and generics, this problem would be easier to solve.`
  - ProrityQueue, Queue & RingBuffer
    - Priority Queues are like Queues but in order.
    - RingBuffer is a MPMC buffer that achieves threadsafety with CAS operations only. A put on full or get on empty call will block until an item is put or retrieved. Calling Dispose on the RingBuffer will unblock any blocked threads with an error.
    - RingBuffer works with FIFO, first in, first out.
    - RingBuffer's last position is linked with the first.
    - On insert, it will add an element in the nearest empty position,
     or error. It will loop over the structure and re-start from the
     beginning if it's full.

## Dynamic Programming

- https://medium.com/@codingfreak/top-50-dynamic-programming-practice-problems-4208fed71aa3<Paste>
  - `Dynamic Programming is a method for solving a complex problem by breaking it down into a collection of simpler subproblems, solving each of those subproblems just once, and storing their solutions using a memory-based data structure (array, map,etc).`
  - `./code/src/dynamic/longest_common_subsequence.ts`

Note: The previous link is pretty good. I've been checking it out for a while. I haven't been able to come back.

## Greedy Algorithms

## Graphs

export const data = [
  {
    id: "1",
    title: "Modern JavaScript",
    imageUrl: "",
    description:
      "Modern JavaScript features, from ES5 (released in 2009) through ES2017. This course only covers features supported by popular browsers.",
  },
  {
    id: "2",
    title: "TypeScript",
    imageUrl: "images/authors/josephconrad.png",
    description:
      "Static types and the TypeScript language from the ground up, whether you've used static types or not. Basic JavaScript knowledge required.",
  },

  {
    id: "3",
    title: "JavaScript Concurrency",
    imageUrl: "",
    description:
      "Concurrency in JavaScript: callbacks, promises, async/await, and event loops.",
  },
  {
    id: "4",
    title: "Regular Expressions",
    imageUrl: "",
    description:
      "Learn the common regex features. Boundaries, repetition, wildcards, character sets, character classes, and others.",
  },
  {
    id: "5",
    title: "JavaScript Arrays",
    imageUrl: "",
    description:
      "Memorize the JavaScript array methods quickly, including weird corner cases; no more looking them up. Slice, filter, map, reduce, and the rest.",
  },
];

export const questions = [
  {
    order: 1,
    question: `     javascript
        const arr = ['a', 'b', 'c']
        arr['five'] = 5
        arr.length
        // 3 ;
        `,
    expected: true,
  },
  {
    order: 2,
    question: "/^.{5}$/.test('1234')",
    expected: true,
  },
  { order: 3, question: "/^.{5}$/.test('1234')", expected: true },
];

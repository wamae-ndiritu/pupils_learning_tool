export const topics = {
  Mathematics: ["indices", "loci"],
  kiswahili: ["nomino", "ngeli"],
};
export const students = {
  Grade4: [
    { name: "john gige", subject: "kiswahili", score: 20 },
    { name: "john gige", subject: "kiswahili", score: 20 },
    { name: "john gige", subject: "kiswahili", score: 20 },
    { name: "john gige", subject: "kiswahili", score: 20 },
    { name: "john gige", subject: "kiswahili", score: 20 },
  ],

  Grade6: [{ name: "john gige", subject: "kiswahili", score: 22 }],

  Grade8: [{ name: "john gige", subject: "kiswahili", score: 24 }],
};
let num = 0;
Object.keys(students).map((i) => (num += Object.values(students[i]).length));
export const no_student = num;
export const topic = {
  indices: {
    quiz1: [
      {
        id: 1,
        question: "what is the Name",
        marks: 1,
        multiple: ["john", "mark", "mathew", "bill"],
        answer: "mark",
      },
      {
        id: 2,
        question: "what is the Name",
        mark: 2,
        multiple: ["john", "mark", "mathew", "bill"],
        answer: ["mark", "mathew"],
      },
      {
        id: 3,
        question: "what is the Name",
        mark: 3,
        answer: "name",
      },
      {
        id: 4,
        question: "what is the Name",
        mark: 1,
        multiple: ["john", "mark", "mathew", "bill"],
        answer: "mark",
      },
    ],
    quiz2: [
      {
        id: 1,
        question: "what is the Name",
        marks: 1,
        multiple: ["john", "mark", "mathew", "bill"],
        answer: "mark",
      },
      {
        id: 2,
        question: "what is the Name",
        mark: 2,
        multiple: ["john", "mark", "mathew", "bill"],
        answer: ["mark", "mathew"],
      },
      {
        id: 3,
        question: "what is the Name",
        mark: 2,
        answer: "name",
      },
      {
        id: 4,
        question: "what is the Name",
        mark: 1,
        multiple: ["john", "mark", "mathew", "bill"],
        answer: "mark",
      },
    ],
  },
  loci: {
    quiz1: [
      {
        id: 1,
        question: "what is the Name",
        mark: 1,
        multiple: ["john", "mark", "mathew", "bill"],
        answer: "mark",
      },
      {
        id: 2,
        question: "what is the Name",
        mark: 2,
        multiple: ["john", "mark", "mathew", "bill"],
        answer: ["mark", "mathew"],
      },
      {
        id: 3,
        question: "what is the Name",
        mark: 2,
        answer: "name",
      },
      {
        id: 4,
        question: "what is the Name",
        mark: 1,
        multiple: ["john", "mark", "mathew", "bill"],
        answer: "mark",
      },
    ],
    quiz2: [
      {
        id: 1,
        question: "what is the Name",
        mark: 1,
        multiple: ["john", "mark", "mathew", "bill"],
        answer: "mark",
      },
      {
        id: 2,
        question: "what is the Name",
        mark: 2,
        multiple: ["john", "mark", "mathew", "bill"],
        answer: ["mark", "mathew"],
      },
      {
        id: 3,
        question: "what is the Name",
        mark: 2,
        answer: "name",
      },
      {
        id: 4,
        question: "what is the Name",
        mark: 1,
        multiple: ["john", "mark", "mathew", "bill"],
        answer: "mark",
      },
    ],
  },
  ngeli: {
    quiz1: [
      {
        id: 1,
        question: "what is the Name",
        mark: 1,
        multiple: ["john", "mark", "mathew", "bill"],
        answer: "mark",
      },
      {
        id: 2,
        question: "what is the Name",
        mark: 2,
        multiple: ["john", "mark", "mathew", "bill"],
        answer: ["mark", "mathew"],
      },
      {
        id: 3,
        question: "what is the Name",
        mark: 2,
        answer: "name",
      },
      {
        id: 4,
        question: "what is the Name",
        mark: 1,
        multiple: ["john", "mark", "mathew", "bill"],
        answer: "mark",
      },
    ],
    quiz2: [
      {
        id: 1,
        question: "what is the Name",
        mark: 1,
        multiple: ["john", "mark", "mathew", "bill"],
        answer: "mark",
      },
      {
        id: 2,
        question: "what is the Name",
        mark: 2,
        multiple: ["john", "mark", "mathew", "bill"],
        answer: ["mark", "mathew"],
      },
      {
        id: 3,
        question: "what is the Name",
        mark: 2,
        answer: "name",
      },
      {
        id: 4,
        question: "what is the Name",
        mark: 1,
        multiple: ["john", "mark", "mathew", "bill"],
        answer: "mark",
      },
    ],
  },
  nomino: {
    quiz1: [
      {
        id: 1,
        question: "what is the Name",
        mark: 1,
        multiple: ["john", "mark", "mathew", "bill"],
        answer: "mark",
      },
      {
        id: 2,
        question: "what is the Name",
        mark: 2,
        multiple: ["john", "mark", "mathew", "bill"],
        answer: ["mark", "mathew"],
      },
      {
        id: 3,
        question: "what is the Name",
        mark: 2,
        answer: "name",
      },
      {
        id: 4,
        question: "what is the Name",
        mark: 1,
        multiple: ["john", "mark", "mathew", "bill"],
        answer: "mark",
      },
    ],
    quiz2: [
      {
        id: 1,
        question: "what is the Name",
        mark: 1,
        multiple: ["john", "mark", "mathew", "bill"],
        answer: "mark",
      },
      {
        id: 2,
        question: "what is the Name",
        mark: 2,
        multiple: ["john", "mark", "mathew", "bill"],
        answer: ["mark", "mathew"],
      },
      {
        id: 3,
        question: "what is the Name",
        mark: 2,
        answer: "name",
      },
      {
        id: 4,
        question: "what is the Name",
        mark: 1,
        multiple: ["john", "mark", "mathew", "bill"],
        answer: "mark",
      },
    ],
  },
};

export const admin_data = {
  mathematics: {
    Grade6: {
      indices: {
        quiz1: [
          {
            id: 1,
            question: "what is the Name",
            marks: 1,
            multiple: ["john", "mark", "mathew", "bill"],
            answer: "mark",
          },
          {
            id: 2,
            question: "what is the Name",
            mark: 2,
            multiple: ["john", "mark", "mathew", "bill"],
            answer: ["mark", "mathew"],
          },
          {
            id: 3,
            question: "what is the Name",
            mark: 3,
            answer: "name",
          },
          {
            id: 4,
            question: "what is the Name",
            mark: 1,
            multiple: ["john", "mark", "mathew", "bill"],
            answer: "mark",
          },
        ],
        quiz2: [
          {
            id: 1,
            question: "what is the Name",
            marks: 1,
            multiple: ["john", "mark", "mathew", "bill"],
            answer: "mark",
          },
          {
            id: 2,
            question: "what is the Name",
            mark: 2,
            multiple: ["john", "mark", "mathew", "bill"],
            answer: ["mark", "mathew"],
          },
          {
            id: 3,
            question: "what is the Name",
            mark: 2,
            answer: "name",
          },
          {
            id: 4,
            question: "what is the Name",
            mark: 1,
            multiple: ["john", "mark", "mathew", "bill"],
            answer: "mark",
          },
        ],
      },
      loci: {
        quiz1: [
          {
            id: 1,
            question: "what is the Name",
            mark: 1,
            multiple: ["john", "mark", "mathew", "bill"],
            answer: "mark",
          },
          {
            id: 2,
            question: "what is the Name",
            mark: 2,
            multiple: ["john", "mark", "mathew", "bill"],
            answer: ["mark", "mathew"],
          },
          {
            id: 3,
            question: "what is the Name",
            mark: 2,
            answer: "name",
          },
          {
            id: 4,
            question: "what is the Name",
            mark: 1,
            multiple: ["john", "mark", "mathew", "bill"],
            answer: "mark",
          },
        ],
      },
    },
    Grade8: {
      loci: {
        quiz1: [
          {
            id: 1,
            question: "what is the Name",
            mark: 1,
            multiple: ["john", "mark", "mathew", "bill"],
            answer: "mark",
          },
          {
            id: 2,
            question: "what is the Name",
            mark: 2,
            multiple: ["john", "mark", "mathew", "bill"],
            answer: ["mark", "mathew"],
          },
          {
            id: 3,
            question: "what is the Name",
            mark: 2,
            answer: "name",
          },
          {
            id: 4,
            question: "what is the Name",
            mark: 1,
            multiple: ["john", "mark", "mathew", "bill"],
            answer: "mark",
          },
        ],
        quiz2: [
          {
            id: 1,
            question: "what is the Name",
            mark: 1,
            multiple: ["john", "mark", "mathew", "bill"],
            answer: "mark",
          },
          {
            id: 2,
            question: "what is the Name",
            mark: 2,
            multiple: ["john", "mark", "mathew", "bill"],
            answer: ["mark", "mathew"],
          },
          {
            id: 3,
            question: "what is the Name",
            mark: 2,
            answer: "name",
          },
          {
            id: 4,
            question: "what is the Name",
            mark: 1,
            multiple: ["john", "mark", "mathew", "bill"],
            answer: "mark",
          },
        ],
      },
    },
  },
  kiswahili: {
    Grade4: {
      ngeli: {
        quiz1: [
          {
            id: 1,
            question: "what is the Name",
            mark: 1,
            multiple: ["john", "mark", "mathew", "bill"],
            answer: "mark",
          },
          {
            id: 2,
            question: "what is the Name",
            mark: 2,
            multiple: ["john", "mark", "mathew", "bill"],
            answer: ["mark", "mathew"],
          },
          {
            id: 3,
            question: "what is the Name",
            mark: 2,
            answer: "name",
          },
          {
            id: 4,
            question: "what is the Name",
            mark: 1,
            multiple: ["john", "mark", "mathew", "bill"],
            answer: "mathew",
          },
        ],
        quiz2: [
          {
            id: 1,
            question: "what is the Name",
            mark: 1,
            multiple: ["john", "mark", "mathew", "bill"],
            answer: "mark",
          },
          {
            id: 2,
            question: "what is the Name",
            mark: 2,
            multiple: ["john", "mark", "mathew", "bill"],
            answer: ["mark", "mathew"],
          },
          {
            id: 3,
            question: "what is the Name",
            mark: 2,
            answer: "name",
          },
          {
            id: 4,
            question: "what is the Name",
            mark: 1,
            multiple: ["john", "mark", "mathew", "bill"],
            answer: "mark",
          },
        ],
      },
    },
  },
};

export const subject = Object.keys(admin_data);

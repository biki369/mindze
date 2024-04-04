export const mentalTestData = [
  {
    title: "Anexity Test",
    desc:"It is based on the GAD-7, a standardized tool used for screening generalized anxiety disorder. The frequency of the following symptoms over the past two weeks:",
    img: "/src/assets/MentalHealthTest/anxiety.jpg",
    
    questions: [
        {
            
         text: "Feeling nervous, anxious, or on edge",
        options: [
          { label: "Not at all", value: 0 },
          { label: "Several days", value: 1 },
          { label: "More than half the days", value: 2 },
          { label: "Nearly every day", value: 3 },
        ],
        selectedOption: null,
      },
      {
        text: "Not being able to stop or control worrying",
        options: [
          { label: "Not at all", value: 0 },
          { label: "Several days", value: 1 },
          { label: "More than half the days", value: 2 },
          { label: "Nearly every day", value: 3 },
        ],
        selectedOption: null,
      },
      {
        text: "Worrying too much about different things",
        options: [
          { label: "Not at all", value: 0 },
          { label: "Several days", value: 1 },
          { label: "More than half the days", value: 2 },
          { label: "Nearly every day", value: 3 },
        ],
        selectedOption: null,
      },
      {
        text: "Trouble relaxing",
        options: [
          { label: "Not at all", value: 0 },
          { label: "Several days", value: 1 },
          { label: "More than half the days", value: 2 },
          { label: "Nearly every day", value: 3 },
        ],
        selectedOption: null,
      },
      {
        text: "Being so restless that it's hard to sit still",
        options: [
          { label: "Not at all", value: 0 },
          { label: "Several days", value: 1 },
          { label: "More than half the days", value: 2 },
          { label: "Nearly every day", value: 3 },
        ],
        selectedOption: null,
      },
      {
        text: "Becoming easily annoyed or irritable",
        options: [
          { label: "Not at all", value: 0 },
          { label: "Several days", value: 1 },
          { label: "More than half the days", value: 2 },
          { label: "Nearly every day", value: 3 },
        ],
        selectedOption: null,
      },
      {
        text: "Feeling afraid as if something awful might happen",
        options: [
          { label: "Not at all", value: 0 },
          { label: "Several days", value: 1 },
          { label: "More than half the days", value: 2 },
          { label: "Nearly every day", value: 3 },
        ],
        selectedOption: null,
      },
    ],

    classificationCategories: [
      {
        low: 0,
        high: 4,
        label: "Minimal Anxiety",
        action: "Routine clinical care, may not require formal treatment.",
      },
      {
        low: 5,
        high: 9,
        label: "Mild Anxiety",
        action: "Watchful waiting, repeat GAD-7 at follow-up.",
      },
      {
        low: 10,
        high: 14,
        label: "Moderate Anxiety",
        action:
          "Active treatment with medication and/or psychotherapy, depending on patient preference and clinical judgment.",
      },
      {
        low: 15,
        high: 21,
        label: "Severe Anxiety",
        action:
          "Immediate and more intensive therapy and/or medication, referral to a specialist may be necessary.",
      },
    ],
  },
  {
    title: "OCD Test",
    img: "/src/assets/MentalHealthTest/ocd.jpg",
  },
  {
    title: "Depression Test",
    img: "/src/assets/MentalHealthTest/depression.jpg",
  },
  {
    title: "Addiction Test",
    img: "/src/assets/MentalHealthTest/addiction.jpg",
  },
  {
    title: "Insomnia Test",
    img: "/src/assets/MentalHealthTest/insomania.jpg",
  },
  {
    title: "Panic Disorder Test",
    img: "/src/assets/MentalHealthTest/panic_disorder.jpg",
  },
  {
    title: "Eating Disorder Test",
    img: "/src/assets/MentalHealthTest/eating_disorder.jpg",
  },
  {
    title: "Bipolar Test",
    img: "/src/assets/MentalHealthTest/bipolar.jpg",
  },
  {
    title: "PTSD Test",
    img: "/src/assets/MentalHealthTest/ptsd.jpg",
  },
  {
    title: "ADHD Test",
    img: "/src/assets/MentalHealthTest/adhd.jpg",
  },
];

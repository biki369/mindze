export const mentalTestData = [
  {
    title: "Anxiety Test",
    desc: "It is based on the GAD-7, a standardized tool used for screening generalized anxiety disorder. The frequency of the following symptoms over the past two weeks:",
    img: "MentalHealthTest/anxiety.jpg",

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
    img: "MentalHealthTest/OCD.jpg",
    questions: [
      {
        text: "Do you experience recurrent and persistent thoughts that are intrusive and unwanted?",
        options: [
          { label: "Not at all", value: 0 },
          { label: "Occasionally", value: 1 },
          { label: "Often", value: 2 },
          { label: "Almost always", value: 3 },
        ],
        selectedOption: null,
      },
      {
        text: "Do you feel driven to perform certain actions or rituals in a specific way to reduce anxiety?",
        options: [
          { label: "Not at all", value: 0 },
          { label: "Occasionally", value: 1 },
          { label: "Often", value: 2 },
          { label: "Almost always", value: 3 },
        ],
        selectedOption: null,
      },
      {
        text: "Do you spend a lot of time thinking about or performing these rituals or avoiding certain situations?",
        options: [
          { label: "Not at all", value: 0 },
          { label: "Less than 1 hour per day", value: 1 },
          { label: "1 to 3 hours per day", value: 2 },
          { label: "More than 3 hours per day", value: 3 },
        ],
        selectedOption: null,
      },
      {
        text: "Do these thoughts or rituals cause you significant distress or interfere with your daily life?",
        options: [
          { label: "Not at all", value: 0 },
          { label: "A little", value: 1 },
          { label: "Moderately", value: 2 },
          { label: "Severely", value: 3 },
        ],
        selectedOption: null,
      },
      {
        text: "Do you recognize that these thoughts or rituals are excessive or unreasonable?",
        options: [
          { label: "Not at all", value: 0 },
          { label: "Occasionally", value: 1 },
          { label: "Often", value: 2 },
          { label: "Almost always", value: 3 },
        ],
        selectedOption: null,
      },
      {
        text: "Do you try to ignore or suppress these thoughts or to neutralize them with other thoughts or actions?",
        options: [
          { label: "Not at all", value: 0 },
          { label: "Occasionally", value: 1 },
          { label: "Often", value: 2 },
          { label: "Almost always", value: 3 },
        ],
        selectedOption: null,
      },
      {
        text: "Do these behaviors or mental acts aim at preventing or reducing distress or preventing some dreaded event or situation?",
        options: [
          { label: "Not at all", value: 0 },
          { label: "Occasionally", value: 1 },
          { label: "Often", value: 2 },
          { label: "Almost always", value: 3 },
        ],
        selectedOption: null,
      },
    ],
    classificationCategories: [
      {
        low: 0,
        high: 7,
        label: "Minimal or No OCD Symptoms",
        action:
          "Likely no clinical action required, but stay aware of symptoms.",
      },
      {
        low: 8,
        high: 15,
        label: "Mild OCD Symptoms",
        action:
          "Monitoring, consider discussing with a healthcare provider, lifestyle changes, or stress management strategies.",
      },
      {
        low: 16,
        high: 23,
        label: "Moderate OCD Symptoms",
        action:
          "Professional consultation recommended. Therapy, such as Cognitive Behavioral Therapy (CBT), may be beneficial.",
      },
      {
        low: 24,
        high: 28,
        label: "Severe OCD Symptoms",
        action:
          "Active treatment needed. Combination of medication and therapy (e.g., CBT) often effective. Referral to a mental health specialist is advisable.",
      },
    ],
  },
  {
    title: "Depression Test",
    img: "MentalHealthTest/depression.jpg",
    questions: [
      {
        text: "Little interest or pleasure in doing things",
        options: [
          { label: "Not at all", value: 0 },
          { label: "Several days", value: 1 },
          { label: "More than half the days", value: 2 },
          { label: "Nearly every day", value: 3 },
        ],
        selectedOption: null,
      },
      {
        text: "Feeling down, depressed, or hopeless",
        options: [
          { label: "Not at all", value: 0 },
          { label: "Several days", value: 1 },
          { label: "More than half the days", value: 2 },
          { label: "Nearly every day", value: 3 },
        ],
        selectedOption: null,
      },
      {
        text: "Trouble falling or staying asleep, or sleeping too much",
        options: [
          { label: "Not at all", value: 0 },
          { label: "Several days", value: 1 },
          { label: "More than half the days", value: 2 },
          { label: "Nearly every day", value: 3 },
        ],
        selectedOption: null,
      },
      {
        text: "Feeling tired or having little energy",
        options: [
          { label: "Not at all", value: 0 },
          { label: "Several days", value: 1 },
          { label: "More than half the days", value: 2 },
          { label: "Nearly every day", value: 3 },
        ],
        selectedOption: null,
      },
      {
        text: "Poor appetite or overeating",
        options: [
          { label: "Not at all", value: 0 },
          { label: "Several days", value: 1 },
          { label: "More than half the days", value: 2 },
          { label: "Nearly every day", value: 3 },
        ],
        selectedOption: null,
      },
      {
        text: "Feeling bad about yourself — or that you are a failure or have let yourself or your family down",
        options: [
          { label: "Not at all", value: 0 },
          { label: "Several days", value: 1 },
          { label: "More than half the days", value: 2 },
          { label: "Nearly every day", value: 3 },
        ],
        selectedOption: null,
      },
      {
        text: "Trouble concentrating on things, such as reading the newspaper or watching television",
        options: [
          { label: "Not at all", value: 0 },
          { label: "Several days", value: 1 },
          { label: "More than half the days", value: 2 },
          { label: "Nearly every day", value: 3 },
        ],
        selectedOption: null,
      },
      {
        text: "Moving or speaking so slowly that other people could have noticed. Or the opposite — being so fidgety or restless that you have been moving around a lot more than usual",
        options: [
          { label: "Not at all", value: 0 },
          { label: "Several days", value: 1 },
          { label: "More than half the days", value: 2 },
          { label: "Nearly every day", value: 3 },
        ],
        selectedOption: null,
      },
      {
        text: "Thoughts that you would be better off dead, or of hurting yourself in some way",
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
        label: "Minimal or No Depression",
        action:
          "Clinical judgment might recommend monitoring but typically does not require formal treatment.",
      },
      {
        low: 5,
        high: 9,
        label: "Mild Depression",
        action:
          "Watchful waiting, repeat PHQ-9 at follow-up, and consider lifestyle changes or supportive counseling.",
      },
      {
        low: 10,
        high: 14,
        label: "Moderate Depression",
        action:
          "Treatment plan, possibly involving therapy and/or medication, depending on patient preference, clinical judgment, and patient health history.",
      },
      {
        low: 15,
        high: 19,
        label: "Moderately Severe Depression",
        action: "Active treatment with medication and/or psychotherapy.",
      },
      {
        low: 20,
        high: 24,
        label: "Severe Depression",
        action:
          "Immediate initiation of pharmacotherapy and/or psychotherapy, with possible referral to a mental health specialist.",
      },
    ],
  },
  {
    title: "Addiction Test",
    img: "MentalHealthTest/addiction.jpg",
    questions: [
      {
        text: "Have you ever felt you should cut down on your [substance or behavior]?",
        options: [
          { label: "Yes", value: 1 },
          { label: "No", value: 0 },
        ],
        selectedOption: null,
      },
      {
        text: "Have people annoyed you by criticizing your [substance or behavior]?",
        options: [
          { label: "Yes", value: 1 },
          { label: "No", value: 0 },
        ],
        selectedOption: null,
      },
      {
        text: "Have you ever felt bad or guilty about your [substance or behavior]?",
        options: [
          { label: "Yes", value: 1 },
          { label: "No", value: 0 },
        ],
        selectedOption: null,
      },
      {
        text: "Have you ever had a drink or used [substance] first thing in the morning to steady your nerves or to get rid of a hangover (eye-opener)?",
        options: [
          { label: "Yes", value: 1 },
          { label: "No", value: 0 },
        ],
        selectedOption: null,
      },
      {
        text: "Do you spend a lot of time thinking about or engaged in the [substance or behavior]?",
        options: [
          { label: "Yes", value: 1 },
          { label: "No", value: 0 },
        ],
        selectedOption: null,
      },
      {
        text: "Have you ever tried to stop or reduce your [substance or behavior] but couldn't?",
        options: [
          { label: "Yes", value: 1 },
          { label: "No", value: 0 },
        ],
        selectedOption: null,
      },
      {
        text: "Has your [substance or behavior] caused trouble at home, work, or school?",
        options: [
          { label: "Yes", value: 1 },
          { label: "No", value: 0 },
        ],
        selectedOption: null,
      },
      {
        text: "Do you continue to use [substance] or engage in the behavior despite physical or psychological problems?",
        options: [
          { label: "Yes", value: 1 },
          { label: "No", value: 0 },
        ],
        selectedOption: null,
      },
    ],
    classificationCategories: [
      {
        low: 0,
        high: 1,
        label: "Low Likelihood of Addiction",
        action: "Monitoring or brief counseling might be considered.",
      },
      {
        low: 2,
        high: 3,
        label: "Moderate Likelihood of Addiction",
        action:
          "A comprehensive assessment and possible intervention are recommended.",
      },
      {
        low: 4,
        high: 20,
        label: "High Likelihood of Addiction",
        action:
          "A comprehensive evaluation and intervention, including possible referral to addiction specialists and treatment programs, are strongly recommended.",
      },
    ],
  },
  {
    title: "Insomnia Test",
    img: "MentalHealthTest/insomania.jpg",
    questions: [
      {
        text: "Difficulty falling asleep:",
        options: [
          { label: "None", value: 0 },
          { label: "Mild", value: 1 },
          { label: "Moderate", value: 2 },
          { label: "Severe", value: 3 },
          { label: " Very Severe", value: 4 },
        ],
        selectedOption: null,
      },
      {
        text: "Difficulty staying asleep (waking up in the middle of the night or too early):",
        options: [
          { label: "None", value: 0 },
          { label: "Mild", value: 1 },
          { label: "Moderate", value: 2 },
          { label: "Severe", value: 3 },
          { label: " Very Severe", value: 4 },
        ],
        selectedOption: null,
      },
      {
        text: "Problems waking up too early:",
        options: [
          { label: "None", value: 0 },
          { label: "Mild", value: 1 },
          { label: "Moderate", value: 2 },
          { label: "Severe", value: 3 },
          { label: " Very Severe", value: 4 },
        ],
        selectedOption: null,
      },
      {
        text: "How satisfied/dissatisfied are you with your current sleep pattern?",
        options: [
          { label: "None", value: 0 },
          { label: "Mild", value: 1 },
          { label: "Moderate", value: 2 },
          { label: "Severe", value: 3 },
          { label: " Very Severe", value: 4 },
        ],
        selectedOption: null,
      },
      {
        text: "How noticeable to others do you think your sleep problem is in terms of impairing the quality of your life?",
        options: [
          { label: "None", value: 0 },
          { label: "Mild", value: 1 },
          { label: "Moderate", value: 2 },
          { label: "Severe", value: 3 },
          { label: " Very Severe", value: 4 },
        ],
        selectedOption: null,
      },
      {
        text: "How worried/distressed are you about your current sleep problem?",
        options: [
          { label: "None", value: 0 },
          { label: "Mild", value: 1 },
          { label: "Moderate", value: 2 },
          { label: "Severe", value: 3 },
          { label: " Very Severe", value: 4 },
        ],
        selectedOption: null,
      },
      {
        text: "To what extent do you consider your sleep problem to interfere with your daily functioning (e.g., daytime fatigue, ability to function at work/daily chores, concentration, memory, mood, etc.)?",
        options: [
          { label: "None", value: 0 },
          { label: "Mild", value: 1 },
          { label: "Moderate", value: 2 },
          { label: "Severe", value: 3 },
          { label: " Very Severe", value: 4 },
        ],
        selectedOption: null,
      },
    ],
    classificationCategories: [
      {
        low: 0,
        high: 7,
        label: "No clinically significant insomnia",
        action:
          "General wellness and sleep hygiene education may suffice, as symptoms are minimal.",
      },
      {
        low: 8,
        high: 14,
        label: "Subthreshold insomnia",
        action:
          "Consider lifestyle modifications and improving sleep habits. Monitor symptoms and consult a healthcare professional if they worsen.",
      },
      {
        low: 15,
        high: 21,
        label: "Clinical insomnia (moderate severity)",
        action:
          "Professional consultation recommended. Cognitive-behavioral therapy for insomnia (CBT-I), relaxation techniques, or other non-pharmacological interventions may be beneficial. Medication might be considered based on individual circumstances.",
      },
      {
        low: 22,
        high: 28,
        label: "Clinical insomnia (severe)",
        action:
          "Immediate consultation with a healthcare professional. Comprehensive assessment and treatment plan, likely involving a combination of CBT-I, possibly medication, and addressing any underlying health issues contributing to insomnia.",
      },
    ],
  },
  {
    title: "Panic Disorder Test",
    img: "MentalHealthTest/panic_disorder.jpg",
    questions: [
      {
        text: "Frequency of Panic Attacks",
        options: [
          { label: "None", value: 0 },
          { label: "One to two times a month", value: 1 },
          { label: "Once a week", value: 2 },
          { label: "Several times a week", value: 3 },
        ],
        selectedOption: null,
      },
      {
        text: "Severity of Panic Attacks",
        options: [
          { label: "None", value: 0 },
          { label: "Mild", value: 1 },
          { label: "Moderate", value: 2 },
          { label: "Severe", value: 3 },
        ],
        selectedOption: null,
      },
      {
        text: "Fear of Having Panic Attacks",
        options: [
          { label: "None", value: 0 },
          { label: "Mild fear, but it does not influence behavior", value: 1 },
          {
            label: "Moderate fear leading to some behavioral changes",
            value: 2,
          },
          {
            label: "Severe fear leading to significant behavioral changes",
            value: 3,
          },
        ],
        selectedOption: null,
      },
      {
        text: "Avoidance of Situations Due to Fear of Panic Attacks",
        options: [
          { label: "None", value: 0 },
          { label: "Mild avoidance (avoids few situations)", value: 1 },
          {
            label:
              "Moderate avoidance (avoids some but not all feared situations)",
            value: 2,
          },
          {
            label: "Severe avoidance (avoids most or all feared situations)",
            value: 3,
          },
        ],
        selectedOption: null,
      },
      {
        text: "Impact of Panic Attacks on Work/School Performance",
        options: [
          { label: "No impact", value: 0 },
          { label: "Mild impact, but able to function", value: 1 },
          {
            label: "Moderate impact, performance is noticeably affected",
            value: 2,
          },
          { label: "Severe impact, unable to work or attend school", value: 3 },
        ],
        selectedOption: null,
      },
      {
        text: "Impact of Panic Attacks on Social Life",
        options: [
          { label: "No impact", value: 0 },
          {
            label: "Mild impact, slightly reduced social activities",
            value: 1,
          },
          {
            label:
              "Moderate impact, significant reduction in social activities",
            value: 2,
          },
          {
            label: "Severe impact, avoids most or all social activities",
            value: 3,
          },
        ],
        selectedOption: null,
      },
      {
        text: "Physical Symptoms During Panic Attacks (e.g., heart palpitations, sweating)",
        options: [
          { label: "None", value: 0 },
          { label: "Mild", value: 1 },
          { label: "Moderate", value: 2 },
          { label: "Severe", value: 3 },
        ],
        selectedOption: null,
      },
    ],
    classificationCategories: [
      {
        low: 0,
        high: 5,
        label: "Low Panic Disorder",
        action:
          "Monitoring may be sufficient; lifestyle changes and stress management techniques could be beneficial. Supportive counseling might be helpful if symptoms persist or increase.",
      },
      {
        low: 6,
        high: 10,
        label: "Mild Panic Disorder",
        action:
          "Consider active treatment with cognitive-behavioral therapy (CBT). Medication may be considered based on individual symptoms. Regular follow-up and self-monitoring advised.",
      },
      {
        low: 11,
        high: 15,
        label: "Moderate Panic Disorder",
        action:
          "Combination of CBT and pharmacotherapy is recommended. Frequent monitoring and adjustments to the treatment plan. Consider referral to a mental health specialist if needed.",
      },
      {
        low: 16,
        high: 21,
        label: "Severe Panic Disorder",
        action:
          "Immediate and comprehensive treatment, including psychotherapy and medication. Consider intensive treatment options or referral to a specialist in panic disorders. Close monitoring and management are essential.",
      },
    ],
  },
  {
    title: "Eating Disorder Test",
    img: "MentalHealthTest/eating_disorder.jpg",
    questions: [
      {
        text: "Am I terrified about being overweight?",
        options: [
          { label: "Never", value: 0 },
          { label: "Rarely", value: 1 },
          { label: "Sometimes", value: 2 },
          { label: "Often", value: 3 },
          { label: "Usually", value: 4 },
          { label: "Always", value: 5 },
        ],
        selectedOption: null,
      },
      {
        text: "Do I avoid eating when I am hungry?",
        options: [
          { label: "Never", value: 0 },
          { label: "Rarely", value: 1 },
          { label: "Sometimes", value: 2 },
          { label: "Often", value: 3 },
          { label: "Usually", value: 4 },
          { label: "Always", value: 5 },
        ],
        selectedOption: null,
      },
      {
        text: "Do I find myself preoccupied with food?",
        options: [
          { label: "Never", value: 0 },
          { label: "Rarely", value: 1 },
          { label: "Sometimes", value: 2 },
          { label: "Often", value: 3 },
          { label: "Usually", value: 4 },
          { label: "Always", value: 5 },
        ],
        selectedOption: null,
      },
      {
        text: "Have I gone on eating binges where I feel that I may not be able to stop?",
        options: [
          { label: "Never", value: 0 },
          { label: "Rarely", value: 1 },
          { label: "Sometimes", value: 2 },
          { label: "Often", value: 3 },
          { label: "Usually", value: 4 },
          { label: "Always", value: 5 },
        ],
        selectedOption: null,
      },
      {
        text: "Do I cut my food into small pieces?",
        options: [
          { label: "Never", value: 0 },
          { label: "Rarely", value: 1 },
          { label: "Sometimes", value: 2 },
          { label: "Often", value: 3 },
          { label: "Usually", value: 4 },
          { label: "Always", value: 5 },
        ],
        selectedOption: null,
      },
      {
        text: "Do I feel extremely guilty after eating?",
        options: [
          { label: "Never", value: 0 },
          { label: "Rarely", value: 1 },
          { label: "Sometimes", value: 2 },
          { label: "Often", value: 3 },
          { label: "Usually", value: 4 },
          { label: "Always", value: 5 },
        ],
        selectedOption: null,
      },
      {
        text: "Do I have a definite fear of gaining weight?",
        options: [
          { label: "Never", value: 0 },
          { label: "Rarely", value: 1 },
          { label: "Sometimes", value: 2 },
          { label: "Often", value: 3 },
          { label: "Usually", value: 4 },
          { label: "Always", value: 5 },
        ],
        selectedOption: null,
      },
      {
        text: "Do I feel uncomfortable after eating sweets?",
        options: [
          { label: "Never", value: 0 },
          { label: "Rarely", value: 1 },
          { label: "Sometimes", value: 2 },
          { label: "Often", value: 3 },
          { label: "Usually", value: 4 },
          { label: "Always", value: 5 },
        ],
        selectedOption: null,
      },
      {
        text: "Do I give too much time and thought to food?",
        options: [
          { label: "Never", value: 0 },
          { label: "Rarely", value: 1 },
          { label: "Sometimes", value: 2 },
          { label: "Often", value: 3 },
          { label: "Usually", value: 4 },
          { label: "Always", value: 5 },
        ],
        selectedOption: null,
      },
      {
        text: "Do I feel that food controls my life?",
        options: [
          { label: "Never", value: 0 },
          { label: "Rarely", value: 1 },
          { label: "Sometimes", value: 2 },
          { label: "Often", value: 3 },
          { label: "Usually", value: 4 },
          { label: "Always", value: 5 },
        ],
        selectedOption: null,
      },
    ],
    classificationCategories: [
      {
        low: 0,
        high: 10,
        label: "Minimal Concern",
        action:
          "Monitor; no specific action required unless other symptoms arise.",
      },
      {
        low: 11,
        high: 20,
        label: "Mild Concern",
        action:
          "Watchful waiting; consider discussing eating habits and body image concerns with a healthcare professional.",
      },
      {
        low: 21,
        high: 30,
        label: "Moderate Concern",
        action:
          "Professional evaluation recommended. Consider counseling or therapy focused on eating behavior and body image.",
      },
      {
        low: 31,
        high: 40,
        label: "High Concern",
        action:
          "Immediate professional intervention likely needed. Consider comprehensive assessment for eating disorder and possible referral to a specialist.",
      },
    ],
  },
  {
    title: "Bipolar Test",
    img: "MentalHealthTest/bipolar.jpg",
    questions: [
      {
        text: "Have there been times when you were not your usual self and... You felt so good or hyper that other people thought you were not your normal self or were so hyper that you got into trouble?",
        options: [
          { label: "No", value: 0 },
          { label: "Yes", value: 1 },
        ],
        selectedOption: null,
      },
      {
        text: "You were so irritable that you shouted at people or started fights or arguments?",
        options: [
          { label: "No", value: 0 },
          { label: "Yes", value: 1 },
        ],
        selectedOption: null,
      },
      {
        text: "You felt much more self-confident than usual?",
        options: [
          { label: "No", value: 0 },
          { label: "Yes", value: 1 },
        ],
        selectedOption: null,
      },
      {
        text: "You got much less sleep than usual and found you didn’t really miss it?",
        options: [
          { label: "No", value: 0 },
          { label: "Yes", value: 1 },
        ],
        selectedOption: null,
      },
      {
        text: "You were much more talkative or spoke much faster than usual?",
        options: [
          { label: "No", value: 0 },
          { label: "Yes", value: 1 },
        ],
        selectedOption: null,
      },
      {
        text: "Thoughts raced through your head or you couldn’t slow your mind down?",
        options: [
          { label: "No", value: 0 },
          { label: "Yes", value: 1 },
        ],
        selectedOption: null,
      },
      {
        text: "You were so easily distracted by things around you that you had trouble concentrating or staying on track?",
        options: [
          { label: "No", value: 0 },
          { label: "Yes", value: 1 },
        ],
        selectedOption: null,
      },
      {
        text: "You had much more energy than usual?",
        options: [
          { label: "No", value: 0 },
          { label: "Yes", value: 1 },
        ],
        selectedOption: null,
      },
      {
        text: "You were much more active or did many more things than usual?",
        options: [
          { label: "No", value: 0 },
          { label: "Yes", value: 1 },
        ],
        selectedOption: null,
      },
      {
        text: "You were much more social or outgoing than usual, for example, you telephoned friends in the middle of the night?",
        options: [
          { label: "No", value: 0 },
          { label: "Yes", value: 1 },
        ],
        selectedOption: null,
      },
      {
        text: "You did things that were unusual for you or that other people might have thought were excessive, foolish, or risky?",
        options: [
          { label: "No", value: 0 },
          { label: "Yes", value: 1 },
        ],
        selectedOption: null,
      },
      {
        text: "Spending money got you or your family into trouble?",
        options: [
          { label: "No", value: 0 },
          { label: "Yes", value: 1 },
        ],
        selectedOption: null,
      },
      {
        text: "If you checked YES to more than one of the above, have several of these ever happened during the same period of time?",
        options: [
          { label: "No", value: 0 },
          { label: "Yes", value: 1 },
        ],
        selectedOption: null,
      },
      {
        text: "How much of a problem did any of these cause you — like being unable to work; having family, money, or legal troubles; getting into arguments or fights?",
        options: [
          { label: "No Problem", value: 0 },
          { label: "Minor Problem", value: 1 },
          { label: "Moderate Problem", value: 2 },
          { label: "Serious Problem", value: 3 },
        ],
        selectedOption: null,
      },
    ],
    classificationCategories: [
      {
        val: 0,
        label: "Positive Screen",
        action:
          "Strongly consider a clinical evaluation for bipolar disorder. The individual may need referral to a mental health professional for a comprehensive assessment.",
      },
      {
        val: 1,
        label: "Negative Screen",
        action:
          "Bipolar disorder is less likely but not ruled out. Monitor symptoms and consider re-evaluation if symptoms worsen or persist.",
      },
    ],
  },
  {
    title: "PTSD Test",
    img: "MentalHealthTest/ptsd.jpg",
    questions: [
      {
        text: "Repeated, disturbing, and unwanted memories of the stressful experience",
        options: [
          { label: "Not at all", value: 0 },
          { label: "A little bit", value: 1 },
          { label: "Moderately", value: 2 },
          { label: "Quite a bit", value: 3 },
          { label: "Extremely", value: 4 },
        ],
        selectedOption: null,
      },
      {
        text: "Repeated, disturbing dreams of the stressful experience",
        options: [
          { label: "Not at all", value: 0 },
          { label: "A little bit", value: 1 },
          { label: "Moderately", value: 2 },
          { label: "Quite a bit", value: 3 },
          { label: "Extremely", value: 4 },
        ],
        selectedOption: null,
      },
      {
        text: "Suddenly feeling or acting as if the stressful experience were happening again (as if you were reliving it)",
        options: [
          { label: "Not at all", value: 0 },
          { label: "A little bit", value: 1 },
          { label: "Moderately", value: 2 },
          { label: "Quite a bit", value: 3 },
          { label: "Extremely", value: 4 },
        ],
        selectedOption: null,
      },
      {
        text: "Feeling very upset when something reminded you of the stressful experience",
        options: [
          { label: "Not at all", value: 0 },
          { label: "A little bit", value: 1 },
          { label: "Moderately", value: 2 },
          { label: "Quite a bit", value: 3 },
          { label: "Extremely", value: 4 },
        ],
        selectedOption: null,
      },
      {
        text: "Having strong physical reactions when something reminded you of the stressful experience (e.g., heart pounding, trouble breathing, sweating)",
        options: [
          { label: "Not at all", value: 0 },
          { label: "A little bit", value: 1 },
          { label: "Moderately", value: 2 },
          { label: "Quite a bit", value: 3 },
          { label: "Extremely", value: 4 },
        ],
        selectedOption: null,
      },
      {
        text: "Avoiding memories, thoughts, or feelings related to the stressful experience",
        options: [
          { label: "Not at all", value: 0 },
          { label: "A little bit", value: 1 },
          { label: "Moderately", value: 2 },
          { label: "Quite a bit", value: 3 },
          { label: "Extremely", value: 4 },
        ],
        selectedOption: null,
      },
      {
        text: "Avoiding external reminders of the stressful experience (e.g., people, places, conversations, activities, objects, or situations)",
        options: [
          { label: "Not at all", value: 0 },
          { label: "A little bit", value: 1 },
          { label: "Moderately", value: 2 },
          { label: "Quite a bit", value: 3 },
          { label: "Extremely", value: 4 },
        ],
        selectedOption: null,
      },
      {
        text: "Trouble remembering important parts of the stressful experience",
        options: [
          { label: "Not at all", value: 0 },
          { label: "A little bit", value: 1 },
          { label: "Moderately", value: 2 },
          { label: "Quite a bit", value: 3 },
          { label: "Extremely", value: 4 },
        ],
        selectedOption: null,
      },
      {
        text: 'Negative beliefs about oneself, others, or the world (e.g., having thoughts such as: "I am bad," "No one can be trusted," "The world is completely dangerous")',
        options: [
          { label: "Not at all", value: 0 },
          { label: "A little bit", value: 1 },
          { label: "Moderately", value: 2 },
          { label: "Quite a bit", value: 3 },
          { label: "Extremely", value: 4 },
        ],
        selectedOption: null,
      },
      {
        text: "Distorted thoughts about the cause or consequences of the stressful experience that lead you to blame yourself or others",
        options: [
          { label: "Not at all", value: 0 },
          { label: "A little bit", value: 1 },
          { label: "Moderately", value: 2 },
          { label: "Quite a bit", value: 3 },
          { label: "Extremely", value: 4 },
        ],
        selectedOption: null,
      },
      {
        text: "Persistent negative emotional state (e.g., fear, horror, anger, guilt, or shame)",
        options: [
          { label: "Not at all", value: 0 },
          { label: "A little bit", value: 1 },
          { label: "Moderately", value: 2 },
          { label: "Quite a bit", value: 3 },
          { label: "Extremely", value: 4 },
        ],
        selectedOption: null,
      },
      {
        text: "Markedly diminished interest or participation in significant activities",
        options: [
          { label: "Not at all", value: 0 },
          { label: "A little bit", value: 1 },
          { label: "Moderately", value: 2 },
          { label: "Quite a bit", value: 3 },
          { label: "Extremely", value: 4 },
        ],
        selectedOption: null,
      },
      {
        text: "Feelings of detachment or estrangement from others",
        options: [
          { label: "Not at all", value: 0 },
          { label: "A little bit", value: 1 },
          { label: "Moderately", value: 2 },
          { label: "Quite a bit", value: 3 },
          { label: "Extremely", value: 4 },
        ],
        selectedOption: null,
      },
      {
        text: "Inability to experience positive emotions (e.g., inability to feel happiness, satisfaction, or loving feelings)",
        options: [
          { label: "Not at all", value: 0 },
          { label: "A little bit", value: 1 },
          { label: "Moderately", value: 2 },
          { label: "Quite a bit", value: 3 },
          { label: "Extremely", value: 4 },
        ],
        selectedOption: null,
      },
      {
        text: "Irritable behavior and angry outbursts (with little or no provocation) typically expressed as verbal or physical aggression toward people or objectsReckless or self-destructive behavior",
        options: [
          { label: "Not at all", value: 0 },
          { label: "A little bit", value: 1 },
          { label: "Moderately", value: 2 },
          { label: "Quite a bit", value: 3 },
          { label: "Extremely", value: 4 },
        ],
        selectedOption: null,
      },
      {
        text: "Hypervigilance",
        options: [
          { label: "Not at all", value: 0 },
          { label: "A little bit", value: 1 },
          { label: "Moderately", value: 2 },
          { label: "Quite a bit", value: 3 },
          { label: "Extremely", value: 4 },
        ],
        selectedOption: null,
      },
      {
        text: "Exaggerated startle response",
        options: [
          { label: "Not at all", value: 0 },
          { label: "A little bit", value: 1 },
          { label: "Moderately", value: 2 },
          { label: "Quite a bit", value: 3 },
          { label: "Extremely", value: 4 },
        ],
        selectedOption: null,
      },
      {
        text: "Problems with concentration",
        options: [
          { label: "Not at all", value: 0 },
          { label: "A little bit", value: 1 },
          { label: "Moderately", value: 2 },
          { label: "Quite a bit", value: 3 },
          { label: "Extremely", value: 4 },
        ],
        selectedOption: null,
      },
      {
        text: "Difficulty falling or staying asleep",
        options: [
          { label: "Not at all", value: 0 },
          { label: "A little bit", value: 1 },
          { label: "Moderately", value: 2 },
          { label: "Quite a bit", value: 3 },
          { label: "Extremely", value: 4 },
        ],
        selectedOption: null,
      },
    ],
    classificationCategories: [
      {
        low: 0,
        high: 20,
        label: "Low Indication of PTSD",
        action:
          "Monitoring may be appropriate; no immediate action typically required.",
      },
      {
        low: 21,
        high: 33,
        label: "Mild PTSD Symptoms",
        action:
          "Consider further evaluation; supportive counseling or lifestyle modifications may be beneficial.",
      },
      {
        low: 34,
        high: 49,
        label: "Moderate PTSD Symptoms",
        action:
          "Clinical evaluation recommended; consider initiating treatment with psychotherapy and/or pharmacotherapy",
      },
      {
        low: 50,
        high: 80,
        label: "Severe PTSD Symptoms",
        action:
          "Strongly consider immediate clinical evaluation; treatment with evidence-based psychotherapy, possibly in combination with medication, and referral to a specialist if needed.",
      },
    ],
  },
  {
    title: "ADHD Test",
    img: "MentalHealthTest/adhd.jpg",
    questions: [
      {
        text: "How often do you have trouble wrapping up the final details of a project, once the challenging parts have been done?",
        options: [
          { label: "Never", value: 0 },
          { label: "Rarely", value: 1 },
          { label: "Sometimes", value: 2 },
          { label: "Often", value: 3 },
          { label: "Very Often", value: 4 },
        ],
        selectedOption: null,
      },
      {
        text: "How often do you have difficulty getting things in order when you have to do a task that requires organization?",
        options: [
          { label: "Never", value: 0 },
          { label: "Rarely", value: 1 },
          { label: "Sometimes", value: 2 },
          { label: "Often", value: 3 },
          { label: "Very Often", value: 4 },
        ],
        selectedOption: null,
      },
      {
        text: "How often do you have problems remembering appointments or obligations?",
        options: [
          { label: "Never", value: 0 },
          { label: "Rarely", value: 1 },
          { label: "Sometimes", value: 2 },
          { label: "Often", value: 3 },
          { label: "Very Often", value: 4 },
        ],
        selectedOption: null,
      },
      {
        text: "When you have a task that requires a lot of thought, how often do you avoid or delay getting started?",
        options: [
          { label: "Never", value: 0 },
          { label: "Rarely", value: 1 },
          { label: "Sometimes", value: 2 },
          { label: "Often", value: 3 },
          { label: "Very Often", value: 4 },
        ],
        selectedOption: null,
      },
      {
        text: "How often do you fidget or squirm with your hands or feet when you have to sit down for a long time?",
        options: [
          { label: "Never", value: 0 },
          { label: "Rarely", value: 1 },
          { label: "Sometimes", value: 2 },
          { label: "Often", value: 3 },
          { label: "Very Often", value: 4 },
        ],
        selectedOption: null,
      },
      {
        text: "How often do you feel overly active and compelled to do things, like you were driven by a motor?",
        options: [
          { label: "Never", value: 0 },
          { label: "Rarely", value: 1 },
          { label: "Sometimes", value: 2 },
          { label: "Often", value: 3 },
          { label: "Very Often", value: 4 },
        ],
        selectedOption: null,
      },
      {
        text: "How often do you make careless mistakes when you have to work on a boring or difficult project?",
        options: [
          { label: "Never", value: 0 },
          { label: "Rarely", value: 1 },
          { label: "Sometimes", value: 2 },
          { label: "Often", value: 3 },
          { label: "Very Often", value: 4 },
        ],
        selectedOption: null,
      },
      {
        text: "How often do you have difficulty keeping your attention when you are doing boring or repetitive work?",
        options: [
          { label: "Never", value: 0 },
          { label: "Rarely", value: 1 },
          { label: "Sometimes", value: 2 },
          { label: "Often", value: 3 },
          { label: "Very Often", value: 4 },
        ],
        selectedOption: null,
      },
      {
        text: "How often do you have difficulty concentrating on what people say to you, even when they are speaking to you directly?",
        options: [
          { label: "Never", value: 0 },
          { label: "Rarely", value: 1 },
          { label: "Sometimes", value: 2 },
          { label: "Often", value: 3 },
          { label: "Very Often", value: 4 },
        ],
        selectedOption: null,
      },
      {
        text: "How often do you misplace or have difficulty finding things at home or at work?",
        options: [
          { label: "Never", value: 0 },
          { label: "Rarely", value: 1 },
          { label: "Sometimes", value: 2 },
          { label: "Often", value: 3 },
          { label: "Very Often", value: 4 },
        ],
        selectedOption: null,
      },
      {
        text: "How often are you distracted by activity or noise around you?",
        options: [
          { label: "Never", value: 0 },
          { label: "Rarely", value: 1 },
          { label: "Sometimes", value: 2 },
          { label: "Often", value: 3 },
          { label: "Very Often", value: 4 },
        ],
        selectedOption: null,
      },
      {
        text: "How often do you leave your seat in meetings or other situations in which you are expected to remain seated?",
        options: [
          { label: "Never", value: 0 },
          { label: "Rarely", value: 1 },
          { label: "Sometimes", value: 2 },
          { label: "Often", value: 3 },
          { label: "Very Often", value: 4 },
        ],
        selectedOption: null,
      },
      {
        text: "How often do you feel restless or fidgety?",
        options: [
          { label: "Never", value: 0 },
          { label: "Rarely", value: 1 },
          { label: "Sometimes", value: 2 },
          { label: "Often", value: 3 },
          { label: "Very Often", value: 4 },
        ],
        selectedOption: null,
      },
      {
        text: "How often do you have difficulty unwinding and relaxing when you have time to yourself?",
        options: [
          { label: "Never", value: 0 },
          { label: "Rarely", value: 1 },
          { label: "Sometimes", value: 2 },
          { label: "Often", value: 3 },
          { label: "Very Often", value: 4 },
        ],
        selectedOption: null,
      },
      {
        text: "How often do you have difficulty focusing on what is being said in a conversation?",
        options: [
          { label: "Never", value: 0 },
          { label: "Rarely", value: 1 },
          { label: "Sometimes", value: 2 },
          { label: "Often", value: 3 },
          { label: "Very Often", value: 4 },
        ],
        selectedOption: null,
      },
      {
        text: "How often do you blurt out answers before questions have been completed?",
        options: [
          { label: "Never", value: 0 },
          { label: "Rarely", value: 1 },
          { label: "Sometimes", value: 2 },
          { label: "Often", value: 3 },
          { label: "Very Often", value: 4 },
        ],
        selectedOption: null,
      },
      {
        text: "How often do you have difficulty waiting your turn in situations when turn taking is required?",
        options: [
          { label: "Never", value: 0 },
          { label: "Rarely", value: 1 },
          { label: "Sometimes", value: 2 },
          { label: "Often", value: 3 },
          { label: "Very Often", value: 4 },
        ],
        selectedOption: null,
      },
      {
        text: "How often do you interrupt others when they are busy?",
        options: [
          { label: "Never", value: 0 },
          { label: "Rarely", value: 1 },
          { label: "Sometimes", value: 2 },
          { label: "Often", value: 3 },
          { label: "Very Often", value: 4 },
        ],
        selectedOption: null,
      },
    ],
    classificationCategories: [
      {
        low: 0,
        high: 23,
        label: "Low Likelihood of ADHD",
        action:
          "ADHD is less likely. If symptoms are not significantly impacting daily life, monitoring and self-management strategies might be sufficient. However, if there are concerns, it's always a good idea to discuss them with a healthcare professional.",
      },
      {
        low: 24,
        high: 45,
        label: "Moderate Likelihood of ADHD",
        action:
          "ADHD could be a possibility. A professional assessment is recommended for a more thorough evaluation. Discussing lifestyle changes, coping strategies, or the need for further psychological evaluation with a healthcare provider could be beneficial.",
      },
      {
        low: 36,
        high: 72,
        label: "High Likelihood of ADHD",
        action:
          "ADHD is more likely. It's advisable to seek a comprehensive evaluation by a mental health professional. They can provide a formal diagnosis and discuss potential treatment options, including medication, therapy, and lifestyle modifications.",
      },
    ],
  },
];

import type { CourseIconName } from "@/components/manuscript/icons";
import type { FaqItem } from "@/components/site/Disclosure";

/**
 * Every course, defined once.
 *
 * Route files render this; they no longer carry their own copy. That is what
 * makes the related-courses block, the /courses index, the fee table and the
 * Course schema stay in agreement with each other.
 *
 * Copy rules applied here: sentence case, no ASCII arrows, Arabic script on
 * first use of a transliterated term, and one distinct primary keyword per
 * page so the seven course pages stop competing with each other and with `/`.
 */

export interface CourseModule {
  /** Real information: a stage, a level, a count. Never an all-caps echo. */
  label: string;
  title: string;
  points: ReadonlyArray<string>;
}

export interface Persona {
  title: string;
  body: string;
}

export interface Course {
  key: CourseKey;
  path: string;
  icon: CourseIconName;
  /** Short label for nav, cards and breadcrumbs. */
  navLabel: string;
  /** Page H1. */
  h1: string;
  /** Transliterated term plus its script, shown on first use. */
  term?: { en: string; ar: string };
  primaryKeyword: string;
  metaTitle: string;
  metaDescription: string;
  /** One line, used on cards and under the H1. */
  summary: string;
  /** "What is X" — two paragraphs. */
  intro: ReadonlyArray<string>;
  level: string;
  ages: string;
  prerequisite: string;
  sessionMinutes: ReadonlyArray<number>;
  typicalDuration: string;
  /** Canonical per-class fee in USD. Everything else is derived from this. */
  usdPerClass: number;
  syllabusLabel: string;
  modules: ReadonlyArray<CourseModule>;
  personas: ReadonlyArray<Persona>;
  faqs: ReadonlyArray<FaqItem>;
  /** Three siblings — the internal linking layer the site was missing. */
  related: ReadonlyArray<CourseKey>;
  /** Contextual closing CTA, written for this page's intent. */
  closingCta: { title: string; body: string; action: string };
  lastUpdated: string;
}

export type CourseKey =
  | "qaida"
  | "recitation"
  | "tajweed"
  | "hifz"
  | "islamicStudies"
  | "arabic"
  | "female";

const LAST_UPDATED = "2026-08-03";

export const COURSES: Record<CourseKey, Course> = {
  qaida: {
    key: "qaida",
    path: "/noorani-qaida-online",
    icon: "qaida",
    navLabel: "Noorani Qaida",
    h1: "Noorani Qaida online for children and adult beginners",
    term: { en: "Noorani Qaida", ar: "نوراني قاعدة" },
    primaryKeyword: "Noorani Qaida online",
    metaTitle: "Noorani Qaida online classes for kids | My Quran Guide",
    metaDescription:
      "Noorani Qaida online for children aged 5+ and adult beginners. Learn every Arabic letter and sound with a certified tutor. Two free trial classes.",
    summary:
      "The first step before the Quran: every Arabic letter, its sound, and how letters join.",
    intro: [
      "Noorani Qaida is the structured primer that comes before the Quran itself. It teaches the twenty-nine Arabic letters, the sound each one makes, how letters change shape when they join, the short and long vowels, and the handful of pronunciation rules a reader needs before opening a mushaf. Think of it as the alphabet book of Quranic Arabic — without it a student can guess at the words, but cannot read them.",
      "Our tutors teach it one letter at a time, with the student reading aloud every session and the tutor correcting on the spot. Children as young as five, adults starting from nothing, and new Muslims taking their first steps all begin here. Most students finish in three to six months.",
    ],
    level: "Complete beginner",
    ages: "Ages 5 and up",
    prerequisite: "None",
    sessionMinutes: [30, 45],
    typicalDuration: "3 to 6 months",
    usdPerClass: 7,
    syllabusLabel: "Five levels",
    modules: [
      {
        label: "Level 1 of 5",
        title: "The Arabic alphabet",
        points: [
          "Recognising all 29 Arabic letters by sight",
          "The individual sound of each letter",
          "How letter forms change at the beginning, middle and end of a word",
        ],
      },
      {
        label: "Level 2 of 5",
        title: "Joining letters",
        points: [
          "Joining two and three letters together",
          "Basic word formation",
          "Reading short Arabic words unaided",
        ],
      },
      {
        label: "Level 3 of 5",
        title: "Harakat — the short vowels",
        points: [
          "Fatha, Kasra and Damma",
          "Tanween, the doubled vowel endings",
          "Sukoon, where a letter carries no vowel",
        ],
      },
      {
        label: "Level 4 of 5",
        title: "Madd — the long vowels",
        points: [
          "Alif, Waw and Ya as letters of prolongation",
          "Reading words that carry a long vowel",
        ],
      },
      {
        label: "Level 5 of 5",
        title: "Shaddah and first rules",
        points: [
          "Shaddah, the doubled letter",
          "An introduction to the Qalqalah letters",
          "Practice on short Quranic words and phrases",
        ],
      },
    ],
    personas: [
      {
        title: "Children aged 5 to 12",
        body: "The natural starting point. Tutors keep sessions short, use repetition and praise, and send a progress note to the parent after each class.",
      },
      {
        title: "Adults beginning from nothing",
        body: "One-to-one classes mean nobody else hears you sound out a letter for the first time. Tutors set the pace to yours, not the other way round.",
      },
      {
        title: "New Muslims",
        body: "If you have recently accepted Islam and want to read the Quran yourself rather than in translation, this is where that starts.",
      },
      {
        title: "Returning students",
        body: "If you learned the letters years ago and suspect your pronunciation drifted, a short Qaida refresher fixes the foundation before it costs you in Tajweed.",
      },
    ],
    faqs: [
      {
        q: "How young can a child start Noorani Qaida?",
        a: "From four to five years old. At that age we keep sessions to 30 minutes and expect progress to be measured in letters rather than levels. Tutors who take on very young children are chosen for patience specifically.",
      },
      {
        q: "How long does Noorani Qaida take to complete?",
        a: "Three to six months for most students, depending on age and how many days a week they attend. Three days a week is the point at which progress becomes steady rather than start-stop.",
      },
      {
        q: "Do I need to know any Arabic before joining?",
        a: "None at all. The course starts at the first letter and assumes nothing. If you already recognise some letters, the tutor will assess you in the trial class and start you at the right level.",
      },
      {
        q: "Can adults learn Noorani Qaida online?",
        a: "Yes, and a large share of our Qaida students are adults. Classes are one-to-one, so there is no group to keep up with and no audience for your mistakes.",
      },
      {
        q: "What comes after Noorani Qaida?",
        a: "Quran recitation. Students move from the Qaida primer to reading directly from the mushaf, usually starting with the short surahs of Juz Amma.",
      },
    ],
    related: ["recitation", "tajweed", "islamicStudies"],
    closingCta: {
      title: "Start at the first letter",
      body: "Your first two classes are free. The tutor will assess where your child actually is — not where a syllabus says they should be — and start there.",
      action: "Book a free Qaida assessment",
    },
    lastUpdated: LAST_UPDATED,
  },

  recitation: {
    key: "recitation",
    path: "/online-quran-recitation-classes",
    icon: "recitation",
    navLabel: "Quran recitation",
    h1: "Online Quran recitation classes for every age and level",
    term: { en: "Nazra", ar: "نظرة" },
    primaryKeyword: "online Quran recitation classes",
    metaTitle: "Online Quran recitation classes | My Quran Guide",
    metaDescription:
      "Read the Quran fluently with one-to-one online recitation classes. Live correction every session from male and female tutors. Two free trial classes.",
    summary: "Reading directly from the mushaf, with a tutor correcting every letter as you go.",
    intro: [
      "Quran recitation — Nazra — is reading from the mushaf itself rather than from a primer. It is where a student moves from decoding letters to reading verses, and the whole skill is built on live correction: the tutor listens to every line and stops you the moment a vowel, a letter or a stop goes wrong. That correction loop is the reason one-to-one classes work so much better than recordings for this particular subject.",
      "Students join at whatever level they are at. Some are opening the mushaf for the first time after Qaida. Others read fluently but were never corrected properly as children and want to fix habits they have carried for twenty years. Both are normal, and neither is embarrassing in a class of one.",
    ],
    level: "All levels, beginner to advanced",
    ages: "All ages",
    prerequisite: "Able to recognise Arabic letters — Noorani Qaida or equivalent",
    sessionMinutes: [30, 45],
    typicalDuration: "6 to 18 months",
    usdPerClass: 7,
    syllabusLabel: "Three stages",
    modules: [
      {
        label: "Stage 1 of 3",
        title: "Foundation — the short surahs",
        points: [
          "Reading the short surahs of Juz Amma with correct pronunciation",
          "Applying Fatha, Kasra, Damma and Sukoon while reading",
          "First rules of Waqf and Ibtida — where to stop and where to start again",
        ],
      },
      {
        label: "Stage 2 of 3",
        title: "Intermediate — longer passages",
        points: [
          "Reading longer surahs and ayahs without stumbling",
          "Applying basic Tajweed rules during live recitation, not as theory",
          "Building reading speed without losing accuracy",
        ],
      },
      {
        label: "Stage 3 of 3",
        title: "Advanced — full juz",
        points: [
          "Reading a complete juz fluently",
          "Consistent application of every Tajweed rule learned",
          "Reciting with enough confidence to lead in Salah",
        ],
      },
    ],
    personas: [
      {
        title: "Students who have finished Qaida",
        body: "Ready to open the mushaf for the first time. The tutor starts with Juz Amma so early wins come quickly.",
      },
      {
        title: "Readers who want fluency",
        body: "You can read, but slowly, and you lose your place. This is the most common reason adults enrol, and it responds fast to regular practice.",
      },
      {
        title: "Adults returning after years away",
        body: "You read as a child, then stopped. The letters are still there. Six to eight weeks of consistent classes usually brings it back.",
      },
      {
        title: "Children moving up from Qaida",
        body: "The step from primer to mushaf is where children often stall. A structured stage plan and a tutor who knows the transition prevents that.",
      },
    ],
    faqs: [
      {
        q: "Do I need to finish Noorani Qaida first?",
        a: "Only if you cannot yet recognise the Arabic letters. If you already know the letters and vowels, you can join recitation classes directly. The trial class settles which is right for you.",
      },
      {
        q: "How long does it take to read the whole Quran?",
        a: "A beginner attending three to five days a week typically completes a full recitation of the Quran in 12 to 18 months. Students who already read reasonably well move considerably faster.",
      },
      {
        q: "Does the tutor correct mistakes during recitation?",
        a: "Every session. The tutor listens to each line and interrupts on the spot rather than saving feedback for the end, because a mistake corrected immediately is far less likely to become a habit.",
      },
      {
        q: "Can I learn to recite the Quran as an adult?",
        a: "Yes. A large proportion of our recitation students are adults. Classes are one-to-one precisely so that adults are not learning alongside children.",
      },
      {
        q: "Can my child and I take classes together?",
        a: "Yes. We can schedule a shared session for a parent and child, or consecutive slots with the same tutor. Tell us during booking and we will arrange it.",
      },
    ],
    related: ["qaida", "tajweed", "hifz"],
    closingCta: {
      title: "Read a page out loud to a tutor",
      body: "Your first two classes are free. Bring whatever you can read now — the tutor will tell you honestly where you are and what to fix first.",
      action: "Book a free recitation assessment",
    },
    lastUpdated: LAST_UPDATED,
  },

  tajweed: {
    key: "tajweed",
    path: "/online-tajweed-classes",
    icon: "tajweed",
    navLabel: "Tajweed",
    h1: "Online Tajweed classes for kids and adults",
    term: { en: "Tajweed", ar: "تجويد" },
    primaryKeyword: "online Tajweed classes",
    metaTitle: "Online Tajweed classes for kids and adults | My Quran Guide",
    metaDescription:
      "Learn Tajweed online: Makharij, Sifaat, Noon Sakinah, Madd and Waqf, with certified tutors who correct every letter live. Two free trial classes to start.",
    summary:
      "The rules that govern how each letter is pronounced, taught rule by rule and applied while you recite.",
    intro: [
      "Tajweed is the discipline that governs how the Quran is pronounced: where in the mouth and throat each letter is formed, what qualities it carries, how long a vowel is held, and where a reciter may stop. Every letter has a point of articulation — Makharij (مخارج) — and a set of characteristics — Sifaat (صفات). Observing them is what separates reciting the Quran from merely reading Arabic.",
      "The course teaches the rules in a fixed order and then applies each one to live recitation in the same session, because Tajweed learned as theory does not survive contact with an actual page. Students come in able to read Arabic and leave able to read it correctly.",
    ],
    level: "Beginner to advanced",
    ages: "Ages 7 and up",
    prerequisite: "Able to read basic Arabic — Noorani Qaida or Quran recitation",
    sessionMinutes: [30, 45],
    typicalDuration: "6 to 12 months for the core rules",
    usdPerClass: 7,
    syllabusLabel: "Six modules",
    modules: [
      {
        label: "Module 1 of 6",
        title: "Makharij al-Huroof — points of articulation",
        points: [
          "The 17 points of articulation for the Arabic letters",
          "Correct tongue, lip and throat placement for each letter",
          "Drilling the letter pairs that beginners routinely confuse",
        ],
      },
      {
        label: "Module 2 of 6",
        title: "Sifaat al-Huroof — characteristics of letters",
        points: [
          "Essential characteristics: Hams, Jahr, Shiddah, Tawassut, Rakhawah",
          "Non-essential characteristics: Tafkheem, Tarqeeq, Qalqalah, Leen",
        ],
      },
      {
        label: "Module 3 of 6",
        title: "Noon Sakinah and Tanween",
        points: [
          "Idhhar — clear pronunciation",
          "Idghaam — merging into the following letter",
          "Iqlaab — conversion of the sound",
          "Ikhfaa — the hidden pronunciation",
        ],
      },
      {
        label: "Module 4 of 6",
        title: "Meem Sakinah",
        points: ["Ikhfaa Shafawi", "Idghaam Shafawi", "Idhhar Shafawi"],
      },
      {
        label: "Module 5 of 6",
        title: "Madd — the rules of prolongation",
        points: [
          "Natural Madd, held for two counts",
          "Connected and separate Madd",
          "Obligatory and permissible Madd",
        ],
      },
      {
        label: "Module 6 of 6",
        title: "Waqf and Ibtida — stopping and starting",
        points: [
          "The rules governing where a reciter may stop",
          "Where stopping changes the meaning, and is therefore not permitted",
        ],
      },
    ],
    personas: [
      {
        title: "Readers who were never formally taught",
        body: "You recite daily and have done for years, but nobody ever taught you the rules. This is the largest group of Tajweed students and usually the most surprised by how much changes.",
      },
      {
        title: "Children building the habit early",
        body: "Rules learned at eight are simply how the child reads. Rules learned at thirty-eight are a correction of twenty years of habit.",
      },
      {
        title: "Students preparing for Hifz",
        body: "Memorising with incorrect pronunciation means memorising the mistake too. Tajweed before or alongside Hifz saves undoing it later.",
      },
      {
        title: "Imams and anyone who recites publicly",
        body: "If people follow your recitation in Salah, the standard applied to it is higher. Formal Tajweed training is the usual route to meeting it.",
      },
    ],
    faqs: [
      {
        q: "Do I need to know Arabic to learn Tajweed?",
        a: "You need to be able to read Arabic letters, not to understand Arabic. If you cannot yet read the letters, start with Noorani Qaida and move to Tajweed afterwards.",
      },
      {
        q: "How long does it take to learn Tajweed?",
        a: "The core rules take 6 to 12 months of regular classes. Applying them consistently and without conscious effort takes longer — that part continues improving for years.",
      },
      {
        q: "Can I learn Tajweed while also reading the Quran?",
        a: "That is how we teach it. Each rule is introduced and then immediately applied to the passage you are reading that day, so it is practised in context rather than memorised as theory.",
      },
      {
        q: "Is Tajweed only for advanced students?",
        a: "No. The course starts from the points of articulation, which assumes only that you can read the letters. Beginners, intermediate and advanced students are all taught from where they actually are.",
      },
      {
        q: "Will I get a certificate at the end?",
        a: "You will receive a tutor-verified progress certificate from My Quran Guide on completing the six modules. It records what you covered and your tutor's assessment; it is not an Ijazah, which requires a full chain of transmission.",
      },
    ],
    related: ["recitation", "hifz", "qaida"],
    closingCta: {
      title: "Have your recitation assessed",
      body: "In the free trial your tutor will listen to you recite and name the specific rules you are missing. Most students find there are three or four, not thirty.",
      action: "Book a free Tajweed assessment",
    },
    lastUpdated: LAST_UPDATED,
  },

  hifz: {
    key: "hifz",
    path: "/online-hifz-classes",
    icon: "hifz",
    navLabel: "Hifz",
    h1: "Online Hifz classes for Quran memorisation",
    term: { en: "Hifz", ar: "حفظ" },
    primaryKeyword: "online Hifz classes",
    metaTitle: "Online Hifz classes, Quran memorisation | My Quran Guide",
    metaDescription:
      "Memorise the Quran online with a structured Sabaq, Sabaqi and Manzil plan, daily revision and progress tracking by Huffaz tutors. Two free trial classes.",
    summary:
      "Memorisation on the traditional Sabaq, Sabaqi and Manzil cycle, with a tutor tracking every portion.",
    intro: [
      "Hifz is the memorisation of the complete Quran. Someone who completes it is called a Hafiz or Hafiza. It is a long commitment — three to five years for most students — and the thing that determines whether it succeeds is not talent but structure: a fixed daily portion, a fixed revision cycle, and someone listening every day.",
      "We use the Sabaq, Sabaqi and Manzil system that traditional institutions have used for centuries, because it solves the actual problem with memorisation, which is not learning new verses but keeping the old ones. Every session covers all three: the new portion, the recent portion, and a slice of everything memorised so far.",
    ],
    level: "Intermediate to advanced",
    ages: "Ages 6 and up",
    prerequisite: "Able to read the Quran with basic Tajweed",
    sessionMinutes: [45],
    typicalDuration: "3 to 5 years for the full Quran",
    usdPerClass: 8,
    syllabusLabel: "The daily cycle",
    modules: [
      {
        label: "Part 1 of 3",
        title: "Sabaq — the new portion",
        points: [
          "The student recites the verses memorised since the last class",
          "The tutor corrects pronunciation and hesitation on the spot",
          "The next portion is set, sized to what the student can actually hold",
        ],
      },
      {
        label: "Part 2 of 3",
        title: "Sabaqi — recent revision",
        points: [
          "Revision of everything memorised in the last 7 to 10 classes",
          "Catches verses that are fading before they are lost",
        ],
      },
      {
        label: "Part 3 of 3",
        title: "Manzil — long-term revision",
        points: [
          "A rotating slice of everything memorised to date",
          "The part students skip and the reason most Hifz attempts fail",
        ],
      },
    ],
    personas: [
      {
        title: "Children aged 6 to 15",
        body: "The most common starting age. Retention at this age is exceptional, but consistency has to come from the parent — we send progress notes after every session so you can see it.",
      },
      {
        title: "Teenagers",
        body: "Harder than starting at eight, and entirely achievable. The limiting factor is protected daily revision time, not capacity.",
      },
      {
        title: "Working adults",
        body: "Adults usually memorise more slowly but revise more reliably. A 45-minute session five days a week with genuine daily revision beats an intensive schedule that collapses after a month.",
      },
      {
        title: "Students memorising selected juz",
        body: "Not everyone is aiming at the full Quran. Juz Amma, Surah Yasin and Surah Al-Kahf are common goals and are treated as complete programmes in their own right.",
      },
    ],
    faqs: [
      {
        q: "What is the minimum age to start Hifz?",
        a: "Six or seven, once the child can read the Quran comfortably. Starting memorisation before reading is fluent tends to embed mistakes that are expensive to correct later.",
      },
      {
        q: "How long does full Hifz take?",
        a: "Three to five years for most students, driven far more by daily revision habits than by class frequency. We do not compress the schedule, because rushed memorisation does not survive.",
      },
      {
        q: "My child has never memorised before — can they start?",
        a: "Yes, provided they can read the Quran with basic Tajweed. The tutor assesses readiness during the free trial and will tell you honestly if a few months of recitation work first would be the better route.",
      },
      {
        q: "Is daily revision outside class necessary?",
        a: "It is the whole programme. Class time is for listening and correcting; the memorisation itself happens between classes. Your tutor sets a specific daily revision plan sized to the student.",
      },
      {
        q: "Is one-to-one necessary for Hifz?",
        a: "We only teach Hifz one-to-one. The tutor has to hear every word of the new portion and the revision, which is not possible in a group.",
      },
    ],
    related: ["tajweed", "recitation", "arabic"],
    closingCta: {
      title: "Start with an honest assessment",
      body: "Your first two classes are free and are used for exactly one thing: establishing whether the student is ready for Hifz now, and what daily commitment it would realistically take.",
      action: "Book a free Hifz assessment",
    },
    lastUpdated: LAST_UPDATED,
  },

  islamicStudies: {
    key: "islamicStudies",
    path: "/online-islamic-studies",
    icon: "islamicStudies",
    navLabel: "Islamic studies",
    h1: "Online Islamic studies for kids, adults and new Muslims",
    term: { en: "Fiqh", ar: "فقه" },
    primaryKeyword: "online Islamic studies classes",
    metaTitle: "Online Islamic studies for kids and adults | My Quran Guide",
    metaDescription:
      "Online Islamic studies covering the pillars, Fiqh, Seerah and Islamic manners, taught in English for kids, adults and new Muslims. Two free trial classes.",
    summary:
      "Belief, worship, the life of the Prophet, everyday rulings and manners — taught in English, module by module.",
    intro: [
      "Islamic studies covers what a Muslim needs to know outside recitation: what we believe and why, how to perform the acts of worship correctly, the life of the Prophet Muhammad (peace be upon him), the rulings that govern ordinary daily decisions, and the manners that sit underneath all of it.",
      "Classes are taught in English throughout, with Arabic terms introduced alongside their script and explained rather than assumed. That makes the course workable for children in English-speaking countries, for adults who were never formally taught, and particularly for new Muslims, who are usually handed either a children's book or a scholarly text and nothing in between.",
    ],
    level: "All levels",
    ages: "Ages 6 and up",
    prerequisite: "None",
    sessionMinutes: [30, 45],
    typicalDuration: "Ongoing, module by module",
    usdPerClass: 7,
    syllabusLabel: "Five modules",
    modules: [
      {
        label: "Module 1 of 5",
        title: "Belief — the foundations",
        points: [
          "The six articles of Iman",
          "The five pillars of Islam",
          "Tawheed, the oneness of Allah",
          "Angels, prophets, revealed books and the Day of Judgment",
        ],
      },
      {
        label: "Module 2 of 5",
        title: "Ibadah — acts of worship",
        points: [
          "Salah, performed correctly and understood",
          "Wudu and Ghusl",
          "Fasting in Ramadan",
          "The basics of Zakat and Hajj",
        ],
      },
      {
        label: "Module 3 of 5",
        title: "Seerah — the life of the Prophet",
        points: [
          "From birth to prophethood",
          "The Hijrah, the major events, and the final sermon",
          "What the Seerah asks of a Muslim today",
        ],
      },
      {
        label: "Module 4 of 5",
        title: "Manners and daily life",
        points: [
          "Islamic etiquette in speech and conduct",
          "The rights of parents, neighbours and the wider community",
          "Halal and haram in ordinary daily decisions",
        ],
      },
      {
        label: "Module 5 of 5",
        title: "Basic Fiqh",
        points: [
          "Rulings for everyday matters",
          "The Fiqh of worship, food, dress and social interaction",
        ],
      },
    ],
    personas: [
      {
        title: "Children and teenagers",
        body: "Especially where the family is the only source of Islamic education. Content is pitched to the age, not delivered as a lecture.",
      },
      {
        title: "Adults filling in the gaps",
        body: "Most adults know the practice but not the reasoning. This course supplies the reasoning without assuming prior study.",
      },
      {
        title: "New Muslims",
        body: "Taught in English from zero, in a class of one, where no question is too basic to ask.",
      },
      {
        title: "Parents teaching at home",
        body: "Many parents take the course themselves so they can answer their children's questions with something better than 'that's just how it is'.",
      },
    ],
    faqs: [
      {
        q: "Can new Muslims join Islamic studies classes?",
        a: "Yes, and they are a large part of who this course is for. Everything is taught in English, nothing is assumed, and one-to-one classes mean you can ask basic questions without an audience.",
      },
      {
        q: "Can my child study this alongside Quran classes?",
        a: "Yes. A common arrangement is Quran recitation three days a week and Islamic studies twice. Tell us during booking and we will schedule both with the same tutor where possible.",
      },
      {
        q: "Is the curriculum fixed, or can I choose topics?",
        a: "The five modules run in order by default, but tutors will re-sequence them on request. If you specifically want Salah or Seerah first, say so and that is where you will start.",
      },
      {
        q: "How long does the course take?",
        a: "Each module takes roughly two to three months at two classes a week. Many students continue past the five modules into more detailed Fiqh and Seerah study.",
      },
      {
        q: "Are the classes suitable for non-Arabic speakers?",
        a: "Yes. Classes are conducted entirely in English. Arabic terms appear with their script and are always explained in English on first use.",
      },
    ],
    related: ["arabic", "qaida", "female"],
    closingCta: {
      title: "Ask the questions you have been carrying",
      body: "The free trial is a real class, not a sales call. Bring the questions you have never had a good answer to and see how the tutor handles them.",
      action: "Book a free Islamic studies class",
    },
    lastUpdated: LAST_UPDATED,
  },

  arabic: {
    key: "arabic",
    path: "/online-arabic-language-classes",
    icon: "arabic",
    navLabel: "Quranic Arabic",
    h1: "Quranic Arabic classes online, from the alphabet to Nahw and Sarf",
    term: { en: "Nahw", ar: "نحو" },
    primaryKeyword: "Quranic Arabic classes online",
    metaTitle: "Quranic Arabic classes online, all levels | My Quran Guide",
    metaDescription:
      "Learn Quranic Arabic online from the alphabet through Nahw and Sarf, so you understand the words you recite. Taught in English. Two free trial classes.",
    summary: "Understanding what you recite, rather than reciting what you cannot understand.",
    intro: [
      "This course teaches the Arabic of the Quran specifically: the grammar that governs how a sentence holds together — Nahw (نحو) — and the morphology that explains how one three-letter root produces dozens of related words — Sarf (صرف). It is the difference between reciting a verse and knowing what it says.",
      "Teaching is in English, which matters more than it sounds. Grammar explained in Arabic to someone who does not yet know Arabic is the standard reason students abandon this subject. The vocabulary is drawn from the Quran by frequency, so the words you learn first are the words you meet most often.",
    ],
    level: "Beginner to advanced",
    ages: "Ages 8 and up",
    prerequisite: "None for level 1; letter recognition helps",
    sessionMinutes: [30, 45],
    typicalDuration: "12 to 24 months to read with understanding",
    usdPerClass: 12,
    syllabusLabel: "Five levels",
    modules: [
      {
        label: "Level 1 of 5",
        title: "Letters, sounds and structure",
        points: [
          "Reading and writing the Arabic alphabet",
          "Short and long vowels",
          "How an Arabic word is built",
        ],
      },
      {
        label: "Level 2 of 5",
        title: "Nahw — sentence grammar",
        points: [
          "Nouns, verbs and particles",
          "Masculine and feminine",
          "Singular, dual and plural",
          "Constructing and parsing a simple sentence",
        ],
      },
      {
        label: "Level 3 of 5",
        title: "Sarf — morphology",
        points: [
          "The three-letter root system",
          "Verb patterns and conjugation",
          "Deriving meaning from a root you have never seen before",
        ],
      },
      {
        label: "Level 4 of 5",
        title: "Quranic vocabulary by frequency",
        points: [
          "The words that account for most of the Quran's text",
          "Common Quranic phrases and constructions",
          "Reading short surahs with comprehension rather than translation",
        ],
      },
      {
        label: "Level 5 of 5",
        title: "Reading a juz with understanding",
        points: [
          "Longer surahs and complete ajza",
          "Grammar applied directly to the Quranic text",
          "Working towards reading without a translation alongside",
        ],
      },
    ],
    personas: [
      {
        title: "Reciters who want to understand",
        body: "You can read the Quran fluently and understand almost none of it. This is the single most common reason adults enrol.",
      },
      {
        title: "Complete beginners in Arabic",
        body: "Level 1 assumes nothing. Students who cannot yet read the letters start here rather than in Qaida if their goal is comprehension rather than recitation.",
      },
      {
        title: "Students of Islamic knowledge",
        body: "Anyone intending to study Fiqh or Seerah from primary sources needs Nahw and Sarf first. This is the route in.",
      },
      {
        title: "New Muslims",
        body: "Understanding Salah in the language it is performed in changes the experience of it. Level 4 vocabulary is chosen partly with that in mind.",
      },
    ],
    faqs: [
      {
        q: "Do I need to read Arabic before joining?",
        a: "Not for level 1, which starts at the alphabet. If you already read Arabic, the tutor assesses you in the trial class and places you at the right level rather than starting you from scratch.",
      },
      {
        q: "Will this actually help me understand the Quran?",
        a: "Yes, and sooner than most students expect. A few hundred high-frequency words plus basic sentence grammar covers a surprising proportion of the text — the returns are front-loaded.",
      },
      {
        q: "How long until I can read the Quran with understanding?",
        a: "A solid foundation takes 12 to 18 months of regular study. Reading most of the Quran independently, without a translation to hand, generally takes two to three years.",
      },
      {
        q: "Is this Quranic Arabic or spoken Arabic?",
        a: "Quranic — the classical Arabic of the Quran. The foundations overlap heavily with Modern Standard Arabic, but the vocabulary and examples are drawn from the Quran, not from conversation.",
      },
      {
        q: "Can children learn Arabic this way?",
        a: "From about eight. Below that, letter recognition and recitation are the better use of the time, and the grammar can follow once the child is reading comfortably.",
      },
    ],
    related: ["islamicStudies", "recitation", "hifz"],
    closingCta: {
      title: "Translate one verse without help",
      body: "In the free trial the tutor will take a verse you already know by heart and walk you through what it actually says, word by word. It is the fastest way to see what this course is for.",
      action: "Book a free Arabic class",
    },
    lastUpdated: LAST_UPDATED,
  },

  female: {
    key: "female",
    path: "/female-quran-classes-online",
    icon: "female",
    navLabel: "Female tutors",
    h1: "Female Quran teachers online for sisters and girls",
    primaryKeyword: "female Quran teacher online",
    metaTitle: "Female Quran teacher online for sisters | My Quran Guide",
    metaDescription:
      "Female Quran teachers for sisters and girls: Qaida, recitation, Tajweed, Hifz and Arabic in a private one-to-one class. Two free trial classes.",
    summary:
      "Every course we teach, delivered by a certified female tutor. Requested, guaranteed, no exceptions.",
    intro: [
      "Many sisters, and many parents of daughters, prefer or require a female teacher. That preference is straightforward and we treat it as a hard requirement rather than a preference: when a female tutor is requested, only a female tutor is ever assigned, including for the trial classes and including for any cover lesson.",
      "The full syllabus is available — Noorani Qaida, recitation, Tajweed, Hifz, Islamic studies and Arabic — taught to the same standard by tutors selected the same way. This is not a reduced version of the courses; it is the same courses with a guaranteed tutor.",
    ],
    level: "All levels",
    ages: "Ages 5 and up",
    prerequisite: "Depends on the course chosen",
    sessionMinutes: [30, 45],
    typicalDuration: "Depends on the course chosen",
    usdPerClass: 7,
    syllabusLabel: "Available courses",
    modules: [
      {
        label: "Foundation",
        title: "Noorani Qaida and Quran recitation",
        points: [
          "The Arabic letters and their sounds, from the beginning",
          "Reading from the mushaf with live correction",
          "Suitable for girls from age five and for adult beginners",
        ],
      },
      {
        label: "Recitation",
        title: "Tajweed",
        points: [
          "The full six-module Tajweed syllabus",
          "Makharij, Sifaat, Noon and Meem Sakinah, Madd and Waqf",
        ],
      },
      {
        label: "Memorisation",
        title: "Hifz",
        points: [
          "The Sabaq, Sabaqi and Manzil cycle with a Hafiza tutor",
          "Selected juz or the complete Quran",
        ],
      },
      {
        label: "Knowledge",
        title: "Islamic studies and Quranic Arabic",
        points: ["Belief, worship, Seerah, manners and Fiqh", "Nahw and Sarf, taught in English"],
      },
    ],
    personas: [
      {
        title: "Girls aged 5 to 17",
        body: "For parents who want their daughter taught by a woman. The same tutor takes every session, so there is one adult to get to know rather than a rota.",
      },
      {
        title: "Adult sisters",
        body: "Whether the reason is religious, practical or simply comfort, no explanation is asked for and none is needed.",
      },
      {
        title: "New Muslim women",
        body: "Starting from the beginning, in English, with a tutor who has taught reverts before and knows which questions come first.",
      },
      {
        title: "Mothers learning with their daughters",
        body: "A shared session, or consecutive slots with the same tutor. Many mothers find learning alongside their child is what finally makes it happen.",
      },
    ],
    faqs: [
      {
        q: "Are all tutors for these classes female?",
        a: "Yes, without exception. When a female tutor is requested, only certified female tutors are assigned — for the trial classes, for regular classes, and for any cover lesson if your usual tutor is unavailable.",
      },
      {
        q: "Can my young daughter take these classes?",
        a: "Yes, from age five. Tutors who teach young children are selected specifically for that, and sessions for the youngest students are kept to 30 minutes.",
      },
      {
        q: "Are all courses available with a female tutor?",
        a: "All of them: Noorani Qaida, Quran recitation, Tajweed, Hifz, Islamic studies and Arabic. Nothing is restricted to male tutors.",
      },
      {
        q: "Can new Muslim sisters join?",
        a: "Yes, and it is a common starting point. Classes are one-to-one and taught in English, so you can begin at whatever level you are actually at.",
      },
      {
        q: "Will my free trial be with a female tutor?",
        a: "Yes. Select a female tutor when you book and both trial classes will be with a certified female tutor. If that is not what happens, tell us and we will reschedule at our cost.",
      },
    ],
    related: ["qaida", "tajweed", "islamicStudies"],
    closingCta: {
      title: "Meet your tutor before you commit",
      body: "Both trial classes are free and both are with the female tutor you would continue with. If she is not the right fit, we will match you with someone else.",
      action: "Book a free class with a female tutor",
    },
    lastUpdated: LAST_UPDATED,
  },
};

export type Audience = "children" | "adults";
export type StartLevel = "beginner" | "intermediate" | "advanced";

/**
 * Filter facets for /courses.
 *
 * Tutor gender is deliberately not a facet: every course is available with a
 * male or a female tutor, so filtering on it would return everything and teach
 * the visitor that the filters don't do anything.
 */
export const COURSE_FACETS: Record<
  CourseKey,
  { audience: ReadonlyArray<Audience>; startLevel: ReadonlyArray<StartLevel> }
> = {
  qaida: { audience: ["children", "adults"], startLevel: ["beginner"] },
  recitation: { audience: ["children", "adults"], startLevel: ["beginner", "intermediate"] },
  tajweed: {
    audience: ["children", "adults"],
    startLevel: ["beginner", "intermediate", "advanced"],
  },
  hifz: { audience: ["children", "adults"], startLevel: ["intermediate", "advanced"] },
  islamicStudies: {
    audience: ["children", "adults"],
    startLevel: ["beginner", "intermediate"],
  },
  arabic: {
    audience: ["children", "adults"],
    startLevel: ["beginner", "intermediate", "advanced"],
  },
  female: {
    audience: ["children", "adults"],
    startLevel: ["beginner", "intermediate", "advanced"],
  },
};

/** Display order for the course grid and the /courses index. */
export const COURSE_ORDER: ReadonlyArray<CourseKey> = [
  "qaida",
  "recitation",
  "tajweed",
  "hifz",
  "islamicStudies",
  "arabic",
  "female",
];

export const COURSE_LIST: ReadonlyArray<Course> = COURSE_ORDER.map((key) => COURSES[key]);

export function getCourse(key: CourseKey): Course {
  return COURSES[key];
}

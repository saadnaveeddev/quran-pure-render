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

const LAST_UPDATED = "2026-08-27";

export const COURSES: Record<CourseKey, Course> = {
  qaida: {
    key: "qaida",
    path: "/noorani-qaida-online",
    icon: "qaida",
    navLabel: "Noorani Qaida",
    h1: "Online Noorani Qaida Classes for Kids, Beginners & New Muslims | My Quran Guide",
    term: { en: "Noorani Qaida", ar: "نوراني قاعدة" },
    primaryKeyword: "Noorani Qaida online",
    metaTitle: "Online Noorani Qaida Classes for Beginners | My Quran Guide",
    metaDescription:
      "Learn Noorani Qaida online with certified tutors - perfect for kids, beginners & new Muslims. Flexible timings. Start your 2-day free trial today!",
    summary:
      "For beginners and children aged 5+. Covers Arabic letters, pronunciation, and sounds — the foundation before reading the Quran.",
    intro: [
      "Noorani Qaida is the very first step on the journey of learning to read the Quran. Before a student can recite even a single verse, they must master the Arabic alphabet, its sounds, and basic pronunciation rules — and that is exactly what our online Noorani Qaida classes are designed to do.",
      "At My Quran Guide, our certified tutors make learning Noorani Qaida simple, engaging, and effective — for young children as young as 5, for adult beginners, and for new Muslims taking their very first steps in Islam. Classes are available online via Zoom, Skype, or Google Meet at timings that suit your schedule. Think of Noorani Qaida as the ABC of Quranic Arabic. Without it, students cannot read the Quran correctly. With it, they build a solid foundation that makes every future step in their Quran learning journey much easier and more confident.",
    ],
    level: "Complete beginner",
    ages: "Kids (5+), adult beginners, new Muslims",
    prerequisite: "None",
    sessionMinutes: [30, 45],
    typicalDuration: "3 to 6 months (flexible — at student's own pace)",
    usdPerClass: 5,
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
        title: "Kids (Age 5-12)",
        body: "Perfect starting point for young children. Our tutors use child-friendly teaching methods that make learning Arabic letters fun and engaging.",
      },
      {
        title: "Adult Beginners",
        body: "Never too late to start. Our patient tutors guide adult beginners step by step without any pressure or judgment.",
      },
      {
        title: "New Muslims",
        body: "If you have recently accepted Islam and want to begin learning the Quran from scratch, Noorani Qaida is your ideal starting point.",
      },
      {
        title: "Returning Students",
        body: "If you learned the Arabic alphabet years ago but want to revisit and correct your pronunciation, this course will refresh and strengthen your foundation.",
      },
    ],
    faqs: [
      {
        q: "What age can my child start Noorani Qaida?",
        a: "Children can start Noorani Qaida from as young as 4 to 5 years old. Our tutors are experienced in teaching very young children and use age-appropriate methods to make learning enjoyable and effective.",
      },
      {
        q: "How long does it take to complete Noorani Qaida?",
        a: "On average, students complete Noorani Qaida in 3 to 6 months depending on their age, frequency of classes, and pace of learning. We do not rush students — progress is always at the student's own comfortable pace.",
      },
      {
        q: "Do I need any prior knowledge of Arabic to join?",
        a: "No prior knowledge is required. Noorani Qaida is designed specifically for complete beginners. We start from the very first Arabic letter and build up gradually.",
      },
      {
        q: "Can adults learn Noorani Qaida online?",
        a: "Absolutely. Many adults at My Quran Guide have successfully learned Noorani Qaida and moved on to Quran recitation. Our tutors adjust their teaching style to suit both children and adults.",
      },
      {
        q: "What happens after I finish Noorani Qaida?",
        a: "After completing Noorani Qaida, students naturally progress to Quran Recitation classes where they begin reading directly from the Quran with proper pronunciation and Tajweed rules.",
      },
    ],
    related: ["recitation", "tajweed", "islamicStudies"],
    closingCta: {
      title: "Start Your Noorani Qaida Journey Today — 2 Days Free",
      body: "Every great Quran reciter started exactly where you are right now — with the very first Arabic letter. Book your 2-day free Noorani Qaida trial at My Quran Guide today and take the most important first step on your Quran learning journey.",
      action: "Book Free Noorani Qaida Trial — 100% Free",
    },
    lastUpdated: LAST_UPDATED,
  },

  recitation: {
    key: "recitation",
    path: "/online-quran-recitation-classes",
    icon: "recitation",
    navLabel: "Quran recitation",
    h1: "Online Quran Recitation Classes for Kids, Teenagers & Adults — All Levels | My Quran Guide",
    term: { en: "Nazra", ar: "نظرة" },
    primaryKeyword: "online Quran recitation classes",
    metaTitle: "Online Quran Recitation Classes | My Quran Guide",
    metaDescription:
      "Learn to read the Quran fluently with certified tutors. Classes for kids, teenagers & adults, all levels. Book your 2-day free trial today!",
    summary:
      "Learn to read the Quran fluently and correctly, from first-time readers to those polishing their fluency.",
    intro: [
      "Reading the Quran is one of the most rewarding acts a Muslim can perform. Whether you are reading for the first time or want to improve your existing recitation, My Quran Guide offers structured online Quran recitation classes for students of all ages and all levels — taught by certified tutors who are passionate about helping every student connect with the Words of Allah.",
      "Our online Quran recitation classes are available via Zoom, Skype, or Google Meet at flexible timings that fit your schedule. Choose your preferred tutor, choose your pace, and begin your Quran recitation journey today with a 2-day free trial — completely free.",
    ],
    level: "All levels — beginner to advanced",
    ages: "Kids, teenagers, adults — all ages",
    prerequisite: "Basic Arabic letters (Noorani Qaida or equivalent)",
    sessionMinutes: [30, 45],
    typicalDuration: "6 to 18 months (flexible — student's own pace)",
    usdPerClass: 6,
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
        title: "Complete Beginners",
        body: "Students who have completed Noorani Qaida and are ready to start reading directly from the Quran for the first time.",
      },
      {
        title: "Intermediate Students",
        body: "Students who can read the Quran but want to improve their fluency, speed, and pronunciation.",
      },
      {
        title: "Adults Returning to Quran",
        body: "Adults who learned to read the Quran in childhood but have lost fluency and want to reconnect with their recitation.",
      },
      {
        title: "Kids & Teenagers",
        body: "Young students progressing from Noorani Qaida into full Quran recitation with structured guidance.",
      },
    ],
    faqs: [
      {
        q: "Do I need to complete Noorani Qaida first?",
        a: "If you are a complete beginner who does not know the Arabic alphabet, yes — Noorani Qaida is the recommended starting point. If you already know the Arabic letters, you can join Quran Recitation classes directly.",
      },
      {
        q: "How long does it take to read the full Quran?",
        a: "This depends on the student's starting level, frequency of classes, and pace. On average, a beginner student reading 3-5 days per week completes full Quran recitation within our typical 6 to 18 month range. Advanced students may do it faster.",
      },
      {
        q: "Will my tutor correct my mistakes during recitation?",
        a: "Yes. Your tutor will listen carefully to your recitation during every class and provide real-time correction of pronunciation and recitation mistakes. This personalized feedback is one of the key benefits of one-on-one online classes.",
      },
      {
        q: "Can I learn Quran recitation as an adult?",
        a: "Absolutely. Many of our students are adults who are learning or relearning Quran recitation. Our tutors are experienced in teaching adults and create a comfortable, judgment-free environment.",
      },
      {
        q: "Can my child and I take classes together?",
        a: "Yes. My Quran Guide offers both individual and family-friendly scheduling. Contact us to discuss the best arrangement for you and your family.",
      },
    ],
    related: ["qaida", "tajweed", "hifz"],
    closingCta: {
      title: "Start Reading the Quran with Confidence — 2 Days Free",
      body: "The Quran is waiting to be read by you — fluently, correctly, and beautifully. Book your 2-day free Quran Recitation trial at My Quran Guide today and take the next step on your Quran journey with a certified tutor by your side.",
      action: "Book Free Quran Recitation Trial — 100% Free",
    },
    lastUpdated: LAST_UPDATED,
  },

  tajweed: {
    key: "tajweed",
    path: "/online-tajweed-classes",
    icon: "tajweed",
    navLabel: "Tajweed",
    h1: "Online Tajweed Classes — Learn to Recite the Quran Correctly | My Quran Guide",
    term: { en: "Tajweed", ar: "تجويد" },
    primaryKeyword: "online Tajweed classes",
    metaTitle: "Online Tajweed Classes - Learn Quran Rules | My Quran Guide",
    metaDescription:
      "Master Tajweed online with certified tutors - Makharij, Sifaat, Madd & Ghunna rules for correct recitation. All levels. Book your free trial!",
    summary:
      "The rules of correct pronunciation — Makharij and Tajweed rules taught so every word is recited as it was revealed.",
    intro: [
      "Tajweed is the science and art of reciting the Quran with proper rules of pronunciation, rhythm, and articulation — exactly as it was revealed to the Prophet Muhammad (PBUH). The word Tajweed comes from the Arabic root meaning 'to do well' or 'to improve.'",
      "Reciting the Quran with Tajweed is not just recommended — it is obligatory for every Muslim who reads the Quran. Every letter of the Quran has a specific point of articulation (Makharij) and characteristics (Sifaat) that must be observed to recite it correctly. Our online Tajweed classes at My Quran Guide teach you exactly that — in a clear, structured, and easy-to-understand way.",
    ],
    level: "Beginner to advanced",
    ages: "Kids, teenagers & adults",
    prerequisite: "Ability to read basic Arabic (Noorani Qaida or Quran Recitation)",
    sessionMinutes: [30, 45],
    typicalDuration: "6 to 12 months for basic Tajweed (flexible pace)",
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
        title: "Students Who Can Read Arabic",
        body: "If you can already read Arabic but want to perfect your Tajweed rules, this course will transform your recitation.",
      },
      {
        title: "Adults Wanting to Improve",
        body: "Many adults recite the Quran daily but have never formally learned Tajweed. This course corrects and elevates their recitation.",
      },
      {
        title: "Kids & Teenagers",
        body: "Learning Tajweed at a young age builds lifelong correct recitation habits. Our tutors use engaging methods for young learners.",
      },
      {
        title: "Imams & Community Leaders",
        body: "Those who lead prayers or recite the Quran publicly benefit greatly from formal Tajweed training.",
      },
    ],
    faqs: [
      {
        q: "Do I need to know Arabic to learn Tajweed?",
        a: "You need to be able to read basic Arabic letters before starting Tajweed. If you cannot read Arabic yet, we recommend starting with our Noorani Qaida course first.",
      },
      {
        q: "How long does it take to learn Tajweed?",
        a: "Basic Tajweed rules can be learned in 6 to 12 months with regular classes. Mastering all Tajweed rules and applying them consistently during recitation is an ongoing journey that improves over time.",
      },
      {
        q: "Can I learn Tajweed while also reading the Quran?",
        a: "Yes. Most of our students learn Tajweed rules and simultaneously apply them during their Quran recitation. Our tutors integrate both seamlessly.",
      },
      {
        q: "Is Tajweed only for advanced students?",
        a: "No. Tajweed classes at My Quran Guide are available for beginners, intermediate, and advanced students. We start from the very basics and progress at your pace.",
      },
      {
        q: "Will I receive a certificate after completing Tajweed?",
        a: "Upon completing the full Tajweed course, you will receive a tutor-verified progress certificate from My Quran Guide recognizing your achievement.",
      },
    ],
    related: ["recitation", "hifz", "qaida"],
    closingCta: {
      title: "Perfect Your Quran Recitation — Start with 2 Free Classes",
      body: "Every word of the Quran deserves to be recited exactly as it was revealed. Book your 2-day free Tajweed trial at My Quran Guide today and begin your journey toward beautiful, correct, and confident Quran recitation.",
      action: "Book Free Tajweed Trial — 100% Free",
    },
    lastUpdated: LAST_UPDATED,
  },

  hifz: {
    key: "hifz",
    path: "/online-hifz-classes",
    icon: "hifz",
    navLabel: "Hifz",
    h1: "Online Hifz Program — Memorize the Quran with Certified Huffaz Tutors | My Quran Guide",
    term: { en: "Hifz", ar: "حفظ" },
    primaryKeyword: "online Hifz classes",
    metaTitle: "Online Hifz Program - Quran Memorization | My Quran Guide",
    metaDescription:
      "Memorize the Quran online with experienced Huffaz tutors. Structured plan, progress tracking & Hifz certificate. Start your free trial today!",
    summary:
      "A structured memorisation program guided by Huffaz tutors, for children and adults.",
    intro: [
      "Hifz is the Arabic word for memorization — specifically, the memorization of the complete Quran. A person who has memorized the entire Quran is called a Hafiz (male) or Hafiza (female). Completing Hifz is considered one of the greatest achievements and honors in a Muslim's life, and carries immense reward both in this world and the hereafter.",
      "At My Quran Guide, our online Hifz program is guided by experienced Huffaz tutors who use a proven, structured memorization system to help students — both children and adults — memorize the Quran at their own comfortable pace, from the comfort of their home. We use the Sabaq, Sabaqi and Manzil system — the most proven and time-tested Hifz method used by traditional Islamic institutions worldwide.",
    ],
    level: "Intermediate to advanced",
    ages: "Kids & adults — all ages",
    prerequisite: "Ability to read Quran with basic Tajweed",
    sessionMinutes: [45],
    typicalDuration: "3 to 5 years full Hifz (flexible — student's own pace)",
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
        title: "Children (6-15)",
        body: "The ideal age to begin Hifz. Young minds memorize quickly and retain well. Our child-friendly Huffaz tutors make the journey engaging and motivating.",
      },
      {
        title: "Teenagers (16-18)",
        body: "Teenagers can absolutely complete Hifz with dedication and the right guidance. Many of our teenage students have achieved full Hifz with our program.",
      },
      {
        title: "Adults (18+)",
        body: "It is never too late to memorize the Quran. Adult students at My Quran Guide have successfully memorized partial or full Quran with our structured program.",
      },
      {
        title: "Students memorising selected juz",
        body: "Not everyone is aiming at the full Quran. Juz Amma, Surah Yasin and Surah Al-Kahf are common goals and are treated as complete programmes in their own right.",
      },
    ],
    faqs: [
      {
        q: "What is the minimum age to start Hifz?",
        a: "We recommend starting Hifz from age 6 to 7 when the child can comfortably read the Quran. However, students of all ages are welcome in our program.",
      },
      {
        q: "How long does it take to complete full Hifz?",
        a: "Full Hifz typically takes 3 to 5 years depending on the student's age, frequency of classes, and daily revision habits. Some dedicated students complete it faster. We never rush — quality of memorization is always the priority.",
      },
      {
        q: "My child has never memorized Quran before — can they start?",
        a: "Yes. Any student who can read the Quran with basic Tajweed can begin our Hifz program. Our tutors will assess the student's readiness at the free trial class and advise accordingly.",
      },
      {
        q: "Do I need to revise daily outside of class?",
        a: "Yes. Daily revision outside of class is essential for successful Hifz. Our tutors will guide students on how much to revise daily and provide a revision plan tailored to each student's capacity.",
      },
      {
        q: "Will my child receive a Hifz certificate?",
        a: "Yes. Students who successfully complete the full memorization of the Quran at My Quran Guide receive an official Hifz certificate — a proud milestone for the student and the entire family.",
      },
    ],
    related: ["tajweed", "recitation", "arabic"],
    closingCta: {
      title: "Begin the Greatest Journey — Memorize the Quran",
      body: "The memorization of the Quran is a gift that lasts a lifetime — and beyond. Book your 2-day free Hifz trial at My Quran Guide today and take the first step toward becoming a Hafiz or Hafiza with the guidance of our experienced and dedicated tutors.",
      action: "Book Free Hifz Trial — 100% Free",
    },
    lastUpdated: LAST_UPDATED,
  },

  islamicStudies: {
    key: "islamicStudies",
    path: "/online-islamic-studies",
    icon: "islamicStudies",
    navLabel: "Islamic studies",
    h1: "Online Islamic Studies Classes for Kids, Adults & New Muslims | My Quran Guide",
    term: { en: "Fiqh", ar: "فقه" },
    primaryKeyword: "online Islamic studies classes",
    metaTitle: "Online Islamic Studies Classes | My Quran Guide",
    metaDescription:
      "Learn Islam online - Pillars of Islam, Seerah, Fiqh & ethics. For kids, adults & new Muslims. Book your 2-day free trial today!",
    summary:
      "Fiqh, Seerah, and Islamic ethics — a complete Islamic education at home, beyond Quran alone.",
    intro: [
      "Islam is more than just reciting the Quran — it is a complete way of life. Understanding the fundamentals of Islam, the life of the Prophet (PBUH), Islamic rulings, and ethical values is essential for every Muslim seeking to live according to the teachings of Allah and His Messenger.",
      "My Quran Guide offers comprehensive online Islamic Studies classes for children, teenagers, adults, and new Muslims — taught in English by certified tutors from Pakistan. Whether you are just beginning your Islamic education or want to deepen your existing knowledge, our Islamic Studies program has a course for you.",
    ],
    level: "All levels — beginner to advanced",
    ages: "Kids, teenagers, adults & new Muslims",
    prerequisite: "None",
    sessionMinutes: [30, 45],
    typicalDuration: "Ongoing — module by module at student's pace",
    usdPerClass: 6,
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
        title: "Kids & Teenagers",
        body: "Building a strong Islamic foundation from a young age. Our tutors use engaging, age-appropriate teaching methods for young learners.",
      },
      {
        title: "Adults",
        body: "Deepening their Islamic knowledge and understanding of daily Islamic rulings and ethics.",
      },
      {
        title: "New Muslims",
        body: "Learning the basics of Islam in a supportive, clear, and welcoming environment taught entirely in English.",
      },
      {
        title: "Muslim Reverts",
        body: "Reconnecting with Islamic knowledge and building confidence in their practice of Islam.",
      },
    ],
    faqs: [
      {
        q: "Can new Muslims join Islamic Studies classes?",
        a: "Absolutely. Our Islamic Studies program is especially designed to welcome new Muslims with no prior knowledge of Islam. Classes are taught in English and our tutors are patient, supportive, and understanding.",
      },
      {
        q: "Can my child join Islamic Studies alongside Quran classes?",
        a: "Yes. Many families at My Quran Guide combine Quran classes with Islamic Studies for a complete Islamic education. Contact us to arrange a suitable schedule for both.",
      },
      {
        q: "Is there a set curriculum or can I choose what to study?",
        a: "We have a structured curriculum but also accommodate individual preferences. If you have specific topics you want to focus on — such as Salah, Seerah, or Fiqh — let your tutor know and they will tailor the classes accordingly.",
      },
      {
        q: "How long does it take to complete Islamic Studies?",
        a: "Islamic Studies is an ongoing journey. Our course is structured in modules that can each be completed in a few months. Students can continue for as long as they want — there is always more to learn.",
      },
      {
        q: "Are the classes suitable for non-Arabic speakers?",
        a: "Yes. All Islamic Studies classes at My Quran Guide are taught in English. Arabic terms are always explained clearly in English so students understand every concept fully.",
      },
    ],
    related: ["arabic", "qaida", "female"],
    closingCta: {
      title: "Strengthen Your Islamic Knowledge — 2 Days Free",
      body: "Islam is a complete way of life — and understanding it deeply changes everything. Book your 2-day free Islamic Studies trial at My Quran Guide today and begin building the Islamic knowledge and confidence that will serve you and your family for a lifetime.",
      action: "Book Free Islamic Studies Trial — 100% Free",
    },
    lastUpdated: LAST_UPDATED,
  },

  arabic: {
    key: "arabic",
    path: "/online-arabic-language-classes",
    icon: "arabic",
    navLabel: "Quranic Arabic",
    h1: "Online Arabic Language Classes — Learn Quranic Arabic from Scratch | My Quran Guide",
    term: { en: "Nahw", ar: "نحو" },
    primaryKeyword: "Quranic Arabic classes online",
    metaTitle: "Online Quranic Arabic Language Classes | My Quran Guide",
    metaDescription:
      "Learn Quranic Arabic online, taught in English, beginner to advanced. Book your 2-day free trial with My Quran Guide today!",
    summary:
      "Quranic Arabic from scratch, so students connect with the meaning of the Quran, not just the recitation.",
    intro: [
      "The Quran was revealed in the Arabic language — and understanding even a portion of it in its original language transforms the experience of recitation entirely. When you understand what you are reciting, every prayer becomes more meaningful, every verse more powerful, and every word of Allah more personal.",
      "My Quran Guide offers online Arabic Language classes focused on Quranic Arabic — the language of the Quran — taught in English by certified tutors. Whether you are a complete beginner or have some basic Arabic knowledge, our structured Arabic program will help you understand and connect with the Quran on a deeper level.",
    ],
    level: "Beginner to advanced",
    ages: "Kids, teenagers & adults — all ages",
    prerequisite: "None for level 1; letter recognition helps",
    sessionMinutes: [30, 45],
    typicalDuration: "6 to 24 months depending on level (flexible pace)",
    usdPerClass: 7,
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
        title: "Quran Readers Who Want to Understand",
        body: "Students who can recite the Quran but want to understand its meaning directly in Arabic without relying on translation.",
      },
      {
        title: "Complete Arabic Beginners",
        body: "Students with no prior knowledge of Arabic who want to learn from scratch in a structured and supportive environment.",
      },
      {
        title: "Kids & Teenagers",
        body: "Young learners who want to connect with the language of the Quran from an early age.",
      },
      {
        title: "New Muslims",
        body: "New Muslims who want to understand the Quran and daily Islamic prayers in their original Arabic language.",
      },
    ],
    faqs: [
      {
        q: "Do I need to know how to read Arabic before joining?",
        a: "Not necessarily. If you are a complete beginner, we start from the Arabic alphabet in Level 1. If you can already read Arabic, we assess your level and place you in the appropriate module.",
      },
      {
        q: "Will learning Arabic help me understand the Quran?",
        a: "Yes — significantly. Even learning the most common words and basic grammar structures in Quranic Arabic transforms your understanding of the Quran during recitation and prayer.",
      },
      {
        q: "How long does it take to understand the Quran in Arabic?",
        a: "With regular classes and daily practice, students can build a strong foundation in Quranic Arabic in 12 to 18 months. Understanding the majority of the Quran independently typically takes 2 to 3 years.",
      },
      {
        q: "Is this spoken Arabic or Quranic Arabic?",
        a: "Our primary focus is Quranic Arabic — the classical Arabic of the Quran. While the foundations overlap with Modern Standard Arabic, our lessons are specifically designed around Quranic vocabulary and grammar.",
      },
      {
        q: "Can children learn Arabic language online?",
        a: "Absolutely. We teach Arabic to children from age 5 and above using age-appropriate, engaging methods. Learning Arabic at a young age is especially effective for long-term retention.",
      },
    ],
    related: ["islamicStudies", "recitation", "hifz"],
    closingCta: {
      title: "Understand the Quran in Its Own Language — 2 Days Free",
      body: "Imagine understanding every word you recite in Salah. Imagine reading the Quran and knowing exactly what Allah is saying to you. Book your 2-day free Arabic Language trial at My Quran Guide today and begin the beautiful journey of connecting with the Quran in its original language.",
      action: "Book Free Arabic Language Trial — 100% Free",
    },
    lastUpdated: LAST_UPDATED,
  },

  female: {
    key: "female",
    path: "/female-quran-classes-online",
    icon: "female",
    navLabel: "Female tutors",
    h1: "Female Quran Classes Online — Learn with Certified Female Tutors | My Quran Guide",
    primaryKeyword: "female Quran teacher online",
    metaTitle: "Female Quran Classes Online - Female Tutors | My Quran Guide",
    metaDescription:
      "Learn Quran online with certified female tutors - for sisters, girls & new Muslim women. All courses available. Book your free trial today!",
    summary:
      "Dedicated classes with female tutors for sisters and young girls who prefer a female teacher.",
    intro: [
      "At My Quran Guide, we understand that many sisters, young girls, and female new Muslims feel more comfortable and focused when learning with a female tutor. That is why we offer dedicated Female Quran Classes — taught exclusively by certified female tutors in a safe, comfortable, and supportive online learning environment.",
      "Our female tutors cover all Quran and Islamic courses — from Noorani Qaida for complete beginners to advanced Tajweed, Hifz, Islamic Studies, and Arabic Language. Every female tutor at My Quran Guide is certified in Islamic teaching and experienced in online Quran education, ensuring the highest quality of learning for every sister.",
    ],
    level: "All levels — beginner to advanced",
    ages: "Sisters, girls (5+), female new Muslims",
    prerequisite: "Depends on the course chosen",
    sessionMinutes: [30, 45],
    typicalDuration: "Depends on the course chosen",
    usdPerClass: 6,
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
        title: "Young Girls (Age 5-17)",
        body: "Parents who want their daughters to learn Quran with a female tutor in a safe and appropriate environment.",
      },
      {
        title: "Adult Sisters (18+)",
        body: "Women who prefer to learn Quran and Islamic Studies with a female teacher for personal or religious reasons.",
      },
      {
        title: "New Muslim Women",
        body: "Sisters who have recently accepted Islam and want to begin their Quran and Islamic education with a supportive female tutor who understands their journey.",
      },
      {
        title: "Mothers Learning with Children",
        body: "Mothers who want to learn Quran alongside their daughters in a comfortable, family-friendly environment.",
      },
    ],
    faqs: [
      {
        q: "Are all tutors for these classes female?",
        a: "Yes — absolutely. When you request a female tutor at My Quran Guide, only certified female tutors are assigned to your classes. We guarantee this without exception.",
      },
      {
        q: "Can my young daughter take female Quran classes online?",
        a: "Yes. Our female Quran classes are available for girls from as young as 5 years old. Our female tutors are experienced in teaching young girls and use child-friendly, engaging methods.",
      },
      {
        q: "Are all courses available with female tutors?",
        a: "Yes. All courses at My Quran Guide — Noorani Qaida, Quran Recitation, Tajweed, Hifz, Islamic Studies, and Arabic Language — are available with certified female tutors.",
      },
      {
        q: "Can new Muslim sisters join female Quran classes?",
        a: "Absolutely. We especially welcome new Muslim sisters. Our female tutors are patient, understanding, and experienced in supporting women who are new to Islam on their Quran and Islamic learning journey.",
      },
      {
        q: "Can I take the free trial with a female tutor?",
        a: "Yes. When booking your 2-day free trial, simply mention that you require a female tutor and we will assign a certified female tutor for your trial classes — guaranteed.",
      },
    ],
    related: ["qaida", "tajweed", "islamicStudies"],
    closingCta: {
      title: "Learn Quran with a Certified Female Tutor — 2 Days Free",
      body: "Every sister deserves to learn the Quran in an environment that is comfortable, safe, and truly supportive. Book your 2-day free Female Quran Class trial at My Quran Guide today — a certified female tutor is ready and waiting to guide you on your Quran learning journey.",
      action: "Book Free Female Quran Class Trial — 100% Free",
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

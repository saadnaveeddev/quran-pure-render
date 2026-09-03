import type { LandingPage } from "@/content/landing";

/**
 * Audience landing pages: kids, adults, beginners and new Muslims.
 *
 * Copy is taken from the final audience documents (27 Aug 2026).
 */

const LAST_UPDATED = "2026-08-27";

export const KIDS_PAGE: LandingPage = {
  path: "/online-quran-classes-for-kids",
  breadcrumbLabel: "Quran classes for kids",
  heroLabel: "Ages 5 to 12",
  h1: "Online Quran Classes for Kids — Fun, Engaging & Certified | My Quran Guide",
  intro:
    "Every parent wants their child to grow up connected to the Quran. But finding a qualified, trustworthy, and child-friendly Quran teacher — one who teaches online at a time that works for your family — can be difficult. My Quran Guide makes it simple. We offer online Quran classes for kids aged 5 to 12 with certified male and female tutors who are experienced in teaching young children. Our tutors are patient, encouraging, and use age-appropriate teaching methods that make learning the Quran enjoyable for every child.",
  metaTitle: "Online Quran Classes for Kids | My Quran Guide",
  metaDescription:
    "Give your child the gift of the Quran - online classes for kids aged 5-12 with certified tutors. Flexible timings. Book a 2-day free trial today!",
  primaryKeyword: "online Quran classes for kids",
  sections: [
    {
      label: "Why start Quran early?",
      heading: "The Importance of Quran Education for Children",
      paragraphs: [
        "Childhood is the best time to begin Quran learning. Young minds absorb information faster, form habits more easily, and retain what they learn for life. A child who begins learning the Quran at age 5 or 6 has the potential to complete Quran recitation, learn Tajweed, and even begin Hifz before they reach their teenage years.",
        "At My Quran Guide, we make the most of this precious window by providing structured, consistent, and engaging online Quran classes that build your child's Quran foundation step by step — from the very first Arabic letter to fluent Quran recitation.",
      ],
    },
    {
      label: "Quran courses for kids",
      heading: "What Your Child Will Learn at My Quran Guide",
      paragraphs: [
        "Your child can start at the right course for their age and level, then move forward when they are ready.",
      ],
      list: [
        "Noorani Qaida — First step: Arabic letters, sounds and basic reading",
        "Quran Recitation — Reading the Quran fluently and correctly",
        "Tajweed — Proper rules of Quran pronunciation",
        "Hifz Program — Quran memorization, guided by Huffaz tutors",
        "Islamic Studies — Pillars of Islam, Seerah and Islamic ethics for kids",
        "Arabic Language — Quranic Arabic from scratch, age-appropriate",
      ],
    },
    {
      label: "How our kids Quran classes work",
      heading: "Simple, Safe & Effective Online Learning for Children",
      paragraphs: [
        "Step 1 — Book the Free Trial. Book your child's 2-day free trial class by filling in our simple form. Tell us your child's age, current level, and preferred timing — and we will take care of the rest.",
        "Step 2 — Meet the Tutor. We match your child with the most suitable certified male or female tutor based on their age, level, and your preferences. The tutor introduces themselves and makes your child feel comfortable before the learning begins.",
        "Step 3 — Begin Learning the Quran. Your child joins their online class via Zoom, Skype, or Google Meet — on a device they are already comfortable using. Classes are live, interactive, and designed to keep young learners engaged throughout.",
        "Step 4 — Track Progress. After every class, parents can request a progress update from the tutor. We believe in keeping parents informed and involved in their child's Quran journey every step of the way.",
      ],
    },
    {
      label: "Why parents choose My Quran Guide",
      heading: "Why Parents Choose My Quran Guide for Their Kids",
      paragraphs: [
        "Child-Friendly Certified Tutors. Our tutors are specifically experienced in teaching children aged 5 to 12. They know how to keep young learners focused, motivated, and enjoying every class.",
        "Male & Female Tutors Available. Parents choose whether their child learns with a male or female tutor. Many parents of young girls prefer a certified female tutor — and we fully accommodate that.",
        "Flexible Timings for Busy Families. Classes are available morning, evening, and on weekends — 2 to 6 days per week. We work around your family's schedule, not the other way around.",
        "One-on-One Personalized Attention. Unlike a classroom, our one-on-one classes mean the tutor's complete focus is on your child. Every mistake is gently corrected and every achievement is celebrated.",
        "Safe Online Environment. All classes are conducted on secure platforms — Zoom, Skype, or Google Meet. Parents are always welcome to observe classes at any time.",
      ],
    },
  ],
  faqs: [
    {
      q: "What age can my child start online Quran classes?",
      a: "Children can start from as young as 4 to 5 years old. Our tutors are experienced in teaching very young children and use child-friendly methods that make learning Arabic letters fun and engaging from day one.",
    },
    {
      q: "How long is each class for kids?",
      a: "Classes are 30 or 45 minutes long — parents choose what suits their child. For very young children, 30 minutes is usually ideal. Older children and teenagers can comfortably attend 45-minute sessions.",
    },
    {
      q: "Can I watch my child's class?",
      a: "Yes, absolutely. Parents are always welcome to observe their child's online Quran class at any time. We believe parental involvement is a key part of a child's Quran learning journey.",
    },
    {
      q: "What if my child loses interest or finds it difficult?",
      a: "Our tutors are trained to keep young learners motivated and engaged. If your child is finding something difficult, the tutor will slow down and use different teaching methods to help. We never rush — every child learns at their own pace.",
    },
    {
      q: "Is the free trial really free for my child?",
      a: "Yes — 100% free. Your child gets 2 complete online Quran classes with a certified tutor at absolutely no cost and no commitment. It is a genuine opportunity to experience our teaching quality before enrolling.",
    },
  ],
  relatedCourses: ["qaida", "recitation", "hifz"],
  closing: {
    title: "Give Your Child the Gift of the Quran — Starting Today",
    body: "There is no greater gift you can give your child than a connection to the Quran. My Quran Guide makes it easy, flexible, and accessible — with certified tutors, child-friendly teaching, and a 2-day free trial so your child can experience it before you commit to anything.",
    action: "Book My Child's 2-Day Free Trial Now",
  },
  lastUpdated: LAST_UPDATED,
};

export const ADULTS_PAGE: LandingPage = {
  path: "/online-quran-classes-for-adults",
  breadcrumbLabel: "Quran classes for adults",
  heroLabel: "Any age, any level",
  h1: "Online Quran Classes for Adults — Learn the Quran at Your Own Pace | My Quran Guide",
  intro:
    "It is never too late to learn the Quran. Whether you are an adult who never had the opportunity to learn the Quran properly, someone who learned in childhood but has lost fluency, or a professional with a busy schedule who needs truly flexible class timings — My Quran Guide has been designed with you in mind. Our online Quran classes for adults are taught by certified tutors who understand the unique needs and challenges of adult learners. No judgment. No pressure. Just patient, structured, and effective Quran teaching — at your pace, on your schedule.",
  metaTitle: "Online Quran Classes for Adults | My Quran Guide",
  metaDescription:
    "Never too late to learn the Quran. Certified tutors, flexible evening timings, all levels welcome. Book your 2-day free trial today!",
  primaryKeyword: "online Quran classes for adults",
  sections: [
    {
      label: "It is never too late",
      heading: "Why Adults Choose to Learn the Quran Now",
      paragraphs: [
        "Many Muslim adults carry a quiet wish in their hearts — to read the Quran properly, to understand what they recite in their daily prayers, to memorize a few Surahs correctly, or to finally learn the Tajweed rules they never got to study. Whatever your reason, that wish is completely valid — and My Quran Guide is here to help you fulfill it.",
        "Adult students at My Quran Guide come from all walks of life — working professionals, stay-at-home parents, grandparents, and even new Muslims. What they all have in common is a sincere desire to connect with the Quran — and we honour that desire with the quality of teaching it deserves.",
      ],
    },
    {
      label: "Courses for adults",
      heading: "What You Can Learn at My Quran Guide as an Adult",
      paragraphs: ["Every course is available to adult learners, at the pace that suits you."],
      list: [
        "Noorani Qaida — Start from absolute basics: Arabic alphabet and sounds",
        "Quran Recitation — Learn or relearn to read the Quran fluently",
        "Tajweed — Master proper Quran recitation rules at any level",
        "Hifz Program — Memorize the Quran — adults can and do achieve this",
        "Islamic Studies — Deepen your understanding of Islam and daily rulings",
        "Arabic Language — Understand the Quran in its original language",
        "Female Quran Classes (for sisters) — For sisters who prefer a certified female tutor",
      ],
    },
    {
      label: "Designed for adult learners",
      heading: "How My Quran Guide Fits Into Your Adult Life",
      paragraphs: [
        "Flexible Evening & Weekend Timings. We understand adults have work, family, and other commitments. That is why our classes are available morning, afternoon, evening, and on weekends — 2 to 6 days per week at the time you choose.",
        "Learn at Your Own Pace — No Rushing. Adult learners progress at their own comfortable pace. Your tutor will never rush you or make you feel behind. Every class is tailored to your current level and learning speed.",
        "One-on-One Private Classes. Adult students at My Quran Guide benefit from one-on-one private sessions where the tutor's complete attention is on you — your pronunciation, your mistakes, your progress.",
        "English-Speaking Certified Tutors. Our Pakistani tutors are fluent in English and certified in Quran teaching. They explain rules clearly in English so you understand exactly what you are learning and why.",
        "Male & Female Tutors Available. Adult students choose whether they prefer a male or female tutor. Sisters especially benefit from our certified female tutors who create a comfortable and focused learning environment.",
      ],
    },
  ],
  faqs: [
    {
      q: "I am an adult beginner — can I really learn Quran from scratch?",
      a: "Absolutely. Many adult students at My Quran Guide have started from absolute zero and progressed to fluent Quran recitation. Our tutors are experienced with adult beginners and create a completely judgment-free, supportive learning environment.",
    },
    {
      q: "What is the best time for adult classes?",
      a: "You choose your own timing completely. Most adults prefer evening or weekend sessions that fit around work and family commitments — but morning and afternoon slots are just as available.",
    },
    {
      q: "How many days per week do I need to commit?",
      a: "You choose — 2, 3, 4, 5, or 6 days per week. Many adult learners find a few consistent days a week works well for steady progress without overwhelming a busy routine — but there's no fixed requirement.",
    },
    {
      q: "Can I learn Quran as an adult woman with a female tutor?",
      a: "Yes. My Quran Guide has certified female tutors available for adult sisters who prefer to learn with a female teacher. Simply mention this preference when booking and we will match you accordingly.",
    },
    {
      q: "I used to know how to read Quran but have forgotten — where do I start?",
      a: "We assess your current level at the free trial class and recommend the most appropriate starting point. Many returning adult students begin with a refresher on Noorani Qaida or basic recitation before moving on to Tajweed improvement.",
    },
  ],
  relatedCourses: ["qaida", "recitation", "tajweed"],
  closing: {
    title: "Your Quran Journey Starts Today — Any Age, Any Level",
    body: "The Quran has been waiting for you — and today is the perfect day to begin. My Quran Guide offers certified tutors, flexible adult-friendly timings, and a 2-day completely free trial so you can start your Quran journey with total confidence and zero risk.",
    action: "Book My 2-Day Free Adult Quran Trial Now",
  },
  lastUpdated: LAST_UPDATED,
};

export const BEGINNERS_PAGE: LandingPage = {
  path: "/online-quran-classes-for-beginners",
  breadcrumbLabel: "Quran classes for beginners",
  heroLabel: "Start from absolute zero",
  h1: "Online Quran Classes for Beginners — Start from Absolute Zero | My Quran Guide",
  intro:
    "Have you always wanted to learn the Quran but did not know where to start? Are you worried that you know nothing about Arabic or the Quran and feel it might be too late or too difficult? At My Quran Guide, we want you to know one thing — every single person who can read the Quran today was once exactly where you are right now. Our online Quran classes for beginners are designed specifically for people who are starting from absolute zero. No prior Arabic knowledge. No experience with the Quran. No problem. Our certified, patient, and English-speaking tutors will guide you from the very first Arabic letter to confident Quran recitation — one simple step at a time.",
  metaTitle: "Online Quran Classes for Beginners | My Quran Guide",
  metaDescription:
    "Complete beginner? No problem. Certified, English-speaking tutors, flexible pace, all ages. Book your 2-day free trial today!",
  primaryKeyword: "online Quran classes for beginners",
  sections: [
    {
      label: "Where do beginners start?",
      heading: "Your Step-by-Step Quran Learning Path",
      paragraphs: [
        "Every beginner at My Quran Guide follows this natural progression. You do not need to worry about which step you are at — your tutor will assess your level at the free trial class and guide you to the perfect starting point.",
      ],
      list: [
        "Step 1 — Noorani Qaida: Learn Arabic letters, sounds and basic pronunciation (3–6 months)",
        "Step 2 — Quran Recitation: Start reading directly from the Quran fluently (6–18 months)",
        "Step 3 — Tajweed: Learn proper recitation rules and apply them (6–12 months)",
        "Step 4 — Your Choice: Hifz, Islamic Studies, Arabic Language — you decide",
      ],
    },
    {
      label: "Why beginners start here",
      heading: "What Makes My Quran Guide Perfect for Beginners?",
      paragraphs: [
        "We Start from Absolute Zero. Our Noorani Qaida course begins with the very first Arabic letter. You do not need to know anything at all before your first class. We build your foundation from scratch.",
        "Patient & Understanding Tutors. Our certified tutors are specifically chosen for their patience, clarity, and ability to teach complete beginners. They create a warm, encouraging, and judgment-free environment for every new learner.",
        "English-Speaking Tutors. All explanations are given in clear English. You will always understand exactly what you are learning and why — no confusion, no language barrier.",
        "Progress at Your Own Pace. There is no fixed timeline and no pressure to keep up with anyone else. You learn at your own comfortable pace and move to the next step only when you are ready.",
        "Flexible Class Timings. Classes are available at any time — morning, afternoon, evening, or weekend. Choose 2 to 6 days per week — whatever fits your schedule and learning goals.",
      ],
    },
    {
      label: "Beginner courses",
      heading: "Perfect Courses for First-Time Quran Learners",
      paragraphs: [
        "Noorani Qaida — Most Recommended for Beginners. The essential first step. Learn to recognize and pronounce all Arabic letters before moving on to reading the Quran. Suitable for all ages — kids, adults, and new Muslims.",
        "Quran Recitation for Beginners. For students who have completed Noorani Qaida and are ready to begin reading directly from the Quran for the first time.",
        "Islamic Studies for Beginners. For new Muslims and beginners who want to learn the basics of Islam alongside their Quran classes — Pillars of Islam, Salah, Seerah, and Islamic ethics.",
        "Arabic Language for Beginners. For students who want to understand the meaning of what they are reciting in Arabic — taught in clear English from absolute scratch.",
      ],
    },
  ],
  faqs: [
    {
      q: "I know nothing about Arabic — can I really learn Quran?",
      a: "Yes, absolutely. Every student at My Quran Guide who can now read the Quran started exactly where you are — knowing nothing about Arabic. Our Noorani Qaida course is designed for complete beginners and our tutors will guide you from the very first letter.",
    },
    {
      q: "How long will it take me to read the Quran as a beginner?",
      a: "On average, a beginner student attending 3 to 5 classes per week can expect to complete Noorani Qaida in 3 to 6 months, then begin reading directly from the Quran. Every student is different — we never rush.",
    },
    {
      q: "I feel embarrassed that I do not know the Quran — will the tutor judge me?",
      a: "Never. Our tutors are warm, encouraging, and deeply respectful of every student's starting point. Many of our most dedicated students began as complete beginners. Your courage to start is something to be proud of — not embarrassed about.",
    },
    {
      q: "What equipment do I need for online beginner classes?",
      a: "All you need is a smartphone, tablet, or computer with a working internet connection, microphone, and camera. That is it. No special equipment or software is required.",
    },
    {
      q: "Can my whole family start as beginners together?",
      a: "Yes. My Quran Guide can accommodate multiple family members at different levels and different timings. Many families enroll together — parents learning alongside their children — and we support all of them.",
    },
  ],
  relatedCourses: ["qaida", "recitation", "islamicStudies"],
  closing: {
    title: "Every Expert Was Once a Beginner — Your Journey Starts Here",
    body: "The fact that you are here, reading this, means you have already taken the first and most important step — the decision to begin. My Quran Guide is ready to take you the rest of the way. Book your 2-day free beginner trial today — no experience needed, no payment required, no judgment ever.",
    action: "Book My Free Beginner Trial Class Now",
  },
  lastUpdated: LAST_UPDATED,
};

export const NEW_MUSLIMS_PAGE: LandingPage = {
  path: "/quran-classes-for-new-muslims",
  breadcrumbLabel: "Classes for new Muslims",
  heroLabel: "Learn the Quran in English",
  h1: "Online Quran Classes for New Muslims — Learn the Quran in English with My Quran Guide",
  intro:
    "First of all — welcome to Islam. Accepting Islam is the most significant and beautiful decision of your life, and the Quran is the direct Word of Allah, your greatest companion on this journey. Learning to read, understand, and connect with the Quran is one of the first and most important steps every new Muslim takes — and My Quran Guide is here to make that step as easy, welcoming, and supportive as possible. Our online Quran classes for new Muslims are taught entirely in English by certified, understanding tutors who know exactly what new Muslims need — patience, clarity, and a warm, non-judgmental environment where every question is welcome.",
  metaTitle: "Online Quran Classes for New Muslims | My Quran Guide",
  metaDescription:
    "Newly accepted Islam? Learn the Quran in English with certified, welcoming tutors. Patient & supportive. Book your free trial today!",
  primaryKeyword: "Quran classes for new Muslims",
  sections: [
    {
      label: "We understand your journey",
      heading: "My Quran Guide Was Built for Students Like You",
      paragraphs: [
        "As a new Muslim, you may be navigating many new things at once — learning how to pray, understanding Islamic practices, connecting with the Muslim community, and now wanting to begin your Quran journey. That is a lot to take on, and it takes real courage and sincerity.",
        "At My Quran Guide, we deeply respect and honour your journey. Our tutors for new Muslims are not just Quran teachers — they are patient guides who understand the unique experience of someone who has chosen Islam and is taking their very first steps. There is no rush, no judgment, and no expectation beyond showing up and doing your best.",
      ],
    },
    {
      label: "Recommended courses",
      heading: "Where to Begin Your Quran & Islamic Learning Journey",
      paragraphs: [
        "1 — Noorani Qaida (Most Recommended First Step). If you have never read Arabic before, Noorani Qaida is where every new Muslim should begin. You will learn the Arabic alphabet, letter sounds, and basic pronunciation — the essential foundation before reading the Quran.",
        "2 — Quran Recitation. Once you complete Noorani Qaida, you begin reading directly from the Quran — starting with the shorter Surahs and building up gradually. Many new Muslims prioritize learning Surah Al-Fatiha and the short Surahs used in daily prayer first.",
        "3 — Islamic Studies. Highly recommended alongside Quran classes. Learn the five pillars of Islam, how to pray correctly, the Seerah of the Prophet (PBUH), and the basics of Islamic ethics and daily life — all taught in clear English.",
        "4 — Arabic Language. If you want to understand what you are reciting in the Quran and in Salah, our Arabic Language course teaches Quranic Arabic from scratch in English — giving you a direct connection to the words of Allah.",
      ],
    },
    {
      label: "Your first class",
      heading: "Your First Online Quran Class as a New Muslim",
      paragraphs: [
        "A Warm Welcome. Your tutor will begin by welcoming you and making you feel completely at ease. There is no test, no prior knowledge expected, and no pressure of any kind in your first class.",
        "An Assessment of Your Current Level. Your tutor will gently assess where you currently are — whether you know any Arabic letters already or are starting from absolute zero — and recommend the best course and starting point for you personally.",
        "Your First Lesson. After the assessment, your first lesson begins — at a pace that is completely comfortable for you. You are welcome to ask any question at any point. No question is too basic or too simple.",
        "A Plan for Your Journey. At the end of your free trial classes, your tutor will outline a suggested learning plan for you — which courses to take, how many days per week, and what you can realistically achieve within a given timeframe.",
      ],
    },
    {
      label: "Why new Muslims choose us",
      heading: "Why New Muslims Choose My Quran Guide",
      paragraphs: ["Everything is set up so you can begin without Arabic, without pressure, and without guessing what to do next."],
      list: [
        "Classes taught entirely in English — no Arabic required to begin",
        "Certified tutors experienced in teaching new Muslims",
        "Patient, non-judgmental, and welcoming environment",
        "All questions answered openly and respectfully",
        "Male and female tutors available — you choose",
        "Flexible timings that fit your schedule and lifestyle",
        "Noorani Qaida, Quran, Islamic Studies & Arabic all available",
        "One-on-one private classes — complete personal attention",
        "2-day free trial — begin your journey with zero cost or commitment",
      ],
    },
  ],
  faqs: [
    {
      q: "I just accepted Islam — where do I start with Quran?",
      a: "Welcome to Islam! The best starting point for most new Muslims is our Noorani Qaida course, which teaches you to read Arabic letters from scratch. Alongside this, we recommend Islamic Studies classes to help you learn how to pray and understand the basics of your new faith.",
    },
    {
      q: "Do I need to know any Arabic before starting?",
      a: "No — not at all. Our courses start from absolute zero. Many new Muslims have never seen an Arabic letter before their first class at My Quran Guide and have gone on to read the Quran fluently. Your tutor will guide you from the very beginning.",
    },
    {
      q: "Will my tutor judge me for not knowing the Quran?",
      a: "Never. Our tutors for new Muslims are specifically chosen for their patience, warmth, and deep respect for every student's journey. They understand completely that you are new to Islam and every question — no matter how basic — is welcomed with kindness.",
    },
    {
      q: "Can I learn how to pray (Salah) through your Islamic Studies classes?",
      a: "Yes. Our Islamic Studies course covers the complete method of Salah — how to perform Wudu, the movements of prayer, and the Arabic phrases recited during Salah — all taught clearly in English. Many new Muslims combine Quran and Islamic Studies classes together.",
    },
    {
      q: "Can I take classes with a female tutor as a new Muslim sister?",
      a: "Yes, absolutely. New Muslim sisters who prefer to learn with a female tutor are warmly accommodated at My Quran Guide. All courses are available with certified female tutors — simply mention your preference when booking.",
    },
  ],
  relatedCourses: ["qaida", "islamicStudies", "arabic"],
  closing: {
    title: "Welcome to Your Quran Journey — We Are Here for You",
    body: "You have taken the most important step by choosing Islam. Now let My Quran Guide walk beside you on the next step — learning the Quran and your deen in a way that is welcoming, clear, and completely supportive. Your 2-day free trial is waiting — no cost, no commitment, just the beginning of something beautiful.",
    action: "Book My Free New Muslim Trial Class Now",
  },
  lastUpdated: LAST_UPDATED,
};

export type AudiencePageKey = "kids" | "adults" | "beginners" | "newMuslims";

export const AUDIENCE_PAGES: Record<AudiencePageKey, LandingPage> = {
  kids: KIDS_PAGE,
  adults: ADULTS_PAGE,
  beginners: BEGINNERS_PAGE,
  newMuslims: NEW_MUSLIMS_PAGE,
};

export const AUDIENCE_PAGE_ORDER: ReadonlyArray<AudiencePageKey> = [
  "kids",
  "adults",
  "beginners",
  "newMuslims",
];

export const AUDIENCE_PAGE_LIST: ReadonlyArray<LandingPage> = AUDIENCE_PAGE_ORDER.map(
  (key) => AUDIENCE_PAGES[key],
);

export function getAudiencePage(key: AudiencePageKey): LandingPage {
  return AUDIENCE_PAGES[key];
}

import type { LandingPage } from "@/content/landing";

/**
 * The three audience landing pages: kids, adults and new Muslims.
 *
 * These exist because `/courses` collapses three very different intents into
 * one page. A parent searching "online Quran classes for kids" wants to know
 * who is alone with their child; an adult beginner wants to know nobody will
 * hear them struggle; a new Muslim wants to know where on earth to start.
 * Each page answers its own question in its own words — none of the body copy
 * is shared between them, because a template with the audience swapped out is
 * a doorway page.
 */

const LAST_UPDATED = "2026-08-03";

export const KIDS_PAGE: LandingPage = {
  path: "/online-quran-classes-for-kids",
  breadcrumbLabel: "Quran classes for kids",
  heroLabel: "Ages 5 to 15",
  h1: "Online Quran classes for kids, taught one to one",
  intro:
    "You are handing your child over to an adult you have not met, on a screen, for half an hour at a time. That is the part most parents are actually weighing up, so this page deals with it first: who teaches, what you are allowed to see, and what reaches you afterwards. Classes are one to one over Zoom, Skype or Google Meet, 30 or 45 minutes, two to six days a week, and the first two are free.",
  metaTitle: "Online Quran classes for kids | My Quran Guide",
  metaDescription:
    "Online Quran classes for kids aged 5 to 15. One to one over Zoom with the same tutor every week, a progress note after each class, two free trial classes.",
  primaryKeyword: "online Quran classes for kids",
  sections: [
    {
      label: "30 or 45 minutes",
      heading: "What a class actually looks like",
      paragraphs: [
        "The tutor joins at the time you chose and shares their screen with the page your child is reading. There is no class of twenty to hide in and no waiting for a turn, so your child reads aloud for most of the session and is corrected the moment a letter or a vowel goes wrong. That correction loop is the entire reason one-to-one lessons work better than recordings for this subject.",
        "Nothing is pre-recorded and the material is not a playlist with a person attached. If your child is tired, distracted or coming down with something, the tutor adjusts what gets covered that day rather than pushing through a plan. Tutors who take on the youngest students are chosen for patience specifically, and at five or six they expect progress to be counted in letters rather than levels.",
        "Most young children want a parent nearby for the first week, usually to manage the microphone and hold the page open rather than for the learning itself. After that they generally settle into joining on their own, and you can drift in and out of the room as you like.",
      ],
    },
    {
      label: "Five safeguards",
      heading: "How classes are kept safe for a child",
      paragraphs: [
        "Every parent should ask this before booking, and the honest answer is a set of arrangements rather than a promise. You can be in the room whenever you want to be, the session can be observed or recorded, the adult teaching your child does not change from week to week, and there is no channel through which a tutor could contact your child privately.",
        "Scheduling and messages run through the parent's WhatsApp number and the parent's email, never the child's. Tutors do not add students on social media, do not exchange personal numbers and do not arrange sessions directly with a child. If your usual tutor is ever unavailable and cover is needed, we tell you who the cover tutor is before that class rather than after it.",
        "Before your trial we send you the tutor's name and the credential they hold, along with where they studied for it, so you know who is on the other end of the call before your child does. If anything about a session sits badly with you, message support and you will have a reply within one to two hours.",
      ],
      list: [
        "You can sit in on any class, at any time, without arranging it with us first.",
        "Sessions can be recorded on request, or watched live from the same room or a second device.",
        "The same tutor takes every class, so your child is not meeting a new adult each week.",
        "No private contact outside class: no personal numbers, no social media, no messages between tutor and child.",
        "A short written progress note reaches you after every session, so no part of the class is invisible to you.",
      ],
    },
    {
      label: "Three starting points",
      heading: "Where your child will start",
      paragraphs: [
        "If your child cannot yet recognise the Arabic letters, they start with Noorani Qaida. It teaches the twenty-nine letters, the sound each one makes, how the shapes change when letters join, and the short and long vowels, all before a mushaf is opened. Most children finish it in three to six months, and it is the single best predictor of whether reading later goes smoothly or painfully.",
        "If your child already knows the letters but reads haltingly, they start with Quran recitation instead, usually on the short surahs of Juz Amma so the early wins arrive quickly. Children often stall at exactly this step, moving from a primer where every word is familiar to a page where none of them are, and a tutor who knows that transition is what gets them past it.",
        "If your child reads fluently, the useful next steps are Tajweed or Hifz. Rules learned at eight are simply how the child reads; the same rules learned at thirty-eight are a correction of twenty years of habit. Whichever of the three applies, the tutor assesses your child during the free trial and tells you where they actually are rather than where a syllabus says they should be.",
      ],
    },
    {
      label: "2 to 6 days a week",
      heading: "Fitting classes around school",
      paragraphs: [
        "Tutors teach across the full 24-hour cycle, so an after-school slot in Birmingham, a before-school slot in Dubai and an eight o'clock evening slot in Toronto are all ordinary requests. You choose the days and the time, and you keep them. Three days a week is the point at which progress becomes steady rather than start-stop; two works if there is reading at home in between.",
        "Thirty minutes suits children under about eight and anyone squeezing a class between school and dinner. Forty-five is the better length once a child is memorising, because the session has to hold new material and revision at the same time. Siblings are usually booked into consecutive slots with the same tutor, which turns two school-night interruptions into one.",
        "Term time and holidays rarely match, and nobody expects a child to keep a five-day schedule through August. Message your tutor in advance if you need to move a class and we will look for another slot that week; if you want to drop to fewer days over the holidays, that is a message rather than a negotiation.",
      ],
    },
    {
      label: "After every session",
      heading: "How you can tell it is working",
      paragraphs: [
        "After each class the tutor sends a short note: what was covered, what your child found difficult and what to practise before next time. It takes a minute to read and it is the main thing standing between you and an online class that has quietly become a black box. If those notes stop arriving, tell us, because that is not how it is meant to run.",
        "Roughly once a month you will get a plainer assessment from the tutor: whether the current schedule is enough, whether the level is right, and whether your child is ready to move from Qaida to the mushaf or from recitation to Tajweed. We would rather tell you that two days a week is not working than keep taking the fee for it.",
        "Between classes, ten minutes of reading aloud at home does more than an extra session does. Your tutor will tell you exactly what those ten minutes should contain, so working out a practice plan does not land on you on top of everything else.",
      ],
    },
  ],
  faqs: [
    {
      q: "What age can my child start Quran classes?",
      a: "From about five, and tutors will take a four-year-old who can sit still for half an hour. At that age sessions are kept to 30 minutes and the goal is letter recognition rather than reading. If your child is younger than four, waiting a few months usually costs nothing and saves an unhappy first experience.",
    },
    {
      q: "Can I sit in on my child's Quran class?",
      a: "Yes, at any time and without telling us in advance. Many parents sit in for the whole of the first week, then dip in occasionally afterwards. You can also ask for a session to be recorded, or watch from a second device in another room if your presence makes your child self-conscious.",
    },
    {
      q: "How do you keep online classes safe for children?",
      a: "The same tutor takes every class, all scheduling and messaging goes through the parent rather than the child, and tutors never exchange personal numbers or social media with a student. Classes can be observed or recorded on request, and a written progress note reaches you after every session.",
    },
    {
      q: "Will my child have the same teacher every week?",
      a: "Yes. Your child is matched to one tutor and keeps them, which matters more for a child than for an adult because half the work in the first month is simply getting comfortable. If cover is ever needed, we tell you who the cover tutor is before the class.",
    },
    {
      q: "How many days a week should my child attend?",
      a: "Three is where progress becomes steady rather than start-stop. Two is workable if your child reads aloud at home between sessions. Five or six is normal for children doing Hifz, where daily revision is the whole programme rather than an extra.",
    },
    {
      q: "What if my child does not get on with the tutor?",
      a: "Tell us and we will match your child with a different tutor, including during or after the free trial classes. It is not an awkward request and you do not need to justify it. Some children need a gentler tutor, some need a stricter one, and it is not always obvious which until you have seen a class.",
    },
  ],
  relatedCourses: ["qaida", "recitation", "hifz"],
  closing: {
    title: "Watch the first class yourself",
    body: "Both trial classes are free and no card details are taken. Sit beside your child for the whole of the first one and listen to how the tutor speaks to a child before you decide anything.",
    action: "Book two free classes for your child",
  },
  lastUpdated: LAST_UPDATED,
};

export const ADULTS_PAGE: LandingPage = {
  path: "/online-quran-classes-for-adults",
  breadcrumbLabel: "Quran classes for adults",
  heroLabel: "Complete beginners, ages 16 and up",
  h1: "Online Quran classes for adults, including complete beginners",
  intro:
    "A large share of adults who contact us begin with an apology. They can recite a few surahs from memory but cannot read a line, or they learned as a child and lost it, or they have been meaning to fix this for a decade and keep not doing it. Classes here are one to one, which means the only person who ever hears you read is the tutor whose job it is to correct you. The first two classes are free.",
  metaTitle: "Online Quran classes for adults | My Quran Guide",
  metaDescription:
    "Online Quran classes for adults, from the first Arabic letter to Tajweed. One to one, so nobody hears you struggle, with evening and weekend slots to choose.",
  primaryKeyword: "online Quran classes for adults",
  sections: [
    {
      label: "A class of one",
      heading: "Nobody hears you struggle",
      paragraphs: [
        "There is no group to keep up with, no other student waiting while you work out a word, and no reading rota that puts you on the spot. If you need the same page for three sessions in a row, you have it for three sessions. The tutor's only job is to hear every word and correct it, and that fails completely if you are too self-conscious to make mistakes in front of them.",
        "Keep your camera off if it helps. Plenty of adult students do, particularly for the first few weeks, and the class works exactly the same: the tutor shares the page on their screen, you read aloud, they stop you when something is wrong. Nobody in your household needs to know what the call is either, since a 30-minute lesson looks like any other meeting.",
        "Tutors correct on the spot rather than saving a list of faults for the end of the session, which sounds harsher and is in fact far easier to sit through. You fix one letter, read the line again, and move on. Nothing accumulates into a verdict.",
      ],
    },
    {
      label: "No upper age limit",
      heading: "Starting at forty is normal, not late",
      paragraphs: [
        "The most common thing adults ask is whether they have left it too long. They have not, and there is no upper age limit on enrolment. Two things work in an adult's favour and are worth stating plainly: the rules can be explained to you rather than drilled into you, which makes them stick faster, and you set your own schedule, which is why adults tend to attend more consistently than children do.",
        "Where adults are genuinely slower is memorisation, and that only matters if memorisation is your goal. For reading, the limiting factor is not memory but practice minutes, and a working adult who reads aloud for ten minutes a day will outrun a child who only reads in class. Nobody is competing with anyone here in any case.",
        "If you are learning alongside your children, say so when you book. Parents often take a slot immediately before or after their child with the same tutor, or share a single session. Many parents find that learning at the same time as their child is the thing that finally makes it happen after years of intending to.",
      ],
    },
    {
      label: "Evenings and weekends",
      heading: "Scheduling around a full working week",
      paragraphs: [
        "Tutors teach around the clock, which in practice means late evening slots for North America, after-work slots for the UK and Europe, early morning slots before work in the Gulf, and weekend blocks for anyone whose weekdays are a write-off. You pick the days and times and keep them, so the class sits in your calendar as a fixed thing rather than something you rearrange weekly.",
        "Thirty minutes is the length most working adults choose, because a 30-minute lesson survives a bad week and a 60-minute one does not. Forty-five is the better choice if you are studying Arabic grammar or memorising, where the session needs room for new material and revision in the same sitting. Two days a week is the floor; three is where it stops feeling like starting over each time.",
        "Shift patterns and travel are workable. Your tutor is the same person every week, but the slot itself can move if your rota does, provided you give notice rather than disappearing. If you know in advance that a fortnight is impossible, say so and we will pause rather than have you pay for classes you will not attend.",
      ],
    },
    {
      label: "Four common starting points",
      heading: "What adults usually come to fix",
      paragraphs: [
        "The first group cannot read Arabic letters at all. They start with Noorani Qaida, which begins at the first letter and assumes nothing, and typically takes three to six months. Learning the alphabet at forty feels absurd for about two weeks and then stops feeling like anything, because there is nobody in the room to feel absurd in front of.",
        "The second group reads, but slowly, losing their place and guessing at endings. That is a recitation problem and it responds quickly to being heard aloud several times a week; adults who read as children and then stopped often find most of it comes back within six to eight weeks. The third group reads fluently but was never taught a single rule of Tajweed, and usually discovers in the trial that three or four specific rules are missing rather than thirty.",
        "The fourth group can recite the whole Quran and understand almost none of it. That is what Quranic Arabic is for: the grammar that holds a sentence together, the root system that explains why so many words look related, and the vocabulary that accounts for most of the text. It is a longer road, and the returns arrive earlier than most people expect.",
      ],
    },
    {
      label: "First eight weeks",
      heading: "What progress realistically looks like",
      paragraphs: [
        "In the first two weeks the main thing that changes is that reading aloud in front of someone stops being uncomfortable. Nothing on the page moves much, and that is normal. From roughly week three the letters start arriving without conscious effort, which is the point at which most adults stop expecting to give up.",
        "By week eight a complete beginner attending three times a week is generally partway through the Qaida primer, joining letters and reading short words unaided. Someone who already read as a child is usually back to reading a page of Juz Amma without stalling. Neither is fluency, and anyone offering you fluency in eight weeks is selling something.",
        "Your tutor will tell you honestly where you are rather than where it would be flattering to say you are. That includes telling you when two days a week is not enough for the goal you have described, and telling you when you are ready to move from recitation into Tajweed.",
      ],
    },
  ],
  faqs: [
    {
      q: "Am I too old to learn to read the Quran?",
      a: "No, and there is no upper age limit on enrolment. Adults typically pick up the rules faster than children because they can be explained rather than drilled, and they attend more reliably. The genuine difference is memorisation speed, which only matters if your goal is Hifz.",
    },
    {
      q: "I can barely read Arabic. Will the tutor judge me?",
      a: "Classes are one to one, so the only person who hears you is the tutor, and beginner adults are a large part of who they teach every day. Tutors correct as you go rather than delivering a verdict at the end. If you would rather not be seen at all, keeping your camera off is fine.",
    },
    {
      q: "Can I take Quran classes after work?",
      a: "Yes. Tutors teach across the full 24-hour cycle, so evening slots for North America and Europe and early morning slots before work in the Gulf are both routine. You choose two to six fixed days a week and keep the same time each week.",
    },
    {
      q: "How long will it take me to read the Quran fluently?",
      a: "A complete beginner usually spends three to six months on Noorani Qaida, then 12 to 18 months on recitation to get through the full Quran while attending three to five days a week. Someone who read as a child and stopped often recovers most of it in six to eight weeks.",
    },
    {
      q: "Can I learn privately, without my family knowing?",
      a: "Yes. A 30-minute one-to-one call looks like any other meeting, no recording is made unless you ask for one, and all correspondence goes to whichever number and email address you give us. Nothing is shared with anyone else, and nothing is posted anywhere.",
    },
    {
      q: "I read fluently but was never taught Tajweed. Where do I start?",
      a: "Start with Tajweed rather than recitation. In the free trial the tutor will listen to you recite and name the specific rules you are missing, which for a fluent reader is usually three or four rather than the whole syllabus. From there the rules are applied to what you read that day rather than taught as theory.",
    },
  ],
  relatedCourses: ["qaida", "recitation", "tajweed"],
  closing: {
    title: "Read one line out loud to a tutor",
    body: "Both trial classes are free and no card details are taken. Read whatever you can, at whatever speed, and the tutor will tell you plainly where you are starting from and what to fix first.",
    action: "Book a free class for yourself",
  },
  lastUpdated: LAST_UPDATED,
};

export const NEW_MUSLIMS_PAGE: LandingPage = {
  path: "/quran-classes-for-new-muslims",
  breadcrumbLabel: "Classes for new Muslims",
  heroLabel: "No prior knowledge needed",
  h1: "Quran classes for new Muslims, starting from the first letter",
  intro:
    "Most of what a new Muslim finds online is either a children's alphabet book or a scholarly text, with very little in between and nobody to ask. These classes are the in-between: one to one, in English, starting from the assumption that you know nothing about Arabic script, Salah or the terms people around you use. Your first two classes are free, and the tutor will plan the first three months around what you actually need.",
  metaTitle: "Quran classes for new Muslims | My Quran Guide",
  metaDescription:
    "Quran classes for new Muslims with no prior knowledge. Learn the Arabic letters, what you need for Salah, and follow a realistic ninety-day beginner plan.",
  primaryKeyword: "Quran classes for new Muslims",
  sections: [
    {
      label: "Assumes no Arabic",
      heading: "Starting from genuinely nothing",
      paragraphs: [
        "You do not need to recognise a single Arabic letter, know which way a mushaf opens, or understand a word of the vocabulary that everyone around you seems to use without explaining. The starting point of the first class is whatever you can honestly say you know, and for most new Muslims that is a handful of phrases learned by ear and not much else.",
        "Because classes are one to one, there is no audience for basic questions. You can ask what a juz is, why people say certain words after the Prophet's name, or how the page is meant to be read from right to left, as many times as it takes. In a group setting those questions cost you something socially; in a class of one they cost nothing at all.",
        "Tutors who teach new Muslims have done it before and know which questions arrive first and in what order. That matters more than it sounds, because the biggest problem for a revert is usually not difficulty but sequencing: knowing what to learn now and what can safely wait six months.",
      ],
    },
    {
      label: "Days 1 to 90",
      heading: "A realistic first ninety days",
      paragraphs: [
        "Nobody can promise where you will be in three months, because it depends on how often you attend and how much you read between classes. What follows is what typically happens for somebody starting at zero, taking 30-minute classes three days a week, and practising for a few minutes on the days in between.",
        "Notice what is not on this list. By day ninety a consistent student is usually still inside the Qaida primer rather than reading from the mushaf, and that is the expected outcome rather than a slow one. Most people take three to six months to finish Qaida and only then open the Quran itself, so anyone promising you fluent recitation in ninety days is selling you something.",
      ],
      list: [
        "Days 1 to 30: the Arabic letters and the sound each one makes, through Noorani Qaida. Alongside that, the short surahs you need for Salah learned by listening and repeating, since you need them now rather than in six months.",
        "Days 31 to 60: how letters change shape when they join, the short vowels, and reading two- and three-letter words unaided. If you are also taking Islamic studies, this is usually where wudu and the structure of Salah are covered properly.",
        "Days 61 to 90: long vowels, Sukoon and Shaddah, and a first attempt at reading short Quranic words from the page rather than reciting them from memory.",
        "Throughout: a written note from your tutor after every class saying what to practise before the next one, so you are never guessing at what to do between sessions.",
      ],
    },
    {
      label: "Salah first",
      heading: "Why we usually start with what you need for prayer",
      paragraphs: [
        "You are praying five times a day now, not in six months when you can read. So the practical order is to learn the surahs and phrases Salah requires by ear first, with the tutor correcting your pronunciation line by line, while the reading work runs in parallel. Reversing that order leaves you praying with words you are unsure of for the whole of your first year.",
        "Pronunciation is the part worth taking seriously early. Arabic distinguishes sounds that English does not, and a letter learned wrong now is a habit to be undone later. Your tutor will drill the specific pairs of letters that English speakers routinely merge, using the surahs you are already reciting rather than an abstract exercise.",
        "If you want the surrounding knowledge as well, Islamic studies covers wudu, ghusl, the structure of the prayer, fasting and the basics of Zakat, taught in English module by module. A common arrangement is Quran twice a week and Islamic studies once, though many people start with Quran alone and add the second course after a month or two.",
      ],
    },
    {
      label: "Taught in English",
      heading: "Terms explained rather than assumed",
      paragraphs: [
        "Every class is conducted in English. Arabic terms are introduced with their script and explained on first use, which sounds obvious and is the main reason beginners give up on courses designed for people who grew up in Muslim households. Nothing is assumed about what you already picked up, and no tutor will look surprised at a question about something basic.",
        "That also applies to the culture around the practice rather than the practice itself. Which parts are religious obligation and which are the custom of a particular country is a genuinely confusing distinction for a revert, and a tutor who is asked will answer it directly rather than treat the question as impertinent.",
        "If your goal is eventually to understand the Quran rather than only to recite it, Quranic Arabic is the route, and its vocabulary is ordered by how often words appear in the text. It is a longer commitment than reading, but understanding Salah in the language you are performing it in changes the experience of it considerably.",
      ],
    },
    {
      label: "Male or female tutor",
      heading: "Choosing who teaches you",
      paragraphs: [
        "Say which you want when you book and it is treated as a requirement rather than a preference. If you request a female tutor, only female tutors are assigned, for the trial classes, for regular classes and for any cover lesson. No explanation is asked for and none is needed.",
        "Before the trial we send you the tutor's name and the credential they hold, including where they studied for it, so you are not guessing about who is teaching you. If the fit is wrong after a class or two, ask for a different tutor. Reverts sometimes need a tutor who explains more and drills less, and it is not always clear which until you have sat through a session.",
        "You can also message support before booking anything, in English or Urdu, and ask about credentials, scheduling or how the classes are structured. Replies come within one to two hours, usually on WhatsApp, and plenty of people ask two or three rounds of questions before they book a trial.",
      ],
    },
  ],
  faqs: [
    {
      q: "I just became Muslim. Where do I start with the Quran?",
      a: "With Noorani Qaida, which teaches the Arabic letters and their sounds before you open a mushaf, while learning the short surahs for Salah by ear at the same time. Most people spend three to six months on Qaida and then move to reading from the Quran itself.",
    },
    {
      q: "Do I need to know any Arabic before I begin?",
      a: "None. The first class starts at the first letter and assumes nothing, and everything is taught in English with Arabic terms explained on first use. If you already recognise some letters, the tutor will assess you during the free trial and start you further along.",
    },
    {
      q: "How long before I can read the Quran myself?",
      a: "Realistically, three to six months to finish the Qaida primer, then a further 12 to 18 months of recitation classes to read through the whole Quran at three to five days a week. You will be reading short Quranic words from the page well before that, usually around the third month.",
    },
    {
      q: "Can I learn what I need for Salah first?",
      a: "Yes, and it is what most tutors recommend for a revert. The surahs and phrases Salah requires are taught by listening and repeating, with your pronunciation corrected line by line, while the reading work runs alongside it rather than delaying it.",
    },
    {
      q: "Is it normal to ask very basic questions?",
      a: "It is expected. Classes are one to one specifically so that there is no audience for questions about how the page is read, what a term means, or whether something is a religious obligation or a cultural custom. Tutors who teach new Muslims are used to all of these.",
    },
    {
      q: "Can I request a female teacher as a new Muslim woman?",
      a: "Yes, and it is treated as a requirement rather than a preference. Request a female tutor when you book and only female tutors will be assigned, including for both free trial classes and for any cover lesson if your usual tutor is unavailable.",
    },
  ],
  relatedCourses: ["qaida", "islamicStudies", "arabic"],
  closing: {
    title: "Start at the first letter",
    body: "Both trial classes are free and no card details are taken. Tell the tutor you are new to Islam and what you can and cannot manage in Salah, and the first ninety days will be planned around that.",
    action: "Book two free beginner classes",
  },
  lastUpdated: LAST_UPDATED,
};

export type AudiencePageKey = "kids" | "adults" | "newMuslims";

export const AUDIENCE_PAGES: Record<AudiencePageKey, LandingPage> = {
  kids: KIDS_PAGE,
  adults: ADULTS_PAGE,
  newMuslims: NEW_MUSLIMS_PAGE,
};

export const AUDIENCE_PAGE_ORDER: ReadonlyArray<AudiencePageKey> = ["kids", "adults", "newMuslims"];

export const AUDIENCE_PAGE_LIST: ReadonlyArray<LandingPage> = AUDIENCE_PAGE_ORDER.map(
  (key) => AUDIENCE_PAGES[key],
);

export function getAudiencePage(key: AudiencePageKey): LandingPage {
  return AUDIENCE_PAGES[key];
}

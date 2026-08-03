import type { FaqItem } from "@/components/site/Disclosure";

/**
 * Shared FAQ sets. Course-specific questions live with their course in
 * courses.ts; these cover the site as a whole.
 *
 * Questions are written the way a parent would actually type them into Google,
 * and answers are specific enough to be useful on their own — they are indexed
 * as answers, not as teasers for the page.
 */

export const homeFaqs: ReadonlyArray<FaqItem> = [
  {
    q: "How does the free trial work?",
    a: "Every new student gets two complete classes at no cost. They are full lessons with the tutor you would continue with, not a demo or a sales call. No card details are taken, and there is no obligation to enrol afterwards.",
  },
  {
    q: "What ages do you teach?",
    a: "From five years old upwards, with no upper limit. Around half our students are children learning Noorani Qaida or recitation, and the rest are adults — including many who are reading the Quran properly for the first time.",
  },
  {
    q: "Can I request a female tutor?",
    a: "Yes, and it is treated as a requirement rather than a preference. If you request a female tutor, only certified female tutors are assigned — for the trial, for regular classes, and for any cover lesson.",
  },
  {
    q: "How do classes actually run?",
    a: "One-to-one over Zoom, Skype or Google Meet, for 30 or 45 minutes, between two and six days a week. You pick the days and times; the tutor shares their screen with the page you are reading and corrects you as you go.",
  },
  {
    q: "I am a complete beginner. Where do I start?",
    a: "With Noorani Qaida, which teaches the Arabic letters and their sounds before you open a mushaf. If you already recognise the letters, the tutor will assess you in the trial class and start you at recitation instead.",
  },
  {
    q: "What time zones do you cover?",
    a: "All of them. Tutors teach across the full 24-hour cycle, so early morning slots for the Gulf, after-school slots for the UK and Europe, and evening slots for North America and Australia are all available.",
  },
];

export const coursesFaqs: ReadonlyArray<FaqItem> = [
  {
    q: "Which course should I start with?",
    a: "If you cannot yet read Arabic letters, start with Noorani Qaida. If you can read but not fluently, start with Quran recitation. If you read fluently but were never taught the rules, start with Tajweed. If you are unsure, book a trial and the tutor will tell you.",
  },
  {
    q: "Can I take more than one course at a time?",
    a: "Yes, and it is common. Recitation plus Tajweed is the usual pairing, and Islamic studies alongside Arabic works well for adults. We schedule them with the same tutor where possible so progress in one feeds the other.",
  },
  {
    q: "How many days a week should I attend?",
    a: "Three is the point at which progress becomes steady rather than start-stop. Two works if you practise between sessions. Five or six is normal for Hifz students and for anyone working towards a deadline.",
  },
  {
    q: "How long is each class?",
    a: "Thirty or forty-five minutes, and you choose. Thirty suits younger children and anyone fitting classes around work. Forty-five is the better choice for Hifz and Arabic, where the session needs room for both new material and revision.",
  },
  {
    q: "Are classes one-to-one or in a group?",
    a: "One-to-one by default, because the whole method depends on the tutor hearing every word you read. Group classes are available on request for siblings or for families who want to learn together.",
  },
  {
    q: "Do I get a certificate?",
    a: "Students completing full Hifz receive an official Hifz certificate. Other courses end with a tutor-verified progress certificate recording what was covered and the tutor's assessment. Neither is an Ijazah, which requires a chain of transmission.",
  },
];

export const feeScheduleFaqs: ReadonlyArray<FaqItem> = [
  {
    q: "Are there registration or hidden fees?",
    a: "No. There is no registration fee, no materials fee and no minimum term. The monthly package price or the per-class price is the entire cost, and it is fixed at the point you enrol.",
  },
  {
    q: "Why are prices shown as fixed numbers rather than ranges?",
    a: "Because a range tells you nothing you can plan around. Every course has one price per class and every package has one price per month. Non-USD prices are converted from the USD figure at a fixed published rate, so the columns always agree.",
  },
  {
    q: "Can I switch between monthly and per-class payment?",
    a: "At any time, with no penalty. Tell your tutor or message us and the change applies from the next billing cycle. Many families use monthly packages during term time and per-class over the holidays.",
  },
  {
    q: "How does the siblings discount work?",
    a: "Five per cent comes off the fees of every additional child from the same family, applied automatically once you tell us during enrolment. It applies to the second child and to every child after that.",
  },
  {
    q: "Which currencies can I pay in?",
    a: "US dollars, pounds sterling, euros, Canadian dollars and Australian dollars, via PayPal, Wise, bank transfer or card. Use the currency toggle on this page to see the exact amount you would be charged.",
  },
];

export const contactFaqs: ReadonlyArray<FaqItem> = [
  {
    q: "How quickly will you reply?",
    a: "Within one to two hours, on any day of the week. WhatsApp is answered fastest; email typically takes a little longer because it is checked in batches rather than continuously.",
  },
  {
    q: "What should I include in my first message?",
    a: "The student's age, the course you are interested in, and roughly when you can attend along with your city or time zone. With those four things we can usually confirm a tutor and a slot in one reply rather than four.",
  },
  {
    q: "Can I ask questions before booking a trial?",
    a: "Of course. Plenty of families message two or three times before booking anything, and questions about tutor credentials, safeguarding or scheduling are all fair to ask up front.",
  },
  {
    q: "Which languages can I contact you in?",
    a: "English, Urdu or Punjabi. Classes themselves are taught in English, with Arabic terms explained, unless you specifically ask for a tutor who will explain in Urdu.",
  },
  {
    q: "Is there a phone number I can call?",
    a: "Support runs through WhatsApp rather than a phone line, which means voice notes and calls both work and there is a written record of what was agreed. The number is the same one listed in the footer.",
  },
];

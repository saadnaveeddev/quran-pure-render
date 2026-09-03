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
    q: "Do you offer a free trial?",
    a: "Yes — a 2-day free trial for all new students. No payment or card required. Book your trial and experience the teaching before you commit.",
  },
  {
    q: "What age groups do you teach?",
    a: "Children as young as 5 through adults of any age, including new Muslims starting their Quran journey.",
  },
  {
    q: "Can I choose a female tutor?",
    a: "Yes. Female tutors are available for sisters and young girls who prefer a female teacher.",
  },
  {
    q: "What platform are classes held on?",
    a: "Zoom, Skype, or Google Meet — whichever you're most comfortable with.",
  },
  {
    q: "What if I am a complete beginner?",
    a: "Start with Noorani Qaida — built for complete beginners, from the very basics, at your own pace.",
  },
  {
    q: "Are your tutors certified?",
    a: "Yes — all tutors are certified from Pakistan's top Quran-teaching institutes and have 8+ years of online teaching experience.",
  },
  {
    q: "How much does it cost after the free trial?",
    a: "Plans start from just $18/month — flexible enough for any budget, with no long-term contract required.",
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
    q: "Are there any registration or hidden fees?",
    a: "No. My Quran Guide charges no registration fees and has no hidden charges. You only pay the agreed course fee — nothing more, nothing less.",
  },
  {
    q: "Can I switch between monthly and per class payment?",
    a: "Yes. You can switch between monthly packages and per class payment at any time. Simply inform our team and we will adjust your payment plan accordingly.",
  },
  {
    q: "When do I pay for my classes?",
    a: "Payment timing is fully flexible at My Quran Guide. You can pay monthly in advance, weekly, or per class — whichever works best for your budget and schedule.",
  },
  {
    q: "Is the 5% siblings discount automatic?",
    a: "Yes. Once you inform us during enrollment that you are enrolling multiple children from the same family, the 5% siblings discount is automatically applied to each additional child's fees.",
  },
  {
    q: "What currencies do you accept?",
    a: "We accept payments in both USD ($) and GBP (£). If you are based in another country and prefer a different currency, contact us and we will find a solution that works for you.",
  },
  {
    q: "What payment methods do you accept?",
    a: "We accept PayPal, Bank Transfer, Wise (TransferWise), and other payment methods. Contact us if you need a specific payment method and we will try to accommodate you.",
  },
  {
    q: "Can I get a refund if I am not satisfied?",
    a: "Yes. My Quran Guide has a fair refund policy. Unused classes are refunded on a pro-rata basis if a cancellation request is submitted within 7 days of billing. See our full refund policy above for details.",
  },
  {
    q: "Do fees change for different courses?",
    a: "Monthly package fees are the same across all courses — pricing depends only on how many days per week you choose. Per class fees vary slightly by course. Contact us for exact pricing for your chosen course and we will provide a clear, transparent quote.",
  },
];

export const contactFaqs: ReadonlyArray<FaqItem> = [
  {
    q: "What information should I include in my message?",
    a: "To help us assist you better, please mention the student's name, age, course of interest, and your preferred class timing. This helps us match you with the right tutor right away.",
  },
  {
    q: "Can I contact you before booking a free trial?",
    a: "Absolutely. You are welcome to contact us first with any questions before booking your free trial. Our team is happy to guide you and help you choose the right course for you or your child.",
  },
  {
    q: "Do you communicate in English and Urdu?",
    a: "Yes. Our team is fluent in both English and Urdu. You can contact us in whichever language you are most comfortable with.",
  },
  {
    q: "Is there a phone number I can call?",
    a: "We currently offer support via WhatsApp, email, Facebook, and Instagram. WhatsApp is the fastest way to reach us and works just like a phone call if you prefer voice messages.",
  },
];

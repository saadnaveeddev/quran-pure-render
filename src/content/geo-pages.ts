import type { LandingPage } from "@/content/landing";

/**
 * Country landing pages: USA, UK, Canada, Australia.
 *
 * Read this before editing. These four pages exist to catch four different
 * search intents, and the only thing that justifies four pages instead of one
 * is that the content is genuinely different. A shared template with the
 * country name swapped is a doorway page — a manual-action risk, not a ranking
 * shortcut — so if you add a paragraph here, it has to be true of that country
 * and not of the other three.
 *
 * What each page is differentiated on: the real offset against Pakistan
 * Standard Time (UTC+5, no daylight saving) and which windows that leaves open,
 * the local school calendar, what the local in-person alternative looks like,
 * the country's own daylight-saving and Ramadan complications, and how people
 * there actually pay. Every time figure below is arithmetic you can check.
 *
 * Copy rules: sentence case, no emoji, no invented numbers, no testimonials,
 * British English throughout with local names for local things.
 */

const LAST_UPDATED = "2026-08-03";

export const USA_PAGE: LandingPage = {
  path: "/online-quran-classes-usa",
  breadcrumbLabel: "Quran classes in the USA",
  heroLabel: "Evening slots from 4pm ET, weekend mornings from 7am",
  h1: "Online Quran classes in the USA, taught one to one",
  intro:
    "Our tutors are in Pakistan, ten hours ahead of the US East Coast in winter and thirteen hours ahead of the West Coast. That sounds like an obstacle and mostly is not: your evening is our early morning, and your Saturday morning is our Saturday evening. This page sets out which slots genuinely work from each US time zone, how classes fit round the school year, and what the fees are in dollars.",
  metaTitle: "Online Quran classes USA, ET to PT slots | My Quran Guide",
  metaDescription:
    "One-to-one online Quran classes for families across the USA, with evening slots in ET, CT, MT and PT and weekend mornings. Two free trial classes.",
  primaryKeyword: "online Quran classes USA",
  sections: [
    {
      label: "Ten hours ahead of ET in winter, nine in summer",
      heading: "What the Pakistan time difference means for your slot",
      paragraphs: [
        "Pakistan Standard Time is UTC+5 and does not observe daylight saving, so the gap between your clock and your tutor's changes twice a year even though nothing changes here. Through the winter, Pakistan is ten hours ahead of Eastern time, eleven ahead of Central, twelve ahead of Mountain and thirteen ahead of Pacific. From the second Sunday in March, each of those numbers drops by one.",
        "The practical consequence is that the two coasts are not equally easy. An 8pm class in California falls at 9am in Pakistan, which is an ordinary working morning for a tutor. The same 8pm class in New Jersey falls at 6am. Both are covered, but East Coast evenings are staffed by a smaller overnight rota, so the popular 6pm to 8pm slots there are the first to go.",
        "If your schedule has any give in it, the windows easiest to book at short notice are weekday mornings before school and anything at the weekend. Seven in the morning in Chicago is six in the evening in Lahore, which is the middle of the tutor's day rather than the edge of it.",
      ],
    },
    {
      label: "Between the school bus and dinner",
      heading: "Where Quran classes fit in the American school week",
      paragraphs: [
        "Most US school days end between 2.30pm and 3.30pm, and the hour after that is usually the calmest part of a child's day: homework has not started, practice has not started, and nobody is tired yet. A 30-minute class at 4pm local time therefore lands in a useful gap, and it does so in every zone from Boston to Seattle.",
        "The fall semester runs from late August to December and the spring semester from January to late May or June, which gives you roughly nine months of routine and three months of something else. A workable pattern is to hold the same two or three weekday slots through the semester, then drop to twice a week over spring break and through the summer rather than stopping altogether.",
        "Stopping entirely for ten weeks is the one thing we would gently argue against. A child who reads nothing between June and late August tends to come back roughly where they were in April, and the first fortnight of the new school year goes on recovering ground rather than covering any.",
      ],
    },
    {
      label: "Sunday school, twenty-five children, one teacher",
      heading: "The weekend Islamic school, and what changes one to one",
      paragraphs: [
        "In most American cities the default is a Sunday school at the masjid: two or three hours, a mixed-age room, often twenty to thirty children and one teacher who may be a volunteer. Families in Dearborn or the south-west suburbs of Chicago may have one within ten minutes. Families outside Houston, Atlanta or in the wider Bay Area often drive thirty to forty minutes each way.",
        "That is not a criticism, and we would not tell you to give it up. Weekend school gives a child Muslim friends, a routine and a building, none of which a laptop provides. What it struggles to give is reading time: in a class of twenty-five, a child might recite aloud to the teacher for two or three minutes in a whole morning.",
        "A one-to-one class is thirty minutes of exactly that and nothing else. Running both — Sunday school for the community, two or three weekday classes for the actual recitation practice — generally works better than either on its own, and the weekday sessions are short enough not to crowd the week.",
      ],
    },
    {
      label: "Clocks move in March and November",
      heading: "Daylight saving, Arizona, and Ramadan",
      paragraphs: [
        "The US moves its clocks on the second Sunday in March and the first Sunday in November. Pakistan never does. We hold your local time fixed and let the tutor's clock absorb the change, so a 5pm slot stays a 5pm slot — but the tutor moves from a 3am start to a 2am start, and we confirm that with you rather than assume it.",
        "Arizona is the useful exception. Most of the state stays on Mountain standard time all year, so from March to November Phoenix and Los Angeles read the same clock and Arizona families are among the few whose slot never moves at all. Hawaii is in the same position for the same reason, at a much larger offset.",
        "Ramadan currently falls in the winter months and moves about eleven days earlier each year. A winter Ramadan is straightforward in the US: fasts are short, Isha comes in early, and evening classes carry on much as usual. Requests for extra Hifz and revision sessions cluster in the fortnight before the month starts, so it is worth asking early rather than in the first week.",
      ],
    },
    {
      label: "Priced in US dollars, no registration fee",
      heading: "Fees, payment and how enrolment works from the US",
      paragraphs: [
        "Every fee on the site is set once in US dollars, which means American families are reading the base figure rather than a conversion of it. There is no registration fee, no materials fee and no minimum term, and the monthly package price is the whole cost. Five per cent comes off the fees for each additional child from the same family.",
        "Payment is by card, PayPal, Wise or bank transfer. Zelle, Venmo and Cash App are what most American households reach for domestically and none of them cross a border, so PayPal or a card is the practical choice here. Billing is monthly, and you can move between a monthly package and per-class payment at any point.",
        "Before any of that, every new student takes two complete classes free of charge. They are real lessons with the tutor you would continue with, no card details are taken, and if the match is wrong we will try a different tutor rather than ask you to decide on the strength of one session.",
      ],
    },
  ],
  slotTable: {
    caption:
      "Windows shown in US standard time. Pakistan does not observe daylight saving, so between March and November every US zone sits one hour closer to the tutor's clock than the last column shows.",
    head: ["Time zone", "Weekday morning", "Weekday evening", "Evening slot in Pakistan"],
    rows: [
      ["Eastern (EST, UTC-5)", "6.00–7.30am", "4.00–8.30pm", "2.00–6.30am next day"],
      ["Central (CST, UTC-6)", "6.00–7.30am", "4.00–8.30pm", "3.00–7.30am next day"],
      ["Mountain (MST, UTC-7)", "6.00–7.30am", "4.00–8.30pm", "4.00–8.30am next day"],
      ["Pacific (PST, UTC-8)", "6.00–7.30am", "4.00–9.00pm", "5.00–10.00am next day"],
      ["Alaska (AKST, UTC-9)", "6.00–7.30am", "4.00–8.00pm", "6.00–10.00am next day"],
    ],
  },
  currency: "USD",
  faqs: [
    {
      q: "What time are classes for students on the East Coast?",
      a: "The workable windows are 4pm to 8.30pm ET on weekdays and 7am to 1pm ET at the weekend. In winter that evening band is 2am to 6.30am in Pakistan, so it is covered by a dedicated overnight rota and the earliest evening slots go first. Give us two or three options when you book and we will hold the closest one.",
    },
    {
      q: "Do class times change when the clocks go forward in March?",
      a: "Your local time stays as it is. Pakistan does not observe daylight saving, so when the US moves forward on the second Sunday in March the tutor's clock shifts by an hour instead of yours. We message to confirm rather than assume, because a few families prefer to move with the tutor and keep the same Pakistani hour.",
    },
    {
      q: "Can my child do this instead of Sunday school at the masjid?",
      a: "You can, but doing both usually works better. Weekend school gives a child a peer group, a routine and a physical community that an online class does not. One-to-one classes give thirty minutes of uninterrupted reading and correction, which a room of twenty-five children cannot. They solve different problems.",
    },
    {
      q: "Which payment methods work from the United States?",
      a: "Card, PayPal, Wise and international bank transfer. Zelle, Venmo and Cash App are domestic-only and will not reach an overseas account, so PayPal or a card is the simplest route. Fees are quoted in US dollars, which is the currency every price on this site is set in originally.",
    },
    {
      q: "Are classes taught in English?",
      a: "Entirely, with Arabic terms introduced and explained on first use rather than assumed. That matters for American children who read and write only in English. If you would also like a tutor who can explain in Urdu, say so when you book and we will match one.",
    },
    {
      q: "What should we do about the long summer break?",
      a: "Dropping from four classes a week to two across June, July and August works better than stopping. It keeps your slot and your tutor, and it avoids the two or three weeks of recovery that follow a full ten-week gap. You can switch between a monthly package and per-class payment at any time to make that cheaper.",
    },
  ],
  relatedCourses: ["qaida", "recitation", "female"],
  closing: {
    title: "Book before the evening band fills",
    body: "Tell us your city and two or three times that would work, and we will come back with the closest slot we can hold in your own time zone. The first two classes are free and no card details are taken.",
    action: "Book two free classes",
  },
  lastUpdated: LAST_UPDATED,
};

export const UK_PAGE: LandingPage = {
  path: "/online-quran-classes-uk",
  breadcrumbLabel: "Quran classes in the UK",
  heroLabel: "After-school slots from 4pm, weekend mornings from 9am",
  h1: "Online Quran classes in the UK for children and adults",
  intro:
    "Pakistan is five hours ahead of the UK in winter and four hours ahead once British summer time begins, which makes Britain the most straightforward country we schedule. Your child's 4pm is our 9pm, and your Saturday morning is our Saturday afternoon. This page covers which slots are realistic during term time, how classes sit alongside a local madrasah rather than replacing it, and what the fees come to in pounds.",
  metaTitle: "Online Quran classes UK, weekday evenings | My Quran Guide",
  metaDescription:
    "Online Quran classes for UK families: after-school slots from 4pm and weekend mornings, one-to-one with certified tutors. Two free trial classes.",
  primaryKeyword: "online Quran classes UK",
  sections: [
    {
      label: "Four or five hours ahead, depending on the month",
      heading: "Why UK timings are simple, and where they still pinch",
      paragraphs: [
        "Pakistan Standard Time is UTC+5 with no daylight saving. From late October to late March the UK is on GMT and Pakistan is five hours ahead; from the last Sunday in March the UK is on BST and the gap narrows to four. A class at 5pm in Birmingham is therefore 10pm in Lahore in January and 9pm in July.",
        "That puts the whole British after-school window inside a normal tutor evening, which is why UK slots between 4pm and 7pm can usually be filled quickly, including at short notice. The pinch point comes later: anything after about 8.30pm GMT is past 1.30am for the tutor and goes to the overnight rota rather than the main one.",
        "Adults who work often prefer the other end of the day. A 7am class before commuting is midday in Pakistan, which is the easiest hour of the week to staff, and it has the practical advantage of happening before anything else in the day has a chance to displace it.",
      ],
    },
    {
      label: "Half terms in October, February and May",
      heading: "Fitting classes round the school year",
      paragraphs: [
        "The English and Welsh school year runs in three terms with half-term breaks in late October, mid-February and late May, plus a fortnight at Christmas and Easter and around six weeks from late July. Scottish schools go back in mid-August and finish in late June, and the October and February breaks fall on different weeks, so families in Glasgow or Dundee should not assume the English dates.",
        "Half terms are short enough that most families keep their normal slots and simply move them earlier in the day, since there is no school run to work around. The six-week summer holiday is where routines break, and it is worth deciding in June whether you are pausing or dropping to two days a week. The second is far easier to come back from.",
        "May and June are the other pressure point, because SATs, GCSEs and A-levels all land there. Reducing to two classes a week through exam season and picking the schedule back up in July is a normal request, and it does not cost you your tutor or your slot.",
      ],
    },
    {
      label: "Five evenings a week at the local masjid",
      heading: "The madrasah, and the comparison worth making honestly",
      paragraphs: [
        "In Bradford, Blackburn, east Birmingham, parts of Manchester and much of east London, the supplementary madrasah is simply what children do: roughly 5pm to 7pm, Monday to Friday, at a mosque within walking distance. It is ten hours a week of Islamic environment for a fee no online provider can match, and it puts a child among other Muslim children every single evening.",
        "The trade-off is individual reading time. A class of twenty-five running for two hours cannot give each child more than a few minutes reciting aloud with correction, and correction is the part that actually moves a student forward. Parents often notice this when a child has attended for three years and still reads haltingly.",
        "The two are not in competition. One workable arrangement is madrasah on the evenings it runs plus two one-to-one sessions a week for recitation and Tajweed; another is online classes only through the summer holiday, when the madrasah closes. If the local madrasah is working for your child, keep it.",
      ],
    },
    {
      label: "Nineteen-hour summer fasts in the north",
      heading: "Ramadan in Britain, and the clock change",
      paragraphs: [
        "British Ramadan is unusually sensitive to which month it falls in, because the UK sits far enough north for day length to swing hard. A February fast in Manchester runs around eleven hours; a June fast is closer to nineteen, and Isha does not come in until well after eleven at night. Evening classes are comfortable in the first case and effectively impossible in the second.",
        "Ramadan moves about eleven days earlier each year, so it drifts steadily across the calendar and, in some years, across the last Sunday in March when British clocks go forward. Where the two collide, your slot would shift by an hour in the middle of the month. We re-confirm the timing with you instead of quietly moving you.",
        "During the month itself, most UK families move classes to the late morning or early afternoon, which is easy for us because that is the Pakistani afternoon and evening. Requests for extra Hifz and revision sessions rise in the fortnight beforehand, so booking the Ramadan timetable in advance is worth doing.",
      ],
    },
    {
      label: "Billed in pounds at a published rate",
      heading: "Fees, payment and what the free trial actually is",
      paragraphs: [
        "Fees are held once in US dollars and converted to pounds at a fixed published rate, which is why the pound column does not drift row by row against the dollar one. There is no registration fee, no materials charge and no minimum term. Five per cent comes off the fees for each additional child from the same family.",
        "UK families usually pay by debit card or bank transfer, and PayPal and Wise both work. There is no direct debit mandate to set up and no contract to give notice on, so if you stop, you stop, and unused classes are refunded pro rata within the published refund window.",
        "Before any of that, every new student takes two complete classes free of charge with the tutor they would keep. Nothing is taken from a card and no one will chase you afterwards. Support runs on WhatsApp and answers within one to two hours, which is usually faster than email.",
      ],
    },
  ],
  slotTable: {
    caption:
      "Term-time windows in UK local time. Pakistan is five hours ahead during GMT and four hours ahead during BST, so the tutor's clock moves in late March and late October, not yours.",
    head: ["UK slot", "Local time", "Tutor's time (PKT, winter)", "Best suited to"],
    rows: [
      ["Before school", "6.30–7.45am", "11.30am–12.45pm", "Working adults and older students"],
      ["Late morning", "9.00–11.30am", "2.00–4.30pm", "Home-educated children and shift workers"],
      ["After school", "4.00–6.00pm", "9.00–11.00pm", "Primary and secondary school children"],
      ["Evening", "6.00–8.30pm", "11.00pm–1.30am", "Teenagers and adults after work"],
      [
        "Weekend morning",
        "9.00am–1.00pm",
        "2.00–6.00pm",
        "Longer 45-minute Hifz and Arabic sessions",
      ],
    ],
  },
  currency: "GBP",
  faqs: [
    {
      q: "What time do UK classes usually run?",
      a: "The after-school band from 4pm to 7pm is the most straightforward to arrange, because 4pm in the UK is 9pm in Pakistan during GMT. Before-school slots from 6.30am and weekend mornings from 9am are also comfortably staffed. Anything after 8.30pm is possible but goes to the overnight rota.",
    },
    {
      q: "Does our slot change when British summer time starts?",
      a: "Your time stays put. Pakistan does not change its clocks, so on the last Sunday in March the gap narrows from five hours to four and the tutor's evening shifts rather than yours. We confirm the week before rather than leaving it to chance.",
    },
    {
      q: "Should my child leave the local madrasah for online classes?",
      a: "Not on our advice. If your child is settled at a mosque madrasah, keep it, because the community and the nightly routine are worth a great deal. What one-to-one classes add is individual reading time, which is hard to come by in a class of twenty-five. Two online sessions a week alongside madrasah is a sensible split.",
    },
    {
      q: "Can we reduce classes during GCSEs or SATs?",
      a: "Yes, and it is a common request in May and June. Most families drop to two classes a week rather than stopping, which keeps both the tutor and the slot. There is no minimum term, and if you do stop entirely, unused classes are refunded pro rata.",
    },
    {
      q: "How does Ramadan work for UK families?",
      a: "It depends heavily on the time of year. In a winter Ramadan, evening classes carry on much as normal because Isha is early. In a summer Ramadan, with fasts approaching nineteen hours in northern England and Scotland, most families move to late morning or early afternoon, which suits Pakistani tutors well.",
    },
    {
      q: "Do you charge in pounds?",
      a: "Prices are shown in pounds, converted from the underlying US dollar figure at a fixed rate published next to the currency toggle. You can pay by debit or credit card, bank transfer, PayPal or Wise. There is no direct debit to set up, no registration fee and no minimum term.",
    },
  ],
  relatedCourses: ["qaida", "tajweed", "hifz"],
  closing: {
    title: "Try an after-school slot next week",
    body: "Send us your child's school finish time and we will suggest a 4pm or 4.30pm slot we can hold. The first two classes are free, there is no minimum term, and WhatsApp is answered within one to two hours.",
    action: "Book a free after-school trial",
  },
  lastUpdated: LAST_UPDATED,
};

export const CANADA_PAGE: LandingPage = {
  path: "/online-quran-classes-canada",
  breadcrumbLabel: "Quran classes in Canada",
  heroLabel: "After-school slots from 4pm, Halifax through Vancouver",
  h1: "Online Quran classes across Canada, taught one to one",
  intro:
    "Canada spans six time zones, from Newfoundland at UTC-3:30 to British Columbia at UTC-8, and our tutors are in Pakistan at UTC+5. A family in Halifax and a family in Surrey therefore need genuinely different slots, and two parts of the country do not change their clocks at all. This page works through what is realistic in each zone, how classes fit provincial school calendars, and what the fees are in Canadian dollars.",
  metaTitle: "Online Quran classes Canada, 6 time zones | My Quran Guide",
  metaDescription:
    "Online Quran classes for Canadian families from Halifax to Vancouver, with after-school and weekend slots in every province. Two free trial classes.",
  primaryKeyword: "online Quran classes Canada",
  sections: [
    {
      label: "Nine hours from Halifax, thirteen from Vancouver",
      heading: "Finding your slot in one of six time zones",
      paragraphs: [
        "In winter, Pakistan is eight and a half hours ahead of Newfoundland, nine ahead of Atlantic time, ten ahead of Eastern, eleven ahead of Central, twelve ahead of Mountain and thirteen ahead of Pacific. Pakistan does not observe daylight saving, so between March and November every one of those figures drops by an hour — except in the places that stay put.",
        "Most of Saskatchewan remains on Central standard time all year, and the Yukon has been on year-round UTC-7 since 2020, so families in Saskatoon, Regina and Whitehorse have a slot that never moves. Everywhere else shifts twice a year, and we hold your local time steady and move the tutor's rather than the other way round.",
        "Practically, western Canada has the easier ride. A 5pm class in Vancouver is 6am in Islamabad, which is a normal tutor start. The same 5pm in Toronto or Montreal is 3am, so Eastern evening slots are covered by a smaller overnight rota and the 4pm to 7pm band there is the first to book out.",
      ],
    },
    {
      label: "Ten provinces, ten calendars",
      heading: "The Canadian school year and where classes fit",
      paragraphs: [
        "There is no national school calendar in Canada; each province runs its own. Most start after Labour Day and finish in late June, with two weeks at Christmas and a spring break that is a single week in mid-March in Ontario but usually the first week of March in Quebec, where it is the semaine de relâche. British Columbia's break is often two weeks rather than one.",
        "School days end between 2.30pm and 3.30pm in most boards, so the natural slot is 4pm or 4.30pm local. Two or three weekday classes through the school year plus one longer weekend session is the pattern that holds up best, because it can absorb a week of hockey practice or a school trip without collapsing entirely.",
        "The long summer, from late June to early September, is where families most often drift. Dropping from four classes a week to two across July and August keeps a student's reading intact and makes September a continuation rather than a restart.",
      ],
    },
    {
      label: "Minus twenty-five and a forty-minute drive",
      heading: "Weekend Islamic school, and what winter does to it",
      paragraphs: [
        "Saturday or Sunday morning Islamic school at the masjid is the standard arrangement in Mississauga, Scarborough, Brampton, Ottawa, Calgary and Surrey. It typically runs two to three hours in mixed-age groups, and for many families it is the main place their children meet other Muslim children. That is worth something a video call does not replace.",
        "What Canadian winter does to it is specific. From December through March, a forty-minute drive across Calgary or the GTA in snow, in the dark, with a seven-year-old in the back, is the reason attendance falls away in exactly the months when routine matters most. Online classes are not better than being there; they are simply unaffected by the roads.",
        "Keeping the weekend school and adding two or three short weekday classes for the reading itself is a sensible split. The weekend gives the community and the classroom; the weekday sessions give the thirty minutes of one-to-one recitation that a group of twenty cannot.",
      ],
    },
    {
      label: "Taught in English, or Urdu on request",
      heading: "Language, Quebec, and what tutors will and will not teach in",
      paragraphs: [
        "Classes are taught in English throughout, with Arabic terms introduced and explained rather than assumed. Tutors will explain in Urdu or Punjabi if you ask for that during booking, which suits a good number of families across the GTA and in Montreal's South Asian communities.",
        "We do not teach in French. For families in Montreal, Laval or Gatineau whose children are schooled in French under the provincial rules, that is worth knowing before you book: the class will be in English, and for a child who reads and writes mainly in French, that is a second language layered on top of the Arabic.",
        "In practice most bilingual children handle it without difficulty, and some parents prefer it precisely because it keeps their child's English reading active. But we would rather say it plainly here than have you discover it in the trial class.",
      ],
    },
    {
      label: "Priced in Canadian dollars, no Interac",
      heading: "Fees, payment and how enrolment works",
      paragraphs: [
        "Fees are set once in US dollars and converted to Canadian dollars at a fixed published rate, so the figure you see is the figure you are billed. There is no registration fee, no materials fee and no minimum term, and each additional child from the same family gets five per cent off.",
        "Canadian households reach for Interac e-Transfer by default, and it is not something we can accept, because it does not send money outside Canada. Card, PayPal, Wise or an international bank transfer are the options that work. Wise usually gives the better rate on a recurring monthly payment from a Canadian account.",
        "Two full trial classes come first, free, with no card details taken. If the tutor is not the right fit for your child, we will match you with a different one rather than treat the trial as spent. Support runs on WhatsApp and replies within one to two hours.",
      ],
    },
  ],
  slotTable: {
    caption:
      "Standard-time windows in local Canadian clocks. Saskatchewan and the Yukon do not change their clocks; everywhere else moves an hour closer to Pakistan between March and November.",
    head: ["Time zone", "After school", "Weekend morning", "After-school slot in Pakistan"],
    rows: [
      ["Atlantic — Halifax (UTC-4)", "3.30–6.30pm", "8.00am–12.00pm", "12.30–3.30am next day"],
      [
        "Eastern — Toronto, Montreal, Ottawa (UTC-5)",
        "4.00–7.00pm",
        "8.00am–12.30pm",
        "2.00–5.00am next day",
      ],
      [
        "Central — Winnipeg, Saskatoon (UTC-6)",
        "4.00–7.00pm",
        "8.00am–12.30pm",
        "3.00–6.00am next day",
      ],
      [
        "Mountain — Calgary, Edmonton (UTC-7)",
        "4.00–7.30pm",
        "8.00–11.30am",
        "4.00–7.30am next day",
      ],
      [
        "Pacific — Vancouver, Surrey (UTC-8)",
        "4.00–8.00pm",
        "7.30–11.00am",
        "5.00–9.00am next day",
      ],
    ],
  },
  currency: "CAD",
  faqs: [
    {
      q: "What times work for families in Toronto and Montreal?",
      a: "Eastern time is ten hours behind Pakistan in winter, so a 4pm class in the GTA is 2am for the tutor. Those slots exist and are covered by an overnight rota, but the 4pm to 7pm band fills first. Weekend mornings from 8am ET are much easier to book at short notice.",
    },
    {
      q: "Is Vancouver easier to schedule than Toronto?",
      a: "Noticeably. Pacific time is thirteen hours behind Pakistan, so a 5pm class in Vancouver or Surrey is 6am for the tutor — an ordinary start rather than a night shift. Families in British Columbia and Alberta generally get their first choice of slot.",
    },
    {
      q: "What happens in Saskatchewan, where the clocks do not change?",
      a: "Nothing, which is the advantage. Most of Saskatchewan stays on Central standard time all year, as does the Yukon on UTC-7, so your slot never moves. Everywhere else in Canada shifts by an hour twice a year and we re-confirm the timing each time.",
    },
    {
      q: "Can classes be taught in French for our children in Quebec?",
      a: "No. Classes are taught in English, with Urdu or Punjabi available on request. For children schooled in French in Montreal, Laval or Gatineau, that is worth weighing before you book, although most bilingual students manage it without trouble.",
    },
    {
      q: "Can I pay by Interac e-Transfer?",
      a: "No, because Interac does not send money outside Canada. Payment is by card, PayPal, Wise or international bank transfer, and Wise usually gives the best rate on a recurring monthly payment from a Canadian account. Prices are shown in Canadian dollars, converted from the USD figure at a fixed published rate.",
    },
    {
      q: "How do classes fit around March break?",
      a: "There is no single national date to plan around: it is one week in Ontario, usually the first week of March in Quebec, and often two weeks in British Columbia. Most families keep their classes through it and simply move them earlier in the day, since there is no school run in the way.",
    },
  ],
  relatedCourses: ["recitation", "islamicStudies", "female"],
  closing: {
    title: "Find a slot that works in your province",
    body: "Tell us your city and whether you want weekday, weekend or both, and we will send back the times we can hold in your zone — including for the provinces whose clocks never move. The first two classes cost nothing.",
    action: "Book a free trial class",
  },
  lastUpdated: LAST_UPDATED,
};

export const AUSTRALIA_PAGE: LandingPage = {
  path: "/online-quran-classes-australia",
  breadcrumbLabel: "Quran classes in Australia",
  heroLabel: "After-school slots from 3.30pm in every state",
  h1: "Online Quran classes in Australia for kids and adults",
  intro:
    "Australia is the most straightforward country we schedule for. Perth is three hours ahead of our tutors in Pakistan, Adelaide four and a half, and Sydney five, which means the whole Australian afternoon and evening falls inside an ordinary Pakistani working day. This page sets out the slots available in each state, how classes fit four school terms and a summer holiday that lands in January, and what the fees look like in Australian dollars.",
  metaTitle: "Online Quran classes Australia, AEST slots | My Quran Guide",
  metaDescription:
    "Online Quran classes for Australian families in AEST, ACST and AWST, with after-school and evening slots seven days a week. Two free trial classes.",
  primaryKeyword: "online Quran classes Australia",
  sections: [
    {
      label: "Three hours ahead in Perth, five in Sydney",
      heading: "Why Australian timings are the easiest we schedule",
      paragraphs: [
        "Pakistan Standard Time is UTC+5. Western Australia is UTC+8, so Perth runs three hours ahead of the tutor; South Australia and the Northern Territory are UTC+9:30, four and a half hours ahead; and the eastern states are UTC+10, five hours ahead. During eastern daylight saving, Sydney, Melbourne, Canberra and Hobart move to UTC+11 and the gap becomes six.",
        "Run the numbers on an after-school class and the appeal is obvious. Four in the afternoon in Perth is one in the afternoon in Lahore. Four in the afternoon in Sydney is eleven in the morning. Both sit squarely in the middle of a tutor's working day, which is why Australian requests are rarely difficult to accommodate.",
        "The one genuinely awkward window is very early morning. A 6am class in Melbourne during daylight saving is midnight in Pakistan, and while it can be arranged it is not a slot we would recommend as a permanent fixture. Anything from about 8am local onwards is straightforward.",
      ],
    },
    {
      label: "Four terms, summer holiday over Christmas",
      heading: "The Australian school year runs the opposite way round",
      paragraphs: [
        "Australian schools run four terms: back at the end of January or the start of February, then roughly two-week breaks in April, July and late September, and a long summer holiday from mid-December to late January. If you have moved here from the UK or Canada, the thing to reset is that the long break falls at Christmas, not in July.",
        "That changes the planning. December and January are when Australian families most often stop entirely, and they are also months when tutors have more availability, so a summer-holiday intensive block — four or five short classes a week for six weeks — is genuinely easy to arrange here in a way it is not in the northern hemisphere.",
        "During term, school finishes between 3pm and 3.30pm in most states. A 4pm class two or three days a week is the standard arrangement, and it stays inside the tutor's afternoon in every Australian time zone, including the half-hour offsets in Adelaide and Darwin.",
      ],
    },
    {
      label: "Ten minutes in Lakemba, ninety in regional Victoria",
      heading: "What the local alternative looks like, city and country",
      paragraphs: [
        "Australia's Muslim population is concentrated: Sydney's south-west around Lakemba, Auburn and Bankstown, Melbourne's north and south-east around Broadmeadows and Dandenong, and sizeable communities in Perth, Brisbane and Adelaide. In those areas a weekend madrasah or an Islamic college is close by and well attended, and it is a real option we are not trying to talk you out of.",
        "Outside them the picture changes quickly. Families in regional New South Wales, in Tasmania, in the Northern Territory or on the outer edge of Perth may be an hour or more from the nearest weekend class, which in practice means it stops happening after the first month. This is the situation online classes were actually built for, rather than as an upgrade on something local.",
        "Even in the cities, group classes carry the same constraint they carry everywhere: in a room of twenty children, each one reads aloud for a couple of minutes. Thirty minutes one to one is thirty minutes of reading and correction, and the two combine well rather than cancelling each other out.",
      ],
    },
    {
      label: "Three states and a territory skip daylight saving",
      heading: "Ramadan, and the states that do not change their clocks",
      paragraphs: [
        "New South Wales, Victoria, South Australia, Tasmania and the ACT observe daylight saving from the first Sunday in October to the first Sunday in April. Queensland, Western Australia and the Northern Territory do not. For half the year Brisbane and Sydney are an hour apart despite sharing a coastline, and that mismatch is a common cause of a missed class here.",
        "Ramadan currently falls in the southern summer and moves about eleven days earlier each year. A summer Ramadan in Sydney means a fast of around fourteen hours with Maghrib after 7.30pm on daylight saving time, so the evening gets crowded. Most Australian families move to a late-morning or post-Asr slot for the month, and both of those are easy for us to staff.",
        "We put Ramadan timetables together in the fortnight before the month begins, because that is when the requests cluster and when the better slots are taken. If you want additional Hifz or revision sessions during the month, or a different tutor for them, ask before the month starts rather than in the first week of it.",
      ],
    },
    {
      label: "Billed in Australian dollars at a published rate",
      heading: "Fees, payment and how to start",
      paragraphs: [
        "Fees are held once in US dollars and converted to Australian dollars at a fixed, published rate, which keeps the AUD figures consistent with every other currency on the site. There is no registration fee, no materials fee and no minimum term, and five per cent comes off for each additional child in the family.",
        "PayID, Osko and BPAY are how most Australian households pay locally, and none of them reach an overseas account. Card, PayPal, Wise and international bank transfer are the options that work. Wise is usually the cheapest way to send a monthly payment from an Australian bank account.",
        "Two complete trial classes come first and cost nothing. They are ordinary lessons with the tutor you would keep, no card details are taken, and at the end the tutor will tell you honestly whether the student is ready for the course you asked about or should start somewhere else.",
      ],
    },
  ],
  slotTable: {
    caption:
      "Local windows by state. Perth sits three hours ahead of the tutors and the eastern states five, or six while daylight saving is running, so almost every Australian slot falls inside the Pakistani working day.",
    head: [
      "State and zone",
      "Weekday after school",
      "Weekday evening",
      "After-school slot in Pakistan",
    ],
    rows: [
      ["NSW, VIC, QLD, TAS, ACT — AEST (UTC+10)", "3.30–6.00pm", "6.00–9.00pm", "10.30am–1.00pm"],
      [
        "NSW, VIC, TAS, ACT — AEDT (UTC+11, Oct to Apr)",
        "3.30–6.00pm",
        "6.00–9.00pm",
        "9.30am–12.00pm",
      ],
      ["SA, NT — ACST (UTC+9:30)", "3.30–6.00pm", "6.00–9.00pm", "11.00am–1.30pm"],
      ["SA — ACDT (UTC+10:30, Oct to Apr)", "3.30–6.00pm", "6.00–9.00pm", "10.00am–12.30pm"],
      ["WA — AWST (UTC+8)", "3.30–6.00pm", "6.00–9.30pm", "12.30–3.00pm"],
    ],
  },
  currency: "AUD",
  faqs: [
    {
      q: "What times can Australian students actually get?",
      a: "Almost any of them. Perth is three hours ahead of Pakistan, Adelaide four and a half and Sydney five, so the whole Australian afternoon and evening sits inside the tutor's normal working day. After-school slots from 3.30pm and evening slots up to about 9pm are all comfortably staffed.",
    },
    {
      q: "How does daylight saving affect our class?",
      a: "It depends on your state. New South Wales, Victoria, South Australia, Tasmania and the ACT move forward on the first Sunday in October; Queensland, Western Australia and the Northern Territory do not move at all. Pakistan never changes its clocks, so we adjust the tutor's side and keep your local time fixed.",
    },
    {
      q: "We are in regional Australia with no madrasah nearby. Is this suitable?",
      a: "That is a large part of who these classes are for. If the nearest weekend Islamic school is an hour's drive, it usually stops happening within a couple of months. An online class removes the travel entirely, and 30 or 45 minutes one to one covers more reading than a group session of twice the length.",
    },
    {
      q: "What happens over the December and January school holidays?",
      a: "It is the quietest stretch for Australian families and one of the easier ones for us to staff, so it suits an intensive block of four or five short classes a week through January. Families who would rather stop can pause and resume without losing their tutor, provided we know in advance.",
    },
    {
      q: "How do Ramadan timings work in Australia?",
      a: "Ramadan currently falls in the southern summer, so fasts run to around fourteen hours in Sydney and Maghrib is after 7.30pm on daylight saving time. Evening classes get squeezed, and most families move to a late-morning or post-Asr slot for the month. Ask a fortnight ahead, because that is when the Ramadan timetable fills.",
    },
    {
      q: "How do we pay from an Australian bank account?",
      a: "By card, PayPal, Wise or international bank transfer. PayID, Osko and BPAY only work domestically, so they are not options here. Prices are shown in Australian dollars, converted from the underlying US dollar figure at a fixed rate published next to the currency toggle.",
    },
  ],
  relatedCourses: ["qaida", "arabic", "islamicStudies"],
  closing: {
    title: "Name a time and we can almost certainly staff it",
    body: "Australian slots sit in the middle of our tutors' working day, so tell us your state and the hour you would prefer and we will confirm quickly. Two full classes free, no card details, no obligation afterwards.",
    action: "Book two free trial classes",
  },
  lastUpdated: LAST_UPDATED,
};

export const GEO_PAGES: ReadonlyArray<LandingPage> = [
  USA_PAGE,
  UK_PAGE,
  CANADA_PAGE,
  AUSTRALIA_PAGE,
];

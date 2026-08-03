# My Quran Guide — Full Audit & Rebuild Specification

**Audited URL:** `https://quran-pure-render.vercel.app/`
**Canonical target:** `https://myquranguide.com/`
**Date:** 3 August 2026
**Pages reviewed:** `/`, `/courses`, `/fee-schedule`, `/free-trial`, `/online-tajweed-classes`, plus nav/footer structure across all templates.

---

# PART 1 — AUDIT

## 1.1 Executive summary

The site is **structurally sound and content-rich** — the information architecture is correct, the pages are properly segmented by intent, meta tags are hand-written rather than auto-generated, breadcrumbs exist, and there's a "Skip to main content" link. That's already ahead of most sites in this niche.

The problems are in three places:

1. **A deployment-level SEO hazard** that can suppress the real domain entirely.
2. **A design language that signals "cheap template"** — emoji icons, `>>> arrow <<<` buttons, table-driven layout, one anonymous testimonial — which is fatal in a category where the entire purchase decision is *trust with your child*.
3. **A near-total absence of the content and schema layer** that actually wins rankings for this keyword set.

| # | Issue | Area | Severity |
|---|---|---|---|
| 1 | Vercel preview is `index, follow` while canonical points to `myquranguide.com` | Technical SEO | 🔴 Critical |
| 2 | No verifiable structured data (Course / FAQPage / Organization / Breadcrumb) | Technical SEO | 🔴 Critical |
| 3 | FAQ answers appear absent from server-rendered HTML | Technical SEO | 🔴 Critical |
| 4 | Emoji used as the entire icon system (📖 🕌 ✨ 🏆 ☪ 🌙 🌸 💰 🔄 👨‍👩‍👧 💳 🎁) | Design | 🔴 Critical |
| 5 | `>>> Book Free Tajweed Trial <<<` CTA styling | Design / Trust | 🔴 Critical |
| 6 | Single anonymous testimonial ("Sarah M., Mother of 2") | Trust / E-E-A-T | 🔴 Critical |
| 7 | No tutor identities, photos, credentials, or team page | E-E-A-T | 🔴 Critical |
| 8 | No blog / informational content hub | Content SEO | 🔴 Critical |
| 9 | No geo-targeted landing pages (USA / UK / Canada / Australia) | Content SEO | 🟠 High |
| 10 | Free-trial form has no timezone field | Functionality / Conversion | 🟠 High |
| 11 | No booking calendar, no thank-you page, no conversion tracking | Functionality | 🟠 High |
| 12 | Icon-only social links with no accessible name (rendered as raw URLs) | Accessibility | 🟠 High |
| 13 | Logo `<img>` with empty `alt` | Accessibility | 🟠 High |
| 14 | Duplicated eyebrow + H2 text ("WHAT IS TAJWEED?" → "What Is Tajweed?") | Design / SEO | 🟠 High |
| 15 | Price ranges (`$35–$45`) instead of fixed prices | Conversion / Schema | 🟠 High |
| 16 | USD↔GBP conversion inconsistent across the per-class table | Trust / Copy | 🟠 High |
| 17 | Identical CTA block repeated 2–3× per page | Design / Content ratio | 🟡 Medium |
| 18 | Tables used as layout for non-tabular content | Design | 🟡 Medium |
| 19 | No Arabic typography anywhere on a Quran site | Design | 🟡 Medium |
| 20 | Qatar phone number vs "tutors from Pakistan" — no registered entity address | Trust / Local SEO | 🟡 Medium |
| 21 | OG image inconsistency (`hero-quran.jpg` on home, `og-cover.png` elsewhere) | Social / SEO | 🟡 Medium |
| 22 | No `hreflang`, no Urdu/Arabic locale | International SEO | 🟡 Medium |
| 23 | Weak internal linking — course pages don't cross-link to siblings | SEO | 🟡 Medium |
| 24 | No dark mode, no reduced-motion handling stated | Design / A11y | 🟢 Low |
| 25 | No WhatsApp float, no live chat, no currency auto-detect | Functionality | 🟢 Low |

---

## 1.2 Technical SEO

### 🔴 The canonical/indexing conflict — fix this first

Every page on the Vercel deployment serves:

```
<link rel="canonical" href="https://myquranguide.com/…">
<meta name="robots" content="index, follow, max-image-preview:large, …">
```

This is a **contradiction**. You are inviting Google to crawl and index `quran-pure-render.vercel.app` while simultaneously telling it the real page lives elsewhere. Outcomes range from "Google ignores it" to "Google indexes the preview, splits your link equity, and flags duplicate content on your money domain."

**Fix:**
- Preview/staging deployments must serve `X-Robots-Tag: noindex, nofollow` at the header level (Vercel `headers` config keyed on `VERCEL_ENV !== 'production'`).
- Add a `robots.txt` on preview with `Disallow: /`.
- Add HTTP Basic Auth or Vercel Deployment Protection on preview branches.
- Production must serve self-referencing canonicals only.
- Confirm `myquranguide.com` is the primary domain in Vercel and that `www` → apex (or vice versa) 301s cleanly, HTTPS-only, no chained redirects.

### 🔴 Structured data

No JSON-LD was detectable in the rendered output. For this business model, that's the single highest-leverage technical win available. You are missing:

- `EducationalOrganization` / `Organization` (brand entity, logo, sameAs, contactPoint)
- `Course` + `CourseInstance` on all 7 course pages → eligible for Google's course carousel
- `Offer` / `AggregateOffer` on `/fee-schedule` → price display in SERPs
- `FAQPage` on the 5 pages that already have FAQ content
- `BreadcrumbList` — breadcrumbs are visually rendered but likely unmarked
- `Review` / `AggregateRating` — **only once you have real, attributable reviews.** Marking up a single anonymous testimonial as an aggregate rating is a manual-action risk. Do not do it.
- `WebSite` + `SearchAction` once site search exists

### 🔴 FAQ answers may not be in the HTML

On `/`, `/courses`, `/fee-schedule` and `/online-tajweed-classes`, the FAQ questions render as headings but **the answers did not appear in the extracted HTML**. If the accordion body is mounted only on click (client-side), the answers are invisible to crawlers and you lose:

- All long-tail FAQ keyword coverage
- FAQPage rich-result eligibility
- ~30–40% of the actual word count on those pages

**Fix:** use `<details>/<summary>` or an always-in-DOM accordion with `hidden`/`max-height` collapse. Content must exist in the initial server response. Verify by disabling JS and viewing source.

### Other technical items to verify and fix

- **`sitemap.xml`** — must exist at production root, list all ~14 URLs, include `lastmod`, and be referenced from `robots.txt`.
- **`robots.txt`** — production version should allow all, disallow nothing meaningful, and point to the sitemap.
- **Title lengths** — several exceed the ~60-char SERP pixel budget and will truncate:
  - `Online Tajweed Classes — Learn Quran with Proper Rules | My Quran Guide` (70)
  - `Online Quran Courses | Tajweed, Hifz, Arabic & More — My Quran Guide` (67)
  - `Online Quran Classes Fee Schedule | Affordable Pricing — My Quran Guide` (70)
  Use one separator convention (`|`), drop the doubled brand, target 52–58 chars.
- **OG images** — `/` points to `hero-quran.jpg`, all others to `og-cover.png`. A photo is not an OG card. Build one 1200×630 template per page type with the page title baked in.
- **`hreflang`** — none present. If you serve UK/US/Gulf/Pakistan audiences, at minimum add `en` + `x-default`; add `ur` when the Urdu locale ships.
- **Image optimisation** — `hero-quran.jpg` is a raw JPG. Serve AVIF/WebP via `next/image`, `priority` on the LCP image, explicit width/height to kill CLS.

---

## 1.3 On-page SEO & keyword strategy

### What's working
Intent segmentation is genuinely good: one page per course, clean `/online-tajweed-classes` style slugs, a dedicated fee page, a dedicated free-trial page. Meta descriptions are written for click-through, not stuffed. Course pages have real depth (the Tajweed syllabus with Makharij / Sifaat / Madd / Waqf modules is legitimately useful content).

### What's missing

**1. Zero informational content.** This niche is ~70% informational search volume. Every competitor ranking above you has a blog. You currently capture only bottom-funnel commercial queries, which are the most competitive and the most expensive.

**2. No geo pages.** The real money keywords carry a country modifier. `online Quran classes USA`, `Quran teacher UK`, `online Quran academy Canada`, `Quran classes Australia`. You have no page that can rank for any of them.

**3. No audience-segment pages.** "Quran classes for kids", "Quran for adults / beginners", "Quran classes for reverts / new Muslims", "one-to-one Quran tutor" are all distinct search intents currently collapsed into `/courses`.

**4. Keyword cannibalisation risk.** `/` , `/courses`, and the seven course pages all target overlapping "online Quran classes" phrasing. Each needs a single, distinct primary keyword.

### Recommended keyword map

*(Volumes are directional estimates based on category patterns — validate in Ahrefs/Semrush/Keyword Planner before committing.)*

| URL | Primary keyword | Secondary / supporting |
|---|---|---|
| `/` | online Quran classes | learn Quran online, online Quran academy, Quran classes online |
| `/courses` | online Quran courses | Quran course list, Quran learning programs |
| `/online-quran-classes-for-kids` **(new)** | online Quran classes for kids | Quran teacher for children, Quran for 5 year olds |
| `/online-quran-classes-for-adults` **(new)** | online Quran classes for adults | learn Quran as an adult, adult beginner Quran |
| `/quran-classes-for-new-muslims` **(new)** | Quran classes for new Muslims | revert Quran learning, Islam basics for converts |
| `/noorani-qaida-online` | Noorani Qaida online | Qaida classes, Arabic alphabet for kids |
| `/online-quran-recitation-classes` | online Quran recitation classes | Nazra Quran online, learn to read Quran |
| `/online-tajweed-classes` | online Tajweed classes | Tajweed rules course, learn Tajweed online |
| `/online-hifz-classes` | online Hifz classes | Quran memorization online, Hifz program online |
| `/online-arabic-language-classes` | Quranic Arabic classes online | learn Arabic online, Nahw and Sarf course |
| `/online-islamic-studies` | online Islamic studies classes | Fiqh classes online, Seerah course online |
| `/female-quran-classes-online` | female Quran teacher online | female Quran tutor for sisters, ladies Quran classes |
| `/fee-schedule` | online Quran classes fees | Quran tutor price, affordable Quran classes |
| `/free-trial` | free Quran class trial | free online Quran class, trial Quran lesson |
| `/online-quran-classes-usa` **(new)** | online Quran classes USA | Quran teacher USA, Quran academy America |
| `/online-quran-classes-uk` **(new)** | online Quran classes UK | Quran teacher UK, Quran tutor London |
| `/online-quran-classes-canada` **(new)** | online Quran classes Canada | Quran tutor Toronto |
| `/online-quran-classes-australia` **(new)** | online Quran classes Australia | Quran tutor Sydney |
| `/tutors` **(new)** | certified Quran tutors | Quran teacher qualifications, Ijazah tutors |
| `/blog/*` **(new)** | informational cluster | see below |

### Blog cluster — first 20 posts (ordered by priority)

**Cluster A — Tajweed (supports `/online-tajweed-classes`)**
1. What is Tajweed and why is it obligatory?
2. The 17 Makharij explained with practice tips
3. Noon Sakinah rules: Idhhar, Idghaam, Iqlaab, Ikhfaa — a beginner's guide
4. Madd rules explained: the 6 types and their counts
5. The 10 most common Tajweed mistakes and how to fix them

**Cluster B — Hifz (supports `/online-hifz-classes`)**
6. How long does it take to memorise the Quran?
7. The Sabaq / Sabaqi / Manzil system explained
8. A realistic daily Hifz schedule for working adults
9. How to stop forgetting what you've memorised
10. Starting Hifz as an adult: is it too late?

**Cluster C — Parents & kids (supports the kids page)**
11. Best age to start Quran classes for a child
12. How to keep a 6-year-old engaged in online Quran class
13. Online vs in-person Quran classes: an honest comparison
14. What to look for in a Quran teacher for your child
15. Screen time and Quran learning: a parent's guide

**Cluster D — New Muslims & beginners**
16. How to start reading the Quran as a complete beginner
17. Noorani Qaida vs Yassarnal Quran: which to start with
18. First 10 surahs every new Muslim should learn
19. Learning Quranic Arabic: where to actually begin
20. Quran learning for reverts: a 90-day roadmap

Each post: 1,200–2,000 words, one clear primary keyword, an FAQ block with `FAQPage` schema, 3–5 contextual internal links to the relevant course page, and a soft in-content CTA (not a banner).

---

## 1.4 E-E-A-T & trust — the biggest commercial gap

Parents are handing you their child, their money, and their religious education. The current site provides **zero verifiable evidence** that My Quran Guide is a real organisation.

| Missing signal | Why it matters |
|---|---|
| Tutor names, photos, bios, Ijazah/certification details | "Certified tutors" is claimed 20+ times with no proof anywhere |
| A physical/registered business address | No address on any page. Only a WhatsApp number |
| More than one testimonial | A single unnamed review reads as placeholder copy |
| Video proof (sample lesson clip, tutor intro) | The single highest-converting asset in this category |
| Founder story / who runs this | `/about` exists but no named human is attached to the brand |
| Third-party reviews (Trustpilot / Google Business Profile) | Zero off-site validation |
| Consistency | "+974" (Qatar) WhatsApp vs "tutors from Pakistan" — unexplained |

Also flag: `"Sarah M., Mother of 2"` with five stars and no photo, no date, no country, no course named. If this testimonial is not real, remove it — fabricated reviews are both a Google spam-policy exposure and, in an Islamic education brand, a serious credibility problem if discovered. If it *is* real, get permission to use a first name + last initial + country + course + date, and add four more.

---

## 1.5 Design audit

### 🔴 Emoji as the icon system

Across the site: `📖 🕌 ✨ 🏆 ☪ 🌙 🌸 💰 🔄 👨‍👩‍👧 💳 🎁`.

Three separate problems:
1. **Rendering** — emoji glyphs are supplied by the OS. Your course cards look completely different on iOS, Android, Windows and macOS. You have no control over your own brand's visual identity.
2. **Perceived quality** — emoji is the single strongest "this is a template / this was built fast" signal on the web. In a trust-first category, it directly costs conversions.
3. **Appropriateness** — `☪` (U+262A) as the icon for Islamic Studies is a poor choice; the star-and-crescent is a political/national symbol, not a religious one, and rendering it as a system emoji next to 🌸 and 💰 flattens the whole thing into decoration.

**Replace with:** a custom SVG icon set drawn from Islamic manuscript vocabulary — geometric girih tiles, muqarnas fragments, an ayah-marker rosette, a rehal (book stand), a reed pen (qalam), an arch. 24×24, 1.5px stroke, single-colour, inherits `currentColor`. Seven course icons + six feature icons = 13 icons. This is a half-day of work and it changes the entire perception of the brand.

### 🔴 `>>> Book Free Tajweed Trial <<<`

The course pages wrap CTA labels in ASCII arrows. This is the visual language of 2004 affiliate landing pages and low-quality lead-gen funnels. It reads as spam and it undermines every trust signal on the page.

**Replace with:** a properly designed button component. Label: `Book a free trial class`. Sentence case. No arrows. If you want directional emphasis, use a 16px chevron SVG that translates 2px on hover.

### 🟠 Eyebrow labels duplicate the H2

Pattern repeated on every page:

```
WHAT IS TAJWEED?          ← eyebrow
## What Is Tajweed?       ← H2
```

```
COURSE OVERVIEW
## Course Overview
```

The eyebrow's job is to add a second layer of information — a category, a stage, a count — not to echo the heading in caps. Either give it real content (`Module 2 of 6`, `For ages 5+`, `Foundation level`) or delete it.

### 🟠 Tables used as page layout

`/fee-schedule` contains four tables. `/free-trial` has an 12-row "At a Glance" table. `/courses` has a schedule table. Course pages have an overview table.

Tables are correct for the per-class price grid and the sibling discount tiers — those are genuinely tabular. They're wrong for "Free Trial at a Glance" (that's a spec list) and "You Choose — Your Days, Your Duration" (that's a feature set). Tables also degrade badly on mobile, where most of your traffic is.

**Replace with:** definition lists, spec strips, or chip/pill groups. Keep tables only where both axes carry meaning.

### 🟠 Repeated CTA blocks

Every page ends with **both** a large CTA section *and* the global "Ready to begin your Quran journey?" footer band — with a third CTA often mid-page. Three near-identical asks in a row produces banner blindness and pushes your boilerplate-to-content ratio into territory Google's helpful-content systems don't reward.

**Fix:** one contextual CTA per page, written for that page's specific intent (`/fee-schedule` → "Not sure which package fits? Get a personalised quote." ; `/online-hifz-classes` → "Start your Hifz with a free assessment class."). Keep one persistent sticky mobile CTA bar. Delete the generic footer band.

### 🟡 No Arabic typography

This is a Quran academy with no Arabic script anywhere. Terms like *Tajweed*, *Makharij*, *Sifaat*, *Ghunna*, *Hifz*, *Nahw*, *Sarf* appear only in transliteration. Setting each alongside its Arabic (تجويد, مخارج, صفات, غنة, حفظ, نحو, صرف) in a proper Naskh face is both an authenticity signal and a differentiator no competitor bothers with.

### 🟡 Colour & general direction

`theme-color: #2f7a61` — the default "Islamic mid-green". Every competitor in the category uses some version of it. It's not wrong, it's just invisible.

### Other design notes
- Logo `<img>` has an empty `alt`
- Social links render as raw URLs (`https://wa.me/97471763566`) — icon links with no accessible name
- Email shown as `mailto:info@myquranguide.com` as link text
- No dark mode
- One hero image, no video, no motion, no visual hierarchy beyond size
- `© 2026` is correct but there's no "last updated" date on any content page

---

## 1.6 Functionality & conversion

### Free trial form — the only conversion point on the site

Current fields: Full Name, Email, WhatsApp Number, Country, Student Age, Course, Tutor Gender, Preferred Timing, Platform, Notes. **Ten required fields.**

| Problem | Impact |
|---|---|
| **No timezone field** | You serve "all time zones" but ask for "Preferred Class Timing" with no timezone. Every submission requires a clarifying WhatsApp round-trip. This is the most expensive single defect on the site. |
| 10 fields, all at once | Each additional required field costs roughly 5–10% completion. Split into 3 steps or make 4 of them optional. |
| No visible success state | Users don't know if it worked; you can't fire a conversion event. |
| No `/thank-you` page | No GA4 / Meta Pixel / Google Ads conversion tracking possible. |
| No spam protection | Honeypot + Cloudflare Turnstile needed. |
| No calendar booking | The whole "we'll contact you within a few hours" step can be eliminated with Cal.com/Calendly. |
| No autofill attributes | Missing `autocomplete`, `inputmode="tel"`, `type="email"` |
| No WhatsApp pre-fill option | For this audience, "Book on WhatsApp" converts better than a form. It's buried in the footer. |

### Missing functionality

- Floating WhatsApp button (bottom-right, all pages)
- "Book on WhatsApp" as a co-equal CTA next to the form
- Currency toggle with IP-based default (USD/GBP/EUR/CAD/AUD)
- Timezone-aware "next available slot" display
- Cookie consent (required — you'll be serving UK/EU traffic and running analytics)
- Site search
- 404 page with course links
- No analytics evidence at all: GA4, Search Console, Bing Webmaster, Meta Pixel all appear absent

---

## 1.7 Accessibility

**Good:** skip link present, semantic headings, breadcrumbs, one H1 per page.

**Fix:**
- Empty `alt` on the logo → `alt="My Quran Guide"`
- Icon-only social links → `aria-label="WhatsApp"`, `aria-label="Facebook"`, etc.
- Email link text should be `info@myquranguide.com`, not `mailto:…`
- Accordions need `aria-expanded`, `aria-controls`, keyboard operability
- Verify 4.5:1 contrast on the green `#2f7a61` against white for body text
- Visible `:focus-visible` ring on every interactive element
- `prefers-reduced-motion` respected
- Form fields need real `<label>` elements (not placeholders) and `aria-describedby` for errors
- `lang="en"` on `<html>`, `lang="ar" dir="rtl"` on Arabic spans

---

## 1.8 Performance — checks to run

Run PageSpeed Insights and WebPageTest on production, mobile profile, and target:

| Metric | Target |
|---|---|
| LCP | < 2.5s |
| INP | < 200ms |
| CLS | < 0.1 |
| TTFB | < 600ms |
| Total page weight | < 1.2MB |

Likely wins: convert `hero-quran.jpg` to AVIF with `next/image priority`, self-host fonts with `font-display: swap` and preload the display face, ship static HTML for every page (all content here is static — use SSG, not SSR), and defer any third-party scripts.

---
---

# PART 2 — REBUILD PROMPT

Everything below is written to be pasted directly into Claude Code, Cursor, or v0 as a build brief. Adjust the stack line if you're not on Next.js.

---

## PROJECT BRIEF: My Quran Guide — complete rebuild

### Role
You are the design and engineering lead for a small studio. This client has already rejected one templated build. They are paying for a visual identity that could not be mistaken for any other online Quran academy. Make deliberate, opinionated choices and justify each one.

### Business context
My Quran Guide is an online Quran academy. Certified male and female tutors based in Pakistan teach students worldwide — primarily Muslim families in the USA, UK, Canada, Australia and the Gulf. Seven courses: Noorani Qaida, Quran Recitation, Tajweed, Hifz, Islamic Studies, Arabic Language, and Female-only classes. Classes run on Zoom/Skype/Google Meet, 30 or 45 minutes, 2–6 days per week. Every new student gets 2 free trial classes.

**The single job of this site:** convince a Muslim parent, in under 90 seconds, that this academy is real, qualified, and safe for their child — then get them to book a free trial.

**The audience is trust-first, not price-first.** Every design decision should be evaluated against: *does this make the organisation feel more real, or less?*

### Stack
- Next.js 15, App Router, TypeScript
- Tailwind CSS v4 with a custom token layer (no default palette, no default type scale)
- Static generation (`generateStaticParams`) for every page — no client-side data fetching for content
- MDX for blog posts
- Form handling via server action → Resend (email) + Google Sheets or Airtable
- Deploy on Vercel

---

## 2.1 Design system

### Direction: *Manuscript*

Ground the identity in the material world of the Quranic manuscript — not in generic mosque-and-crescent iconography, and not in the standard emerald-green SaaS template every competitor uses. The reference points are Ottoman and Mughal illuminated Qurans: rag paper, iron-gall ink, lapis lazuli and gold-leaf illumination, ruled `jadwal` margins, and rosette ayah markers between verses.

**Reject these three defaults outright:** warm-cream-plus-terracotta-serif; near-black-with-one-acid-accent; broadsheet-with-hairline-rules. They appear in every AI-generated design regardless of subject.

### Colour tokens

```css
--ink:        #10182B;  /* deep manuscript ink — headings, dark sections */
--ink-soft:   #2B3245;  /* body text */
--lapis:      #2A3F7E;  /* illumination blue — primary interactive */
--lapis-lift: #3C55A0;  /* hover */
--gold:       #B58A2C;  /* gold leaf, muted not shiny — accents, rules, rosettes */
--gold-wash:  #F0E4C4;  /* gold at 12% — highlight fills */
--paper:      #F5F2EA;  /* rag paper — page background */
--paper-warm: #FBF9F4;  /* card surfaces */
--rule:       #DCD5C4;  /* hairline dividers */
--success:    #2F6B4F;  /* confirmations only — NOT a brand colour */
```

Rules:
- `--gold` is for structure (rules, rosettes, dividers, small accents) — **never** for large fills or button backgrounds.
- All primary buttons use `--lapis`. All text on `--paper` uses `--ink-soft`. All headings use `--ink`.
- Dark mode inverts to `--ink` background with `--paper` text and `--gold` rules; `--lapis` lifts to `#5A74C4` for contrast.
- Verify every pairing hits 4.5:1 (body) / 3:1 (large text and UI).

### Typography

| Role | Face | Notes |
|---|---|---|
| Display | **Gentium Book Plus** | Designed by SIL specifically for scripture typesetting. Full diacritic coverage, pairs correctly with Arabic. Deliberately *not* Playfair / Fraunces / Cormorant — those are the category default. |
| Body | **Instrument Sans** | Neutral, high legibility, variable weight. |
| Arabic | **Amiri** | Naskh revival. Used for every Arabic term, always with `lang="ar" dir="rtl"`. |
| Data / price | **IBM Plex Mono** | Fees, schedules, durations, module numbers. Tabular figures. |

Type scale (1.25 ratio, fluid via `clamp()`):

```
display-xl   clamp(2.75rem, 5vw, 4rem)     Gentium 600, -0.02em
display-l    clamp(2rem, 3.5vw, 2.75rem)   Gentium 600
h2           clamp(1.6rem, 2.5vw, 2rem)    Gentium 600
h3           1.25rem                        Instrument 600
body-l       1.125rem / 1.7                 Instrument 400
body         1rem / 1.65                    Instrument 400
caption      0.875rem / 1.5                 Instrument 500, 0.04em tracking
mono         0.9375rem                      Plex Mono 500, tabular-nums
arabic       1.5em relative to context      Amiri 400
```

Body text max-width: 68ch. Never full-bleed paragraphs.

### Signature element: the ayah-marker rosette

The gold rosette that separates verses in a manuscript becomes the site's one memorable device. It appears in exactly four places and nowhere else:

1. **As list bullets** on every feature list (replacing emoji and generic dots)
2. **As the section divider** between major page sections — a single centred rosette on a hairline `--gold` rule
3. **Holding the numeral** in each "How it works" step (numeral in Plex Mono, inside the rosette)
4. **As a page-load animation** on the hero — the rosette draws itself once, 900ms, stroke-dasharray, respecting `prefers-reduced-motion`

One SVG, one component, four contexts. Spend your boldness here and keep everything else disciplined.

### Structural device: the jadwal rule

Course cards and pricing cards get a `jadwal` frame — a 1px `--rule` border with a 3px inset second rule in `--gold` at 40% opacity, 2px gap. Not on every card on the page; only on the seven course cards and the five pricing cards, where it signals "this is a defined unit of study."

Border radius: 2px globally. Manuscript pages don't have rounded corners. This one restraint does more for the identity than any decoration.

### Icon system — build this, do not use emoji

Custom SVG set, 24×24, 1.5px stroke, `currentColor`, no fills. Draw from manuscript and madrasa vocabulary:

| Icon | Motif |
|---|---|
| Noorani Qaida | Arabic alif letterform in a square frame |
| Quran Recitation | Open mushaf on a rehal (book stand) |
| Tajweed | Reed pen (qalam) with a sound arc |
| Hifz | Stacked juz' with a bookmark ribbon |
| Islamic Studies | Muqarnas arch fragment |
| Arabic Language | Interlocking girih tile |
| Female classes | Rosette variant with an inner eight-point star |
| Certified tutors | Ijazah seal / wax stamp |
| Flexible timing | Astrolabe ring |
| One-on-one | Two rehals facing |
| Platform | Simple screen with an arch inside |
| Free trial | Rosette with an open gap |
| Siblings discount | Three nested rosettes |

**Explicit ban: no emoji anywhere in the codebase.** Not in headings, not in cards, not in buttons, not in copy.

### Motion

Restrained and orchestrated, not scattered:
- Hero rosette draw-in on load (900ms, once)
- Section headings fade+rise 12px on scroll, staggered 60ms, `IntersectionObserver`, one-shot
- Buttons: 120ms background transition, chevron translates 2px
- Accordions: `grid-template-rows` transition, 200ms
- Everything wrapped in `@media (prefers-reduced-motion: no-preference)`

---

## 2.2 Copy rules

Rewrite all copy against these rules:

1. **Sentence case everywhere.** No ALL-CAPS eyebrows echoing the heading below them.
2. **No `>>>` or `<<<` anywhere.** Ever.
3. **Active voice, specific verbs.** "Book a free trial class", not "Submit". "Get your fee quote", not "Click here".
4. **The button label and the resulting page must match.** "Book a free trial class" → confirmation reads "Trial class booked".
5. **Eyebrows carry real information or are deleted.** `Module 3 of 6`, `For ages 5+`, `Foundation level` — not `COURSE OVERVIEW`.
6. **Every Arabic term gets its script on first use:** Tajweed (تجويد), Makharij (مخارج), Hifz (حفظ), Ijazah (إجازة).
7. **Never claim what you can't show.** Replace "certified tutors" with named tutors and their actual certifications. If you can't name them, write "Every tutor holds an Ijazah in Quranic recitation and passes a three-stage teaching assessment" — a specific claim beats a generic one.
8. **Fix the price inconsistency.** The per-class table has USD $6–$8 mapping to GBP £4–£6 for most courses but £6–£10 for Hifz and £8–£12 for Arabic against $10–$15. Set one canonical price per course per currency at a fixed exchange rate, and show fixed prices — not ranges. Ranges read as "we'll decide what to charge you."

---

## 2.3 Page-by-page specification

### `/` — Home
**Primary keyword:** online Quran classes
**Title:** `Online Quran Classes for Kids & Adults | My Quran Guide` (55)

Sections in order:
1. **Hero** — H1, one-sentence value line, two CTAs (`Book a free trial class` primary / `See courses` ghost), the rosette animation, and **three proof chips**: `Ijazah-certified tutors` · `Trial confirmed in 24h` · `Serving 12 countries`. Replace `hero-quran.jpg` with a real photo of a tutor mid-lesson if you can get one; a stock mushaf is generic.
2. **Trust bar** — tutor count, students taught, countries, average parent rating (only real numbers).
3. **Courses** — 7 cards in jadwal frames with custom icons. Each links to its own page.
4. **How it works** — 3 steps, rosette numerals.
5. **Meet the tutors** — 4 tutor cards: photo, name, Ijazah/qualification, years teaching, languages, specialisms. **This section is non-negotiable.** Links to `/tutors`.
6. **Testimonials** — minimum 5, each with first name + last initial, country, course taken, and date. Pull from real students only.
7. **Pricing preview** — 3 packages, fixed prices, currency toggle, link to `/fee-schedule`.
8. **FAQ** — 6 questions, `<details>` based, answers in initial HTML, `FAQPage` schema.
9. **Single closing CTA.**

### `/courses`
**Title:** `Online Quran Courses — Tajweed, Hifz, Qaida | My Quran Guide` (58)
Seven jadwal cards, a filter row (`Age` · `Level` · `Tutor gender`), and the schedule flexibility strip rebuilt as chip groups rather than a table. `ItemList` schema wrapping seven `Course` entries.

### Course pages ×7 (`/online-tajweed-classes` etc.)
**Template:**
1. Breadcrumb → H1 → one-line summary → free-trial CTA
2. "What is [subject]" — 2 paragraphs, Arabic term in Amiri
3. Course overview — spec strip (not a table): duration, days/week, level, prerequisite, tutor, platform
4. Syllabus — modules as an accordion, each expandable, all content in DOM. Keep the existing Tajweed module structure; it's genuinely good.
5. Who this is for — 4 personas
6. Assigned tutors for this course — 2 tutor cards
7. Fees for this course — fixed prices, link to `/fee-schedule`
8. FAQ — 5 Q&A, `FAQPage` schema
9. **Related courses** — 3 sibling course cards (this is the missing internal linking layer)
10. One closing CTA

`Course` + `CourseInstance` schema on every one.

### `/fee-schedule`
**Title:** `Online Quran Class Fees & Pricing | My Quran Guide` (50)
- Currency toggle (USD / GBP / EUR / CAD / AUD), IP-default, persisted
- 5 package cards in jadwal frames, fixed prices, "Most popular" on the 4-day
- Per-class table — **keep as a table**, it's genuinely tabular. Fix the USD/GBP inconsistency.
- Sibling discount — **keep as a table**
- Payment methods — chip group, not a table
- Refund policy — keep as prose bullets
- `AggregateOffer` schema

### `/free-trial` — rebuild the form completely

Three steps, progress indicator, one question group per step:

**Step 1 — Who's learning**
`Student name` · `Age` · `Learning for: myself / my child / my family`

**Step 2 — What and when**
`Course` (select) · `Tutor gender preference` · `Days per week` · `Session length: 30 / 45 min` · **`Timezone`** (auto-detected via `Intl.DateTimeFormat().resolvedOptions().timeZone`, editable) · `Preferred time window` (chips: Morning / Afternoon / Evening / Weekend, **shown in the user's own timezone**)

**Step 3 — How to reach you**
`Your name` · `Email` · `WhatsApp` (country-code selector, `inputmode="tel"`) · `Country` · `Anything else` (optional)

Requirements:
- Real `<label>` elements, correct `autocomplete` on every field
- Inline validation on blur, `aria-describedby` error messages
- Honeypot + Cloudflare Turnstile
- Server action → Resend email + Airtable row
- Redirect to `/thank-you` with a GA4 `generate_lead` event and Meta Pixel `Lead`
- **A "Book on WhatsApp instead" button of equal visual weight beside the form**, pre-filled with course and name
- `/thank-you` shows: what happens next, expected response time, WhatsApp link, and 3 blog posts to read meanwhile

### New pages to build
- `/tutors` — full tutor directory with photos, credentials, specialisms, languages, `Person` schema each
- `/online-quran-classes-for-kids` — parent-focused, safeguarding section, sample lesson video
- `/online-quran-classes-for-adults` — beginner-shame-free framing, evening/weekend emphasis
- `/quran-classes-for-new-muslims` — 90-day roadmap, no-prior-knowledge framing
- `/online-quran-classes-usa` · `/uk` · `/canada` · `/australia` — each with local timezone slot tables, local currency default, testimonials from that country. **Write genuinely different content per page** — do not spin one template with the country name swapped; that's doorway-page territory.
- `/blog` + 20 posts per the cluster plan in Part 1
- `/thank-you`
- `/404` with course links and search

---

## 2.4 SEO implementation checklist

### Technical
- [ ] `X-Robots-Tag: noindex, nofollow` on all non-production Vercel envs
- [ ] `robots.txt` — `Disallow: /` on preview, allow-all + sitemap reference on production
- [ ] Vercel Deployment Protection enabled on preview branches
- [ ] Self-referencing canonicals in production only
- [ ] `sitemap.xml` auto-generated with `lastmod`
- [ ] Every page statically generated
- [ ] All titles 52–58 chars, single `|` separator, brand appended once
- [ ] All meta descriptions 140–158 chars
- [ ] Per-page OG images, 1200×630, generated via `next/og`
- [ ] `hreflang`: `en` + `x-default`; add `ur` when the Urdu locale ships
- [ ] All images via `next/image`, AVIF/WebP, `priority` on LCP, explicit dimensions
- [ ] Self-hosted variable fonts, `font-display: swap`, preload display face
- [ ] GA4 + Google Search Console + Bing Webmaster + Meta Pixel installed
- [ ] Cookie consent banner (Consent Mode v2)

### Schema — implement all of these
```
Organization / EducationalOrganization   → root layout
WebSite + SearchAction                    → root layout
BreadcrumbList                            → every page below root
Course + CourseInstance                   → 7 course pages
ItemList                                  → /courses
AggregateOffer                            → /fee-schedule
FAQPage                                   → /, /courses, /fee-schedule, /free-trial, 7 course pages, blog posts
Person                                    → each tutor on /tutors
Article + author + datePublished          → every blog post
Review / AggregateRating                  → ONLY with real, attributable, dated reviews
```

### Content
- [ ] FAQ answers present in server-rendered HTML — verify with JS disabled
- [ ] Every page has one distinct primary keyword; no two pages target the same phrase
- [ ] 3–5 contextual internal links per page, descriptive anchor text
- [ ] Related-courses block on every course page
- [ ] `Last updated` date on every course page and blog post
- [ ] H1 once per page, logical H2/H3 nesting, no skipped levels
- [ ] Alt text on every image, describing content not keywords

---

## 2.5 Accessibility & quality floor

- [ ] `alt="My Quran Guide"` on the logo
- [ ] `aria-label` on every icon-only link (WhatsApp, Facebook, Instagram)
- [ ] Email link text is the address, not `mailto:…`
- [ ] Accordions: `<details>`/`<summary>` or `aria-expanded` + `aria-controls`, full keyboard support
- [ ] Visible `:focus-visible` ring — 2px `--lapis`, 2px offset
- [ ] All colour pairs ≥ 4.5:1 body / 3:1 large & UI
- [ ] `prefers-reduced-motion` respected on every animation
- [ ] `lang="ar" dir="rtl"` on every Arabic span
- [ ] Skip link retained and styled on focus
- [ ] Responsive 320px → 1920px, no horizontal scroll at any width
- [ ] Sticky mobile CTA bar (`Book free trial` + `WhatsApp`), safe-area inset aware

## 2.6 Performance targets
LCP < 2.5s · INP < 200ms · CLS < 0.1 · TTFB < 600s · page weight < 1.2MB · Lighthouse ≥ 95 across all four categories on mobile.

---

## 2.7 Definition of done

The build is complete when all of the following are true:

1. Zero emoji in the entire codebase.
2. Zero `>>>` / `<<<` in any label.
3. Thirteen custom SVG icons shipped and in use.
4. The rosette appears in exactly four contexts and nowhere else.
5. Every FAQ answer is visible with JavaScript disabled.
6. All nine schema types validate in Google's Rich Results Test with zero errors.
7. Preview deployments return `noindex`; production returns self-referencing canonicals.
8. The free-trial form captures timezone and completes in three steps.
9. `/thank-you` exists and fires a GA4 conversion event.
10. At least four named tutors with photos and stated credentials are live.
11. At least five testimonials with name, country, course and date.
12. Every price is a fixed number, not a range, and USD/GBP are internally consistent.
13. Lighthouse mobile ≥ 95 on Performance, Accessibility, Best Practices and SEO.

---

## 2.8 Suggested build order

| Phase | Work | Why first |
|---|---|---|
| 0 | `noindex` on preview, canonicals, robots, sitemap, GSC + GA4 | Stops active damage |
| 1 | Design tokens, type, icon set, rosette, core components | Everything else depends on it |
| 2 | Rebuild `/`, `/courses`, 7 course pages | Highest-traffic templates |
| 3 | All schema, FAQ-in-DOM fix | Biggest ranking lever available |
| 4 | Free-trial form rebuild + `/thank-you` + tracking | Biggest conversion lever |
| 5 | `/tutors`, testimonials, real proof assets | Biggest trust lever |
| 6 | Audience pages + geo pages | New keyword surface |
| 7 | Blog infrastructure + first 10 posts | Compounding organic growth |
| 8 | Urdu locale, currency detect, live chat, search | Polish |

---

*One note before you build: phases 0–5 are worth more than everything after them combined. The site doesn't currently have a traffic problem — it has a trust and indexing problem. Fix those and the content layer compounds on top of a foundation that actually converts.*

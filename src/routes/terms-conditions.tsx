import { createFileRoute } from "@tanstack/react-router";
import { PageHero, DataTable } from "@/components/site/PageHero";
import { LegalPage, LH2, LH3, LP, LUL, LInfoList } from "@/components/site/Legal";

export const Route = createFileRoute("/terms-conditions")({
  head: () => ({
    meta: [
      { title: "Terms & Conditions | My Quran Guide" },
      {
        name: "description",
        content:
          "Read the Terms and Conditions for using My Quran Guide online Quran classes — free trial terms, enrollment, fees, cancellation, refunds and more.",
      },
      { property: "og:title", content: "Terms & Conditions | My Quran Guide" },
      { property: "og:description", content: "Terms and Conditions for My Quran Guide online Quran classes." },
      { property: "og:url", content: "/terms-conditions" },
      { name: "robots", content: "index, follow" },
    ],
    links: [{ rel: "canonical", href: "/terms-conditions" }],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Terms & Conditions" />
      <LegalPage>
        <LH2>1. Acceptance of Terms</LH2>
        <LP>By accessing or using the My Quran Guide website (myquranquide.com) and enrolling in any of our online Quran classes or services, you agree to be bound by these Terms and Conditions. These terms apply to all visitors, students, parents, guardians, and users of My Quran Guide services worldwide.</LP>
        <LP>If you are enrolling a child under the age of 18, you as the parent or guardian agree to these terms on behalf of the child and accept full responsibility for the child's participation in our services.</LP>
        <LP>Please read these Terms and Conditions carefully before using our services. If you do not agree with any part of these terms, please do not use our website or enroll in our services.</LP>

        <LH2>2. About My Quran Guide</LH2>
        <LInfoList
          rows={[
            ["Business Name", "My Quran Guide"],
            ["Service Type", "Online Quran Classes — Tajweed, Hifz, Noorani Qaida, Quran Recitation, Islamic Studies, Arabic Language, Female Quran Classes"],
            ["Website", "myquranquide.com"],
            ["Contact", "info@myquranquide.com"],
            ["Business Type", "Small Team — Online Quran Education Provider"],
          ]}
        />
        <LP>My Quran Guide is an online Quran academy providing live, one-on-one and group Quran classes via Zoom, Skype, and Google Meet. Our services are available to students globally, including those based in the USA, UK, and other countries.</LP>

        <LH2>3. Our Services</LH2>
        <LH3>What My Quran Guide Provides</LH3>
        <LP>My Quran Guide offers the following online Quran and Islamic education services:</LP>
        <LUL items={["Noorani Qaida — For beginners and young children", "Quran Recitation — Fluent and correct Quran reading", "Tajweed Classes — Rules of proper Quran recitation", "Hifz Program — Quran memorization with Huffaz tutors", "Islamic Studies — Basics of Islam, Fiqh, Seerah", "Arabic Language — Quranic Arabic from scratch", "Female Quran Classes — Exclusively female certified tutors"]} />
        <LP>All classes are delivered live online via Zoom, Skype, or Google Meet by certified and experienced male and female tutors based in Pakistan, fluent in English. Classes are available for students of all ages, levels, and backgrounds including new Muslims.</LP>

        <LH2>4. Free Trial Terms</LH2>
        <LH3>2-Day Free Trial — Terms & Conditions</LH3>
        <LH3>4.1 — Free Trial Eligibility</LH3>
        <LP>The 2-day free trial is available to new students only — once per student. The free trial consists of two complete online Quran classes at no cost whatsoever. No payment, no credit card, and no commitment is required to book or attend the free trial.</LP>
        <LH3>4.2 — Free Trial Enrollment</LH3>
        <LP>Booking a free trial does not constitute enrollment at My Quran Guide. After completing the 2 free trial classes, the student must separately confirm their intention to enroll and agree to the applicable fee schedule before paid classes commence.</LP>
        <LH3>4.3 — Free Trial Availability</LH3>
        <LP>Free trial classes are subject to tutor availability. My Quran Guide will confirm the free trial timing within a few hours of the booking request. The student may choose their preferred timing and tutor gender for the free trial classes.</LP>
        <LH3>4.4 — Free Trial Limitations</LH3>
        <LP>The free trial is offered once per student only. Families may book a separate free trial for each individual child or family member. Any attempt to misuse the free trial policy may result in the free trial being declined at My Quran Guide's discretion.</LP>

        <LH2>5. Enrollment & Registration</LH2>
        <LH3>How Enrollment Works at My Quran Guide</LH3>
        <LH3>5.1 — Enrollment Process</LH3>
        <LP>After completing the 2-day free trial, students who wish to continue must confirm their enrollment by contacting My Quran Guide via email, WhatsApp, or our contact form. Enrollment is confirmed once the student has agreed to the applicable fees and the first payment has been received.</LP>
        <LH3>5.2 — Student Information</LH3>
        <LP>At the time of enrollment, students or their parents/guardians must provide accurate and complete information including full name, age, contact details, country, preferred course, tutor gender preference, and preferred class timing. My Quran Guide relies on this information to assign the most suitable tutor and schedule.</LP>
        <LH3>5.3 — Tutor Assignment</LH3>
        <LP>My Quran Guide will assign a certified and experienced tutor based on the student's course, level, age, and tutor gender preference. While we make every effort to accommodate all preferences, tutor availability may occasionally affect assignment timelines.</LP>
        <LH3>5.4 — Class Schedule</LH3>
        <LP>Upon enrollment, the student and assigned tutor will agree on a mutually convenient class schedule. Classes are available 2 to 6 days per week, with sessions of 30 or 45 minutes, at the student's preferred timing. The agreed schedule will remain consistent unless a change is requested by either party.</LP>

        <LH2>6. Fees & Payment Terms</LH2>
        <LH3>Payment Policy at My Quran Guide</LH3>
        <LH3>6.1 — Fee Structure</LH3>
        <LP>My Quran Guide offers both monthly packages and per class payment options. Fees vary by course, class frequency, and duration. Full fee details are available on our Fee Schedule page at myquranquide.com/fee-schedule.</LP>
        <LH3>6.2 — Payment Timing</LH3>
        <LP>Payment timing at My Quran Guide is fully flexible. Students may choose to pay monthly in advance, weekly, or per class — whichever suits their budget and schedule. The agreed payment arrangement will be confirmed at the time of enrollment.</LP>
        <LH3>6.3 — Accepted Payment Methods</LH3>
        <LP>My Quran Guide accepts payments via PayPal, Bank Transfer, Wise (TransferWise), and other convenient payment methods. Payment can be made in USD ($) or GBP (£). Contact us if you require a specific payment method.</LP>
        <LH3>6.4 — Siblings Discount</LH3>
        <LP>A 5% discount is applied to the fees of each additional child enrolled from the same family. The siblings discount must be mentioned at the time of enrollment to be applied.</LP>
        <LH3>6.5 — Fee Changes</LH3>
        <LP>My Quran Guide reserves the right to revise its fee schedule. Students will be given a minimum of 30 days written notice via email before any fee changes take effect. Students who do not agree with the revised fees may cancel their enrollment without penalty during the notice period.</LP>

        <LH2>7. Cancellation & Rescheduling Policy</LH2>
        <LH3>Class Cancellation & Rescheduling Terms</LH3>
        <LH3>7.1 — Student Cancellation of Individual Classes</LH3>
        <LP>Students may cancel or reschedule individual classes at any time, including on the same day of the class. We understand that life can be unpredictable, and we aim to be as flexible as possible. Please notify your tutor or contact My Quran Guide via WhatsApp or email as soon as possible if you need to cancel or reschedule a class.</LP>
        <LH3>7.2 — Makeup Classes</LH3>
        <LP>If a student cancels a class with reasonable notice, My Quran Guide will make every reasonable effort to arrange a makeup class at a mutually convenient time. Makeup classes are subject to tutor availability.</LP>
        <LH3>7.3 — Tutor Cancellation</LH3>
        <LP>In the rare event that a tutor needs to cancel a class, My Quran Guide will notify the student as soon as possible and arrange a replacement class or a substitute tutor at no additional cost to the student.</LP>
        <LH3>7.4 — Enrollment Cancellation</LH3>
        <LP>Students may cancel their enrollment at any time by notifying My Quran Guide via email at info@myquranquide.com. Upon cancellation, any unused prepaid classes will be refunded in accordance with our Refund Policy as outlined in Section 8 below.</LP>
        <LH3>7.5 — Extended Absence</LH3>
        <LP>If a student needs to take a break from classes due to illness, travel, or other circumstances, please inform My Quran Guide as soon as possible. We will pause the enrollment and resume classes upon the student's return without any penalty.</LP>

        <LH2>8. Refund Policy</LH2>
        <LH3>Our Fair & Transparent Refund Policy</LH3>
        <LP>My Quran Guide is committed to fair and transparent refund practices:</LP>
        <DataTable
          head={["Situation", "Refund Policy"]}
          rows={[
            ["Unused Prepaid Classes", "Refunded on a pro-rata basis upon enrollment cancellation"],
            ["Tutor Cancellation", "Replacement class provided at no cost — no refund needed"],
            ["Free Trial Classes", "Non-refundable — provided at zero cost to the student"],
            ["Refund Request Deadline", "Must be submitted within 7 days of the billing date"],
            ["Refund Processing Time", "5 to 7 business days via original payment method"],
          ]}
        />
        <LP>To request a refund, please contact us at info@myquranquide.com with your full name, enrollment details, and reason for the refund request. We aim to process all refund requests within 5 to 7 business days.</LP>

        <LH2>9. Student & Parent Responsibilities</LH2>
        <LH3>What We Expect from Our Students & Families</LH3>
        <LH3>9.1 — Punctuality</LH3>
        <LP>Students are expected to join their classes on time. If a student is more than 15 minutes late without prior notice, the class may be considered a no-show and will not be automatically rescheduled. Please communicate with your tutor if you are running late.</LP>
        <LH3>9.2 — Technical Requirements</LH3>
        <LP>Students are responsible for ensuring they have a stable internet connection and a working device (computer, tablet, or smartphone) to attend online classes via Zoom, Skype, or Google Meet. My Quran Guide is not responsible for class disruptions caused by the student's technical issues.</LP>
        <LH3>9.3 — Respectful Conduct</LH3>
        <LP>My Quran Guide expects all students and parents to treat tutors with respect and courtesy at all times. Classes are conducted in a professional and Islamic manner. Any behavior that disrupts the class or is disrespectful toward tutors or other students will not be tolerated.</LP>
        <LH3>9.4 — Parental Supervision for Children</LH3>
        <LP>Parents and guardians of child students are responsible for ensuring their child is available, prepared, and supervised during online classes. Parents are welcome to observe classes at any time.</LP>
        <LH3>9.5 — Accurate Information</LH3>
        <LP>Students and parents are responsible for providing accurate and up-to-date information at enrollment and for notifying My Quran Guide of any changes to contact details, preferred timings, or other relevant information.</LP>

        <LH2>10. My Quran Guide Responsibilities</LH2>
        <LH3>What We Commit to Our Students</LH3>
        <LUL items={["Providing certified and experienced male and female Quran tutors for all classes", "Delivering classes on time as per the agreed schedule", "Notifying students promptly of any tutor changes or class cancellations", "Maintaining the confidentiality of all student personal information", "Providing a replacement class or substitute tutor when a class is cancelled on our end", "Responding to all student and parent inquiries within 1 to 2 hours", "Processing refund requests fairly and within the stated timeframe", "Continuously improving our teaching quality and student experience"]} />

        <LH2>11. Intellectual Property</LH2>
        <LP>All content on the My Quran Guide website — including text, images, logos, course materials, and design — is the intellectual property of My Quran Guide and is protected by applicable copyright laws.</LP>
        <LP>Students and visitors may not reproduce, distribute, modify, or use any content from the My Quran Guide website for commercial purposes without prior written permission from My Quran Guide.</LP>
        <LP>Course materials provided to students during classes are for personal educational use only and may not be shared, distributed, or reproduced without permission.</LP>

        <LH2>12. Limitation of Liability</LH2>
        <LP>My Quran Guide provides online Quran education services in good faith and to the best of our ability. However, My Quran Guide shall not be held liable for:</LP>
        <LUL items={["Technical disruptions caused by third-party platforms such as Zoom, Skype, or Google Meet", "Internet connectivity issues on the student's side affecting class delivery", "Any indirect, incidental, or consequential damages arising from the use of our services", "Delays in service caused by circumstances beyond our reasonable control"]} />
        <LP>My Quran Guide's total liability to any student or user for any claim arising from these Terms shall not exceed the total fees paid by that student in the 30 days preceding the claim.</LP>

        <LH2>13. Privacy & Data Protection</LH2>
        <LP>My Quran Guide is committed to protecting your personal information. Our collection, use, and storage of personal data is governed by our Privacy Policy, which forms part of these Terms and Conditions and is available at myquranquide.com/privacy-policy.</LP>
        <LP>By using our services, you agree to the terms of our Privacy Policy. If you have any questions about how we handle your personal data, please contact us at info@myquranquide.com.</LP>

        <LH2>14. Changes to These Terms</LH2>
        <LP>My Quran Guide reserves the right to update or modify these Terms and Conditions at any time. When changes are made, we will:</LP>
        <LUL items={["Update the 'Last Updated' date at the top of this document", "Notify enrolled students via email where changes are significant", "Post a notice on our website for a reasonable period"]} />
        <LP>Your continued use of My Quran Guide services after any changes to these Terms constitutes your acceptance of the updated Terms and Conditions. If you do not agree with the updated terms, you may cancel your enrollment in accordance with Section 7.4.</LP>

        <LH2>15. Governing Law</LH2>
        <LP>These Terms and Conditions are intended to be fair, clear, and internationally applicable. My Quran Guide serves students globally and does not restrict these terms to the laws of any single jurisdiction.</LP>
        <LP>In the event of any dispute arising from these Terms or the use of My Quran Guide services, both parties agree to first attempt to resolve the matter amicably through direct communication. My Quran Guide is committed to resolving any concerns promptly and fairly.</LP>
        <LP>For any legal queries or disputes that cannot be resolved amicably, please contact us at info@myquranquide.com and we will work with you to find a fair resolution.</LP>

        <LH2>16. Contact Us</LH2>
        <LH3>Questions About These Terms?</LH3>
        <LP>If you have any questions, concerns, or queries about these Terms and Conditions, please contact My Quran Guide:</LP>
        <LInfoList
          rows={[
            ["Email", "info@myquranquide.com"],
            ["Website", "myquranquide.com/contact"],
            ["WhatsApp", "Available — Contact us via our website for WhatsApp details"],
            ["Response Time", "We respond to all inquiries within 1 to 2 hours — available 24/7"],
          ]}
        />
      </LegalPage>
    </>
  );
}

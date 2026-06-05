import { createFileRoute } from "@tanstack/react-router";
import { PageHero, DataTable } from "@/components/site/PageHero";
import { LegalPage, LH2, LH3, LP, LUL, LInfoList } from "@/components/site/Legal";
import { buildPageSeo } from "@/lib/seo";

export const Route = createFileRoute("/privacy-policy")({
  head: () => {
    const seo = buildPageSeo({
      title: "Privacy Policy | My Quran Guide",
      description:
        "Read the My Quran Guide Privacy Policy — what information we collect, how we use and protect it, and your privacy rights.",
      path: "/privacy-policy",
    });

    return {
      ...seo,
      meta: [...seo.meta, { name: "robots", content: "index, follow" }],
    };
  },
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <>
      <PageHero title="Privacy Policy" />
      <LegalPage>
        <LH2>Introduction</LH2>
        <LP>Welcome to My Quran Guide. We are committed to protecting the privacy and personal information of every visitor, student, and parent who interacts with our website and services. This Privacy Policy explains what information we collect, how we use it, how we protect it, and what rights you have over your data.</LP>
        <LP>By using the My Quran Guide website (myquranguide.com) and our services, you agree to the terms of this Privacy Policy. Please read it carefully. If you do not agree with any part of this policy, please do not use our website or services.</LP>
        <LP>This Privacy Policy applies to all users of My Quran Guide globally, including students and families based in the USA, UK, and other countries worldwide.</LP>

        <LH2>Who We Are</LH2>
        <LInfoList
          rows={[
            ["Business Name", "My Quran Guide"],
            ["Service", "Online Quran Classes — Tajweed, Hifz, Noorani Qaida, Arabic, Islamic Studies, Female Quran Classes"],
            ["Website", "myquranguide.com"],
            ["Contact Email", "info@myquranguide.com"],
            ["Business Type", "Small Team — Online Quran Academy"],
          ]}
        />

        <LH2>Information We Collect</LH2>
        <LH3>What Personal Information Do We Collect?</LH3>
        <LP>My Quran Guide collects personal information from users through the following channels:</LP>

        <LH3>3.1 — Contact Form</LH3>
        <LP>When you fill in our contact form or free trial booking form, we collect:</LP>
        <LUL items={["Full name", "Email address", "WhatsApp number", "Country of residence", "Student age and level", "Course interest and preferred timing", "Any additional information you voluntarily provide"]} />

        <LH3>3.2 — Email Communication</LH3>
        <LP>When you email us at info@myquranguide.com, we collect:</LP>
        <LUL items={["Your name and email address", "Any personal information included in your message", "Communication history for support and service purposes"]} />

        <LH3>3.3 — WhatsApp & Social Media</LH3>
        <LP>When you contact us via WhatsApp, Facebook, or Instagram, we collect:</LP>
        <LUL items={["Your name and contact details as shown on your profile", "Message content and communication history", "Any information you share voluntarily through these channels"]} />

        <LH3>3.4 — Google Analytics</LH3>
        <LP>We use Google Analytics to understand how visitors use our website. Google Analytics collects:</LP>
        <LUL items={["Pages visited and time spent on each page", "General geographic location (country/city level only)", "Device type, browser, and operating system", "Traffic source — how you found our website"]} />
        <LP>Google Analytics data is anonymized and aggregated. We do not use it to identify individual users personally.</LP>

        <LH3>3.5 — Facebook Pixel</LH3>
        <LP>We use the Facebook Pixel on our website to measure the effectiveness of our advertising and to show relevant ads to people who have visited our site. Facebook Pixel collects:</LP>
        <LUL items={["Pages visited on our website", "Actions taken (such as form submissions)", "Device and browser information"]} />
        <LP>Facebook Pixel data is processed by Meta (Facebook) under their own privacy policy. You can opt out of Facebook ads targeting at facebook.com/settings.</LP>

        <LH2>4. How We Use Your Information</LH2>
        <LH3>Why Do We Collect Your Personal Information?</LH3>
        <LP>My Quran Guide uses your personal information only for legitimate purposes related to providing our online Quran education services:</LP>
        <DataTable
          head={["Purpose", "Details"]}
          rows={[
            ["Enroll & Match You with a Tutor", "To confirm your free trial or enrollment and match you with a suitable tutor"],
            ["Communicate with You", "To respond to your inquiries, confirm class timings, and provide updates"],
            ["Schedule & Manage Classes", "To organize your classes, timings, and tutor assignments"],
            ["Process Payments", "To confirm and manage fee payments for enrolled students"],
            ["Improve Our Services", "To analyze website usage via Google Analytics and improve user experience"],
            ["Send Relevant Updates", "To inform you of class changes, new courses, or important announcements"],
            ["Marketing (with consent)", "To show relevant ads via Facebook Pixel to interested users"],
          ]}
        />
        <LP>We do NOT use your personal information for any purpose other than those listed above. We do NOT sell, rent, or trade your personal information to any third party.</LP>

        <LH2>5. How We Share Your Information</LH2>
        <LH3>Do We Share Your Personal Information?</LH3>
        <LP>My Quran Guide respects your privacy and does not sell or share your personal information with third parties for their own marketing purposes. We may share your information only in the following limited circumstances:</LP>

        <LH3>5.1 — Our Tutors</LH3>
        <LP>Your name, class timing, and course details are shared with your assigned tutor to facilitate your online Quran classes. Tutors are bound by confidentiality obligations and are not permitted to use student information for any other purpose.</LP>

        <LH3>5.2 — Third Party Service Providers</LH3>
        <LP>We use the following third-party tools and platforms that may process your data as part of delivering our services:</LP>
        <DataTable
          head={["Third Party", "Purpose"]}
          rows={[
            ["Google Analytics", "Website analytics — anonymized usage data"],
            ["Facebook / Meta Pixel", "Advertising and retargeting — website visitor data"],
            ["Zoom", "Online class delivery platform"],
            ["Skype", "Online class delivery platform"],
            ["Google Meet", "Online class delivery platform"],
            ["PayPal", "Payment processing"],
            ["Wise", "International payment processing"],
          ]}
        />
        <LP>Each of these third-party services has their own privacy policy governing how they use and protect your data. We encourage you to review their privacy policies separately.</LP>

        <LH3>5.3 — Legal Requirements</LH3>
        <LP>We may disclose your personal information if required to do so by law, court order, or governmental authority, or to protect the rights, safety, and property of My Quran Guide, our students, or others.</LP>

        <LH2>6. How Long We Keep Your Data</LH2>
        <LH3>Data Retention Policy</LH3>
        <LP>My Quran Guide retains your personal information only for as long as necessary to fulfill the purposes for which it was collected:</LP>
        <DataTable
          head={["Data Type", "Retention Period"]}
          rows={[
            ["Enrolled Students", "Kept for the duration of enrollment + 1 year after last class"],
            ["Free Trial Inquiries", "Kept for 6 months if enrollment does not proceed"],
            ["Email Communications", "Kept for 2 years for support and reference purposes"],
            ["WhatsApp Messages", "Retained as per WhatsApp platform policies"],
            ["Google Analytics Data", "Retained for 26 months as per Google Analytics default settings"],
            ["Facebook Pixel Data", "Retained as per Meta's data retention policies"],
            ["Payment Records", "Kept for 7 years for accounting and legal compliance"],
          ]}
        />
        <LP>After the retention period, your personal data is securely deleted or anonymized. You may also request early deletion of your data at any time by contacting us at info@myquranguide.com.</LP>

        <LH2>7. How We Protect Your Data</LH2>
        <LH3>Our Data Security Measures</LH3>
        <LP>My Quran Guide takes the security of your personal information seriously. We implement the following measures to protect your data:</LP>
        <LUL items={["All communications are conducted through secure and encrypted platforms", "Access to student personal data is restricted to authorized team members only", "We do not store payment card details — all payments are processed through secure third-party providers", "Our website uses HTTPS encryption to protect data transmitted between your browser and our site", "We regularly review our data handling practices to maintain the highest security standards"]} />
        <LP>While we take every reasonable precaution to protect your information, no method of transmission over the internet is 100% secure. We cannot guarantee absolute security but commit to using industry best practices at all times.</LP>

        <LH2>8. Your Privacy Rights</LH2>
        <LH3>What Rights Do You Have Over Your Personal Data?</LH3>
        <LP>Regardless of where you are located, My Quran Guide respects the following privacy rights for all users:</LP>
        <DataTable
          head={["Your Right", "What It Means"]}
          rows={[
            ["Right to Access", "Request a copy of all personal data we hold about you"],
            ["Right to Correction", "Request correction of any inaccurate or incomplete data"],
            ["Right to Deletion", "Request deletion of your personal data at any time"],
            ["Right to Restriction", "Request that we limit how we use your data"],
            ["Right to Object", "Object to us processing your data for marketing purposes"],
            ["Right to Data Portability", "Request your data in a portable, machine-readable format"],
            ["Right to Withdraw Consent", "Withdraw consent for data processing at any time"],
          ]}
        />
        <LP>To exercise any of these rights, please contact us at info@myquranguide.com with your request. We will respond within 30 days. There is no charge for making a privacy rights request.</LP>

        <LH2>9. Children's Privacy</LH2>
        <LH3>How We Protect the Privacy of Children</LH3>
        <LP>My Quran Guide provides online Quran classes for children aged 5 and above. We take the privacy and safety of children very seriously and implement the following protections:</LP>
        <LUL items={["All enrollment and communication for child students is conducted with a parent or guardian", "We do not knowingly collect personal data directly from children under the age of 13 without verified parental consent", "Child student data is used exclusively for the purpose of delivering their Quran classes", "We do not share child student data with any third party except assigned tutors", "Parents and guardians may request access to, correction of, or deletion of their child's data at any time"]} />
        <LP>If you believe we have inadvertently collected personal information from a child without proper parental consent, please contact us immediately at info@myquranguide.com and we will delete such data promptly.</LP>

        <LH2>10. Third Party Links & Platforms</LH2>
        <LP>Our website and communications may contain links to third-party websites and platforms including Facebook, Instagram, YouTube, Zoom, Skype, and Google Meet. My Quran Guide is not responsible for the privacy practices of these external platforms.</LP>
        <LP>We encourage you to review the privacy policies of any third-party platform before sharing your personal information with them. Your interactions with these platforms are governed by their own terms and privacy policies.</LP>

        <LH2>11. Google Analytics & Facebook Pixel</LH2>
        <LH3>Tracking Tools We Use</LH3>
        <LH3>11.1 — Google Analytics</LH3>
        <LP>We use Google Analytics provided by Google LLC to analyze website traffic and user behavior. Google Analytics uses first-party cookies to collect anonymized usage data. This data helps us understand which pages are most visited, where our traffic comes from, and how to improve our website.</LP>
        <LP>You can opt out of Google Analytics tracking by installing the Google Analytics Opt-out Browser Add-on available at tools.google.com/dlpage/gaoptout.</LP>
        <LH3>11.2 — Facebook Pixel</LH3>
        <LP>We use the Facebook Pixel provided by Meta Platforms Inc. to measure ad performance and show relevant content to users who have visited our website. The Facebook Pixel collects information about your actions on our website and sends it to Facebook.</LP>
        <LP>You can manage your Facebook ad preferences at facebook.com/settings or opt out of interest-based advertising through the Digital Advertising Alliance at optout.aboutads.info.</LP>

        <LH2>12. Changes to This Privacy Policy</LH2>
        <LP>My Quran Guide reserves the right to update or modify this Privacy Policy at any time. When we make significant changes, we will:</LP>
        <LUL items={["Update the 'Last Updated' date at the top of this page", "Notify enrolled students via email where the changes are significant", "Post a notice on our website homepage for a reasonable period"]} />
        <LP>We encourage you to review this Privacy Policy periodically to stay informed about how we are protecting your information. Your continued use of My Quran Guide services after any changes constitutes your acceptance of the updated policy.</LP>

        <LH2>13. Contact Us About Privacy</LH2>
        <LH3>Privacy Questions or Concerns?</LH3>
        <LP>If you have any questions, concerns, or requests regarding this Privacy Policy or how My Quran Guide handles your personal data, please contact us:</LP>
        <LInfoList
          rows={[
            ["Email", "info@myquranguide.com"],
            ["Website", "myquranguide.com/contact"],
            ["Response Time", "We aim to respond to all privacy-related inquiries within 48 hours"],
            ["Available", "24/7 — We are always here to answer your questions"],
          ]}
        />
        <LP>We take every privacy concern seriously and are committed to resolving any issues promptly and transparently.</LP>
      </LegalPage>
    </>
  );
}

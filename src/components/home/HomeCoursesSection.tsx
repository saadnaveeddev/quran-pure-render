import { Section, SectionHeading } from "@/components/site/Section";
import { CTAButton } from "@/components/site/CTAButton";

const courses = [
  { title: "Noorani Qaida Online", body: "Perfect for beginners and young children aged 5 and above. Our Noorani Qaida course teaches the basics of Arabic letters, pronunciation, and sounds — the essential foundation before reading the Quran." },
  { title: "Quran Recitation Classes", body: "Learn to read the Quran fluently and correctly with our Quran Recitation course. Suitable for all ages and levels — from those reading for the first time to those wanting to improve their fluency." },
  { title: "Tajweed Classes Online", body: "Tajweed is the art of reciting the Quran with proper rules and pronunciation. Our certified Tajweed tutors teach you the exact Makharij and rules of Tajweed so every word is recited as it was revealed." },
  { title: "Hifz Program Online", body: "Memorizing the Quran is one of the greatest achievements in a Muslim's life. Our online Hifz program is structured, consistent, and guided by experienced Huffaz tutors — for both children and adults." },
  { title: "Islamic Studies Online", body: "Beyond Quran, we offer Islamic Studies classes covering the basics of Islam, Fiqh, Seerah, and Islamic ethics — perfect for Muslim families wanting a complete Islamic education at home." },
  { title: "Arabic Language Classes", body: "Understanding the Quran in its original language is a powerful experience. Our Arabic Language course teaches Quranic Arabic from scratch — helping students connect with the Quran on a deeper level." },
  { title: "Female Quran Classes Online", body: "For sisters who prefer learning with a female tutor, My Quran Guide offers dedicated female Quran classes. All our female tutors are certified, experienced, and create a comfortable and focused learning environment." },
];

export function HomeCoursesSection() {
  return (
    <Section>
      <SectionHeading
        eyebrow="Our Online Quran Courses"
        title="Complete Online Quran Courses for All Levels"
        intro="From absolute beginners to advanced learners, My Quran Guide offers a full range of Quran and Islamic courses designed for every age and every level."
      />
      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {courses.map((course) => (
          <div
            key={course.title}
            className="group card-sweep rounded-2xl p-7 motion-safe:hover:-translate-y-1"
          >
            <h3 className="relative z-10 text-lg text-foreground transition-colors duration-300 group-hover:text-primary-foreground">
              {course.title}
            </h3>
            <p className="relative z-10 mt-3 text-[0.95rem] leading-relaxed text-muted-foreground transition-colors duration-300 group-hover:text-primary-foreground/88">
              {course.body}
            </p>
          </div>
        ))}
      </div>
      <div className="mt-12 text-center">
        <CTAButton to="/courses" variant="outline">View All Courses</CTAButton>
      </div>
    </Section>
  );
}

import { Section, SectionHeading } from "@/components/site/Section";
import { CourseCard } from "@/components/site/Cards";
import { Button } from "@/components/site/Button";
import { COURSE_LIST } from "@/content/courses";

export function HomeCourses() {
  return (
    <Section id="courses" ruled>
      <SectionHeading
        label={`${COURSE_LIST.length} courses`}
        title="Complete Online Quran Courses for All Levels"
        intro="From absolute beginners to advanced learners — a course for every age and stage."
      />
      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {COURSE_LIST.map((course) => (
          <CourseCard key={course.key} course={course} />
        ))}
      </div>
      <div className="mt-12 text-center">
        <Button to="/courses" variant="secondary" withChevron>
          Compare all seven courses
        </Button>
      </div>
    </Section>
  );
}

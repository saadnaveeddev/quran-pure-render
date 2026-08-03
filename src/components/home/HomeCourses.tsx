import { Section, SectionHeading } from "@/components/site/Section";
import { CourseCard } from "@/components/site/Cards";
import { Button } from "@/components/site/Button";
import { COURSE_LIST } from "@/content/courses";

export function HomeCourses() {
  return (
    <Section id="courses" ruled>
      <SectionHeading
        label={`${COURSE_LIST.length} courses`}
        title="Pick the one that matches where you actually are"
        intro="Each course starts at a defined point and ends at a defined point. If you are not sure which applies to you, the tutor will tell you in the free trial."
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

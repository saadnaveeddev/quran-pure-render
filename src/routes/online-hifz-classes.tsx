import { createFileRoute } from "@tanstack/react-router";
import { CoursePage } from "@/components/course/CoursePage";
import { COURSES } from "@/content/courses";
import { courseHead } from "@/lib/course-head";

const course = COURSES.hifz;

export const Route = createFileRoute("/online-hifz-classes")({
  head: () => courseHead(course),
  component: () => <CoursePage course={course} />,
});

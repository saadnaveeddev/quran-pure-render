import { createFileRoute } from "@tanstack/react-router";
import { CoursePage } from "@/components/course/CoursePage";
import { COURSES } from "@/content/courses";
import { courseHead } from "@/lib/course-head";

const course = COURSES.islamicStudies;

export const Route = createFileRoute("/online-islamic-studies")({
  head: () => courseHead(course),
  component: () => <CoursePage course={course} />,
});

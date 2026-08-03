import { createFileRoute } from "@tanstack/react-router";
import { CoursePage } from "@/components/course/CoursePage";
import { COURSES } from "@/content/courses";
import { courseHead } from "@/lib/course-head";

const course = COURSES.tajweed;

export const Route = createFileRoute("/online-tajweed-classes")({
  head: () => courseHead(course),
  component: () => <CoursePage course={course} />,
});

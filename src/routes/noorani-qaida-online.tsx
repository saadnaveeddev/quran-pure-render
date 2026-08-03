import { createFileRoute } from "@tanstack/react-router";
import { CoursePage } from "@/components/course/CoursePage";
import { COURSES } from "@/content/courses";
import { courseHead } from "@/lib/course-head";

const course = COURSES.qaida;

export const Route = createFileRoute("/noorani-qaida-online")({
  head: () => courseHead(course),
  component: () => <CoursePage course={course} />,
});

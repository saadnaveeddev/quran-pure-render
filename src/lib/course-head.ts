import type { Course } from "@/content/courses";
import { buildBreadcrumbSchema, buildCourseSchema, buildFaqSchema, buildPageSeo } from "@/lib/seo";

export function courseBreadcrumbs(course: Course) {
  return [
    { label: "Home", to: "/" },
    { label: "Courses", to: "/courses" },
    { label: course.navLabel, to: course.path },
  ];
}

/**
 * The head for every course page, built from the course record so the meta
 * tags, the Course schema and the visible page can never drift apart.
 */
export function courseHead(course: Course) {
  const breadcrumbs = courseBreadcrumbs(course);
  const longestSession = Math.max(...course.sessionMinutes);

  return {
    ...buildPageSeo({
      title: course.metaTitle,
      description: course.metaDescription,
      path: course.path,
    }),
    scripts: [
      buildFaqSchema(course.faqs),
      buildCourseSchema({
        name: course.h1,
        description: course.summary,
        path: course.path,
        sessionWorkload: `PT${longestSession}M`,
        usdPerClass: course.usdPerClass,
        educationalLevel: course.level,
        lastUpdated: course.lastUpdated,
      }),
      buildBreadcrumbSchema(breadcrumbs.map((b) => ({ name: b.label, path: b.to }))),
    ],
  };
}

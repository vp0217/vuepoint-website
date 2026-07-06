export const COURSE_OPTIONS = [
  { value: "holiday-bootcamp", label: "Holiday Bootcamp — Frontend Engineering" },
  { value: "full-stack", label: "Full Stack Engineering" },
  { value: "backend", label: "Backend Engineering" },
  { value: "frontend", label: "Frontend Engineering" },
] as const;

export type CourseValue = (typeof COURSE_OPTIONS)[number]["value"];

export function getCourseLabel(value: string) {
  return COURSE_OPTIONS.find((course) => course.value === value)?.label ?? value;
}

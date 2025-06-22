export interface Project {
  id: string;
  name: string;
  description: string;
  live: string;
  sourceCode: string;
}

export const projects: Project[] = [
  {
    id: "1",
    name: "StepHire",
    description:
      " An AI-driven recruitment platform that automates interview question generation and provides intelligent feedback to help employers hire students efficiently.",
    live: "https://stephire.vercel.app/",
    sourceCode: "https://github.com/ashusoni24/Ai-Interview-Scheduler",
  }
];

import { SectionTitle } from "./SectionTitle";

const skills = [
  "TypeScript/JavaScript",
  "C#",
  "CSS",
  "React",
  "Remix",
  "Next.js",
  "Express",
  "Node.js",
  "ASP.NET",
  "Azure OpenAI",
  "Generative AI",
  "LLMs",
  "Anthropic",
  "Agents",
  "RAG",
  "Prompt Engineering",
  "Postgres",
  "SQL Server",
  "Cosmos",
  "Mongo",
  "Azure AI Search",
  "Typesense",
  "Docker",
  "ADO Pipelines",
  "Github Actions",
  "Azure",
  "AWS",
  "GCP",
  "Fly.io",
  "OAuth",
  "Azure AD",
  "Vite",
  "Tailwind",
];
export function Skills() {
  return (
    <div>
      <SectionTitle>Skills</SectionTitle>
      <div className="flex flex-wrap gap-x-2 gap-y-[2px]">
        {skills.map((skill) => (
          <span key={skill} className="text-gray-900 text-xs">
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

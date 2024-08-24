import { SectionTitle } from "./SectionTitle";

const skills = [
  "TypeScript/JavaScript",
  "C#",
  "CSS",
  "React",
  "Remix",
  "Next",
  "Express",
  "Node.js",
  "ASP.NET",
  "Azure OpenAI",
  "Anthropic",
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
];
export function Skills() {
  return (
    <div>
      <SectionTitle>Skills</SectionTitle>
      <div className="flex flex-wrap gap-x-3 gap-y-1">
        {skills.map((skill) => (
          <span key={skill} className="text-gray-900 text-xs">
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

import { cn } from "../shared/tw.utils";
import { SectionTitle } from "./SectionTitle";

export function ProfessionalExperience({ className }: { className?: string }) {
  return (
    <div className={cn("", className)}>
      <SectionTitle>Notable Experience</SectionTitle>
      <div className="space-y-6">
        <ExperienceItem
          role="Solution Architect & Lead Developer"
          project="Conversational AI Offering"
          // company="Core BTS"
          year="2023"
          achievements={[
            'Conceptualized and developed a custom "Chat with Your Company Data" solution, created IP to offer cost-effective, tailored AI solutions.',
            "Engineered flexible abstractions around semantic search and tool utilization, setting the stage for scalable client deployments.",
            "Led five successful client deliveries and a subsequent promotion to featured solution offering for our consultancy.",
          ]}
        />
        <ExperienceItem
          role="Curriculum Developer & Instructor"
          project="AI Training for Web Developers"
          // company="Core BTS"
          year="2024"
          achievements={[
            "Devised the AI workshop, pitching and building the entire program on personal initiative, which became a key company training resource.",
            "Developed and delivered the curriculum, training three internal cohorts.",
            "Expanded the initiative from an internal program to a revenue generating offering, with two clients scheduled this fall.",
          ]}
        />
        <ExperienceItem
          role="Product Developer"
          project="AI Finance Tool"
          year="2024"
          achievements={[
            "Launched an app to provide AI powered earnings call transcripts, summaries and insights.",
            "Implemented a sophisticated RAG pipeline with streaming UI and real-time updates using Server-Sent Events.",
          ]}
        />
        <ExperienceItem
          role="Platform Engineer"
          project="Supply Chain App Platform"
          company="Grocery Chain"
          year="2023"
          achievements={[
            "Architected a platform to streamline app development for supply chain teams, reducing the friction of infrastructure setup, auth, and data access to common domain objects.",
            "Collaborated with numerous enterprise teams to assess needs and align the platform with corporate best practices and architecture standards.",
          ]}
        />
        <ExperienceItem
          role="Tech Lead"
          project="LTL Reservation System"
          company="National Trucking Company"
          year="2023"
          achievements={[
            "Directed the development of a web application allowing users to reserve space on partially filled semi-trailers.",
            "Led a team of developers and coordinated with other teams to integrate APIs, ensuring seamless functionality.",
          ]}
        />
      </div>
    </div>
  );
}

interface ExperienceItemProps {
  role: string;
  project: string;
  company?: string;
  year: string;
  achievements: string[];
}

function ExperienceItem({
  role,
  project,
  company,
  year,
  achievements,
}: ExperienceItemProps) {
  return (
    <div>
      <div className="flex gap-2 items-baseline">
        <div className="text-sm font-semibold">{role}</div>
        <span>•</span>
        <div className="text-sm font-medium">{project}</div>
        {company && (
          <>
            <span>•</span>

            <span className="text-sm text-right font-medium">{company}</span>
          </>
        )}
      </div>
      <ul className="list-disc pl-4 text-sm mt-1 space-y-0">
        {achievements.map((achievement, index) => (
          <li key={index} className="pl-1">
            <span className="align-top ">{achievement}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

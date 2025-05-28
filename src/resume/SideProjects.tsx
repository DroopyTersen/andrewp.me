import { cn } from "../shared/tw.utils";
import { SectionTitle } from "./SectionTitle";

export function SideProjects({ className }: { className?: string }) {
  return (
    <div className={cn("", className)}>
      <SectionTitle className="mb-2">Side Projects</SectionTitle>
      {/* <p className="text-xs text-gray-800">
        Making things to solve my own problems and learn new stuff.
      </p> */}
      <div className="space-y-[9px]">
        <ProjectItem
          name="BetterSpotify"
          description="Uses AI to create Spotify playlists based on your mood and listening history."
        />
        <ProjectItem
          name="Wanderlog"
          description="Travel diary for my family and friends"
        />
        <ProjectItem
          name="CodeSnippets"
          description="Github Gists on steroids, VS Code Extension"
        />
        <ProjectItem
          name="API Tester"
          description="Postman + Snapshot testing"
        />
        <ProjectItem
          name="WedSnap"
          description="Live wedding photo sharing and slideshow"
        />
        {/* <ProjectItem name="Urban Fictionary" description="Party game." /> */}
        <ProjectItem name="I Need Your List!" description="Family gift ideas" />
        <ProjectItem
          name="SPScript"
          description="Open source SDK for SharePoint"
        />
      </div>
    </div>
  );
}

interface ProjectItemProps {
  name: string;
  description: string;
}

function ProjectItem({ name, description }: ProjectItemProps) {
  return (
    <div className="">
      <div className="text-sm font-semibold leading-3">{name}</div>
      <div className="text-xs text-gray-700 mt-1">{description}</div>
    </div>
  );
}

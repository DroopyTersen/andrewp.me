import { cn, tw } from "../shared/tw.utils";
import { Contact } from "./Contact";
import { EmploymentHistory } from "./EmploymentHistory";
import { ProfessionalExperience } from "./Experience";
import { PrinterPage } from "./PrinterPage";
import { Skills } from "./Skills";
import { SideProjects } from "./SideProjects";
import { Education } from "./Education";

export const Resume = () => {
  return (
    <PrinterPage>
      <div className="flex justify-between">
        <div>
          <h1 className="text-5xl font-extrabold">Andrew Petersen</h1>
          <div className="text-base mt-2 text-gray-600 font-medium">
            Software Architect • Software Engineer
          </div>
        </div>
        <Contact className="mt-1 text-sm" />
      </div>
      <div className="grid grid-cols-[34%_1fr] mt-8 text-sm gap-10">
        <div className="right-col space-y-6">
          <EmploymentHistory />
          <Education />
          <Skills />
          <SideProjects />
        </div>
        <div className="left-col">
          <p className="mb-2 hidden">
            <span className="font-semibold text-base">
              I build cloud-first, full stack web apps that leverage AI.
            </span>
          </p>
          <p className="text-sm">
            <span className="font-semibold">
              Builder of cloud-first, full stack web apps that leverage AI.{" "}
            </span>
            I have 15 years of professional experience, but coding isn't just my
            job; it's a hobby and source of excitement. At work, I bridge
            technical and business perspectives to create innovative and
            impactful solutions. At home, I dive into side projects purely for
            the joy of exploring new tech and honing my skills.
          </p>
          <div className="mt-6">
            <ProfessionalExperience />
          </div>
        </div>
      </div>
    </PrinterPage>
  );
};

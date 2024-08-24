import { cn } from "../shared/tw.utils";
import { SectionTitle } from "./SectionTitle";

export function EmploymentHistory({ className }: { className?: string }) {
  return (
    <div className={cn("", className)}>
      <SectionTitle className="mb-2">Employment History</SectionTitle>
      <div className="space-y-4">
        <EmploymentItem
          company="Core BTS"
          dateRange="2012 - Present"
          jobTitle="Principal Architect"
          description="Software Consultant delivering full-stack web applications for clients spanning many industries and sizes."
        />
        <EmploymentItem
          company="Quad/Graphics"
          dateRange="2009 - 2012"
          jobTitle="Software Developer"
          description="Web Developer working on SharePoint customizations."
        />
        <EmploymentItem
          company="SC Johnson Wax"
          dateRange="2008 - 2009"
          jobTitle="IT Contractor"
          description="Helped employees transition to new PCs."
        />
      </div>
    </div>
  );
}

interface EmploymentItemProps {
  company: string;
  dateRange: string;
  jobTitle: string;
  description?: string;
}

function EmploymentItem({
  company,
  dateRange,
  jobTitle,
  description,
}: EmploymentItemProps) {
  return (
    <div>
      <div className="flex justify-between text-sm">
        <span className="">{company}</span>
        <span className="text-xs">{dateRange}</span>
      </div>
      <div className="mt">
        <h3 className="font-semibold text-sm">{jobTitle}</h3>
        {description && (
          <p className="text-xs mt-0 text-gray-700">{description}</p>
        )}
      </div>
    </div>
  );
}

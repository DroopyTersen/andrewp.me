import { cn } from "../shared/tw.utils";
import { SectionTitle } from "./SectionTitle";

export function Education({ className }: { className?: string }) {
  return (
    <div className={cn("", className)}>
      <SectionTitle>Education</SectionTitle>
      <div className="text-sm">
        <div className="flex justify-between">
          <span className="">University of Wisconsin-Milwaukee</span>
        </div>
        <h3 className="font-semibold text-sm">B.S. in Computer Science</h3>
      </div>
    </div>
  );
}

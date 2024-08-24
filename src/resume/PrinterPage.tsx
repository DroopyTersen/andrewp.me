import { cn } from "../shared/tw.utils";

export const PrinterPage = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "w-[8.5in] h-[11in] bg-white shadow-md mx-auto my-8 overflow-hidden rounded-md",
        "print:shadow-none print:mx-0 print:my-0 print:rounded-none",
        "text-[12pt] leading-[1.15]",
        "p-[0.5in] print:p-[0.5in]",
        className
      )}
    >
      {children}
    </div>
  );
};

import { cn } from "../shared/tw.utils";

export function Contact({ className }: { className?: string }) {
  return (
    <div className={cn("flex flex-col items-end", className)}>
      <div className="flex justify-between gap-4">
        <div className="text-sm text-gray-700 flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="inline-block w-3 h-3 mr-1 text-gray-400 mb-[2px]"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
              clipRule="evenodd"
            />
          </svg>
          Boise, ID
        </div>
        <a
          href="tel:+12629301118"
          className="block text-sm text-gray-700 hover:text-gray-900"
        >
          (262) 930-1118
        </a>
      </div>
      <a
        href="mailto:andrew.petersen15@gmail.com"
        className="block text-sm text-gray-700 hover:text-gray-900"
      >
        andrew.petersen15@gmail.com
      </a>

      <a
        href="http://github.com/droopytersen"
        target="_blank"
        rel="noopener noreferrer"
        className="block text-sm text-gray-700 hover:text-gray-900"
      >
        github.com/droopytersen
      </a>
    </div>
  );
}

import React from "react";

export const AccordionItem = ({
  question,
  answer,
}: {
  question: string;
  answer?: string | React.ReactNode;
}) => {
  return (
    <div className="divide-y divide-gray-100 my-2 rounded-xl border border-gray-300 bg-white/90 dark:divide-gray-800 dark:border-gray-800 dark:bg-[#121212]/90">
      <details className="group p-6 [&_summary::-webkit-details-marker]:hidden">
        <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900 dark:text-white">
          <h2 className="text-xl font-medium">{question}</h2>

          <span className="shrink-0 rounded-2xl bg-white p-1.5 text-gray-900 sm:p-3">
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-5 shrink-0 transition duration-300 group-open:-rotate-45"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                clipRule="evenodd"
              />
            </svg> */}
            <svg
              className="size-5 shrink-0 transition duration-300 group-open:-rotate-180"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </span>
        </summary>

        <div className="mt-4 leading-relaxed text-gray-700 dark:text-gray-200">
          {answer}
        </div>
      </details>
    </div>
  );
};

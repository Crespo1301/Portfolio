import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resume | Carlos Crespo",
  description: "View and download Carlos Crespo's resume.",
};

export default function ResumePage() {
  return (
    <div className="pt-24 pb-20">
      <div className="container-custom max-w-4xl">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-center">Resume</h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 text-center mb-8">
          Download my resume or view it below.
        </p>
        
        <div className="flex justify-center gap-4 mb-12">
          <a href="/Main_Professional.pdf" download className="btn-primary">
            Download PDF
          </a>
          
          <a
            href="/Main_Professional.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            Open in New Tab
          </a>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700">
          <iframe
            src="/Main_Professional.pdf"
            className="w-full h-[800px]"
            title="Carlos Crespo Resume"
          />
        </div>
      </div>
    </div>
  );
}
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resume | Carlos Crespo",
  description: "View and download Carlos Crespo's resume.",
};

export default function ResumePage() {
  return (
    <div className="pt-28 pb-24 section-default">
      <div className="container-custom max-w-4xl">
        <div className="text-center mb-10">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-heading">Resume</h1>
          <p className="text-xl text-muted">
            Download my resume or view it below.
          </p>
        </div>
        
        <div className="flex justify-center gap-4 mb-12">
          <a href="/Carlos-Crespo-Main.pdf" download className="btn-primary">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Download PDF
          </a>
          
          <a
            href="/Carlos-Crespo-Main.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
            Open in New Tab
          </a>
        </div>

        <div className="mb-12 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 section-light shadow-lg">
          <iframe
            src="/Carlos-Crespo-Main.pdf"
            className="w-full h-[800px]"
            title="Carlos Crespo Resume"
          />
        </div>
        
        <div className="rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 section-light shadow-lg">
          <iframe
            src="/Crespo - Cover Letter.pdf"
            className="w-full h-[800px]"
            title="Carlos Crespo Cover Letter"
          />
        </div>
      </div>
    </div>
  );
}
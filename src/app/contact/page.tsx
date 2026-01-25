import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Carlos Crespo",
  description: "Get in touch with Carlos Crespo.",
};

export default function ContactPage() {
  const contactLinks = [
    {
      name: "Email",
      value: "Crespo1301@gmail.com",
      href: "mailto:Crespo1301@gmail.com",
      description: "Best way to reach me",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      name: "GitHub",
      value: "github.com/Crespo1301",
      href: "https://github.com/Crespo1301",
      description: "Check out my code",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      value: "linkedin.com/in/carlos-crespo",
      href: "https://www.linkedin.com/in/carlos-crespo-46608014a/",
      description: "Let's connect",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
    },
    {
      name: "Phone",
      value: "425-591-5136",
      href: "tel:+14255915136",
      description: "Give me a call",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
    },
  ];

  return (
    <div className="pt-28 pb-24 section-default">
      <div className="container-custom max-w-4xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-heading">Get In Touch</h1>
          <p className="text-xl text-muted max-w-2xl mx-auto">
            I&apos;m currently looking for new opportunities. Whether you have a question or just want to say hi, 
            I&apos;ll do my best to get back to you!
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {contactLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target={link.name !== "Email" && link.name !== "Phone" ? "_blank" : undefined}
              rel={link.name !== "Email" && link.name !== "Phone" ? "noopener noreferrer" : undefined}
              className="flex items-start gap-4 p-6 section-light rounded-2xl border border-gray-100 dark:border-gray-800 hover:border-primary-300 dark:hover:border-primary-700 transition-all duration-300 group hover:shadow-lg"
            >
              <div className="p-3 rounded-xl bg-white dark:bg-gray-800 text-primary-600 dark:text-primary-400 group-hover:scale-110 transition-transform shadow-sm">
                {link.icon}
              </div>
              <div>
                <p className="font-semibold text-heading text-lg">{link.name}</p>
                <p className="text-muted">{link.value}</p>
                <p className="text-sm text-subtle mt-1">{link.description}</p>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-16 text-center p-8 rounded-2xl bg-gradient-to-br from-primary-50 to-primary-100 dark:from-primary-900/20 dark:to-primary-800/20 border border-primary-200 dark:border-primary-800">
          <p className="text-gray-700 dark:text-gray-300 text-lg">
            Based in <span className="font-semibold">Boston, MA</span> • Open to <span className="font-semibold">remote opportunities</span>
          </p>
        </div>
      </div>
    </div>
  );
}
import { Card, CardContent } from "./ui/card";

const experiences = [
  {
    num: "01",
    title: "Flutter App Developer",
    company: "DocZappoint",
    period: "Jan 2025 – Jan 2026",
    current: true,
    achievements: [
      "Built the DocZappoint mobile app (doctor consultations, appointment booking, medical records)",
      "Integrated Firebase Auth, REST APIs, and GetX for real-time chat and state management",
      "Reduced app load time by 35% through performance profiling and optimization",
      "Delivered CI/CD pipelines and location-based hospital discovery features",
    ],
    tech: ["Flutter", "Firebase", "REST APIs", "GetX", "CI/CD"],
    initial: "DZ",
  },
  {
    num: "02",
    title: "App Developer",
    company: "2ByteCode",
    period: "Sept 2023 – Oct 2024",
    current: false,
    achievements: [
      "Built and shipped Flutter Academy app — now live on the Play Store",
      "Added real-time chat, documentation viewer, and interactive quiz features",
      "Cut UI load time by 30% with modular architecture and lazy loading",
      "Maintained CI/CD pipelines and led feature planning across teams",
    ],
    tech: ["Flutter", "Dart", "Firebase", "GetX", "CI/CD"],
    initial: "2B",
  },
  {
    num: "03",
    title: "Developer Intern",
    company: "Kartexa",
    period: "May 2023 – Jul 2023",
    current: false,
    achievements: [
      "Built key modules for StoxG — a Binance-inspired finance app with live news feed",
      "Integrated Firebase Auth, Firestore, and REST APIs for secure real-time data",
      "Designed responsive Flutter UIs with GetX focused on smooth performance",
      "Improved reliability via unit testing, debugging, and performance profiling",
    ],
    tech: ["Flutter", "GetX", "Firebase", "REST APIs", "Firestore"],
    initial: "KX",
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-20 sm:py-28 relative overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 via-background to-background -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-12 sm:mb-16 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div>
            <p className="section-num mb-2">// 04 — experience</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
              Professional <span className="text-green">Journey</span>
            </h2>
          </div>
          <p className="text-sm text-muted-foreground sm:text-right max-w-xs leading-relaxed">
            From intern to building production apps used by thousands.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-5 sm:left-[26px] top-0 bottom-0 w-px timeline-line" />

          <div className="space-y-7 sm:space-y-8">
            {experiences.map((exp) => (
              <div key={exp.num} className="relative flex gap-4 sm:gap-6 group">

                {/* Timeline node */}
                <div className="flex-shrink-0 relative z-10 mt-1">
                  <div
                    className={`w-10 h-10 sm:w-[52px] sm:h-[52px] rounded-xl font-mono font-bold text-xs sm:text-sm flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-105 border ${
                      exp.current
                        ? "border-green text-[#0a0a0a]"
                        : "bg-secondary border-border text-foreground"
                    }`}
                    style={exp.current ? { background: "var(--green)" } : {}}
                  >
                    {exp.initial}
                  </div>
                  {exp.current && (
                    <span
                      className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 rounded-full animate-ping"
                      style={{ background: "var(--green)", opacity: 0.5 }}
                    />
                  )}
                </div>

                {/* Card */}
                <Card className="flex-1 border-border card-hover shimmer-card bg-card relative overflow-hidden">
                  {/* Green accent bar on current role */}
                  {exp.current && (
                    <div className="absolute top-0 left-0 right-0 h-[2px]" style={{ background: "var(--green)" }} />
                  )}

                  <CardContent className="p-4 sm:p-6">
                    {/* Header row */}
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-4 mb-4">
                      <div>
                        <h3 className="text-base sm:text-lg font-semibold text-foreground group-hover:text-green transition-colors duration-300">
                          {exp.title}
                        </h3>
                        <p className="text-sm font-mono font-medium text-green mt-0.5">
                          {exp.company}
                        </p>
                      </div>
                      <div className="flex flex-wrap items-center gap-2">
                        {exp.current && (
                          <span
                            className="font-mono text-[10px] font-bold px-2 py-0.5 rounded border text-[#0a0a0a]"
                            style={{ background: "var(--green)", borderColor: "var(--green)" }}
                          >
                            current
                          </span>
                        )}
                        <span className="font-mono text-xs text-muted-foreground bg-secondary border border-border px-2 py-0.5 rounded whitespace-nowrap">
                          {exp.period}
                        </span>
                      </div>
                    </div>

                    {/* Achievement bullets */}
                    <ul className="space-y-2 mb-4">
                      {exp.achievements.map((a, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-sm text-muted-foreground leading-relaxed">
                          <span className="font-mono text-green text-xs mt-0.5 flex-shrink-0">▸</span>
                          {a}
                        </li>
                      ))}
                    </ul>

                    {/* Tech pills */}
                    <div className="flex flex-wrap gap-1.5">
                      {exp.tech.map((t) => (
                        <span key={t} className="font-mono text-[11px] px-2 py-0.5 rounded border border-border bg-secondary text-muted-foreground">
                          {t}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    num: "01",
    title: "Nestays – PG Booking Web App",
    description:
      "A responsive web app for college students to search, filter, and book verified PGs and flats. Features reviews, online booking, and secure authentication.",
    image: "/assets/nestays.png",
    tech: ["Flutter Web", "Firebase", "REST API", "Responsive UI"],
    demoUrl: "https://nestays.in/#/login",
    codeUrl: "#",
    type: "Web App",
    featured: true,
  },
  {
    num: "02",
    title: "MindPad – AI Note-Taking App",
    description:
      "Flutter app with AI-powered note validation, content summarization, and enhancement to improve productivity using on-device intelligence.",
    image: "/assets/mindpad.png",
    tech: ["Flutter", "AI APIs", "GetX", "Firebase"],
    demoUrl: "https://github.com/mohammadaliyasin/Mind-Pad",
    codeUrl: "https://github.com/mohammadaliyasin/Mind-Pad",
    type: "Mobile App",
    featured: false,
  },
  {
    num: "03",
    title: "HandIntellect AI – Medical Assistant",
    description:
      "AI-powered assistant digitizing handwritten prescriptions, retrieving medicine info, and providing chatbot health guidance with NLP support.",
    image: "/assets/1.png",
    tech: ["Flutter", "Node.js", "MongoDB", "AI APIs"],
    demoUrl: "https://github.com/mohammadaliyasin/HandIntellect-Ai",
    codeUrl: "https://github.com/mohammadaliyasin/HandIntellect-Ai",
    type: "AI · Healthcare",
    featured: true,
  },
  {
    num: "04",
    title: "NirvaMind – Meditation & Yoga",
    description:
      "Holistic wellness app with AI yoga posture detection, meditation music, and a community hub to track mindfulness progress.",
    image: "/assets/Nirvamind.png",
    tech: ["Flutter", "TensorFlow Lite", "Camera API", "Firebase"],
    demoUrl: "https://github.com/mohammadaliyasin/NirvaMind",
    codeUrl: "https://github.com/mohammadaliyasin/NirvaMind",
    type: "AI · Wellness",
    featured: false,
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-20 sm:py-28 relative overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-12 sm:mb-16 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div>
            <p className="section-num mb-2">// 03 — projects</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
              Featured <span className="text-green">Work</span>
            </h2>
          </div>
          <a
            href="https://github.com/mohammadaliyasin?tab=repositories"
            target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-green transition-colors duration-300 font-mono sm:text-right"
          >
            <Github className="w-4 h-4" />
            view_all_on_github →
          </a>
        </div>

        {/* Project grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6">
          {projects.map((p) => (
            <Card
              key={p.num}
              className="group relative overflow-hidden border-border card-hover shimmer-card bg-card"
            >
              {/* Image */}
              <div className="relative aspect-[16/9] overflow-hidden bg-secondary">
                <ImageWithFallback
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100"
                />
                {/* Dark gradient over image */}
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent opacity-80 group-hover:opacity-50 transition-opacity duration-400" />

                {/* Number + type */}
                <div className="absolute top-3 left-4 font-mono text-5xl font-black text-white/[0.06] select-none">
                  {p.num}
                </div>
                <div className="absolute top-3 right-3 flex flex-col gap-1.5">
                  <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-card/70 border border-border text-muted-foreground backdrop-blur-sm">
                    {p.type}
                  </span>
                  {p.featured && (
                    <span
                      className="font-mono text-[10px] px-2 py-0.5 rounded border text-[#0a0a0a] font-semibold"
                      style={{ background: "var(--green)", borderColor: "var(--green)" }}
                    >
                      featured
                    </span>
                  )}
                </div>
              </div>

              <CardContent className="p-4 sm:p-5 space-y-3">
                <h3 className="text-base sm:text-lg font-semibold text-foreground group-hover:text-green transition-colors duration-300 leading-snug">
                  {p.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
                  {p.description}
                </p>

                {/* Tech */}
                <div className="flex flex-wrap gap-1.5">
                  {p.tech.map((t) => (
                    <span key={t} className="font-mono text-[11px] px-2 py-0.5 rounded border border-border bg-secondary text-muted-foreground">
                      {t}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-2.5 pt-1">
                  <Button
                    asChild size="sm"
                    className="font-mono text-xs gap-1.5 flex-1 sm:flex-none text-[#0a0a0a] hover:opacity-90 transition-opacity"
                    style={{ background: "var(--green)" }}
                  >
                    <a href={p.demoUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-3 h-3" /> live_demo
                    </a>
                  </Button>
                  <Button
                    asChild variant="outline" size="sm"
                    className="font-mono text-xs gap-1.5 flex-1 sm:flex-none border-border text-muted-foreground hover:border-green hover:text-green bg-transparent transition-all duration-300"
                  >
                    <a href={p.codeUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="w-3 h-3" /> source
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

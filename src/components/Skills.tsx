import { Card, CardContent } from "./ui/card";

const skillCategories = [
  {
    num: "01",
    title: "Mobile Development",
    icon: "📱",
    skills: ["Flutter", "Dart", "Firebase", "RESTful APIs", "GetX", "Provider", "Bloc"],
    description: "Cross-platform mobile apps with pixel-perfect UIs",
    featured: false,
  },
  {
    num: "02",
    title: "Backend & Full-Stack",
    icon: "⚙️",
    skills: ["Node.js", "Express.js", "MongoDB", "Firebase Firestore", "Postman", "CI/CD"],
    description: "Scalable APIs and server-side architecture", 
    featured: false,
  },
  {
    num: "03",
    title: "Programming & Frontend",
    icon: "💻",
    skills: ["JavaScript", "TypeScript", "C++", "Python", "Java", "HTML/CSS", "Tailwind CSS", "React"],
    description: "Modern languages and web technologies",
    featured: false,
  },
  {
    num: "04",
    title: "Tools & Core Skills",
    icon: "🛠️",
    skills: ["Git", "GitHub", "Figma", "Agile", "OOP", "DSA", "Problem Solving", "Team Leadership"],
    description: "Developer tools, workflows, and soft skills",
    featured: false,
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-20 sm:py-28 relative overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-12 sm:mb-16 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div>
            <p className="section-num mb-2">// 02 — skills</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
              Skills &amp; <span className="text-green">Technologies</span>
            </h2>
          </div>
          <p className="text-sm text-muted-foreground max-w-xs sm:text-right leading-relaxed">
            Modern tools and frameworks for building production grade applications.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
          {skillCategories.map((cat) => (
            <Card
              key={cat.num}
              className={`group relative overflow-hidden border-border card-hover shimmer-card bg-card ${
                cat.featured ? "sm:col-span-2 lg:col-span-1" : ""
              }`}
            >
              {/* Green left accent on featured card */}
              {cat.featured && (
                <div className="absolute top-0 left-0 w-[3px] h-full" style={{ background: "var(--green)" }} />
              )}

              <CardContent className="p-5 sm:p-6">
                <div className="flex items-start justify-between gap-4 mb-5">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-xl border border-border flex items-center justify-center text-lg ${cat.featured ? "bg-green-muted border-green" : "bg-secondary"}`}>
                      {cat.icon}
                    </div>
                    <div>
                      <h3 className={`text-sm sm:text-base font-semibold transition-colors duration-300 ${cat.featured ? "text-green" : "text-foreground group-hover:text-green"}`}>
                        {cat.title}
                      </h3>
                      <p className="text-xs text-muted-foreground mt-0.5">{cat.description}</p>
                    </div>
                  </div>
                  <span className="font-mono text-xs text-muted-foreground/40 flex-shrink-0 mt-1">{cat.num}</span>
                </div>

                {/* Skill pills */}
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs font-medium px-2.5 py-1 rounded-lg border border-border bg-secondary text-muted-foreground hover:border-green hover:text-green hover:bg-green-muted transition-all duration-200 cursor-default font-mono"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <p className="text-center text-muted-foreground/50 text-xs font-mono mt-10 tracking-widest">
          // always_learning = true
        </p>
      </div>
    </section>
  );
}

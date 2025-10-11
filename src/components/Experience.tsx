import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";

export function Experience() {
  const experiences = [
    {
      title: "Flutter App Developer",
      company: "DocZappoint",
      period: "Jan 2025 – Jun 2025",
      description:
        "Developed the DocZappoint mobile app using Flutter, enabling doctor consultations, appointment booking, and access to medical records with a clean and responsive UI. Integrated Firebase, REST APIs, and GetX for real-time chat, secure authentication, and efficient state management. Built scalable UI components and optimized performance, reducing load time by 35%. Collaborated with designers and backend teams to deliver seamless CI/CD workflows and location-based hospital discovery.",
      technologies: ["Flutter", "Firebase", "REST APIs", "GetX", "CI/CD"],
      isCurrentRole: true,
    },
    {
      title: "App Developer",
      company: "2ByteCode",
      period: "Mar 2023 – Oct 2024",
      description:
        "Developed and deployed the Flutter Academy app, featuring real-time chat, documentation, and interactive quizzes—now live on the Play Store. Utilized Flutter, Dart, GetX, and Firebase to build modular, responsive UIs with optimized performance, reducing UI load time by over 30%. Collaborated across teams using Git and CI/CD pipelines to maintain scalable codebases, plan new features, and align with product goals.",
      technologies: ["Flutter", "Dart", "Firebase", "GetX", "CI/CD"],
      isCurrentRole: false,
    },
    {
      title: "Developer Intern",
      company: "Kartexa",
      period: "May 2023 – Jul 2024",
      description:
        "Built core modules for StoxG, a finance app inspired by Binance, featuring live news, secure authentication, and payment gateway integration. Integrated Firebase Auth, Firestore, and REST APIs for secure real-time data handling. Designed responsive UIs using Flutter & GetX and improved app reliability through unit testing, debugging, and performance profiling under tight deadlines.",
      technologies: ["Flutter", "GetX", "Firebase", "REST APIs", "Firestore"],
      isCurrentRole: false,
    },
  ];

  return (
    <section id="experience" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/10 to-background"></div>

      <div className="relative max-w-5xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl lg:text-5xl text-foreground">
            Professional Journey
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            My evolution as a Flutter developer — from intern to building
            production-grade applications.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-muted hidden md:block"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative flex items-start group">
                {/* Timeline dot */}
                <div className="hidden md:flex absolute left-6 w-6 h-6 bg-gradient-to-br from-primary to-accent rounded-full border-4 border-background shadow-lg group-hover:scale-125 transition-transform duration-300">
                  {exp.isCurrentRole && (
                    <div className="absolute inset-1 bg-foreground rounded-full animate-pulse"></div>
                  )}
                </div>

                <Card className="w-full md:ml-20 group-hover:transform group-hover:scale-[1.02] transition-all duration-500 bg-gradient-to-br from-card to-secondary/30 backdrop-blur-sm border-border hover:border-accent">
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-card/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <CardHeader className="relative">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                      <div className="space-y-2">
                        <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                          {exp.title}
                        </CardTitle>
                        <p className="text-lg text-primary font-medium">
                          {exp.company}
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        {exp.isCurrentRole && (
                          <Badge className="bg-primary text-primary-foreground border-0 animate-pulse">
                            Current
                          </Badge>
                        )}
                        <Badge
                          variant="outline"
                          className="bg-card border-border text-muted-foreground"
                        >
                          {exp.period}
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="relative space-y-4">
                    <p className="text-muted-foreground leading-relaxed">
                      {exp.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <Badge
                          key={techIndex}
                          variant="secondary"
                          className="bg-card/50 border-border hover:bg-accent transition-colors duration-300"
                        >
                          {tech}
                        </Badge>
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

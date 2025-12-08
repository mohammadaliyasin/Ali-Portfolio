import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Projects() {
  const projects = [
    {
      title: "Nestays – PG Booking Web App",
      description:
        "A responsive web application for college students to search, filter, and book verified PGs and flats. Includes reviews, online booking, and secure authentication with a modern UI.",
      image: "/assets/nestays.png",
      technologies: ["Flutter Web", "Firebase", "REST API", "Responsive UI"],
      demoUrl: "https://nestays.in/#/login",
      codeUrl: "#",
      featured: true,
    },
    {
      title: "MindPad – AI Note-Taking App",
      description:
        "A smart Flutter app integrated with AI tools for real-time note validation, content summarization, and enhancement. Designed to improve productivity and note accuracy using on-device intelligence.",
      image: "/assets/mindpad.png",
      technologies: ["Flutter", "AI APIs", "GetX", "Firebase"],
      demoUrl: "https://github.com/mohammadaliyasin/Mind-Pad",
      codeUrl: "https://github.com/mohammadaliyasin/Mind-Pad",
      featured: false,
    },
    {
      title: "HandIntellect AI – AI Medical Assistant",
      description:
        "An AI-powered medical assistant that digitizes handwritten prescriptions, retrieves medicine details, and provides chatbot-based health guidance with real-time scanning and NLP support.",
      image: "/assets/1.png",
      technologies: ["Flutter", "Node.js", "MongoDB", "AI APIs"],
      demoUrl: "https://github.com/divyanshu20029/handintellect",
      codeUrl: "https://github.com/divyanshu20029/handintellect",
      featured: true,
    },
    {
      title: "NirvaMind – Meditation & Yoga App",
      description:
        "A holistic meditation and yoga mobile app featuring AI-powered yoga posture detection, meditation music, and a vibrant community to track wellness progress and mindfulness goals.",
      image: "/assets/Nirvamind.png",
      technologies: ["Flutter", "TensorFlow Lite", "Camera API", "Firebase"],
      demoUrl: "https://github.com/mohammadaliyasin/NirvaMind",
      codeUrl: "https://github.com/mohammadaliyasin/NirvaMind",
      featured: false,
    },
  ];

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-muted/40 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-accent/40 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl lg:text-5xl text-foreground">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A collection of real-world projects showcasing my Flutter expertise,
            full-stack skills, and AI integrations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className={`group relative overflow-hidden bg-gradient-to-br from-card to-secondary/30 backdrop-blur-sm border-border hover:border-accent transition-all duration-500 hover:scale-[1.02]`}
            >
              <div className="relative aspect-video overflow-hidden">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {project.featured && (
                  <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground border-0">
                    Featured
                  </Badge>
                )}
              </div>

              <CardHeader>
                <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge
                      key={techIndex}
                      variant="outline"
                      className="bg-card/50 border-border hover:bg-accent transition-colors duration-300"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-3 pt-2">
                  <Button
                    asChild
                    className="bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-300"
                  >
                    <a href={project.demoUrl} target="_blank">
                      Live Demo
                    </a>
                  </Button>

                  <Button
                    asChild
                    variant="outline"
                    className="bg-card border-border hover:bg-accent transition-all duration-300"
                  >
                    <a href={project.codeUrl} target="_blank">
                      View Code
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

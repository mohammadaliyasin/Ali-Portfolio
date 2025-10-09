import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";

export function Experience() {
  const experiences = [
    {
      title: "Senior Flutter Developer",
      company: "TechCorp Solutions",
      period: "2022 - Present",
      description: "Led the development of multiple mobile applications serving 100K+ users. Implemented CI/CD pipelines, mentored junior developers, and architected scalable Flutter solutions.",
      technologies: ["Flutter", "Firebase", "AWS", "CI/CD"],
      isCurrentRole: true
    },
    {
      title: "Full Stack Developer",
      company: "StartupXYZ",
      period: "2021 - 2022",
      description: "Built and maintained web applications using React and Node.js. Developed RESTful APIs, integrated third-party services, and optimized application performance.",
      technologies: ["React", "Node.js", "PostgreSQL", "Docker"],
      isCurrentRole: false
    },
    {
      title: "Mobile App Developer",
      company: "Innovation Labs",
      period: "2020 - 2021",
      description: "Developed cross-platform mobile applications using Flutter. Collaborated with design teams to implement pixel-perfect UIs and integrated complex animations.",
      technologies: ["Flutter", "Dart", "SQLite", "REST APIs"],
      isCurrentRole: false
    },
    {
      title: "Junior Developer",
      company: "CodeCraft Agency",
      period: "2019 - 2020",
      description: "Started my career building web applications and learning mobile development. Gained experience in modern development practices and agile methodologies.",
      technologies: ["JavaScript", "HTML/CSS", "Git", "Agile"],
      isCurrentRole: false
    }
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
            My evolution as a developer, from junior to senior positions
          </p>
        </div>

        <div className="relative">
          {/* Enhanced timeline line using grayscale */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-muted hidden md:block"></div>
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative flex items-start group">
                {/* Enhanced timeline dot */}
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
                        <p className="text-lg text-primary font-medium">{exp.company}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        {exp.isCurrentRole && (
                          <Badge className="bg-primary text-primary-foreground border-0 animate-pulse">
                            Current
                          </Badge>
                        )}
                        <Badge variant="outline" className="bg-card border-border text-muted-foreground">
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
                        <Badge key={techIndex} variant="secondary" className="bg-card/50 border-border hover:bg-accent transition-colors duration-300">
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
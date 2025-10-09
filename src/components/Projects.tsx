import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Projects() {
  const projects = [
    {
      title: "E-Commerce Flutter App",
      description: "A complete mobile e-commerce solution with user authentication, product catalog, shopping cart, and payment integration built with modern Flutter architecture.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop",
      technologies: ["Flutter", "Firebase", "Stripe", "REST API"],
      demoUrl: "#",
      codeUrl: "#",
      featured: true,
    },
    {
      title: "HandIntellect App",
      description: "A comprehensive system that leverages AI to accurately recognize handwritten prescriptions, ensuring safer and more efficient medication management for healthcare providers and patients.",
      image: "src/assets/1.png",
      technologies: ["Flutter", "Nodejs", "provider", "MongoDB"],
      demoUrl: "#",
      codeUrl: "#",
      featured: false,
    },
    {
      title: "Fitness Tracking Mobile App",
      description: "Cross-platform fitness app with workout tracking, progress analytics, social features, and AI-powered recommendations built with Flutter.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop",
      technologies: ["Flutter", "SQLite", "Charts", "Camera API"],
      demoUrl: "#",
      codeUrl: "#",
      featured: true,
    },
    {
      title: "Weather Dashboard",
      description: "Real-time weather dashboard with location-based forecasts, interactive maps, weather alerts, and beautiful data visualizations.",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop",
      technologies: ["Next.js", "TypeScript", "Weather API", "Maps API"],
      demoUrl: "#",
      codeUrl: "#",
      featured: false,
    }
  ];

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Background patterns using grayscale */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-muted/40 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-accent/40 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl lg:text-5xl text-foreground">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Showcasing my latest work in Flutter development and full-stack solutions
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className={`group relative overflow-hidden bg-gradient-to-br from-card to-secondary/30 backdrop-blur-sm border-border hover:border-accent transition-all duration-500 hover:transform hover:scale-[1.02] ${project.featured ? 'lg:col-span-1' : ''}`}>
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-card/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative aspect-video overflow-hidden">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {project.featured && (
                  <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground border-0">
                    Featured
                  </Badge>
                )}
              </div>
              
              <CardHeader className="relative">
                <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="relative space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="outline" className="bg-card/50 border-border hover:bg-accent transition-colors duration-300">
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex gap-3 pt-2">
                  <Button className="bg-primary hover:bg-primary/90 text-primary-foreground border-0 transition-all duration-300">
                    Live Demo
                  </Button>
                  <Button variant="outline" className="bg-card border-border hover:bg-accent transition-all duration-300">
                    View Code
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
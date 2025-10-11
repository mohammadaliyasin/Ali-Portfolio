import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";

export function Skills() {
  const skillCategories = [
    {
      title: "Mobile Development",
      icon: "📱",
      skills: [
        "Flutter",
        "Dart",
        "Firebase",
        "RESTful APIs",
        "GetX",
        "Provider",
        "Bloc",
      ],
      bgClass: "bg-gradient-to-br from-card to-secondary/50",
    },
    {
      title: "Backend & Full-Stack Development",
      icon: "⚙️",
      skills: [
        "Node.js",
        "Express.js",
        "MongoDB",
        "Firebase Firestore",
        "Postman",
        "CI/CD",
      ],
      bgClass: "bg-gradient-to-br from-secondary to-muted/50",
    },
    {
      title: "Programming & Frontend Technologies",
      icon: "💻",
      skills: [
        "JavaScript",
        "C++",
        "Python",
        "Java",
        "C",
        "HTML/CSS",
        "Tailwind CSS",
      ],
      bgClass: "bg-gradient-to-br from-muted to-accent/50",
    },
    {
      title: "Tools & Core Skills",
      icon: "🛠️",
      skills: [
        "Git",
        "GitHub",
        "Figma",
        "Postman",
        "Agile",
        "OOP",
        "DSA",
        "Operating Systems",
        "Problem Solving",
        "Teamwork",
        "Project Management",
      ],
      bgClass: "bg-gradient-to-br from-accent to-card/50",
    },
  ];

  return (
    <section id="skills" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/10 to-background"></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl lg:text-5xl text-foreground">
            Skills & Technologies
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I work with modern tools and technologies to build scalable, high-performance, and visually appealing applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className={`group relative overflow-hidden ${category.bgClass} backdrop-blur-sm border-border hover:border-accent transition-all duration-500 hover:transform hover:scale-[1.02]`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-card/20 to-transparent"></div>
              <CardHeader className="relative">
                <div className="flex items-center space-x-3 mb-2">
                  <span className="text-3xl">{category.icon}</span>
                  <CardTitle className="text-2xl text-foreground">
                    {category.title}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="relative">
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      variant="secondary"
                      className="bg-card/50 hover:bg-accent border-border text-foreground hover:scale-105 transition-all duration-300 px-3 py-1"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

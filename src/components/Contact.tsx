import { useState } from "react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { Github, Linkedin, Mail, MapPin, Send, ExternalLink } from "lucide-react";

const contactItems = [
  {
    Icon: Mail,
    label: "email",
    value: "mohammadaliyasin6@gmail.com",
    href: "mailto:mohammadaliyasin6@gmail.com",
    note: "responds within 24h",
    external: false,
  },
  {
    Icon: Linkedin,
    label: "linkedin",
    value: "ali-yasin-0166a0233",
    href: "https://www.linkedin.com/in/ali-yasin-0166a0233/",
    note: "connect professionally",
    external: true,
  },
  {
    Icon: Github,
    label: "github",
    value: "mohammadaliyasin",
    href: "https://github.com/mohammadaliyasin",
    note: "open source work",
    external: true,
  },
  {
    Icon: MapPin,
    label: "location",
    value: "Remote · Worldwide",
    href: "#",
    note: "available for remote roles",
    external: false,
  },
];

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  return (
    <section id="contact" className="py-20 sm:py-28 relative overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      {/* faint green glow corners */}
      <div
        className="absolute -top-24 -right-24 w-72 h-72 rounded-full opacity-[0.05]"
        style={{ background: "radial-gradient(circle, var(--green) 0%, transparent 70%)" }}
      />
      <div
        className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full opacity-[0.05]"
        style={{ background: "radial-gradient(circle, var(--green) 0%, transparent 70%)" }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-12 sm:mb-16">
          <p className="section-num mb-2">// 05 — contact</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
            Let's <span className="text-green">Connect</span>
          </h2>
          <p className="text-base text-muted-foreground mt-3 max-w-lg leading-relaxed">
            Have a project in mind or want to collaborate? I'm always open to discussing new opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-8 lg:gap-12">

          {/* Contact Form */}
          <Card className="border-border card-hover shimmer-card bg-card overflow-hidden relative">
            {/* Green top line */}
            <div className="absolute top-0 left-0 right-0 h-[2px]" style={{ background: "var(--green)" }} />

            <CardContent className="p-5 sm:p-7">
              <div className="flex items-center gap-2 mb-6">
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center"
                  style={{ background: "var(--green-muted)", border: "1px solid var(--green-border)" }}
                >
                  <Send className="w-4 h-4 text-green" />
                </div>
                <span className="font-mono text-sm text-foreground font-medium">send_message()</span>
              </div>

              <form
                className="space-y-4"
                action="https://formsubmit.co/mohammadaliyasin6@gmail.com"
                method="POST"
              >
                <input type="hidden" name="_captcha" value="false" />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <Label htmlFor="name" className="text-foreground text-xs font-mono font-medium">// name</Label>
                    <Input
                      id="name" name="name" placeholder="Your name" required
                      value={form.name}
                      onChange={(e) => setForm((s) => ({ ...s, name: e.target.value }))}
                      className="bg-secondary border-border text-foreground placeholder:text-muted-foreground/50 focus-visible:border-green focus-visible:ring-0 focus-visible:ring-offset-0 font-mono text-sm transition-colors duration-200"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="email" className="text-foreground text-xs font-mono font-medium">// email</Label>
                    <Input
                      id="email" name="email" type="email" placeholder="your@email.com" required
                      value={form.email}
                      onChange={(e) => setForm((s) => ({ ...s, email: e.target.value }))}
                      className="bg-secondary border-border text-foreground placeholder:text-muted-foreground/50 focus-visible:border-green focus-visible:ring-0 focus-visible:ring-offset-0 font-mono text-sm transition-colors duration-200"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <Label htmlFor="subject" className="text-foreground text-xs font-mono font-medium">// subject</Label>
                  <Input
                    id="subject" name="subject" placeholder="Project inquiry / Collaboration" required
                    value={form.subject}
                    onChange={(e) => setForm((s) => ({ ...s, subject: e.target.value }))}
                    className="bg-secondary border-border text-foreground placeholder:text-muted-foreground/50 focus-visible:border-green focus-visible:ring-0 focus-visible:ring-offset-0 font-mono text-sm transition-colors duration-200"
                  />
                </div>

                <div className="space-y-1.5">
                  <Label htmlFor="message" className="text-foreground text-xs font-mono font-medium">// message</Label>
                  <Textarea
                    id="message" name="message" rows={5} required
                    placeholder="Tell me about your project..."
                    value={form.message}
                    onChange={(e) => setForm((s) => ({ ...s, message: e.target.value }))}
                    className="bg-secondary border-border text-foreground placeholder:text-muted-foreground/50 focus-visible:border-green focus-visible:ring-0 focus-visible:ring-offset-0 font-mono text-sm resize-none transition-colors duration-200"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full font-mono text-sm gap-2 text-[#0a0a0a] font-semibold hover:opacity-90 transition-opacity"
                  style={{ background: "var(--green)" }}
                >
                  <Send className="w-4 h-4" />
                  send_message()
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info Column */}
          <div className="space-y-3">
            {contactItems.map(({ Icon, label, value, href, note, external }) => (
              <a
                key={label}
                href={href}
                target={external ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="block group"
              >
                <Card className="border-border card-hover shimmer-card bg-card">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-3">
                      <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-secondary border border-border flex items-center justify-center group-hover:border-green group-hover:bg-green-muted transition-all duration-300">
                        <Icon className="w-4 h-4 text-muted-foreground group-hover:text-green transition-colors duration-300" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-1.5">
                          <span className="font-mono text-[10px] font-medium text-green">{label}</span>
                          {external && <ExternalLink className="w-2.5 h-2.5 text-muted-foreground/50 group-hover:text-green transition-colors duration-300" />}
                        </div>
                        <p className="text-sm text-foreground font-medium truncate leading-tight">{value}</p>
                        <p className="text-[11px] text-muted-foreground/60 mt-0.5">{note}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </a>
            ))}

            {/* Availability note */}
            <div
              className="rounded-xl p-4 font-mono"
              style={{ background: "var(--green-muted)", border: "1px solid var(--green-border)" }}
            >
              <p className="text-xs text-green font-semibold">status.available = true</p>
              <p className="text-xs text-muted-foreground mt-1">
                Open to freelance · full-time · internship
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

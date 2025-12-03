import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";

export function Contact() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background effects using grayscale */}
      <div className="absolute inset-0 bg-gradient-to-br from-muted/20 via-accent/10 to-secondary/20"></div>
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-muted/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-accent/30 rounded-full blur-3xl"></div>

      <div className="relative max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl lg:text-5xl text-foreground">
            Let's Build Something Amazing
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Have a project in mind? Let's discuss how we can work together to
            bring your ideas to life.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <Card className="bg-gradient-to-br from-card to-secondary/30 backdrop-blur-xl border-border hover:border-accent transition-all duration-500">
            <CardHeader>
              <CardTitle className="text-2xl text-foreground">
                Send a Message
              </CardTitle>
            </CardHeader>

            <CardContent>
              <form
                className="space-y-6"
                action="https://formsubmit.co/mohammadaliyasin6@gmail.com"
                method="POST"
              >
                {/* Disable Captcha */}
                <input type="hidden" name="_captcha" value="false" />

                {/* (Optional) Redirect to a Thank You page */}
                {/* <input type="hidden" name="_next" value="https://yourdomain.com/thankyou" /> */}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-foreground">
                      Name
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Your name"
                      required
                      className="bg-card/50 border-border focus:border-primary transition-colors duration-300"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-foreground">
                      Email
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your@email.com"
                      required
                      className="bg-card/50 border-border focus:border-primary transition-colors duration-300"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject" className="text-foreground">
                    Subject
                  </Label>
                  <Input
                    id="subject"
                    name="subject"
                    placeholder="Project inquiry"
                    required
                    className="bg-card/50 border-border focus:border-primary transition-colors duration-300"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-foreground">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell me about your project..."
                    rows={5}
                    required
                    className="bg-card/50 border-border focus:border-primary transition-colors duration-300 resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/  text-primary-foreground border-0 py-3 text-lg transition-all duration-300 transform hover:scale-[1.02]"
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-8">
            <Card className="group bg-gradient-to-br from-card to-secondary/30 backdrop-blur-xl border-border hover:border-accent transition-all duration-500 hover:transform hover:scale-[1.02]">
              <CardContent className="p-8">
                <div className="flex items-center space-x-6">
                  <div className="bg-primary p-4 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <svg
                      className="w-8 h-8 text-primary-foreground"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl text-foreground mb-1">Email</h4>
                    <p className="text-muted-foreground">
                      mohammadaliyasin6@gmail.com
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="group bg-gradient-to-br from-card to-secondary/30 backdrop-blur-xl border-border hover:border-accent transition-all duration-500 hover:transform hover:scale-[1.02]">
              <CardContent className="p-8">
                <div className="flex items-center space-x-6">
                  <div className="bg-accent p-4 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <svg
                      className="w-8 h-8 text-accent-foreground"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl text-foreground mb-1">Location</h4>
                    <p className="text-muted-foreground">
                      Remote / Available Worldwide
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <a
              href="https://www.linkedin.com/in/mohammad-ali-yasin/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Card className="group bg-gradient-to-br from-card to-secondary/30 backdrop-blur-xl border-border hover:border-accent transition-all duration-500 hover:transform hover:scale-[1.02]">
                <CardContent className="p-8">
                  <div className="flex items-center space-x-6">
                    <div className="bg-muted p-4 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <svg
                        className="w-8 h-8 text-muted-foreground"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-xl text-foreground mb-1">LinkedIn</h4>
                      <p className="text-muted-foreground">Connect with me</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

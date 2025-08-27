import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Users, BookOpen, Award, Globe } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-background via-card to-background pt-16 py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="font-heading font-black text-4xl lg:text-6xl text-balance leading-tight">
                Where Innovation Meets <span className="text-primary">Excellence</span>
              </h1>
              <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
                At Thapar Institute, we don't just educate engineers—we cultivate innovators, researchers, and leaders
                who shape tomorrow's world. From cutting-edge makerspaces to vibrant student communities, every corner
                of our campus buzzes with possibility.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="group">
                Explore Programs
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="outline" size="lg">
                Virtual Campus Tour
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">15,000+</div>
                <div className="text-sm text-muted-foreground">Students</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Faculty</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">50+</div>
                <div className="text-sm text-muted-foreground">Programs</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">75+</div>
                <div className="text-sm text-muted-foreground">Years Legacy</div>
              </div>
            </div>
          </div>

          {/* Right Content - Quick Access Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6 space-y-4">
                <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-lg">Academics</h3>
                  <p className="text-sm text-muted-foreground">
                    World-class programs in engineering, technology, and management
                  </p>
                </div>
                <Button variant="ghost" size="sm" className="group-hover:text-primary">
                  Learn More <ArrowRight className="ml-1 h-3 w-3" />
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6 space-y-4">
                <div className="h-12 w-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                  <Users className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-lg">Student Life</h3>
                  <p className="text-sm text-muted-foreground">
                    Vibrant campus with 200+ clubs, sports, and cultural activities
                  </p>
                </div>
                <Button variant="ghost" size="sm" className="group-hover:text-primary">
                  Explore <ArrowRight className="ml-1 h-3 w-3" />
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6 space-y-4">
                <div className="h-12 w-12 bg-accent/10 rounded-lg flex items-center justify-center">
                  <Award className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-lg">Research</h3>
                  <p className="text-sm text-muted-foreground">Cutting-edge research centers and innovation labs</p>
                </div>
                <Button variant="ghost" size="sm" className="group-hover:text-primary">
                  Discover <ArrowRight className="ml-1 h-3 w-3" />
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6 space-y-4">
                <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Globe className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-lg">Global Impact</h3>
                  <p className="text-sm text-muted-foreground">Alumni network spanning 50+ countries worldwide</p>
                </div>
                <Button variant="ghost" size="sm" className="group-hover:text-primary">
                  Connect <ArrowRight className="ml-1 h-3 w-3" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-secondary/5 blur-3xl" />
      </div>
    </section>
  )
}

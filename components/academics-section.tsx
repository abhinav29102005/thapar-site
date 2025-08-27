import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Users, Award, Microscope, Palette, Calculator } from "lucide-react"
import Link from "next/link"

export function AcademicsSection() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Academic <span className="text-primary">Excellence</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Discover world-class programs designed to shape tomorrow's leaders in engineering, technology, and liberal
            arts.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* Undergraduate Programs */}
          <Card className="group hover:shadow-lg transition-all duration-300">
            <CardHeader>
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <BookOpen className="w-6 h-6 text-primary" />
              </div>
              <CardTitle>Undergraduate Programs</CardTitle>
              <CardDescription>
                Comprehensive B.Tech and B.E. programs with cutting-edge curriculum and industry partnerships.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="secondary">Computer Science</Badge>
                <Badge variant="secondary">Mechanical</Badge>
                <Badge variant="secondary">Electronics</Badge>
                <Badge variant="secondary">Civil</Badge>
              </div>
              <Button asChild variant="outline" className="w-full bg-transparent">
                <Link href="/academics/undergraduate">Explore Programs</Link>
              </Button>
            </CardContent>
          </Card>

          {/* Postgraduate Programs */}
          <Card className="group hover:shadow-lg transition-all duration-300">
            <CardHeader>
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <Award className="w-6 h-6 text-primary" />
              </div>
              <CardTitle>Postgraduate Programs</CardTitle>
              <CardDescription>
                Advanced M.Tech, MBA, and research programs for specialized expertise and leadership development.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="secondary">M.Tech</Badge>
                <Badge variant="secondary">MBA</Badge>
                <Badge variant="secondary">M.Sc</Badge>
                <Badge variant="secondary">PhD</Badge>
              </div>
              <Button asChild variant="outline" className="w-full bg-transparent">
                <Link href="/academics/postgraduate">View Programs</Link>
              </Button>
            </CardContent>
          </Card>

          {/* Liberal Arts & Sciences */}
          <Card className="group hover:shadow-lg transition-all duration-300 border-primary/20">
            <CardHeader>
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <Palette className="w-6 h-6 text-primary" />
              </div>
              <CardTitle className="text-primary">Liberal Arts & Sciences</CardTitle>
              <CardDescription>
                Interdisciplinary programs combining humanities, social sciences, and natural sciences for holistic
                education.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="default">Philosophy</Badge>
                <Badge variant="default">Psychology</Badge>
                <Badge variant="default">Literature</Badge>
                <Badge variant="default">Physics</Badge>
              </div>
              <Button asChild className="w-full">
                <Link href="/academics/liberal-arts">Discover Programs</Link>
              </Button>
            </CardContent>
          </Card>

          {/* Research Excellence */}
          <Card className="group hover:shadow-lg transition-all duration-300">
            <CardHeader>
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <Microscope className="w-6 h-6 text-primary" />
              </div>
              <CardTitle>Research Excellence</CardTitle>
              <CardDescription>
                State-of-the-art research facilities and opportunities for undergraduate and graduate students.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="secondary">AI & ML</Badge>
                <Badge variant="secondary">Robotics</Badge>
                <Badge variant="secondary">Biotech</Badge>
                <Badge variant="secondary">Renewable Energy</Badge>
              </div>
              <Button asChild variant="outline" className="w-full bg-transparent">
                <Link href="/research">Research Centers</Link>
              </Button>
            </CardContent>
          </Card>

          {/* Industry Partnerships */}
          <Card className="group hover:shadow-lg transition-all duration-300">
            <CardHeader>
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <CardTitle>Industry Partnerships</CardTitle>
              <CardDescription>
                Strong industry connections ensuring practical learning and excellent placement opportunities.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="secondary">Google</Badge>
                <Badge variant="secondary">Microsoft</Badge>
                <Badge variant="secondary">TCS</Badge>
                <Badge variant="secondary">Infosys</Badge>
              </div>
              <Button asChild variant="outline" className="w-full bg-transparent">
                <Link href="/placements">Placement Records</Link>
              </Button>
            </CardContent>
          </Card>

          {/* Academic Support */}
          <Card className="group hover:shadow-lg transition-all duration-300">
            <CardHeader>
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <Calculator className="w-6 h-6 text-primary" />
              </div>
              <CardTitle>Academic Support</CardTitle>
              <CardDescription>
                Comprehensive support services including tutoring, mentorship, and career guidance.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="secondary">Tutoring</Badge>
                <Badge variant="secondary">Mentorship</Badge>
                <Badge variant="secondary">Career Services</Badge>
                <Badge variant="secondary">Study Groups</Badge>
              </div>
              <Button asChild variant="outline" className="w-full bg-transparent">
                <Link href="/student-services">Support Services</Link>
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <h3 className="font-heading text-2xl font-bold mb-4">Ready to Begin Your Academic Journey?</h3>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            Join thousands of students who have transformed their careers through our world-class education.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="text-lg px-8">
              <Link href="/apply">Apply Now</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-lg px-8 bg-transparent">
              <Link href="/admissions">Admission Requirements</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

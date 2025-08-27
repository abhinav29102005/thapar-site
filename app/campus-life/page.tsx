import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function CampusLifePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="relative pt-24 pb-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-6">
              <nav className="text-sm text-muted-foreground mb-4">
                <Link href="/" className="hover:text-primary">
                  Home
                </Link>
                <span className="mx-2">/</span>
                <span>Campus Life</span>
              </nav>
            </div>

            <h1 className="font-heading text-4xl md:text-5xl font-bold text-balance mb-8 leading-tight">
              Thapar's collaborative, hands-on, curiosity-driven ethos extends across our campus — and beyond.
            </h1>

            <div className="grid md:grid-cols-2 gap-8 items-start">
              <div>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  On the stage or field, in makerspaces and living communities, TIET is where brilliant, committed,
                  creative people come together to learn, work, and play. All the elements are here to cultivate
                  students' personal and intellectual growth, fostering the whole student.
                </p>

                <div className="bg-primary/5 p-6 rounded-lg border-l-4 border-primary">
                  <p className="text-sm text-muted-foreground mb-2">
                    <strong>Did you know?</strong> Thapar's global innovation hub, just 384.4 square kilometers across
                    the Charles River from Boston — one of the best cities in the world for students — our 168-acre
                    campus brims with dining spots, talented athletes, and a club for just about anything.
                  </p>
                </div>
              </div>

              <div className="relative">
                <img
                  src="/images/students-studying-together.png"
                  alt="Thapar students collaborating on academic projects"
                  className="rounded-lg shadow-lg w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background border-t">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="border-l-4 border-primary pl-4 mb-12">
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Student Life</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div>
                <p className="text-lg leading-relaxed mb-6">
                  With 500+ student organizations (chocolate science, anyone?), nearly 40 fraternities and sororities,
                  and independent living groups, students at TIET offers a welcoming place for everyone. To complement
                  their academics and research, students choose their own adventures — from competitive programming to
                  cultural festivals, from startup incubation to community service.
                </p>

                <p className="text-lg leading-relaxed mb-8">
                  Whether you want to participate in music, dance, and sports to dozens of groups that honor and
                  celebrate cultures from around the world. To help students navigate challenges, TIET offers a strong
                  support network anchored by exceptional staff from Hostels, DSA, and Alumni groups.
                </p>

                <div className="space-y-4">
                  <h3 className="font-semibold text-lg text-primary">Top Resources</h3>
                  <ul className="space-y-2">
                    <li>
                      <Link href="#" className="text-primary hover:underline">
                        • Getting Started
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="text-primary hover:underline">
                        • Student Activities
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="text-primary hover:underline">
                        • Support for Undergraduate Students
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="text-primary hover:underline">
                        • Support for Graduate Students & Families
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="relative">
                <img
                  src="/images/technical-project-work.png"
                  alt="Thapar students working on hands-on technical projects"
                  className="rounded-lg shadow-lg w-full"
                />
                <p className="text-sm text-muted-foreground mt-2 text-center">
                  Students engaged in collaborative technical learning and innovation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/30 border-t">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="border-l-4 border-primary pl-4 mb-12">
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Housing & Dining</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div>
                <p className="text-lg leading-relaxed mb-6">
                  Our residence halls are part entertainment center, part brain trust, part support system, and wholly
                  central to students' TIET experience. Campus residences host skilled personalities and traditions like
                  no other — from the innovative Maker Hostels to the culturally rich International House, which
                  contribute as much to our students' growth as their academic experiences do. Dining at TIET is about
                  choice and flexibility, with tasty, every-a-dozen-meal-plan options, winning halls, and a variety of
                  meal-plan options.
                </p>

                <div className="space-y-4">
                  <h3 className="font-semibold text-lg text-primary">Top Resources</h3>
                  <ul className="space-y-2">
                    <li>
                      <Link href="#" className="text-primary hover:underline">
                        • TIET Dining
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="text-primary hover:underline">
                        • Undergraduate Housing
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="text-primary hover:underline">
                        • Graduate Student & Family Housing
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="text-primary hover:underline">
                        • Summer Housing
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="text-primary hover:underline">
                        • Residential Education
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="relative">
                <img
                  src="/modern-university-hostel-building-with-students-wa.png"
                  alt="Maseeh Hall is a coed residence for undergraduate students"
                  className="rounded-lg shadow-lg w-full"
                />
                <p className="text-sm text-muted-foreground mt-2 text-center">
                  Maseeh Hall is a coed residence for undergraduate students.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background border-t">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="border-l-4 border-primary pl-4 mb-12">
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Athletics & Recreation</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div>
                <p className="text-lg leading-relaxed mb-6">
                  TIET's focus on both physical fitness and competitive excellence offers sports instruction and
                  participation at all levels. With 33 varsity sports — 16 for men, 16 for women, two coed — the
                  Engineers boast 419 Academic All-America citations (the most in the country) and over 1,500 athletic
                  All-America honors. We also offer club sports, intramurals — and, for the award-winning, the pirate
                  gym.
                </p>

                <div className="space-y-4">
                  <h3 className="font-semibold text-lg text-primary">Top Resources</h3>
                  <ul className="space-y-2">
                    <li>
                      <Link href="#" className="text-primary hover:underline">
                        • Varsity Athletics
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="text-primary hover:underline">
                        • Physical Education
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="text-primary hover:underline">
                        • Recreation
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="text-primary hover:underline">
                        • Club Sports
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="text-primary hover:underline">
                        • Intramurals
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="relative">
                <img
                  src="/images/basketball-sports.png"
                  alt="Thapar students playing basketball on campus courts"
                  className="rounded-lg shadow-lg w-full"
                />
                <p className="text-sm text-muted-foreground mt-2 text-center">
                  Students enjoying recreational basketball on Thapar's outdoor courts. Sports and fitness are integral
                  to campus life.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/30 border-t">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="border-l-4 border-primary pl-4 mb-12">
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Arts</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div>
                <p className="text-lg leading-relaxed mb-6">
                  The arts thrive naturally in TIET's creative culture of experimentation and innovation that crosses
                  every discipline. On a campus that features stunning architecture, from neoclassical to contemporary
                  buildings by legendary architects like Frank Gehry and I.M. Pei, more than half of all undergraduates
                  enroll in at least one arts class during their four years.
                </p>

                <div className="space-y-4">
                  <h3 className="font-semibold text-lg text-primary">Top Resources</h3>
                  <ul className="space-y-2">
                    <li>
                      <Link href="#" className="text-primary hover:underline">
                        • Arts at TIET
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="text-primary hover:underline">
                        • Academics
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="text-primary hover:underline">
                        • Performances
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="text-primary hover:underline">
                        • Exhibitions & Galleries
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="text-primary hover:underline">
                        • List Visual Arts Center
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="text-primary hover:underline">
                        • Public Art Map
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="relative">
                <img
                  src="/images/cultural-dance-performance.png"
                  alt="Traditional dance performance at Thapar cultural event"
                  className="rounded-lg shadow-lg w-full"
                />
                <p className="text-sm text-muted-foreground mt-2 text-center">
                  A spectacular traditional dance performance during Thapar's cultural festival, showcasing the rich
                  artistic heritage.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background border-t">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="border-l-4 border-primary pl-4 mb-12">
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Community & Belonging</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div>
                <p className="text-lg leading-relaxed mb-6">
                  At TIET, we welcome and support a varied community of remarkable talent. But we know that to make a
                  better world, we must work to continually make a better TIET. With that inspiration, we strive to
                  celebrate our wonderful range of cultures and backgrounds — and to help everyone in our community feel
                  at home at TIET.
                </p>

                <div className="space-y-4">
                  <h3 className="font-semibold text-lg text-primary">Top Resources</h3>
                  <ul className="space-y-2">
                    <li>
                      <Link href="#" className="text-primary hover:underline">
                        • Institute Community and Equity Office
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="text-primary hover:underline">
                        • Graduate Community
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="text-primary hover:underline">
                        • Intercultural Engagement
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="text-primary hover:underline">
                        • Religious, Spiritual & Ethical Life
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="relative">
                <img
                  src="/images/traditional-dance-group.png"
                  alt="Thapar students in traditional dance costumes celebrating cultural diversity"
                  className="rounded-lg shadow-lg w-full"
                />
                <p className="text-sm text-muted-foreground mt-2 text-center">
                  Students celebrating cultural diversity through traditional dance, embodying Thapar's inclusive
                  community spirit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Facebook, Twitter, Instagram, Linkedin, Youtube, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 bg-primary rounded-sm flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">TU</span>
              </div>
              <div>
                <h3 className="font-heading font-bold text-lg text-primary">THAPAR INSTITUTE</h3>
                <p className="text-xs text-muted-foreground">Engineering & Technology</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground text-pretty">
              Pioneering excellence in engineering education and research since 1956. Building tomorrow's innovators
              today.
            </p>
            <div className="flex space-x-2">
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Linkedin className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Youtube className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-heading font-semibold text-lg">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Admissions
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Academic Programs
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Research Centers
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Campus Life
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Career Services
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Alumni Network
              </a>
            </nav>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h4 className="font-heading font-semibold text-lg">Resources</h4>
            <nav className="flex flex-col space-y-2">
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Library
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Student Portal
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Faculty Directory
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Academic Calendar
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                News & Events
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Contact Us
              </a>
            </nav>
          </div>

          {/* Contact & Newsletter */}
          <div className="space-y-4">
            <h4 className="font-heading font-semibold text-lg">Stay Connected</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary" />
                <span>Patiala, Punjab 147004, India</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4 text-primary" />
                <span>+91-175-2393021</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4 text-primary" />
                <span>info@thapar.edu</span>
              </div>
            </div>

            <div className="space-y-2">
              <p className="text-sm font-medium">Newsletter</p>
              <div className="flex space-x-2">
                <Input placeholder="Your email" className="flex-1" />
                <Button size="sm">Subscribe</Button>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm text-muted-foreground">
            © 2025 Thapar Institute of Engineering and Technology. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Accessibility
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Trophy, TrendingUp, Star, Globe2 } from "lucide-react"

export function RankingsSection() {
  return (
    <section className="py-16 bg-card/50">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-12">
          <Badge variant="secondary" className="mb-2">
            <Trophy className="h-3 w-3 mr-1" />
            Recognition & Rankings
          </Badge>
          <h2 className="font-heading font-bold text-3xl lg:text-4xl text-balance">Globally Recognized Excellence</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
            Our commitment to academic excellence and innovation has earned us prestigious rankings and recognition
            worldwide.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="text-center group hover:shadow-lg transition-all duration-300">
            <CardContent className="p-6 space-y-4">
              <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <Trophy className="h-8 w-8 text-primary" />
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">201-250</div>
                <div className="text-sm font-medium">THE Asia Ranking</div>
                <div className="text-xs text-muted-foreground">Times Higher Education 2024</div>
              </div>
            </CardContent>
          </Card>

          <Card className="text-center group hover:shadow-lg transition-all duration-300">
            <CardContent className="p-6 space-y-4">
              <div className="h-16 w-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto">
                <TrendingUp className="h-8 w-8 text-secondary" />
              </div>
              <div>
                <div className="text-2xl font-bold text-secondary">Top 10</div>
                <div className="text-sm font-medium">Private Engineering</div>
                <div className="text-xs text-muted-foreground">NIRF Rankings 2024</div>
              </div>
            </CardContent>
          </Card>

          <Card className="text-center group hover:shadow-lg transition-all duration-300">
            <CardContent className="p-6 space-y-4">
              <div className="h-16 w-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto">
                <Star className="h-8 w-8 text-accent" />
              </div>
              <div>
                <div className="text-2xl font-bold text-accent">5 Star</div>
                <div className="text-sm font-medium">QS Rating</div>
                <div className="text-xs text-muted-foreground">Overall Excellence</div>
              </div>
            </CardContent>
          </Card>

          <Card className="text-center group hover:shadow-lg transition-all duration-300">
            <CardContent className="p-6 space-y-4">
              <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <Globe2 className="h-8 w-8 text-primary" />
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">95%</div>
                <div className="text-sm font-medium">Placement Rate</div>
                <div className="text-xs text-muted-foreground">Top Companies</div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

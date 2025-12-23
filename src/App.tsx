import { GraduationCap, Globe, Users, Heart, Envelope, BookOpen } from "@phosphor-icons/react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import heroImage from "@/assets/images/IMG-20250315-WA0002.jpg"
import adultStudentsImage from "@/assets/images/Class_of_adult_English_students_in_Huambo.jpg"
import teenStudentsImage from "@/assets/images/Teenage_English_students_in_Huambo.jpg"
import classroomImage from "@/assets/images/IMG-20241207-WA0027.jpg"

function App() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <GraduationCap size={32} weight="bold" className="text-primary" />
              <span className="text-xl font-semibold">The Angola Partnership</span>
            </div>
            <div className="hidden md:flex items-center gap-6">
              <button onClick={() => scrollToSection('mission')} className="text-foreground hover:text-primary transition-colors">
                Mission
              </button>
              <button onClick={() => scrollToSection('program')} className="text-foreground hover:text-primary transition-colors">
                Program
              </button>
              <button onClick={() => scrollToSection('impact')} className="text-foreground hover:text-primary transition-colors">
                Impact
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-foreground hover:text-primary transition-colors">
                Contact
              </button>
              <Button onClick={() => scrollToSection('donate')} className="bg-accent text-accent-foreground hover:bg-accent/90">
                <Heart size={20} weight="fill" className="mr-2" />
                Support Us
              </Button>
            </div>
          </nav>
        </div>
      </header>

      <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('${heroImage}')`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/70" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Helping Angolans Thrive
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
            Supporting people in Africa through quality English education, opening doors to educational and professional achievement
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              onClick={() => scrollToSection('mission')}
              className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6"
            >
              <BookOpen size={24} className="mr-2" />
              Learn More
            </Button>
            <Button 
              size="lg" 
              onClick={() => scrollToSection('donate')}
              className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8 py-6"
            >
              <Heart size={24} weight="fill" className="mr-2" />
              Make a Donation
            </Button>
          </div>
        </div>
      </section>

      <section id="mission" className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Our Mission</h2>
            <Separator className="w-24 mx-auto bg-primary h-1 rounded" />
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <Card className="p-8 text-center hover:shadow-lg transition-shadow border-2 hover:border-primary/20">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <GraduationCap size={32} weight="bold" className="text-primary" />
                </div>
              </div>
              <h3 className="text-2xl font-semibold mb-3">Education</h3>
              <p className="text-muted-foreground leading-relaxed">
                Quality English instruction by first-language speakers in Huambo, Angola
              </p>
            </Card>

            <Card className="p-8 text-center hover:shadow-lg transition-shadow border-2 hover:border-accent/20">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center">
                  <Globe size={32} weight="bold" className="text-accent" />
                </div>
              </div>
              <h3 className="text-2xl font-semibold mb-3">Opportunity</h3>
              <p className="text-muted-foreground leading-relaxed">
                Opening doors to professional and economic advancement
              </p>
            </Card>

            <Card className="p-8 text-center hover:shadow-lg transition-shadow border-2 hover:border-primary/20">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <Users size={32} weight="bold" className="text-primary" />
                </div>
              </div>
              <h3 className="text-2xl font-semibold mb-3">Community</h3>
              <p className="text-muted-foreground leading-relaxed">
                Partnering with local residents and IECA to serve all students regardless of ability to pay
              </p>
            </Card>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
            <div>
              <p className="text-lg leading-relaxed mb-6">
                The purpose of The Angola Partnership is to support people in Africa through education. Since 2018, we have worked with The Language Institute in Huambo, Angola, to help people improve their lives by developing their educational, professional, and economic opportunities through English acquisition.
              </p>
              
              <p className="text-lg leading-relaxed">
                After emerging in 2002 from a long civil war, Angola has been increasingly integrating into the global economy. People in Angola who develop solid English capability are more likely to advance in education and succeed in the challenging professional employment environment.
              </p>
            </div>

            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src={adultStudentsImage} 
                alt="Students learning at the Language Institute"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          <div>
            <p className="text-lg leading-relaxed mb-6">
              Operating in a city of 400,000 people (about half of whom are under the age of 18), the Language Institute offers the only local instruction by a first-language English speaker.
            </p>
            
            <p className="text-lg leading-relaxed">
              High quality English language instruction can dramatically increase the economic opportunities and status of vulnerable people in Angola. With so much of global business and knowledge based in English, the language is essential, even, or perhaps especially, in economically developing non-English speaking countries like Angola. English is taught in school in Angola, but most students don't advance to a level at which the language is educationally and professionally useful. Strong skills are needed for real benefit.
            </p>
          </div>
        </div>
      </section>

      <section id="program" className="py-16 md:py-24 bg-secondary/50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">The Language Institute</h2>
            <Separator className="w-24 mx-auto bg-accent h-1 rounded" />
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="p-8">
              <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                <BookOpen size={28} weight="bold" className="text-accent" />
                Program Details
              </h3>
              <div className="space-y-4 text-foreground">
                <div className="flex items-start gap-3">
                  <Badge className="bg-accent text-accent-foreground mt-1">50</Badge>
                  <div>
                    <p className="font-semibold">Current Students</p>
                    <p className="text-muted-foreground text-sm">With great demand for more enrollment</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Badge className="bg-primary text-primary-foreground mt-1">$22</Badge>
                  <div>
                    <p className="font-semibold">Monthly Fee (USD)</p>
                    <p className="text-muted-foreground text-sm">20,000 Angolan Kwanza per month</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Badge variant="outline" className="border-accent text-accent mt-1">2018</Badge>
                  <div>
                    <p className="font-semibold">Partnership Since</p>
                    <p className="text-muted-foreground text-sm">Years of impact and growth</p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-8">
              <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                <Users size={28} weight="bold" className="text-primary" />
                Leadership Team
              </h3>
              <div className="space-y-4 text-foreground">
                <div>
                  <p className="font-semibold">Rev. Dr. Coutinho Moma</p>
                  <p className="text-muted-foreground text-sm">Director, Language Institute</p>
                  <p className="text-sm mt-1">Princeton MA, McCormick ThD, also teaches Umbundu</p>
                </div>
                <div>
                  <p className="font-semibold">Canadian PhD Candidate</p>
                  <p className="text-muted-foreground text-sm">Teacher, University of Waterloo</p>
                  <p className="text-sm mt-1">Long-term commitment to quality instruction</p>
                </div>
                <div>
                  <p className="font-semibold">Rev. Dr. James Michael Solberg</p>
                  <p className="text-muted-foreground text-sm">President, The Angola Partnership (USA)</p>
                </div>
              </div>
            </Card>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
            <div className="rounded-lg overflow-hidden shadow-xl order-2 md:order-1">
              <img 
                src={classroomImage} 
                alt="Language Institute classroom in Huambo"
                className="w-full h-auto object-cover"
              />
            </div>

            <div className="order-1 md:order-2">
              <p className="text-lg leading-relaxed mb-6">
                As a non-sectarian social mission of the Evangelical Congregational Church in Angola (IECA), the Language Institute is dedicated to providing quality English instruction to all who make the commitment to the program, regardless of faith or ability to pay.
              </p>
              
              <p className="text-lg leading-relaxed">
                Income from a modest fee covers part of the Language Institute expenses, but outside support is needed to make the program accessible and sustainable.
              </p>
            </div>
          </div>

          <div className="prose prose-lg max-w-4xl mx-auto">
            <p className="text-lg leading-relaxed">
              IECA, a 1.5 million member denomination, provides no-cost instructional space as well as free housing for the teacher, keeping the overall operational costs of the Language Institute low. Other than the teacher, all employees—the Director, Financial Assistant, Sexton, and Security Guard—are local residents of Huambo. It is noteworthy that the Director of the program is a perfect example of the importance of English proficiency, as he learned English from missionaries when young, and has earned a master's degree from Princeton and a doctoral degree from McCormick Theological Seminary.
            </p>
          </div>
        </div>
      </section>

      <section id="impact" className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Making Dreams Come True</h2>
            <Separator className="w-24 mx-auto bg-primary h-1 rounded" />
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start mb-12">
            <div className="space-y-6">
              <blockquote className="text-lg md:text-xl italic leading-relaxed">
                "When talking with young people in Angola, one often hears of the dreams they have for the future: the opportunity to get an education, the ability to support their multigenerational families, the hope of discovering more of the world's knowledge and experience. Sadly, one also often hears that 'Angola is a place where dreams never come true.'"
              </blockquote>
            </div>

            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src={teenStudentsImage} 
                alt="Students at the Language Institute"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          <div className="max-w-full">
            <p className="text-xl md:text-2xl font-semibold text-primary leading-relaxed mb-8">
              The Angola Partnership, Inc., is committed to helping Angolans realize their dreams through offering quality English instruction and opening doors to educational and professional achievement.
            </p>
            <p className="text-lg leading-relaxed">
              Gifts to The Angola Partnership will sustain the work of the Language Institute and allow us to increase enrollment for students who could not otherwise afford the program. The students will benefit from rigorous coursework in the study of English, opening up a world of economic opportunities.
            </p>
          </div>
        </div>
      </section>

      <section id="donate" className="py-16 md:py-24 bg-gradient-to-br from-accent/10 via-background to-primary/10">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Support Our Mission</h2>
            <Separator className="w-24 mx-auto bg-accent h-1 rounded" />
          </div>

          <Card className="p-8 md:p-12 border-2 border-accent/20 shadow-xl">
            <div className="text-center mb-8">
              <Heart size={64} weight="fill" className="text-accent mx-auto mb-4" />
              <h3 className="text-2xl font-semibold mb-4">Help Angolans Thrive</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Your donation provides scholarships for students, supports volunteer teachers, and helps make quality English education accessible to all who seek it in Huambo, Angola.
              </p>
            </div>

            <div className="bg-secondary/50 rounded-lg p-6 mb-8">
              <h4 className="font-semibold text-lg mb-3">Your Impact:</h4>
              <ul className="space-y-2 text-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-accent font-bold">•</span>
                  <span>Provide scholarships for students who cannot afford the $22/month fee</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent font-bold">•</span>
                  <span>Support travel expenses and stipends for volunteer teachers</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent font-bold">•</span>
                  <span>Enable program expansion to serve more students</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent font-bold">•</span>
                  <span>Open doors to educational and professional opportunities</span>
                </li>
              </ul>
            </div>

            <div className="flex flex-col items-center">
              <a
                href="https://www.every.org/angola-partnership-inc?method=bank%2Ccard&utm_campaign=donate-link#/donate"
                className="inline-flex items-center justify-center bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8 py-4 rounded-md font-medium mb-4"
              >
                <Heart size={24} weight="fill" className="mr-2" />
                Click Here to Donate
              </a>
              <p className="text-sm text-muted-foreground">
                or email <a href="mailto:theangolapartnership@gmail.com" className="underline hover:text-foreground">theangolapartnership@gmail.com</a> with any questions
              </p>
            </div>
          </Card>
        </div>
      </section>

      <section id="contact" className="py-16 md:py-24 bg-foreground text-background">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <Envelope size={48} weight="bold" className="mx-auto mb-6 text-accent" />
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Get in Touch</h2>
          <p className="text-xl mb-8 text-background/80 leading-relaxed">
            Have questions or want to learn more about supporting our mission?
          </p>
          <Button 
            size="lg" 
            variant="outline"
            className="bg-background text-foreground hover:bg-background/90 text-lg px-8 py-6 border-2"
            onClick={() => window.location.href = 'mailto:theangolapartnership@gmail.com'}
          >
            <Envelope size={24} className="mr-2" />
            theangolapartnership@gmail.com
          </Button>
        </div>
      </section>

      <footer className="py-8 bg-foreground/95 text-background/70 border-t border-background/10">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <GraduationCap size={24} weight="bold" className="text-accent" />
            <span className="font-semibold text-background">The Angola Partnership, Inc.</span>
          </div>
          <p className="text-sm">
            The Angola Partnership is a registered 501(c)(3) nonprofit organization in the United States of America supporting English education in Huambo, Angola
          </p>
          <p className="text-sm mt-2">
            © {new Date().getFullYear()} The Angola Partnership. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
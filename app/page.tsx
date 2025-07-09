"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { GameCard } from "@/components/game-card"
import { SkillsSection } from "@/components/skills-section"
import { ContactSection } from "@/components/contact-section"
import { ArrowRight, Github, Linkedin, Download } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-slate-900/80 backdrop-blur-sm border-b border-blue-500/30">
        <div className="container flex items-center justify-between h-16 px-4 md:px-6">
          <Link href="/" className="text-xl font-bold text-blue-400">
            KOFI <span className="text-purple-400">QUANSAH</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#projects" className="text-sm font-medium hover:text-blue-400 transition-colors">
              Projects
            </Link>
            <Link href="#skills" className="text-sm font-medium hover:text-blue-400 transition-colors">
              Skills
            </Link>
            <Link href="#about" className="text-sm font-medium hover:text-blue-400 transition-colors">
              About
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:text-blue-400 transition-colors">
              Contact
            </Link>
          </nav>
          <Button
            variant="outline"
            className="bg-slate-800 text-white border-blue-500/50 hover:bg-slate-700"
            onClick={() => {
              const link = document.createElement("a")
              link.href = "/kofi-quansah-resume.pdf"
              link.download = "Kofi_Quansah_Resume.pdf"
              link.click()
            }}
          >
            <Download className="mr-2 h-4 w-4" />
            Resume
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-24 pb-12 md:pt-32 md:pb-24 container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <Badge variant="outline" className="bg-slate-800/50 text-blue-300 border-blue-500/50 px-3 py-1">
                Software Developer & Game Designer
              </Badge>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400">
                Crafting Immersive Digital Experiences
              </h1>
              <p className="max-w-[600px] text-slate-300 md:text-xl">
                Software Developer at Redfin with a passion for game development. I create engaging games and scalable
                software solutions that blend innovative technology with creative design.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700">
                View My Work <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" className="bg-transparent border-blue-500/50 text-blue-400 hover:bg-slate-800">
                Get In Touch
              </Button>
            </div>
            <div className="flex items-center gap-4 mt-4">
              <Link
                href="https://github.com/kofi1123"
                className="text-slate-400 hover:text-blue-400"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link
                href="https://www.linkedin.com/in/kofi-quansah-a303111b0/"
                className="text-slate-400 hover:text-blue-400"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>
          <div className="relative flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg blur-3xl"></div>
            <img
              src="/images/kofi-portrait.jpg"
              alt="Kofi Quansah portrait"
              className="relative z-10 rounded-lg object-cover border border-blue-500/30"
              width={600}
              height={600}
            />
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section id="projects" className="py-12 md:py-24 container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <Badge variant="outline" className="bg-slate-800/50 text-blue-300 border-blue-500/50 px-3 py-1">
              Portfolio
            </Badge>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
              Featured Projects
            </h2>
            <p className="max-w-[700px] text-slate-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto">
              A selection of my best game development and software engineering work
            </p>
          </div>
        </div>
        <div className="mt-12">
          {/* First row - 3 projects */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
            <GameCard
              title="Antimony"
              description="In this narrative point-and-click adventure, begin to uncover the mystery behind your missing memories with the help of a fascinating cast of characters."
              image="/images/antimony.png"
              tags={["Unity", "Ink", "Mystery"]}
              link="https://sevenstudios.itch.io/antimony"
            />
            <GameCard
              title="Heart Of The Abyss"
              description="A deep sea diver explores the abyss in search for something dear to him. Made as a part of 2022 ArtCenter Game Jam."
              image="/images/heart-of-abyss.png"
              tags={["Godot", "Python", "Puzzle"]}
              link="https://sammiemac.itch.io/heart-of-the-abyss"
            />
            <GameCard
              title="Sol & Luna"
              description="Help Sol and Luna get back together and escape the tower through this local co-op platformer game!"
              image="/images/sol-luna.png"
              tags={["Godot", "2D", "Platformer"]}
              link="https://sammiemac.itch.io/sol-and-luna"
            />
          </div>
          {/* Second row - 2 projects centered */}
          <div className="flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
              <GameCard
                title="Defragmentation"
                description="Find a way to escape as you journey from level to level after losing most of your body. Collect the missing pieces and unlock doors to new areas."
                image="/images/defragmentation.png"
                tags={["Phaser", "JavaScript", "Platformer"]}
                link="https://kofi1123.itch.io/defragmentation"
              />
              <GameCard
                title="On Track!"
                description="A Piet Mondrian-inspired standstill endless runner focused on dodging incoming paint obstructions and collecting coins to increase your score!"
                image="/images/on-track.png"
                tags={["Phaser", "JavaScript", "Endless Runner"]}
                link="https://kofi1123.itch.io/on-track"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-12 md:py-24 bg-slate-800/30">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <Badge variant="outline" className="bg-slate-800/50 text-blue-300 border-blue-500/50 px-3 py-1">
                Expertise
              </Badge>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                Skills & Technologies
              </h2>
              <p className="max-w-[700px] text-slate-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto">
                The tools and technologies I use to build software and create games
              </p>
            </div>
          </div>
          <SkillsSection />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-12 md:py-24 container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <Badge variant="outline" className="bg-slate-800/50 text-blue-300 border-blue-500/50 px-3 py-1">
                About Me
              </Badge>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                My Development Journey
              </h2>
              <p className="max-w-[600px] text-slate-300 md:text-xl/relaxed">
                I'm a Software Developer at Redfin with a B.S. in Computer Science: Game Design from UC Santa Cruz (GPA:
                3.70). My passion lies at the intersection of software engineering and game development.
              </p>
              <p className="max-w-[600px] text-slate-300 md:text-xl/relaxed mt-4">
                Previously at Amazon, I implemented metrics systems, automated permission management, and developed
                scalable solutions that serve thousands of employees. My experience spans from robotics competitions to
                web applications.
              </p>
              <p className="max-w-[600px] text-slate-300 md:text-xl/relaxed mt-4">
                My game development journey includes creating diverse projects from narrative adventures to puzzle
                games, working with engines like Unity, Godot, and Phaser. I've participated in game jams, developed
                both 2D and 3D experiences, and explored various genres from platformers to endless runners. I believe
                in combining technical excellence with creative innovation to craft memorable gaming experiences.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row mt-4">
              <Button
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700"
                onClick={() => {
                  const link = document.createElement("a")
                  link.href = "/kofi-quansah-resume.pdf"
                  link.download = "Kofi_Quansah_Resume.pdf"
                  link.click()
                }}
              >
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </Button>
            </div>
          </div>
          <div className="relative flex items-center justify-center order-first lg:order-last">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-lg blur-3xl"></div>
            <img
              src="/images/kofi-portrait.jpg"
              alt="Kofi Quansah portrait"
              className="relative z-10 rounded-lg object-cover border border-blue-500/30"
              width={600}
              height={600}
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-12 md:py-24 bg-slate-800/30">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <Badge variant="outline" className="bg-slate-800/50 text-blue-300 border-blue-500/50 px-3 py-1">
                Get In Touch
              </Badge>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                Let's Work Together
              </h2>
              <p className="max-w-[700px] text-slate-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto">
                Interested in collaborating or have a project in mind? Reach out!
              </p>
            </div>
          </div>
          <ContactSection />
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-blue-500/30 bg-slate-900 py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-16 md:flex-row px-4 md:px-6">
          <p className="text-center text-sm text-slate-400 md:text-left">© 2025 Kofi Quansah. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link
              href="https://github.com/kofi1123"
              className="text-slate-400 hover:text-blue-400"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link
              href="https://www.linkedin.com/in/kofi-quansah-a303111b0/"
              className="text-slate-400 hover:text-blue-400"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

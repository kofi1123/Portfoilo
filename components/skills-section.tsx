import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function SkillsSection() {
  return (
    <Tabs defaultValue="programming" className="mt-12">
      <TabsList className="grid w-full grid-cols-3 bg-slate-800/50 border border-blue-500/30 rounded-lg h-auto">
        <TabsTrigger value="programming" className="data-[state=active]:bg-slate-700/50 py-3">
          Programming
        </TabsTrigger>
        <TabsTrigger value="engines" className="data-[state=active]:bg-slate-700/50 py-3">
          Game Engines
        </TabsTrigger>
        <TabsTrigger value="other" className="data-[state=active]:bg-slate-700/50 py-3">
          Other Skills
        </TabsTrigger>
      </TabsList>
      <TabsContent value="programming" className="mt-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <SkillCard
            title="C#"
            description="Primary language for Unity development and enterprise applications."
            level={95}
          />
          <SkillCard
            title="Python"
            description="Used for automation, data analysis, and backend development."
            level={85}
          />
          <SkillCard title="Java" description="Object-oriented programming and enterprise solutions." level={80} />
          <SkillCard title="C++" description="System programming and performance-critical applications." level={75} />
          <SkillCard title="C" description="Low-level programming and system development." level={70} />
          <SkillCard title="Ruby" description="Web development and scripting automation." level={65} />
        </div>
      </TabsContent>
      <TabsContent value="engines" className="mt-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <SkillCard
            title="Unity"
            description="Expert in Unity development with experience in 2D, 3D, and VR projects."
            level={90}
          />
          <SkillCard
            title="Phaser"
            description="JavaScript game framework for creating HTML5 games and interactive experiences."
            level={70}
          />
          <SkillCard title="Godot" description="Open-source game engine for 2D and 3D game development." level={65} />
          <SkillCard
            title="Unreal Engine"
            description="Proficient in Unreal Engine with focus on Blueprint visual scripting."
            level={45}
          />
        </div>
      </TabsContent>
      <TabsContent value="other" className="mt-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <SkillCard title="Git" description="Version control and collaborative development workflows." level={90} />
          <SkillCard title="MySQL" description="Database design, optimization, and management." level={85} />
          <SkillCard title="AWS Lambda" description="Serverless computing and cloud infrastructure." level={80} />
          <SkillCard title="Game Design" description="Mechanics design, balancing, and player experience." level={85} />
          <SkillCard
            title="Project Management"
            description="Leading development teams and managing timelines."
            level={75}
          />
          <SkillCard title="Audio Design" description="Basic sound effects creation and implementation." level={35} />
        </div>
      </TabsContent>
    </Tabs>
  )
}

interface SkillCardProps {
  title: string
  description: string
  level: number
}

function SkillCard({ title, description, level }: SkillCardProps) {
  return (
    <Card className="bg-slate-800/50 border-blue-500/30">
      <CardContent className="p-6">
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="font-bold text-white">{title}</h3>
            <span className="text-sm text-blue-400">{level}%</span>
          </div>
          <div className="w-full bg-slate-700 rounded-full h-2.5">
            <div
              className="bg-gradient-to-r from-blue-600 to-purple-400 h-2.5 rounded-full"
              style={{ width: `${level}%` }}
            ></div>
          </div>
          <p className="text-sm text-slate-300">{description}</p>
        </div>
      </CardContent>
    </Card>
  )
}

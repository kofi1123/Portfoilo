import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { ArrowUpRight } from "lucide-react"

interface GameCardProps {
  title: string
  description: string
  image: string
  tags: string[]
  link?: string
}

export function GameCard({ title, description, image, tags, link }: GameCardProps) {
  return (
    <Card className="overflow-hidden bg-slate-800/50 border-blue-500/30 transition-all duration-300 hover:border-blue-400/50 hover:shadow-[0_0_15px_rgba(59,130,246,0.15)]">
      <div className="relative">
        <img
          src={image || "/placeholder.svg"}
          alt={title}
          width={600}
          height={400}
          className="object-cover w-full aspect-video"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent"></div>
      </div>
      <CardHeader className="p-4">
        <div className="flex justify-between items-start">
          <h3 className="text-xl font-bold text-white">{title}</h3>
          {link && (
            <Link href={link} className="text-blue-400 hover:text-blue-300" target="_blank" rel="noopener noreferrer">
              <ArrowUpRight className="h-5 w-5" />
              <span className="sr-only">View project</span>
            </Link>
          )}
        </div>
      </CardHeader>
      <CardContent className="p-4 pt-0">
        <p className="text-slate-300">{description}</p>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <Badge key={tag} variant="outline" className="bg-slate-700/30 text-blue-300 border-blue-500/50">
            {tag}
          </Badge>
        ))}
      </CardFooter>
    </Card>
  )
}

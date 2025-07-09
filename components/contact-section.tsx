"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { AtSign, MapPin, MessageSquare, Phone } from "lucide-react"

export function ContactSection() {
  return (
    <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 mt-12">
      <div className="space-y-6">
        <div className="flex items-start space-x-4">
          <MapPin className="h-6 w-6 text-blue-400 mt-1" />
          <div>
            <h3 className="font-bold text-white">Location</h3>
            <p className="text-slate-300 mt-1">Seattle, Washington</p>
            <p className="text-slate-300">Available for remote work worldwide</p>
          </div>
        </div>
        <div className="flex items-start space-x-4">
          <AtSign className="h-6 w-6 text-blue-400 mt-1" />
          <div>
            <h3 className="font-bold text-white">Email</h3>
            <p className="text-slate-300 mt-1">kofiquansah1123@gmail.com</p>
            <p className="text-slate-300">Usually responds within 24 hours</p>
          </div>
        </div>
        <div className="flex items-start space-x-4">
          <Phone className="h-6 w-6 text-blue-400 mt-1" />
          <div>
            <h3 className="font-bold text-white">Phone</h3>
            <p className="text-slate-300 mt-1">909-217-4176</p>
            <p className="text-slate-300">Available for calls during business hours</p>
          </div>
        </div>
        <div className="flex items-start space-x-4">
          <MessageSquare className="h-6 w-6 text-blue-400 mt-1" />
          <div>
            <h3 className="font-bold text-white">Professional Networks</h3>
            <p className="text-slate-300 mt-1">Connect with me on LinkedIn</p>
            <p className="text-slate-300">Software engineering and game development</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center">
        <Card className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 border-blue-500/30">
          <CardContent className="p-6">
            <h3 className="font-bold text-white text-lg">Looking for a developer?</h3>
            <p className="text-slate-300 mt-2">
              I'm currently working at Redfin but open to discussing exciting opportunities in game development,
              software engineering, or collaborative projects.
            </p>
            <Button className="mt-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700">
              Let's Connect
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

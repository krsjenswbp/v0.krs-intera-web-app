import Link from "next/link"
import { ArrowLeft, FileText, Code, ImageIcon, Settings } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function AllResourcesPreview() {
  const resources = [
    {
      category: "HTML Files",
      icon: FileText,
      items: [
        { name: "index.html", description: "Main entry point" },
        { name: "intro.html", description: "Introduction page" },
        { name: "start.html", description: "Start page" },
        { name: "tab01.html", description: "Tab 1 content" },
        { name: "tab02.html", description: "Tab 2 content" },
        { name: "tab03.html", description: "Tab 3 content" },
      ],
    },
    {
      category: "JavaScript Files",
      icon: Code,
      items: [
        { name: "engine.js", description: "Main application engine" },
        { name: "cosmos-gl.js", description: "WebGL graphics engine" },
        { name: "particles.js", description: "Particle system" },
        { name: "fadeZoom.js", description: "Fade and zoom animations" },
        { name: "scrollParallax.js", description: "Parallax scrolling effects" },
        { name: "intro.js", description: "Introduction page logic" },
      ],
    },
    {
      category: "Stylesheets",
      icon: ImageIcon,
      items: [
        { name: "base.css", description: "Base styling foundation" },
        { name: "style.css", description: "Main application styles" },
        { name: "intro.css", description: "Introduction page styles" },
        { name: "start.css", description: "Start page styles" },
        { name: "tab01.css", description: "Tab 1 specific styles" },
        { name: "tab02.css", description: "Tab 2 specific styles" },
      ],
    },
    {
      category: "Configuration",
      icon: Settings,
      items: [
        { name: "manifest.json", description: "Web app manifest" },
        { name: "shader.glsl", description: "GLSL shader program" },
        { name: "en.json", description: "English localization" },
        { name: "vi.json", description: "Vietnamese localization" },
        { name: "README.md", description: "Project documentation" },
        { name: "privacy-policy.md", description: "Privacy policy" },
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-background p-4">
      <div className="max-w-6xl mx-auto space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">All Resources</h1>
            <p className="text-muted-foreground">Complete overview of your project assets</p>
          </div>
          <Button asChild variant="outline">
            <Link href="/">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Overview
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {resources.map((category) => {
            const IconComponent = category.icon
            return (
              <Card key={category.category}>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <IconComponent className="w-5 h-5" />
                    <span>{category.category}</span>
                  </CardTitle>
                  <CardDescription>{category.items.length} files in this category</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {category.items.map((item) => (
                      <div
                        key={item.name}
                        className="flex items-center justify-between p-3 border rounded-lg hover:bg-muted/50 transition-colors"
                      >
                        <div className="flex-1">
                          <div className="font-medium text-sm">{item.name}</div>
                          <div className="text-xs text-muted-foreground">{item.description}</div>
                        </div>
                        <Badge variant="secondary" className="text-xs">
                          {item.name.split(".").pop()?.toUpperCase()}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Project Structure</CardTitle>
            <CardDescription>
              Your Swift Playground project contains both native iOS components and web assets
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-medium mb-3">Swift Components</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center justify-between p-2 bg-muted rounded">
                    <span>MyApp.swift</span>
                    <Badge variant="outline">Swift</Badge>
                  </div>
                  <div className="flex items-center justify-between p-2 bg-muted rounded">
                    <span>ContentView.swift</span>
                    <Badge variant="outline">SwiftUI</Badge>
                  </div>
                  <div className="flex items-center justify-between p-2 bg-muted rounded">
                    <span>LiveView.swift</span>
                    <Badge variant="outline">WebView</Badge>
                  </div>
                  <div className="flex items-center justify-between p-2 bg-muted rounded">
                    <span>Contents.swift</span>
                    <Badge variant="outline">Content</Badge>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="font-medium mb-3">Web Assets Summary</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center justify-between p-2 bg-muted rounded">
                    <span>HTML Pages</span>
                    <Badge variant="outline">12 files</Badge>
                  </div>
                  <div className="flex items-center justify-between p-2 bg-muted rounded">
                    <span>JavaScript</span>
                    <Badge variant="outline">14 files</Badge>
                  </div>
                  <div className="flex items-center justify-between p-2 bg-muted rounded">
                    <span>CSS Stylesheets</span>
                    <Badge variant="outline">12 files</Badge>
                  </div>
                  <div className="flex items-center justify-between p-2 bg-muted rounded">
                    <span>Configuration</span>
                    <Badge variant="outline">8 files</Badge>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

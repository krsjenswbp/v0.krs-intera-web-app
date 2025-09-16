import Link from "next/link"
import { Globe, ExternalLink, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4">
      <div className="max-w-4xl w-full space-y-8">
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center gap-2">
            <Badge variant="secondary" className="px-3 py-1">
              <Zap className="w-3 h-3 mr-1" />
              Built with v0
            </Badge>
            <Badge variant="outline" className="px-3 py-1">
              <ExternalLink className="w-3 h-3 mr-1" />
              Deploy on Vercel
            </Badge>
          </div>
          <h1 className="text-3xl font-bold text-balance">Swift App Preview & Web Resources</h1>
          <p className="text-muted-foreground text-balance">
            Interactive preview of your Swift playground project, enhanced with web components
          </p>
        </div>

        {/* Swift App Preview */}
        <Card className="text-center">
          <CardHeader>
            <CardTitle className="text-2xl font-bold">Swift App Preview</CardTitle>
            <CardDescription>Original ContentView from MyApp.swift</CardDescription>
          </CardHeader>
          <CardContent className="py-8">
            <div className="flex flex-col items-center space-y-4">
              <Globe className="w-16 h-16 text-primary" />
              <h1 className="text-xl font-medium">Hello, world!</h1>
            </div>
          </CardContent>
        </Card>

        {/* Web Resources Preview */}
        <Card>
          <CardHeader>
            <CardTitle className="text-xl">Web Resources Available</CardTitle>
            <CardDescription>Interactive web components from your Resources folder</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <Button asChild variant="default" className="h-auto p-4">
                <Link href="/portfolio" className="flex flex-col items-center space-y-2">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                    <span className="text-sm font-bold text-primary-foreground">P</span>
                  </div>
                  <span>Portfolio</span>
                </Link>
              </Button>

              <Button asChild variant="outline" className="h-auto p-4 bg-transparent">
                <Link href="/preview/intro" className="flex flex-col items-center space-y-2">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-sm font-bold">I</span>
                  </div>
                  <span>Intro Page</span>
                </Link>
              </Button>

              <Button asChild variant="outline" className="h-auto p-4 bg-transparent">
                <Link href="/preview/start" className="flex flex-col items-center space-y-2">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-sm font-bold">S</span>
                  </div>
                  <span>Start Page</span>
                </Link>
              </Button>

              <Button asChild variant="outline" className="h-auto p-4 bg-transparent">
                <Link href="/preview/tabs" className="flex flex-col items-center space-y-2">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-sm font-bold">T</span>
                  </div>
                  <span>Tab Interface</span>
                </Link>
              </Button>

              <Button asChild variant="outline" className="h-auto p-4 bg-transparent">
                <Link href="/preview/webgl" className="flex flex-col items-center space-y-2">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-sm font-bold">3D</span>
                  </div>
                  <span>WebGL Demo</span>
                </Link>
              </Button>

              <Button asChild variant="outline" className="h-auto p-4 bg-transparent">
                <Link href="/preview/particles" className="flex flex-col items-center space-y-2">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-sm font-bold">P</span>
                  </div>
                  <span>Particles</span>
                </Link>
              </Button>

              <Button asChild variant="outline" className="h-auto p-4 bg-transparent">
                <Link href="/preview/all-resources" className="flex flex-col items-center space-y-2">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-sm font-bold">A</span>
                  </div>
                  <span>All Resources</span>
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <Zap className="w-5 h-5" />
              Built with v0 & Deploy on Vercel
            </CardTitle>
            <CardDescription>This project was created using v0.app and is ready for Vercel deployment</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h4 className="font-medium">🚀 Quick Deploy</h4>
                <p className="text-sm text-muted-foreground">
                  Click the "Publish" button in the top-right corner of v0 to deploy directly to Vercel
                </p>
                <Button asChild size="sm" className="w-full">
                  <Link href="https://vercel.com/new" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Deploy to Vercel
                  </Link>
                </Button>
              </div>
              <div className="space-y-3">
                <h4 className="font-medium">⚡ Built with v0</h4>
                <p className="text-sm text-muted-foreground">
                  Created using v0.app - the AI-powered frontend development tool by Vercel
                </p>
                <Button asChild variant="outline" size="sm" className="w-full bg-transparent">
                  <Link href="https://v0.app" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Try v0.app
                  </Link>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Project Info */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Project Information</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <h4 className="font-medium mb-2">Swift Files</h4>
                <ul className="space-y-1 text-muted-foreground">
                  <li>• MyApp.swift - Main app entry point</li>
                  <li>• ContentView.swift - Primary view with globe icon</li>
                  <li>• LiveView.swift - WebView integration</li>
                  <li>• Contents.swift - Content management</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-2">Web Assets</h4>
                <ul className="space-y-1 text-muted-foreground">
                  <li>• HTML pages with tab interface</li>
                  <li>• WebGL graphics and shaders</li>
                  <li>• Particle effects system</li>
                  <li>• Parallax scrolling animations</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="text-center py-8 border-t">
          <p className="text-sm text-muted-foreground">
            Built with{" "}
            <Link
              href="https://v0.app"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-foreground hover:underline"
            >
              v0.app
            </Link>{" "}
            • Deploy on{" "}
            <Link
              href="https://vercel.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-foreground hover:underline"
            >
              Vercel
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

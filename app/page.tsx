import Link from "next/link"
import { Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4">
      <div className="max-w-4xl w-full space-y-8">
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
      </div>
    </div>
  )
}

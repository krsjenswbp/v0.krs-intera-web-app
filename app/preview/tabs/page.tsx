"use client"
import Link from "next/link"
import { ArrowLeft, Globe, Cpu, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function TabsPreview() {
  return (
    <div className="min-h-screen bg-background p-4">
      <div className="max-w-6xl mx-auto space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">Tab Interface Preview</h1>
          <Button asChild variant="outline">
            <Link href="/">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Overview
            </Link>
          </Button>
        </div>

        <Tabs defaultValue="tab01" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="tab01" className="flex items-center space-x-2">
              <Globe className="w-4 h-4" />
              <span>Tab 01</span>
            </TabsTrigger>
            <TabsTrigger value="tab02" className="flex items-center space-x-2">
              <Cpu className="w-4 h-4" />
              <span>Tab 02</span>
            </TabsTrigger>
            <TabsTrigger value="tab03" className="flex items-center space-x-2">
              <Sparkles className="w-4 h-4" />
              <span>Tab 03</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="tab01" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Globe className="w-5 h-5" />
                  <span>Global Interface</span>
                </CardTitle>
                <CardDescription>Main interface components and global functionality</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 border rounded-lg">
                    <h3 className="font-medium mb-2">Navigation</h3>
                    <p className="text-sm text-muted-foreground">Primary navigation elements and menu systems</p>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h3 className="font-medium mb-2">Content Display</h3>
                    <p className="text-sm text-muted-foreground">Main content area with dynamic loading</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="tab02" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Cpu className="w-5 h-5" />
                  <span>Processing Engine</span>
                </CardTitle>
                <CardDescription>Core processing and computational features</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 border rounded-lg">
                    <h3 className="font-medium mb-2">WebGL Rendering</h3>
                    <p className="text-sm text-muted-foreground mb-3">Hardware-accelerated graphics processing</p>
                    <div className="w-full h-32 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded border-2 border-dashed border-muted-foreground/30 flex items-center justify-center">
                      <span className="text-muted-foreground">WebGL Canvas Area</span>
                    </div>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h3 className="font-medium mb-2">Performance Metrics</h3>
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div>
                        <div className="text-2xl font-bold text-green-600">60</div>
                        <div className="text-xs text-muted-foreground">FPS</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-blue-600">1024</div>
                        <div className="text-xs text-muted-foreground">Particles</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-purple-600">4.2</div>
                        <div className="text-xs text-muted-foreground">MS Render</div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="tab03" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Sparkles className="w-5 h-5" />
                  <span>Effects & Animation</span>
                </CardTitle>
                <CardDescription>Visual effects, animations, and interactive elements</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 border rounded-lg">
                    <h3 className="font-medium mb-2">Particle Systems</h3>
                    <p className="text-sm text-muted-foreground mb-3">Dynamic particle effects and animations</p>
                    <div className="relative w-full h-24 bg-black rounded overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/30 to-transparent animate-pulse"></div>
                      <div className="absolute top-2 left-2 w-1 h-1 bg-blue-400 rounded-full animate-bounce"></div>
                      <div
                        className="absolute top-4 right-4 w-1 h-1 bg-purple-400 rounded-full animate-bounce"
                        style={{ animationDelay: "0.5s" }}
                      ></div>
                      <div
                        className="absolute bottom-3 left-1/2 w-1 h-1 bg-green-400 rounded-full animate-bounce"
                        style={{ animationDelay: "1s" }}
                      ></div>
                    </div>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h3 className="font-medium mb-2">Parallax Scrolling</h3>
                    <p className="text-sm text-muted-foreground mb-3">Smooth parallax effects and scroll animations</p>
                    <div className="relative w-full h-24 bg-gradient-to-b from-sky-200 to-sky-400 rounded overflow-hidden">
                      <div className="absolute bottom-0 w-full h-8 bg-green-300 transform -skew-x-12"></div>
                      <div className="absolute bottom-2 w-full h-4 bg-green-400 transform skew-x-6"></div>
                      <div className="absolute top-2 right-4 w-8 h-8 bg-yellow-300 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

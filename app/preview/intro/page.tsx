"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function IntroPreview() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    // Simple particle animation to simulate the intro experience
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const particles: Array<{ x: number; y: number; vx: number; vy: number; alpha: number }> = []

    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2,
        alpha: Math.random(),
      })
    }

    function animate() {
      if (!ctx || !canvas) return

      ctx.fillStyle = "rgba(0, 0, 0, 0.05)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      particles.forEach((particle) => {
        particle.x += particle.vx
        particle.y += particle.vy
        particle.alpha = Math.sin(Date.now() * 0.001 + particle.x * 0.01) * 0.5 + 0.5

        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1

        ctx.fillStyle = `rgba(59, 130, 246, ${particle.alpha * 0.6})`
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, 2, 0, Math.PI * 2)
        ctx.fill()
      })

      requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-8">
        <div className="text-center space-y-6 max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            Welcome to My AI
          </h1>
          <p className="text-xl md:text-2xl text-gray-300">
            Interactive experience with WebGL graphics and particle effects
          </p>
          <div className="space-y-4">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              <Link href="/preview/start">Get Started</Link>
            </Button>
          </div>
        </div>
      </div>

      <Button asChild variant="ghost" size="sm" className="absolute top-4 left-4 z-20 text-white hover:bg-white/10">
        <Link href="/">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Overview
        </Link>
      </Button>
    </div>
  )
}

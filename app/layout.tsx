import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"
import "../styles/primer-patterns.css"

export const metadata: Metadata = {
  title: "Swift App Preview | Built with v0",
  description:
    "Interactive preview of Swift playground project with web resources - Built with v0.app and deployed on Vercel",
  generator: "v0.app",
  keywords: ["v0", "vercel", "swift", "preview", "web app"],
  authors: [{ name: "v0.app" }],
  creator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}

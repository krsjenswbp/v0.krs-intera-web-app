export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center space-y-6">
          <h1 className="text-4xl font-bold text-foreground">Interaction Web App</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to integrate with Inngest and your SWB repository
          </p>
          <div className="flex justify-center gap-4 mt-8">
            <div className="px-4 py-2 bg-secondary rounded-lg">
              <span className="text-sm text-secondary-foreground">API Ready</span>
            </div>
            <div className="px-4 py-2 bg-secondary rounded-lg">
              <span className="text-sm text-secondary-foreground">Inngest Integration</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

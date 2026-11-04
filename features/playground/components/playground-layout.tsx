"use client"

import { usePlayground } from "../context/playground-context"
import { AlertCircle, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import LoadingStep from "@/components/ui/loader"
import { PlaygroundEditor } from "./playground-editor"
import { PlaygroundHeader } from "./playground-header"

export function PlaygroundLayout() {
  const { error, loadingStep, templateData, fetchPlaygroundData } = usePlayground()

  if (error) {
    return (
      <div className="flex h-[calc(100vh-4rem)] flex-col items-center justify-center gap-4 p-6 text-center">
        <AlertCircle className="size-6 text-destructive" />
        <div>
          <h2 className="text-lg">Could not load this playground</h2>
          <p className="mt-1 max-w-[40ch] text-sm text-muted-foreground">{error}</p>
        </div>
        <Button onClick={fetchPlaygroundData} variant="outline">
          Try again
        </Button>
      </div>
    )
  }

  if (loadingStep < 3) {
    return (
      <div className="flex h-[calc(100vh-4rem)] flex-col items-center justify-center p-6">
        <div className="w-full max-w-sm rounded-lg border bg-card p-6">
          <h2 className="mb-6 text-lg">Loading playground</h2>
          <div className="mb-8 space-y-1">
            <LoadingStep currentStep={loadingStep} step={1} label="Loading playground metadata" />
            <LoadingStep currentStep={loadingStep} step={2} label="Loading template structure" />
            <LoadingStep currentStep={loadingStep} step={3} label="Ready to explore" />
          </div>
          <div className="h-1 w-full overflow-hidden rounded-full bg-muted">
            <div
              className="h-full bg-primary transition-[width] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]"
              style={{ width: `${(loadingStep / 3) * 100}%` }}
            />
          </div>
        </div>
      </div>
    )
  }

  if (!templateData) {
    return (
      <div className="flex h-[calc(100vh-4rem)] flex-col items-center justify-center gap-3 p-6">
        <Loader2 className="size-5 animate-spin text-muted-foreground" />
        <h2 className="text-sm text-muted-foreground">Loading template</h2>
      </div>
    )
  }

  return (
    <div className="h-screen flex flex-col">
      <PlaygroundHeader />
      <PlaygroundEditor />
    </div>
  )
}
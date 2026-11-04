"use client"

import React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Check, Copy, Loader2, X } from "lucide-react"
import { cn } from "@/lib/utils"

interface AISuggestionOverlayProps {
  suggestion: string | null
  isLoading: boolean
  suggestionType: string
  suggestionPosition: { line: number; column: number } | null
  onAccept: () => void
  onReject: () => void
  className?: string
  mode?: "overlay" | "inline" // Add this new prop
}

export const AISuggestionOverlay: React.FC<AISuggestionOverlayProps> = ({
  suggestion,
  isLoading,
  suggestionType,
  suggestionPosition,
  onAccept,
  onReject,
  className,
  mode = "overlay", // Default to overlay mode
}) => {
  const [isExpanded, setIsExpanded] = React.useState(false)
  const [copied, setCopied] = React.useState(false)

  const handleCopy = async () => {
    if (suggestion) {
      await navigator.clipboard.writeText(suggestion)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  // Don't render overlay if in inline mode
  if (mode === "inline" || (!suggestion && !isLoading)) return null

  return (
    <div className={cn("absolute right-4 top-4 z-50 w-80", className)}>
      <Card className="gap-0 border bg-card py-0 shadow-[0_1px_2px_rgba(29,27,24,0.05),0_16px_40px_-24px_rgba(29,27,24,0.35)]">
        <CardContent className="p-4">
          {isLoading ? (
            <div className="flex items-center gap-3">
              <Loader2 className="size-4 animate-spin text-muted-foreground" />
              <span className="font-mono text-xs text-muted-foreground">Writing suggestion</span>
            </div>
          ) : (
            <>
              <div className="mb-3 flex items-start justify-between gap-2">
                <div>
                  <p className="font-mono text-xs text-muted-foreground">
                    Suggestion &middot; {suggestionType}
                  </p>
                  {suggestionPosition && (
                    <p className="mt-0.5 font-mono text-[11px] text-muted-foreground/80">
                      line {suggestionPosition.line}, column {suggestionPosition.column}
                    </p>
                  )}
                </div>
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={handleCopy}
                  aria-label="Copy suggestion"
                  className="size-7 p-0 text-muted-foreground"
                >
                  <Copy className={cn("size-3.5", copied && "text-primary")} />
                </Button>
              </div>

              <div className="mb-4">
                <pre
                  className={cn(
                    "overflow-x-auto rounded-md border bg-muted/60 p-3 font-mono text-xs leading-relaxed text-foreground",
                    isExpanded ? "max-h-48" : "max-h-20",
                  )}
                >
                  <code className="whitespace-pre-wrap">{suggestion}</code>
                </pre>
                {!isExpanded && suggestion && suggestion.length > 100 && (
                  <button
                    type="button"
                    onClick={() => setIsExpanded(true)}
                    className="mt-1 font-mono text-[11px] text-muted-foreground underline-offset-2 hover:underline"
                  >
                    Show more
                  </button>
                )}
              </div>

              <div className="flex gap-2">
                <Button size="sm" onClick={onAccept} className="flex-1 gap-1.5">
                  <Check className="size-3.5" />
                  Accept
                  <kbd className="ml-1 rounded-sm bg-primary-foreground/15 px-1 py-0.5 font-mono text-[10px]">
                    Tab
                  </kbd>
                </Button>
                <Button size="sm" variant="outline" onClick={onReject} className="flex-1 gap-1.5">
                  <X className="size-3.5" />
                  Reject
                  <kbd className="ml-1 rounded-sm border bg-muted px-1 py-0.5 font-mono text-[10px] text-muted-foreground">
                    Esc
                  </kbd>
                </Button>
              </div>

              <p className="mt-3 border-t pt-3 font-mono text-[11px] text-muted-foreground">
                {copied ? "Copied" : "Applied to the open file"}
              </p>
            </>
          )}
        </CardContent>
      </Card>
    </div>
  )
}

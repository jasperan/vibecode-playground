import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { HeroPreview } from "@/features/home/hero-preview";

export default function Home() {
  return (
    <div className="mx-auto flex min-h-[calc(100vh-4rem)] w-full max-w-[1280px] flex-col justify-center px-6 pb-16">
      <div className="grid items-center gap-16 py-16 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:py-0">
        <div>
          <p className="font-mono text-xs text-muted-foreground">
            Browser IDE &middot; React, Next.js, Vue, Express
          </p>

          <h1 className="mt-4 max-w-[17ch] text-5xl leading-[1.05] md:text-6xl">
            Describe the app. Watch it get written.
          </h1>

          <p className="mt-6 max-w-[46ch] text-lg leading-relaxed text-muted-foreground">
            Say what you want in plain words. The files appear in the explorer,
            the code opens in the editor, and the app runs in the preview next
            to it. No setup, no terminal to configure.
          </p>

          <div className="mt-8 flex items-center gap-4">
            <Link href="/dashboard">
              <Button size="lg" className="h-12 gap-2 px-6">
                Get started
                <ArrowRight className="size-4" />
              </Button>
            </Link>
          </div>

          <p className="mt-8 border-t pt-4 font-mono text-xs text-muted-foreground">
            Six templates &middot; runs in the browser &middot; local account, no email
          </p>
        </div>

        <HeroPreview />
      </div>
    </div>
  );
}

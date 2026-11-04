import Link from "next/link";
import { Github } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-4 px-6 py-8 sm:flex-row sm:items-center sm:justify-between">
        <p className="font-mono text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} Codesnippet
        </p>

        <Link
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="text-muted-foreground transition-colors hover:text-foreground"
        >
          <Github className="size-4" />
        </Link>
      </div>
    </footer>
  );
}

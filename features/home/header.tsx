import Link from "next/link";
import Image from "next/image";
import { ThemeToggle } from "@/components/ui/toggle-theme";
import UserButton from "../auth/components/user-button";

const navLink =
  "text-sm text-muted-foreground transition-colors hover:text-foreground";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b bg-background">
      <div className="mx-auto flex h-16 w-full max-w-[1280px] items-center justify-between px-6">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-2">
            <Image src={"/logo.svg"} alt="" height={28} width={28} />
            <span className="text-base font-medium">VibeCode Editor</span>
          </Link>

          <nav className="hidden items-center gap-6 sm:flex">
            <Link href="/docs/components/background-paths" className={navLink}>
              Docs
            </Link>
            <Link
              href="https://codesnippetui.pro/templates?utm_source=codesnippetui.com&utm_medium=header"
              target="_blank"
              className={navLink}
            >
              API
            </Link>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <nav className="flex items-center gap-4 sm:hidden">
            <Link href="/docs/components/action-search-bar" className={navLink}>
              Docs
            </Link>
            <Link href="/pricing" className={navLink}>
              API
            </Link>
          </nav>
          <UserButton />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}

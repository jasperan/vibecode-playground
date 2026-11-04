import { Footer } from "@/features/home/footer";
import { Header } from "@/features/home/header";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "VibeCode - Editor ",
    default: "Code Editor For VibeCoders - VibeCode",
  },
};

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main className="relative w-full">{children}</main>
      <Footer />
    </>
  );
}

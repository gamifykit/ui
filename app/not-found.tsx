import { HomeLayout } from "fumadocs-ui/layouts/home";
import Link from "next/link";
import Footer from "@/components/sections/footer";
import { Button } from "@/components/ui/button";
import { baseOptions } from "@/lib/layout.shared";

export default function NotFound() {
  return (
    <HomeLayout {...baseOptions()}>
      <main className="flex w-full justify-center">
        <div className="flex min-h-screen w-full flex-col items-center justify-center text-center">
          <h1 className="font-bold text-6xl text-muted-foreground tracking-tight md:text-8xl">
            404
          </h1>
          <h2 className="mt-8 font-semibold text-2xl tracking-tight md:text-3xl">
            Page Not Found
          </h2>
          <div className="mt-8 flex gap-3">
            <Button asChild>
              <Link href="/">Go home</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/docs">View documentation</Link>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </HomeLayout>
  );
}

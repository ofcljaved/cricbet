'use client';

import { MoonStar, Search, Sun } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import { WalletConnect } from "@/components/wallet-connect"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useTheme } from "next-themes"

function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <Button
      variant="outline"
      size="icon"
      className="glass-card"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <MoonStar className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-background to-background/95">
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center gap-4">
          <Link href="/" className="flex items-center gap-2 font-bold">
            <Image
              src="/placeholder.svg"
              alt="CricketPredict Logo"
              width={32}
              height={32}
              className="rounded bg-primary/10 p-1"
            />
            CricketPredict
          </Link>
          <div className="relative flex-1 max-w-xl">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input className="w-full pl-10 glass-card" placeholder="Search markets..." />
          </div>
          <nav className="flex items-center gap-4">
            <Link href="/markets" className="hover:text-primary transition-colors">
              Markets
            </Link>
            <Link href="/portfolio" className="hover:text-primary transition-colors">
              Portfolio
            </Link>
            <Link href="/activity" className="hover:text-primary transition-colors">
              Activity
            </Link>
            <ThemeToggle />
            <WalletConnect />
          </nav>
        </div>
        <div className="container border-t border-border/40">
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="w-full justify-start rounded-none h-12 bg-transparent">
              <TabsTrigger
                value="all"
                className="rounded-none data-[state=active]:bg-primary/10 data-[state=active]:text-primary"
              >
                All
              </TabsTrigger>
              <TabsTrigger
                value="ipl"
                className="rounded-none data-[state=active]:bg-primary/10 data-[state=active]:text-primary"
              >
                IPL
              </TabsTrigger>
              <TabsTrigger
                value="international"
                className="rounded-none data-[state=active]:bg-primary/10 data-[state=active]:text-primary"
              >
                International
              </TabsTrigger>
              <TabsTrigger
                value="t20"
                className="rounded-none data-[state=active]:bg-primary/10 data-[state=active]:text-primary"
              >
                T20
              </TabsTrigger>
              <TabsTrigger
                value="test"
                className="rounded-none data-[state=active]:bg-primary/10 data-[state=active]:text-primary"
              >
                Test
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </header>

      <main className="flex-1 container py-6">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <Card key={i} className="glass-card glow border-border/40">
              <CardHeader>
                <CardTitle className="flex items-start justify-between gap-4">
                  <span>Will India win T20 World Cup 2024?</span>
                  <span className="text-xl font-bold text-primary">45%</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center text-sm text-muted-foreground">
                  <span>Volume: 1.2K SOL</span>
                  <span className="text-primary">+5%</span>
                </div>
              </CardContent>
              <CardFooter className="grid grid-cols-2 gap-4">
                <Button variant="outline" className="w-full glass-card hover:bg-primary/20 hover:text-primary">
                  Buy Yes
                </Button>
                <Button variant="outline" className="w-full glass-card hover:bg-destructive/20 hover:text-destructive">
                  Buy No
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </main>
    </div>
  )
}


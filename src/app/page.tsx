import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Header } from "@/components/header";
import { Glow, GlowArea } from "@/components/glow";
import { dummyPredictions } from "@/lib/demo";

export default function Home() {
    return (
        <div>
            <Header />
            <GlowArea size={200}>
                <main className="flex-1 container py-6">
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {dummyPredictions.map((d) => (
                            <Glow key={d.id} className="rounded-xl">
                                <Card className="h-full">
                                    <CardHeader>
                                        <CardTitle className="flex items-start justify-between gap-4">
                                            <span>{d.title}</span>
                                            <span className="text-xl font-bold text-primary">{d.percentage}</span>
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="flex justify-between items-center text-sm text-muted-foreground">
                                            <span>{d.volume}</span>
                                            <span className="text-primary">{d.percentageChange}</span>
                                        </div>
                                    </CardContent>
                                    <CardFooter className="grid grid-cols-2 gap-4">
                                        <Button variant="outline" className="w-full glass-card hover:bg-green-700/20 hover:dark:text-green-300 hover:text-green-900">
                                            Buy Yes
                                        </Button>
                                        <Button variant="outline" className="w-full glass-card hover:bg-destructive/20 hover:text-destructive">
                                            Buy No
                                        </Button>
                                    </CardFooter>
                                </Card>
                            </Glow>
                        ))}
                    </div>
                </main>
            </GlowArea>
        </div>
    )
}


import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const swapTabs = [
    { id: "buy", title: "Buy", },
    { id: "sell", title: "Sell", },
]

export const Swap = () => {
    return (
        <Tabs defaultValue="buy" className="border border-input w-80 max-w-80 min-w-80 h-fit rounded-2xl">
            <TabsList className={cn(
                "px-4 pt-4 pb-0 w-full bg-transparent h-auto justify-start border-b-2 border-input rounded-none gap-3",
                "*:px-0 *:pb-2 *:text-base *:rounded-none *:border-b-2 *:border-transparent *:-mb-0.5",
            )}>
                {swapTabs.map((t) => (
                    <TabsTrigger
                        key={t.id}
                        value={t.id}
                        className="data-[state=active]:shadow-none data-[state=active]:border-primary"
                    >
                        {t.title}
                    </TabsTrigger>
                ))}
            </TabsList>
            <TabsContent value="buy" className="p-4">
                <Button>Yes</Button>
                <Button>No</Button>
                <div>
                    <label>Amount</label>
                    <Input type="number" placeholder="0.00" className="w-full" />
                </div>
                <Button>Trade</Button>
            </TabsContent>
            <TabsContent value="sell">
                <p>Sell</p>
            </TabsContent>
        </Tabs>
    )
}

Swap.displayName = "Swap"

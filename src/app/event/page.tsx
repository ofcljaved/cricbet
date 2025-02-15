import { Swap } from "@/components/swap";

export default function Page() {
    return (
        <div className="h-full max-w-screen-xl mx-auto w-full p-8 grid grid-cols-1 grid-flow-col">
            <div>
                <h1 className="text-4xl font-bold">Event</h1>
            </div>
            <Swap />
        </div>
    )
}

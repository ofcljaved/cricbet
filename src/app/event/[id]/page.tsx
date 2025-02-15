import { Chart } from "@/components/chart";
import { Swap } from "@/components/swap";
import { dummyPredictions } from "@/lib/demo";
import { redirect } from "next/navigation";

export default async function Page({
    params,
}: {
    params: Promise<{ id: string }>
}) {
    const id = (await params).id;
    const prediction = dummyPredictions.find((p) => p.id === Number(id));

    if (!prediction) {
        return redirect("/");
    }

    return (
        <div className="h-full max-w-screen-xl mx-auto w-full p-8 grid grid-cols-1 grid-flow-col">
            <div>
                <h1 className="text-4xl font-bold">{prediction?.title}</h1>
                <Chart />
            </div>
            <Swap />
        </div>
    )
}

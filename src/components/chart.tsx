'use client';

import { useEffect, useRef } from "react";
import { ColorType, createChart, LineSeries } from "lightweight-charts";

const initialData = [
    { time: '2018-12-22', value: 32.51 },
    { time: '2018-12-23', value: 31.11 },
    { time: '2018-12-24', value: 27.02 },
    { time: '2018-12-25', value: 27.32 },
    { time: '2018-12-26', value: 25.17 },
    { time: '2018-12-27', value: 28.89 },
    { time: '2018-12-28', value: 25.46 },
    { time: '2018-12-29', value: 23.92 },
    { time: '2018-12-30', value: 22.68 },
    { time: '2018-12-31', value: 22.67 },
];

export const Chart = () => {
    const chartContainerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (!chartContainerRef.current) return;
        const controller = new AbortController();

        const chart = createChart(chartContainerRef.current, {
            layout: {
                background: { color: 'transparent' },
                textColor: 'white',
            },
            width: chartContainerRef.current.clientWidth,
            height: 400,
            grid: {
                vertLines: {
                    color: 'transparent',
                },
                horzLines: {
                    color: 'rgba(197, 203, 206, 0.5)',
                },
            },
        });

        chart.timeScale().fitContent();

        const newSeries = chart.addSeries(LineSeries, {
            color: 'red',
            lineWidth: 2,
            priceLineVisible: true,
            priceLineWidth: 2,
        });
        newSeries.setData(initialData);

        window.addEventListener("resize", () => {
            chart.applyOptions({ width: chartContainerRef.current?.clientWidth });
        }, { signal: controller.signal });

        chartContainerRef.current.querySelector('a')?.remove();
        return () => {
            controller.abort();
            chart.remove();
        }
    }, []);

    return (
        <div ref={chartContainerRef} />
    )
}

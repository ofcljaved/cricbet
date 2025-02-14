import './globals.css'
import { Providers } from '@/app/_provider'
import { Header } from '@/components/header';
import { Toaster } from '@/components/ui/sonner';
import { Inter } from "next/font/google"

export const metadata = {
    title: 'Cricbet',
    description: 'Prediction market for cricket',
}

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" suppressHydrationWarning>
            <head>
                <script src="https://unpkg.com/react-scan/dist/auto.global.js" async />
            </head>
            <body
                className={`${inter.className} antialiased bg-gradient-to-tr dark:from-black from-gray-100 to-background min-h-dvh grid grid-rows-[max-content_1fr]`}
            >
                <Providers>
                    <Header />
                    {children}
                    <Toaster />
                </Providers>
            </body>
        </html>
    )
}

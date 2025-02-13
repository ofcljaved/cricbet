import './globals.css'
import { Providers } from '@/app/_provider'
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
            <body
                className={`${inter.className} antialiased bg-gradient-to-r from-gray-700 to-black min-h-dvh`}
            >
                <Providers>
                    {children}
                    <Toaster />
                </Providers>
            </body>
        </html>
    )
}

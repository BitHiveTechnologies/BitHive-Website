import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'BitHive Technologies',
    icons: {
        icon: 'images/BitHive.ico',
    },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                {children}
                <SpeedInsights />
                <Analytics />
            </body>
        </html>
    );
}

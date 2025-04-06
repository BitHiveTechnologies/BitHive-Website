import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Analytics } from '@vercel/analytics/next';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'BitHive Technologies',
    icons: {
        icon: 'images/BitHive.ico',
    },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en" data-oid="mf-e613">
            <body className={inter.className} data-oid="uvtv36w">
                {children}
                <Analytics data-oid="fq3ej_h" />
            </body>
        </html>
    );
}

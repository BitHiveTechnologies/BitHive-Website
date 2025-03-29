import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'BitHive Technologies',
    icons: {
        icon: '/BitHive.ico',
    },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en" data-oid="g3dnpyi">
            <body className={inter.className} data-oid="7kf1sz.">
                {children}
            </body>
        </html>
    );
}

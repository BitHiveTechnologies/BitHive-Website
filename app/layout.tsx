import type { Metadata } from 'next';
import './globals.css';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
export const metadata: Metadata = {
    title: 'BitHive Technologies',
    icons: {
        icon: 'images/BitHive.ico',
    },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en" data-oid="8keyepe">
            <body className="" data-oid="-4pndj-">
                {children}
                <SpeedInsights data-oid="8i6lffj" />
                <Analytics data-oid="qigo3kb" />
            </body>
        </html>
    );
}

import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Nubenta Innovations',
  description: 'Shaping the Future, One Innovation at a Time',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark !scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
          onLoad="this.onload=null;this.rel='stylesheet'"
        />
        <noscript>
          <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
        </noscript>
        <style>{`
          /* Prevent FOUC */
          html {
            font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif;
          }

          /* Ensure text is visible during webfont load */
          @font-face {
            font-family: 'Inter';
            font-display: swap;
          }
        `}</style>
      </head>
      <body className={cn("font-body antialiased min-h-screen bg-background text-foreground")}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}

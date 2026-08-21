import type { Metadata } from "next";
import "@fontsource/playfair-display/500.css";
import "@fontsource/playfair-display/600.css";
import "@fontsource/playfair-display/700.css";
import "@fontsource/playfair-display/500-italic.css";
import "@fontsource/playfair-display/600-italic.css";
import "@fontsource/dm-sans/400.css";
import "@fontsource/dm-sans/500.css";
import "@fontsource/dm-sans/600.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "Happy 21st Birthday, Starina — A Little Scrapbook of Us",
  description:
    "A personal digital scrapbook made for Starina Delima Sari's 21st birthday, from David.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="id" className="h-full scroll-smooth">
      <body className="min-h-full flex flex-col bg-cream text-ink font-body antialiased">
        {children}
      </body>
    </html>
  );
}

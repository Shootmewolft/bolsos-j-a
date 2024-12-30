import "./globals.css";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Hero, Footer, WhatsAppButton } from "@/components";
import { ThemeProvider } from "@/context/theme.provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bolsos J&A",
  description:
    "Diseñamos y fabricamos bolsos únicos que combinan estilo, calidad y funcionalidad.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Hero />
          <main className="min-h-[100dvh] relative dark:bg-accent max-w-screen-2xl mx-auto">
            {children}
            <WhatsAppButton />
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

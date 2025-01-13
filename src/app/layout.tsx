import type { Metadata } from "next";
import { Hero, Footer, WhatsAppButton } from "@/components";
import { ThemeProvider } from "@/context/theme.provider";
import { geistMono, geistSans, titleFont } from "@/lib";
import "./globals.css";

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
        className={`${geistSans.variable} ${geistMono.variable} ${titleFont.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Hero />
          <main className="min-h-[100dvh] relative dark:bg-accent max-w-screen-2xl mx-auto container">
            {children}
            <WhatsAppButton />
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

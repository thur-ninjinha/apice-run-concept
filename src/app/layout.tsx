import type { Metadata } from "next";
import { Cabin, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const cabin = Cabin({
  variable: "--font-cabin",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Aurora Run 2026 — 5K em Natal/RN | 31 de maio",
  description:
    "Mais que uma corrida, é uma corrida com um amigo. Aurora Run 2026 — 5 km em Natal/RN, 31 de maio às 5h. Inscrições abertas.",
  robots: { index: false, follow: false },
  openGraph: {
    title: "Aurora Run 2026 — 5K em Natal/RN",
    description:
      "Mais que uma corrida, é uma corrida com um amigo. 31 de maio · 05h · Av. Roberto Freire.",
    type: "website",
    locale: "pt_BR",
  },
  other: {
    "x-portfolio": "Projeto conceitual desenvolvido por Zênite Studio. Não é o site oficial do evento.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${cabin.variable} ${jetBrainsMono.variable} antialiased`}>
      <body className="min-h-screen flex flex-col">{children}</body>
    </html>
  );
}

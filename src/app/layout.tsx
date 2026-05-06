import type { Metadata } from "next";
import { Anton, Inter } from "next/font/google";
import "./globals.css";

const anton = Anton({
  variable: "--font-anton",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ápice Run 2026 — 5K em Natal/RN | 31 de maio",
  description:
    "Mais que uma corrida, é uma corrida com um amigo. Ápice Run 2026 — 5 km em Natal/RN, 31 de maio às 5h. Inscrições abertas.",
  robots: { index: false, follow: false },
  openGraph: {
    title: "Ápice Run 2026 — 5K em Natal/RN",
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
    <html lang="pt-BR" className={`${anton.variable} ${inter.variable} antialiased`}>
      <body className="min-h-screen flex flex-col">{children}</body>
    </html>
  );
}

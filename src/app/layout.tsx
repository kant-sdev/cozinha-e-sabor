import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
  weight: ['400', '800']
});

export const metadata: Metadata = {
  title: "Cozinha & Sabor",
  description: "Aprenda receitas deliciosas e técnicas culinárias para o seu dia a dia. Receitas fáceis e práticas para todos os gostos.",
  keywords: ["receitas", "culinária", "comida", "cozinha", "dicas de cozinha"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${raleway.className} antialiased`}>
        {children}
        <Toaster/>
      </body>
    </html>
  );
}
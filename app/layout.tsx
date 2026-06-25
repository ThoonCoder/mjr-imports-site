import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "MJR Imports | Oficina Especializada em Veículos",
  description:
    "Oficina mecânica especializada com diagnóstico avançado, manutenção preventiva e corretiva para todos os tipos de veículos. Qualidade e confiança garantidas.",
  keywords:
    "oficina mecânica, manutenção automotiva, diagnóstico eletrônico, revisão, troca de óleo, suspensão, freios",
  openGraph: {
    title: "MJR Imports | Oficina Especializada em Veículos",
    description:
      "Diagnóstico avançado, manutenção preventiva e corretiva. Qualidade e confiança em cada serviço.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={poppins.className}>
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}

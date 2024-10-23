import type { Metadata } from "next";
import "./globals.css";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["200", "400", "700", "800"],
});

export const metadata: Metadata = {
  title: "Método Superbi",
  description:
    "Eleve o nível do seu trabalho, venha se especializar e aprender boas técnicas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`bg-[#0A0A0A] ${montserrat.className}`}>{children}</body>
    </html>
  );
}

import type { Metadata } from "next";
import Alert from "@/components/common/alert/Alert";
import Header from "@/components/common/header/Header";

export const metadata: Metadata = {
  title: "Desafio",
  description: "Desafio oBoticario",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Alert />
        <Header />
        {children}
      </body>
    </html>
  );
}

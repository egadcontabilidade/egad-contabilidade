export const metadata = {
  title: "EGAD Contabilidade",
  description: "Contabilidade, abertura, legalização e regularização de empresas.",
};

import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}

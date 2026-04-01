export const metadata = {
  title: "Soldrive Core | Autonomous HSAT for Utility-Scale PV",
  description:
    "Soldrive Core is a robust horizontal single axis tracker designed for EPCs, developers, and investors seeking structural reliability, autonomous tracking, and smart control logic.",
};

import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

import "./globals.css";

export const metadata = {
  title: "Soldrive Core",
  description: "Autonomous single-axis solar tracker platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

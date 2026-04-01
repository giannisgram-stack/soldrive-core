import "./globals.css";

export const metadata = {
  title: "Soldrive Core",
  description: "Single-axis solar tracker for reliable and autonomous solar deployment",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

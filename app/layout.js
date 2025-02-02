import { GeistSans } from "geist/font/sans";
import "./globals.css";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={GeistSans.className + "w-screen"}>{children}</body>
    </html>
  );
}

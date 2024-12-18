import "./globals.css";
import Header from "@/components/Header.jsx";
import Footer from "@/components/Footer.jsx";

export const metadata = {
  title: "E P Lee",
  description: "Welcome to the portfolio of E P Lee",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

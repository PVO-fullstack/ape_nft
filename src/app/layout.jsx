import { Header } from "@/components/Header/Header";
import "./globals.css";
import { Footer } from "@/components/Footer/Footer";
import { biroScript, messinaSans, rightGrotesk } from "@/fonts/fonts";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={` ${biroScript.variable} ${messinaSans.variable} ${rightGrotesk.variable} w-full pt-[54px] xl:pt-4 relative bg-background overflow-x-hidden`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

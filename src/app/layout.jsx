import { Header } from "@/components/Header/Header";
import "./globals.css";
import { Footer } from "@/components/Footer/Footer";
import { biroScript, messinaSans, rightGrotesk } from "@/fonts/fonts";
import PropTypes from "prop-types";

export const metadata = {
  title: "APE NFT",
  description:
    "Yacht ape is a collectionof unique digital apes that you can own in nft format",
  openGraph: {
    title: "APE NFT",
    description:
      "Yacht ape is a collectionof unique digital apes that you can own in nft format",
    url: "https://ape-nft-three.vercel.app/",
    siteName: "APE NFT",
    images: [
      {
        url: "https://ape-nft-three.vercel.app/Apes.png", // Must be an absolute URL
        width: 800,
        height: 600,
      },
      {
        url: "https://ape-nft-three.vercel.app/Apes.png", // Must be an absolute URL
        width: 1800,
        height: 1600,
        alt: "Come to our site",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

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

RootLayout.propTypes = {
  children: PropTypes.node,
};

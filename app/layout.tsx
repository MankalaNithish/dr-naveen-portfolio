import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Inter, Playfair_Display } from "next/font/google";
import PageTransition from "@/components/PageTransition";


export const metadata = {
  title: {
    default: "Dr. Mankala Naveen Kumar",
    template: "%s | Dr. Naveen Kumar",
  },
  description:
    "Official portfolio of Dr. Mankala Naveen Kumar – healthcare professional, NGO leader, and community servant.",
  openGraph: {
    title: "Dr. Mankala Naveen Kumar",
    description:
      "Healthcare, leadership, and community service initiatives.",
    url: "https://your-domain.vercel.app",
    siteName: "Dr. Naveen Kumar",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const serif = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${sans.variable} ${serif.variable}`}>
      <body suppressHydrationWarning>
        <Navbar />
          <PageTransition>
            {children}
          </PageTransition>
        <Footer />
      </body>
    </html>
  );
}

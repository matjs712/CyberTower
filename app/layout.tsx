import { Poppins } from "next/font/google";
import "./globals.css";
import { defaultMetadata } from "@/lib/seo";
import Navbar from "@/components/navbar";
import { ThemeProvider } from "next-themes";
import FooterSection from "@/components/sections/footer";

export const metadata = defaultMetadata;

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body
        className={`${poppins.variable} font-sans antialiased bg-gradient-to-b from-[#050608] via-[#161b22] to-[#1f2937]`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={true}
          disableTransitionOnChange
        >
          <Navbar />
          {children}
          <FooterSection />
        </ThemeProvider>
      </body>
    </html>
  );
}

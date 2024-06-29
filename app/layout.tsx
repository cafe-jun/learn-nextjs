import type { Metadata } from "next";
import "@styles/global.css";
import Navigation from "@/components/Navibar/navigation";

export const metadata: Metadata = {
  title: {
    template: "%s | Next Movies",
    default: "Next Movies",
  },
  description: "The best movies on the best framework",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {/* <Providers> */}
        <Navigation />
        {children}
        {/* </Providers> */}
      </body>
    </html>
  );
}

import NaviBar from "@/components/Navibar/Navibar";

export const metadata = {
  title: "about-us",
};
export default function AboutUsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <NaviBar />
      {children}
    </div>
  );
}

import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import React from "react";

export default function WorkLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-white h-full w-full">
      <Navbar/>
      {children}
      <Footer />
    </div>
  );
}

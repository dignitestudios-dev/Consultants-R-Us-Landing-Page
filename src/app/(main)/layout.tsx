import React from "react";
import Navbar from "./_components/layout/navbar";
import Footer from "./_components/layout/footer";

function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div  className='max-w-screen-2xl mx-auto relative overflow-x-hidden'>
      <Navbar /> {children} <Footer />
    </div>
  );
}

export default layout;

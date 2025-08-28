import React from "react";
import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({
  children,
  title = "Claudia Suarez - Portfolio",
  description = "Claudia Suarez - Web Developer and Mathematician",
}) => {
  return (
    <div className="flex flex-col min-h-screen w-full bg-white dark:bg-dark-950 text-dark-800 dark:text-white transition-colors duration-300">
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      <main className="flex-grow pt-20 w-full">{children}</main>

      <Footer />
    </div>
  );
};

export default Layout;

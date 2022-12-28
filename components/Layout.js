import * as React from 'react';
import { useRouter } from 'next/router';
import Navbar from './Navbar';
import Footer from './Footer';


export default function Layout({ children }) {
  const router = useRouter();

  console.log(router.pathname)
  if (!router.pathname.includes("about") && !router.pathname.includes("contact") && !router.pathname.includes("gallery")) {
    return (
      <>
        <style jsx global>
        {`
          body {
            margin: 0;
            padding: 0;
          }
        `}
        </style>
        <Navbar />
          <main>{children}</main>
        <Footer />
      </>
    )
  }
  else {
    return (
      <>
        <style jsx global>
        {`
          body {
            margin: 0;
            padding: 0;
          }
        `}
        </style>
        <main>{children}</main>
      </>
    )
  }
}

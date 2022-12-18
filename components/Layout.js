import * as React from 'react';
import { useRouter } from 'next/router';
import Navbar from './Navbar';
import Footer from './Footer';


export default function Layout({ children }) {
  const router = useRouter();

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
      {!router.pathname.includes("about") ? (
        <>
          <Navbar />
            <main>{children}</main>
          <Footer />
        </>
      ) : (
        <main>{children}</main>
      )
      }
    </>
  )
}

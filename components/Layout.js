import * as React from 'react';
import { useRouter } from 'next/router';
import Navbar from './Navbar';
import Footer from './Footer';
import NewHeader from './NewHeader';

export default function Layout({ children }) {
  const router = useRouter();

  if (router.pathname !== "/" && router.pathname !== "/articles/[id]" && router.pathname !== '/home') {
    return (
      <>
        <style jsx global>
        {
        `
          html, body {
            margin: 0;
            padding: 5vh 0 0 0;
          },
        `
        }
        </style>
        <NewHeader />
          <main>{children}</main>
        {
          router.pathname !== "/portfolio/[id]" && (
            <Footer />
          )
        }
      </>
    )
  }
  else if (router.pathname == "/articles/[id]" || router.pathname == "/portfolio/[id]") {
    return (
      <>
        <style jsx global>
        {
        `
          html, body {
            margin: 0;
            padding: 0 0 0 0;
          },
        `
        }
        </style>
        <NewHeader />
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
          html, body {
            margin: 0;
            padding: 0;
          },
        `}
        </style>
        {/* <Navbar /> */}
          <main>{children}</main>
        {/* <Footer /> */}
      </>
    )
  }
}

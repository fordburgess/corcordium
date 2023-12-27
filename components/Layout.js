import * as React from 'react';
import { useRouter } from 'next/router';
import Navbar from './Navbar';
import Footer from './Footer';
import AltNavbar from './AltNavbar';
import NewHeader from './NewHeader';

export default function Layout({ children }) {
  const router = useRouter();
  var arr = router.pathname.split("/")
  var altNavTitle = router.pathname.includes("articles/[id]") ? "Articles" : arr[arr.length - 1].charAt(0).toUpperCase() + arr[arr.length - 1].slice(1);

  if (router.pathname !== "/") {
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
        <NewHeader title={altNavTitle}/>
          <main>{children}</main>
        {/* <Footer /> */}
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

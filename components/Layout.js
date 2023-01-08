import * as React from 'react';
import { useRouter } from 'next/router';
import Navbar from './Navbar';
import Footer from './Footer';
import AltNavbar from './AltNavbar';

export default function Layout({ children }) {
  const router = useRouter();
  var arr = router.pathname.split("/")
  var altNavTitle = arr[arr.length - 1].charAt(0).toUpperCase() + arr[arr.length - 1].slice(1);

  if (router.pathname.includes("articles") || router.pathname.includes("contact") || router.pathname.includes("portfolio")) {
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
        <AltNavbar title={altNavTitle}/>
          <main>{children}</main>
        <Footer />
      </>
    )
  }
  else
  {
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
        <Navbar />
          <main>{children}</main>
        <Footer />
      </>
    )
  }
  // if (!router.pathname.includes("articles") && !router.pathname.includes("about") && !router.pathname.includes("contact") && !router.pathname.includes("portfolio")) {
  //   return (
  //     <>
  //       <style jsx global>
  //       {`
  //         html, body {
  //           margin: 0;
  //           padding: 0;
  //         },
  //       `}
  //       </style>
  //       <Navbar />
  //         <main>{children}</main>
  //       <Footer />
  //     </>
  //   )
  // }
  // else {
  //   return (
  //     <>
  //       <style jsx global>
  //       {`
  //         body {
  //           margin: 0;
  //           padding: 0;
  //         }
  //       `}
  //       </style>
  //       <main>{children}</main>
  //     </>
  //   )
  // }
}

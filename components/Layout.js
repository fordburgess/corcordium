import * as React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';


export default function Layout({ children }) {

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

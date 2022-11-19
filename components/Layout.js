import * as React from 'react';
import Header from './Header';
import Footer from './Footer';
import { makeStyles } from '@mui/styles';


export default function Layout({ children }) {

  return (
    <>
      <Header />
        <main>{children}</main>
      <Footer />
    </>
  );
}

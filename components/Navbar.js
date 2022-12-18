import { Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import styles from "./navbar.module.css"
import { useMediaQuery } from '@mui/material';
import { useRouter } from 'next/router'

const Navbar = (props) => {
  const desktop = useMediaQuery('(min-width: 800px')

  return (
    <div className={styles.container}>
      <div className={styles.subcontainer}>
        <h1 className={styles.title}>
          Corcordium
        </h1>
        <h4 className={styles.subtitle}>
          Leelou Reboh
        </h4>
      </div>
    </div>
  );
}


export default Navbar;

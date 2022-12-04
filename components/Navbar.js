import { Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import styles from "./navbar.module.css"
import { useMediaQuery } from '@mui/material';


const Navbar = (props) => {
  const desktop = useMediaQuery('(min-width: 800px')

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        Corcordium
      </h1>
    </div>
  );
}


export default Navbar;

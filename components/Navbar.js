import { Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import styles from "./navbar.module.css"


const Navbar = (props) => {

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        Corcordium
      </h1>
    </div>
  );
}


export default Navbar;

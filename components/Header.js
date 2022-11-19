import * as React from 'react';
import { makeStyles, AppBar, ToolBar, Typography } from '@mui/styles';
import theme from '../styles/theme';

const useStyles = makeStyles((theme) => {
  root: {}
})


function Header({}) {

  return (
    <AppBar>
      <ToolBar>
        <Typography variant="h1">
          Corcordium
        </Typography>
      </ToolBar>
    </AppBar>
  );
}

export default Header;

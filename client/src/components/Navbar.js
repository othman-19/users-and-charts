import React from 'react';
import { Link } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  makeStyles,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  navlinks: {
    marginLeft: theme.spacing(10),
    display: 'flex',
  },
  logo: {
    flexGrow: '1',
    cursor: 'pointer',
  },
  link: {
    textDecoration: 'none',
    color: 'white',
    fontSize: '1rem',
    marginRight: theme.spacing(30),
    '&:hover': {
      color: 'yellow',
      borderBottom: '1px solid white',
    },
  },
}));

const Navbar = () => {
  const classes = useStyles();
  return (
    <AppBar position="static">
      <CssBaseline />
      <Toolbar>
        <Typography className={classes.logo}>
          Users/Charts
        </Typography>
        <div className={classes.navlinks}>
          <Link to="/" className={classes.link}>
            Home
          </Link>
          <Link to="/users.xml" className={classes.link}>
            XML
          </Link>

          <Link to="/about" className={classes.link}>
            About
          </Link>

          <Link to="/contact" className={classes.link}>
            Contact
          </Link>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

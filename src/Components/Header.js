import { AppBar, Container, createTheme, MenuItem, Select, ThemeProvider, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { makeStyles } from 'tss-react/mui';
import { useNavigate } from 'react-router-dom'
import { Cryptostate } from '../CryptoContext';
const useStyles = makeStyles()(() => ({
  title: {
    flex: 1, 
    color: 'gold',
    fontFamily: 'Montserrat',
    fontWeight: "bold",
    cursor: "pointer",
  }
}));
const Header = () => {
  const {classes} = useStyles();

  const navigate = useNavigate();

  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

  const { currency, setCurrency } = Cryptostate();

  // console.log(currency);
  
  return (
    <ThemeProvider theme={darkTheme}>
    <AppBar color='transparent' position='static'>
      <Container>
        <Toolbar>
          <Typography onClick={() => navigate("/")} className={classes.title}>Kryptt</Typography>

          <Select variant="outlined" style={{
            width: 100, 
            height: 40,
            marginRight: 15,
            color: "white"
          }}
          value={currency}
          onChange={(e) => setCurrency(e.target.value)}
          >
            <MenuItem value={"USD"}>USD</MenuItem>
            <MenuItem value={"INR"}>INR</MenuItem>
          </Select>
        </Toolbar>
      </Container>
    </AppBar>
    </ThemeProvider>
  )
}

export default Header
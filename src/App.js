import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import CoinPage from './Pages/CoinPage';
import Homepage from './Pages/Homepage';
import { makeStyles } from 'tss-react/mui';

function App() {
  const useStyles = makeStyles()(() => ({
    App: {
      backgroundColor: "#202020",
      color: "white",
      minHeight: "100vh",
    }
  }));

  const { classes } = useStyles();
  return (
    <BrowserRouter>
      <div className={classes.App}>
        <Header />
        <Routes>
        <Route path='/' element={<Homepage/>} exact />
        <Route path='/coins/:id' element={<CoinPage/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

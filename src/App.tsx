import {
  Routes,
  Route,
} from "react-router-dom";

import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

import { CharacterInfo } from "./components/CharacterInfo/CharacterInfo";

import { CharactersList } from "./components/CharactersList/CharacterList";
import { Header } from "./components/Header/Header";

import styles from "./App.module.css";

function App() {
  return (
    <Grid className={styles.container}>
      <Header />
      <Container className={styles.main}>
        <Routes>
          <Route path="/:id" element={<CharacterInfo />}/>
          <Route path="/" element={<CharactersList />} />          
        </Routes>
      </Container>
    </Grid>
  );
}

export default App;

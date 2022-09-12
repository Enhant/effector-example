import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Button from "@mui/material/Button";
import InputBase from "@mui/material/InputBase";
import styles from "./Header.module.css";
import logo from "./logo.png";

import { searchCharacterFx } from "../../stores/effects";
import { useDebounceFunction } from "../../hooks/useDebounceFunction";
import { ChangeEventHandler, useCallback, useState } from "react";

export const Header = () => {
  const [value, setValue] = useState("");
  useDebounceFunction(
    useCallback(() => searchCharacterFx(value), [value]),
    300
  );

  const handleChangeSearch: ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  > = (e) => {
    setValue(e.target.value);
  };

  return (
    <Grid container className={styles.header} alignItems="center">
      <Grid item xs={3}>
        <Link href="/" className={styles.logo} component={Button}>
          <img src={logo} alt="logo" className={styles.logoIcon} />
          Faraway - test task
        </Link>
      </Grid>
      <Grid item xs={6}>
        <InputBase
          value={value}
          onChange={handleChangeSearch}
          className={styles.searchCharactersInput}
          placeholder="Search characters..."
          inputProps={{ "aria-label": "search characters" }}
        />
      </Grid>
    </Grid>
  );
};

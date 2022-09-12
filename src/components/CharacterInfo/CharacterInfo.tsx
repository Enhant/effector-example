import { Grid, Typography } from "@mui/material";
import { useStore } from "effector-react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

import Store from "../../stores/characters";
import { searchCharacterByIdFx } from "../../stores/effects";

import { CharacterDataItem } from "./CharacterDataItem";

import styles from "./CharacterInfo.module.css";

export const CharacterInfo = () => {
  const $store = useStore(Store);

  const { id } = useParams();

  useEffect(() => {
    if (!$store.selectedCharacter) {
      if (id) {
        searchCharacterByIdFx(Number(id));
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Grid container direction="column">
      {Object.entries($store.selectedCharacter || {}).map((charData) =>
        charData[1].length ? (
          <Grid
            container
            direction="column"
            className={styles.row}
            key={charData[0]}
          >
            <Typography
              variant="subtitle1"
              component={Grid}
              item
              className={styles.title}
            >
              {charData[0].replace("_", " ")}
            </Typography>
            <Grid item className={styles.text} container direction="column">
              {Array.isArray(charData[1])
                ? charData[1].map((data) => (<CharacterDataItem data={data} key={data} />))
                : <CharacterDataItem data={charData[1]} />}
            </Grid>
          </Grid>
        ) : null
      )}
    </Grid>
  );
};

import { Pagination } from "@mui/material";
import { useStore } from "effector-react";
import { ChangeEvent, useEffect } from "react";
import { Link } from "react-router-dom";
import Store, {
  selectCharacterEvent,
  selectPageEvent,
} from "../../stores/characters";
import { loadCharactersFx } from "../../stores/effects";
import { ICharacter } from "../../stores/interfaces";
import { getIdFromCharUrl } from "../../utils/getIdFromCharUrl";

import styles from "./CharactersLst.module.css";

export const CharactersList = () => {
  const $store = useStore(Store);
  useEffect(() => {
    loadCharactersFx($store.page);
  }, [$store.page]);

  const handleChange = (_: ChangeEvent<unknown>, newPage: number) => {
    selectPageEvent(newPage);
  };

  const handleSelectCharacter = (charInfo: ICharacter) => () => {
    selectCharacterEvent(charInfo);
  }

  return (
    <>
      <ul className={styles.charactersList}>
        {$store.characters.map((charInfo) => (
          <li className={styles.listElement} key={charInfo.name} onClick={handleSelectCharacter(charInfo)}>
            <Link to={getIdFromCharUrl(charInfo.url) || ''}>{charInfo.name}</Link>
          </li>
        ))}
      </ul>
      {$store.maxPage > 1 ? (
        <Pagination
          count={$store.maxPage}
          page={$store.page}
          onChange={handleChange}
          variant="outlined"
          shape="rounded"
          classes={{
            root: styles.paginationContainer,
            ul: styles.pagination,
          }}
        />
      ) : null}
    </>
  );
};

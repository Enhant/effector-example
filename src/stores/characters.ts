import { createEvent, createStore } from "effector";
import { loadCharactersFx, searchCharacterByIdFx, searchCharacterFx } from "./effects";
import { ICharacter, IStore } from "./interfaces";

export const selectPageEvent = createEvent<number>();

export const selectCharacterEvent = createEvent<ICharacter>();

export default createStore<IStore>({
  characters: [],
  page: 1,
  selectedCharacter: null,
  maxPage: 0,
})
  .on([loadCharactersFx.doneData, searchCharacterFx.doneData], (state, res) => {
    return {
      ...state,
      characters: res.results,
      maxPage: Math.ceil(res.count / 10),
    };
  })
  .on(selectPageEvent, (state, newPage) => {
    return {
      ...state,
      page: newPage
    }
  })
  .on(selectCharacterEvent, (state, character) => {
    return {
      ...state,
      selectedCharacter: character,
    }
  })
  .on(searchCharacterByIdFx.doneData, (state, character) => {

    return {
      ...state,
      selectedCharacter: character
    }
  });

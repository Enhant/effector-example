import { createEffect } from "effector";

const baseUrl = "https://swapi.dev/api/people";

export const loadCharactersFx = createEffect(async (page: number) => {
  const req = await fetch(`${baseUrl}?page=${page}`);
  return req.json();
});

export const searchCharacterFx = createEffect(async (search: string) => {
  const req = await fetch(`${baseUrl}?search=${search}`);
  return req.json();
});

export const searchCharacterByIdFx = createEffect(async (id: number) => {
  const req = await fetch(`${baseUrl}/${id}`);
  return req.json();
});
export const charUrlRegExp = new RegExp(/https:\/\/swapi\.dev\/api\/people\/([0-9]+)\/?/, 'i');

export const getIdFromCharUrl = (url: string) => {
  return url.match(charUrlRegExp)?.[1];
}
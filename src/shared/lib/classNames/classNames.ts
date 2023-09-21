type Mods = Record<string, boolean | string>;

export const classNames = (cls: string, mods: Mods, additional: string[]) => {
  return [
    cls,
    ...additional,
    ...Object.entries(mods)
      .filter(([className, val]) => Boolean(val))
      .map(([className]) => className),
  ].join(" ");
};

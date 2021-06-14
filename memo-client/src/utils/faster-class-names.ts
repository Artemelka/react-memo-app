type StylesMap = Record<string, string>;
type GetClassName = (name: string, names?: Record<string, boolean>) => string;

export function fasterClassNames(styles: StylesMap): GetClassName {
  return (name, names) => {
    const baseName = styles[name] || name;

    if (names) {
      let resArr = [baseName];

      for (let key in names) {
        if (names[key]) {
          resArr.push(styles[key] || key)
        }
      }

      return resArr.join(' ');
    }

    return baseName;
  }
}
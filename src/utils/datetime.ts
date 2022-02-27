const isInvalidDate = (d: Date) => {
  return isNaN(d.valueOf());
};

export const getLocaleDateString = (datetime: string) => {
  const d = new Date(datetime);

  if (isInvalidDate(d)) {
    return undefined;
  }

  const localeDateString = d.toLocaleDateString();

  return localeDateString;
};

export const getLocaleString = (datetime: string) => {
  const d = new Date(datetime);

  if (isInvalidDate(d)) {
    return undefined;
  }

  const localeString = d.toLocaleString();

  return localeString;
};

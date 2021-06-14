export const getProgressValue = (listValues: Array<boolean>): number => {
  const percentStep = 100/listValues.length;

  return listValues.reduce((acc = 0, isChecked) =>
      isChecked ? acc + percentStep : acc
    , 0);
};
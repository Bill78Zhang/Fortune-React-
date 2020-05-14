export const listView = 'list';
export const chartView = 'chart';

export const numberGenerator = (max, start = 0) => {
  const arry = [];
  for (let i = 0; start <= max; i++) {
    arry[i] = start++;
  }
  return arry;
};

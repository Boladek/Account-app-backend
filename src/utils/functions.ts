export const formatNumber = (num: string, point = 2) :string => {
    const formats = String(num);
    const first = formats.split(".")[0];
    if (point === 0) {
      return new Intl.NumberFormat().format(Number(first));
    }
    const toFixed = Number.parseFloat(num).toFixed(point);
    const second = String(toFixed).split(".")[1];
    const third = new Intl.NumberFormat().format(Number(first));
    return `${third}.${second}`;
  };
  
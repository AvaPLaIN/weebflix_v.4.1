function roundedMedian(leafValues) {
  let min = leafValues[0] || 0;
  let max = leafValues[0] || 0;

  leafValues.forEach((value) => {
    min = Math.min(min, value);
    max = Math.max(max, value);
  });

  return Math.round((min + max) / 2);
}

export default roundedMedian;

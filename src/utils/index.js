export const getFilterBy = ((type, value) => (item) => {
  let result = true;
  if (value) {
    result = Array.isArray(item[type]) ? item[type].includes(value) : item[type] === value;
  }
  return result;
});

export const multiFilter = (data, filters = []) =>
  filters.reduce((accum, filter) => accum.filter(filter), data);

export const getOptionsFor = (type, data, filters = []) => {
  const options = multiFilter(data, filters).reduce((accum, vehicle) =>
    accum.concat(vehicle[type]), []);

  return [...new Set(options)].map(item => ({
    value: item,
    title: item,
  }));
};

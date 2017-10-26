/**
 * Create predicate function to test the item by a certain value
 * @param {string} key - item's key to test
 * @param {string} value - value of the type
 * @returns {function(Object)} predicate function
 */
export const getFilterBy = ((key, value) => (item) => {
  let result = true;
  if (value) {
    result = Array.isArray(item[key]) ? item[key].includes(value) : item[key] === value;
  }
  return result;
});

/**
 * Filter the data by an array of filters.
 * @param {Array<Object>} data - data to filter
 * @param {Array<function>} [filters=[]] - filters are applied to the data
 *                                          sequentially depending on the position in the array
 * @returns {Array<Object>} array of filtered data
 */
export const multiFilter = (data, filters = []) =>
  filters.reduce((accum, filter) => accum.filter(filter), data);

/**
 * Retrieve an array of options for a select tag from the data based on the type and filters values
 * @param {string} type - type of options
 * @param {Array<Object>} data - retrieve from current data
 * @param {Array<function>} [filters=[]] - array of filters applied to the data
 * @returns {Array<{value: string, title: string}>} array of unique options
 */
export const getOptionsFor = (type, data, filters = []) => {
  const options = multiFilter(data, filters).reduce((accum, vehicle) =>
    accum.concat(vehicle[type]), []);

  return [...new Set(options)].map(item => ({
    value: item,
    title: item,
  }));
};

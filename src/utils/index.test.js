import { getFilterBy, multiFilter, getOptionsFor } from './';

describe('#utils', () => {
  describe('getFilterBy', () => {
    let testItem;

    beforeEach(() => {
      testItem = {
        simpleType: 'typeValue',
        arrayType: ['typeValue', 'anotherTypeValue'],
      };
    });

    it('predicate function should returns true for the item with a current key and value', () => {
      const func = getFilterBy('simpleType', 'typeValue');
      expect(func(testItem)).toBe(true);
    });

    it('predicate function should returns true if value is truthy', () => {
      const func = getFilterBy('simpleType', '');
      expect(func(testItem)).toBe(true);
    });

    it('predicate function should returns true if item\'s value contains passed in value', () => {
      const func = getFilterBy('arrayType', 'typeValue');
      expect(func(testItem)).toBe(true);
    });

    it('predicate function should returns false if item does not have passed in key with value', () => {
      const func = getFilterBy('randomKey', 'randomValue');
      expect(func(testItem)).toBe(false);
    });

    it('predicate function should returns false if item\'s value are not the same as passed in value', () => {
      const func = getFilterBy('simpleType', 'randomValue');
      expect(func(testItem)).toBe(false);
    });

    it('predicate function should returns false if item\'s value does not contain passed in value', () => {
      const func = getFilterBy('arrayType', 'randomValue');
      expect(func(testItem)).toBe(false);
    });
  });


  describe('multiFilter', () => {
    let data;

    beforeEach(() => {
      data = [{
        testKey: 'testValue',
        filterKey: 'filterValue',
      }, {
        testKey: 'testValue',
        filterKey: 'notFilterValue',
      }, {
        testKey: 'testValueToLeave',
        filterKey: 'notFilterValue',
      }];
    });

    it('should return same data if called without filters', () => {
      expect(multiFilter(data)).toEqual(data);
    });

    it('should return filtered data', () => {
      const filterByFilterKey = getFilterBy('filterKey', 'filterValue');
      const filterByTestKey = getFilterBy('testKey', 'testValue');
      const result = multiFilter(data, [filterByFilterKey, filterByTestKey]);
      expect(result).toEqual([{
        testKey: 'testValue',
        filterKey: 'filterValue',
      }]);
    });
  });

  describe('getOptionsFor', () => {
    let data;
    beforeEach(() => {
      data = [{
        testKey: 'testValue',
        filterKey: 'filterValue',
      }, {
        testKey: 'testValue',
        filterKey: 'notFilterValue',
      }, {
        testKey: 'randomTestValue',
        filterKey: 'notFilterValue',
      }];
    });

    it('should return unique options by testKey', () => {
      const result = [{
        value: 'testValue',
        title: 'testValue',
      }, {
        value: 'randomTestValue',
        title: 'randomTestValue',
      }];

      expect(getOptionsFor('testKey', data)).toEqual(result);
    });

    it('should return unique options by testKey, filtered by filterKey', () => {
      const result = [{
        value: 'testValue',
        title: 'testValue',
      }];
      const filter = getFilterBy('filterKey', 'filterValue');

      expect(getOptionsFor('testKey', data, [filter])).toEqual(result);
    });
  });
});

import _ from 'lodash';

export default function extractTestFilePattern(input) {
  if (!input || _.isBoolean(input) || !String(input).trim()) {
    return '*';
  }

  const fragments = String(input)
    .split(',')
    .reduce((accumulator, fragment) => {
      const cleanFragment = fragment.trim();

      if (cleanFragment) {
        accumulator.push(cleanFragment);
      }

      return accumulator;
    }, []);

  const pattern = fragments.join('|');

  return fragments.length > 1 ? `+(${pattern})` : pattern;
}
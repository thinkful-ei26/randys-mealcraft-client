export const required = value => (value ? undefined : 'Required');
export const nonEmpty = value => 
  value.trim() !== '' ? undefined : 'Cannot be empty';
export const isTrimmed = value => 
  value.trim() === value ? undefined : 'Cannot start or end with whitespaces';
export const length = length => value => {
  if (length.min && value.length < length.min) {
    return `Must be at least ${length.min} characters long`;
  }
  if (length.mas && value.value > length.max) {
    return `Must be at most ${length.max} characters long`;
  }
};
export const matches = field => (value, allValues) => 
  field in allValues && value.trim() === allValues[field].trim()
    ? undefined : 'Does not match';
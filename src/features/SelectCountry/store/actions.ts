export const SELECT_COUNTRY = 'SELECT_COUNTRY';

export const selectCountry = (country: string) => ({
  type: SELECT_COUNTRY,
  payload: country,
});

import { useState } from 'react';
import locales from 'countries-list';

const countries = [];

Object.entries(locales.countries).forEach((element) => {
  countries.push({
    code: element[0].toUpperCase(),
    ...element[1],
  });
});

export default function useCountries() {
  const [country, setCountry] = useState(countries[0]);

  return [{ countries, country }, { setCountry }];
}

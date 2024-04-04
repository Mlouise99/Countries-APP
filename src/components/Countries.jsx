import React, { useEffect, useState } from 'react';

const Countries = () => {
  const [listOfCountries, setListOfCountries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getCountries = async () => {
    try {
      const response = await fetch("https://restcountries.com/v3.1/all", {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (!response.ok) {
        throw new Error('Failed to fetch countries');
      }

      const data = await response.json();
      console.log(data[0]);
      setListOfCountries(data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching countries:', error);
      setError('An error occurred while fetching countries. Please try again later.');
      setLoading(false);
    }
  }

  useEffect(() => {
    setLoading(true);
    getCountries();
  }, []);

  return (
    <div className='pl-4 pr-4 md:pl-40 md:pr-40'>
      <div className=' mt-11 flex flex-col md:flex-row justify-between items-center'>
        <div>
          <h1 className='text-2xl mb-2'>View Countries</h1>
          <p>Page 1 of 5</p>
        </div>
        <select className="ml-auto" id="">
          <option>Select Continent</option>
          <option className='tablet'>South America</option>
          <option>North America</option>
          <option>Asia</option>
          <option>Europe</option>
          <option>Africa</option>
          <option>Antarctica</option>
          <option>Oceania</option>
        </select>
      </div>
      <div id='countries' className='flex flex-wrap w-full justify-between md:gap-1'>
        {listOfCountries.length > 0 && listOfCountries.map((country, index) => {
          return (
            <div key={index} className='w-5/12 md:w-1/5 mb-5'>
              <img src={country.flags.svg} alt={country.flags.alt} />
              <p>{country.name.common}</p>
              <p>{country.capital}</p>
              <p>{country.population}</p>
              <p>{country.continents}</p>
            </div>
          )
        })}

        {loading && <p>Loading...</p>}

        {error && <p className="text-red-500">{error}</p>}
        
        {!loading && listOfCountries.length === 0 && !error && <p>No countries available</p>}
      </div>
    </div>
  );
}

export default Countries;

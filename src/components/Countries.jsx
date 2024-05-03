// Import necessary modules
import React, { useEffect, useState } from 'react';
import { getCountries } from '../apis/countries';
import { useSearchParams } from 'react-router-dom';
import Pagination from './Pagination';

// Define the Countries component
const Countries = () => {
  // State variables
  const [listOfCountries, setListOfCountries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [viewType, setViewType] = useState('card');
  const [filterType, setFilterType] = useState('region');
  const [searchParams, setSearchParams] = useSearchParams({ page: 1 });
  const [searchTerm, setSearchTerm] = useState('');
  
  const handleSearch = (term) => {
    setSearchTerm(term); // Update the search term state
  };

  // Fetch countries data from API
  useEffect(() => {
    let pageNumber = Number(searchParams.get('page'));

    setLoading(true);

    getCountries(pageNumber)
      .then((data) => {
        setListOfCountries(data);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [searchParams]);

  // Toggle between card and table views
  const toggleView = () => {
    setViewType(viewType === 'card' ? 'table' : 'card');
  };

  // Handle filter change
  const handleFilterChange = (event) => {
    setFilterType(event.target.value);
  };

  // Render countries based on view type
  const renderCountries = () => {
    if (viewType === 'card') {
      // Render countries in card view
      return (
        <div id='countries' className='flex flex-wrap w-full justify-between md:gap-1'>
          {listOfCountries.map((country, index) => (
            <div key={index} className='w-5/12 md:w-1/5 mb-5 text-gray-500'>
              <img src={country.flags.svg} alt={country.flags.alt} />
              <p>{country.name.common}</p>
              <p>{country.capital}</p>
              <p>{country.population}</p>
              <p>{country.continents}</p>
            </div>
          ))}
        </div>
      );
    } else if (viewType === 'table') {
      // Render countries in table view with Tailwind CSS styles
      return (
        <div className='overflow-x-auto'>
          <table className='min-w-full'>
            <thead>
              <tr>
                <th className='px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                  Name
                </th>
                <th className='px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                  Capital
                </th>
                <th className='px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                  Population
                </th>
                <th className='px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                  Continent
                </th>
              </tr>
            </thead>
            <tbody className='bg-white divide-y  divide-gray-200'>
              {listOfCountries.map((country, index) => (
                <tr key={index}>
                  <td className='px-6 py-4 whitespace-nowrap border-r border-gray-400'>{country.name.common}</td>
                  <td className='px-6 py-4 whitespace-nowrap border-r border-gray-400'>{country.capital}</td>
                  <td className='px-6 py-4 whitespace-nowrap border-r border-gray-400'>{country.population}</td>
                  <td className='px-6 py-4 whitespace-nowrap'>{country.continents}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    }
  };

  // Render the component JSX
  return (
    <div className='max-auto max-w-full items-center justify-center sm:pr-40 sm:pl-40 mt-11'>
      <div className='flex justify-between mb-9 '>
        <div>
          <h3 className='text-2xl mb-2'>View Countries</h3>
          <p>Page {Number(searchParams.get('page'))} of 5</p>
        </div>
        <select onChange={handleFilterChange}>
          <option value='region'>Filter by Region</option>
          <option value='continent'>Filter by Continent</option>
        </select>
      </div>

      <button className='bg-blue-300 rounded-full w-96 mb-7 ' onClick={toggleView}>{viewType === 'card' ? ' Click here to view in Table ' : ' Click here to view in Card '}</button>

      {renderCountries()}

      {loading && <p>Loading...</p>}
      {!loading && listOfCountries.length === 0 && <p>No countries available</p>}

      <Pagination searchParams={searchParams} setSearchParams={setSearchParams} />
    </div>
  );
};

export default Countries;

import React, { useEffect, useState } from 'react';
import { getCountries } from '../apis/countries';
import { useSearchParams } from 'react-router-dom';
import Pagination from './Pagination';

const Countries = () => {
  const [listOfCountries, setListOfCountries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams({ page: 1 });

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
    .finally(()=> {
      setLoading(false);
    })


  },[]);

  return (
 <div className='max-auto max-w-full items-center justify-center sm:pr-40 sm:pl-40 mt-11'>
      
      <div  className='flex justify-between mb-9'>
        <div >
          <h3  className='text-2xl mb-2'>View Countries</h3>
          <p>Page {Number(searchParams.get('page'))} of 5</p>
        </div>
        <select>
          <option value="">Select region</option>
        </select>
      </div>

      {/* List of countries */}
      <div id='countries' className='flex flex-wrap w-full justify-between md:gap-1'>
        {listOfCountries.length > 0 && listOfCountries.map((country, index) => {
          return (
            <div key={index} className='w-5/12 md:w-1/5 mb-5 text-gray-500'>
              <img src={country.flags.svg} alt={country.flags.alt} />
              <p>{country.name.common}</p>
              <p>{country.capital}</p>
              <p>{country.population}</p>
              <p>{country.continents}</p>
            </div>
          )
        })}

        {loading && <p>Loading...</p>}

        {(!loading && listOfCountries.length === 0) && <p>No countries available</p>}

        {/* Using Ternary operators */}
        {/* {listOfCountries.length > 0
          ? 
            listOfCountries.length > 0 && listOfCountries.map((country, index) => {
              return (
                <div key={index}>
                  <img src={country.flag} alt={country.name} />
                  <p>{country.name}</p>
                </div>
              )
            })
          : <p>No countries available</p>
        } */}

      </div>

      {/* Pagination  */}
      <Pagination searchParams={searchParams} setSearchParams={setSearchParams}/>
      </div>
  
  )
}

export default Countries
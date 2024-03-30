import React from 'react'

const Countries = () => {
  return (
    <div className='pl-40 pr-40'>
    <div className=' mt-11 flex justify-between items-center'>
      <div>
        <h1 className='text-2xl mb-2'>View Countries</h1>
        <p>Page 1 of 5</p>
      </div>
      <select className="ml-auto" id="">
        <option>Select Continent</option>
        <option>South America</option>
        <option>North America</option>
        <option>Asia</option>
        <option>Europe</option>
        <option>Africa</option>
        <option>Antarctica</option>
        <option>Oceania</option>
      </select>
    </div>
    <div className='flex space-x-14 mt-14'>
    <div className='country  '>
      <img src="https://flagcdn.com/cy.svg" alt="" className='w-80 h-40 mt-0' />
      <h1 className='text-2xl font-bold'>Cyprus</h1>
      <p > <span className="text-green-900 font-bold">Capital:</span> Nicosia</p>
      <p> <span className="text-green-900 font-bold"> Population:</span>1207361</p>
      <p> <span className="text-green-900 font-bold">Region:</span>Europe</p>


    </div>
    <div className='country '>
      <img src="https://flagcdn.com/er.svg" alt="" className='w-80 h-50 ' />
      <h1 className='text-2xl font-bold pb-30 pt-0 '>Eritrea</h1>
      <p > <span className="text-green-900 font-bold">Capital:</span> Asmara</p>
      <p> <span className="text-green-900 font-bold"> Population:</span>5352000</p>
      <p> <span className="text-green-900 font-bold">Region:</span>Africa</p>


    </div>
    <div className='country '>
      <img src="https://flagcdn.com/lr.svg" alt="" className='w-80 h-50 ' />
      <h1 className='text-2xl font-bold'>Liberia</h1>
      <p > <span className="text-green-900 font-bold">Capital:</span> Monrovia</p>
      <p> <span className="text-green-900 font-bold"> Population:</span>5057677</p>
      <p> <span className="text-green-900 font-bold">Region:</span>Africa</p>


    </div>
    <div className='country '>
      <img src="https://flagcdn.com/bm.svg" alt="" className='w-80 h-30 mt-0' />
      <h1 className='text-2xl font-bold mt-3'>Bermuda</h1>
      <p > <span className="text-green-900 font-bold">Capital:</span> Hamilton</p>
      <p> <span className="text-green-900 font-bold"> Population:</span>63903</p>
      <p> <span className="text-green-900 font-bold">Region:</span>Americas</p>


    </div>
    <div className='country '>
      <img src="https://flagcdn.com/va.svg" alt="" className='w-80 h-30' />
      <h1 className='text-2xl font-bold'>Vatican City</h1>
      <p > <span className="text-green-900 font-bold">Capital:</span> Vatican City</p>
      <p> <span className="text-green-900 font-bold"> Population:</span>451</p>
      <p> <span className="text-green-900 font-bold">Region:</span>Europe</p>


    </div>
    </div>
    <div className='flex space-x-14 pt-4'>
    <div className='country  '>
      <img src="https://flagcdn.com/ck.svg" alt="" className='w-80 h-40 mt-0' />
      <h1 className='text-2xl font-bold'>Cook Islands</h1>
      <p > <span className="text-green-900 font-bold">Capital:</span> Avarua</p>
      <p> <span className="text-green-900 font-bold"> Population:</span>18100</p>
      <p> <span className="text-green-900 font-bold">Region:</span>Oceania</p>


    </div>
    <div className='country '>
      <img src="https://flagcdn.com/so.svg" alt="" className='w-80 h-50 ' />
      <h1 className='text-2xl font-bold pb-30 pt-0 '>Somalia</h1>
      <p > <span className="text-green-900 font-bold">Capital:</span> Mogadishu</p>
      <p> <span className="text-green-900 font-bold"> Population:</span>15893219</p>
      <p> <span className="text-green-900 font-bold">Region:</span>Africa</p>


    </div>
    <div className='country '>
      <img src="https://flagcdn.com/zm.svg" alt="" className='w-80 h-50 ' />
      <h1 className='text-2xl font-bold'>Zambia</h1>
      <p > <span className="text-green-900 font-bold">Capital:</span> Lusaka</p>
      <p> <span className="text-green-900 font-bold"> Population:</span>18383956</p>
      <p> <span className="text-green-900 font-bold">Region:</span>Africa</p>


    </div>
    <div className='country '>
      <img src="https://flagcdn.com/ve.svg" alt="" className='w-80 h-30 mt-0' />
      <h1 className='text-2xl font-bold mt-3'>Venezuela</h1>
      <p > <span className="text-green-900 font-bold">Capital:</span> Caracas</p>
      <p> <span className="text-green-900 font-bold"> Population:</span>28435943</p>
      <p> <span className="text-green-900 font-bold">Region:</span>Americas</p>


    </div>
    <div className='country '>
      <img src="https://flagcdn.com/tm.svg" alt="" className='w-80 h-30 ' />
      <h1 className='text-2xl font-bold'>Turkmenistan</h1>
      <p > <span className="text-green-900 font-bold">Capital:</span> Ashgabat</p>
      <p> <span className="text-green-900 font-bold"> Population:</span>6031187</p>
      <p> <span className="text-green-900 font-bold">Region:</span>Asia</p>


    </div>
      </div>
      <div className='flex space-x-14 pt-4'>
    <div className='country  '>
      <img src="https://flagcdn.com/al.svg" alt="" className='w-80 h-40 mt-0' />
      <h1 className='text-2xl font-bold'>Albania</h1>
      <p > <span className="text-green-900 font-bold">Capital:</span> Tirana</p>
      <p> <span className="text-green-900 font-bold"> Population:</span>2837743</p>
      <p> <span className="text-green-900 font-bold">Region:</span>Europe</p>


    </div>
    <div className='country '>
      <img src="https://flagcdn.com/hr.svg" alt="" className='w-80 h-50 ' />
      <h1 className='text-2xl font-bold pb-30 pt-0 '>Croatia</h1>
      <p > <span className="text-green-900 font-bold">Capital:</span>Zagreb</p>
      <p> <span className="text-green-900 font-bold"> Population:</span>4047200</p>
      <p> <span className="text-green-900 font-bold">Region:</span>Europe</p>


    </div>
    <div className='country '>
      <img src="https://flagcdn.com/gb.svg" alt="" className='w-80 h-50 ' />
      <h1 className='text-2xl font-bold'>United Kingdom</h1>
      <p > <span className="text-green-900 font-bold">Capital:</span> London</p>
      <p> <span className="text-green-900 font-bold"> Population:</span>67215293</p>
      <p> <span className="text-green-900 font-bold">Region:</span>Europe</p>


    </div>
    <div className='country '>
      <img src="https://flagcdn.com/sd.svg" alt="" className='w-80 h-30 mt-0' />
      <h1 className='text-2xl font-bold mt-3'>Sudan</h1>
      <p > <span className="text-green-900 font-bold">Capital:</span>  Khartoum</p>
      <p> <span className="text-green-900 font-bold"> Population:</span>43849269</p>
      <p> <span className="text-green-900 font-bold">Region:</span>Africa</p>


    </div>
    <div className='country '>
      <img src="https://flagcdn.com/tl.svg" alt="" className='w-80 h-30 ' />
      <h1 className='text-2xl font-bold'>Timor-Leste</h1>
      <p > <span className="text-green-900 font-bold">Capital:</span> Dili</p>
      <p> <span className="text-green-900 font-bold"> Population:</span>1318442</p>
      <p> <span className="text-green-900 font-bold">Region:</span>Asia</p>


    </div>
      </div>
      <div className='flex space-x-14 pt-4'>
    <div className='country  '>
      <img src="https://flagcdn.com/cg.svg" alt="" className='w-80 h-40 mt-0' />
      <h1 className='text-2xl font-bold'>Republic of the Congo</h1>
      <p > <span className="text-green-900 font-bold">Capital:</span> Brazzaville</p>
      <p> <span className="text-green-900 font-bold"> Population:</span>5657000</p>
      <p> <span className="text-green-900 font-bold">Region:</span>Africa</p>


    </div>
    <div className='country '>
      <img src="https://flagcdn.com/az.svg" alt="" className='w-80 h-50 mt-9 ' />
      <h1 className='text-2xl font-bold pb-30 pt-0 '>Azerbaijan</h1>
      <p > <span className="text-green-900 font-bold">Capital:</span>Baku</p>
      <p> <span className="text-green-900 font-bold"> Population:</span>10110116</p>
      <p> <span className="text-green-900 font-bold">Region:</span>Asia</p>


    </div>
    <div className='country '>
      <img src="https://flagcdn.com/ke.svg" alt="" className='w-80 h-50  ' />
      <h1 className='text-2xl font-bold'>Kenya</h1>
      <p > <span className="text-green-900 font-bold">Capital:</span>  Nairobi</p>
      <p> <span className="text-green-900 font-bold"> Population:</span>53771300</p>
      <p> <span className="text-green-900 font-bold">Region:</span>Africa</p>


    </div>
    <div className='country '>
      <img src="https://flagcdn.com/as.svg" alt="" className='w-80 h-30 mt-4' />
      <h1 className='text-2xl font-bold mt-3'>American Samoa</h1>
      <p > <span className="text-green-900 font-bold">Capital:</span>  Pago Pago</p>
      <p> <span className="text-green-900 font-bold"> Population:</span>55197</p>
      <p> <span className="text-green-900 font-bold">Region:</span>Oceania</p>


    </div>
    <div className='country '>
      <img src="https://flagcdn.com/ci.svg" alt="" className='w-80 h-30 ' />
      <h1 className='text-2xl font-bold'>Ivory Coast</h1>
      <p > <span className="text-green-900 font-bold">Capital:</span>Yamoussoukro</p>
      <p> <span className="text-green-900 font-bold"> Population:</span>26378275</p>
      <p> <span className="text-green-900 font-bold">Region:</span>Africa</p>


    </div>
      </div>
      <div className='flex space-x-14 pt-4'>
    <div className='country  '>
      <img src="https://flagcdn.com/cg.svg" alt="" className='w-80 h-40 mt-0' />
      <h1 className='text-2xl font-bold'>Republic of the Congo</h1>
      <p > <span className="text-green-900 font-bold">Capital:</span> Brazzaville</p>
      <p> <span className="text-green-900 font-bold"> Population:</span>5657000</p>
      <p> <span className="text-green-900 font-bold">Region:</span>Africa</p>


    </div>
    <div className='country '>
      <img src="https://flagcdn.com/az.svg" alt="" className='w-80 h-50 mt-9 ' />
      <h1 className='text-2xl font-bold pb-30 pt-0 '>Azerbaijan</h1>
      <p > <span className="text-green-900 font-bold">Capital:</span>Baku</p>
      <p> <span className="text-green-900 font-bold"> Population:</span>10110116</p>
      <p> <span className="text-green-900 font-bold">Region:</span>Asia</p>


    </div>
    <div className='country '>
      <img src="https://flagcdn.com/ke.svg" alt="" className='w-80 h-50  ' />
      <h1 className='text-2xl font-bold'>Kenya</h1>
      <p > <span className="text-green-900 font-bold">Capital:</span>  Nairobi</p>
      <p> <span className="text-green-900 font-bold"> Population:</span>53771300</p>
      <p> <span className="text-green-900 font-bold">Region:</span>Africa</p>


    </div>
    <div className='country '>
      <img src="https://flagcdn.com/as.svg" alt="" className='w-80 h-30 mt-4' />
      <h1 className='text-2xl font-bold mt-3'>American Samoa</h1>
      <p > <span className="text-green-900 font-bold">Capital:</span>  Pago Pago</p>
      <p> <span className="text-green-900 font-bold"> Population:</span>55197</p>
      <p> <span className="text-green-900 font-bold">Region:</span>Oceania</p>


    </div>
    <div className='country '>
      <img src="https://flagcdn.com/ci.svg" alt="" className='w-80 h-30 ' />
      <h1 className='text-2xl font-bold'>Ivory Coast</h1>
      <p > <span className="text-green-900 font-bold">Capital:</span>Yamoussoukro</p>
      <p> <span className="text-green-900 font-bold"> Population:</span>26378275</p>
      <p> <span className="text-green-900 font-bold">Region:</span>Africa</p>


    </div>
      </div>
   
    </div>

  
  );
}


export default Countries;


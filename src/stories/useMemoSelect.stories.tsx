import React, {useEffect, useState} from 'react';
import axios from 'axios';
import './useMemoSelect.stories.css';


export default {
    title: 'useMemoSelect demo',
}

type DemonymsType = {
    eng: {
        f: string
        m: string
    }
    fra: {
        f: string
        m: string
    }
}

type FlagsType = {
    png: string
    svg: string
    alt: string
}

interface Country {
    name: { common: string };
    capital: string[];
    population: number
    demonyms: DemonymsType
    flags: FlagsType
    region: string
}

// interface CountryCapital {
//     country: string;
//     capital: string[];
// }



export const CountryCapitalList: React.FC = () => {
    const [countries, setCountries] = useState<Country[]>([]);
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        axios.get<Country[]>('https://restcountries.com/v3.1/all')
            .then(response => {
                const countryCapitals = response.data
                setCountries(countryCapitals);
            })
            .catch(error => console.error('Error:', error));
    }, []);
    console.log(countries[0]?.demonyms.eng.m)

    return (
        <div style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
            <select onMouseEnter={toggleDropdown}
                    onMouseLeave={toggleDropdown}
                    className={isOpen ? 'dropdown-open' : 'dropdown-closed'}
                    style={{fontSize: '20px'}}>
                {countries.filter(c => c.population > 10_000_000).map((country, index) => {
                    const capital = country.capital?.[0];
                    return (
                        <option key={index}>
                            Country: {country.name.common}, capital: {capital}, population: {country.population}
                        </option>
                    );
                })}
            </select>

            <select style={{fontSize: '20px'}}>
                {countries.filter(countries => countries.population > 100_000_000).map((country, index) => {
                    const capital = country.capital;
                    return (
                        <option key={index}>
                            Country: {country.name.common}, capital: {capital[0]}, population: {country.population}
                        </option>
                    );
                })}
            </select>

            <select style={{fontSize: '20px'}}>
                {countries.filter(countries => countries.capital?.[0].toLowerCase().indexOf('s') > -1).map((country, index) => {
                    const capital = country.capital;
                    return (
                        <>
                            <option key={index}>
                                Country: {country.name.common}, capital: {capital[0]}, population: {country.population},
                                male: {country.demonyms.eng.m}, female: {country.demonyms.eng.f}
                            </option>
                            <img src={country.flags.svg} alt={country.flags.alt} className="dropdown-image"/>
                        </>

                    );
                })}
            </select>
            {/*<div>*/}
            {/*    {countries*/}
            {/*        // .filter( countries => countries.capital?.[0].toLowerCase().indexOf('bei') > -1)*/}
            {/*        .map(country => {*/}
            {/*            const capital = country.capital?.[0];*/}
            {/*            return (*/}
            {/*                <div style={{*/}
            {/*                    display: 'flex',*/}
            {/*                    flexDirection: 'column',*/}
            {/*                    gap: '10px',*/}
            {/*                    alignItems: 'center',*/}
            {/*                    border: '1px solid black',*/}
            {/*                    padding: '10px'*/}
            {/*                }}>*/}
            {/*                    <h1>Country: {country.name.common}, capital: {capital},*/}
            {/*                        population: {country.population} {country.region}</h1>*/}
            {/*                    <img src={country.flags.svg} alt={country.flags.alt} className="dropdown-image"/>*/}
            {/*                </div>*/}
            {/*            );*/}
            {/*        })}*/}
            {/*</div>*/}
        </div>
    );
};


/*import React, { useState } from 'react';
import './useMemoSelect.stories.css';

export const UseMemoSelect = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <select
        style={{ fontSize: '20px' }}
        className={isOpen ? 'dropdown-open' : 'dropdown-closed'}
        onMouseEnter={toggleDropdown}
        onMouseLeave={toggleDropdown}
      >
        {countries
          .filter((country) => country.capital?.[0].toLowerCase().indexOf('s') > -1)
          .map((country, index) => {
            const capital = country.capital;
            return (
              <>
                <option key={index}>
                  Country: {country.name.common}, capital: {capital[0]}, population: {country.population},
                  male: {country.demonyms.eng.m}, female: {country.demonyms.eng.f}
                </option>
                <img src={country.flags.svg} alt={country.flags.alt} className="dropdown-image" />
              </>
            );
          })}
      </select>
      <div>
        {countries
          .map((country) => {
            const capital = country.capital?.[0];
            return (
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '10px',
                  alignItems: 'center',
                  border: '1px solid black',
                  padding: '10px',
                }}
              >
                <h1>Country: {country.name.common}, capital: {capital}, population: {country.population} </h1>
                <div>
                  <img src={country.flags.svg} alt={country.flags.alt} className="dropdown-image" />
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};*/
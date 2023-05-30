'use client';

import { faBars, faClose, faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import {useRouter} from 'next/router'
import { useState } from 'react';
import { RootState } from './store';
import { TypedUseSelectorHook, useSelector } from 'react-redux';


const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

function NavBar() {
  const route = useRouter()
  const [page, setPage] = useState('/')

  const links = [
    { name: 'Inicio', link: '/' },
    { name: 'Catalogos', link: '/catalogos' },
    { name: 'Sobre', link: '/sobre' },
    { name: 'Novo', link: '/novocatalogo' },
  ];

  const [showBar, setShowBar] = useState(false);

  function handlePage(swithPage: string) {
    setShowBar(!showBar);
    setPage(swithPage)
    console.log('rota', route.asPath)
  }

  return (
    <div className={`shadow-md w-full fixed top-0 left-0 z-[1]`}>
      <nav className='md:flex bg-white items-center justify-between py-2 md:px-4 px-2 duration-200'>
        <div className='flex flex-row grow justify-between items-center duration-200'>
          {/* Logo */}
          <div className='font-black md:text-xl'>Peças Wiki</div>

          {/* search bar */}
          <form
            id='mySearch'
            className={`${
              route.pathname.substring(0, 10) == '/catalogos' ? `hidden` : ''
            } flex relative items-center grow md:grow-0 w-5xl mx-1`}
          >
            <button
              type='reset'
              form='mySearch'
              className='absolute top-2 left-3 text-gray-500'
            >
              <FontAwesomeIcon icon={faSearch} />
            </button>
            <input
              type='text'
              name='search'
              placeholder='Pesquisa'
              autoComplete='off'
              aria-label='Pesquisa'
              className='grow mx-2 m-1 py-1 pl-8 pr-2 font-semibold placeholder-gray-500 text-black rounded-2xl
               border-none ring-2 focus:ring-gray-500 ring-gray-300 duration-200'
            />
          </form>

          {/* toggle button */}
          <div
            className='md:hidden cursor-pointer text-[1.5rem]'
            onClick={() => setShowBar(!showBar)}
          >
            <FontAwesomeIcon icon={showBar ? faClose : faBars} />
          </div>
        </div>

        {/* offcanvas bar */}
        <ul
          className={`md:flex md:items-center absolute md:static bg-white
             md:z-auto z-[2] left-0 w-full md:w-auto font-bold md:pl-0 pl-9 transition-all 
             duration-400 md:pb-0 pb-8 shadow-md md:shadow-none ease-in ${
               !showBar ? 'top-[-490px]' : 'top-[50px]'
             }`}
        >
          {links.map((link, index) => (
            <li
              key={index}
              className={`md:ml-2 text-xl text-gray-800 hover:text-gray-400 duration-200 md:my-0 my-6 p-2 ${
                route.asPath == '' ? 'underline underline-offset-4' : ''
              }`}
            >
              <Link href={link.link} onClick={() => handlePage(index)}>
                {link.name}
              </Link>
            </li>
          ))}
          <button
            className='text-white p-2 rounded-full btn-primary md:ml-8 ml-0'
            onClick={() => setShowBar(!showBar)}
          >
            Cadastre-se
          </button>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;

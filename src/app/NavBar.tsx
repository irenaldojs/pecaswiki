'use client';

import { faBars, faClose } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Roboto } from 'next/font/google';
import Link from 'next/link';
import { useState } from 'react';
const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700', '900'],
});

const links = [
  { name: 'Inicio', link: '/' },
  { name: 'Dicas', link: '/dicas' },
  { name: 'Sobre', link: '/sobre' },
];
function NavBar() {
  const [showBar, setShowBar] = useState(false);

  return (
    <div className={roboto.className + ` shadow-md w-full fixed top-0 left-0`}>
      <nav className='md:flex bg-white items-center justify-between py-2 md:px-10 px-5 duration-200'>
        <div className='flex flex-row justify-between items-center duration-200'>
          <div className='font-black text-xl'>Peças Wiki</div>
          <div
            className='md:hidden cursor-pointer text-[1.5rem]'
            onClick={() => setShowBar(!showBar)}
          >
            <FontAwesomeIcon icon={showBar ? faClose : faBars} />
          </div>
        </div>
        <ul
          className={`md:flex md:items-center md-pb-0 absolute md:static bg-white
             md:z-auto z-[-1] left-0 w-full md:w-auto font-bold md:pl-0 pl-9 transition-all 
             duration-200 md:pb-0 pb-8 shadow-md md:shadow-none ease-in ${
               showBar ? 'top-[50px]' : 'top-[-490px]'
             }`}
        >
          {links.map((link, index) => (
            <li
              key={index}
              className='md:ml-8 text-xl text-gray-800 hover:text-gray-500 duration-200 md:my-0 my-6'
            >
              <Link href={link.link} onClick={() => setShowBar(!showBar)}>
                {link.name}
              </Link>
            </li>
          ))}
          <button
            className='bg-[#a6c1ee] text-white p-2 rounded-full hover:bg-[#87acec] duration-200 md:ml-8 ml-0'
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

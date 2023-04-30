'use client';

import { store } from '../app/store';
import { setOptions, defaltOptions } from '@/app/store/optionsSlice';
import Image from 'next/image';

interface cardProps {
  index: number;
  nome: string;
  conteudo: Array<string> | string;
  img?: string;
  catalogo?: string;
  pdf?: string;
  externo?: string;
}

function Card(props: cardProps) {
  return (
    <div
      onClick={() => {}}
      className={`px-2 py-1 rounded-lg shadow-md md:w-[18rem] w-full
       bg-white z-0 cursor-pointer relative flex flex-col items-center justify-center`}
    >
      <div className='relative h-[16rem] w-full flex items-center justify-center rounded-md p-10'>
        <Image
          src={props.img ? props.img : '/logo.png'}
          layout='fill'
          objectFit='contain'
          alt={''}
          className='p-1'
        />
      </div>
      <h1 className='text-center text-2xl font-bold text-neutral-700 capitalize'>
        {props.nome}
      </h1>
      <div
        className={`${
          props.index ? 'flex' : 'hidden'
        } flex-col items-center justify-center gap-2 my-3 absolute bg-white bg-opacity-60 h-full w-full rounded`}
      >
        <button
          type='submit'
          onClick={() => {}}
          className='cursor-pointer bg-green-800 hover:bg-green-600 duration-200 rounded-md px-3 py-1 text-white'
        >
          Catálogo
        </button>

        <button
          type='submit'
          onClick={() => {}}
          className='cursor-pointer bg-cyan-800 hover:bg-cyan-600 duration-200 rounded-md px-3 py-1 text-white'
        >
          Pdf
        </button>
      </div>
    </div>
  );
}

export default Card;

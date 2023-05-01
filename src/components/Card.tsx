'use client';

import { RootState, store } from '../app/store';
import { setOptions, defaltOptions } from '@/app/store/optionsSlice';
import { spawn } from 'child_process';
import Image from 'next/legacy/image';
import { TypedUseSelectorHook, useSelector } from 'react-redux';

interface cardProps {
  id: number;
  nome: string;
  conteudo: string;
  img?: string;
  catalogo?: string;
  pdf?: string;
  externo?: string;
}

const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

function Card(props: cardProps) {
  const index = useAppSelector((state) => state.options.index);

  const handler = () => {
    store.dispatch(defaltOptions());
    if (props.id == index) {
      store.dispatch(defaltOptions());
    } else {
      store.dispatch(setOptions(props.id));
    }
  };

  const image = `/logos/${props.img}.png`;
  const conteudo = props.conteudo.replace(/"/g, '').split(',');

  return (
    <div
      onClick={handler}
      className={`px-2 py-1 rounded-lg shadow-md md:w-[18rem] w-full
       bg-white z-0 cursor-pointer relative flex flex-col items-center justify-center`}
    >
      <div className='relative h-[16rem] w-full flex items-center justify-center rounded-md p-10'>
        <Image
          src={props.img ? image : '/logo.png'}
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
          props.id == index ? `visivel` : 'oculto'
        } flex flex-wrap items-center justify-center gap-1 my-3 p-1 absolute bg-white bg-opacity-90  h-full w-full rounded`}
      >
        <div className='capitalize flex flex-wrap items-center justify-center gap-1'>
          {conteudo.map((item, index) => (
            <div key={index}>{item},</div>
          ))}
        </div>

        <div className='flex gap-2'>
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
    </div>
  );
}

export default Card;

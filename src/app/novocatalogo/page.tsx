/* eslint-disable react-hooks/rules-of-hooks */
'use client';
import { useState } from 'react';

function page() {
  const [nome, setNome] = useState('');
  const [novoConteudo, setNovoConteudo] = useState('');
  const [listaConteudo, setListaConteudo] = useState<String[]>([]);
  const [linkCatalogo, setLinkCatalogo] = useState('');
  const [linkExterno, setLinkExterno] = useState('');

  function addConteudo() {
    console.log(novoConteudo);
    setListaConteudo(listaConteudo.concat(novoConteudo));
    setNovoConteudo('');
  }

  return (
    <div className='flex flex-col justify-center items-center'>
      <div className='w-full md:max-w-[40rem]'>
        <h1 className='text-center text-2xl md:text-3xl my-5 md:my-10'>
          Cadastrar um novo catálogo
        </h1>
        <div className='bg-slate-200 py-3 px-3 md:px-5 rounded-md flex flex-col gap-2 text-xl'>
          <div className='flex flex-col gap-2 justify-between'>
            <label> Nome </label>
            <input
              type='text'
              className='border border-slate-500 rounded grow max-w-2xl'
              value={nome}
              onChange={(event) => setNome(event.target.value)}
            />
          </div>

          <div className='flex flex-col gap-2 justify-between'>
            <label> Conteúdo </label>

            <div className='flex gap-2 grow'>
              <input
                type='text'
                className='border border-slate-500 rounded grow'
                value={novoConteudo}
                onChange={(event) => setNovoConteudo(event.target.value)}
              />
              <button onClick={() => addConteudo()}>Adicionar</button>
            </div>
            <div>
              {listaConteudo.map((item, index) => (
                <div key={index} className='flex gap-2'>
                  <div className='text-sm bg-white rounded mb-1 px-2 grow'>
                    {item}
                  </div>
                  <button
                    onClick={() => {
                      setListaConteudo(
                        listaConteudo.filter((itemRemove) => itemRemove != item)
                      );
                    }}
                  >
                    Remover
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className='flex flex-col gap-2 justify-between'>
            <label> Catalogo (Link ) </label>
            <input
              type='text'
              className='border border-slate-500 rounded grow max-w-2xl'
              value={linkCatalogo}
              onChange={(event) => setLinkCatalogo(event.target.value)}
            />
          </div>

          <div className='flex flex-col gap-2 justify-between'>
            <label> Pdf </label>
            <input
              type='text'
              className='border border-slate-500 rounded grow max-w-2xl'
            />
          </div>
          <div className='flex flex-col gap-2 justify-between'>
            <label> Catalogo Externo (Link ) </label>
            <input
              type='text'
              className='border border-slate-500 rounded grow max-w-2xl'
              value={linkExterno}
              onChange={(event) => setLinkExterno(event.target.value)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
export default page;

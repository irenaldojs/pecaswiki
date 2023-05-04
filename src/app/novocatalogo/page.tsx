/* eslint-disable react-hooks/rules-of-hooks */
'use client';
import Image from 'next/image';
import React, { ReactNode, useEffect, useState } from 'react';

function page() {
  const [nome, setNome] = useState('');
  const [nomeError, setNomeError] = useState('');
  const [novoConteudo, setNovoConteudo] = useState('');
  const [listaConteudo, setListaConteudo] = useState<String[]>([]);
  const [listaConteudoError, setListaConteudoError] = useState('');
  const [linkCatalogo, setLinkCatalogo] = useState('');
  const [linkCatalogoError, setLinkCatalogoError] = useState('');
  const [image, setImage] = useState<string | null>(null);
  const [imageError, setImageError] = useState('');
  const [pdf, setPdf] = useState<string | null>(null);
  const [pdfError, setPdfError] = useState<string | null>(null);

  function handleNome(event: React.ChangeEvent<HTMLInputElement>) {
    setNome(event.target.value);
    setNomeError('');
  }

  function addConteudo() {
    if (novoConteudo != '') {
      setListaConteudo(listaConteudo.concat(novoConteudo));
      setNovoConteudo('');
      setListaConteudoError('');
    } else {
      setListaConteudoError('Conteúdo em branco');
    }
  }

  function removeConteudo(index: number) {
    let novalista = listaConteudo.slice();
    novalista.splice(index, 1);
    setListaConteudo(novalista);
  }

  function handleImageUpload(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    const fileName = file?.name;
    const fileExtension = fileName
      ?.substring(fileName.lastIndexOf('.') + 1)
      .toLocaleLowerCase();
    if (fileExtension != ('png' || 'jpg' || 'jpeg')) {
      setImageError('Formato não suportado');
      return;
    }

    if (file && pdfError != '') {
      const imageURL = URL.createObjectURL(file);
      setImage(imageURL);
      setImageError('');
    }
  }

  function handlePdfUpload(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    const fileName = file?.name;
    const fileExtension = fileName
      ?.substring(fileName.lastIndexOf('.') + 1)
      .toLocaleLowerCase();
    if (fileExtension != 'pdf') {
      setPdfError('Formato não suportado');
      return;
    }
    if (file) {
      const pdfURL = URL.createObjectURL(file);
      setPdf(pdf);
      setPdfError('');
    }
  }

  function handleLink(event: React.ChangeEvent<HTMLInputElement>) {
    const link = event.target.value;
    const urlRegex = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i;
    const isValidUrl = urlRegex.test(link);
    setLinkCatalogo(link);

    if (isValidUrl) {
      setLinkCatalogoError('');
    } else {
      setLinkCatalogoError('Link Inválido');
    }
  }

  function handleValidate() {
    let validate = true;

    if (nome == '') {
      setNomeError('Defina um nome');
    }
    if (listaConteudo.length == 0) {
      setListaConteudoError('Adicione uma lista de conteúdo para pesquisa');
      validate = false;
    } else {
      setListaConteudoError('');
    }

    if (image == '' || image == null) {
      setImageError('Adicione um logotipo para o catálogo');
    }
    if (
      (nomeError ||
        listaConteudoError ||
        linkCatalogoError ||
        imageError ||
        pdfError) != ''
    ) {
      validate = false;
    }
  }

  const DivError = (props: { mensagem: string | null }) => (
    <div className='text-end text-red-500 text-sm'>{props.mensagem}</div>
  );
  return (
    <div className='flex flex-col justify-center items-center'>
      <div className='w-full md:max-w-[40rem] duration-500'>
        <h1 className='text-center text-2xl md:text-3xl my-5 md:my-10'>
          Cadastrar um novo catálogo
        </h1>
        <div className='bg-slate-200 py-3 px-3 md:px-5 rounded-md flex flex-col gap-2 text-xl'>
          {/* Nome */}
          <div className='flex flex-col gap-2 justify-between'>
            <label> Nome </label>
            <input
              type='text'
              className='border border-slate-500 rounded grow max-w-2xl'
              value={nome}
              onChange={handleNome}
            />
            <DivError mensagem={nomeError} />
          </div>

          {/* Conteúdo */}
          <div className='flex flex-col gap-2 justify-between'>
            <label> Conteúdo </label>
            <div className='flex gap-2 grow'>
              <input
                type='text'
                className='border border-slate-500 rounded grow px-2'
                value={novoConteudo}
                onChange={(event) => setNovoConteudo(event.target.value)}
              />
              <button
                className='btn-primary px-2 rounded-lg'
                onClick={() => addConteudo()}
              >
                +
              </button>
            </div>
            <DivError mensagem={listaConteudoError} />

            <ul
              className={`${
                listaConteudo.length > 0 ? 'border border-slate-500' : ''
              } rounded list-disc`}
            >
              {listaConteudo.map((item, index) => (
                <li
                  key={index}
                  className={`flex gap-2 p-1 text-sm ${
                    index % 2 == 0 ? 'bg-slate-50 rounded' : ''
                  }`}
                >
                  <div className='grow px-2'>{item}</div>
                  <button
                    onClick={() => removeConteudo(index)}
                    className='btn-danger px-2 rounded-lg'
                  >
                    x
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Catálogo */}
          <div className='flex flex-col gap-2 justify-between'>
            <label> Catalogo ( Link ) </label>
            <input
              type='text'
              className='border border-slate-500 rounded grow max-w-2xl'
              value={linkCatalogo}
              onChange={handleLink}
            />
            <DivError mensagem={linkCatalogoError} />
          </div>

          {/* Logotipo */}
          <div className='flex flex-col gap-2'>
            <label> Logotipo </label>
            <div className='flex justify-center align-middle'>
              <div
                className='relative w-[12rem] h-[12rem] rounded border border-slate-500'
                hidden={!image}
              >
                {image && (
                  <Image
                    src={image}
                    alt='Logotipo'
                    fill
                    style={{ objectFit: 'contain' }}
                  />
                )}
              </div>
            </div>
            <input
              type='file'
              className=' rounded grow'
              onChange={handleImageUpload}
            />
            <DivError mensagem={imageError} />
          </div>

          {/* Pdf */}
          <div className='flex flex-col gap-2'>
            <label> Pdf </label>
            <input
              type='file'
              className=' rounded grow'
              onChange={handlePdfUpload}
            />
            <DivError mensagem={pdfError} />
          </div>

          <div className='flex justify-center p-2'>
            <button
              className='p-2 btn-primary rounded-3xl min-w-[10rem]'
              onClick={() => handleValidate()}
            >
              Enviar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default page;

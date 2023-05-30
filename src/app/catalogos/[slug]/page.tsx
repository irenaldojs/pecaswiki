'use client';

import Iframe from 'react-iframe';

async function getCatalogById({ id }: { id: string }) {
  const res = await fetch(
    `http://localhost:3000/api/catalogos?id=${id}`,
    {}
  ).then((res) => res.json());
  return res;
}

async function Page({ params }: { params: { slug: string } }) {
  const catalog = await getCatalogById({ id: params.slug });

  console.log('dados', catalog, params.slug);

  return <Iframe url={catalog.catalogo ?? ''} className='iframe' />;
}

export default Page;

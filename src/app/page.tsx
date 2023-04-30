import Card from '@/components/Card';
import { catalogs } from '@prisma/client';
import useSWR from 'swr';

interface CatalogProps {
  catalogs: catalogs[];
}

async function getCatalogs() {
  const res = await fetch('http://localhost:3000/api/catalogos', {
    next: {
      revalidate: 10,
    },
  });
  return res.json();
}

async function Home() {
  const catalogs = await getCatalogs();

  console.log(catalogs);

  return (
    <main className='flex flex-wrap md:justify-center gap-5 px-5'>
      {catalogs.map((catalog: any) => {
        return (
          <div key={catalog.id}>
            <Card
              index={catalog.id}
              nome={catalog.nome}
              conteudo={JSON.stringify(catalog.conteudo) ?? ''}
              externo={catalog.externo ?? ''}
              img={catalog.img ?? ''}
              pdf={catalog.pdf ?? ''}
            />
          </div>
        );
      })}
    </main>
  );
}

export default Home;

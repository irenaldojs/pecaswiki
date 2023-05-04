import Card from '@/components/Card';
import { catalogs } from '@prisma/client';
import Providers from '@/components/Providers';

interface CatalogProps {
  catalogs: catalogs[];
}

async function getCatalogs() {
  const res = await fetch('http://localhost:3000/api/catalogos', {
    next: {
      revalidate: 10,
    },
  }).then((res) => res.json());

  return res;
}

async function Home() {
  const catalogs = await getCatalogs();

  if (catalogs == null) return <div>Carregando</div>;

  return (
    <Providers>
      <main className='flex flex-wrap md:justify-center gap-5 px-5'>
        {catalogs.map((catalog: any) => {
          return (
            <div key={catalog.id} className='md:w-[18rem] w-full duration-200'>
              <Card
                id={catalog.id}
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
    </Providers>
  );
}

export default Home;

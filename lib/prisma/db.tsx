import prisma from '.';

export interface Catalog {
  id?: number;
  nome: String;
  conteudo?: object;
  img?: string;
  pdf?: string;
  catalogo?: string;
  externo?: string;
}

export async function getAllCatalogs() {
  const data = await prisma.catalogs.findMany();
  return data;
}

export async function getById(id: string) {
  const data = await prisma.catalogs.findUnique({
    where: {
      id: parseInt(id),
    },
  });
  return data ?? {};
}

export async function createCatalog(catalog: Catalog) {
  await prisma.catalogs.create({
    data: {
      nome: catalog.nome.toString(),
      conteudo: catalog.conteudo
        ? JSON.parse(catalog.conteudo.toString())
        : null,
      externo: catalog.externo ? catalog.externo.toString() : '',
      catalogo: catalog.catalogo ? catalog.catalogo.toString() : '',
      img: catalog.img ? catalog.img.toString() : '',
      pdf: catalog.pdf ? catalog.pdf.toString() : '',
    },
  });
}

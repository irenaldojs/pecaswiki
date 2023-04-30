import { NextResponse } from 'next/server';
import { getAllCatalogs, getById } from '../../../../lib/prisma/db';
import { URL } from 'next/dist/compiled/@edge-runtime/primitives/url';

export async function GET(request: Request) {
  let catalogos = {};
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');

  if (id) {
    catalogos = await getById(id);
  } else {
    catalogos = await getAllCatalogs();
  }

  return NextResponse.json(catalogos);
}

'use server';

import fs from 'fs-extra';
import { File } from 'buffer';

export const copyPdf = async (file: File) => {
  const filePath = __dirname + '/pdf/' + file.name;
  const buffer = await file.arrayBuffer();
  const arquivoBuffer = Buffer.from(buffer);
  await fs
    .writeFile(filePath, arquivoBuffer)
    .then((ok) => {
      console.log('Pdf ok', filePath);
    })
    .catch((err) => {
      console.log('Pdf Erro', err);
    });
};

export const copyLogo = async (file: File) => {
  const filePath = __dirname + '/logo/' + file.name;
  const buffer = await file.arrayBuffer();
  const arquivoBuffer = Buffer.from(buffer);
  await fs
    .writeFile(filePath, arquivoBuffer)
    .then((ok) => {
      console.log('Logo ok', filePath);
    })
    .catch((err) => {
      console.log('Logo Erro', err);
    });
};

import NavBar from './NavBar';
import './globals.css';

import { Roboto } from 'next/font/google';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700', '900'],
});

export const metadata = {
  title: 'Peças Wiki',
  description: 'Maior acervo de catálogos para autopeças linha leve.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='pt' className='min-h-full no-scrollbar'>
      <body
        className={
          roboto.className + ' bg-gradient-to-t from-[#AAB7B8] h-screen'
        }
      >
        <NavBar />
        <div className='mt-[5rem] px-1 h-full'>{children}</div>
      </body>
    </html>
  );
}

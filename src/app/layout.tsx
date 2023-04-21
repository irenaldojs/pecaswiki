import NavBar from './NavBar';
import './globals.css';

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
    <html lang='pt' className='min-h-full'>
      <body className='min-h-fit bg-gradient-to-t from-[#AAB7B8]'>
        <NavBar />
        <div className='mt-20'>{children}</div>
      </body>
    </html>
  );
}

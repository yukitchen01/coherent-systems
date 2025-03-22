import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
import Navbar from '@/app/ui/dashboard/navbar';
import Footer from '@/app/ui/dashboard/footer';


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>株式会社コヒーレントシステムズ</title>
        <meta name="google-site-verification" content="YnlGmTyEYBOZ4T2ejfQ7Bq40LxdERdvb3jzn0VwJN14" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <Navbar />
        {children}
        <Footer/>
        </body>
    </html>
  );
}

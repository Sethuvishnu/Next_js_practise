import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
import { lusitana } from '@/app/ui/fonts';


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) { 
  return (
    <html lang="en">
    <body className={`${lusitana.className} antialiased`}>{children}</body>  
    {/* 
    antialiased = smooth text edges for better readability   
    lusitana is an object
    and conceptually all font object has only one class

    
    
    
    
    */}
    </html>
  );
}

import '@styles/globals.css';
import { Navbar } from '@components/navbar/Navbar';


export const metadata = {
  title: "Prfec AI",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar/>
        {children}
      </body>
    </html>
  );
}

import '@styles/globals.css';
import { Navbar } from '@components/navbar/Navbar';
import { Footer } from '@components/footer/Footer';
import { AuthContextProvider } from '@context/AuthContext';
import ConditionalFooter from '@components/footer/ConditionalFooter';
import ConditionalNavbar from '@components/navbar/ConditionalNavbar';

// export const metadata = {
//   title: "Prfec AI",
//   description: "",
// };

export default function RootLayout({ children}) {

  return (
    <html lang="en">
      <body>
        <AuthContextProvider>
        <ConditionalNavbar /> 
        {children}
          <ConditionalFooter /> 
        </AuthContextProvider>
      </body>
    </html>
  );
}

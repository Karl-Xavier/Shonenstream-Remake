import Footer from "../component/Footer/Footer";
import Navbar from "../component/Navbar/Navbar";
import "../globals.css";
import { AuthProvider } from "../utils/context/authContext";

export const metadata = {
  title: "Watch and Download anime for free on Shonenstream | HD Anime for free",
  description: "Watch HD Anime for free on Shonenstream",
  keywords: 'anime, shonenstream, shonen stream, vercel, stream, free anime'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <Navbar/>
          <main className="container">
            {children}
          </main>
          <Footer/>
        </AuthProvider>
      </body>
    </html>
  );
}
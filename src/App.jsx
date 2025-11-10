import { ThemeProvider } from "./Context/Themecontext"; // ✅ CORRECT
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Pages/Hero/Hero";
import WhyUs from "./Pages/Why Us/Why-Us";
import Programs from "./Pages/Programs/Programs";
import Contact from "./Pages/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Results from "./Pages/Results/Results";
import Blog from "./Pages/Blog/Blog";
import About from "./Pages/About/About";
import CustomCursor from "./Components/customcursor/Customcursor";

export default function App() {
  return (
    <ThemeProvider>
      <div className="bg-gradient-to-br from-white to-gray-500 dark:from-gray-700 dark:to-gray-800 min-h-screen font-Rounded transition-colors duration-500">
        <Navbar />
        
        <main>
          <CustomCursor />
          <section id="home"><Hero /></section>
          <section id="whyus"><WhyUs /></section>
          <section id="about"><About /></section>
          <section id="programs"><Programs /></section>
          <section id="results"><Results /></section>
          <section id="blog"><Blog /></section>
          <section id="contact"><Contact /></section>
          <section id="demo">{/* Demo section for CTA button if needed */}</section>
        </main>
        
        <Footer />
      </div>
    </ThemeProvider>
  );
}

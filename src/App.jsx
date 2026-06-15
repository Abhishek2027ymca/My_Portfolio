// import Navbar from './components/Navbar'
// import Footer from './components/Footer'
// import ScrollToTop from './components/ScrollToTop'
// import CustomCursor from './components/CustomCursor'
// import SectionDivider from './components/SectionDivider'
// import Hero from './sections/Hero'
// import About from './sections/About'
// import Projects from './sections/Projects'
// import Skills from './sections/Skills'
// import Experience from './sections/Experience'
// import Achievements from './sections/Achievements'
// import Contact from './sections/Contact'

// function App() {
//   return (
//     <div style={{ minHeight: '100vh', backgroundColor: '#05060A', color: '#F5F7FA' }}>
//       <CustomCursor />
//       <Navbar />
//       <main>
//         <Hero />
//         <SectionDivider />
//         <About />
//         <SectionDivider />
//         <Projects />
//         <SectionDivider />
//         <Skills />
//         <SectionDivider />
//         <Experience />
//         <SectionDivider />
//         <Achievements />
//         <SectionDivider />
//         <Contact />
//       </main>
//       <Footer />
//       <ScrollToTop />
//     </div>
//   )
// }

// export default App



import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import CustomCursor from './components/CustomCursor'
import StarBackground from './components/StarBackground'
import SectionDivider from './components/SectionDivider'
import Hero from './sections/Hero'
import About from './sections/About'
import Projects from './sections/Projects'
import Skills from './sections/Skills'
import Experience from './sections/Experience'
import Achievements from './sections/Achievements'
import Contact from './sections/Contact'

function App() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#05060A', color: '#F5F7FA' }}>
      <CustomCursor />
      <StarBackground />
      <Navbar />
      <main style={{ position: 'relative', zIndex: 1 }}>
        <Hero />
        <SectionDivider />
        <About />
        <SectionDivider />
        <Projects />
        <SectionDivider />
        <Skills />
        <SectionDivider />
        <Experience />
        <SectionDivider />
        <Achievements />
        <SectionDivider />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  )
}

export default App
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import RecommendedArticles from './components/RecommendedArticles'
import TrendingGames from './components/TrendingGames'
import WhatsNew from './components/WhatsNew'

function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <TrendingGames />
      <RecommendedArticles />
      <WhatsNew />
      <Footer />
    </>
  )
}

export default App

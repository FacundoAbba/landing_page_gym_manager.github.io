import { ChartShowcase } from './components/ChartShowcase'
import { Evolution } from './components/Evolution'
import { FeatureGrid } from './components/FeatureGrid'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'

function App() {
  return (
    <div className="min-h-svh bg-white text-slate-900 antialiased dark:bg-slate-950 dark:text-slate-100">
      <Header />
      <main>
        <Hero />
        <Evolution />
        <FeatureGrid />
        <ChartShowcase />
      </main>
      <Footer />
    </div>
  )
}

export default App

import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col justify-between">
      <Navbar />
      <main className="flex-1">
        {/* Sections will be composed here */}
      </main>
      <Footer />
    </div>
  )
}

export default App

import Navbar from "./components/Navbar/Navbar"
import Carousel from "./components/Carousel/Carousel"

function App() {
  
  return (
    <>
      <Navbar />
      <div className="center-container">
      <h1>Featured Products</h1>
      <p>Explore and Discover a variety of Products</p></div>
      <Carousel />
    </>
  )
}

export default App

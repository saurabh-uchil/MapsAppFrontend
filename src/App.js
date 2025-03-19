import "./App.css"
import Map from "./Components/Maps"
import Navbar from "./Components/Navbar"
export default function App() {
  return (
    <div>
      <Navbar />
      <div className="content">
        <Map />
    </div>
    </div>
    
  )
}

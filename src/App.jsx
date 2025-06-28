import { Route, Routes } from "react-router-dom"
import MainLayout from "./layouts/MainLayout"
import PublicRoutes from "./routes/PublicRoutes"

function App() {

  return (
    <>
    <Routes>
      <Route path="/*" element={<PublicRoutes />} />
    </Routes>
    </>
  )
}

export default App

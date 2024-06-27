import { Routes , Route, Navigate } from "react-router-dom"
import Home from "../pages/Home"
import SaberMas from "../pages/SaberMas/index "
import ZapatosHombre from "../pages/Zapatos/ZapatosHombre/index "
import ZapatoMujer from "../pages/Zapatos/ZapatosMujer/index "
import ZapatosNiños from "../pages/Zapatos/ZapatosNiño/index "
import About from "../pages/About"

export const AppRouter = () => {
    return (
        <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/sabermas" element={<SaberMas />} />
            <Route path="/zapatoshombre" element={<ZapatosHombre />} />
            <Route path="/zapatosmujer" element={<ZapatoMujer />} />
            <Route path="/zapatosniños" element={<ZapatosNiños />} />
            <Route path="/about" element={<About />} />

            <Route path="/*" element={ <Navigate to="/Home"/>} />
        </Routes>
    )
}


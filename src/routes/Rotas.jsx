import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login/Login";
import ErroPagina from "../pages/err/ErroPagina"
import Dashboard from "../pages/Dashboard/Dashboard"

export default function Rotas(){
    return(
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="*" element={<ErroPagina />} />
            <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
    )
}
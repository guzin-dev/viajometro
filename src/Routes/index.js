import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";

import Home from "../pages/home";
import Countrys from "../pages/Countrys";
import Country from "../pages/Country";

const Rotas = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Home />} path="/" />
                <Route element={<Countrys />} path="/countrys"></Route>
                <Route element={<Country />} path="/countrys/:countryId"></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas;
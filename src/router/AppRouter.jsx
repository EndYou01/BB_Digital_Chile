import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";

import Footer from "../components/footer/Footer.jsx";
import Header from "../components/header/Header.jsx";
import IndexPage from "../pages/IndexPage.jsx";
import ProductPage from "../pages/ProductPage.jsx";

export const AppRouter = () => {
    return (
            <BrowserRouter>
                <Header />

                <Routes>
                    <Route path='/*' element={<IndexPage />} />
                    <Route path='/:productId' element={<ProductPage />} />
                </Routes>

                <Footer />
            </BrowserRouter>
    )
}

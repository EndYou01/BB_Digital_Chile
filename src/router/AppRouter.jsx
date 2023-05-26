import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import IndexPage from "../pages/IndexPage";
import ProductPage from "../pages/ProductPage";



export const AppRouter = () => {
    return (
            <BrowserRouter>
                <Header />

                <Routes>
                    <Route path='/*' element={<IndexPage />} />
                    <Route path='/product_page' element={<ProductPage />} />
                </Routes>

                <Footer />
            </BrowserRouter>
    )
}

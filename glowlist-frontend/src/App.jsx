import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import Produk from "./pages/Produk";
import Kategori from "./pages/Kategori";
import Tentang from "./pages/Tentang";
import AddProduk from "./pages/AddProduk";
import EditProduk from "./pages/EditProduk";

export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="header" element={<Header />} />
      <Route path="sidebar" element={<Sidebar />} />
      <Route path="produk" element={<Produk />} />
      <Route path="kategori" element={<Kategori />} />
      <Route path="tentang" element={<Tentang />} />
      <Route path="produk/tambah" element={<AddProduk />} />
      <Route path="produk/edit/:id" element={<EditProduk />} />
      </Route>
    </Routes>
    </BrowserRouter>
  );
}
import {Routes, Route, Router} from 'react-router-dom';
import Index from "./pages/index/Index";
import Layout from "./layout/Layout";
import "./styles/main.css"

export default function App() {
    return (
        <Routes>
            <Route element={<Layout/>}>
                <Route path={"/"} element={<Index />} />
                <Route path={"/test"} element={<div>안녕하세요</div>} />
            </Route>
        </Routes>
    )
}
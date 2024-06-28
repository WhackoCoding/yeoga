import {Routes, Route, Router} from 'react-router-dom';
import Index from "./pages/index/Index";
import Layout from "./layout/Layout";
import "./styles/main.css"
import {Sub1} from "./pages/search/Sub1";

export default function App() {
    return (
        <Routes>
            <Route element={<Layout/>}>
                <Route path={"/"} element={<Index />} />
                <Route path={"/test"} element={<div>안녕하세요</div>} />
                <Route path={"/search/:locate"} element={<Sub1 />} /> /*콜론을 통해서 url처럼 구분해서 넣을 수 있게함*/
            </Route>
        </Routes>
    )
}
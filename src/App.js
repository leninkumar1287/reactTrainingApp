import Nav from "./components/Nav";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from "./components/Home";
import Contact from "./components/Contact";
import Category from "./components/Category";
import Posts from "./components/Posts";
import Users from "./components/Users";
import Comments from "./components/Comments";
import Albums from "./components/Albums";
import Todos from "./components/Todos";
import Photos from "./components/Photos";
import Products from "./components/Products";
import UpdateProductDetail from "./components/UpdateProductDetails"
function App() {
  return (
    <div>
      <Router>
        <Nav />
        <section className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/category/:cn" element={<Category />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/posts" element={<Posts />} />
            <Route path="/users" element={<Users />} />
            <Route path="/comments" element={<Comments />} />
            <Route path='/albums' element={<Albums />} />
            <Route path='/todo' element={<Todos />} />
            <Route path='/photos' element={<Photos />} />
            <Route path='/products' element={<Products />} />
            <Route path='/edit/:cn' element={< UpdateProductDetail />} />


          </Routes>
        </section>
      </Router>
    </div>
  );
}

export default App;

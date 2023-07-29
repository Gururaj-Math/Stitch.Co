  // json-server -w -p (portno) path

import banner from "./assets/banner.png";
import { createSignal } from "solid-js";
import { Routes, Route, A } from "@solidjs/router";
import Home from './pages/Home'
import Cart from './pages/Cart'
import Product from "./pages/Product";
import { useCartContext } from "./context/CartContext";
import Footer from "./components/Footer";
import Shirts from "./pages/Shirts";
import Jeans from "./pages/Jeans";
import Sproduct from "./pages/Sproduct"
import Jproduct from "./pages/Jproduct"
import Order from "./components/Order";

function App() {
  const [darkTheme, setDarkTheme] = createSignal(false);

  const toggleTheme = () => {
    setDarkTheme(!darkTheme());
  };

  const { items } = useCartContext()

  const quantity = () => {
    return items.reduce((acc, current)=>{
      return acc + current.quantity
    }, 0)
  }

  return (
    <div class="conatiner m-auto font-custom">
      <header 
      class="my-4 p-2 text-xl flex items-center justify-between rounded-xl "
      classList={{"bg-neutral-900": darkTheme(), "text-white": darkTheme()}}
      >
      <div class="flex items-center gap-4">
        <span
          class="material-symbols-outlined cursor-pointer"
          onclick={toggleTheme}
        >
          light_mode
        </span>
        <h1 class="text-4xl font-bold tracking-wider">Stitch.Co</h1>
        </div>
        <div class="flex items-center gap-10 mx-5">
        <A href="/">Home</A>
        <A href="/shirts">Shirts</A>
        <A href="/jeans">Jeans</A>
        <A href="/cart">Cart ({quantity()})</A>
        </div>
      </header>
      
      <img class="rounded-xl w-full " src={banner}> </img>
      <Routes>
        <Route path="/" component={Home}></Route>
        <Route path="/cart" component={Cart}></Route>
        <Route path="/shirts" component={Shirts}></Route>
        <Route path="/jeans" component={Jeans}></Route>
        <Route path="/product/:id" component={Product}></Route>
        <Route path="/Sproduct/:id" component={Sproduct}></Route>
        <Route path="/Jproduct/:id" component={Jproduct}></Route>
        <Route path="/order" component={Order}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

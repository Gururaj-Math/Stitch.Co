  // json-server -w -p (portno) path

import banner from "./assets/banner.png";
import { createSignal } from "solid-js";
import { Routes, Route, A } from "@solidjs/router";
import Home from './pages/Home'
import Cart from './pages/Cart'
import Product from "./pages/Product";
import { useCartContext } from "./context/CartContext";

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
        <h1 class="text-2xl">Clothing Shop</h1>
        </div>
        <div class="flex items-center gap-10 mx-5">
        <A href="/">Home</A>
        <A href="/cart">Cart ({quantity()})</A>
        </div>
      </header>

      <img class="rounded-xl w-full " src={banner}></img>

      <Routes>
        <Route path="/" component={Home}></Route>
        <Route path="/cart" component={Cart}></Route>
        <Route path="/product/:id" component={Product}></Route>
      </Routes>
    </div>
  );
}

export default App;

import banner from "./assets/banner.png";
import { createSignal } from "solid-js";
import { Routes, Route, A } from "@solidjs/router";
import Home from './pages/Home'
import Cart from './pages/Cart'

function App() {
  const [darkTheme, setDarkTheme] = createSignal(false);

  const toggleTheme = () => {
    setDarkTheme(!darkTheme());
  };

  return (
    <div class="conatiner m-auto font-custom">
      <header 
      class="my-4 p-2 text-xl flex items-center gap-4 rounded-xl"
      classList={{"bg-neutral-900": darkTheme(), "text-white": darkTheme()}}
      >
        <span
          class="material-symbols-outlined cursor-pointer"
          onclick={toggleTheme}
        >
          light_mode
        </span>
        <h1 class="text-2xl">Clothing Shop</h1>
        <A href="/">Home</A>
        <A href="/cart">Cart</A>
      </header>
      <img class="rounded-xl w-full " src={banner}></img>

      <Routes>
        <Route path="/" component={Home}></Route>
        <Route path="/cart" component={Cart}></Route>
        <Route path="/" component={Home}></Route>
      </Routes>
    </div>
  );
}

export default App;

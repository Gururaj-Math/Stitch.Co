import Card from "./components/Card";
import banner from "./assets/banner.png"

function App() {
  return (
    <div class="conatiner m-auto font-custom">
      <header>
        <h1 class="text-4xl">Clothing Shop</h1>
      </header>
      <img class="rounded-xl w-full" src={banner}></img>
      <div class="grid grid-cols-4 gap-10 my-4">
      <Card />
      <Card />
      <Card />
      </div>

    </div>
  );
}

export default App;

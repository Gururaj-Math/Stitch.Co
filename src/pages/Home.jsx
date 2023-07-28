import { createResource } from "solid-js"
import Card from "../components/Card"

const Home = () => {

    const fetchProducts = async ()=>{
        const res = await fetch(' http://localhost:4000/products')

        return res.json()
    }

    const [products] = createResource(fetchProducts)

  return (
    <Show when={products()} fallback={<p>Loading...</p>}>
      <div class="grid grid-cols-4 gap-10 m-auto my-4">
    
        <For each={products()}>
            {(product) => (
                <Card>
                    <img src={product.img} />
                    <h2 class="my-3 font-bold">
                        {product.title}
                    </h2>
                    <button class="btn"> Add To Cart </button>
                </Card>
            )}
        </For>

        <p>{console.log(products(), products.loading)}</p>

      </div>
    </Show>
  )
}

export default Home

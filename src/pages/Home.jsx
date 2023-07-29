import { createResource } from "solid-js"
import Card from "../components/Card"
import { A } from '@solidjs/router'

const Home = () => {

    const fetchProducts = async ()=>{
        const res = await fetch(' http://localhost:4000/products')

        return res.json()
    }

    const [products] = createResource(fetchProducts)

  return (
    <Show when={products()} fallback={<p>Loading...</p>}>
    <h1 class="my-8 text-center text-2xl border-gray-100 border-b-4 pb-4">Trending Products</h1>
      <div class="grid grid-cols-4 gap-10 m-auto my-4">
    
        <For each={products()}>
            {(product) => (
                <Card>
                    <img src={product.img} class="rounded-xl"/>
                    <h2 class="my-3 font-bold">
                        {product.title}
                    </h2>
                    <A href={`/product/${product.id}`} class="btn">View Product</A>
                </Card>
            )}
        </For>
        <p>{console.log(products(), products.loading)}</p>
      </div>
    </Show>
  )
}

export default Home

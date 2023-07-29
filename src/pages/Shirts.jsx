import { createResource } from "solid-js"
import Card from "../components/Card"
import { A } from '@solidjs/router'

const Shirts = () => {

    const fetchShirts = async ()=>{
        const res = await fetch('http://localhost:4000/Shirts')

        return res.json()
    }

    const [shirts] = createResource(fetchShirts)

  return (
    <Show when={shirts()} fallback={<></>}>
    <h1 class="my-8 text-center text-2xl border-gray-100 border-b-4 pb-4">Men's Shirts</h1>
      <div class="grid grid-cols-4 gap-10 m-auto my-4">
        <For each={shirts()}>
            {(shirts) => (
                <Card>
                    <img src={shirts.img} class="rounded-xl"/>
                    <h2 class="my-3 font-bold">
                        {shirts.title}
                    </h2>
                    <A href={`/Sproduct/${shirts.id}`} class="btn">View Product</A>
                </Card>
            )}
        </For>

        <p>{console.log(shirts(), shirts.loading)}</p>

      </div>
    </Show>
  )
}

export default Shirts

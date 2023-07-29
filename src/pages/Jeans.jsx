import { createResource } from "solid-js"
import Card from "../components/Card"
import { A } from '@solidjs/router'

const Jeans = () => {

    const fetchJeans = async ()=>{
        const res = await fetch('http://localhost:4000/Jeans')

        return res.json()
    }

    const [jeans] = createResource(fetchJeans)

  return (
    <Show when={jeans()} fallback={<p>Loading...</p>}>
    <h1 class="my-8 text-center text-2xl border-gray-100 border-b-4 pb-4">Men's Jeans</h1>
      <div class="grid grid-cols-4 gap-10 m-auto my-4">
    
        <For each={jeans()}>
            {(jeans) => (
                <Card>
                    <img src={jeans.img} class="rounded-xl"/>
                    <h2 class="my-3 font-bold">
                        {jeans.title}
                    </h2>
                    <A href={`/Jproduct/${jeans.id}`} class="btn">View Product</A>
                </Card>
            )}
        </For>

        <p>{console.log(jeans(), jeans.loading)}</p>

      </div>
    </Show>
  )
}

export default Jeans

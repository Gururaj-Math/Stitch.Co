import { createResource } from "solid-js"
import Card from "../components/Card"
import { A } from '@solidjs/router'

const Jeans = () => {

    const fetchJeans = async ()=>{
        const res = await fetch('http://localhost:4000/Jeans')

        return res.json()
    }

    const [Jeans] = createResource(fetchJeans)

  return (
    <Show when={Jeans()} fallback={<p>Loading...</p>}>
      <div class="grid grid-cols-4 gap-10 m-auto my-4">
    
        <For each={Jeans()}>
            {(Jeans) => (
                <Card>
                    <img src={Jeans.img} />
                    <h2 class="my-3 font-bold">
                        {Jeans.title}
                    </h2>
                    <A href={`/Jeans/${Jeans.id}`} class="btn">View Product</A>
                </Card>
            )}
        </For>

        <p>{console.log(Jeans(), Jeans.loading)}</p>

      </div>
    </Show>
  )
}

export default Jeans

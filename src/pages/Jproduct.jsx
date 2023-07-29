import {useParams} from '@solidjs/router'
import { createResource, createSignal } from 'solid-js'
import { useCartContext } from '../context/CartContext'

const fetchJeans = async (id)=>{
    const res = await fetch(`http://localhost:4000/Jeans/${id}`)

    return res.json()
}

const Jproduct = () => {
    const params = useParams()

    const [jeans] = createResource(params.id, fetchJeans)

    const { items, setItems } = useCartContext()

    const [ adding, setAdding ] = createSignal(false)

    const addJeans = () =>{

        setAdding(true)
        setTimeout(() => setAdding(false), 2000)
        //check if product exists
        const exists = items.find(j => j.id === jeans().id)

        if(exists){
            //increase quantity of product
            setItems(j => j.id ===  jeans().id, "quantity", q => q + 1)
        }
        if(!exists){
            setItems([...items, {...jeans(), quantity: 1}])
        }
    }
  return (
    <div class='my-7 '>   
        <Show when={jeans()} fallback={<p>Loading...</p>}>
            <div class="grid grid-cols-5 gap-10 bg-white rounded-xl shadow-sm shadow-offset border-4 border-gray-100">
                <div class="col-span-1">
                    <img src={jeans().img} class='h-80 rounded-xl'/>
                </div>

                <div class='col-span-3 ml-4 mt-4'>
                    <h2 class='text-3xl font-bold mb-5'>{jeans().title}</h2>
                    <p>{jeans().description}</p>
                    <p class='my-4 text-2xl'>Only ${jeans().price}</p>
                    <button class='btn' onclick={addJeans} disabled={adding()}>Add To Cart</button>

                    <Show when={adding()}>
                        <div class='m-2 p-2 border-amber-500 border-2 rounded-md inline-block font-bold'>
                            {jeans().title} Was Added To Your Cart!
                        </div>
                    </Show> 
                </div>
            </div>
        </Show>
    </div>
  )
}

export default Jproduct

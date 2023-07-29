import {useParams} from '@solidjs/router'
import { createResource, createSignal } from 'solid-js'
import { useCartContext } from '../context/CartContext'

const fetchShirts = async (id)=>{
    const res = await fetch(`http://localhost:4000/shirts/${id}`)

    return res.json()
}

const Sproduct = () => {
    const params = useParams()

    const [shirts] = createResource(params.id, fetchShirts)

    const { items, setItems } = useCartContext()

    const [ adding, setAdding ] = createSignal(false)

    const addShirt = () =>{

        setAdding(true)
        setTimeout(() => setAdding(false), 400)
        //check if product exists
        const exists = items.find(s => s.id === shirts().id)

        if(exists){
            //increase quantity of product
            setItems(s => s.id ===  shirts().id, "quantity", q => q + 1)
        }
        if(!exists){
            setItems([...items, {...shirts(), quantity: 1}])
        }
    }
  return (
    <div class='my-7 '>   
        <Show when={shirts()} fallback={<p>Loading...</p>}>
            <div class="grid grid-cols-5 gap-10 bg-white rounded-xl shadow-sm shadow-offset border-4 border-gray-100">
                <div class="col-span-1">
                    <img src={shirts().img} class='h-80 rounded-xl'/>
                </div>

                <div class='col-span-3 ml-4 mt-4'>
                    <h2 class='text-3xl font-bold mb-5'>{shirts().title}</h2>
                    <p>{shirts().description}</p>
                    <p class='my-4 text-2xl'>Only ${shirts().price}</p>
                    <button class='btn' onclick={addShirt} disabled={adding()}>Add To Cart</button>

                    <Show when={adding()}>
                        <div class='m-2 p-2 border-amber-500 border-2 rounded-md inline-block font-bold'>
                            {shirts().title} Was Added To Your Cart!
                        </div>
                    </Show> 
                </div>
            </div>
        </Show>
    </div>
  )
}

export default Sproduct

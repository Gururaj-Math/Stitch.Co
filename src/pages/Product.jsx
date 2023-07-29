import {useParams} from '@solidjs/router'
import { createResource, createSignal } from 'solid-js'
import Loading from '../components/Loading'
import { useCartContext } from '../context/CartContext'

const fetchProduct = async (id)=>{
    const res = await fetch(`http://localhost:4000/products/${id}`)

    return res.json()
}

const Product = () => {
    const params = useParams()

    const [product] = createResource(params.id, fetchProduct)

    const { items, setItems } = useCartContext()

    const [ adding, setAdding ] = createSignal(false)

    const addProduct = () =>{

        setAdding(true)
        setTimeout(() => setAdding(false), 400)
        //check if product exists
        const exists = items.find(p => p.id === product().id)

        if(exists){
            //increase quantity of product
            setItems(p => p.id ===  product().id, "quantity", q => q + 1)
        }
        if(!exists){
            setItems([...items, {...product(), quantity: 1}])
        }
    }
  return (
    <div class='my-7 '>   
        <Show when={product()} fallback={<p>Loading...</p>}>
            <div class="grid grid-cols-5 gap-10 bg-white rounded-xl shadow-sm shadow-offset">
                <div class="col-span-1">
                    <img src={product().img} class='h-80 rounded-xl'/>
                </div>

                <div class='col-span-3 ml-4 mt-4'>
                    <h2 class='text-3xl font-bold mb-5'>{product().title}</h2>
                    <p>{product().description}</p>
                    <p class='my-4 text-2xl'>Only ${product().price}</p>
                    <button class='btn' onclick={addProduct} disabled={adding()}>Add To Cart</button>

                    <Show when={adding()}>
                        <div class='m-2 p-2 border-amber-500 border-2 rounded-md inline-block font-bold'>
                            {product().title} Was Added To Your Cart!
                        </div>
                    </Show> 
                </div>
            </div>
        </Show>
    </div>
  )
}

export default Product

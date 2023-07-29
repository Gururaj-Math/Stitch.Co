import Card from "../components/Card";
import { useCartContext } from "../context/CartContext";
import { A } from '@solidjs/router'

export default function Cart() {
  const { items } = useCartContext()

  const total = () => {
    return items.reduce((acc, p)=>{
      return acc + p.quantity *p.price
    },0)
  }

  return (
    <div class="max-w-44 my-8">
      <Card class='rounded-xl'>
        <h2 class="font-bold text-2xl bg-gray-100 mx-80 p-4 rounded-xl">Your Shopping Cart</h2>
        <Show when={items.length} fallback={<p class="text-xl mt-5">Your cart is empty ! <A href="/" class="text-amber-600">Check Out Products</A></p>}>
        <For each={items}>
            {(item) => (
              <div class="flex items-center border-b-2">
                <div class="ml-5 pb-4 pt-4">
                  <img src={item.img} class="h-52 rounded-xl"/>
                </div>
                <div class="flex flex-col items-start ml-10">
                  <h1 class="text-2xl">{item.title}</h1>
                  <p class="bg-amber-600 py-1 px-4 rounded-md text-white">${item.price}</p>
                  <p class="text-xl">Quantity : {item.quantity}</p>
                </div>
              </div>
            )}
          </For>
          <h1 class="mt-4 font-bold bg-gray-100 p-4 rounded-xl text-xl">Total Cart Price : ${total()} <A href="/order" class="bg-amber-600 px-4 py-2 rounded-xl my-4 text-white ml-2">Buy Now</A></h1>
        </Show>

      </Card>
    </div>
  )
}
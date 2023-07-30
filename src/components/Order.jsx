import Card from "../components/Card";
import { useCartContext } from "../context/CartContext";
import { A } from "@solidjs/router";

export default function Order() {
  const { items } = useCartContext();

  const total = () => {
    return items.reduce((acc, p) => {
      return acc + p.quantity * p.price;
    }, 0);
  };

  return (
    <div class="max-w-44 my-8">
      <Card class="rounded-xl">
        <h2 class="font-bold text-2xl bg-gray-100 mx-80 p-4 rounded-xl">
          Place Your Order Now
        </h2>
        <div>
                <div class="flex justify-center flex-col items-center mt-4 gap-7">
                <input type="text" placeholder="First Name" class="border-2 border-amber-600 px-4 py-2 rounded-xl w-96"/>
                <input type="text" placeholder="Last Name" class="border-2 border-amber-600 px-4 py-2 rounded-xl w-96"/>
                <input type="text" placeholder="Address" class="border-2 border-amber-600 px-4 py-2 rounded-xl w-96"/>
                <label class="text-xl">Select Payment Method</label>
                </div>
                <div class="flex justify-center items-center gap-10 my-5 h-20">
                  <input type="checkbox" id="gpay" class="hidden peer"/>
                  <label for="gpay">
                    <img
                      src="https://i.postimg.cc/kX5xfkfH/Nice-Png-pay-icon-png-7692873.png"
                      class="h-10 cursor-pointer"
                    />
                  </label>
                  <input type="checkbox" id="phonepe" class="hidden peer" />
                  <label for="phonepe">
                    <img
                      src="https://i.postimg.cc/9fGhKgL3/pngwing-com.png"
                      class="h-10 cursor-pointer"
                    />
                  </label>
                  <input type="checkbox" id="paypal" class="hidden peer" />
                  <label for="paypal">
                    <img
                      src="https://i.postimg.cc/BvQv50qY/pngwing-com-1.png"
                      class="h-10 cursor-pointer"
                    />
                  </label>
                </div>
              </div>
              <Show
          when={items.length}
          fallback={
            <p class="text-xl mt-5">
              Your cart is empty !{" "}
              <A href="/" class="text-amber-600">
                Check Out Products
              </A>
            </p>
          }
        >
          <For each={items}>
            {(item) => (
                <div class="rounded-xl">
                <p class="text-lg bg-gray-100 mx-96 p-3">
                  Item Details : {item.title} x {item.quantity}
                </p>
                </div>
            )}
          </For>
          <h1 class="text-lg bg-amber-600 text-white mx-96 p-3 rounded-xl mt-3 cursor-pointer hover:bg-amber-500 ">Place Order : ${total()}</h1>
        </Show>
      </Card>
    </div>
  );
}

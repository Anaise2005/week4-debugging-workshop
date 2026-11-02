const cart = [
  //Risky value: price was the string "1500". It worked only because * converts
  // strings to numbers, but "1500" + 2 gives "15002". Found it with typeof in the
  // Console. Fixed by storing the price as a number.
  { name: "Notebook", price: 1500, qty: 2 },
  { name: "Pen", price: 300, qty: 5 },
  { name: "Bag", price: 12000, qty: 1 },
]

function getSubtotal(items) {
  let subtotal = 0
   // Bug 1: loop condition used <=, so i reached 3 and items[3] was undefined.
  // Found it from the stack trace pointing at line 10, then confirmed in the
  // Console: cart.length was 3 and cart[3] was undefined.
  for (let i = 0; i < items.length; i++) {
    subtotal += items[i].price * items[i].qty
  }
  return subtotal
}

function getDiscount(subtotal) {
  // Bug 3: the > 10000 check came first, so every subtotal over 20000 also
  // matched it and returned 0.1. The > 20000 branch was unreachable. Found it
  // by testing getDiscount(25000) in the Console. Fixed by checking the larger
  // threshold first.
  if (subtotal > 20000) return 0.2
  else if (subtotal > 10000) return 0.1
  return 0
}

function getTotal(items) {
  const subtotal = getSubtotal(items)
  const discount = getDiscount(subtotal)
  // Bug 2: discount is a fraction (0.1 = 10%), but the code subtracted it as
  // money, giving 16499.9. Found it by comparing the output with my hand
  // calculation (14850), then testing getDiscount(16500) in the Console.
  const total = subtotal - subtotal*discount
  return total
}

console.log(getTotal(cart))
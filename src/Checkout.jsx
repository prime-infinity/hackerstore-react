import { useState } from "react"
import ProductList from "./components/ProductList"
import Cart from "./components/Cart"

const PRODUCTS = [
    {
      heading: "Cap - $10",
      name: "Cap",
      price: 10
    },
    {
      heading: "Hand Bag - $30",
      name: "HandBag",
      price: 30
    },
    {
      heading: "Shirt - $30",
      name: "Shirt",
      price: 30
    },
    {
      heading: "Shoes - $50",
      name: "Shoe",
      price: 50
    },
    {
      heading: "Pant - $40",
      name: "Pant",
      price: 40
    },
    {
      heading: "Slipper - $20",
      name: "Slipper",
      price: 20
    }
] 

const Checkout = () => {


    const [ products, updateProducts ] = useState(PRODUCTS.map((product, index) => {
      product.id = index + 1;
      product.image = `/images/items/${product.name.toLocaleLowerCase()}.png`;
      product.cartQuantity = 0;
      return product;
    }))

    const [ cart, updateCart ] = useState({
      subTotal: 0,
      totalPrice: 0,
    })

    const [discount, updateDiscount] = useState(0)

    const [cartItems, updateCartItems] = useState([])



    const itemRemoved = (product) => {

      //first, find the product index
      const index = products.findIndex(p => p.id === product.id);

      //then, set the cartQuantity to 1
      updateProducts(products.map((pro) => pro.id === product.id ? {
          ...pro,cartQuantity:0
      } : pro ))

      /*updateProducts(products.map((pro) => {
        if(pro.id === product.id){
          return {...pro,cartQuantity:0}
        }else{
          return pro
        }
      }))*/

      //find the item in the cart with the id
      const cartIndex = cartItems.findIndex(c => c.id === product.id);

      updateCartItems(cartItems.filter((cart,index) => index !== cartIndex))

      //subtract item price to cart subTotal
      //updateCart({...cart,subTotal:cart.subTotal - products[index].price,...cart,totalPrice:cart.subTotal - cart.discount})

      //update total price
      //updateCart({...cart,totalPrice:cart.subTotal - cart.discount})

      const newCarCart = {
        subTotal: cart.subTotal - products[index].price,
        totalPrice: cart.subTotal - cart.discount,
        discount:  cart.discount,
      }
      updateCart(newCarCart)

    }

    const itemAdded = (product) => {

      //first, find the product index
      const index = products.findIndex(p => p.id === product.id);
      
      //then, set the cartQuantity to 1
      updateProducts(products.map((pro) => pro.id === product.id ? {
          ...pro,cartQuantity:1
      } : pro ))

      const newCart = {
        id: products[index].id,
        item: products[index].heading,
        price: products[index].price,
        quantity: 1
      }

      //then push a new item into the cart
      updateCartItems([...cartItems,newCart])

      const newCarS = {
        subTotal:cart.subTotal + products[index].price,
      }
      const newCarT = {
        totalPrice:newCarS.subTotal - 10
      }

      updateCart({...newCarS,...newCarT})

    }



    const useCoupon = (coupon) => {

      //updateCart({...cart,discount:coupon})
      //updateCart({...cart,totalPrice: cart.subTotal - cart.discount})

      /*const newCarCart = {
        subTotal: cart.subTotal,
        totalPrice: cart.subTotal - cart.discount,
        discount: coupon,
      }
      updateCart(newCarCart)*/

      //updateCart({...cart,discount:coupon})
      updateCart({...cart,totalPrice: cart.subTotal - cart.discount})

    }

    return(
        <div className="layout-row">

            <ProductList removeItem={itemRemoved} addItem={itemAdded} products={products} />
            <Cart couponSelected={useCoupon} cartItems={cartItems} cart={cart} discount={discount} />

        </div>   
    )
}

export default Checkout
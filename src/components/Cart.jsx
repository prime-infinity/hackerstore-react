const Cart = ({ cart,discount,cartItems, couponSelected }) => {

    return(
        <div>

            <div className="card my-16 mr-25 pr-20 outlined">
                <section className="layout-row align-items-center justify-content-center px-16">
                <h4>Your Cart</h4>
                </section>
                <div className="divider"></div>
                <section>
                <table>
                    <thead>
                    <tr>
                    <th>Item</th>
                    <th>Quantity</th>
                    <th className="numeric">Price</th>
                    </tr>
                    </thead>
                    <tbody>

                    {cartItems.map((cartItem, index)=> ( 
                        <tr key={index}>
                            <td data-testid="cart-item-name">{ cartItem.item }</td>
                            <td data-testid="cart-item-quantity">{ cartItem.quantity }</td>
                            <td className="numeric" data-testid="cart-item-price">${ cartItem.price }</td>
                        </tr>
                    ) )}

                    </tbody>
                </table>

                <div className="layout-row justify-content-between align-items-center px-8 mx-12">
                    <h5>Select Coupon</h5>

                    <select data-testid="cart-coupon" className="coupon-select" onChange={(e) => couponSelected(e.target.value)}>
                        <option value="0">None</option>
                        <option value="10">OFF10</option>
                        <option value="20">OFF20</option>
                    </select>

                </div>

                <ul className="bordered inset ma-0 px-8 mt-30">
                    <li className="layout-row justify-content-between py-12 caption font-weight-light">
                    <span>Subtotal</span>
                    <span data-testid="cart-subtotal">${ cart.subTotal }</span>
                    </li>
                    <li className="layout-row justify-content-between py-12 caption font-weight-light">
                    <span>Discount (-)</span>
                    <span className="discount" data-testid="cart-discount">${ discount }</span>
                    </li>
                    <li className="layout-row justify-content-between py-12 font-weight-bold">
                    <span>Total</span>
                    <span data-testid="cart-total">${ cart.totalPrice }</span>
                    </li>
                </ul>

                </section>
            </div>

        </div>
    )
}

export default Cart
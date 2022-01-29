const ProductList = ({ products, removeItem, addItem }) => {
    return(
        <div className="layout-row wrap justify-content-center">

            
            {products.map((pro, index)=> ( 
                <section className="w-30 product-item" key={index}>
                    <div className="card ma-16">
                        <img src={pro.image} className="product-image" alt="" />
                        <div className="card-text pa-4">
                        <h5 className="ma-0 text-center">{ pro.name }</h5>
                        <p className="ma-0 mt-8 text-center">${ pro.price }</p>
                        </div>
                        <div className="card-actions justify-content-center pa-4">

                        {   pro.cartQuantity === 0 ? <button  onClick={() => addItem(pro)} className="x-small outlined" data-testid="btn-item-add">
                                                Add To Cart
                                            </button> : 
                            pro.cartQuantity === 1 ? <button onClick={() => removeItem(pro)} className="x-small danger" data-testid="btn-item-remove">
                                                Remove
                                            </button> : null
                        }

                        </div>
                    </div>

                </section>
            ) )}

    
        </div>
    )
}

export default ProductList
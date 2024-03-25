const productlist = [
                    'creme',
                    'trousse',
                    'sac',
                    't-shirt',
                    'miroir'
                     ]

function ShoppingList() {
    return (
        <ul>
            {productlist.map((product, index) => (
                <li key={`${product}-${index}`} > {product} </li>
                                               )
                         )
            }
       

        </ul>
    )
}

export default ShoppingList
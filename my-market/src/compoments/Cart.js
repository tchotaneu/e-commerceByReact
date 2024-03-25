function Cart() {
	const produit1prix = 8
	const produit2prix= 10
	const produit3prix= 15
	return (
		<div>
			<h2>Votre Panier</h2>
			<ul>
				<li>Produit1 : {produit1prix}F.CFA</li>
				<li>Produit2: {produit2prix}F.CFA</li>
				<li>Produit3 : {produit3prix}F.CFA</li>
			</ul>
			Total : {produit1prix+ produit2prix + produit3prix}F.CFA
		</div>
	)
}

export default Cart
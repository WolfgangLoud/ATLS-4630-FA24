export default function productListItem({product}){
    return(
        <div className="product-list-item">
            <span>{product.name}</span>
            <span>${product.price}</span>
        </div>
    )
}
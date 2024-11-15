import productListItem from './productListItem'
export default function productList({title, products}){
    return(
        <div className='product-list'>
            <h2>{title}</h2>
            {
                products.map(product=> 
                <productListItem key={product.name} product={product}/>)
            }
        </div>
    )

}
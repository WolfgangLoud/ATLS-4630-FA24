import searchArea from './searchArea';
import productList from './productList';
import { useState } from 'react';

export default function filterableProductList({products}){
    const [searchText, setSearchtext] = useState('');
    const [showStockedOnly, setShowStockedOnly]  = useState('');
    const fruits = products.filter(product => product.catagory==="Fruits")

    const veggies = products.filter(product=>product.catagory==="Vegetables")
    return(
    <>
        <searchArea/>
        <productList title="Fruits" products ={fruits} />
        <productList title="Vegtables" products ={veggies}/>
    </>
    )
}
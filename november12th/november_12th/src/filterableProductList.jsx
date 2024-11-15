import searchArea from './searchArea';
import productList from './productList';
import title_bar from './title_bar';
import { useState } from 'react';
import { useContext } from 'react';
import { searchTextContext } from './searchTextContext';


export default function filterableProductList({products}){
    const [searchText, setSearchtext] = useState('');
    const [showStockedOnly, setShowStockedOnly]  = useState('');
    const fruits = products.filter(product => product.catagory==="Fruits")

    const veggies = products.filter(product=>product.catagory==="Vegetables")
    return(
    <div>
        <div>
                <searchTextContext.Provider>
                    <searchArea></searchArea>
                </searchTextContext.Provider>
        </div>
        <div>
            <productList title="Fruits" products ={fruits} />
            <productList title="Vegtables" products ={veggies}/>
        </div>
    </div>
    )
}
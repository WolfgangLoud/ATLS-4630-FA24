import filterableProductList from "./filterableProductList"

const data =[
  {
    catagory: 'Fruits',
    price:1,
    stocked: true,
    name: 'Apple',
  },
  {
    catagory: 'Fruits',
    price: 2,
    stocked: false,
    name: 'Peach',
  },
  {
    catagory: 'Vegtibles',
    price: '3',
    stocked: true,
    name:'Spinach'
  }
]

export default function App(){
  return(
    <>
    <filterableProductList/>
    </>
  )
}
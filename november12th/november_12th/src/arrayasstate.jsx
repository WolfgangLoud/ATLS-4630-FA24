import { useReducer } from 'react'

export default function arrayasstate(){
    const [myList, myListDispatch]=useReducer(myListReducer,['1']);

    function addItemToMyList(){
        myListDispatch({type:'add'})
        // const newItem = (Math.random()*100).toString()
        // setMyList([...myList,newItem])
    }

    return (
        <div>
            <ul>
                {
                myList.map((item,index) => <li key={index}>
                    {item}
                    <button onClick={()=>myListDispatch({
                        type: 'remove',
                        item,
                    })}>
                        x
                    </button>
                    </li>)
                }
            </ul>

            <button onClick={addItemToMyList}>
                Add new random number!
            </button>
        </div>

       
    )
}

function myListReducer(myList, event){
    switch(event.type){
        case 'add':{
            const newItem = (Math.random()*100).toString()
            return [...myList,newItem];
            break;
        }
        case 'remove':{
            const itemToRemove = event.item
            return myList.filter(item=>item!==itemToRemove)
            break;
            }
        case 'update':
            return myList.map((item, index)=>{
                if (index===event.index){
                    return event.value
                }
                else{
                    return item
                }
            })
            break;
    }
}
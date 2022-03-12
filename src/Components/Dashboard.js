import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Dashboard = () => {

    const [items , setItems] = useState([]);

    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=> setItems(json))
    } , [])

    if(items.length == 0) {
        return <div className="h-screen w-full grid place-items-center bg-gray-900">
            <div className="h-3 w-3">
                <span class="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-sky-400 opacity-75"></span>
            </div>
        </div>
    }

    const handleChange = (e) => {
        setItems(items.filter((item) => item.title.includes(e.target.value) || item.description.includes(e.target.value)));
    }

    const getStars = ({rate}) => {
        let svgArr = []
        for(let i = 0; i < rate ; i++) {
            svgArr.push(<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 18.26l-7.053 3.948 1.575-7.928L.587 8.792l8.027-.952L12 .5l3.386 7.34 8.027.952-5.935 5.488 1.575 7.928z"/></svg>);
        }
        // console.log(svgArr)
        return svgArr;
    }

    return (
        <React.Fragment>
            <div className="w-full grid place-items-center m-4">
                <input type="text" className="border p-4 w-2/3 outline-none focus:shadow-lg rounded-sm" placeholder="Search Items..." onChange={handleChange}></input>
            </div>
            <div className="grid grid-cols-4 p-4 gap-4">
            {items.map((item)=> {
                return <Link to={`/${item.id}`} key={item.id} className="border flex flex-col justify-between hover:scale-105 transition cursor-pointer hover:shadow-lg items-center border-gray-200 p-4 m-2">
                    <div>
                        <img src={item.image} width="100px" />
                    </div>
                    <div>{item.title}</div>
                    <div className="flex">
                        {getStars(item.rating).map((elem) => <div> {elem} </div>)}
                    </div>
                </Link>
            })}
            </div>
        </React.Fragment>
    )
}

export default Dashboard

import React from 'react'
import Card from '../Card/Card'
import './List.scss'

const List = () => {
    const data = [
        {
            id: 1,
            title: "Blue berry",
            img: "https://images.pexels.com/photos/3760853/pexels-photo-3760853.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            img2: "https://images.pexels.com/photos/3760852/pexels-photo-3760852.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            isNew: true,
            oldPrice: 22,
            price: 19
        },
        {
            id: 1,
            title: "Blue berry",
            img: "https://images.pexels.com/photos/8452006/pexels-photo-8452006.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            img2: "https://images.pexels.com/photos/8451998/pexels-photo-8451998.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            isNew: true,
            oldPrice: 65,
            price: 29
        },
        {
            id: 1,
            title: "Blue berry",
            img: "https://images.pexels.com/photos/8942332/pexels-photo-8942332.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            img2: "https://images.pexels.com/photos/8942340/pexels-photo-8942340.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            isNew: true,
            oldPrice: 52,
            price: 39
        },
        {
            id: 1,
            title: "Blue berry",
            img: "https://images.pexels.com/photos/6220173/pexels-photo-6220173.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            img2: "https://images.pexels.com/photos/6220148/pexels-photo-6220148.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            isNew: true,
            oldPrice: 32,
            price: 26
        }
    ]
  return (
    <div className="list">
        {data?.map(item => (
            <Card item={item} key={item.id}/>
        ))}
    </div>
  )
}

export default List

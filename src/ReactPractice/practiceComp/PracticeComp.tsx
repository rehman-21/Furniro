import { useState } from 'react'
import './App.css'
import Button from './components/Button/Button'
import CustomCard from './components/Card/CustomCard'

function Comp() {
    const [data, setData] = useState([])

    async function getData() {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts')
        const posts = await response.json()
        setData(posts)
    }

    return (
        <>
            <div className='p-10  flex flex-col justify-center items-center gap-4 overflow-auto'>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4'>
                    {data.map(item => (
                        <CustomCard
                            key={item.id}
                            Title={item.title}
                            Description={`Post ID: ${item.id}`}
                            Content={item.body}
                            Footer={`User ID: ${item.userId}`}
                        />
                    ))}

                </div>
                <Button className='border-4 border-red-100 cursor-pointer' onClick={getData}>
                    Click Me
                </Button>
            </div>
        </>
    )
}

export default comp

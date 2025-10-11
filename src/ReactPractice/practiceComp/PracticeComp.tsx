import { useState } from 'react'
import './App.css'
import { Button } from '../../components/Commons/Button'
import { ProductCard } from '../../components/HomeComp/ProductCard'

interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

function Comp() {
    const [data, setData] = useState<Post[]>([])

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
                        <ProductCard
                            key={item.id}
                            imageSrc="/images/BG_1.jpg"
                            title={item.title}
                            subtitle={`Post ID: ${item.id}`}
                            price={`User ID: ${item.userId}`}
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

export default Comp

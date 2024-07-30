"use client"
import { formatPrice } from "@/utils/format"
import Link from "next/link"
import { useEffect, useState } from "react"

export const PopularProducts = () => {
    const [productsHome, setProductsHome] = useState([])

    const getProducts = async () => {
        const request = await fetch("https://api.escuelajs.co/api/v1/products")
        const data = await request.json()

        const dataRender = [data[3], data[1]]
        setProductsHome(dataRender)
    }

    useEffect(() => {
        getProducts();
    }, [])

    return (
        <section className="flex flex-col bg-white h-1/2 p-7">
            <div className="flex flex-row justify-between items-center">
                <h2 className="text-2xl font-semibold">Productos populares</h2>
                <Link href="products" className="border-b-2 border-black">Ver todos</Link>
            </div>

            <div className="mt-8 flex flex-row gap-12 w-full justify-center">
                {
                    productsHome?.map((product, index) => (
                        <div className="w-56 flex flex-col rounded-md">
                            <img src={product.images[0]} className="w-56 h-56 rounded-md" />
                            <p className="text-center mt-2 text-sm">{product.title}</p>
                            <p className="text-center font-medium">{formatPrice(product.price)}</p>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}
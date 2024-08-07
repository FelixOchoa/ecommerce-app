"use client";
import { formatPrice } from "@/utils/format";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  const getProducts = async () => {
    const request = await fetch("https://api.escuelajs.co/api/v1/products");
    const requestCategories = await fetch(
      "https://api.escuelajs.co/api/v1/categories"
    );
    const data = await request.json();
    const dataCategories = await requestCategories.json();

    setCategories(dataCategories);
    setProducts(data);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <main className="flex flex-col h-screen w-screen p-6">
      <div className="flex flex-row items-center justify-between mb-8">
        <h1 className="text-2xl font-semibold">Descubre los productos</h1>

        <Link href="/products/create">
          <button className="px-4 py-2 font-semibold text-white bg-black rounded-2xl text-sm">
            Crear producto
          </button>
        </Link>
      </div>

      <div className="flex flex-row gap-4 mt-4 w-screen h-15">
        {categories?.map((category, index) => (
          <div
            className={`px-6 rounded-full cursor-pointer ${
              index == 0
                ? "bg-black text-white"
                : "bg-gray-200 hover:bg-black hover:text-white"
            } transition-all duration-200`}
          >
            <p className="mt-5">{category.name}</p>
          </div>
        ))}
      </div>

      <div className="mt-8 grid grid-cols-2 gap-12 w-full place-items-center">
        {products?.map((product, index) => (
          <Link
            href={`products/${product.id}`}
            className="w-56 flex flex-col rounded-md"
          >
            <img src={product.images[0]} className="w-56 h-56 rounded-md" />
            <p className="text-center mt-2 text-sm">{product.title}</p>
            <p className="text-center font-medium">
              {formatPrice(product.price)}
            </p>
          </Link>
        ))}
      </div>
    </main>
  );
}

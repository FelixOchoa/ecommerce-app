"use client";
import { ArrowLeftIcon } from "@/utils/Icons/Icons";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function CreateProductPage() {
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [inputImage1, setInputImage1] = useState("");
  const [inputImage2, setInputImage2] = useState("");
  const [inputImage3, setInputImage3] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const images = [inputImage1, inputImage2, inputImage3];

    const productData = {
      title: title,
      description: description,
      price: parseFloat(price),
      categoryId: parseInt(categoryId),
      images: images,
    };

    await fetch("https://api.escuelajs.co/api/v1/products/", {
      method: "POST",
      body: JSON.stringify(productData),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => {
      console.log(response);
    });
  };

  return (
    <div className="h-screen w-screen items-center flex flex-col relative">
      <div className="w-full h-16 items-center flex flex-col mt-4 bg-white z-10 absolute -top-1">
        <div
          className="h-8 w-8 cursor-pointer self-start ml-8"
          onClick={() => router.back()}
        >
          <ArrowLeftIcon />
        </div>
      </div>
      <form className="w-full px-14 mt-24" onSubmit={handleSubmit}>
        <h1 className="font-semibold text-xl">Crear producto</h1>

        <div className="flex flex-col gap-1 w-full mt-12">
          <label className="font-medium text-lg">Nombre del producto</label>
          <input
            placeholder="Escribe el nombre del producto aquí..."
            className="w-full border px-6 py-2 rounded-md shadow text-black font-light"
            onChange={(event) => setTitle(event.target.value)}
          />
        </div>
        <div className="flex flex-col gap-1 w-full mt-4">
          <label className="font-medium text-lg">
            Descripción del producto
          </label>
          <input
            placeholder="Escribe la descripción del producto aquí..."
            className="w-full border px-6 py-2 rounded-md shadow text-black font-light"
            onChange={(event) => setDescription(event.target.value)}
          />
        </div>
        <div className="flex flex-col gap-1 w-full mt-4">
          <label className="font-medium text-lg">Precio del Producto</label>
          <input
            placeholder="Escribe el precio del producto aquí..."
            type="number"
            className="w-full border px-6 py-2 rounded-md shadow text-black font-light"
            onChange={(event) => setPrice(event.target.value)}
          />
        </div>
        <div className="flex flex-col gap-1 w-full mt-4">
          <label className="font-medium text-lg">
            Id de la categoría del Producto
          </label>
          <input
            placeholder="Escribe el id de la categoría del producto aquí..."
            type="number"
            className="w-full border px-6 py-2 rounded-md shadow text-black font-light"
            onChange={(event) => setCategoryId(event.target.value)}
          />
        </div>
        <div className="flex flex-col gap-1 w-full mt-4">
          <label className="font-medium text-lg">
            Url de las imágenes del producto
          </label>
          <input
            placeholder="Escribe el url de la imagen #1 del producto aquí..."
            className="w-full border px-6 py-2 rounded-md shadow text-black font-light"
            onChange={(event) => setInputImage1(event.target.value)}
          />
          <input
            placeholder="Escribe el url de la imagen #2 del producto aquí..."
            className="w-full border px-6 py-2 rounded-md shadow text-black font-light mt-4"
            onChange={(event) => setInputImage2(event.target.value)}
          />
          <input
            placeholder="Escribe el url de la imagen #3 del producto aquí..."
            className="w-full border px-6 py-2 rounded-md shadow text-black font-light mt-4"
            onChange={(event) => setInputImage3(event.target.value)}
          />
        </div>

        <button className="px-6 py-4 font-semibold text-white bg-black rounded-2xl text-lg w-full mt-8">
          Crear Producto
        </button>
      </form>
    </div>
  );
}

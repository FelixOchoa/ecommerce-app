"use client";
import { useProducts } from "@/hooks/products/useProducts";
import { ArrowLeftIcon } from "@/utils/Icons/Icons";

export default function CreateProductPage({ params }) {
  const {
    router,
    product,
    handleDelete,
    handleSubmit,
    setTitle,
    setDescription,
    setInputImage1,
    setInputImage2,
    setInputImage3,
  } = useProducts({
    params,
  });

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
        <h1 className="font-semibold text-xl">Actualizar producto</h1>

        <div className="flex flex-col gap-1 w-full mt-12">
          <label className="font-medium text-lg">Nombre del producto</label>
          <input
            placeholder="Escribe el nombre del producto aquí..."
            className="w-full border px-6 py-2 rounded-md shadow text-black font-light"
            defaultValue={product.title}
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
            defaultValue={product.description}
            onChange={(event) => setDescription(event.target.value)}
          />
        </div>
        <div className="flex flex-col gap-1 w-full mt-4">
          <label className="font-medium text-lg">Precio del Producto</label>
          <input
            placeholder="Escribe el precio del producto aquí..."
            type="number"
            className="w-full border px-6 py-2 rounded-md shadow text-black font-light"
            defaultValue={product.price}
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
            disabled
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
            defaultValue={product.images ? product.images[0] : ""}
            onChange={(event) => setInputImage1(event.target.value)}
          />
          <input
            placeholder="Escribe el url de la imagen #2 del producto aquí..."
            className="w-full border px-6 py-2 rounded-md shadow text-black font-light mt-4"
            defaultValue={product.images ? product.images[1] : ""}
            onChange={(event) => setInputImage2(event.target.value)}
          />
          <input
            placeholder="Escribe el url de la imagen #3 del producto aquí..."
            className="w-full border px-6 py-2 rounded-md shadow text-black font-light mt-4"
            defaultValue={product.images ? product.images[2] : ""}
            onChange={(event) => setInputImage3(event.target.value)}
          />
        </div>

        <button className="px-6 py-4 font-semibold text-white bg-black rounded-2xl text-base w-full mt-8">
          Actualizar Producto
        </button>
        <button
          className="px-6 py-4 font-semibold shadow-md bg-[#FEF3F3] text-red-400 rounded-2xl text-base w-full my-4"
          onClick={handleDelete}
        >
          Eliminar Producto
        </button>
      </form>
    </div>
  );
}

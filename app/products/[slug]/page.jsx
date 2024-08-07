"use client";
import { formatPrice } from "@/utils/format";
import { ArrowLeftIcon, HeartIcon } from "@/utils/Icons/Icons";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Page({ params }) {
  const router = useRouter();

  const [product, setProduct] = useState([]);
  const [renderImagePrincipal, setRenderImagePrincipal] = useState("");
  const [gallery, setGallery] = useState([]);

  const getProduct = async () => {
    const request = await fetch(
      `https://api.escuelajs.co/api/v1/products/${params.slug}`
    );
    const data = await request.json();
    setProduct(data);
    setRenderImagePrincipal(data.images[0]);
    setGallery(data.images);
  };

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <div>
      <div className="flex flex-row items-center justify-between px-8 mt-3">
        <div className="h-8 w-8 cursor-pointer" onClick={() => router.back()}>
          <ArrowLeftIcon />
        </div>
        <Link
          className="h-8 w-8 cursor-pointer"
          href={`/products/create/${product.id}`}
        >
          <HeartIcon />
        </Link>
      </div>

      <div className="mt-4">
        <img
          src={renderImagePrincipal}
          alt="img-principal"
          className="w-full h-[400px] object-cover"
        />

        <div className="flex flex-row items-center justify-center gap-2 mt-3">
          {gallery.map((image, index) => (
            <img
              src={image}
              key={index}
              onClick={() => {
                if (renderImagePrincipal === image) return;
                setRenderImagePrincipal(image);
              }}
              className={`w-24 h-24 rounded-md ${
                image === renderImagePrincipal
                  ? "border-4 border-gray-500"
                  : "cursor-pointer"
              }`}
            />
          ))}
        </div>
      </div>

      <div className="px-4 mt-5 shadow-md pb-14">
        <h1 className="font-semibold text-xl mb-2">{product.title}</h1>
        <p className="font-light">{product.description}</p>
      </div>
      <div className="flex flex-row items-center w-full justify-between px-6 py-12 border-t">
        <p className="text-xl font-bold">$ {formatPrice(product.price || 0)}</p>
        <button className="px-6 py-4 font-semibold text-white bg-black rounded-2xl text-lg">
          Añadir al carrito
        </button>
      </div>
    </div>
  );
}

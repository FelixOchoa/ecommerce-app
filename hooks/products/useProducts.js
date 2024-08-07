import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

export const useProducts = ({ params }) => {
  const router = useRouter();
  const [product, setProduct] = useState({});
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [inputImage1, setInputImage1] = useState("");
  const [inputImage2, setInputImage2] = useState("");
  const [inputImage3, setInputImage3] = useState("");

  const getProduct = async () => {
    const request = await fetch(
      `https://api.escuelajs.co/api/v1/products/${params.slug}`
    );
    const data = await request.json();
    setProduct(data);
  };

  useEffect(() => {
    getProduct();
  }, []);

  const handleDelete = async (event) => {
    event.preventDefault();

    await fetch(`https://api.escuelajs.co/api/v1/products/${product.id}`, {
      method: "DELETE",
    }).then((response) => {
      if (response) {
        alert("✅Correcto: Se ha eliminado el producto");

        setTimeout(() => {
          router.push(`/products`);
        }, 2000);
      }
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    let JSONData = {};

    if (title !== "") {
      JSONData["title"] = title;
    }

    if (description !== "") {
      JSONData["description"] = description;
    }
    if (price !== "") {
      JSONData["price"] = parseFloat(price);
    }
    if (inputImage1 !== "" || inputImage2 !== "" || inputImage3 !== "") {
      const images = [inputImage1, inputImage2, inputImage3];
      JSONData["images"] = images;
    }

    await fetch(`https://api.escuelajs.co/api/v1/products/${product.id}`, {
      method: "PUT",
      body: JSON.stringify(JSONData),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => {
      if (response) {
        alert("✅Correcto: Se ha modificado el producto");

        setTimeout(() => {
          router.push(`/products/${product.id}`);
        }, 2000);
      }
    });
  };

  return {
    product,
    router,
    handleSubmit,
    handleDelete,
    setTitle,
    setDescription,
    setInputImage1,
    setInputImage2,
    setInputImage3,
    setPrice,
  };
};

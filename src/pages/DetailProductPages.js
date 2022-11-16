import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import Button from "../components/Atoms/Button";
import IconBack from "../components/icons/IconBack";

const DetailProductPages = (props) => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState([]);

  useEffect(() => {
    setLoading(true);
    axios({
      method: "GET",
      url: `https://fakestoreapi.com/products/${id}`,
    })
      .then((res) => {
        setProduct(res.data);
      })
      .catch((e) => console.log(e))
      .finally(() => setLoading(false));
  }, [id]);
  return (
    <div>
      {loading && (
        <div>
          {" "}
          <h1>loading...</h1>
        </div>
      )}
      <div className="ml-6 mt-4">
        <Link to="/">
          <IconBack />
        </Link>
      </div>
      <div className="hero h-full container">
        <div className="hero-content flex-col lg:flex-row pt-2">
          <img src={product.image} alt={product.title} className="max-w-sm" />
          <div className="px-14">
            <div className="text-sm breadcrumbs mb-10">
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <a href="#">{product.category}</a>
                </li>
              </ul>
            </div>
            <h1 className="text-4xl font-bold mb-4">{product.title}</h1>
            <p className="font-semibold text-2xl mb-5">$ {product.price}</p>
            <div className="mb-24">
              <span className="mr-10">
                <Button buttonDanger>-</Button>
                <span className="mx-2">
                  <input
                    type="text"
                    placeholder="1"
                    className="input input-bordered input-primary w-16"
                  />
                </span>
                <Button buttonPrimary>+</Button>
              </span>
              <Button buttonPrimary>Add to Cart</Button>
            </div>
            <h2 className="text-2xl font-bold mb-4">Product Detail</h2>
            <p className="">{product.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailProductPages;

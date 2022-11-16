import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CardProduct from "../components/organisms/CardProduct";
import { fetchList, cartAdded } from "../features/listSlice";

const HomePages = () => {
  // const list = useSelector((state) => state.list.list);
  const list = useSelector((state) => state.list.list);
  const dispatch = useDispatch();
  const [Login, setLogin] = useState(false);

  const addCart = (data) => {
    if (Login) {
      dispatch(cartAdded(data));
    } else {
      alert("Login dulu bro");
    }
  };

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setLogin(true);
    } else {
      setLogin(false);
    }
    dispatch(fetchList());
  }, [dispatch, Login]);

  return (
    <div>
      <h1 className="text-4xl text-center mb-10">Products</h1>
      <div className="w-4/5 mx-auto mb-10">
        <div className="grid xl:grid-cols-5 lg:grid-cols-3 gap-10 sm:grid-cols-2">
          <CardProduct list={list} />
        </div>
      </div>
    </div>
  );
};

export default HomePages;

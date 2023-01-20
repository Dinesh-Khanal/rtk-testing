import React, { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../redux/hooks";
import { createUser } from "../redux/productSlice";
const Users = () => {
  const { uCreate, isLoading, errMessage } = useAppSelector(
    (state) => state.products
  );
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(createUser({ name: "Ramesh Khanal", post: "Managing Director" }));
  }, []);

  if (isLoading) return <div>Loading...</div>;
  return (
    <div>
      <h2>Users List</h2>
      {errMessage && <div>Error: {errMessage}</div>}
      <p>Name: {uCreate.name}</p>
      <p>Post: {uCreate.post}</p>
    </div>
  );
};

export default Users;

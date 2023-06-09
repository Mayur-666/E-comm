import React from "react";
import "./Product_entry.css";

async function fetchh() {
  let raw = await fetch("/");
  let text = raw.text();
  console.log(text);
}
fetchh();

export default function ProductEntry() {
  return (
    <div className="entry">
      <span className="product_entry">Product Entries</span>
      <form className="loginform" method="post" action="/product">
        <label>Product Name</label>
        <input
          className="productInput"
          type="text"
          name="product_name"
          placeholder="Enter name of product..."
        />
        <label>Description</label>
        <input
          className="productInput"
          type="text"
          name="discription"
          placeholder="Enter short description..."
        />
        <label>Rich Description</label>
        <input
          className="productInput"
          type="text"
          name="rich_disc"
          placeholder="Enter big description..."
        />
        <label>Price</label>
        <input
          className="productInput"
          type="number"
          name="price"
          placeholder="Enter price ..."
        />
        <label>Rating</label>
        <input
          className="productInput"
          type="number"
          name="rating"
          placeholder="Enter rating..."
        />
        <label>Date </label>
        <input
          className="productInput"
          type="date"
          name="date"
          placeholder="Enter date..."
        />
        <label>Category</label>
        <input
          className="productInput"
          type="text"
          name="category"
          placeholder="Enter category..."
        />
        <label>Upload Main Image</label>
        <input className=" productInput" type="file" name="image" />
        <label>Upload small images</label>
        <input className="productInput" type="file" />
        <input className="productInput" type="file" />
        <input className="productInput" type="file" />
        <button className="logibutton">Add Product</button>
        <input type="submit" value="submit"></input>
      </form>
    </div>
  );
}

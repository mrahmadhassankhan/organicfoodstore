import React, { useState } from 'react'
import GridLayout from '../../components/GridLayout'
import CSS from './AddProduct.module.css'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddProduct = () => {
  const [categoryName, setCategoryName] = useState('');
  const [productName, setProductName] = useState('');
  const [productImage, setProductImage] = useState();
  const [newPrice, setNewPrice] = useState();
  const [oldPrice, setOldPrice] = useState();
  const [quantity, setQuantity] = useState();
  const [description, setDescription] = useState();


  const handleAddProduct = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("categoryName", categoryName);
    formData.append("productName", productName);
    formData.append("description",description)
    formData.append("newPrice", newPrice);
    formData.append("oldPrice", oldPrice);
    formData.append("quantity", quantity);
    formData.append("productImage", productImage);
    try {
      await axios.post("http://localhost:1783/api/postproduct", formData, {
        headers: { "Content-Type": "multipart/form-data" }
      });
      toast.success("Product Added Successfully");
    } catch (err) {
      toast.error("Product can't be added");
    }

    setCategoryName('');
    setProductName('');
    setDescription('');
    setNewPrice('');
    setOldPrice('');
    setQuantity('');
    setProductImage("");
  };

  return (
    <GridLayout>
      <h1 className={CSS['addproduct-title']}>Add your Product</h1>
      <form encType='multipart/form-data' className={CSS['from-container']}>
        <div>
          <div className={CSS['product-name-div']}>
            <label htmlFor='category-name'>Category Name</label>
            <input required type='text' placeholder='Category Name' id='category-name' name='categoryName' value={categoryName} onChange={(e) => setCategoryName(e.target.value)} />
          </div>
          <div className={CSS['product-product-name-div']}>
            <label htmlFor='product-name'>Product Name</label>
            <input required type='text' placeholder='Product Name' id='product-name' name='productName' value={productName} onChange={(e) => setProductName(e.target.value)} />
          </div>
          <div className={CSS['product-description-div']}>
            <label htmlFor='description'>Description</label>
            <textarea required type='text' placeholder='Description' id='description' name='description' value={description} onChange={(e) => setDescription(e.target.value)} ></textarea>
          </div>
          <div className={CSS['product-new-price-div']}>
            <label htmlFor='new-price'>New Price</label>
            <input min={0} required type='number' placeholder='New Price' id='new-price' name='newPrice' value={newPrice} onChange={(e) => setNewPrice(e.target.value)} />
          </div>
          <div className={CSS['product-old-name-div']}>
            <label htmlFor='old-price'>Old Price</label>
            <input min={0} required type='number' placeholder='Old Price' id='old-price' name='oldPrice' value={oldPrice} onChange={(e) => setOldPrice(e.target.value)} />
          </div>
          <div className={CSS['product-quantity-div']}>
            <label htmlFor='quantity'>Quantity</label>
            <input min={0} required type='number' placeholder='Quantity' id='quantity' name='quantity' value={quantity} onChange={(e) => setQuantity(e.target.value)} />
          </div>
          <div className={CSS['product-selectimg-div']}>
            <label htmlFor='product-img'>Select Image</label>
            <input required className='' type='file' name='productImage' id='product-img' onChange={(e) => setProductImage(e.target.files[0])} />
          </div>
          <button type='submit' onClick={handleAddProduct} className={CSS['product-button']}>Add Product</button>
        </div>
        <div className={CSS['product-img-div']}>
        </div>
        <ToastContainer />
      </form>
    </GridLayout>
  )
}

export default AddProduct
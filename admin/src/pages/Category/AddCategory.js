import React, { useEffect, useState } from "react";
import CSS from "./AddCategory.module.css";
import GridLayout from "../../components/GridLayout";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddCategory = () => {
  const [categoryName, setCategoryName] = useState("");
  const [categoryImage, setCategoryImage] = useState();
  const [imagePreview, setImagePreview] = useState("");
  useEffect(() => {
    if (categoryImage) {
      const objectUrl = URL.createObjectURL(categoryImage);
      setImagePreview(objectUrl);

      return () => URL.revokeObjectURL(objectUrl);
    }
  }, [categoryImage]);

  const handleAddCategory = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("categoryName", categoryName);
    formData.append("categoryImage", categoryImage);

    try {
      await axios.post("http://localhost:1783/api/postcategory", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      toast.success("Successfully Added Category");
    } catch (err) {
      toast.error("Error in Adding Category");
    }
    setCategoryName("");
  };
  return (
    <GridLayout>
      <h1 className={CSS["addcategory-title"]}>Add your Category</h1>
      <form
        encType="multipart/from-data"
        onSubmit={handleAddCategory}
        className={CSS["from-container"]}
      >
        <div>
          <div className={CSS["category-name-div"]}>
            <label htmlFor="category-name">Category Name</label>
            <input
              required
              type="text"
              placeholder="Category Name"
              id="category-name"
              name="categoryName"
              value={categoryName}
              onChange={(e) => setCategoryName(e.target.value)}
            />
          </div>
          <div className={CSS["category-selectimg-div"]}>
            <label htmlFor="category-img">Select Image</label>
            <input
              required
              accept=".jpg, .jpeg, .png"
              type="file"
              id="category-img"
              name="categoryImage"
              onChange={(e) => setCategoryImage(e.target.files[0])}
            />
          </div>
          <button type="submit" className={CSS["category-button"]}>
            Add Category
          </button>
        </div>
        <div className={CSS["category-img-div"]}>
          {imagePreview && (
            <img
              className={CSS["category-img"]}
              src={imagePreview}
              alt="Selected Category"
              width={"300px"}
              height={"300px"}
            />
          )}
        </div>
      </form>
      <ToastContainer />
    </GridLayout>
  );
};

export default AddCategory;

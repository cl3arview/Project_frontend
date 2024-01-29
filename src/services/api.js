import axios from "axios";

// Define your API endpoint URL
const apiUrl = "https://localhost:7176/api/";

const serverAddress = "https://localhost:7176"; // Your server address
axios.defaults.headers.common["Authorization"] =
  `Bearer ${localStorage.getItem("token")}`;

// Function to fetch all products
export const fetchProducts = async () => {
  try {
    const response = await axios.get(`${apiUrl}Products`);
    const products = response.data.map((product) => ({
      ...product,
      imagePath: `${serverAddress}${product.imagePath}`, // Concatenate server address with imagepath
    }));
    return products;
  } catch (error) {
    throw error;
  }
};

// Function to fetch a single product by ID
export const fetchProductById = async (id) => {
  try {
    const response = await axios.get(`${apiUrl}Products/${id}`);
    const product = response.data;
    product.imagepath = `${serverAddress}${product.imagepath}`; // Concatenate server address with imagepath
    return product;
  } catch (error) {
    throw error;
  }
};

// Function to create a new product
export const createProduct = async (name, price, description, imageFile) => {
  const formData = new FormData();
  formData.append("name", name);
  formData.append("price", price);
  formData.append("description", description); // Add description
  formData.append("imageFile", imageFile);

  try {
    const response = await axios.post(`${apiUrl}Products`, formData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Function to update an existing product by ID
export const updateProduct = async (
  id,
  productData,
  description,
  imageFile,
) => {
  const formData = new FormData();
  formData.append("name", productData.name);
  formData.append("price", productData.price);
  formData.append("description", description); // Add description
  formData.append("imageFile", imageFile);

  try {
    const response = await axios.put(`${apiUrl}Products/${id}`, formData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Function to delete a product by ID
export const deleteProduct = async (id) => {
  try {
    const response = await axios.delete(`${apiUrl}Products/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Function to register a new user
export const registerUser = async (email, password) => {
  try {
    const response = await axios.post(`${apiUrl}account/register`, {
      email,
      password,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Function to login a user
export const loginUser = async (email, password) => {
  try {
    const response = await axios.post(`${apiUrl}account/login`, {
      email,
      password,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Function to retrieve the user's cart
export const getCartByUserId = async (userId) => {
  try {
    const response = await axios.get(`${apiUrl}carts/${userId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Function to add a product to the user's cart
export const addProductToCart = async (userId, productId) => {
  try {
    const response = await axios.post(`${apiUrl}carts/add-product`, {
      userId: userId,
      productId: productId,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Function to remove a product from the user's cart
export const removeProductFromCart = async (userId, productId) => {
  try {
    const response = await axios.post(`${apiUrl}carts/remove-product`, {
      UserId: userId,
      ProductId: productId,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

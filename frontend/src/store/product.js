import { create } from "zustand";

export const useProductStore = create((set) => ({ // create a store for products like session_state from streamlit
    products: [],
    setProducts: (products) => set({ products }), // set products
    createProduct: async (newProduct) => { // create a new product
        if(!newProduct.name || !newProduct.price || !newProduct.image) { // check if all fields are filled
            return { success: false, message: "All fields are required." }
        }
        const res = await fetch("/api/products", { // send a POST request to the backend
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newProduct)
        })
        const data = await res.json(); // get the response from the backend
        set((state) => ({ products: [...state.products, data.data] })); // add the new product to the products list
        return { success: true, message: "Product created successfully." }
    }
}));
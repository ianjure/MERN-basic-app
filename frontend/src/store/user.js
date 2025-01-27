import { create } from "zustand";

export const useUserStore = create((set) => ({
    user: [], // list of products
    setUser: (user) => set({ user }), // set products that acts like a session state from streamlit
    createProduct: async (newProduct) => { // FUNCTION - create a new product
        if(!newProduct.name || !newProduct.price || !newProduct.image) { // check if all fields are filled
            return { success: false, message: "All fields are required." };
        };
        const res = await fetch("/api/products", { // send a POST request to the backend
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newProduct)
        });
        const data = await res.json(); // get the response from the backend
        set((state) => ({ products: [...state.products, data.data] })); // add the new product to the products list
        return { success: true, message: "Product created successfully." };
    },
    fetchProducts: async () => { // FUNCTION - fetch all products
        const res = await fetch("/api/products"); // send a POST request to the backend
        const data = await res.json(); // get the response from the backend
        set({ products: data.data }); // set the products list
    },
    deleteProduct: async (id) => { // FUNCTION - delete a product
        const res = await fetch(`/api/products/${id}`, { method: "DELETE" }); // send a DELETE request to the backend
        const data = await res.json(); // get the response from the backend
        if(!data.success) {
            return { success: false, message: data.message }; // if the product was not deleted successfully, return an error
        };
        // update the UI without needing a refresh
        set(state => ({ products: state.products.filter(product => product._id !== id) })); // remove it from the products list by filtering and choosing only the id not equal to the passed id
        return { success: true, message: data.message }; // if the product was deleted successfully, return a success message
    },
    updateProduct: async (id, updatedProduct) => { // FUNCTION - update a product
		const res = await fetch(`/api/products/${id}`, {
            method: "PUT",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(updatedProduct)
		});
		const data = await res.json();
		if (!data.success) {
            return { success: false, message: data.message };
        };
		// update the ui immediately, without needing a refresh
		set((state) => ({ products: state.products.map((product) => (product._id === id ? data.data : product)) })); // map through the products list and update the product with the same id as the passed id
		return { success: true, message: data.message }; // if the product was updated successfully, return a success message
    }
}));
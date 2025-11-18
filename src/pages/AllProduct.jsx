// import React, { useEffect, useState, useContext } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
// import { CartContext } from "../pages/CartContext";

// function AllProduct() {
//   const navigate = useNavigate();
//   const { addToCart } = useContext(CartContext);
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     axios.get("http://localhost:5000/products")
//       .then(res => setProducts(res.data))
//       .catch(err => console.log(err));
//   }, []);

//   const handleAdd = (p) => {
//     addToCart(p);
//     navigate(`/product/${p._id}`, { state: p });
//   };

//   return (
//     <>
//       <Navbar />
//       <br></br><br></br>

//       <div className="products-page">
//         <h2>All Products</h2>

//         <div className="products-grid">
//           {products.map((p) => (
//             <div key={p._id} className="product-card-new">
//               <img src={p.img || "src/assets/default.jpg"} alt={p.name} />
//               <h3>{p.name}</h3>
//               <p className="price">₹{p.price}</p>
//               <p className="stock">Stock: {p.stock}</p>

//               <button onClick={() => handleAdd(p)}>Add</button>
//             </div>
//           ))}
//         </div>
//       </div>

//       <Footer />
//     </>
//   );
// }

// export default AllProduct;


import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { CartContext } from "../pages/CartContext";

function AllProduct() {
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null); // Quick view product
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:5000/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  }, []);

  const handleAdd = (p) => {
    addToCart(p);
    navigate(`/product/${p._id}`, { state: p });
  };

  const openModal = (product) => {
    setSelectedProduct(product);
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedProduct(null);
    setModalOpen(false);
  };

  return (
    <>
      <Navbar />
      <main className="pt-24 bg-yellow-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <h2 className="text-3xl font-bold text-yellow-700 mb-8 text-center">
            All Products
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {products.map((p) => (
              <div
                key={p._id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-105 transform transition duration-300"
              >
                <div className="h-60 w-full overflow-hidden">
                  <img
                    src={p.img || "src/assets/default.jpg"}
                    alt={p.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-yellow-800">{p.name}</h3>
                  <p className="text-yellow-700 font-bold mt-1">₹{p.price}</p>
                  <p className="text-gray-500 text-sm mt-1">Stock: {p.stock}</p>
                  <div className="mt-3 flex gap-2">
                    <button
                      onClick={() => handleAdd(p)}
                      className="flex-1 bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 transition"
                    >
                      Add to Cart
                    </button>
                    <button
                      onClick={() => openModal(p)}
                      className="flex-1 bg-yellow-100 text-yellow-700 px-4 py-2 rounded-lg hover:bg-yellow-200 transition"
                    >
                      Quick View
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick View Modal */}
        {modalOpen && selectedProduct && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-2xl w-11/12 md:w-2/3 lg:w-1/2 shadow-lg relative">
              <button
                onClick={closeModal}
                className="absolute top-3 right-3 text-gray-500 text-2xl hover:text-gray-700 transition"
              >
                &times;
              </button>
              <div className="grid grid-cols-1 md:grid-cols-2">
                <img
                  src={selectedProduct.img || "src/assets/default.jpg"}
                  alt={selectedProduct.name}
                  className="w-full h-80 object-cover rounded-l-2xl"
                />
                <div className="p-6 flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-yellow-800">
                      {selectedProduct.name}
                    </h3>
                    <p className="text-yellow-700 font-bold mt-2 text-xl">
                      ₹{selectedProduct.price}
                    </p>
                    <p className="text-gray-500 mt-2">Stock: {selectedProduct.stock}</p>
                    <p className="text-gray-600 mt-4">{selectedProduct.description || "Delicious bakery item!"}</p>
                  </div>
                  <button
                    onClick={() => handleAdd(selectedProduct)}
                    className="mt-6 w-full bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 transition"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </>
  );
}

export default AllProduct;

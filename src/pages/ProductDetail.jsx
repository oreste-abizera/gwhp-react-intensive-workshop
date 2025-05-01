import { Link, useParams } from "react-router-dom";

export default function ProductDetail() {
  const { productId } = useParams();
  const products = [
    {
      id: 1,
      name: "React Basics",
      price: 29.99,
      description:
        "Learn the fundamentals of React including components, props, and state.",
    },
    {
      id: 2,
      name: "Advanced Hooks",
      price: 39.99,
      description:
        "Master React Hooks like useEffect, useContext, useReducer and more.",
    },
    {
      id: 3,
      name: "Router Mastery",
      price: 49.99,
      description:
        "Everything you need to know about React Router for single-page applications.",
    },
  ];

  const product = products.find((p) => p.id === parseInt(productId));

  if (!product) {
    return <div>Product not found!</div>;
  }

  return (
    <div className="product-detail-card">
      <h3>{product.name}</h3>
      <p>
        <strong>Price:</strong> ${product.price}
      </p>
      <p>{product.description}</p>
      <Link to="/products">Back to Products</Link>
    </div>
  );
}

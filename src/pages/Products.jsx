import { Link, Outlet } from "react-router-dom";

export default function Products() {
  const products = [
    { id: 1, name: "React Basics", price: 29.99 },
    { id: 2, name: "Advanced Hooks", price: 39.99 },
    { id: 3, name: "Router Mastery", price: 49.99 },
  ];

  return (
    <div className="products-page">
      <h2>Products</h2>

      <div className="product-layout">
        <div className="product-list">
          <h3>Our Courses</h3>
          <ul>
            {products.map((product) => (
              <li key={product.id}>
                <Link to={`/products/${product.id}`}>{product.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Nested route outlet */}
        <div className="product-detail">
          <Outlet context={products} />
        </div>
      </div>
    </div>
  );
}

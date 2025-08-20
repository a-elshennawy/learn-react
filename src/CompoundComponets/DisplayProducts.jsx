// this is where we gonna display the product cards many ways
import ProductCard from "./ProductCard";

export default function DisplayProducts() {
  // products (or from an API)
  const products = [
    {
      id: 0,
      name: "logitech g102 wired",
      price: 1025,
      image: "/images/logitechg102.jpg",
      description: "a basic gaming / office wired mouse and supported on lgHub",
    },
  ];
  return (
    <>
      <div style={appContainerStyles}>
        <h1>our products</h1>

        {/* example 1 full detailed product */}
        <div style={cardRowStyles}>
          <h2>full product display</h2>
          <ProductCard product={products[0]}>
            <ProductCard.Image />
            <ProductCard.Title />
            <ProductCard.Price />
            <ProductCard.Description />
            <ProductCard.AddToCartButton />
          </ProductCard>
        </div>

        {/* example 2 (image, title, price) */}
        <div style={cardRowStyles}>
          <h2>Product List Item</h2>
          <ProductCard product={products[0]}>
            <ProductCard.Image
              style={{ height: "100px", width: "100px", alignSelf: "center" }}
            />
            <div style={{ flexGrow: 1 }}>
              <ProductCard.Title style={{ fontSize: "1.1em" }} />
              <ProductCard.Price style={{ fontSize: "1em" }} />
            </div>
            <ProductCard.AddToCartButton />
          </ProductCard>
        </div>

        {/* Example 3: Homepage Teaser (Image and Title only) */}
        <div style={cardRowStyles}>
          <h2>Homepage Teaser</h2>
          <ProductCard product={products[0]}>
            <ProductCard.Image />
            <ProductCard.Title />
          </ProductCard>
        </div>
      </div>
    </>
  );
}

// App Level Styling
const appContainerStyles = {
  fontFamily: "Arial, sans-serif",
  padding: "20px",
  backgroundColor: "#f4f7f6",
  minHeight: "100vh",
};

const cardRowStyles = {
  display: "flex",
  flexWrap: "wrap",
  gap: "20px",
  marginBottom: "40px",
  alignItems: "flex-start",
};

import { useContext, createContext } from "react";

// 1- here we will create the context of the product data
const ProductContext = createContext(null);

// 2- parent component which will hold the product data & provide it's to children
const ProductCard = ({ product, children }) => {
  //insure product data is provided
  if (!product) {
    console.error("ProductCard requires a 'product' prop.");
    return null;
  }

  //provide the product data to all child components via context
  return (
    <ProductContext.Provider value={product}>
      <div style={productCardStyles}>{children}</div>
    </ProductContext.Provider>
  );
};

// 3- child component: ProductImage
// this comp. consumes the product data from the context
const ProductImage = ({ style, ...props }) => {
  const product = useContext(ProductContext);
  if (!product) return null;

  let imagePath = product.image;
  return (
    <img
      src={imagePath}
      alt={product.name}
      style={{ ...productImageStyles, ...style }}
      {...props}
    />
  );
};

// 4- child component: ProductTitle
const ProductTitle = ({ style, ...props }) => {
  const product = useContext(ProductContext);
  if (!product) return null;

  return (
    <h3 style={{ ...productTitleStyles, ...style }} {...props}>
      ${product.name}
    </h3>
  );
};

// 5. Child Component: ProductPrice
const ProductPrice = ({ style, ...props }) => {
  const product = useContext(ProductContext);
  if (!product) return null;

  return (
    <p style={{ ...productPriceStyles, ...style }} {...props}>
      ${product.price.toFixed(2)}
    </p>
  );
};

// 6. Child Component: ProductDescription
const ProductDescription = ({ style, ...props }) => {
  const product = useContext(ProductContext);
  if (!product) return null;

  return (
    <p style={{ ...productDescriptionStyles, ...style }} {...props}>
      {product.description}
    </p>
  );
};

// child component: AddToCartButton
const AddToCartButton = ({ onclick, style, ...props }) => {
  const product = useContext(ProductCard);
  if (!product) return null;

  const handleClick = () => {
    alert(`added ${product.name} to cart!`);
    if (onclick) onclick(product);
  };

  return (
    <button
      onclick={handleClick}
      style={{ ...addToCartButtonStyles, ...style }}
      {...props}
    >
      add to cart
    </button>
  );
};

// here we assign child components as properties of the parent so we can easily use them
ProductCard.Image = ProductImage;
ProductCard.Title = ProductTitle;
ProductCard.Price = ProductPrice;
ProductCard.Description = ProductDescription;
ProductCard.AddToCartButton = AddToCartButton;

// then export it
export default ProductCard;

// basic styling
const productCardStyles = {
  border: "1px solid #ddd",
  borderRadius: "8px",
  padding: "16px",
  margin: "16px",
  width: "250px",
  boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
  display: "flex",
  flexDirection: "column",
  gap: "10px",
  backgroundColor: "#fff",
};

const productImageStyles = {
  width: "100%",
  height: "180px",
  objectFit: "cover",
  borderRadius: "4px",
};

const productTitleStyles = {
  fontSize: "1.2em",
  margin: "0",
  color: "#333",
};

const productPriceStyles = {
  fontSize: "1.1em",
  color: "#007bff",
  fontWeight: "bold",
  margin: "0",
};

const productDescriptionStyles = {
  fontSize: "0.9em",
  color: "#555",
  flexGrow: 1,
};

const addToCartButtonStyles = {
  backgroundColor: "#28a745",
  color: "white",
  border: "none",
  padding: "10px 15px",
  borderRadius: "5px",
  cursor: "pointer",
  fontSize: "1em",
  marginTop: "auto",
};

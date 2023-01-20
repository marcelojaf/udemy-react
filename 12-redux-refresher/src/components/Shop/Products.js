import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_PRODUCTS = [
  {
    id: "p1",
    price: 6,
    title: "My first book",
    description: "The first book I ever wrote!",
  },
  {
    id: "p2",
    price: 8.99,
    title: "Dance of the Dragons",
    description: "Daenerys mount the dragon in this one",
  },
  {
    id: "p3",
    price: 12,
    title: "Clash of Kings",
    description: "A lot of kings die and so on...",
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((prod) => (
          <ProductItem
            key={prod.id}
            id={prod.id}
            title={prod.title}
            price={prod.price}
            description={prod.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;

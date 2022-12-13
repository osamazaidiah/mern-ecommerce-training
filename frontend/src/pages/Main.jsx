import { Column } from "../components/Column";
import { ProductCard } from "../components/ProductCard";
import { Row } from "../components/Row";
import { sampleProductsList } from "../assets/sampleProducts";

export const Main = () => {
  return (
    <Column>
      <h2>Our Products</h2>
      <Row>
        {sampleProductsList.map((p, i) => (
          <ProductCard key={p.title + i} product={p} />
        ))}
      </Row>
    </Column>
  );
};

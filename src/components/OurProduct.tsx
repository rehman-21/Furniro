import { Button } from "./Button";
import { ProductCard } from "./ProductCard";

type Product = {
  id: string;
  title: string;
  subtitle: string;
  price: string;
  oldPrice?: string;
  isNew?: boolean;
  discountPercent?: number;
  image: string;
};

interface OurProductProps {
  Products: Product[];
}

export const OurProduct = ({ Products }: OurProductProps) => {
  return (
    <section className="w-[100%] px-10">
      <h2 className="mb-6 text-center text-2xl font-bold">Our Products</h2>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {Products.map((p) => (
          <ProductCard
            key={p.id}
            imageSrc={p.image}
            title={p.title}
            subtitle={p.subtitle}
            price={p.price}
            oldPrice={p.oldPrice}
            isNew={p.isNew}
            discountPercent={p.discountPercent}
          />
        ))}
      </div>

      <div className="mt-8 flex justify-center">
        <Button  className="border border-[#B88E2F] mb-8 px-6 py-2 text-sm w-[17%] font-medium text-[#B88E2F] transition hover:bg-[#B88E2F] hover:text-white"
        children="Show More
        "
        />
      </div>
    </section>
  );
};


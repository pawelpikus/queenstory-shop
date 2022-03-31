import { ProductDetails } from "./ProductDetails";
import Image from "next/image";
import Link from "next/link";
import { formatter } from "../utils/priceFormatter";
import PrimaryButton from "./buttons/PrimaryButton";

type ProductListItem = Pick<
  ProductDetails,
  "title" | "imgSrc" | "category" | "price" | "id"
>;

export const ProductListItemGQL = ({
  id,
  title,
  imgSrc,
  category,
  price,
}: ProductListItem) => {
  return (
    <div className="w-full p-4 my-4 bg-white rounded-lg md:p-5 lg:p-6">
      <div className="flex flex-col items-center justify-between w-full h-full ">
        <div className="block w-full px-2 py-4 bg-white rounded-lg ">
          <Image
            src={imgSrc}
            layout="responsive"
            width={16}
            height={9}
            objectFit="contain"
            alt={title}
          />
        </div>
        <div>
          <Link href={`/products/graphql/${id}`}>
            <a className="font-sans text-lg font-bold text-center hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-br from-emerald-500 to-emerald-800 text-neutral-800">
              {title}
            </a>
          </Link>
          <h4 className="mb-4 text-center font-narrow text-neutral-500">
            {category}
          </h4>
        </div>
        <div className="flex items-baseline justify-between w-full mt-4">
          <PrimaryButton item={{ title, price, count: 1, id }}>
            Dodaj do koszyka
          </PrimaryButton>
          <p className="font-sans font-bold text-right text-transparent bg-clip-text bg-gradient-to-br from-emerald-500 to-emerald-800">
            {formatter.format(price)}
          </p>
        </div>
      </div>
    </div>
  );
};

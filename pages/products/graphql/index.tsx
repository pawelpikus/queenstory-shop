import { InferGetStaticPropsType } from "next";
import { ProductListItemGQL } from "../../../components/ProductListItemGQL";
import SecondaryBg from "../../../components/SecondaryBg";
import {
  GetProductsListDocument,
  GetProductsListQuery,
} from "../../../generated/graphql";
import { apolloClient } from "../../../graphql/apolloClient";

const ProductsPage = ({
  data,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <SecondaryBg />
      <div className="w-11/12 mx-auto max-w-7xl ">
        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
          {data &&
            data.products.map((item) => (
              <li key={item.slug}>
                <ProductListItemGQL
                  id={item.slug}
                  title={item.name}
                  imgSrc={item.images[0].url}
                  category={item.categories[0].name}
                  price={item.price}
                />
              </li>
            ))}
        </ul>
      </div>
    </>
  );
};

export default ProductsPage;

export const getStaticProps = async () => {
  const { data } = await apolloClient.query<GetProductsListQuery>({
    query: GetProductsListDocument,
  });

  return {
    props: {
      data,
    },
  };
};

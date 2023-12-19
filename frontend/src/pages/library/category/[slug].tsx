import React, { useState } from "react";
import { Input, List, ListItem } from "@material-tailwind/react";
import Link from "next/link";
import Layout from "@/layout/layout";
import { GetServerSideProps } from "next";
import { BookService } from "@/services/book.service";
import { CategoryInterface } from "@/interfaces/category/category.interface";
import { useRouter } from "next/router";
import CategoryBook from "@/components/card/category-book";
import { BookCard } from "@/components";
import CategoryDrawer from "@/components/drawers/category";

const FilterByCategory: React.FC<FilterByCategoryProps> = ({
  data,
  category,
}) => {
  const router = useRouter();

  const [categoryDrawer, setCategoryDrawer] = useState<boolean>(false);

  const handelCategoryDrawer = () => {
    setCategoryDrawer((categoryDrawer) => !categoryDrawer);
  };
  return (
    <Layout>
      <div className="flex items-start justify-between gap-x-3 w-full">
        {/* Sidebar */}
        <aside className="md:w-[25%] hidden md:block h-full sticky top-[75px] border-r border-b rounded-b-lg">
          <div className="mt-5 px-4">
            <Input
              type="search"
              label="Bo'limlarni izlang ..."
              className=""
              crossOrigin={undefined}
            />
          </div>
          <div>
            <List>
              <ListItem onClick={() => router.push(`/library/`)}>
                Barchasi
              </ListItem>
              {category.map((i) => (
                <ListItem
                  onClick={() =>
                    router.push(`/library/category/${i.category_slug}`)
                  }
                  key={i.id}
                >
                  {i.category_name}
                </ListItem>
              ))}
            </List>
          </div>
        </aside>

        {/* Main Content */}
        <section className="md:w-[75%] w-11/12 mx-auto min-h-screen">
          <div className="flex md:flex-row flex-col-reverse items-center justify-between py-2 px-1">
            <div className="text-sm breadcrumbs">
              <ul>
                <li>
                  <Link className="underline-offset-4" href="/">
                    Bosh sahifa
                  </Link>
                </li>
                <li className="underline underline-offset-4">Kutubxona</li>
              </ul>
            </div>
            <div className="md:w-7/12 w-full">
              <Input
                type="search"
                label="Izlang toping ..."
                className=""
                crossOrigin={undefined}
              />
            </div>
          </div>
          <button
            onClick={handelCategoryDrawer}
            className={`w-full md:hidden block bg-black text-white text-xl rounded-lg py-2`}
          >{`Bo'limlar`}</button>
          <div
            className={`grid md:grid-cols-5 md:gap-6 gap-3 grid-cols-2 my-4 pr-3`}
          >
            {data.books.map((i) => (
              <BookCard is={true} key={i.id} book={i} />
            ))}
          </div>
        </section>
      </div>
      <CategoryDrawer
        open={categoryDrawer}
        category={category}
        closeDrawer={handelCategoryDrawer}
      />
    </Layout>
  );
};

export default FilterByCategory;

export const getServerSideProps: GetServerSideProps<
  FilterByCategoryProps
> = async ({ query }) => {
  try {
    const slug = query.slug as string;
    const data = await BookService.getCategoryBySlug(slug);
    const category = await BookService.getAllCategory();

    return {
      props: {
        data,
        category,
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      notFound: true,
    };
  }
};

interface FilterByCategoryProps {
  data: CategoryInterface;
  category: CategoryInterface[];
}

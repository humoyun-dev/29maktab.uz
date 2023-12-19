import React from "react";
import {
  Drawer,
  IconButton,
  Input,
  List,
  ListItem,
  Typography,
} from "@material-tailwind/react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { CategoryInterface } from "@/interfaces/category/category.interface";

interface MenuDrawerProps {
  open: boolean;
  closeDrawer: any;
  category: CategoryInterface[];
}

const CategoryDrawer: React.FC<MenuDrawerProps> = ({
  open,
  closeDrawer,
  category,
}) => {
  const router = useRouter();
  const userToken = useSelector((state: any) => state.user.token);
  const handleLogOut = () => {
    localStorage.clear();
    router.reload();
  };

  return (
    <Drawer
      placement={"bottom"}
      open={open}
      onClose={closeDrawer}
      className="p-4 z-[99999]" // @ts-ignore
      size={"100%"}
    >
      <div className="mb-6 flex items-center justify-between">
        <Typography
          variant="h4"
          color="blue-gray"
          className={`flex items-center`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 6.878V6a2.25 2.25 0 012.25-2.25h7.5A2.25 2.25 0 0118 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 004.5 9v.878m13.5-3A2.25 2.25 0 0119.5 9v.878m0 0a2.246 2.246 0 00-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0121 12v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6c0-.98.626-1.813 1.5-2.122"
            />
          </svg>
          {`Bo'limlar`}
        </Typography>
        <IconButton variant="text" color="blue-gray" onClick={closeDrawer}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-5 w-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </IconButton>
      </div>
      <div>
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
      </div>
    </Drawer>
  );
};

export default CategoryDrawer;

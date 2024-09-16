import { Page1 } from "../Page1";
import { Page1DetailA } from "../Page1DetailA";
import { Page1detailB } from "../Page1DetailB";
import { Page2 } from "../Page2";
import { UrlParameter } from "../UrlParameter";

export const page2Routes = [
  {
    path: "/",
    exact: true,
    children: <Page2 />,
  },
  {
    path: "/:id",
    exact: false,
    children: <UrlParameter />,
  },
];

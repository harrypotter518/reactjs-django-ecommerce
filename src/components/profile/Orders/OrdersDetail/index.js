import React from "react";
import Sidebar from "../..//layouts/Sidebar";
import OrdersDetail from "./OrdersDetail";

export default ({ ...props }) => (
  <Sidebar activeItem="orders">
    <OrdersDetail {...props} />
  </Sidebar>
);

import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { PayPalScriptProvider } from '@paypal/react-paypal-js'
import store from "./store";
import { Provider } from "react-redux";
// import 'bootstrap/dist/css/bootstrap.min.css';
import "./assets/styles/bootstrap.custom.css";
import "./assets/styles/index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import PrivateRoute from "./components/PrivateRoute";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/cartScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import ShippingScreen from "./screens/ShippingScreen";
import PaymentScreen from "./screens/PaymentScreen";
import PlaceOrderScreen from "./screens/PlaceOrderScreen";
import OrderScreen from "./screens/OrderScreen";
import ProfileScreen from "./screens/ProfileScreen";

const router = createBrowserRouter(
  // createRoutesFromElements( 
  //   <Route path="/" element={<App />}>
  //     <Route index={true} path="/" element={<HomeScreen />} />
  //     <Route path="/product/:id" element={<ProductScreen />} />
  //     <Route path="/cart" element={<CartScreen />} />
  //     <Route path='/login' element={<LoginScreen />} />
  //     <Route path="/register" element={<RegisterScreen />} />
  //     {/* <Route path="/shipping" element={<ShippingScreen />} /> */}

  //     <Route path='/' element={<PrivateRoute />}>
  //     <Route path="/shipping" element={<ShippingScreen />} />
  //     </Route>
      
  //   </Route>
  // )

  [
    {
      path: "/",
      element: <App />,
      children: [
        {
          index: true,
          element: <HomeScreen />,
        },
        {
          path: "/product/:id",
          element: <ProductScreen />,
        },
        {
          path: "/cart",
          element: <CartScreen />,
        },
        {
          path: "/login",
          element: <LoginScreen />,
        },
        {
          path: "/register",
          element: <RegisterScreen />,
        },
        {
          path: "/shipping",
          element: <PrivateRoute component={ShippingScreen} />,
        },
        {
          path: "/payment",
          element: <PrivateRoute component={PaymentScreen} />,
        },
        {
          path: "/placeorder",
          element: <PrivateRoute component={PlaceOrderScreen} />,
        },
        {
          path: "/order/:id",
          element: <PrivateRoute component={OrderScreen} />,
        },
        {
          path: "/profile",
          element: <PrivateRoute component={ProfileScreen} />,
        },
      ],
    },
  ]
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PayPalScriptProvider deferLoading={false}>
      <RouterProvider router={router} />
      </PayPalScriptProvider>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();

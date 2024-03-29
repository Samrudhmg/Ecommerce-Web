import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Loader from "./Components/Loader";
import Header from "./Components/header";
import OrderDetails from "./Pages/orderDetails";




const Home = lazy(() => import("./Components/Home"));
const Search = lazy(() => import("./Components/Search"));
const Cart = lazy(() => import("./Components/Cart"));
const Shipping=lazy(()=>import("./Pages/shipping"));
const Login = lazy(()=>import("./Pages/login"));
const Orders = lazy(()=>import("./Pages/orders"));
const orderDetails= lazy(()=>import("./Pages/orderDetails"));
// admin routes from a external file//
const Dashboard = lazy(() => import("./Pages/admin/dashboard"));
const Products = lazy(() => import("./Pages/admin/products"));
const Customers = lazy(() => import("./Pages/admin/customers"));
const Transaction = lazy(() => import("./Pages/admin/transaction"));
const Barcharts = lazy(() => import("./Pages/admin/charts/barcharts"));
const Piecharts = lazy(() => import("./Pages/admin/charts/piecharts"));
const Linecharts = lazy(() => import("./Pages/admin/charts/linecharts"));
const Coupon = lazy(() => import("./Pages/admin/apps/coupon"));
const Stopwatch = lazy(() => import("./Pages/admin/apps/stopwatch"));
const Toss = lazy(() => import("./Pages/admin/apps/toss"));
const NewProduct = lazy(() => import("./Pages/admin/management/newproduct"));
const ProductManagement = lazy(
  () => import("./Pages/admin/management/productmanagement")
);
const TransactionManagement = lazy(
  () => import("./Pages/admin/management/transactionmanagement")
);

const App = () => {
  return (
    <Router>
      <Header/>
      <Suspense fallback={<Loader />}>
        <Routes>
          
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/cart" element={<Cart />} />


          {/* Log in to access the page */}
          <Route>
          <Route path="/shipping" element={<Shipping />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/order/:id" element={<OrderDetails/>} />
          </Route>
     

          <Route path="/login" element={<Login />} />





          {/* Admin routes from a external file*/}
          <Route
          //   element={
          //     <ProtectedRoute isAuthenticated={true} adminRoute={true} isAdmin={true} />
          //   }
          >
            <Route path="/admin/dashboard" element={<Dashboard />} />
            <Route path="/admin/product" element={<Products />} />
            <Route path="/admin/customer" element={<Customers />} />
            <Route path="/admin/transaction" element={<Transaction />} />
            {/* Charts */}
            <Route path="/admin/chart/bar" element={<Barcharts />} />
            <Route path="/admin/chart/pie" element={<Piecharts />} />
            <Route path="/admin/chart/line" element={<Linecharts />} />
            {/* Apps */}
            <Route path="/admin/app/coupon" element={<Coupon />} />
            <Route path="/admin/app/stopwatch" element={<Stopwatch />} />
            <Route path="/admin/app/toss" element={<Toss />} />

            {/* Management */}
            <Route path="/admin/product/new" element={<NewProduct />} />

            <Route path="/admin/product/:id" element={<ProductManagement />} />

            <Route
              path="/admin/transaction/:id"
              element={<TransactionManagement />}
            />
          </Route>
          ;
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;

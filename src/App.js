import { useDispatch, useSelector } from "react-redux";
import SnackbarProvider from "react-simple-snackbar";
import "./App.css";
import { useEffect } from "react";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import {
  getInitData,
  getUserInfo,
  getProducts,
} from "./components/dataAccess/DataAccess";
import {
  setError,
  setId,
  setUserEmail,
  setUserName,
} from "./redux/slices/step4Slice";
import {
  go2Step4,
  setAddonesMetaData,
  setCheckoutValidFor,
  setDirectCheckout,
  setIsLoading,
  setTermsAr,
  setTermsEn,
  setTicketsMetaData,
  setVatPercentage,
} from "./redux/slices/ticketSlice";

import AboutPage from "./pages/about/about-page";
import OurApp from "./pages/our-app/ourApp";
import BlogPage from "./pages/blog/blog";
import Event from "./pages/event/event";
import FreakingFOne from "./pages/freaking-f1/freaking-f1";
import FreakingFTwo from "./pages/freaking-f2/freaking-f2";
import FreakingFThree from "./pages/freaking-f3/fearking-f3";
import HomePage from "./pages/home/home";
import PartnerPage from "./pages/partners/partner-page";
import Relive from "./pages/relive/relive";
import Sponsors from "./pages/sponsors/sponsors";
import StageRule from "./pages/stage-rule/stageRule";
import { ReactComponent as Loading } from "./assets/loading.svg";

// Routing
import ScrollToTop from "./ScrollToTop";

function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.ticket.isLoading);
  // const initialize = async () => {
  //   try {
  //     let initData = await getInitData();
  //     dispatch(setCheckoutValidFor(initData.settings.checkout_valid_for));
  //     dispatch(setTermsEn(initData.settings.terms_en));
  //     dispatch(setTermsAr(initData.settings.terms_ar));
  //     dispatch(setVatPercentage(initData.settings.vat));
  //     dispatch(setDirectCheckout(initData.settings.direct_checkout));
  //     dispatch(setTicketsMetaData(initData.tickets));
  //     dispatch(setAddonesMetaData(initData.addons));
  //   } catch (e) {
  //     console.log(e);
  //     alert("could not connect to the server. check you connection");
  //   }
  // };
  const getInitProds = async () => {
    try {
      let prods = await getProducts();
      //debugger;
      dispatch(setTicketsMetaData(prods));
      console.log(prods);
    } catch (err) {
      console.log(err);
    }
  };

  const getParameter = (parameterName) => {
    let parameters = new URLSearchParams(window.location.search);
    return parameters.get(parameterName);
  };
  const processParams = async () => {
    const id = getParameter("id");
    const status = getParameter("status");
    const message = getParameter("message");
    const amount = getParameter("amount");
    if (!!status && status === "paid") {
      dispatch(setIsLoading(true));
      let user = await getUserInfo({ payment_id: id });
      setTimeout(async () => {
        user = await getUserInfo({ payment_id: id });
        //debugger;
        if (
          status === "paid" &&
          id &&
          // amount &&
          user.status === 1
        ) {
          dispatch(setError(false));
          dispatch(setId(id));
          dispatch(setUserName(user.buyer_details.full_name));
          dispatch(setUserEmail(user.buyer_details.email));
        } else {
          dispatch(setError(true));
        }
        dispatch(go2Step4());
        dispatch(setIsLoading(false));
      }, 5000);
    } else if (!!status) {
      dispatch(go2Step4());
      dispatch(setError(true));
    }
  };
  useEffect(() => {
    processParams();
    getInitProds();
    // initialize();
  }, []);
  return (
    <SnackbarProvider>
      <div className="bg-yellow font-cairo" id="static-bg">
        {!isLoading ? (
          <>
            <Router>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/e3" element={<FreakingFThree />} />
                <Route path="/e2" element={<FreakingFTwo />} />
                <Route path="/e1" element={<FreakingFOne />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/partner" element={<PartnerPage />} />
                <Route path="/blog" element={<BlogPage />} />
                <Route path="/app" element={<OurApp />} />
                <Route path="/sponsors" element={<Sponsors />} />
                <Route path="/event" element={<Event />} />
                <Route path="/relive" element={<Relive />} />
                <Route path="/rulethestage" element={<StageRule />} />
                <Route path="*" element={<Navigate to={"/"} />}></Route>
              </Routes>
              <ScrollToTop />
            </Router>
          </>
        ) : (
          <div className="h-screen bg-yellow flex items-center justify-center">
            <Loading className="w-32 h-auto" />
          </div>
        )}
      </div>
    </SnackbarProvider>
  );
}

export default App;

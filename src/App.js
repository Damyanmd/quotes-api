import React, { Suspense } from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import Layout from "./components/layout/Layout";
import LoadingSpinner from "./components/UI/LoadingSpinner";

const NewQuote = React.lazy(() => import("./pages/NewQuote"));
const QuoteDetails = React.lazy(() => import("./pages/QuoteDetails"));
const NotFound = React.lazy(() => import("./pages/NotFound"));
const AllQuotes = React.lazy(() => import("./pages/AllQuotes"));

function App() {
  return (
    <Layout>
      <Suspense
        fallback={
          <div className="centered">
            <LoadingSpinner />
          </div>
        }
      >
        <Switch>
          <Route path="/" exact>
            <Redirect to="/quotes"></Redirect>
          </Route>
          <Route path="/quotes" exact>
            <AllQuotes></AllQuotes>
          </Route>
          <Route path="/quotes/:quoteId">
            <QuoteDetails></QuoteDetails>
          </Route>
          <Route path="/new-quote">
            <NewQuote></NewQuote>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Suspense>
    </Layout>
  );
}

export default App;

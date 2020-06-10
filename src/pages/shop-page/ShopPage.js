import React, { Component } from "react";
import { Route } from "react-router-dom";

import CollectionsOverview from "../../components/collections-overview/CollectionsOverview";
import CollectionPage from "../collection-page/CollectionPage";

const ShopPage = ({ match }) => {
  return (
    <div className="shop-page">
      <Route exact path={`${match.path}`} component={CollectionsOverview} />
      <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
    </div>
  );
};

export default ShopPage;

/* import React, { Component } from "react";

import CollectionsOverview from "../../components/CollectionsOverview";
import CollectionPage from "../CollectionPage";

const ShopPage = ({ match }) => {
  console.log(match);
  return (
    <div className="shop-page">
      <Route exact path={`${match.path}`} component={CollectionsOverview} />
      <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
    </div>
  );
};
export default ShopPage;
 */

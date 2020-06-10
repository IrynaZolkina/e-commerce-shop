import React from "react";

import "./collection-preview.styles.scss";
import CollectionItem from "../collection-item/CollectionItem";
import { Link, Redirect } from "react-router-dom";

const CollectionPreview = ({ title, items, routeName }) => {
  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <span className="my-link">
        <Link to={`/shop/${routeName}`}>Shop Now</Link>
      </span>
      <div className="preview">
        {items
          .filter((item, index) => index < 4)
          .map((item) => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </div>
    </div>
  );
};

export default CollectionPreview;

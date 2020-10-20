import React from "react";
import SHOP_DATA from "./shop.data";

import CollectionPreviewItems from "../../components/collection-preview/collection-preview.component";

class ShopComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collections: SHOP_DATA,
    };
  }

  render() {
    const { collections } = this.state;
    return (
      <div className="shop-page">
        {collections.map(({ id, ...otherItems }) => {
          return <CollectionPreviewItems key={id} {...otherItems} />;
        })}
      </div>
    );
  }
}

export default ShopComponent;

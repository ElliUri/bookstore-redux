import React from "react";
import { withBookStoreService } from '../hoc/withBookstoreService.jsx' 

const miniApp = ({ bookStoreService }) => {
  console.log(bookStoreService.getBooks());
  return (
    <div>
      App 
    </div>
  );
}

export default withBookStoreService()(miniApp);
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import App from "./mainApp";
import ErrorBoundry from "./components/error-boundry/error-boundry";
import BookstoreService from "./services/bookstore-service";
import { BookstoreServiceProvider } from "./components/bookstore-service-cotext/bookstore-service-context";

import store from "./store";

const bookstoreService = new BookstoreService();

const App = () => {
  return (
    <Provider store={store}>
    <ErrorBoundry>
      <BookstoreServiceProvider value={bookstoreService}>
      <App />
      </BookstoreServiceProvider>
    </ErrorBoundry>
  </Provider>
  )
}

export default App
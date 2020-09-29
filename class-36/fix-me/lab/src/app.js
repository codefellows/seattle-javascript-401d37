import React from 'react';

import CssBaseline from '@material-ui/core/CssBaseline';

import CurrentCategory from './components/storefront/current-category.js';
import Categories from './components/storefront/categories.js';
import Products from './components/storefront/products.js';
import Header from './components/header/header.js';
import Footer from './components/footer/footer.js';

export default function Album() {

  return (
    <>
      <CssBaseline />
      <Header />
      <main>
        <Categories />
        <CurrentCategory />
        <Products />
      </main>
      <Footer />
    </>
  );
}

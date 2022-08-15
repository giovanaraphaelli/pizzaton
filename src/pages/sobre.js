import Head from 'next/head';
import React from 'react';
import Header from '../components/Header';

const Sobre = () => {
  return (
    <div className="container">
      <Head>
        <title>Pizzaton - Sobre</title>
      </Head>
      <Header />
      <main>
        <h1>Sobre a Pizzaria</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque modi
          ipsa repellat architecto fugit doloribus minus tempora quae eligendi
          omnis, non aliquid, voluptas pariatur commodi sint laboriosam alias
          nulla natus.
        </p>
      </main>
    </div>
  );
};

export default Sobre;

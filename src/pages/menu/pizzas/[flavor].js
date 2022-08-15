import Head from 'next/head';
import Image from 'next/image';
import Header from '../../../components/Header';
import { pizzas } from '../../../data/menu.json';

const Flavor = ({ flavor }) => {
  const pizza = pizzas.find((pizza) => pizza.slug === flavor);
  return (
    <div className="container">
      <Head>
        <title>Pizzaton - Pizza de {pizza.name}</title>
      </Head>
      <Header />
      <main>
        <Image
          src={pizza.photoPath}
          alt={`Foto da pizza ${pizza.name}`}
          width={600}
          height={328}
        />
        <h1>{pizza.name}</h1>
        <h2>{pizza.price}</h2>
      </main>
    </div>
  );
};

export default Flavor;

// Busca dados em tempo de build
export async function getStaticProps({ params }) {
  return { props: { ...params } };
}

// Especificar as rotas dinâmicas para a pré-renderização em dados
export async function getStaticPaths() {
  return {
    // paths: ['/pizzas/a', '/pizzas/b'],
    paths: pizzas.map(({ slug }) => `/menu/pizzas/${slug}`),
    fallback: false,
  };
}

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <footer>
        <h1>FOOTsaR </h1>
      </footer>
    </>
  );
}

export default MyApp;

import "@/styles/globals.css";
import { RecoilRoot } from "recoil";
import React from "react"; // Import React
import PropTypes from "prop-types"; // Import PropTypes

export default function App({ Component, pageProps }) {
  return (
    <RecoilRoot>
      <Component {...pageProps} />
    </RecoilRoot>
  );
}

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};

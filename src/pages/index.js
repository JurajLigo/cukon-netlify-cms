import * as React from "react";

import contact from "../../site/content/contact.json";

// styles
const pageStyles = {
  color: "#232129",
  padding: "96px",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};

// markup
const IndexPage = () => {
  return <main style={pageStyles}>Cukon {contact.phone}</main>;
};

export default IndexPage;

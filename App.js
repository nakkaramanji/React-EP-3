import React from "react";
import ReactDOM from "react-dom/client";

//React.createElement=ReactElemrnt-Js object=HTML element(render)
const heading = React.createElement(
  "h1",
  { id: "nakka" },
  "nakkka hello how are you"
);
const root = ReactDOM.createRoot(document.getElementById("na"));
console.log(heading);
//JSX=React.createElement=ReactElemrnt-Js object=HTML element(render)
const jsxheading = (
  <h1 id="nakka" className="n" tabIndex={5}>
    hello nakka
  </h1>
);
const an = (
  <h1>
    <a id="t" href="https://ibomma.online/telugu-movies/">
      link
    </a>
  </h1>
);
const img = (
  <img
    src="https://th.bing.com/th/id/OIP.roeJGz3eeyhxK3XRQ0LxpQHaFj?rs=1&pid=ImgDetMain"
    alt="description of image"
  />
);
//React element

const val = 1000;

//React functional components
const Head1 = () => <h1 className="nakka">React functional component</h1>;
const Head = () => {
  return (
    <div>
      <Head1 />

      <h1>component composition</h1>
    </div>
  );
};
const Hea = (
  <div>
    <h1 className="nakka">
      Reactelementtttttttttttttttttttttttttttttttttttttt
    </h1>
    {Head()}
    <Head></Head>
    <Head />
  </div>
);

root.render(Hea);

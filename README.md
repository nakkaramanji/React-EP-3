1.  create scripts
    in package.json create scripts to execute projects eaily or make propudction ready app

"scripts": {
"test": "echo \"Error: no test specified\" && exit 1",
"start":"parcel n.html",
"build":"parcel build n.html"
},

after create scripts we dont need to write full commond like
"npx parcel n.html" for build app
"npx parcel build n.html " for production ready app

we use "npm run start or npm start " instead of "npx parcel n.html"
we use "npm run build" instead of "npx parcel build n.html"

2.  React.createElement is an object =>htmlelement(render)
    const heading=React.createElement("h1",{id:"nakka"},"nakkka hello how are you")
    const root=ReactDOM.createRoot(document.getElementById("na"))
    root.render(heading)

3.  JSX
    jsx is not html in js
    jsx =html-like or xml-like ssyntax
    jsx is jsx not html or xml
    jsx is transpiled before it reaches the js engine
    transpiled means converts the jsx code in the form of browser can understand and react can understand
    transpiled work is done by parcel order to babel that means parcel tells to the babel do this work
    babel package is done transpiled work
    babel
    \*it is also done if older browsers cannot understand es6 features babel transpiled the code older browsers also understands
4.  component
    *class based component -OLD
    use javascript classes to build class based components
    *functional component -NEW
    use javascript functios to build functional components

functional component:-
a function which returns a react element is called functional component
(or)
a function which returns some peace of jsx is called functional component

COMPONENT COMPOSITION:-
calling of one component inside another component
const Head1 = () => <h1 className="nakka">React functional component</h1>;
const Head = () => {
return (

<div>
<Head1 />
<h1>component composition</h1>
</div>
);
};

root.render(<Head />); 5.
jsx makes our code is redable

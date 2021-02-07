import '@google/model-viewer';

function App() {
  return (
    <>
      <model-viewer
        style={{
          width: "100%",
          height: "800px",
          top: "0px", 
          backgroundColor: "grey"
        }}
        src="my-bag.glb"
        camera-controls
        shadow-intensity="1">
      </model-viewer>
      <h2>Trademark info</h2>
      <p>
        5. What are some additional examples of fair use?
        In general, the following uses are considered fair use:

        Use in comparative advertising that is an opinion (or a truthful fact). Example:
        Statement that “BRAND X tastes better than BRAND Z.”
        Use to advertise goods that are being sold or repaired or for which a product is suitable for use. Examples:
        Statement by a repair shop: “We repair ROLLS-ROYCE cars.”
        Use of “iPhone” in non-stylized form on packaging for phone cases to indicate that it is usable with an iPhone.
        Below are additional examples from cases in select jurisdictions.
      </p>
      <a
        rel="noreferrer"
        target="_blank"
        href='https://www.inta.org/fact-sheets/fair-use-of-trademarks-intended-for-a-non-legal-audience/'>
          International trademark association
      </a>
    </>
  );
}

export default App;

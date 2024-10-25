import "../styles/solution.css";

const Graphics = () => {
  return (
    <section className="infographicsSection">
      <h3>Infographics/Charts</h3>
      <div className="infographicBoxes">
        <div className="infographicBox">
          <h4>Chart 1</h4>
          <img src="./images/infographics1.png" alt="Chart 1" />
          <p>
            A flowchart showing how AI-driven algorithmic trading works, from
            data input to trade execution.
          </p>
        </div>
        <div className="infographicBox">
          <h4>Chart 2</h4>
          <img src="./images/infographics2.jpg" alt="Chart 2" />
          <p>
            Pie chart displaying the distribution of fraud detection techniques
            used by financial institutions, with AI holding the majority share.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Graphics;

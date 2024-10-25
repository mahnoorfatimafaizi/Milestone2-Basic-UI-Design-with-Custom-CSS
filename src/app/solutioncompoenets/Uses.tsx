import "../styles/solution.css";

const Uses = () => {
  return (
    <section className="solutionsSection">
      <h2>AI in Finance Use Cases</h2>

      <div className="solutionBox">
        <div className="solutionContent">
          <h3>1. Algorithmic Trading</h3>
          <p>
            <strong>Overview:</strong> AI optimizes trading strategies by
            analyzing large datasets faster than humans. It identifies patterns
            in market data to make high-frequency, accurate trades.
          </p>
          <p>
            <strong>How it Works:</strong> Machine learning algorithms process
            historical data to predict future price movements, allowing traders
            to execute buy and sell orders at optimal times.
          </p>
          <p>
            <strong>Benefits:</strong> Increased trading speed, minimized
            emotional bias, and improved decision-making based on real-time
            data.
          </p>
        </div>
        <img src="./images/solution1.avif" alt="Algorithmic Trading" />
      </div>

      <div className="solutionBox">
        <div className="solutionContent">
          <h3>2. Robo-Advisors</h3>
          <p>
            <strong>Overview:</strong> Robo-advisors are AI-driven tools that
            automate wealth management and financial planning for individuals.
          </p>
          <p>
            <strong>How it Works:</strong> By analyzing user data such as risk
            tolerance, financial goals, and income, AI algorithms recommend
            customized investment portfolios.
          </p>
          <p>
            <strong>Benefits:</strong> Reduced costs, increased accessibility to
            financial planning, and personalized financial advice for users
            without the need for a human advisor.
          </p>
        </div>
        <img src="./images/solution2.avif" alt="Robo-Advisors" />
      </div>

      <div className="solutionBox">
        <div className="solutionContent">
          <h3>3. Fraud Detection</h3>
          <p>
            <strong>Overview:</strong> Machine learning models detect fraudulent
            activities in financial transactions by recognizing unusual
            patterns.
          </p>
          <p>
            <strong>How it Works:</strong> AI systems continuously monitor
            transactions for red flags (e.g., sudden large purchases, irregular
            geographic spending) and alert banks to take action.
          </p>
          <p>
            <strong>Benefits:</strong> Improved security, reduced financial
            loss, and faster detection of suspicious activities compared to
            traditional methods.
          </p>
        </div>
        <img src="./images/solution3.avif" alt="Fraud Detection" />
      </div>

      <div className="solutionBox">
        <div className="solutionContent">
          <h3>4. Credit Scoring</h3>
          <p>
            <strong>Overview:</strong> AI enhances credit scoring by considering
            more variables beyond traditional metrics like income and employment
            history.
          </p>
          <p>
            <strong>How it Works:</strong> Machine learning algorithms assess
            credit risk by analyzing diverse data points, such as spending
            habits and social media activity, offering a more holistic view of a
            person’s creditworthiness.
          </p>
          <p>
            <strong>Benefits:</strong> More accurate risk assessment, greater
            financial inclusion, and faster loan approvals.
          </p>
        </div>
        <img src="./images/solution4.avif" alt="Credit Scoring" />
      </div>
    </section>
  );
};

export default Uses;

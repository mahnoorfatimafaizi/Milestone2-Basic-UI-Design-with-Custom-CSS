import "../styles/solution.css";

const Cases = () => {
  return (
    <section>
      <div className="caseStudies">
        <h3>Case Studies or Examples</h3>
        <div className="caseStudy">
          <img src="./images/case1.jpg" alt="Case Study 1" />
          <p>
            <strong>Case Study 1:</strong> BlackRock’s AI-driven Aladdin
            Platform - BlackRock uses its AI system, Aladdin, to manage risks
            and optimize its investments. Aladdin processes large datasets and
            predicts market movements, providing valuable insights for their
            trading strategies.
          </p>
          <a href="https://www.blackrock.com/aladdin" target="_blank">
            Aladdin® by BlackRock - software for portfolio management
          </a>
        </div>
        <br />
        <br />
        <div className="caseStudy">
          <img src="./images/case2.jpg" alt="Case Study 2" />
          <p>
            <strong>Case Study 2:</strong> Wealthfront - Wealthfront is a
            popular robo-advisor that uses AI to offer financial planning
            services, from investment advice to tax-loss harvesting. It makes
            investing accessible and affordable for people with low to moderate
            incomes.
          </p>
          <a href="https://www.wealthfront.com/" target="_blank">
            Wealthfront: Give all your money a place to grow
          </a>
        </div>
      </div>
    </section>
  );
};

export default Cases;

import "../styles/home.css";

const BenefitsSection = () => {
  return (
    <section className="benefitsSection">
      <h2>Key Benefits</h2>
      <ul className="benefitsList">
        <li className="benefitBox">
          <div className="benefitContent">
            <h3>Predictive Analytics</h3>
            <p>
              AI uses sophisticated algorithms to analyze large volumes of
              financial data, predicting market trends and helping to make more
              informed investment decisions.
            </p>
            <a
              href="https://online.mason.wm.edu/blog/the-future-of-finance-ai-machine-learning-predictive-analytics#:~:text=Analysts%20use%20AI%2Dpowered%20machine,strategies%20and%20risk%20management%20measures."
              target="_blank"
              rel="noopener noreferrer"
            >
              Read more: How AI Is Changing Predictive Analytics in Finance
            </a>
          </div>
          <img src="./images/benefits1.avif" alt="Predictive Analytics" />
        </li>

        <li className="benefitBox">
          <div className="benefitContent">
            <h3>Fraud Detection</h3>
            <p>
              With AI’s machine learning capabilities, real-time fraud detection
              has never been more accurate, minimizing financial risks.
            </p>
            <a
              href="https://www.digitalocean.com/resources/articles/ai-fraud-detection"
              target="_blank"
              rel="noopener noreferrer"
            >
              Read more: AI and Fraud Detection: The Next Frontier in Finance
            </a>
          </div>
          <img src="./images/benefits2.avif" alt="Fraud Detection" />
        </li>
        <li className="benefitBox">
          <div className="benefitContent">
            <h3>Risk Management</h3>
            <p>
              AI enhances risk models by analyzing data faster and more
              precisely, identifying potential risks before they impact your
              financial decisions.
            </p>
            <a
              href="https://kpmg.com/ae/en/home/insights/2021/09/artificial-intelligence-in-risk-management.html#:~:text=In%20risk%20management%2C%20AI%2FML,lower%20degrees%20of%20human%20intervention."
              target="_blank"
              rel="noopener noreferrer"
            >
              Read more: The Role of AI in Financial Risk Management
            </a>{" "}
            <br />
          </div>
          <img src="./images/benefits3.avif" alt="Risk Management" />
        </li>
        <li className="benefitBox">
          <div className="benefitContent">
            <h3>Automation of Financial Processes</h3>
            <p>
              AI automates routine tasks, such as financial reporting and data
              analysis, significantly reducing time and human error.
            </p>
            <a
              href="https://www.fm-magazine.com/news/2024/mar/how-finance-can-start-to-use-ai-automation.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              Read more: How AI is Automating Financial Workflows
            </a>{" "}
            <br />
          </div>
          <img
            src="./images/benefits4.avif"
            alt="Automation of Financial Processes"
          />
        </li>
        <li className="benefitBox">
          <div className="benefitContent">
            <h3>Personalized Financial Services</h3>
            <p>
              AI provides tailored financial products and advice by analyzing
              individual customer data, improving user experiences.
            </p>
            <a
              href="https://www.convinceandconvert.com/ai/how-ai-drives-personalization-in-financial-services/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Read more: AI Personalization: Changing the Way Financial Services
              Operate
            </a>
          </div>
          <img
            src="./images/benefits5.avif"
            alt="Personalized Financial Services"
          />
        </li>
        <li className="benefitBox">
          <div className="benefitContent">
            <h3>Enhanced Regulatory Compliance</h3>
            <p>
              AI helps organizations stay compliant with complex financial
              regulations by automating compliance checks and flagging potential
              violations. This reduces the burden of manual oversight and lowers
              the risk of non-compliance.
            </p>
            <a
              href="https://www.ishn.com/articles/114267-harnessing-ai-for-regulatory-compliance-a-revolutionary-approach#:~:text=The%20role%20of%20AI%20in,answers%20to%20complex%20regulatory%20queries."
              target="_blank"
              rel="noopener noreferrer"
            >
              Read more: AI in Regulatory Compliance: Automating the Financial
              Industry’s Biggest Challenge
            </a>{" "}
            <br />
          </div>
          <img
            src="./images/benefits6.avif"
            alt="Enhanced Regulatory Compliance"
          />
        </li>
      </ul>
    </section>
  );
};

export default BenefitsSection;

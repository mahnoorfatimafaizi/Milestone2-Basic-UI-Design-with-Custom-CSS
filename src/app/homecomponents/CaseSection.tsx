import '../styles/home.css';

const CaseSection = () => {
  return (
    <section className="caseStudiesSection">
        <h2>Success Stories: AI in Action</h2>
        <ul>
          <li>
            <h3>Case Study 1: How a global bank reduced fraud by 30% using machine learning algorithms.</h3>
            <a href="https://www.teradata.com/insights/data-security/fraud-prevention-in-banks" target="_blank">Read more: AI Case Study: Fraud Prevention in Banking</a>
          </li>
          <li>
            <h3>Case Study 2: A hedge fund increased its returns by 15% using AI-driven predictive analytics.</h3>
            <a href="https://www.aima.org/article/press-release-getting-in-pole-position-how-hedge-funds-are-leveraging-gen-ai-to-get-ahead.html" target="_blank">Read more: How Hedge Funds Are Using AI for Financial Gains</a>
          </li>
          <li>
            <h3>Case Study 3: How automation reduced operational costs by 40% for a leading financial firm.</h3>
            <a href="https://www.linkedin.com/pulse/rise-ai-automation-finance-avinash-malladhi/" target="_blank">Read more: The Impact of AI Automation on Financial Services</a>
          </li>
        </ul>
      </section>
  )
}

export default CaseSection
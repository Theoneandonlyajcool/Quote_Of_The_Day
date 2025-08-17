import "../Styles/QuoteItem.css";

const QuoteItems = (props) => {
  const { quotes } = props;
  //   console.log();
  return (
    <div className="q_cont">
      <div className="q_child">
        <div className="quote_of_the_day">" {quotes.quote}"</div>
        <div className="q_author">- {quotes.name}</div>
      </div>
    </div>
  );
};

export default QuoteItems;

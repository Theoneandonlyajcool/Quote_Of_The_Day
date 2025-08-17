import "./App.css";
import { useEffect, useState } from "react";
import quotes from "./Components/Quotes";
import QuoteItems from "./Components/QuoteItems";

const App = () => {
  const [Idx, SetIdx] = useState(0);
  // console.log(quotes.length);

  const Random_Num = () => {
    const rd = Math.floor(Math.random() * quotes.length);
    SetIdx(rd);
    console.log(Idx);
  };

  // console.log(Random_Num)

  useEffect(() => {
    SetIdx(1);
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        height: "100vh",
        alignItems: "center",
      }}
    >
      <div className="Heading">Quote of the day</div>
      <div>
        <QuoteItems quotes={quotes[Idx]} />
      </div>
      <button
        className="Chg_q_btn"
        style={{}}
        // onClick={() => {
        //   if (Idx === quotes.length) {
        //   } else {
        //     SetIdx((Idx + 1) % quotes.length);
        //   }
        // }}

        onClick={Random_Num}
      >
        New Quote
      </button>
      {/* Total Number of Quotes */}
      <div className="Num_of_quotes">
        Total Number of quotes : {quotes.length}
      </div>
    </div>
  );
};

export default App;

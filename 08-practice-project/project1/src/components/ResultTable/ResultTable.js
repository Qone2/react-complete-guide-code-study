import styles from "./ResultTable.module.css";

const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

function ResultTable(props) {
  let tbody = (
    <tbody>
      <tr>
        <td>YEAR NUMBER</td>
        <td>TOTAL SAVINGS END OF YEAR</td>
        <td>INTEREST GAINED IN YEAR</td>
        <td>TOTAL INTEREST GAINED</td>
        <td>TOTAL INVESTED CAPITAL</td>
      </tr>
    </tbody>
  );

  if (props.result.length > 0) {
    tbody = (
      <tbody>
        {props.result.map((e) => (
          <tr key={e.year}>
            <td>{e.year}</td>
            <td>{formatter.format(e.savingsEndOfYear)}</td>
            <td>{formatter.format(e.yearlyInterest)}</td>
            <td>
              ${e.totalInterest.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,")}
            </td>
            <td>
              $
              {e.investedCapital.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,")}
            </td>
          </tr>
        ))}
      </tbody>
    );
  }

  return (
    <table className={styles.result}>
      <thead>
        <tr>
          <th>Year</th>
          <th>Total Savings</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      {tbody}
    </table>
  );
}

export default ResultTable;

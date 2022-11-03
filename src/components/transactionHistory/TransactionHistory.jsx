import css from './transactionHistory.module.css';
import TransactionHistoryItem from './TransactionHistoryItem';

export default function TransactionHistory({ items }) {
  return (
    <table className={css.transactionHistory}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(item => (
          <TransactionHistoryItem
            key={item.id}
            amount={item.amount}
            currency={item.currency}
            type={item.type}
          />
        ))}
      </tbody>
    </table>
  );
}

import css from './transactionHistory.module.css';
import TransactionHistoryItem from './TransactionHistoryItem';
import PropTypes from 'prop-types';

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
TransactionHistory.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};

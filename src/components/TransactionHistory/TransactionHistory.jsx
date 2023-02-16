import css from "./TransactionHistory.module.css"
export const TransactionHistory = ({ items }) => {
    // console.log(items);
    return (
        <table className={css.transactionHistory}>
            <thead className={css.THthead}>
                <tr>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </thead>
            <tbody>
                {items.map(el =>
                    <tr key={el.id}>
                        <td className={css.THtype} >{el.type}</td>
                        <td>{el.amount}</td>
                        <td>{el.currency}</td>
                    </tr> )}
            </tbody>
        </table>)
}
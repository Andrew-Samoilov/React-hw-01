import PropTypes from 'prop-types';
import css from "./Statistics.module.css";

export const Statistics = ({ title, stats }) => {
    function RandomColor() {
        return '#' + (Math.random().toString(16) + '000000').substring(2, 8).toUpperCase();
    };

    return (    
        <section className={css.statistics}>
            {title && (
                <h2 className={css.title}>{title}</h2>
            )}
            <ul className={css.statList}>{
                stats.map(el =>                
                    <li className={css.item} key={el.id} style={{
                        backgroundColor: RandomColor(),
                    }}>                 
                    <span className={css.label}>{el.label}</span>
                    <span className={css.percentage}>{el.percentage} %</span>
                </li>)
            }
            </ul>
        </section>);
}

Statistics.propTypes = {
    title: PropTypes.string.isRequired,
    stats: PropTypes.array.isRequired,
}
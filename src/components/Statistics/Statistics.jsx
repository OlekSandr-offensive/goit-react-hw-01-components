import PropTypes from 'prop-types';
import getRandomColor from './utils/getRandomRgbNum';
import './Statistics.scss';

const Statistics = ({ title, stats }) => {
  return (
    <section className="statistics">
      {title.trim() && <h2 className="title">{title.toUpperCase()}</h2>}
      <ul className="stat-list">
        {stats.map(stat => {
          const { id, label, percentage } = stat;
          return (
            <li
              key={id}
              className="item"
              style={{
                backgroundColor: getRandomColor(),
              }}
            >
              <span className="label">{label}</span>
              <span className="percentage">{percentage}%</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ),
};

export default Statistics;

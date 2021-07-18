import PropTypes from 'prop-types';
import './Statistics.scss';

const Statistics = ({ title, stats }) => {
  const min = 0;
  const max = 255;
  const getRandomRgbNum = () => Math.floor(Math.random() * (max - min) + min);
  return (
    <section className="statistics">
      <h2 className="title">{title.toUpperCase()}</h2>

      <ul className="stat-list">
        {stats.map(stat => (
          <li
            key={stat.id}
            className="item"
            style={{
              backgroundColor: `rgb(${getRandomRgbNum()},${getRandomRgbNum()},${getRandomRgbNum()})`,
            }}
          >
            <span className="label">{stat.label}</span>
            <span className="percentage">{stat.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ),
};

export default Statistics;

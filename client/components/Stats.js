import React from 'react';
import { connect } from 'react-redux';
import { fetchEntriesStats } from '../store/redux/allEntries';
import { Link } from 'react-router-dom';
import {
  LineChart,
  Line,
  Pie,
  PieChart,
  CartesianGrid,
  XAxis,
  YAxis,
  AxisLabel,
} from 'recharts';
import Aos from 'aos';

export class Stats extends React.Component {
  componentDidMount() {
    this.props.getEntries(this.props.match.params.userId);
    Aos.init({ duration: 2000 });
  }
  render() {
    const entries = this.props.entries;
    const minutesArr = entries.map((entry) => entry.minutes);
    const locationsArr = entries.map((entry) => entry.location);
    const uniqueLocations = [...new Set(locationsArr)];
    const boulderFormatter = (value) => `V${value}`;
    // const dateFormatter = (tickItem) => {
    //   return moment(tickItem).format('MMM YY');
    // };
    // const formatXAxis = (tickItem) => {
    //   return tickItem.toLocaleDateString();
    // };

    return (
      <div className="all-stats-page">
        <h1 className="page-title">Your Stats</h1>
        <div className="written-stats-container">
          <div className="stats-title">
            <h3> Total Sessions</h3>
            <h4>{entries.length}</h4>
          </div>
          <div className="stats-title">
            <h3>Total Minutes Climbing</h3>
            <h4>{minutesArr.reduce((a, b) => a + b, 0)}</h4>
          </div>
          <div className="stats-title">
            <h3>Where You Climb</h3>
            <div>
              {uniqueLocations.map((location) => {
                return (
                  <div>
                    <h4>{location}</h4>
                  </div>
                );
              })}{' '}
            </div>
          </div>
        </div>
        <div>
          <div className="stats-chart-container">
            <div className="chart-card" data-aos="fade-up">
              <h1 className="chart-title">Boulder Red Point</h1>
              <LineChart width={400} height={400} data={entries}>
                <Line
                  type="monotone"
                  dataKey="boulderRedPoint"
                  stroke="#FF00F6"
                />
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                <XAxis dataKey="date" />
                <YAxis
                  dataKey="boulderRedPoint"
                  tickFormatter={boulderFormatter}
                />
              </LineChart>
            </div>
            <div className="chart-card" data-aos="fade-up">
              <h1 className="chart-title">Sport Red Point</h1>
              <LineChart width={400} height={400} data={entries}>
                <Line
                  type="monotone"
                  dataKey="sportRedPoint"
                  stroke="#FF00F6"
                />
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                <XAxis dataKey="date" />
                <YAxis
                  dataKey="sportRedPoint"
                  type="number"
                  domain={[5, 5.2]}
                  ticks={[
                    '5.06',
                    '5.07',
                    '5.08',
                    '5.09',
                    '5.1',
                    '5.11',
                    '5.12',
                    '5.13',
                    '5.14',
                  ]}
                  tickCount={9}
                  interval={'preserveStartEnd'}
                />
              </LineChart>
            </div>
            <div className="chart-card" data-aos="fade-up">
              <h1 className="chart-title">Boulder On-Site</h1>
              <LineChart width={400} height={400} data={entries}>
                <Line
                  type="monotone"
                  dataKey="boulderOnSite"
                  stroke="#FF00F6"
                />
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                <XAxis dataKey="date" />
                <YAxis tickFormatter={boulderFormatter} />
              </LineChart>
            </div>
            <div className="chart-card" data-aos="fade-up">
              <h1 className="chart-title">Sport On-Site</h1>
              <LineChart width={400} height={400} data={entries}>
                <Line type="monotone" dataKey="sportOnSite" stroke="#FF00F6" />
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                <XAxis dataKey="date" />
                <YAxis
                  dataKey="sportOnSite"
                  type="number"
                  domain={[5, 5.2]}
                  ticks={[
                    '5.06',
                    '5.07',
                    '5.08',
                    '5.09',
                    '5.1',
                    '5.11',
                    '5.12',
                    '5.13',
                    '5.14',
                  ]}
                  tickCount={9}
                  interval={'preserveStartEnd'}
                />
              </LineChart>
            </div>
            <div className="chart-card" data-aos="fade-up">
              <h1 className="chart-title">Boulder Project</h1>
              <LineChart width={400} height={400} data={entries}>
                <Line
                  type="monotone"
                  dataKey="boulderProject"
                  stroke="#FF00F6"
                />
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                <XAxis dataKey="date" />
                <YAxis tickFormatter={boulderFormatter} />
              </LineChart>
            </div>
            <div className="chart-card" data-aos="fade-up">
              <h1 className="chart-title">Sport Project</h1>
              <LineChart width={400} height={400} data={entries}>
                <Line type="monotone" dataKey="sportProject" stroke="#FF00F6" />
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                <XAxis dataKey="date" />
                <YAxis
                  dataKey="sportProject"
                  type="number"
                  domain={[5, 5.2]}
                  ticks={[
                    '5.06',
                    '5.07',
                    '5.08',
                    '5.09',
                    '5.1',
                    '5.11',
                    '5.12',
                    '5.13',
                    '5.14',
                  ]}
                  tickCount={9}
                  interval={'preserveStartEnd'}
                />
              </LineChart>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userId: state.auth.id,
    entries: state.entries,
  };
};

const mapDispatchToProps = (dispatch, { history }) => {
  return {
    getEntries: (userId) => dispatch(fetchEntriesStats(userId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Stats);

import React from 'react';
import { connect } from 'react-redux';
import { fetchEntries } from '../store/redux/allEntries';
import { Link } from 'react-router-dom';
import {
  LineChart,
  Line,
  Pie,
  PieChart,
  CartesianGrid,
  XAxis,
  YAxis,
} from 'recharts';

export class Stats extends React.Component {
  componentDidMount() {
    this.props.getEntries(this.props.match.params.userId);
  }
  render() {
    const entries = this.props.entries;
    const minutesArr = entries.map((entry) => entry.minutes);
    return (
      <div>
        <div>
          <h1>Total Sessions:</h1>
          <div>{entries.length}</div>
          <h1>Total Minutes Climbing:</h1>
          <div>{minutesArr.reduce((a, b) => a + b, 0)}</div>
        </div>
        <div>
          <h1>Where You Climb:</h1>
          <PieChart width={730} height={250}>
            <Pie
              data={entries}
              dataKey="locations"
              nameKey="locations"
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
              fill="#82ca9d"
              label
            />
          </PieChart>
        </div>
        <div>
          <h1>Boulder Red Point</h1>
          <LineChart width={400} height={400} data={entries}>
            <Line type="monotone" dataKey="boulderRedPoint" stroke="#8884d8" />
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <XAxis dataKey="date" />
            <YAxis />
          </LineChart>
        </div>
        <div>
          <h1>Boulder On-Site</h1>
          <LineChart width={400} height={400} data={entries}>
            <Line type="monotone" dataKey="boulderOnSite" stroke="#8884d8" />
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <XAxis dataKey="date" />
            <YAxis />
          </LineChart>
        </div>
        <div>
          <h1>Boulder Project</h1>
          <LineChart width={400} height={400} data={entries}>
            <Line type="monotone" dataKey="boulderProject" stroke="#8884d8" />
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <XAxis dataKey="date" />
            <YAxis />
          </LineChart>
        </div>
        <div>
          <h1>Sport Red Point</h1>
          <LineChart width={400} height={400} data={entries}>
            <Line type="monotone" dataKey="sportRedPoint" stroke="#8884d8" />
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <XAxis dataKey="date" />
            <YAxis />
          </LineChart>
        </div>
        <div>
          <h1>Sport On-Site</h1>
          <LineChart width={400} height={400} data={entries}>
            <Line type="monotone" dataKey="sportOnSite" stroke="#8884d8" />
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <XAxis dataKey="date" />
            <YAxis />
          </LineChart>
        </div>
        <div>
          <h1>Sport Project</h1>
          <LineChart width={400} height={400} data={entries}>
            <Line type="monotone" dataKey="sportProject" stroke="#8884d8" />
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <XAxis dataKey="date" />
            <YAxis />
          </LineChart>
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
    getEntries: (userId) => dispatch(fetchEntries(userId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Stats);

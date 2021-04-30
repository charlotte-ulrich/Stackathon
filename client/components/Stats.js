import React from 'react';
import { connect } from 'react-redux';
import { fetchEntries } from '../store/redux/allEntries';
import { Link } from 'react-router-dom';
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';

export class Stats extends React.Component {
  componentDidMount() {
    this.props.getEntries(this.props.match.params.userId);
  }
  render() {
    const entries = this.props.entries;

    const nums = entries.map((entry) => ({
      ...entry,
      sportOnSite: Number(entry.sportOnSite),
    }));

    console.log(nums);
    return (
      <div>
        <LineChart
          width={400}
          height={400}
          data={nums}
          margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
        >
          <Line type="monotone" dataKey="sportOnSite" stroke="#8884d8" />
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <XAxis dataKey="date" />
          <YAxis />
        </LineChart>
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

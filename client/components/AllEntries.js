import React from 'react';
import { connect } from 'react-redux';
import { fetchEntries } from '../store/redux/allEntries';
import { Link } from 'react-router-dom';
import { CreateEntry } from './CreateEntry';

export class AllEntries extends React.Component {
  componentDidMount() {
    this.props.getEntries(this.props.match.params.userId);
  }
  render() {
    const entriesArr = this.props.entries;
    const { userId } = this.props.match.params;
    return (
      <div>
        <div>
          <Link to={`/journal/${userId}/new-entry`}>New Entry</Link>
        </div>
        <div>
          {entriesArr !== undefined && entriesArr.length > 0 ? (
            <div>
              {entriesArr.map((entry) => {
                return (
                  <div key={entry.id} className="flex-item">
                    <Link to={`/journal/${userId}/${entry.id}`}>
                      <h2>{entry.date}</h2>
                      <h3>{entry.title}</h3>
                    </Link>
                    <p>{entry.location}</p>
                  </div>
                );
              })}
            </div>
          ) : (
            <h2>Journal loading</h2>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    entries: state.entries,
    userId: state.auth.id,
  };
};

const mapDispatchToProps = (dispatch, { history }) => {
  return {
    getEntries: (userId) => dispatch(fetchEntries(userId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AllEntries);

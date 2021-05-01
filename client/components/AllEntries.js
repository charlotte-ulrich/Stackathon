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
      <div className="all-entries-page">
        <h1 className="page-title">Your Journal</h1>
        <div>
          {entriesArr !== undefined && entriesArr.length > 0 ? (
            <ul className="all-entries-view">
              <Link to={`/journal/${userId}/new-entry`}>
                <div className="entry-card">
                  <h2 className="new-entry-link">New Entry</h2>
                  <img
                    src="https://www.pngkey.com/png/full/115-1152868_png-white-plus-sign-vector-transparent-library-plus.png"
                    className="new-entry-img"
                  />
                </div>
              </Link>

              {entriesArr.map((entry) => {
                return (
                  <div>
                    <Link to={`/journal/${userId}/${entry.id}`}>
                      <div key={entry.id} className="entry-card">
                        <h2 className="entry-title">{entry.title}</h2>
                        <h3 className="entry-details">{entry.date}</h3>
                        <h3 className="entry-details">{entry.location}</h3>
                      </div>
                    </Link>
                  </div>
                );
              })}
            </ul>
          ) : (
            <div>
              <Link to={`/journal/${userId}/new-entry`}>
                <div className="entry-card">
                  <h2 className="new-entry-link">New Entry</h2>
                  <img
                    src="https://www.pngkey.com/png/full/115-1152868_png-white-plus-sign-vector-transparent-library-plus.png"
                    className="new-entry-img"
                  />
                </div>
              </Link>
            </div>
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

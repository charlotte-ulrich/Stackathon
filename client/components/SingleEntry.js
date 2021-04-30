import React from 'react';
import { connect } from 'react-redux';
import { fetchDeleteEntry, fetchSingleEntry } from '../store/redux/singleEntry';
import { Link } from 'react-router-dom';
import EditEntry from './EditEntry';

export class SingleEntry extends React.Component {
  constructor() {
    super();
    this.state = {
      editRequested: false,
      deleteRequested: false,
      deleted: false,
    };
    this.onEditClick = this.onEditClick.bind(this);
    this.onDeleteClick = this.onDeleteClick.bind(this);
    this.deleted = this.deleted.bind(this);
  }
  componentDidMount() {
    this.props.getEntry(
      this.props.match.params.userId,
      this.props.match.params.entryId
    );
  }
  onDeleteClick() {
    this.setState({ deleteRequested: true });
  }
  onEditClick() {
    this.setState({ editRequested: true });
  }
  deleted() {
    this.setState({ deleted: true });
  }

  render() {
    const entry = this.props.entry;
    const { userId } = this.props.match.params;
    if (this.state.deleteRequested === false) {
      return (
        <div className="single-product-card">
          <div className="single-product-container">
            <h2 className="single-product-name">{entry.title}</h2>
            <h2>{entry.date}</h2>
            <h3>Time: {entry.minutes} minutes</h3>
            <div>
              {entry.type === 'boulder' ? (
                <div>
                  <ul>
                    <li>Red Point: V{entry.boulderRedPoint}</li>
                    <li>On site: V{entry.boulderOnSite}</li>
                    <li>Project: V{entry.boulderProject}</li>
                  </ul>
                </div>
              ) : (
                <div>
                  <ul>
                    <li>Red Point: {entry.sportRedPoint}</li>
                    <li>On site: {entry.sportOnSite}</li>
                    <li>Project: {entry.sportProject}</li>
                  </ul>
                </div>
              )}
            </div>
            <p>{entry.location}</p>
            <p>{entry.shoes}</p>
            <p>{entry.notes}</p>
          </div>
          <div>
            <button type="button" onClick={() => this.onEditClick()}>
              Edit Entry
            </button>
            {this.state.editRequested ? <EditEntry /> : ''}
          </div>
          <div>
            <button type="button" onClick={() => this.onDeleteClick()}>
              Delete Entry
            </button>
            {/* <EditEntry /> */}
          </div>
        </div>
      );
    } else {
      if (this.state.deleted === false) {
        return (
          <div>
            <h2>Are you sure you want to delete this entry?</h2>
            <button
              type="button"
              onClick={() => {
                this.props.deleteEntry(userId, entry.id);
                this.deleted();
              }}
            >
              Delete Entry
            </button>
            <Link to={`/journal/${userId}/${entry.id}`}>Cancel</Link>
          </div>
        );
      } else {
        return (
          <div>
            <h2>This entry has been deleted</h2>
            <Link to={`/journal/${userId}`}>Return to all entries</Link>
          </div>
        );
      }
    }
  }
}

const mapStateToProps = (state) => {
  return {
    entry: state.entry,
    userId: state.auth.id,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getEntry: (userId, entryId) => dispatch(fetchSingleEntry(userId, entryId)),
    deleteEntry: (userId, entryId) =>
      dispatch(fetchDeleteEntry(userId, entryId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleEntry);

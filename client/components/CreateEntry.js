import React from 'react';
import { fetchCreateEntry } from '../store/redux/allEntries';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

export class CreateEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      minutes: 0,
      location: '',
      type: 'sport',
      notes: '',
      date: new Date(),
      sportRedPoint: null,
      boulderRedPoint: null,
      sportOnSite: null,
      boulderOnSite: null,
      sportProject: null,
      boulderProject: null,
      shoes: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.createEntry(this.props.userId, { ...this.state });
  }

  render() {
    console.log(this.props);
    const {
      title,
      minutes,
      location,
      type,
      notes,
      date,
      sportRedPoint,
      boulderRedPoint,
      sportOnSite,
      boulderOnSite,
      sportProject,
      boulderProject,
      shoes,
    } = this.state;
    const { handleSubmit, handleChange } = this;
    return (
      <div>
        <h3>New Entry</h3>
        <form id="newEntry" onSubmit={handleSubmit}>
          <label>Entry Title:</label>
          <input name="title" onChange={handleChange} value={title} />
          <p>
            <label>Date:</label>
            <input
              type="date"
              name="date"
              onChange={handleChange}
              value={date}
            />
          </p>
          <p>
            <label>Minutes:</label>
            <input name="minutes" onChange={handleChange} value={minutes} />
          </p>
          <p>
            <label>Location:</label>
            <input name="location" onChange={handleChange} value={location} />
          </p>
          <p>
            <label>Type:</label>
            <select name="type" onChange={handleChange} value={type}>
              <option value="sport">Sport</option>
              <option value="boulder">Bouldering</option>
            </select>
          </p>
          {type === 'boulder' ? (
            <div>
              <p>
                <label>Boulder Red Point:</label>
                <select
                  name="boulderRedPoint"
                  onChange={handleChange}
                  value={boulderRedPoint}
                >
                  <option value="chooseOne">Choose One</option>
                  <option value="V0">V0</option>
                  <option value="V1">V1</option>
                  <option value="V2">V2</option>
                  <option value="V3">V3</option>
                  <option value="V4">V4</option>
                  <option value="V5">V5</option>
                  <option value="V6">V6</option>
                  <option value="V7">V7</option>
                  <option value="V8">V8</option>
                  <option value="V9">V9</option>
                  <option value="V10+">V10+</option>
                </select>
              </p>
              <p>
                <label>Boulder OnSite:</label>
                <select
                  name="boulderOnSite"
                  onChange={handleChange}
                  value={boulderOnSite}
                >
                  <option value="chooseOne">Choose One</option>
                  <option value="V0">V0</option>
                  <option value="V1">V1</option>
                  <option value="V2">V2</option>
                  <option value="V3">V3</option>
                  <option value="V4">V4</option>
                  <option value="V5">V5</option>
                  <option value="V6">V6</option>
                  <option value="V7">V7</option>
                  <option value="V8">V8</option>
                  <option value="V9">V9</option>
                  <option value="V10+">V10+</option>
                </select>
              </p>
              <p>
                <label>Boulder Project:</label>
                <select
                  name="boulderProject"
                  onChange={handleChange}
                  value={boulderProject}
                >
                  <option value="chooseOne">Choose One</option>
                  <option value="V0">V0</option>
                  <option value="V1">V1</option>
                  <option value="V2">V2</option>
                  <option value="V3">V3</option>
                  <option value="V4">V4</option>
                  <option value="V5">V5</option>
                  <option value="V6">V6</option>
                  <option value="V7">V7</option>
                  <option value="V8">V8</option>
                  <option value="V9">V9</option>
                  <option value="V10+">V10+</option>
                </select>
              </p>
            </div>
          ) : (
            <div>
              <p>
                <label>Sport Red Point:</label>
                <select
                  name="sportRedPoint"
                  onChange={handleChange}
                  value={sportRedPoint}
                >
                  <option value="chooseOne">Choose One</option>
                  <option value="5.6">5.6</option>
                  <option value="5.7">5.7</option>
                  <option value="5.8">5.8</option>
                  <option value="5.9">5.9</option>
                  <option value="5.10">5.10</option>
                  <option value="5.11">5.11</option>
                  <option value="5.12">5.12</option>
                  <option value="5.13">5.13</option>
                  <option value="5.14+">5.14+</option>
                </select>
              </p>
              <p>
                <label>Sport OnSite:</label>
                <select
                  name="sportOnSite"
                  onChange={handleChange}
                  value={sportOnSite}
                >
                  <option value="chooseOne">Choose One</option>
                  <option value="5.6">5.6</option>
                  <option value="5.7">5.7</option>
                  <option value="5.8">5.8</option>
                  <option value="5.9">5.9</option>
                  <option value="5.10">5.10</option>
                  <option value="5.11">5.11</option>
                  <option value="5.12">5.12</option>
                  <option value="5.13">5.13</option>
                  <option value="5.14+">5.14+</option>
                </select>
              </p>
              <p>
                <label>Sport Project:</label>
                <select
                  name="sportProject"
                  onChange={handleChange}
                  value={sportProject}
                >
                  <option value="chooseOne">Choose One</option>
                  <option value="5.6">5.6</option>
                  <option value="5.7">5.7</option>
                  <option value="5.8">5.8</option>
                  <option value="5.9">5.9</option>
                  <option value="5.10">5.10</option>
                  <option value="5.11">5.11</option>
                  <option value="5.12">5.12</option>
                  <option value="5.13">5.13</option>
                  <option value="5.14+">5.14+</option>
                </select>
              </p>
            </div>
          )}
          <p>
            <label>Shoes:</label>
            <input name="shoes" onChange={handleChange} value={shoes} />
          </p>
          <label>Notes:</label>
          <p>
            <textarea name="notes" onChange={handleChange} value={notes} />
          </p>
          <div className="admin-button-container">
            <div className="edit-cta">
              <button type="submit">Submit</button>
            </div>
            <div>
              <a href={`/journal/${this.props.userId}/`}>Cancel</a>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userId: state.auth.id,
  };
};

const mapDispatchToProps = (dispatch, { history }) => {
  return {
    createEntry: (userId, entry) => dispatch(fetchCreateEntry(userId, entry)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateEntry);

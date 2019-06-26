import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
import { swapiThunk } from '../actions'

import Loader from "react-loader-spinner";


class CharacterListView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.swapiThunk()
    console.log(this.props.characters)
    // call our action
  }

  render() {
    if (this.props.isFetching) {
      return (<Loader type="Grid" color="red"/>)
    }
    else if (this.props.error) {
      return (<h1>{this.props.error}</h1>)
    }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
}

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
const mapState = (state) => {
  return {
    characters: state.charsReducer.characters,
    isFetching: state.charsReducer.isFetching,
    error: state.charsReducer.error,
  }
}
export default connect( mapState, { swapiThunk })(CharacterListView);

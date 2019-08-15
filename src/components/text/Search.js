import React from 'react';
import axios from 'axios';
import { Consumer } from '../../context'

class Search extends React.Component {
  state = {
    dataId:  ""
  }

  findID = (dispatch, event) => {
    event.preventDefault();
    axios.get(`http://localhost:3000/data/${this.state.dataId}`)
      .then(resp => {
        console.log(resp.data)
        // dispatch({
        //   type: 'SEARCH_ID',
        //   payload: resp.data
        // })
        // this.setState({text: resp.data })
      })
  }

  onChange = event => {
    let value = event.target.value;
    this.setState({
      [event.target.name]: value
    })

  }
  render() {
    return(
      <Consumer>
        {value => {
          console.log(value)
          const { dispatch } = value;
          return (
            <div className="card card-body mb-4 p-4">
              <h1 className="display-4 text-center">
              </h1>
              <p className="lead text-center">Search By ID</p>
              <form onSubmit={this.findID.bind(this, dispatch)}>
                <div className="form-group">
                  <input type="text"
                  className="form-control form-control-lg"
                  placeholder="Data ID...."
                  name="dataId"
                  value={this.state.dataId}
                  onChange={this.onChange}
                  />
                </div>
                <button
                className="btn btn-primary btn-lg btn-block mb-5"
                type="submit"
                > Get Data By ID
                </button>
              </form>
            </div>
          )
        }}
      </Consumer>
    )
  }
}

export default Search;

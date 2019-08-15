import React from 'react'
import axios from 'axios'
import Spinner from '../layout/Spinner'
import { Link } from 'react-router-dom'
import Moment from 'react-moment'

class Texts extends React.Component {
  state = {
    text: {}
  }

  componentDidMount() {
    // this.props.match.params.id gets the id from the url we created.
    axios.get(`http://localhost:3000/data/${this.props.match.params.id}`)
      .then(resp => {
        // console.log(resp.data)
        this.setState({text: resp.data })
      })
  }


  render() {
    const { text } = this.state
    console.log("state:", text);
    if (
      text === undefined ||
      Object.keys(text).length === 0) {
      return <Spinner />
    } else {
      return (
        <React.Fragment>
          <Link to="/" className="btn btn-dark btn-sm mb-4">Go Back</Link>
            <div className="card">
              <h5 className="card-header">

                Text URL: <span className="text-secondary">{text.url}</span>
              </h5>
              <div className="card-body">
                <p className="card-text">{text.text}</p>
              </div>
            </div>

            <ul className="list-group mt-3">
              <li className="list-group-item">
                <strong>PDF: </strong>: {text.pdf}
              </li>
              <li className="list-group-item">
                <strong>Created: </strong>: <Moment format="MM/DD/YYYY">{text.created}</Moment>
              </li>
            </ul>

        </React.Fragment>
      )
    }
  }
}

export default Texts;

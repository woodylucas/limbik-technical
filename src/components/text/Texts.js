import React from 'react'
import axios from 'axios'

class Texts extends React.Component {
  state = {
    texts: {}
  }

  componentDidMount() {
    // this.props.match.params.id gets the id from the url we created.
    axios.get(`http://localhost:3000/data/${this.props.match.params.id}`)
      .then(resp => {
        console.log(resp.data)
        // this.setState({data_list: resp.data })
      })
  }


  render() {
    return(
      <div>
        <h1>Texts</h1>
      </div>
    )
  }
}

export default Texts;

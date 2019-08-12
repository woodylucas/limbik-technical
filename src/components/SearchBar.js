import React from 'react'

class SearchBar extends React.Component {
  state = {
    searchTerm: ""
  };
  render() {
    return(
      <form>
        <input text="text" placeholder="Search by ID"/>
        <button>Search</button>
      </form>
    )
  }
}

export default SearchBar

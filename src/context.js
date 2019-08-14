import React from 'react';

const Context = React.createContext();

class Provider extends React.Component {
  state = {
    data_list: [
      { data: { data_name:'abc' } },
      { data: { data_name:'123'} }
    ],
    heading: 'Description'
  }
  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    )
  }
}

export const Consumer = Context.Consumer;

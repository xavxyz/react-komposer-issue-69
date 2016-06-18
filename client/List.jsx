import React from 'react'
const List = ({data}) => (
  <div>
    {data.map(({id, name}) => (
      <p>{id} {name}</p>
    ))}
  </div>
)
/**
class List extends React.Component {
  constructor(props) {
    console.log('constructor')
    super(props)
  }
  render() {
    console.log('render')
    return (
      <div>
        {this.props.data.map(({id, name}) => (
          <p>{id} {name}</p>
        ))}
      </div>
    )
  }
  componentDidMount() {
    console.log('componentDidMount')
  }
}
*/
export default List

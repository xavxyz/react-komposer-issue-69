import React from 'react'
import { compose } from 'react-komposer'
import List from './List.jsx'

export const documentComposer = (props, onData) => {
  console.log('documentComposer', props)
  let data = [
    {id: 0, name: 'foo'}, {id: 1, name: 'bar'}
  ]
  onData(null, {data})
}

const DocumentContainer = ({component, componentProps}) => {
  const ComposedComponent = compose(documentComposer)(component);
  return <ComposedComponent {...componentProps} />;
};

export default DocumentContainer

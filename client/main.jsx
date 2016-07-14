import React from 'react'
import DocumentContainer from './DocumentContainer.jsx'
import List from './List.jsx'

const Main = () => (
  <DocumentContainer component={List} componentProps={{listSpecificProps: 'pipo'}}/>
)

export default Main

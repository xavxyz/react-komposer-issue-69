import React from 'react'
import {mount} from 'react-mounter'
import Layout from './layout.jsx'
import Main from './main.jsx'

FlowRouter.route("/", {
  name: "main",
  action() {
    mount(Layout, {
      content: (<Main />)
    })
  }
})

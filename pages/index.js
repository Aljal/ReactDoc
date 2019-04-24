import React from 'react'
import { withRouter } from 'next/router'
import Layout from "../components/Layout"
import Menu from "../components/Menu"
import Doc from "../ressources/json/doc"

function Index(props) {
  return (
    <Layout>
      <Menu doc={Doc}/>
    </Layout>
  )
}

export default withRouter(Index)
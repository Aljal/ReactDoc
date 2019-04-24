import React from 'react'
import { withRouter } from 'next/router'
import Layout from "../components/Layout"
import Menu from "../components/Menu"

function Index(props) {
  const doc = props.router.query.doc

  return (
    <Layout>
      <Menu doc={doc}/>
    </Layout>
  )
}

export default withRouter(Index)
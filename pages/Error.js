import React from 'react'
import { withRouter } from 'next/router'
import Layout from '../components/Layout'
import Button from '../components/Button'
import '../style/error.scss';

function Error(props) {
  return (
    <Layout>
      <div className="oups"><h2>Oups ...</h2></div>
      <p className="alignCenter">{props.router.query.error}</p>
      <p className="alignCenter">Code: {props.router.query.code}</p>
      <Button className="returnHome" text="Return to home" link="/"/>
    </Layout>
  )
}

export default withRouter(Error)
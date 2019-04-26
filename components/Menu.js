import React from 'react';
import Link from 'next/link'
import { CSSTransition } from 'react-transition-group';
import Button from '../components/Button'

import '../style/menu.scss';
import '../style/animation.scss';

function Method(props) {
  console.log(props.method.name + ' ' + props.method.parameters.length + ' ' + props.method.type.toUpperCase())
  console.log(props.method.name + ' ' + (props.method.parameters.length == 0 && props.method.type.toUpperCase() == 'GET').toString())
    return (
      <div id={"method-" + props.id} className="method">
        <span className="name">{props.method.name}</span>
        <div className="description">
          <p>
            <span className="header">Description :</span>
            <span className="content">{props.method.description}</span>
          </p>
          <p>
            <span className="header">URL :</span>
            <span className="content">{props.method.url}</span>
          </p>
          <p>
          {props.method.parameters.map((value, i) => {
            if (i == 0)
              return (
                <div key={i}>
                  <span className="header" key={i}>Parameters :</span>
                  <span className="content" key={i}>{value}</span>
                </div>
              )
            return (<span className="content" key={i}>{value}</span>)
          })}
          </p>
          <p>
            <span className="header">Return :</span>
            {props.method.return.map((value, i) => {
              return (
                <span className="content" key={i}>Status {value.status} : Return a JSON containing <strong>{value.json_content}</strong></span>
              )
            })}
          </p>
          {props.method.parameters.length == 0 && props.method.type.toUpperCase() == 'GET' &&
            <Button className="test" text={"Tester " + props.method.url} link={props.method.url}/>
          }
        </div>
      </div>
    )
}

class Endpoint extends React.Component {
  constructor(props) {
    super(props)
    this.state = {toShow: 0}
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(key) {
    this.setState(state => ({
      toShow: key
    }))
  }

  render() {
    return (
      <div>
        <div className="method-list">
          <h3>{this.props.doc.title}</h3>
          {this.props.doc.bdd_keyword.map((value, key) => {
            return <li key={key}>{value}</li>
          })}
          <ul style={{padding: 0}}>
            {this.props.doc.methods.map((value, key) => {
              return (
                  <li md={4} className="api-call" key={key}><a href="#" onClick={this.handleClick.bind(this, key)}>{value.name} ({value.type.toUpperCase()})</a></li>
              )
            })}
          </ul>
        </div>
        {this.props.doc.methods.map((value, key) => {
          return (
              <CSSTransition
                in={key == this.state.toShow && this.props.id == 0}
                timeout={600}
                classNames="alert"
                unmountOnExit
                key={key}
              >
                <Method method={value} toShow={this.state.toShow} id={key}/>
              </CSSTransition>
          )
        })}
      </div>
    )
  }
}


function Menu(props) {
  return (
    <div>
      <h2 className="api-methods">API methods :</h2>
      {props.doc.map((value, key) =>
        <Endpoint doc={value} key={key} id={key}/>
      )}
    </div>
  )
}

export default Menu
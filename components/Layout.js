import { Container } from 'react-bootstrap'
import '../style/header.scss'

const Header = () => (
  <div id="header">
    <img src="jobmeup_logo.jpg"/>
    <div className="content">
      <h1 id="welcome">Welcome</h1>
      <span>To JobMeUp API</span>
    </div>
  </div>
)

const Layout = props => (
  <Container>
    <Header />
    {props.children}
  </Container>
)

export default Layout
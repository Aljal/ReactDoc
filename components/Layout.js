import '../style/header.scss'

const Header = () => (
  <div id="header">
    <img src="jobmeup_logo.png"/>
    <div className="content">
      <h1 id="welcome">Welcome</h1>
      <span>To JobMeUp API</span>
    </div>
  </div>
)

const Layout = props => (
  <div className="container">
    <Header />
    {props.children}
  </div>
)

export default Layout
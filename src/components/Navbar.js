import React from 'react'

export default function Navbar(props) {
  return (
   <>
<nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
  <a className="navbar-brand" href="/">Online Tools & Resources</a> 
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <a className="nav-link" href="/">Case Converter </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/color-picker">Color Picker</a>
      </li>
      
    </ul>
  </div>

  <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
  <input onClick={props.toggleMode} className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Darkmode</label>
  </div>
</div>
</nav>
   </>
  )
}

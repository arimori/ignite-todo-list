import '../styles/header.scss';

import Logo from '../assets/logo.svg';


export function Header() {
  return (
    <header className="header">
      <div>
        <img src={Logo} alt="to.do" />
      </div>
    </header>
  )
}
import { Link, useNavigate } from "react-router-dom"
import ToggleTheme from "./ToggleTheme"
import logo from '../imagens/logo.png'
import BurgerMenu from "./menuHamburguer"

const Header = ({ dados }) => {
  const navigate = useNavigate()
  const logout = () => {
    localStorage.clear()
    navigate('/')
    window.location.reload(true);
  }

  
  return (
    <header className="flex w-full h-20 p-5 border-gray-100 bg-[#230033] sm:bg-gradient-to-r to-[#6703a4] from-60% from-[#230033] md:dark:bg-gradient-to-r to-[#6703a4] from-45% from-[#230033] justify-between items-center border-b-2 dark:border-[#280B4D]">
      <Link to={"/"}>
        <img className='w-[210px] h-[42px] md:hidden' src={logo} alt="" />
      </Link>
      <nav className=" md:block w-screen">
        <ul className="hidden list-none md:flex items-center justify-center space-x-9">
          <li className="text-dark-100 dark:text-blue-50">
            <Link to={"/"}>
              <img className='w-[120px] h-[42px]' src={logo} alt="" />
            </Link>
          </li>
          <ul className="list-none flex items-center justify-center space-x-9">
            <li className="text-dark-100 dark:text-blue-50">
              Para o seu negócio
            </li>
            <li className="text-dark-100 dark:text-blue-50">
              Sobre nós
            </li>
            <li className="text-dark-100 dark:text-blue-50">
              Dúvidas
            </li>
          </ul>
          <ul className="list-none flex items-center justify-center space-x-9">
            <li className="h-[5vh] rounded-full bg-gradient-to-r from-pink-600 via-red-500 to-blue-700 p-[3px]">
              <div className="flex rounded-full h-full w-full items-center justify-center bg-white dark:bg-[#010D29] text-dark-100 dark:text-white p-3">
                <Link to={"/Cadastro"}>
                  Create your account
                </Link>
              </div>
            </li>
            {
              !dados ?
                <li><Link to={'/Login'} className='text-white hover:text-red-800'>Login</Link></li>
                : <><li><Link to={'/Login'} className='text-white hover:text-red-800'>{dados.login}</Link></li>
                  <li><Link to={'/'} className='text-white hover:text-red-800' onClick={logout}>Sair</Link></li></>
            }
          </ul>
        </ul>
      </nav>
      
      <ToggleTheme />
    </header>
  )
}

export default Header

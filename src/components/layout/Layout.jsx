import { Outlet, Link } from "react-router-dom"
import { useContext } from "react"
import { ThemeContext } from "../../themes/ThemeContext"
import Button from "../Button"

const Layout = () => {

  const { theme } = useContext(ThemeContext)

  return (
    <div className={`App ${theme}`}>

      <nav>
        <Link to="/">Home</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/myjob">MyJob</Link>
      </nav>

      <Button />

      <Outlet />

    </div>
  );
};

export default Layout
import{Outlet,Link} from "react-router-dom"
import Button from "..components/Button"

const Layout=()=>{
    return(
        <>/
        <nav>/
            <Link to="/" >Home</Link>
            <Link to="/profile" >Profile</Link>
            <Link to="/myjob" >MyJob</Link>
        </nav>

        <Button />

        <Outlet />
        </>
    )
}

export default Layout
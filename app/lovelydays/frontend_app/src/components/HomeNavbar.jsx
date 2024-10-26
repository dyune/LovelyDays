import {Link} from "react-router-dom";
import {useContext} from "react";
import AuthContext from "./AuthProvider.jsx";

export default function HomeNavbar() {

    const {user, logoutUser} = useContext(AuthContext);

    return <>
        <div className="navbar bg-primary py-3">
            <div className="flex-1">
                <ul className="flex space-x-2">
                    <div className="btn btn-ghost text-xl">
                        <Link to="/">lovelyDays</Link>
                    </div>
                    {!user &&
                        <div className="btn btn-ghost">
                            <Link to="/login">login</Link>
                        </div>
                    }
                    {!user &&
                        <div className="btn btn-outline">
                            <Link to="/signup">signup</Link>
                        </div>
                    }
                </ul>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <li><a>search for a calendar</a></li>
                    {user && <li><a onClick={logoutUser}>logout</a></li>}
                </ul>
            </div>

        </div>
    </>
}
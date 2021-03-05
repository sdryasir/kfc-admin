import { Link } from "react-router-dom";
function Sidebar() {
    return (
        <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
            <div className="position-sticky pt-3">
                <ul className="nav flex-column">
                    <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/home">
                            <i className="bi bi-grid-3x3-gap pe-2"></i>
              Dashboard
            </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="#">
                            <i className="bi bi-files pe-2"></i>
                                Orders
                        </Link>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            <i className="bi bi-cart4 pe-2"></i>
                            Products
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            <i className="bi bi-file-person pe-2"></i>
                            Users
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            <i className="bi bi-file-earmark-bar-graph pe-2"></i>
                            Reports
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
export default Sidebar;
import { Link } from 'react-router-dom'

const Banner = props => (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
            <a className="navbar-brand" href="#">{props.title ?? "AppTitle"}</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <Link class="nav-link" to="/">Home</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" to="/contactUs">Contact Us</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" to="/friends">Friends List</Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
);

export default Banner;
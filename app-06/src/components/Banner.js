
const Banner = props => (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
            <a className="navbar-brand" href="#">{props.title??"AppTitle"}</a>
        </div>
    </nav>
);

export default Banner;
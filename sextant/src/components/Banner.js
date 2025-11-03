import './Banner.css';

function Banner() {
    return (
        <header className="banner">
            <h1 className="banner-title">Sextant</h1>
            <nav className="banner-nav">
                <ul>
                    <li><a href="/">Dashboard Home</a></li>
                    <li><a href="/alerts">Alerts</a></li>
                    <li><a href="/settings">Settings</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Banner;

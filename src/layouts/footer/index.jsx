import { Link } from "react-router-dom";
import FooterLogo from "../../components/footer-logo";

const Footer = () => {
    return (
        <footer className="footer-area reveal-footer border-top-style">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="footer-content">
                            <div className="widget-item">
                                <div className="widget-footer-nav">
                                    <nav>
                                        <ul>
                                            <li>
                                                <Link
                                                    to={
                                                        process.env.PUBLIC_URL +
                                                        "/o_nama"
                                                    }
                                                >
                                                    o nama
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    to={
                                                        process.env.PUBLIC_URL +
                                                        "/galerija"
                                                    }
                                                >
                                                    slike
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    to={
                                                        process.env.PUBLIC_URL +
                                                        "/kontakt"
                                                    }
                                                >
                                                    kontakt
                                                </Link>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                            <div className="widget-item text-center">
                                <div className="about-widget">
                                    <FooterLogo
                                        image={`${process.env.PUBLIC_URL}/img/logo.svg`}
                                    />
                                </div>
                                <div className="widget-copyright">
                                    <p>
                                        © 2023 <span>Lssadora Photography</span>
                                        . <br></br> Made by{" "}
                                        <a
                                            target="_blank"
                                            href="http://srdjanmilosevic.com/"
                                            rel="noreferrer"
                                        >
                                            Srđan.
                                        </a>
                                    </p>
                                </div>
                            </div>
                            <div className="widget-item">
                                <ul className="widget-social">
                                    <li className="social-text"></li>
                                    <li>
                                        <a
                                            href="https://twitter.com/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <i className="social_twitter"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="https://www.facebook.com/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <i className="social_facebook"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="https://www.instagram.com/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <i className="social_instagram"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

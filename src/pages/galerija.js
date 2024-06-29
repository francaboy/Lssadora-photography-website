import React from "react";
import ScrollToTop from "../components/scroll-to-top/index.jsx";
import SEO from "../components/seo/index.jsx";
import QuteContainer from "../containers/global/global-qute/index.jsx";
import PortfolioContainer from "../containers/global/portfolio/index.jsx";
import Footer from "../layouts/footer/index.jsx";
import Header from "../layouts/header/index";
import Layout from "../layouts/index";

const Galerija = () => {
    return (
        <React.Fragment>
            <Layout>
                <SEO title="Lssadora | Galerija" />
                <div className="wrapper home-default-wrapper">
                    <Header classOption="hb-border" />
                    <div className="main-content">
                        <PortfolioContainer />
                    </div>
                    <Footer />
                    <ScrollToTop />
                </div>
            </Layout>
        </React.Fragment>
    );
};

export default Galerija;

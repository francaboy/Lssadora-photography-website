import React from "react";
import ScrollToTop from "../components/scroll-to-top/index.jsx";
import SEO from "../components/seo/index.jsx";
import AboutAward from "../containers/about/about-award/index.jsx";
import AboutService from "../containers/about/about-service/index.jsx";
import Blockquote from "../containers/about/blockquote/index.jsx";
import AboutGallery from "../containers/about/gallery/index.jsx";
import TeamContainer from "../containers/about/team/index.jsx";
import BrandContainer from "../containers/global/brand/index.jsx";
import PageTitleContainer from "../containers/global/page-title/index.jsx";
import Footer from "../layouts/footer/index.jsx";
import Header from "../layouts/header/index";
import Layout from "../layouts/index";

const About = () => {
    return (
        <React.Fragment>
            <Layout>
                <SEO title="Lssadora | O nama" />
                <div className="wrapper about-page-wrapper">
                    <Header classOption="hb-border" />
                    <div className="main-content">
                        <PageTitleContainer />
                        <AboutService />
                        <TeamContainer />
                        <Blockquote />
                        <AboutGallery />
                    </div>
                    <Footer />
                    <ScrollToTop />
                </div>
            </Layout>
        </React.Fragment>
    );
};

export default About;

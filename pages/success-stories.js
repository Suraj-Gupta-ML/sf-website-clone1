import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/Layout'
import BlogList from '../components/BlogList'
import styles from '../styles/Home.module.css'

export default function SucessStories() {
  return (
    <div >
      <Head>
        <title>Success Stories</title>
        <meta name="description" content="Generated by suraj" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://snappyflow-test.surge.sh/success-stories" />
        <meta property="og:title" content="Snappyflow - Success Stories" />
        <meta property="og:type" content="Snappyflow - Success Stories" />
        <meta property="og:description" name="description" content="Success Stories" />
        <meta property="og:url" content="/success-stories" key="ogurl" />
        <meta property="og:image" content="assets/images/add-application-screen.png" key="ogimage" />
      </Head>

      <Layout>
      <header id="case-header">
        <div className="case-intro">
          <div className="case-overlay">
            <div className="container">
              <div className="row">
                <div className="intro-text">
                  <h1>Case Study</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="sucessStoriesMain" id="sucessStoriesMain">
        <div className="container"> 
          <h4>Explore Case Studies</h4>
            <div className="clear">
                <div className="row">
                        <div className="col-md-4 col-xs-12">
                            <Link  className="parentAchor" 
                                  href="/case-study-new" 
                                    // (click)="focusTop()"
                                    >
                            <div className="card">
                              <img
                                className="card-img-top"
                                src="assets/images/case-study-01.png"
                                alt="Card image cap"
                              />
                              <div className="card-body new_card-body">
                                
                                <h5 className="card-title">SnappyFlow helps run a massive big data stack at peak performance</h5>
                                <div className="marginTop15">
                                Sustaining peak performance across multiple, hyperscale Hadoop clusters is no easy job, especially...
                                </div>
                                <div className="clear marginTop30">
                                  <Link className="view_button" 
                                  href="/case-study-new" 
                                    // (click)="focusTop()"
                                    >View Case Study 
                                  </Link>
                                </div>
                              </div>
                            </div>
                        </Link>
                          </div>
                          <div className="col-md-4 col-xs-12">
                            <Link   className="parentAchor" 
                                  href="/snappyflow-predictive-performance-kubernetes" 
                                    // (click)="focusTop()"
                                    >
                            <div className="card">
                              <img
                                className="card-img-top"
                                src="assets/images/case-study-02.png"
                                alt="Card image cap"
                              />
                              <div className="card-body new_card-body"> 
                                <h5 className="card-title">Predictive performance management of a Petabyte scale Kubernetes application for a Global Hi-Tech Major</h5>
                                <div className="marginTop15">
                                  SnappyFlow’s powerful Kubernetes monitoring capabilities helped troubleshoot...
                                </div>
                                <div className="clear marginTop30">
                                  <Link  className="view_button" 
                                  href="/snappyflow-predictive-performance-kubernetes" 
                                    // (click)="focusTop()"
                                    > View Case Study 
                                  </Link>
                                </div>
                              </div>
                            </div>
                        </Link>
                          </div> 
                </div>
            </div>
        </div>
      </div>
      <div className="commonAbout about">
        <div className="container">
          <h4>Our Blogs</h4>
          <BlogList></BlogList>
        </div>
      </div>
      <style jsx>
        {`
          .case-intro {
            background: url("../../assets/images/case-study-banner.jpg") no-repeat center center;
            background-size: 100%;
            width: 100%;
            position: relative;
          }
          
          .case-intro h1 {
            color: #fff;
            text-shadow: 1px 1px 2px #363c44;
            text-align: left;
            margin-top: 0;
            margin-bottom: 10px;
            position: absolute;
            top: 47%;
            transform: translateY(-50%);
            font-size: 44px;
            letter-spacing: 0.44px;
            line-height: 1.36;
          }
          .case-intro .intro-text {
            padding: 14% 10% 15% 2%;
          }
          .commonAbout {
            padding: 10px 0 45px 0;
          }
          .card {
            border-radius: 5px;
            box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.15);
            background-color: #ffffff;
            margin-bottom: 25px;
          }
          .commonAbout h4{
            padding-bottom: 1px;
              position: relative;
              font-weight: 600;
              font-size: 18px; 
              text-transform: capitalize;
          }
          .img-arrow {
              margin-left: 10px;
          }
          .card-body h5 {
            font-size: 16px;
            font-weight: 600;
            font-stretch: normal;
            font-style: normal;
            margin-bottom: 15px;
            line-height: normal;
            margin-top: 0px;
            letter-spacing: normal;
            text-align: left;
            color: #363c44;
            text-transform: unset;
          }
          .blog-intro .intro-text {
            padding: 14% 10% 15% 2%;
          }
          .new_card-body{
            height: 220px !important
          }
          .card-body {
            padding: 30px;
             height: 180px;
          }
          .card-body p {
            font-size: 16px;
            font-weight: normal;
            font-stretch: normal;
            font-style: normal;
            line-height: 1.56;
            letter-spacing: normal;
            text-align: left;
            color: #363c44;
            margin: 24px 0;
          }
          .card-img-top {
            width: 100%;
            border-radius: 5px 5px 0px 0px;
          }
          .card-body a {
            font-weight: 600;
            font-size: 14px;
            font-weight: 600;
            font-stretch: normal;
            font-style: normal;
            line-height: normal;
            letter-spacing: 0.16px;
            text-align: left;
            color: #17b7f1;
          }
          .view_button{
            border: 1px solid #106585;
            border-radius: 40px;
            background: #fff;
            padding: 7px 20px;
            color: #106585 !important;
          }
          .post-meta{
            margin-bottom: 10px;
          }
          .sucessStoriesMain{
            padding: 40px 15px;
          }
          .parentAchor{
            color: #000;
            cursor: pointer;
          }
          .parentAchor:hover{
            text-decoration: none;
            color: #000;
          }
          @media only screen and (min-width: 320px) and (max-width: 767px) {
            .intro-text{
              padding: 15% 10% 12% 0% !important;
            }
          }
        `}
      </style>
      </Layout>
    </div>
  )
}

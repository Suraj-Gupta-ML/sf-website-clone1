import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/Layout'
import { useRouter } from "next/router";
import { BLOGS_DETAILS } from '../../components/BlogContent';
import { useHubspotForm } from '@aaronhayes/react-use-hubspot-form';
import parse from 'html-react-parser';


export default function BlogDetails() {
  const blogDetails = BLOGS_DETAILS;   
  const router = useRouter();
  const { id } = router.query;
  const { loaded, error, formCreated } = useHubspotForm({
    region: "na1",
    portalId: "6731253",
    formId: "985c7e89-ad49-4f9a-b4be-e7381b58f64a", 
    target: "#hubspotFormBlog"
  });

  return (
    <div >
      <Head>
        <title>CPU Profiling</title>
        <meta name="description" content="CPU Profiling" />
        <link rel="icon" href="/favicon.ico" />
        {/* <script type="text/javascript" id="hs-script-loader" defer src="//js-na1.hs-scripts.com/6731253.js"></script> */}
      </Head>

      <Layout path={'../'}>
        {
          blogDetails.map(blog => (
            blog.blogtype === id ? <div key={id}>
          <div className="container">
            <div className="bread_crumb">
              <Link href="/blog">Blog</Link> &nbsp;<img src='../assets/images/arrow_next_new.png' height="10" alt="icon"/> &nbsp;<span>{blog.heading}</span>
            </div>
          </div> 
            <header id="blog-header" className={`${blog.bannerClass}`}>
              <div className={`${blog.blogImage}`}>
                <div className="blog-overlay">
                  <div className="container">
                    <div className="row">
                      <div className="intro-text">
                        <div className="subTitle">{blog.subTitle}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </header>
            <div className="commonAbout about">
              <div className="container">
                <div className="row">
                  <div className="col-xs-12 col-md-9">
                    <div className="blogContainer">{parse(blog.content)}</div>
                    <div >
                      <div >
                      <span>In this series</span>
                    </div>
                    {
                      !blog.recentBlog ?
                      <dl className="recentPost postList">
                        {
                          blog.childList.map(child => (
                            <dd key={child.url}> 
                              <div className={`${child.selectedClass} modal-open pad5`}>
                                  <div className="col-md-4 col-xs-4 padLeft0 padRight0">
                                  <img src={`../assets/images/${child.image}`} className="img-responsive blog-inner-image" alt="" />
                                </div>
                                <div className="blog-right-navigation col-md-8  col-xs-8" >
                                  <div className="blog-selected" ><Link  href={`/blog-details/${child.url}`}
                              >{child.subHead}</Link> </div> 
                                </div>
                              </div>
                            </dd>
                        ))
                        }
                      </dl>
                      :  
                      <dl className="recentPost postList">
                         {
                         blog.subchildList.map(subChild => (
                            <dd key={subChild.url}>  
                              <div  className=" modal-open pad5">
                                    <div className="col-md-4 padLeft0 padRight0  col-xs-4">
                                      <img src={`../assets/images/${subChild.image}`} className="img-responsive blog-inner-image" alt="" />
                                    </div>
                                    <div className="blog-right-navigation col-md-8  col-xs-8">
                                      <div className="blog-selected"><Link href={`/blog-details/${subChild.url}`}
                                    // (click)="focusTop()"
                                  >{subChild.subHead}</Link> </div>  
                                    </div>
                                  </div>
                            </dd>
                         ))
                        }
                      </dl> 
                    }
                  </div>
                    
                                  

                <div className="clear get_tuchSection"> 
                    <div className="panel_section">
                    <div className="col-md-1 col-sm-2 "><img src="../assets/images/email-icon.png" /></div>
                    <div className="col-md-11 padLeft0 col-sm-10  ">
                      <div className="clear">
                      <h3>Get in touch</h3>
                      <div>Write to <a href="mailto:support@snappyflow.io">support@snappyflow.io</a></div>
                      </div>
                      <div className="clear">
                        <section className="padTop25 padBottom50 marTop20 hotspotForm">
                        <div className="clear ">
                          <h3>Or fill the form below, we will get back! </h3>
                          <div   className="marTop20 wid50">
                            <div id="hubspotFormBlog"> </div> 
                          </div>
                        </div>
                      </section>
                      </div>
                    </div>
                  </div>
                  <div className="panel_section">
                    <div className="col-md-1 col-sm-2 co "><img src="../assets/images/trial.png" /></div>
                    <div className="col-md-11 padLeft0 col-sm-10  ">
                      <h3>Is SnappyFlow right for you ?</h3>
                      <div><a href="https://accounts.snappyflow.io">Sign up for a 14-day trial</a></div>
                    </div>
                  </div> 
                </div> 

                  </div>
                  <div className="col-xs-12 col-md-3"> 
                    <div>
                      {
                        !blog.recentBlog ? 
                        <div>
                          <div className={(blog.title !=''? 'recentClass': '')}>
                            {blog.title}
                          </div>

                          <dl className="recentPost">
                          {
                            blog.childList.map(child => (
                              <dd key={child.url + '12'}> 
                                    <div className={`${child.selectedClass} modal-open pad5`}>
                                        <div className="col-md-4 padLeft0 padRight0  col-xs-4">
                                        <img  src={`../assets/images/${child.image}`} className="img-responsive blog-inner-image" alt="" />
                                      </div>
                                      <div className="blog-right-navigation col-md-8  col-xs-8" >
                                        <div className="blog-selected" ><Link  href={`/blog-details/${child.url}`}
                                        >{child.subHead}</Link> </div> 
                                      </div>
                                    </div>
                              </dd>
                          ))
                          }
                          </dl> 
                        </div> : null
                      }
                      <div className={(blog.subTitle !=''? 'recentClass': '')}>
                        {blog.recentBlog ? <span >In this series</span> :
                        <span>Recent Post</span>}
                      </div>

                    <dl className="recentPost">
                    {
                      blog.subchildList.map(subChild => (
                        <dd key={subChild.url + '12'}>  
                          <div  className=" modal-open pad5">
                                <div className="col-md-4 padLeft0 padRight0  col-xs-4">
                                  <img src={`../assets/images/${subChild.image}`} className="img-responsive blog-inner-image" alt="" />
                                </div>
                                <div className="blog-right-navigation col-md-8  col-xs-8">
                                  <div className="blog-selected"><Link href={`/blog-details/${subChild.url}`}
                                  >{subChild.subHead}</Link> </div>  
                                </div>
                              </div>
                        </dd>
                      ))
                      }
                    </dl> 


                    {
                      blog.recentBlog ? 
                      <div>
                        <div className={(blog.title !=''? 'recentClass': '')}>
                        { blog.recentBlog ? <span >Recent Post</span> : <span >In this series</span>}
                        </div>
                      <dl className="recentPost">
                      {
                        blog.childList.map(child => (
                          <dd key={child.url + '123'}> 
                            <div className={`${child.selectedClass} modal-open pad5`}>
                                <div className="col-md-4 padLeft0 padRight0 col-xs-4">
                                <img src={`../assets/images/${child.image}`} className="img-responsive blog-inner-image" alt="" />
                              </div>
                              <div className="blog-right-navigation col-md-8  col-xs-8" >
                                <div className="blog-selected" ><Link href={`/blog-details/${child.url}`}
                                >{child.subHead}</Link> </div>
                              </div>
                            </div>
                          </dd>
                        ))
                      }
                      </dl> 
                    </div> : null
                    }
                </div>


                  </div>
                </div>
              </div>
            </div>
            
        <style jsx>
          {
            `
            .blog1-intro {
              background: url("../../assets/images/blog-header-image.png") no-repeat center center;
            background-size: 100%;
              width: 100%;
              position: relative;
          }
          .blog-content-intro3 {
              background: url("../../assets/images/Illustration_blog_1.png") no-repeat  100% bottom;  
          }
          .blog-content-intro4 {
              background: url("../../assets/images/Illustration_blog_2.png") no-repeat  100% bottom;  
          }
          .blog-content-intro5{
              background: url("../../assets/images/Illustration_blog_3.png") no-repeat  100% bottom;  
          }
          #blog-header{
          background: #1bb0e3;
          background: -moz-linear-gradient(-45deg,  #1bb0e3 0%, #006b93 100%);
          background: -webkit-linear-gradient(-45deg,  #1bb0e3 0%,#006b93 100%);
          background: linear-gradient(135deg,  #1bb0e3 0%,#006b93 100%);
          }
          #blog-header.cpu_profile{  
          background: #000016;
          background: -moz-linear-gradient(left,  #000016 0%, #353066 100%);
          background: -webkit-linear-gradient(left,  #000016 0%,#353066 100%);
          background: linear-gradient(to right,  #000016 0%,#353066 100%);
          
          }
          #blog-header.cpu_profile .blog-content-intro1{
              background: url('../../assets/images/detail-page-banner-illustration.svg')  90% 55px no-repeat;
          }
          .subTitle{
              position: absolute;
              top: 50%;
              left: 0px; 
              font-size: 53px;
              line-height: 57px;
              width: 52%;
              transform: translateY(-50%);
              color: #fff;
          }
          .blog-content-intro h1 {
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
              font-weight: 700; 
          }
          
          .intro-text h1 {
              color: rgba(1, 1, 1, 0.9);
              text-align: left;
              margin-top: 0;
              margin-bottom: 10px;
              position: absolute;
              top: 12%;
              font-size: 44px;
              letter-spacing: 0.44px;
              line-height: 1.36;
              font-weight: normal;
              left:17px;
          } 
          .blog-footer h2{
              font-size: 24px;
              color: #009ece;
              text-transform: unset;
          }
          .errorMsg{
            color: #d4023c;
            font-size: 13px;
            padding: 0px;
            margin: 0px;
          }
          .txtMsg{
            transition: opacity 2s ease-in;
          }
          .emailInput{
            outline: none;
              padding: 0;
              margin: 0;
              width: 50%;
              border: none;
              height: 40px;
              margin-bottom: 0;
              font-size: 18px;
              padding-left: 20px;
              font-weight: 400;
              border: 1px solid #ebebeb;
          }
          
          .subscibeButton{
            padding: 8px 20px;
              border-radius: 5px;
              border: solid 1px #b2b2b2;
              margin-left: 20px;
              outline: none;
              font-size: 15px;
              line-height: 18px;
              letter-spacing: 2px;
              font-weight: 400;
              background: 0 0;
              transition: all .15s ease-in-out;
              transition-property: all;
              color: #009ece;
              float: none; 
              text-transform: none;
          }
          
          .subscibeDiv{
              margin-top: 40px;
            margin-bottom: 65px;
          }
          .blog-inner-image{
              border-radius: 5px;
              height: 70px;
          }
          .pad5{
            padding: 5px;
          }
          .activeClass{
                 background: #dff3ff;
              border-radius: 5px;
              box-shadow: inset 0px 0px 1px 1px #88bfd4;
          }
          .blog-right-navigation{
              padding: 0px 5px 0px 15px;
          }
          .blog-selected{
            padding-bottom: 10px;
          }
          .blog-selected a{
              font-size: 16px;
              font-family: Lato-Semibold; 
              line-height: 3px;
              padding-bottom: 10px;
              letter-spacing: normal;
              text-align: left;
              color: #4c4c4c;
          }
          .blog-lists a{
              font-size: 16px;
              font-weight: 600;
              font-stretch: normal;
              font-style: normal;
              line-height: 3px;
              letter-spacing: normal;
              text-align: left;
              color: #363c44;
          }
          .sub{
            font-size: 18px;
            font-weight: 100;
            color:#363c44
          }
          .intro-text{
              padding: 27% 10% 2% 10%;
              margin-top: 0px;
          }
          .blogheading h2{
            font-size: 36px;
            font-weight: 700;
            color: #009ece;
            margin-bottom: 25px;
            text-transform: unset;
          }
          .commonAbout {
              padding: 0 0 70px 0;
              margin-top: 40px;
          }
          p{
              font-weight: normal;
              font-stretch: normal;
              font-style: normal;
              line-height: 1.75;
              letter-spacing: normal;
              text-align: left;
              color: #363c44;
              padding-bottom:23px
          }
          .blogContainer .noteContent{
            clear: both;
            background: #f2feff;
            padding: 30px 25px 15px 30px;
            margin-top: 35px;
            border: 1px solid #b4d6d9; 
          }
          .post-meta{
              font-size: 14px;
              font-weight: normal;
              font-stretch: normal;
              font-style: normal;
              line-height: 1.75;
              letter-spacing: normal;
              text-align: left;
              color: #363c44;
              opacity: 0.7;
          }
          .activeLink{
              color: #009ece !important;
          
          }
          .blog-lists{
              padding-bottom: 20px;
          }
          .blog-lists:last-child{
              padding-bottom: 0px;
          }
          .emailInput::placeholder {
              color: #363c44;
              opacity: 0.6;
            } 
          .bread_crumb{
              padding: 20px 0px;
          }
          .bread_crumb a{
              color: #23b5e9
          }
          .search{
            background: url('../../assets/images/search.png') 97% 7px no-repeat;
            padding: 10px;
            border-radius: 3px;
            padding-right: 25px;
            margin-top: 5px;
          } 
          .recentClass {
            margin: 0;
            padding-bottom: 7px;
            position: relative;
            font-weight: 600;
            font-size: 18px;
            margin-bottom: 20px;
          }
          
          .recentClass:before {
             position: absolute;
            background: linear-gradient(to right, #23b4e9 50px, #fff 50px);
            height: 3px;
            content: '';
            bottom: 0;
            right: 0;
            left: 0;
          }
          .get_tuchSection{
           
            padding: 70px 0px;
          }
          .get_tuchSection h3{
            font-size: 18px;
                margin-top: 0px;
              font-family: Lato-Bold; 
          }
          .panel_section  {
              border: 1px solid #ddd;
              background: #fff;
              padding: 25px 12px;
              margin-bottom: 15px;
              overflow: hidden;
              border-radius: 4px;
          }
          .bullet_list{
            padding: 0px 0px 0px 30px;
            margin: 0px;
          
          }
          .bullet_list li {
            font-family: Lato-Regular !important;
            list-style-type: disc !important;
            line-height: 24px;
            padding-bottom: 10px;
            padding-left: 5px;
          }
          .bullet_list li:last-child{
            padding-bottom:0px;
          }
          .recentPost dd{
            margin-bottom: 10px;
            overflow: hidden;
          }
          .postList dd{
              width: 32%;
              margin-right: 5px;
              float: left;
          }
          
            @media only screen and (min-width: 768px) and (max-width: 1200px) {
           
                .blog-lists a{
                    line-height: 1 !important;
                }
                .blog-lists{
                    padding: 15px 0;
                }
                .blog-right-navigation{
                    padding: 30px 34px;
                }
                .blog-lists h1{
                  font-size: 20px; 
              }   
            }
            @media only screen and (min-width: 320px) and (max-width: 767px) {
              .emailInput{
                  width: 48% !important;
              }
              .blog-lists h1{
                  font-size: 20px; 
              }   
            }
          
            `
          }
        </style>
        </div> : null))
        }
      </Layout>
    </div>
  )
}

import Link from "next/link";
import Image from "next/image";
  
const BlogList = () => (
    <div className="blogList">
        <div className="commonAbout about">
            <div className="">
                <div className="row">

                    <div className="col-md-4 col-xs-12">
                        <Link className="parentAchor" 
                                href="/blog-details/cpu-profiling"
                                // (click)="focusTop()"
                                >
                        <div className="card">
                            <img
                                className="card-img-top"
                                src="assets/images/blog-thumbnail.svg"
                                alt="CPU and Memory Profiling"
                            />
                            <div className="card-body">
                                <h5 className="card-title">Troubleshooting JAVA applications</h5>
                                <div className="paddingTop10">
                            Troubleshooting JAVA application performance using CPU Profiling and Memory Profiling
                                </div>
                                <div className="clear marginTop15">
                                <Link
                                    href="/blog-details/cpu-profiling"
                                    
                                    // (click)="focusTop()"
                                    ><div>Read More<img
                                    className="img-arrow"
                                    src="assets/images/next-arrow.png"
                                /></div></Link>
                                </div>
                            </div>

                        </div>
                    </Link>
                    </div>

                    <div className="col-md-4 col-xs-12">
                    <Link className="parentAchor" 
                            href="/blog-details/power-of-tracing"
                            // (click)="focusTop()"
                            >
                    <div className="card">
                        <img
                        className="card-img-top"
                        src="assets/images/blog-4_thumbnail.jpg"
                        alt="Card image cap"
                        />
                        <div className="card-body">
                        <h5 className="card-title">The power of tracing in application performance tuning</h5>
                        <div className="paddingTop10">
                        Automation of business processes has radically...
                        </div>
                        <div className="clear marginTop15">
                            <Link
                            href="/blog-details/power-of-tracing"
                            // (click)="focusTop()"
                            ><div>Read More<img
                                className="img-arrow"
                                src="assets/images/next-arrow.png"
                            /></div></Link>
                        </div>
                        </div>
                    </div>
                    </Link>
                    </div>

                    <div className="col-md-4 col-xs-12">
                        <Link className="parentAchor" 
                            href="/blog-details/setting-up-tracing"
                            // (click)="focusTop()"
                            >
                    <div className="card">
                        <img
                        className="card-img-top"
                        src="assets/images/blog-3_thumbnail.jpg"
                        alt="Card image cap"
                        />
                        <div className="card-body">
                        <h5 className="card-title">Setting up Tracing in SnappyFlow</h5>
                        <div className="paddingTop10">
                            We will use SnappyFlow tracing sfTrace to analyze the performance...
                        </div>
                        <div className="clear marginTop15">
                            <Link
                            href="/blog-details/setting-up-tracing"
                            // (click)="focusTop()"
                            ><div>Read More<img
                                className="img-arrow"
                                src="assets/images/next-arrow.png"
                            /></div></Link>
                        </div>
                        </div>
                    </div>
                    </Link>
                    </div>

                    <div className="col-md-4 col-xs-12">
                        <Link className="parentAchor" 
                            href="/blog-details/unleash-the-power-of-tracing"
                            // (click)="focusTop()"
                            >
                    <div className="card">
                        <img
                        className="card-img-top"
                        src="assets/images/blog-5_thumbnail.jpg"
                        alt="Card image cap"
                        />
                        <div className="card-body">
                        <h5 className="card-title">Unleash the Power of Tracing with SnappyFlow. A detailed illustration</h5>
                        <div className="paddingTop10">
                            To illustrate how SnappyFlow can be used...
                        </div>
                        <div className="clear marginTop15">
                            <Link
                            href="/blog-details/unleash-the-power-of-tracing"
                            
                            // (click)="focusTop()"
                            ><div>Read More<img
                                className="img-arrow"
                                src="assets/images/next-arrow.png"
                            /></div></Link>
                        </div>
                        </div>
                    </div>
                    </Link>
                    </div>
                    
                    <div className="col-md-4 col-xs-12">
                        <Link className="parentAchor" 
                            href="/blog-details/log-archival"
                            // (click)="focusTop()"
                            >
                    <div className="card">
                        <img
                        className="card-img-top"
                        src="assets/images/tile-img-LogArchival-Flow.png"
                        alt="Card image cap"
                        />
                        <div className="card-body">
                        <h5 className="card-title">Log Archival with SnappyFlow</h5>
                        <div className="paddingTop10">
                        Servers and applications generate logs to report informational
                            events, error events...
                        </div>
                        <div className="clear marginTop15">
                            <Link
                            href="/blog-details/log-archival"
                            
                            // (click)="focusTop()"
                            ><div>Read More<img
                                className="img-arrow"
                                src="assets/images/next-arrow.png"
                            /></div></Link>
                        </div>
                        </div>

                    </div>
                    </Link>
                    </div>
                    <div className="col-md-4 col-xs-12">
                    <Link className="parentAchor" 
                            href="/blog-details/improve-triaging"
                            // (click)="focusTop()"
                            >
                    <div className="card">
                        <img
                        className="card-img-top"
                        src="assets/images/tile-img-LogSignatures.png"
                        alt="Card image cap"
                        />
                        <div className="card-body">
                        <h5 className="card-title">Improve Triaging and Reduce Log Management</h5>
                        <div className="paddingTop10">
                        SnappyFlow is a comprehensive monitoring...
                        </div>
                        <div className="clear marginTop15">
                            <Link
                            href="/blog-details/improve-triaging"
                            
                            // (click)="focusTop()"
                            ><div>Read More<img
                                className="img-arrow"
                                src="assets/images/next-arrow.png"
                            /></div></Link>
                        </div>
                        </div>
                    </div>
                    </Link>
                    </div>
                </div>
            </div>
        </div>
        <style jsx>
            {
                `
                h4 {
                    font-size: 14px;
                    font-weight: bold;
                    padding-bottom: 8px;
                    letter-spacing: 0.5px;
                  }
                  p {
                    font-size: 14px;
                    padding-bottom: 20px;
                    margin: 0px;
                    line-height: 24px;
                  }
                     
                  .card {
                    border-radius: 5px;
                    box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.15);
                    background-color: #ffffff;
                    margin-bottom: 25px;
                  }
                  .coming_soon {
                    font-size: 20px;
                    color: #afafaf !important;
                    border: 1px solid #ddd;
                    text-align: center;
                    line-height: 200px !important;
                  } 
                  .card-body h5 {
                    font-size: 16px;
                    font-weight: 600;
                    font-stretch: normal;
                    font-style: normal;
                    margin-bottom: 15px;
                    line-height: normal;
                    letter-spacing: normal;
                    text-align: left;
                    color: #363c44;
                    text-transform: unset;
                  }
                  .blog-intro .intro-text {
                    padding: 14% 10% 15% 2%;
                  }
                  .card-body {
                    padding: 30px;
                    height: 180px;
                  }
                  .new_card-body{
                    height: 220px
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
                  .img-arrow {
                    margin-left: 10px;
                  }
                  .commonAbout {
                    padding: 40px 0 45px 0;
                  }  
                  .post-meta {
                    opacity: 0.7;
                    padding-bottom: 12px;
                  } 
                  .post-meta{
                    margin-bottom: 10px;
                  }
                  .sucessStoriesMain{
                    padding:0px 15px 30px 15px;
                  } 
                  .card-title{
                    margin-top: 0px;
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
                   
                    .card-body h5 {
                      font-size: 20px;
                    }
                    .blogheading h2 {
                      font-size: 30px;
                    }
                  }
                  @media screen and (max-width: 990px) and (min-width: 768px) {
                    .card-body h5 {
                      font-size: 20px;
                    } 
                    header {
                      margin-top: 56px !important;
                    } 
                  }
                `
            }
        </style>
    </div>
);
  
  export default BlogList;
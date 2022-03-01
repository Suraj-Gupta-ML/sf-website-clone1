import Link from "next/link";
import Image from "next/image";

const headerStyle = {
    backgroundColor: "blue",
    color: "white",
    width: "100%",
    height: "50px"
  };
  
  const Footer = (props) => (
      <div className="footer">
  <div className="footerBg">
  <div className="container">
   <div className="col-md-8 col-sm-12" >
     <h3 className="fontStyle">
      SnappyFlow</h3>
      <div className="modal-open clear">
      <div className="col-md-4 col-sm-12 padLeft0">
          <div className="contact-item">
              <h5 className="fontWeight_normal">California, USA</h5>
             <div className="contact-item-inner"><img src={`${props.path || ''}assets/images/location-icon.png`} style={{paddingRight: '15px', height: '18px'}} alt="contact" layout='fill'/><span>1248 Reamwood Ave, <br/>Sunnyvale, CA 94089</span></div>
            
           </div>
       </div>
       <div className="col-md-6 col-sm-12 padLeft0 padRight0">
          <div className="contact-item">
              <h5 className="fontWeight_normal">Bangalore, INDIA</h5>
             <div className="contact-item-inner">
               <img src={`${props.path || ''}assets/images/location-icon.png`} style={{paddingRight: '15px', height:'18px'}} alt="address" /><span>Kabra Excelsior, 1st block Koramangala <br/>Industrial Layout, Bangalore – 560034</span></div>
           </div>
       </div>
     </div>
       <hr className="clear" />
        <div className="contact-item-inner emailSection"><img src={`${props.path || ''}assets/images/mail-icon.png`} style={{paddingRight: '15px'}} alt="email" layout='fill'/><span>sales@maplelabs.com</span></div> 
   </div>
   <div className="col-md-4 col-sm-12 marTop_5">
         <div className="free_section">
          <span className="btn  freeTrial" name=""  > 
            <a href="https://snappyflow.io/freetrial" target="_blank" rel="noreferrer">Free Trial</a>
          </span>&nbsp;&nbsp;&nbsp;
          <span className="btn  freeTrial" name=""  > 
            <Link href="/contact-us">Contact Us</Link>
          </span>
       </div>
       
     <div>
      <ul className="footer_links">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/product">Product</Link></li>
          <li><Link href="/pricing">Pricing</Link></li>
          <li><Link href="/blog">Blog</Link></li>
          <li><Link href="/team">Team</Link></li> 
          <li><Link href="/privacy">Privacy Policy</Link></li>
          <li><Link href="/terms">Terms of Use </Link></li>
          <li><Link href="/cookies"> Cookie Policy</Link></li> 
      </ul>
     </div>

   </div> 

 </div>
</div>
 <div className="container-fluid text-center copyrights">
 <div className="container">
   <div className="col-md-6 col-xs-6 footer-copyright">
     <p>&copy; Copyright {new Date().getFullYear()}</p>
   </div>
   <div className="col-md-6 col-xs-6 text-right">
   <div className="social">
       <ul className="social-inner">
         <li><a href="https://twitter.com/snappyflow"><img src={`${props.path || ''}assets/images/snappyflow-footer-twitter.svg`} alt="twitter" /></a></li>
         <li><a href="https://www.linkedin.com/company/snappyflow/"><img src={`${props.path || ''}assets/images/snappyflow-footer-linkedin.svg`} alt="linkedin"/></a></li>
         <li><a href="#"><img src={`${props.path || ''}assets/images/snappyflow-footer-youtube.svg`} alt="youtube" /></a></li>
         <li><a href="#" ><img src={`${props.path || ''}assets/images/snappyflow-footer-facebook.svg`} alt="facebook" /></a></li>
       </ul>
     </div>
   </div>
    
 </div>
 </div>
 <style jsx global>
   {
     `
     .footer .col-xs-4 {
      padding: 0 5% 0 0;
      color: #fff;
    }
    
    .footerBg{
      background: #000;
      color: #e1e1e1;
      padding: 50px 0 50px 0;
      font-weight: 300;
    }
    
    .footer h3 {
      color: #e1e1e1;
      font-weight: normal;
      font-size: 17px;
        margin: 0 0px 20px;
        letter-spacing: 0.5px;
    }
    
    .footer p {
      color: #fff; 
      line-height: 24px;
      margin-bottom: 20px;
    }
    
    .footer .contact-item p {
      font-size: 16px;
      /* color: ; */
      padding: 0 5% 0 0;
    }
    
    .footer .contact-item a {
      font-size: 16px;
      color: #fff;
    }
    
    .footer .contact-item .btn {
      font-size: 16px;
      color: #fff;
    }
    
    .footer .copyrights {
      padding: 0;
      padding-bottom: 10px;
      background-color: #1a1a1a;
        font-weight: 500; 
    }
    
    .footer-copyright { 
      text-align: left;
      position: relative; 
      top: 15px;
      font-weight: 400;
    }
    
     
    .footer .social ul li {
      display: inline-block;
      margin: 0 5px;
    }
    
    .footer .social i.fa { 
      font-size: 26px; 
      padding: 2px; 
      transition: all 0.3s; 
    }
    .footer .social i.fa:hover { 
      color: #eee; 
    }
    
    .footer p {
      font-size: 14px !important;
      color: rgba(255, 255, 255, 0.8)
    }
    
    .footer a {
      color: #e1e1e1;
    }
    
    .footer a:hover {
      color: #fff;
    }
    .contact-item-inner{
      margin-bottom: 10px;
        clear: both;
        display: flex;
        overflow: hidden;
        font-size: 15px;
    }
    .footer_links{
      padding: 0px;
      margin:0px; 
    }
    .footer_links li{
      list-style-type: none;
      float: left;
      padding: 4px 10px;
    }
    .footer_links li a:hover{
      color: #1ab6eb;
      text-decoration: none;
    }
    .social-inner{ 
      right: 14%;
        position: relative; 
        padding: 0px;
        top: 10px;
    }
    .social-inner li img{
      padding: 10px;
    }
    .paading0{
      padding-left: 0;
    }
    .footer-signup-wrapper{
      display: flex;
      margin-top: 21px;
    }
    .btnCustom{
      background-color: transparent !important;
        border-radius: 18px;
        border: solid 1px #009ece !important;
        margin-left: 20px;
      color: #009ece !important;
      text-transform: uppercase;
    }
    .footer-signup-title{
      padding-top: 9px;
    } 
    .freeTrial{
       width: 130px; 
        border-radius: 25px;   
        background: #009dd0;
        border: 1px solid #009dd0;
        font-size: 15px;
        color: #fff;
        line-height: 22px;
        text-align: center;
    }
    .freeTrial i {
      padding-left: 5px;
      color: #333;
    }
    .freeTrial a {
      text-decoration: none;
    }
    .free_section{
      clear: both;
        position: relative; 
        margin-top: 25px; 
        margin-left: 10px;
        top: -20px;
    }
    .emailSection{
      position: relative;
    }
    .footerBg hr{
      height: 1px;
        background: transparent;
        margin-bottom: 15px;
        width: 73.2%;
        margin-top: 0px;
        border-top: 1px solid #eee;
        opacity: 0.4;
    }
     
    @media (max-width: 767px) and (min-width:320px){
      .contact-item-inner img{
        float: left;
      }
      .contact-item-inner span{
        float: left;
          display: block;
          width: 85%;
      }
      .footer-copyright{
        text-align: left;
        left: 0;
      }
      .footer-copyright p{
        margin: 0;
        line-height: 18px;
      }
    
      .footer_links{
        display: grid;
        float: unset !important; 
      }
      .footer_links li{
        padding: 7px 5px !important;
      }
      .paading0{
        padding-left: 7px !important;
      }
      .social-inner {
        right: unset !important;
        margin: 0px;
        padding: 0px 9px 0px 0px;
        float: unset !important;
      }
      .footerBg{
        font-size: 13px !important;
      }
      .footer-signup-wrapper{
        display: flex;
      }
      }
      @media (max-width: 1200px) and (min-width:768px){
        .copyrights .col-xs-12,.footerBg .container .col-xs-12,.footerBg .container .col-xs-4 {
          width: 50% !important;
        }
        
      }
     `
   }
 </style>
    </div>
  );
  
  export default Footer;
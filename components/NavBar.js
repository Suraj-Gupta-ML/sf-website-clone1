import Link from "next/link";
import { useRouter } from "next/router";
import { Fragment, useState } from "react";
import GettingStarted from './GettingStarted'

const navBarStyle = {
    backgroundColor: "red",
    color: "white",
    width: "100%",
    height: "60px"
  };
  
const NavBar = (props) => {
    const router = useRouter();
	const [showModal, setShowModal ] = useState(false);
	const getStarted = (val) => {
		console.log('getStarted', val);
		setShowModal(val)
	}
  
  return (
	<Fragment>
    <nav id="menu" className="navbar navbar-default">
	<div className="navbar-inner">
    <div className="navbar-header">
		<button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1"> <span className="sr-only">Toggle navigation</span> <span className="icon-bar"></span> <span className="icon-bar"></span> <span className="icon-bar"></span> </button>
		<button className="close_button">×</button>
		<Link className="navbar-brand page-scroll" href="/">
			<img src={`${props.path || ''}assets/images/snappyflow.svg`} alt="snappyflow logo" className="sf-logo"/>
		</Link>
		 </div>
	  <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
		<ul className="nav navbar-nav navbar-right">
		  <li className={router.pathname == "/product" ? "navigation_link" : ""}><Link href="/product">Product</Link></li>
		  <li className={router.pathname == "/pricing" ? "navigation_link textLI" : "textLI"}><Link href="/pricing" >Pricing</Link></li>
		  <li className={router.pathname == "/blog" ? "navigation_link" : ""}>
			<Link href="/blog" >Blogs
			</Link> 
		  </li>
		    <li  className="dropdownLi resources_links cursor">
		    	<button >Resources</button> 
		    	<ul className="dropdown-menu resourceMenu">
				  <li><Link href="https://docs.snappyflow.io/" target="_self">Documentation</Link></li>
				  <li className={router.pathname == "/success-stories" ? "navigation_link" : ""}><Link href="/success-stories">Success Stories</Link></li> 
				</ul>
		</li>
		   <li className={router.pathname == "/team" ? "navigation_link dropdownLi" : "dropdownLi"} ><Link href="/team">Team</Link></li>
		 
		<li className="liLogin getStarted" >
			  <button className="btn-lg page-scroll" onClick={() => getStarted(true)}>&nbsp;Get Started&nbsp;</button>
		</li>
		  <li className={"liLogin"} >
			  <a href="https://accounts.snappyflow.io/" target="_blank" rel="noreferrer" className="btn-lg page-scroll" >&nbsp;Free Trial&nbsp;</a>
		</li>
		<li className="liLogin logButton">
			<a href="https://accounts.snappyflow.io/" target="_blank" rel="noreferrer" className="btn-lg page-scroll">
				Login
            </a>
	    </li>
		</ul>
	  </div>
	</div>

	<GettingStarted show={showModal} onHide={() => getStarted(false)}/>
	
  </nav>
  <style jsx global>{`
		#menu {
			transition: all 0.8s;
		  }
		  #menu.navbar-default {
			background-color: #fff;
			border-color: #fff;
			height: 64px;
			border-radius: 0px;
			margin: 0px;
			z-index: 10;
			box-shadow: 0px 5px 5px 0 rgb(156 156 156 / 14%);
			position: fixed;
			width: 100%;
		  }
		  .navbar-inner {
			position: relative;
			top: 13px;
			padding: 0px 50px;
		  }
		  #menu a.navbar-brand {
			margin: -5px 0 10px -40px;
			padding: 0px 15px;
		  }
		  #menu .sf-logo {
			top: 13px;
			left: 94px;
			width: 162px;
			height: 36px;
			position: fixed;
			cursor: pointer;
		  }

		  #menu.navbar-default .navbar-nav  li > a,
		  #menu.navbar-default .navbar-nav > li > button {

			text-transform: uppercase;
			color: #fff;
			font-size: 14px;
			padding: 0;
			cursor: pointer;
			border: 2px solid transparent;
			letter-spacing: 0px;
			margin: 7px 8px;
			border-bottom: 0px;
			color: #2A383B;
			font-family: Lato-Semibold;
			background: none;
		  }

		  #menu.navbar-default .navbar-nav > li > a:hover,
		  #menu.navbar-default .navbar-nav > li > button:hover {
			color: #009ece;
		  }
		  .navbar-default .navbar-nav > .active > a,
		  .navbar-default .navbar-nav > .active > a:hover,
		  .navbar-default .navbar-nav > .active > a:focus {
			color: #ddd !important;
			background-color: transparent;
		  }
		  
		  .navbar-default .navbar-toggle:hover,
		  .navbar-default .navbar-toggle:focus {
			background-color: #ddd;
			border-color: #ddd;
		  }
		  .navbar-default .navbar-toggle:hover > .icon-bar {
			background-color: #fff;
		  }
		  .navigation_link > a,
		  .navigation_link > a:hover {
			border-radius: 5px;
		   
			color: #009ece !important;
		  }
		  .navbar-default .navbar-nav > .open > a {
			background: transparent !important;
		  }
		  .navbar-nav > li > .dropdown-menu {
			padding: 0px;
			margin-top: 10px;
			border-radius: 5px;
		  }
		  .dropdown-menu > li > a , .dropdown-menu > li > ul > li > a {
			padding: 15px 15px 10px 35px !important;
			color: #363c44;
			font-size: 13px;
			text-transform: uppercase;
		  }
		  .userLogin .dropdown-menu {
			  width: 202px !important;
			  border-top: 0 !important;
			  min-width: 120px;
			  left: -88px;
			  font-size: 12px;
			  margin-top: 15px !important;
			  border-top: 1px solid #bdbdbd !important;
		  }
		  .userLogin .dropdown-menu  li.userDetails{
			border-radius: 5px 5px 0px 0px;
			padding: 20px 10px;
		  }
		  .charFirst{
				position: absolute;
			  right: 13px;
			  top: 10px;
			  background: #e5f5fa;
			  text-transform: uppercase;
			  color: #83bacc;
			  border-radius: 100%;
			  padding: 4px 10px;
		  }
		  .userLogin .dropdown-menu  li.dropdown-item{
			border-radius: 0px 0px 5px 5px
		  }
		  .userLogin .dropdown-menu  li  {
			  color: #373737;
			  background: #fff;
			  list-style-type: none;
			  text-align: left;
			  border-bottom: 1px solid #efefef;
			  padding: 13px 5px 13px 10px;
			  line-height: 20px;
			  font-size: 13px;
		  }
		  .userLogin .dropdown-menu  li div.userName{
			padding-bottom: 2px;
			text-transform: capitalize;
		  }
		  .userLogin .dropdown-menu  li div:last-child{
			opacity: 0.6;
		  }
		  .userLogin .dropdown-menu  li div{
			line-height: 21px;
			width: 99%;
			text-overflow: ellipsis;
			overflow: hidden;
			white-space: nowrap;
		  }
		  .userLogin{
			  position: relative;
			  top: 8px; 
			  font-size: 14px;
			  cursor: pointer;
			 margin-left: 20px;
		  }
		  .userLogin .fa-user{
			font-size: 18px;
		  }
		  .dropdown_items:hover > .dropdown-menu {
			display: block;
			margin: 0px;
			padding: 0px;
			color: #009ece !important;
		  }
		  .resources_links  .dropdown-menu{
			width: fit-content;
		  }
		  .resources_links:hover  .dropdown-menu{
			display: block !important;
		  }
		  .resourceMenu li a {
			padding: 15px 30px 10px 27px !important;
			font-size: 13px !important;
    		margin: 0 !important;
		  }
		  .dropdown-menu {
			left: -29px;
			border-radius: 5px;
			top: 24px; 
		  }
		  .dropdown-menu > li > a:hover {
			background-color: transparent;
			color: #009ece !important;
		  }
		  .btn-custom {
			border-radius: 9px;
			padding: 8px !important;
			margin: 2px !important;
		  }
		  .productsMenu {
			left: -7px !important;
			margin-top: -3px !important;
			min-width: 217px;
			border: 1px solid #b2b2b2;
			box-shadow: 0px 6px 13px rgba(0, 0, 0, 0.175);
		  }
		  .productsMenu li a ,.productsMenu li ul li a {
			 font-weight: 600;
		  }
		  .productsMenu li:last-child a {
			padding-bottom: 15px !important;
		  }
		  .resourceMenu { 
			 box-shadow: 0 0 3.5px 0 rgb(162 162 162 / 50%);
		  }
		  .aboutMenu {
			min-width: 100px;
			border-radius: 3px;
			top: 52px;
			left: 2px;
			border: 1px solid #b2b2b2;
			box-shadow: 0px 6px 13px rgba(0, 0, 0, 0.175);
		  }
		  .dropdownLi:hover > .aboutMenu {
			display: block !important;
			color: #009ece !important ;
		  }

		  .liFreeTrial,.liLogin {
			background-color: transparent !important;
			border-radius: 18px;
			color: #045d7f;
			border: solid 1px #045d7f !important;
			margin-left: 20px;
			margin-top: 4px;
		  }
		  
		  #menu.navbar-default .navbar-nav li.liFreeTrial a,
		  #menu.navbar-default .navbar-nav li.liFreeTrial a:hover{
			color: #fff !important; 
		  }
		  .liBuy{
			background-color: transparent !important;
			border-radius: 18px;
			border: solid 1px #009ece !important;
			width: 60% !important;
			margin-top: 20px;
			margin-bottom: -9px;
			padding-top: 5px;
			padding-bottom: 5px;
		  }
		  .liBuy a{
			  font-size: 14px;
			  padding: 21px;
			  cursor: pointer;
			  border: 2px solid transparent;
			  letter-spacing: .5px;
			  margin: 14px 13px;
			  border-bottom: 0;
			  color: #009ece !important;
			 font-weight: 600;
		  }
		   .liLogin a {
			color: #045d7f !important;
			margin: 2px 13px !important;
			font-size: 12px !important;
		  }
		  .liLogin button {
			color: #045d7f !important;
			margin: 4px 13px !important;
			font-size: 12px !important;
		  }
		  .liLogin{
			padding: 0 6px;
			height: 28px;
		  }

		  .dropdownLi {
			border-top-right-radius: 5px !important;
			border-top-left-radius: 5px !important;
		  }
		  .textLI {
			border-radius: 5px;
		  }
		  .dropdown-menu > li > a:focus,
		  .dropdown-menu > li > a:hover {
			background-color: transparent;
		  }
		  .dropdown-menu > li > a {
			border-left: 3px solid #fff;
			font-weight: 600;
			border-radius: 3px 0px 0px 3px;
		  }
		  .dropdown-menu > li > ul > li > a {
			display: block;
			clear: both;
			font-weight: 400;
			line-height: 1.42857143;
			text-decoration: none;
			white-space: nowrap;
			padding: 15px 15px 10px 18px !important;
			  color: #363c44;
			  font-size: 13px;
			  text-transform: uppercase;
			 font-weight: 600;
		  }
		  .mobileSubMenu {
			display: none;
		  }
		  .arrow_top {
			position: absolute;
			top: -17px;
			left: 24%;
			z-index: 100;
		  }
		  .arrow_up {
			  color: #a0a0a0;
			  position: absolute; 
			  font-size: 20px!important;
			  top: -12px;
			  left: 70%;
		  }
		  
		  .liSpan{
			position: relative;
			top: 16px;
			left: 18px;
			opacity: 0.6;
		  }
		  .marginTop15{
			margin-top: 15px;
		  }
		  .normal_Signin a{
			color: #eadb76 !important;
			text-decoration: underline;
		  }
		  .is-active{
			display: block;
		  }
		  .close_button{
			display: none;
		  }
		  .liFreeTrial,
		  .activeTab{
			background: #23b5e9  !important;
		  }
		  .activeTab a,
		  .activeTab:hover a{
			color: #fff !important
		  }
		  
		  .logButton svg {
			  width: 18px;
			  position: relative;
			  left: -5px;
		  }
		  .logButton span{
			position: relative;
			top: -5px;
		  }
		  .logButton.activeTab svg path{
			fill: #fff;
		  }
		  @media only screen and (max-width: 2500px) and (min-width: 1367px) {
			.navbar-inner {
			  padding: 0px 100px;
			}
		  }
		  @media only screen and (min-width: 320px) and (max-width: 767px) {
		  .close_button{
			font-size: 53px;
			color: #28b0dd;
			background: transparent;
			padding: 0px;
			height: 0px;
			border: 0px;
			position: absolute;
			right: 11px;
			top: -18px; 
			outline: none;
			display: none;
			transition: opacity 2s;
		  }
			#menu.navbar-default{
			  height: 75px !important
			}
			#menu  a.navbar-brand svg{
			  height: 40px;
			  left: -10px;
			  top: 5px;
			  position: relative;
			}
			.userLogin .dropdown-toggle,
			.userLogin  li,
			.userLogin  li.userDetails{
			  font-size: 16px !important; 
			  width: 100%;
			}
			.userLogin  .dropdown-menu{
			  border: 0px !important; 
			  width: 100% !important;
			}
			.userLogin  .dropdown-menu .arrow_up{
			  display: none
			}
			.navbar-brand > img {
			  width: 122px;
			  height: 26px;
			}
			.navbar-brand {
			  margin: -2px 0 10px -40px !important;
			}
			.footerBg .col-md-7 {
			  padding-left: 5px
			}

			.navbar-toggle {
			  margin-top: 12px !important;
			  border: none !important;
			  border-radius: unset !important;
			  padding: unset !important;
			}
			.navbar-default .navbar-toggle .icon-bar {
			  background-color: #00ade1 !important;
			}
			.navbar-default .navbar-collapse {
			  position: absolute;
			  left: 0px;
			  margin-top: -7px;
			  border: 0px;
			  width: 100%;
			}
			.navbar-fixed-bottom .navbar-collapse, .navbar-fixed-top .navbar-collapse {
			   max-height: unset !important; 
		  }
			#menu.navbar-default .navbar-nav > li > a {
			  margin: 28px 20px;
			}
			.liFreeTrial,.liLogin {
			  margin-right: 20px;
			  width: 88%;
			  text-align: center;
			}
			.mobileSubMenu {
			  display: block;
			  float: right;
			  color: #000;
			  font-size: 9px;
			  margin-right: 15px;
			  text-align: center;
			  padding-top: 5px;
			}
			.navbar-default .navbar-toggle:hover,
			.navbar-default .navbar-toggle:focus {
			  background-color: transparent !important;
			}
			.liLogin{
			  margin-top: 10px;
			}
			.charFirst{
			  top: -2px;
			  padding: 5px 10px;
			}
		  }
		  @media only screen and (min-width: 769px) and (max-width: 1200px) {
		   .userLogin .dropdown-toggle,
		   .userLogin  li,
			.userLogin  li.userDetails{
			  font-size: 16px !important; 
			  width: 100%;
			}
			.userLogin  .dropdown-menu{
			  border: 0px !important; 
			  width: 100% !important;
			}
			.userLogin  .dropdown-menu .arrow_up{
			  display: none
			}
			.navbar-brand > img {
			  width: 122px;
			  height: 36px;
			}
			.liFreeTrial,.liLogin {
			  width: unset !important;
			}
		  }
	`}</style>
  </Fragment>
  )};
  
  export default NavBar;
import { Modal } from 'react-bootstrap'

const GettingStarted = ({...rest }) => {
    return (<Modal {...rest} bsSize="large">
        <div className="modal-content"> 
		<div className="clear">  
		 	<button type="button" className="close" onClick={rest.onHide}>&times;</button>  
			<div className="modal-body">
				<h4>Get Started</h4>
				<h6 className="padBottom10">SnappyFlow SaaS</h6>
				<ul className="bullet_list padTop10 wid80">
					<li>To register, click on <span className="fontStyle">Free Trial</span> button from <span className="fontStyle">www.snappyflow.io</span> providing your Name and Email ID</li> 
					<li>Validate your Email and enable the free trial account</li>
					<li>Click on the &quot;<span className="fontStyle">Go to Portal</span>&quot; button on the website. You will be logged into &quot;<span className="fontStyle">Demo</span>&quot; account where the sample application can be seen</li>
					<li>Request an <span className="fontStyle">Upgrade to Trial</span>” by clicking on the link provided in the top bar. You will get an email stating &quot;<span className="fontStyle">Your SnappyFlow account is created successfully</span>&quot; after the SnappyFlow team approves your full trial request</li>
					<li>For more information, refer to <a href="https://docs.snappyflow.io/docs/Quick_Start/getting_started" className="fontStyle"><u>SnappyFlow documentation</u></a> </li>
				</ul>

				<h6 className="padTop15">Support</h6>
				<div className="emailContainer">
					<div>Slack: <a href="mailto:snappyflow.slack.com">snappyflow.slack.com</a></div>
					<div>Email: <a href="mailto:support@snappyflow.io">support@snappyflow.io</a></div>
				</div>
				<div className="footer_container">
				<button type="button" className="primary-btn" onClick={rest.onHide}>OK</button> 
				</div>
			</div>
        </div>
    </div>
    <style jsx>
        {`
            .modal-content{
                box-shadow: none !important;
                border-radius: 15px !important;
                border: 0px !important;
            }
            .modal-body { 
              overflow: auto;
              padding: 27px 30px;
              border-radius: 15px !important;
              background: url('../../assets/images/image_launch.png') 101% bottom no-repeat;
            }
            h4{
               font-family: Lato-Bold !important;
                margin: 0px 0px 25px 0px;
                font-size: 24px;
                color: #2A383B;
                text-transform: capitalize;
            }
            
            h6{
                font-family: Lato-Bold !important;
                margin: 8px 0px 8px 0px;
                font-size: 18px;
                color: #2A383B;
                }
            p {
              font-size: 13px;
              line-height: 20px;
              color: #363c44;
            }
            
            .footer_container {
              padding: 7px 0px 0px
            }
            ::-webkit-scrollbar {
              width: 6px;
            }
            ::-webkit-scrollbar-thumb {
              background: #009ece; 
              border-radius: 3px;
            }
            .primary-btn {
              border-radius: 3px;
              border: solid 1px #28a2f3;
              color: #fff;  
              padding: 7px 22px;
              background-color: #28a2f3;
            }
            .bullet_list{
              padding: 0px 0px 0px 20px;
              margin: 0px;
            
            }
            .bullet_list li {
              font-family: Lato-Regular !important;
              list-style-type: disc;
              line-height: 24px;
              font-size: 14px;
              text-align: left;
              padding-bottom: 10px;
              padding-left: 2px;
            }
            .bullet_list li::marker {
                color: #727272;
                font-size: 17px;
            }
            .bullet_list li:last-child{
              padding-bottom:0px;
            }
            
            .emailContainer{
                margin: 10px 0px 20px 0px; 
            }
            .emailContainer a{
                color: #28A2F3;
            }
            .emailContainer div{
                margin-bottom: 5px;
            }
            .close{
                position: absolute;
                right: 20px;
                top: 10px; 
                outline: none;
                opacity: 0.6;
                z-index: 10;
            }
        `}
    </style>
  </Modal>)
}

export default GettingStarted

import { useEffect, useState } from 'react';
import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css';
import { HubspotProvider } from '@aaronhayes/react-use-hubspot-form';
import Script from 'next/script';


function MyApp({ Component, pageProps }) {
  
  const scroll_Top = () => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }
  const [pathName, setPathName] = useState('');

  useEffect(() => {
    setPathName(window.location.pathname)
    // window is accessible here.
    // console.log("window.innerHeight", window.innerHeight);
    if (typeof window !== undefined) {
      window.onscroll = () => {
        let currentScrollPos = window.pageYOffset;
        let maxScroll = document.body.scrollHeight - window.innerHeight;
        // console.log(maxScroll, currentScrollPos)
        if (currentScrollPos > 100 && currentScrollPos < maxScroll) {
          scrollEvent(currentScrollPos);
        } else {
          scrollEvent(currentScrollPos);
        }
      }
    }

  }, []);
  const scrollEvent = (number) => {
    // console.log(number)
    if(number > 100){ 
      const text = document.querySelector('.topText');
      text.style.display = 'block'
    }
    else{ 
      const text = document.querySelector('.topText');
      text.style.display = 'none'
    }
  }
  return <HubspotProvider> 
    <script defer src="https://www.googletagmanager.com/gtag/js?id=UA-119970804-2"></script>
    <script type="text/javascript" id="hs-script-loader" defer src="https://js-na1.hs-scripts.com/6731253.js"></script>
    {/* <Script src="test.js" ></Script> */}
    <Component {...pageProps} />
    <div className="topText" onClick={scroll_Top}>
      <button>
      { pathName.includes('blog-details') ? <img
        src="../assets/images/back-to-top-icon.png" /> : <img
        src="assets/images/back-to-top-icon.png" />}
      </button></div>
    </HubspotProvider>
}

export default MyApp

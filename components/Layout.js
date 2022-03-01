import Footer from "./Footer";
import NavBar from "./NavBar";

const layoutStyle = {
//   display: "flex",
//   flexDirection: "column",
//   height: "100%",
//   width: "100%"
};

const contentStyle = {
  flex: 1,
  display: "flex",
  flexDirection: "column",
  paddingTop: '64px'
};

const Layout = props => (
  <div className="Layout" style={layoutStyle}>
    <NavBar path={props.path}/>
    <div className="Content" id="outerContainer" style={contentStyle}>
      {props.children}
    </div>
    <Footer path={props.path}/>
  </div>
);

export default Layout;
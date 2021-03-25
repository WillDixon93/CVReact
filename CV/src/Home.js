import MenuContainer from './MenuContainer.js';
const { Component } = require("react");


class Home extends Component {
 render () {
   return ( 
     <div>
       <MenuContainer />
       <h2>Hello World</h2>
     </div>
   )
 }
}

export default Home;
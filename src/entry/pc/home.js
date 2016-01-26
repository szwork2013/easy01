/*import css*/

require('../../css/pc/style.css');
require('../../../node_modules/bootstrap/dist/css/bootstrap.min.css');

/*import js*/
require('jquery');
require('bootstrap');

/*import react*/
var React=require('react');
var ReactDOM=require('react-dom');

/*import component */
var Page1=require('../../js/pc/page1');



/*export app js*/
var App=React.createClass({
    render: function(){
        return(
            <div>
               <Page1/>
            </div>
        )
    }
});
ReactDOM.render(<App />,document.getElementById('example'));

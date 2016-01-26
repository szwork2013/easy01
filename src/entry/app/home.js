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
//var Carouse=require('../js/common/carouse');
//var Top=require('../js/common/navbar_top');
//var Bottom=require('../js/common/navbar_bottom');



/*export app js*/
var App=React.createClass({
    render: function(){
        return(
            <div>
                app test
            </div>
        )
    }
});
ReactDOM.render(<App />,document.getElementById('example'));

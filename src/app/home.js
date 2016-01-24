require('./css/style.css');
require('./css/lib/bootstrap/css/bootstrap.css');
require('jquery');
require('bootstrap');
var React=require('react');
var ReactDOM=require('react-dom');
var Carouse=require('./js/carouse');
var Button=require('./js/button');
var Box=require('./page1');
var App=React.createClass({
    render: function(){
        return(
            <div>
                <Carouse />
                <Button />
                <Box />

            </div>
        )
    }
});
ReactDOM.render(<App />,document.getElementById('example'));

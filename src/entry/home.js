/*import css*/
var cssPath='D:/easy/src/css',
    jsPath='D:/easy/src/img',
    imgPath='D:/easy/src/js',
    htmPath='D:/easy/src/view',
    libPath='D:/easy/src/lib';
require(cssPath+'/style.css');
require(libPath+'/bootstrap/css/bootstrap.css');

/*import js*/
require(libPath+'/jquery.min');
require(libPath+'/bootstrap/js/bootstrap.min');

/*import react*/
var React=require('react');
var ReactDOM=require('react-dom');

/*import component */
var Navbar=require(jsPath+'/js/common/navbar');
var Carouse=require(jsPath+'/js/common/carouse');






/*export app js*/
var App=React.createClass({
    render: function(){
        return(
            <div>
                <Navbar />
                <Carouse/>
            </div>
        )
    }
});
ReactDOM.render(<App />,document.getElementById('example'));

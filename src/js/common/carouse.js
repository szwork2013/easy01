var React = require('react');
var Indicator=require('./indicator');
//var Img=require('./img');
var img1=require('../../img/ca.jpg');
var img2=require('../../img/ca2.jpg');
var img3=require('../../img/ca3.jpg');
var style={
    marginTop:'33px'
}
module.exports=React.createClass({
    render: function() {
        return (
            <div id="myCarousel" className="carousel slide " style={style}>
                <Indicator indicators={[0,1,2]}/>
                <div className="carousel-inner">
                    <div className="item active"><img src={img1} alt="First slide"/></div>
                    <div className="item"><img src={img2} alt="Second slide"/></div>
                    <div className="item"><img src={img3} alt="Third slide"/></div>
                </div>
                <a className="carousel-control left" href="#myCarousel" data-slide="prev">&lsaquo;</a>
                <a className="carousel-control right" href="#myCarousel" data-slide="next">&rsaquo;</a>
            </div>
        );
    }
});
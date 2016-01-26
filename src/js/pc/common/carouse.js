var React = require('react');
var img1=require('./img/c1.png');
var img2=require('./img/c2.jpg');
var img3=require('./img/c3.jpg');
module.exports=React.createClass({
    render: function() {
        return (
            <div className="container">
                <div id="myCarousel" className="carousel slide">
                    <ol className="carousel-indicators">
                        <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                        <li data-target="#myCarousel" data-slide-to="1"></li>
                        <li data-target="#myCarousel" data-slide-to="2"></li>
                    </ol>

                    <div className="container carousel-inner">
                        <div className="item active"><img src={img1} alt="First slide"/></div>
                        <div className="item"><img src={img2} alt="Second slide"/></div>
                        <div className="item"><img src={img3} alt="Third slide"/></div>
                    </div>
                    <a className="carousel-control left" href="#myCarousel" data-slide="prev">&lsaquo;</a>
                    <a className="carousel-control right" href="#myCarousel" data-slide="next">&rsaquo;</a>
                </div>
            </div>
        );
    }
});
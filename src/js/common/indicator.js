/**
 * Created by chenwei on 2016/1/25.
 */
var React = require('react');

module.exports=React.createClass({
    getId:function(){
        var ids=[];
        for(var i=0;i<this.props.indicators.length;i++){
            if(i==0){
                   ids[i]= <li data-target="#myCarousel"  className=" item" data-slide-to={this.props.indicators[i]}></li>;
            }
            else{

                  ids[i]=  <li data-target="#myCarousel" className="item" data-slide-to={this.props.indicators[i]}></li>

            }
        }
        return ids;
    },
    render: function() {
        return (
                <ol className="carousel-indicators">
                    {
                        this.getId()
                    }
                </ol>
        );
    }
});
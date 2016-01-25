var React = require('react');
var style={
    marginTop:'33px'
}

module.exports=React.createClass({
    getImg:function(){
        var images=[];
        for(var i=0;i<this.props.images.length;i++){
            if(i==0){

                images[i]=  <div  className="item "><img  src={this.props.images[i]} /></div>;
            }
            else{

                images[i]=   <div className="item"><img  src={this.props.images[i]} /></div>

            }
            return images;
        }

    },
    render: function() {
        return (
                <div className="carousel-inner">
                    {
                        this.getImg()
                    }
                </div>
        );
    }
});
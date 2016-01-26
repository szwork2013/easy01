/**
 * Created by chenwei on 2016/1/26.
 */
var React = require('react');
var Navbar=require('./common/navbar');
var Carouse=require('./common/carouse');
module.exports=React.createClass({
    render:function(){
        return(
            <div>
                <Navbar/>
                <Carouse/>
            </div>
        )
    }
})
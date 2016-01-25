/**
 * Created by chenwei on 2016/1/25.
 */
var React=require('react');

module.exports=React.createClass({
    render:function(){
        return(

            <nav className="navbar  navbar-fixed-top"  >
                <li className="btn btn-default pull-left"><a href="#">主页</a></li>
                <li className="btn btn-default pull-right"><a href="#">分类</a></li>
            </nav>
        )
    }
})
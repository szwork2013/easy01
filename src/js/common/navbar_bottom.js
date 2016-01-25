/**
 * Created by chenwei on 2016/1/25.
 */
var React=require('react');
module.exports=React.createClass({
    render:function(){
        return(

            <nav className="navbar navbar-inverse navbar-fixed-bottom">
                    <ul  className="btn btn-group ">
                        <li className="btn"><a>主页</a></li>
                        <li className="btn"><a>分类</a></li>
                        <li className="btn"><a>购物车</a></li>
                        <li className="btn"><a>我的</a></li>
                    </ul>
            </nav>
        )
    }
})
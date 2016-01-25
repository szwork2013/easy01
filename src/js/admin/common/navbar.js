/**
 * Created by chenwei on 2016/1/25.
 */
var React=require('react');
module.exports=React.createClass({
    render:function(){
        return(
            <nav className="navbar navbar-inverse navbar-fixed-bottom">
                <div className="container">
                    <div className="navbar-header">
                        <a className="navbar-brand" href="#">profffj1</a>
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#sublist">
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                    </div>
                    <div class="navbar-collapse collapse " id="sublist">
                        <ul className="nav navbar-nav ">
                            <li className="active"><a href="#">Home</a></li>
                            <li className="active"><a href="#">about</a></li>
                            <li className="active"><a href="#">Contact</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
})
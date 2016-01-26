/**
 * Created by Administrator on 2016/1/23 0023.
 */
var getMixin={
        getText:function(key){
            /*
            * 1、js中this不能传递到子函数中
            * 2、js中不是这样给变量key赋值{key：value}，因为js把它作为一个字符串处理
            * */
            var that = this;
            var state={};//形成闭包，减少内存开销
            return function(event){

                state[key]=event.target.value;
                that.setState(state);
                //this.setState(state);
            }
        }
    };
var React=require('react');
//var addons=require('../../node_modules/react/dist/react-with-addons');
var Comment=React.createClass({
    render:function(){
        return(
            <div>
                <p >{this.props.author}</p>
                <span >{this.props.children}</span>
            </div>
        )
    }

});
var List=React.createClass({
    render:function(){
        var comments=this.props.data.map(function(comment){
            return(
                <Comment key={comment.id} author={comment.author}>
                    {comment.text}
                </Comment>
            );
        });
        return(
            <div>
                {comments}
            </div>
        )
    }

});
var Form=React.createClass({
    mixins:[getMixin],
    //mixins:[addons.LinkedStateMixin],
    getInitialState:function(){
        return {author:'',text:''}
    },
    handleSubmit:function(e){
        e.preventDefault();
        var author=this.state.author;
        var text=this.state.text;
        //alert(author+" | "+text)
        if(!author||!text){
            return;
        }
        console.log(this.state);
        this.props.onHandlerCommit({author:author,text:text});
        this.setState({author:'',text:''});
    },
    render:function(){
            return(
                <form onSubmit={this.handleSubmit}>
                    <input
                        type='text'
                        placeholder='请输入用户名'
                        value={this.state.author}
                        //valueLink={linkState('author')}
                        onChange={this.getText('author')}
                        />
                    <input
                        type='text'
                        placeholder='请输入评论aaa'
                        value={this.state.text}
                        onChange={this.getText('text')}
                        //valuLink={this.linkState('text')}
                        />
                    <input type='submit' value="提交"/>
                    <p>{this.state.author}</p>
                    <p>{this.state.text}</p>
                </form>

            )
    }
});
module.exports=React.createClass({
    getInitialState:function(){
        return {data:[]}
    },
    getComments:function(){
        $.get('/getComments',function(docs,statu){
            if(docs.flag==200){
                this.setState({data:docs.content})
            }else{
                console.log('getCommits error')
            }
        }.bind(this))
    },
    handlerCommite:function(comment){
        comment.id=Date.now();
        $.post('/commitComment',comment,function(docs,state){
            if(docs.flag==200){
                //var comments=this.state.data.push(comment);
                //this.setState({data:comments});
                $.get('/getComments',function(docs,statu){
                    if(docs.flag==200){
                        this.setState({data:docs.content})
                    }else{
                        console.log('getCommits error')
                    }
                }.bind(this))
            }
        }.bind(this))
    },
    componentDidMount:function(){

        this.getInitialState();
        setInterval(this.getComments(),1000)
    },
    render: function(){
        return(
            <div>
                <h1>评论话题</h1>
                <List data={this.state.data}/>
                <Form onHandlerCommit={this.handlerCommite}/>
            </div>
        )
    }
});

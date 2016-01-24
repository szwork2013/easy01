/**
 * Created by Administrator on 2016/1/24 0024.
 */
var React=require('react');
var Comment=React.createClass({
    render:function(){
        return(
            <div >
                <h2 > {this.props.author}</h2>
                <span>{this.props.children}</span>
            </div>
        )
    }
});
var List=React.createClass({
    render:function(){
        var Comments=this.props.data.map(function(comment){
            return (<Comment key={comment.id} author={comment.author}>
                {comment.text}
            </Comment>)
        });
        return (
            <div >
                {Comments}
            </div>
        )
    }
});
var Form=React.createClass({
    getInitialState:function(){
        return {author:'',text:''}
    },
    handleAuthorChange:function(e){
        this.setState({author:e.target.value});
    },
    handleTextChange:function(e){
        this.setState({text:e.target.value});
    },
    handleSubmit:function(e){
        e.preventDefault();
        var author=this.state.author.trim();
        var text=this.state.text.trim();
        if(!text||!author){
            return;
        }
        this.props.onHandlerCommit({author:author,text:text});
        this.setState({author:"",text:''})
    },
    render:function(){
        return(
            <form onSubmit={this.handleSubmit}>
                <input
                    type='text'
                    placeholder='请输入用户名'
                    value={this.state.author}
                    onChange={this.handleAuthorChange}
                    />
                <input
                    type='text'
                    placeholder='请输入评论'
                    value={this.state.text}
                    onChange={this.handleTextChange}
                    />
                <input type='submit' value="提交"/>
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

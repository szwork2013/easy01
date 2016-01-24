var React=require('react');
module.exports=React.createClass({
    render: function() {
        var name=['tom','lily','david'];
        return (<div>
            {
                name.map(function(data){
                    return <div>hello,{data}</div>
                })
            }

        </div>)
    }
});
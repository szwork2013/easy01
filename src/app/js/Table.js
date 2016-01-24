/**
 * Created by Administrator on 2016/1/20 0020.
 */
var React = require('react');
//var DOM=React.DOM;
//var table=DOM.table,tr=DOM.tr,td=DOM.td;
module.exports=React.createClass({
    render:function(){
        return (
            <table>
                <tr>{
                    this.props.datas.map(function(data){
                        return(
                            <td>{data.name}</td>

                        )
                    })
                }
                </tr>
            </table>
        )
    }
});
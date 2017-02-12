/**
 * Created by weimin on 17-2-12.
 */
import React,{Component} from "react"
import {Carousel} from "antd"

export default class Home extends Component{
    render(){
        return (
            <div>
             <Carousel autoplay>
                 <div>
                     <img src={require("../image/carous1.png")} alt="" style={{width:"100%"}}/>
                 </div>
                 <div>
                     <img src={require("../image/carous2.png")} alt="" style={{width:"100%"}}/>
                 </div>
             </Carousel>
            </div>
        )
    }
}
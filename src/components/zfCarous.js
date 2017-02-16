/**
 * Created by weimin on 17-2-16.
 */
import React,{Component} from "react"
import {Carousel} from "antd"


class Carous extends Component{

    render(){
        return (
            <Carousel autoplay className="home-item1">
                <div>
                    <img src={require("../image/carous1.png")} alt="" className="full-img"/>
                </div>
                <div>
                    <img src={require("../image/carous2.png")} alt="" className="full-img" />
                </div>
            </Carousel>
        )
    }
}

export default Carous;
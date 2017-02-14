/**
 * Created by weimin on 17-2-12.
 */
import React,{Component} from "react"
import {Carousel} from "antd"

export default class Home extends Component{
    componentDidMount(){

    }

    render(){
        const courses=[{title:"实战珠峰课堂系列ReactNative课程",author:"Ramroll",description:"提供ReactNative基础课程，同时提供一个在Github上发售的ReactNative项目。学完基础课程，然后学如何架构一个完整的APP.",
            price:"2000",image:"http://ketang.zhufengpeixun.cn/static/nodejs.jpg"},{title:"实战珠峰课堂系列ReactNative课程",author:"Ramroll",description:"提供ReactNative基础课程，同时提供一个在Github上发售的ReactNative项目。学完基础课程，然后学如何架构一个完整的APP.",
            price:"2000",image:"http://ketang.zhufengpeixun.cn/static/nodejs.jpg"},{title:"实战珠峰课堂系列ReactNative课程",author:"Ramroll",description:"提供ReactNative基础课程，同时提供一个在Github上发售的ReactNative项目。学完基础课程，然后学如何架构一个完整的APP.",
            price:"2000",image:"http://ketang.zhufengpeixun.cn/static/nodejs.jpg"}];
        return (
            <div class="home-container">
             <Carousel autoplay className="home-item1">
                 <div>
                     <img src={require("../image/carous1.png")} alt="" className="full-img"/>
                 </div>
                 <div>
                     <img src={require("../image/carous2.png")} alt="" className="full-img" />
                 </div>
             </Carousel>
                <div className="home-item2">
                    <img src={require("../image/fire-all-course.png")} alt="" className="course-img"/>
                </div>
                <div className="course-list">
                {
                    courses.map((item)=>{
                        return (
                            <div className="course-detail">
                                <div>
                                    <img src={''+item.image} alt="" className="small-img"/>
                                </div>
                                <div>
                                    <h4>{item.title}</h4>
                                    <div>
                                        讲师：{item.author}
                                    </div>
                                    <div className="course-desc">
                                        {item.description}
                                    </div>
                                    <div className="price">&#65509;{item.price}</div>
                                </div>
                            </div>  
                        )
                    })
                }
               </div>
                </div>
        )
    }
}
/**
 * Created by weimin on 17-2-12.
 */
import React,{Component} from "react"
import {Carousel} from "antd"

export default class Home extends Component{
    render(){
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
                    <div className="course-detail">
                        <div>
                            <img src={require("../image/react.jpg")} alt="" className="small-img"/>
                        </div>
                        <div>
                            <h4>实战&lt;珠峰课堂&gt;系列ReactNative课程</h4>
                            <div>
                                讲师：Ramroll
                            </div>
                            <div className="course-desc">
                                提供ReactNative基础课程，同时提供一个在Github上发售的ReactNative项目。学完基础课程，然后学如何架构一个完整的APP。
                            </div>
                            <div className="price">&#65509;2000</div>
                        </div>
                    </div>
                    <div className="course-detail">
                        <div>
                            <img src={require("../image/react.jpg")} alt="" className="small-img"/>
                        </div>
                        <div>
                            <h4>实战&lt;珠峰课堂&gt;系列ReactNative课程</h4>
                            <div>
                                讲师：Ramroll
                            </div>
                            <div className="course-desc">
                                提供ReactNative基础课程，同时提供一个在Github上发售的ReactNative项目。学完基础课程，然后学如何架构一个完整的APP。
                            </div>
                            <div className="price">&#65509;2000</div>
                        </div>
                    </div>
                    <div className="course-detail">
                        <div>
                            <img src={require("../image/react.jpg")} alt="" className="small-img"/>
                        </div>
                        <div>
                            <h4>实战&lt;珠峰课堂&gt;系列ReactNative课程</h4>
                            <div>
                                讲师：Ramroll
                            </div>
                            <div className="course-desc">
                                提供ReactNative基础课程，同时提供一个在Github上发售的ReactNative项目。学完基础课程，然后学如何架构一个完整的APP。
                            </div>
                            <div className="price">&#65509;2000</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
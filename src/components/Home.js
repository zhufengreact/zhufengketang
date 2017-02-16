/**
 * Created by weimin on 17-2-12.
 */
import React,{Component} from "react"
import {Carousel} from "antd"
import Carous from "./zfCarous"

export default class Home extends Component{
    componentWillMount(){
        this.props.fetchCourse();
    }
    render(){
        const {courses} = this.props;
        return (
            <div class="home-container">
                <Carous/>
                <div className="home-item2">
                    <img src={require("../image/fire-all-course.png")} alt="" className="course-img"/>
                </div>
                <div className="course-list">
                {courses &&
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

Home.propTypes = {
    courses:React.PropTypes.array.isRequired
}
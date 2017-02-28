/**
 * Created by weimin on 17-2-14.
 */
import React,{Component} from "react"
import {connect} from "react-redux"
import Home from "../components/Home.js"
import {courseURL} from "../const/consts.js"

let mapStateToProps = (state)=>{
    return {
        courses:state.homeReducer.courses
    }
}

let mapDispatchToProps = (dispatch)=>{
    return {
        fetchCourse:()=>{
            fetch(courseURL).then(res=>res.json()
               ).then(json=>{
                dispatch({
                    type:"getCourse",
                    data:json.data.courses
                })
            })
        }
    }
}

const HomeContainer = connect(mapStateToProps,mapDispatchToProps)(Home);
export default HomeContainer;


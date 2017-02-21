/**
 * Created by weimin on 17-2-17.
 */
import React,{Component} from "react"
import {Layout,Icon,Row,Col} from "antd"
import {Link} from "react-router"
const {Header,Content} = Layout;

class About extends Component {
    render(){
        return (
            <div>
                <Header className="page-header"  style={{background:"#082c48",color:"#fff"}}>
                        <Row>
                            <Link to="/setting" style={{color:"#fff"}}><Col span={1}><Icon type="arrow-left"/></Col></Link>
                            <Col span={23}><div className="text-center">关于我们</div></Col>
                        </Row>
                </Header>
                <Content>
                    <div className="about-content">
                        <p style={{marginTop:"50px"}}>
                            中国是一个人口大国，但教育资源非常稀缺。学生找不到好的老师，教育资源集中在了少数地方或人群手中。
                            为了改变这样的现状，越来越多的在线教育，甚至一些有良心的学校如MIT提供了大量的公开课。在这样的背景下，
                            珠峰也开始着手向网络教育（智能教育）领域布局，为大家提供更好的学习体验。
                        </p>
                        <p>
                            另外受开源运动的影响，我们从前辈们的努力中受益。从Linux到后来的V8、hadoop、opencv等等，都为
                            我们今天的如此繁荣的信息产业做出了巨大的贡献。因此，珠峰效仿先贤，一直也希望开发一款开源的应用来帮助
                            更多学员。
                        </p>
                        <p>
                            同时，珠峰也发现学员从学习知识到实际应用的巨大距离，珠峰也一直在为此而努力。我们不希望《珠峰课堂》
                            如同其他开源App，如Facebook的F8 App，没有太多的实际意义。我们要打造的是一款走在前沿的教育App给学员
                            提供更好的教学体验。作为纯商业公司固然不肯将自己的核心代码公布，而作为教育领域的良心，珠峰可以这样坚持
                            下去。
                        </p>
                        <p>
                            作为目前的V1.0版本，学员还只能在珠峰课堂上浏览课程、购课。但我们正在开发的V2.0版本会加入视频播放
                            功能。而在3.0版本，我们将为珠峰课堂加入教育直播功能。我们会继续推进这个软件，我们前后端都会开源。我们甚至
                            以后会集成机器学习和智能推荐算法进去，这些也将对学员开源。
                        </p>
                        <p>
                            珠峰课堂Github地址：http://www.github.com/zhufengketang/app。
                        </p>
                    </div>
                </Content>
            </div>
        )
    }
}

export default About;
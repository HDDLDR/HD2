import React,{Component} from 'react';
import {Carousel} from 'react-bootstrap';
import './home.css';
import $ from 'jquery';

import {
        BrowserRouter as Router,
        Route,
        Link
    } from 'react-router-dom';


//首页
class Home extends Component{
   constructor(){
            super()
            this.state={
                hometst:[]
            }
   }
    componentDidMount(){
        $.ajax({
            type:'get',
            url:'http://localhost:3000/home/homer',
            success:function (x) {
                // console.log(x);
                this.setState({hometst:Array.of(x)});
            }.bind(this)
        });
    }
   render(){
    return (<div>
         {/*banner轮播*/}
        <div id="Banner">
        <h1 className="msg">尊师 重道&#x3000;薪火 相传 <br/>
                            修身 勤学&#x3000;精艺 践行</h1>
                 <Carousel>
                <Carousel. Item>
                    <img src="http://localhost:3000/images/1501325596447.jpg" alt="加载失败" className="ly_img"/>
                </Carousel. Item>
                <Carousel. Item>
                    <img src="http://localhost:3000/images/1501325581526.jpg" alt="加载失败" className="ly_img"/>
                </Carousel. Item>
                <Carousel. Item>
                    <img src="http://localhost:3000/images/1501326658796.jpg" alt="加载失败" className="ly_img"/>
                </Carousel. Item>
            </Carousel>
        </div>
            {this.state.hometst.map(function(item,x){
               return <div dangerouslySetInnerHTML={{__html:item[x].content}} key={x}/>
             })}
    </div>)
}
};

export default Home;





        // {/* banner轮播 */}
        // <div id="Banner">
        //          <Carousel>
        //         <Carousel. Item>
        //             <img src="http://localhost:3000/images/1501325596447.jpg" alt="加载失败" className="ly_img"/>
        //         </Carousel. Item>
        //         <Carousel. Item>
        //             <img src="http://localhost:3000/images/1501325581526.jpg" alt="加载失败" className="ly_img"/>
        //         </Carousel. Item>
        //         <Carousel. Item>
        //             <img src="http://localhost:3000/images/1501326658796.jpg" alt="加载失败" className="ly_img"/>
        //         </Carousel. Item>
        //     </Carousel>
        // </div>
        //   {/*学校概况*/}
        //   <div className="profile">
        //       <div className="pro_head">
        //           <h2>学校概况</h2>
        //           <p>——   DETAILS OF THE INSTITUTE   ——</p>
        //       </div>
        //       <div className="pro_foot">
        //           <div className="pro_foot_left">
        //                 <p>培养人才的目标，我认为，首先应该注重人格的陶冶，使每个戏剧青年都有健全的人格，
        //                 是一个堂堂正正的“人”，爱民族，爱国家，辨是非，有情操的人。
        //                 <span>——校长</span></p>

        //           </div>
        //           <div className="pro_foot_right">
        //                 <ul>
        //                       <li></li>
        //                       <li></li>
        //                       <li></li>
        //                       <li></li>
        //                       <li></li>
        //                       <li></li>
        //                       <li></li>
        //                       <li></li>
        //                 </ul>
        //           </div>
        //       </div>
        //   </div>
        // {/*我们值得你拥有*/}
        // <div className="women">
        //     <div className="women_one">
        //         <p>我们值得你拥有 <span>WE DESERVE YOU</span></p>
        //         <p>戏剧学院是中国培养演艺专门人才的高等艺术院校，前身是实验戏剧学校，
        //             1945年12月1日由著名教育家顾毓琇与著名戏剧家李健吾、顾仲彝、黄佐临等创立
        //             熊佛西先生为首任院长。1949年10月，上海市立实验戏剧学校改名为上海市立戏剧专科学校。
        //             1952年全国高等院校实行院系调整。</p>
        //         <p><Link to="/profile">查看更多</Link></p>
        //     </div>
        //     <div className="women_two">
        //         <div className="women_two-o">
        //             <p className="women_p">99.8%</p>
        //             <p className="women_por">就业率</p>
        //         </div>
        //         <div>
        //             <p className="women_p">50869</p>
        //             <p className="women_por">在校生</p>
        //         </div>
        //         <div>
        //             <p className="women_p">3501</p>
        //             <p className="women_por">在校老师</p>
        //         </div>
        //         <div className="women_two-t">
        //             <p className="women_p">126</p>
        //             <p className="women_por">本科专业</p>
        //         </div>
        //     </div>
        // </div>
        // {/*名师讲堂*/}
        // <div className="mingshi_o">
        //     <h2>名师讲堂</h2>
        //     <p>——   AUDITORIUM   ——</p>
        // </div>
        // {/*名师讲堂下图*/}
        // <div className="con">

        // </div>
        // {/*认识我们的老师*/}
        // <div className="renshi">
        //     <div className="renshi_one">
        //         <div className="renshi_one_o">
        //             <p>认识我们的老师 <span> MEET OUR TEACHER</span></p>
        //             <p>戏剧学院是中国培养演艺专门人才的高等艺术院校，前身是实验戏剧学校，
        //                 1945年12月1日由著名教育家顾毓琇与著名戏剧家李健吾、顾仲彝、
        //                 黄佐临等创立熊佛西先生为首任院长。1949年10月，上海市立实验戏剧学校改名为上海市立戏剧专科学校。
        //                 1952年全国高等院校实行院系调整。</p>
        //             <p><Link to="/team">查看更多</Link></p>
        //         </div>
        //         <div className="renshi_one_end">
        //             <div className="renshi_one_t"></div>
        //             <p>马兰</p>
        //             <p>在职教授</p>
        //         </div>
        //         <div className="renshi_one_end">
        //             <div className="renshi_one_t"></div>
        //             <p>王立军</p>
        //             <p>名誉博士</p>
        //         </div>
        //         <div className="renshi_one_end">
        //             <div className="renshi_one_t"></div>
        //             <p>厉振林</p>
        //             <p>在职教授</p>
        //         </div>
        //     </div>
        // </div>
        // {/*校内新闻*/}
        // <div className="xinwen">
        //     <h2>校内新闻</h2>
        //     <p>——   ON CAMPUS NEWS   ——</p>
        // </div>
        // {/*校内新闻下*/}
        // <div className="xinwen_bottom">
        //     <div className="xinwen_bottom_left"></div>
        //     <div className="xinwen_bottom_right" >
        //         <div className="xinwen_bottom_right_one" ></div>
        //         <div className="xinwen_bottom_right_one" ></div>
        //         <div className="xinwen_bottom_right_one" ></div>
        //     </div>
        // </div>


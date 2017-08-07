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
                hometxt:[],
                homePro:[],
                homeProRt:[],
                homeHaveLeft:[],
                homeHaveRight:[],
                homeTeachers:[],
                homeThsLeft:[],
                homeThsRight:[],
                homeSayHello:[],
                homeSayHellos:[],
                homeNews:[],
                homeNewsList:[],
            }
   }
    componentDidMount(){
        $.ajax({
            type:'get',
            url:'http://localhost:3000/home/homeBanner',
            success:function (x) {
                // console.log(x);
                this.setState({hometxt:x});
            }.bind(this)
        });

        $.ajax({
            type:'get',
            url:'http://localhost:3000/home/homePro',
            success:function (x) {
                // console.log(x);
                this.setState({homePro:x});
            }.bind(this)
        });

         $.ajax({
            type:'get',
            url:'http://localhost:3000/home/homeProRt',
            success:function (x) {
                // console.log(x);
                this.setState({homeProRt:x});
            }.bind(this)
        });
         $.ajax({
            type:'get',
            url:'http://localhost:3000/home/homeHaveLeft',
            success:function (x) {
                // console.log(x);
                this.setState({homeHaveLeft:x});
            }.bind(this)
        });
         $.ajax({
            type:'get',
            url:'http://localhost:3000/home/homeHaveRight',
            success:function (x) {
                // console.log(x);
                this.setState({homeHaveRight:x});
            }.bind(this)
        });

     $.ajax({
            type:'get',
            url:'http://localhost:3000/home/homeTeachers',
            success:function (x) {
                // console.log(x);
                this.setState({homeTeachers:x});
            }.bind(this)
        });
     $.ajax({
            type:'get',
            url:'http://localhost:3000/home/homeThsLeft',
            success:function (x) {
                // console.log(x);
                this.setState({homeThsLeft:x});
            }.bind(this)
        });

         $.ajax({
            type:'get',
            url:'http://localhost:3000/home/homeThsRight',
            success:function (x) {
                // console.log(x);
                this.setState({homeThsRight:x});
            }.bind(this)
        });

         $.ajax({
            type:'get',
            url:'http://localhost:3000/home/homeSayHello',
            success:function (x) {
                // console.log(x);
                this.setState({homeSayHello:x});
            }.bind(this)
        });
         $.ajax({
            type:'get',
            url:'http://localhost:3000/home/homeSayHellos',
            success:function (x) {
                // console.log(x);
                this.setState({homeSayHellos:x});
            }.bind(this)
        });
           $.ajax({
            type:'get',
            url:'http://localhost:3000/home/homeNews',
            success:function (x) {
                // console.log(x);
                this.setState({homeNews:x});
            }.bind(this)
        });

               $.ajax({
            type:'get',
            url:'http://localhost:3000/home/homeNewsList',
            success:function (x) {
                // console.log(x);
                this.setState({homeNewsList:x});
            }.bind(this)
        });



    }
   render(){
    return (<div>
         {/***************************** banner轮播*********************** */}
         <div id="Banner">
         {this.state.hometxt  .map((item,x)=>{
            // console.log(item);
            return  <div dangerouslySetInnerHTML={{__html:item.message}} key={x}/>
         })}
         <Carousel>
         {this.state.hometxt.map((item,x)=>{
              return <Carousel. Item key={x}>
                        <img alt="加载失败" src={item.url} className="ly_img"/>
                    </Carousel. Item>
         })}
         </Carousel>
        </div>


            {/* ******************学校概况 *************** */}
             <div className="profile">
              {this.state.homePro.map((item,x)=>{
                  return <div className="pro_head" dangerouslySetInnerHTML={{__html:item.title}} key={x}></div>
            })}

            <div className="pro_foot">
            {this.state.homePro.map((item,x)=>{
                  return <div className="pro_foot_left" dangerouslySetInnerHTML={{__html:item.conLeft}} key={x}></div>
            })}

            <div className="pro_foot_right">
               <ul>
                {this.state.homeProRt.map((item,x)=>{
                    // console.log(item.conRight);
                    return <li key={x}>
                       <img alt="加载失败" src={item.picRight}/><span>{item.conRight}</span></li>
                 })}
              </ul>
            </div> </div>
            </div>


            {/*******************我们值得你拥有 ***********/}
            <div className="women">
            <div className="women_one">
             {this.state.homeHaveLeft.map((item,x)=>{
                  return <div dangerouslySetInnerHTML={{__html:item.youhave}} key={x}>
                  </div>
            })}
              <p><Link to="/profile">查看更多</Link></p>
            </div>
            <div className="women_two">
             {this.state.homeHaveRight.map((item,x)=>{
                  return <div key={x}>
                  <p  dangerouslySetInnerHTML={{__html:item.num}}></p>
                  <p  dangerouslySetInnerHTML={{__html:item.message}}></p>
                  </div>
            })}
            </div>
            </div>


            {/******************名师讲堂 *****************88*/}
         {this.state.homeTeachers.map((item,x)=>{
             return <div  className="mingshi_o" dangerouslySetInnerHTML={{__html:item.title}} key={x}></div>
         })}
         <div className="ms">
         <div className="ms_left">
            {this.state.homeThsLeft.map((item,x)=>{
             return <div  className="hd" key={x}>
             <p className="ms_p1">
             <img alt="加载失败" src={item.headpic}/>
             <span dangerouslySetInnerHTML={{__html:item.headmsg}} />
             </p>
             <p dangerouslySetInnerHTML={{__html:item.headmsgs}}></p>
             <p className="ms_star">
                    <img alt="加载失败" src="http://localhost:3000/images/1501411462530.png" />5 课堂
                   <img alt="加载失败" src="http://localhost:3000/images/1501404619118.png"/></p>
             </div>
         })}
         </div>
         <ul className="ms_right">
         {this.state.homeThsRight.map((item,x)=>{
             return <li key={x}>
                    <img alt="加载失败" src={item.pic}/>
                  <h1>{item.title_o}</h1>
                  <h2>{item.title_t}</h2>
                  <p className="ms_star">
                      <img alt="加载失败" src="http://localhost:3000/images/1501411462530.png" />  5&nbsp;课堂
                    <img alt="加载失败" src="http://localhost:3000/images/1501404619118.png"/>   </p>
                    </li>
           })}
         </ul>
         </div>


        {/************************  认识我们的老师  **********************/}
         <div className="renshi">
            <div className="renshi_one">
                <div className="renshi_one_o">
                 {this.state.homeSayHello.map((item,x)=>{
                  return <div dangerouslySetInnerHTML={{__html:item.con}} key={x}>
                  </div>
                   })}
                    <p><Link to="/team">查看更多</Link></p>
                </div>

                 {this.state.homeSayHellos.map((item,x)=>{
                  return <div className="renshi_one_end" key={x}>
                  <img alt="加载失败" className="renshi_one_t" src={item.photo}/>
                            <p>{item.who}</p>
                            <p>{item.job}</p>
                    </div> })}
            </div>
        </div>


          {/********************  校内新闻 ***********************/}
          <div className="schoolNews">
            {this.state.homeNews.map((item,x)=>{
                  return <div className="xinwen" dangerouslySetInnerHTML={{__html:item.title}} key={x} />
            })}

             <div className="xinwen_bottom">
             {this.state.homeNews.map((item,x)=>{
                  return <img alt="加载失败" className="xinwen_bottom_left" src={item.leftpic}  key={x} />
            })}

               <div className="xinwen_bottom_right">
               {this.state.homeNewsList.map((item,x)=>{
                  return <div className="xinwen_bottom_right_one" key={x}>
                                <img src={item.pic}/>
                                 <div className="bbr">
                                    <h2>{item.title}<span>{item.timer}</span></h2>
                                    <p>{item.msg}</p>
                                </div>

                        </div>
            })}

                </div>
            </div>


        </div>
    </div>)
}
};
export default Home;







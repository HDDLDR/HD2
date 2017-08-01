import React,{Component} from 'react';
import {Carousel} from 'react-bootstrap';
import $ from 'jquery';
import Home from './home';
import Profile from './profile';
import Team from './team';
import Talent from './talent';
import Contact from './contact';
import Research from './research';
import SchoolNews from './news';
import './index.css';
import './HF.css';

import {
        BrowserRouter as Router,
        Route,
        Link
    } from 'react-router-dom';

class App extends Component{
   constructor(){
            super()
            this.state={
              nav:[]
            }
   }
   componentDidMount(){
        $.ajax({
            type:'get',
            url:'http://localhost:3000/foot/footer',
            success:function (x) {
                // console.log(x);
                this.setState({nav:Array.of(x)});
            }.bind(this)
        });
    }
  render() {
      return (
          <div>
              <Router>
                  <div>
                      <header className="nav">
                          <h2><Link to="/">School <span>Design</span></Link></h2>
                            <ul>
                              <li><Link to="/">首页</Link></li>
                              <li className="gk"><Link to="/profile">学校概况
                              <Link to="/contact" id="contact">联系我们</Link></Link></li>
                              <li><Link to="/team">师资队伍</Link></li>
                              <li><Link to="/talent">人才培养</Link></li>
                              <li><Link to="/research">学术研究</Link></li>
                              <li><Link to="/news">校内新闻</Link></li>
                          </ul>
                      </header>
                      <Route exact path="/" component={Home}/>
                      <Route path="/profile" component={Profile}/>
                      <Route path="/team" component={Team}/>
                      <Route path="/contact" component={Contact}/>
                      <Route path="/talent" component={Talent}/>
                      <Route path="/research" component={Research}/>
                      <Route path="/news" component={SchoolNews}/>
                  </div>
              </Router>
              <footer className="foot">
                {this.state.nav.map(function(item,x){
                  return <div dangerouslySetInnerHTML={{__html:item[x].content}} key={x}/>
                   })}
              </footer>
          </div>)
  }
}



export default App;


//VS
              // <footer className="foot">
              //     <h1 className="foot_title">EDUCATION DESIGN</h1>
              //     <div className="foot_con">
              //         <div className="fo">
              //             <h3>关于我们</h3>
              //             <p>戏剧学院是中国培养演艺专门人才的高等艺
              //                 术院校，前身是实验戏剧学校。<br/>
              //                 地址：XXX省XXX市XXX县XXX路XXX号<br/>
              //                 邮箱：contact@fkadjkhsf.co<br/>
              //                 电话：020-000000 400-000000</p>
              //         </div>
              //         <div className="fo fo_two">
              //             <h3>最近课程</h3>
              //             <p>
              //                 > 不生娑婆——剧评《婆娑》<br/>
              //                 2016.9.30<br/>
              //                 > 《繁花》遇上王家卫<br/>
              //                 2016.9.30<br/>
              //                 > 欲戴王冠，必承其重<br/>
              //                 2016.10.08
              //             </p>
              //         </div>
              //         <div className="fo fo_three">
              //             <h3>校长寄语</h3>
              //             <p>培养人才的目标，我认为，首先应该注重人格的陶冶，使每个戏剧青年都有健全的人格，是一个堂堂正正的“人”，爱民族，爱国家，辨是非，有情操的人。
              //                 ——校长</p>
              //         </div>
              //         <div className="fo">
              //             <h3>优秀教师</h3>
              //             <p className="teachlist">
              //                 <img src="img/teacher1.jpg" alt="图加载失败"/>
              //                 <img src="img/teacher2.jpg" alt="图加载失败"/>
              //                 <img src="img/teacher3.jpg" alt="图加载失败"/>
              //                 <img src="img/teacher4.jpg" alt="图加载失败"/>
              //                 <img src="img/teacher5.jpg" alt="图加载失败"/>
              //                 <img src="img/teacher6.jpg" alt="图加载失败"/>
              //             </p>
              //         </div>
              //     </div>
              //     <div className="copy">
              //         <p>©2016 网站模板-学校 版权所有</p>
              //         <span>手机版</span>
              //     </div>
              // </footer>









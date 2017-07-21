import React from 'react';
import {Carousel} from 'react-bootstrap';
import Profile from './profile';
import TeamTab from './team';
import Talent from './talent';
import Contact from './contact';
import Research from './research';
import SchooolNews from './news';
import './HF.css';
import './home.css';
import './profile.css';
import './contact.css';
import './talent.css';
import './team.css';
import './research.css';
import './news.css';

import {
        BrowserRouter as Router,
        Route,
        Link
    } from 'react-router-dom';


const Page = () => (
    <div>
    <Router>
        <div>
        <header className="nav">
            <h2><Link to="/">School <span>Design</span></Link></h2>
                <ul>
                    <li><Link to="/">首页</Link></li>
                    <li className="gk"><Link to="/profile">学校概况
                     <Link to="/contact" id="contact">联系我们</Link>
                     </Link></li>
                    <li><Link to="/team">师资队伍</Link></li>
                    <li><Link to="/talent">人才培养</Link></li>
                    <li><Link to="/research">学术研究</Link></li>
                    <li><Link to="/news">校内新闻</Link></li>
            </ul></header>
            <Route exact path="/" component={Home}/>
            <Route path="/profile" component={Profile}/>
            <Route path="/team" component={TeamTab}/>
            <Route path="/contact" component={Contact}/>
            <Route path="/talent" component={Talent}/>
            <Route path="/research" component={Research}/>
            <Route path="/news" component={SchooolNews}/>
    </div>
    </Router>
    <footer className="foot">
            <h1 className="foot_title">EDUCATION DESIGN</h1>
            <div className="foot_con">
                <div className="fo">
                    <h3>关于我们</h3>
                    <p>戏剧学院是中国培养演艺专门人才的高等艺

                        术院校，前身是实验戏剧学校。<br/>

                        地址：XXX省XXX市XXX县XXX路XXX号<br/>

                        邮箱：contact@fkadjkhsf.co<br/>

                        电话：020-000000 400-000000</p>
                </div>
                <div className="fo fo_two">
                    <h3>最近课程</h3>
                    <p>
                        > 不生娑婆——剧评《婆娑》<br/>
                        2016.9.30<br/>
                        > 《繁花》遇上王家卫<br/>
                        2016.9.30<br/>
                        > 欲戴王冠，必承其重<br/>
                        2016.10.08
                    </p>
                </div>
                <div className="fo fo_three">
                    <h3>校长寄语</h3>
                    <p>培养人才的目标，我认为，首先应该注重人格的陶冶，使每个戏剧青年都有健全的人格，是一个堂堂正正的“人”，爱民族，爱国家，辨是非，有情操的人。
                        ——校长</p>
                </div>
                <div className="fo">
                    <h3>优秀教师</h3>
                    <p className="teachlist">
                        <img src="img/teacher1.jpg" alt="图加载失败"/>
                        <img src="img/teacher2.jpg" alt="图加载失败"/>
                        <img src="img/teacher3.jpg" alt="图加载失败"/>
                        <img src="img/teacher4.jpg" alt="图加载失败"/>
                        <img src="img/teacher5.jpg" alt="图加载失败"/>
                        <img src="img/teacher6.jpg" alt="图加载失败"/>
                    </p>
                </div>
            </div>
            <div className="copy">
                <p>©2016 网站模板-学校 版权所有</p>
                <span>手机版</span>
            </div>
        </footer>
    </div>
);


//首页
const Home = () => (
    <div>
        {/* banner轮播 */}
        <div id="Banner">
            <Carousel>
                <Carousel. Item>
                    <img src="img/pc2.jpg" alt="加载失败" className="ly_img"/>
                </Carousel. Item>
                <Carousel. Item>
                    <img src="img/pc1.jpg" alt="加载失败" className="ly_img"/>
                </Carousel. Item>
                <Carousel. Item>
                    <img src="img/pc3.jpg" alt="加载失败" className="ly_img"/>
                </Carousel. Item>
            </Carousel>

        </div>
          {/*学校概况*/}
          <div className="gaikuang">
              <div className="gaikuang1 clear">
                  <h2>学校概况</h2>
                  <p>——   DETAILS OF THE INSTITUTE   ——</p>
              </div>
              <div className="gaikuang2 clear ">
                  <div className="gaikaung2-left">
                        <p>培养人才的目标，我认为，首先应该注重人格的陶冶，使每个戏剧青年都有健全的人格，
                        是一个堂堂正正的“人”，爱民族，爱国家，辨是非，有情操的人。                              
                        </p>
                        <span>——校长</span>
        
                  </div>
                  <div className="gaikaung2-right">
                        <ul>
                              <li className="li_1"></li>
                              <li className="li_2"></li>
                              <li className="li_3"></li>
                              <li className="li_4"></li>
                              <li></li>
                              <li></li>
                              <li></li>
                              <li></li>
                        </ul>
                  </div>
              </div>
          </div>
        {/*我们值得你拥有*/}
        <div className="women">
            <div className="women_one">
                <p>我们值得你拥有 <span>WE DESERVE YOU</span></p>
                <p>戏剧学院是中国培养演艺专门人才的高等艺术院校，前身是实验戏剧学校，
                    1945年12月1日由著名教育家顾毓琇与著名戏剧家李健吾、顾仲彝、黄佐临等创立
                    熊佛西先生为首任院长。1949年10月，上海市立实验戏剧学校改名为上海市立戏剧专科学校。
                    1952年全国高等院校实行院系调整。</p>
                <p><Link to="/profile">查看更多</Link></p>
            </div>
            <div className="women_two">
                <div className="women_two-o">
                    <p className="women_p">99.8%</p>
                    <p className="women_por">就业率</p>
                </div>
                <div>
                    <p className="women_p">50869</p>
                    <p className="women_por">在校生</p>
                </div>
                <div>
                    <p className="women_p">3501</p>
                    <p className="women_por">在校老师</p>
                </div>
                <div className="women_two-t">
                    <p className="women_p">126</p>
                    <p className="women_por">本科专业</p>
                </div>
            </div>
        </div>
        {/*名师讲堂*/}
        <div className="mingshi_o">
            <h2>名师讲堂</h2>
            <p>——   AUDITORIUM   ——</p>
        </div>
        {/*名师讲堂下图*/}
        <div className="con">

        </div>
        {/*认识我们的老师*/}
        <div className="renshi">
            <div className="renshi_one">
                <div className="renshi_one_o">
                    <p>认识我们的老师 <span> MEET OUR TEACHER</span></p>
                    <p>戏剧学院是中国培养演艺专门人才的高等艺术院校，前身是实验戏剧学校，
                        1945年12月1日由著名教育家顾毓琇与著名戏剧家李健吾、顾仲彝、
                        黄佐临等创立熊佛西先生为首任院长。1949年10月，上海市立实验戏剧学校改名为上海市立戏剧专科学校。
                        1952年全国高等院校实行院系调整。</p>
                    <p><Link to="/team">查看更多</Link></p>
                </div>
                <div className="renshi_one_end">
                    <div className="renshi_one_t"></div>
                    <p>马兰</p>
                    <p>在职教授</p>
                </div>
                <div className="renshi_one_end">
                    <div className="renshi_one_t"></div>
                    <p>王立军</p>
                    <p>名誉博士</p>
                </div>
                <div className="renshi_one_end">
                    <div className="renshi_one_t"></div>
                    <p>厉振林</p>
                    <p>在职教授</p>
                </div>
            </div>
        </div>
        {/*校内新闻*/}
        <div className="xinwen">
            <h2>校内新闻</h2>
            <p>——   ON CAMPUS NEWS   ——</p>
        </div>
        {/*校内新闻下*/}
        <div className="xinwen_bottom">
            <div className="xinwen_bottom_left"></div>
            <div className="xinwen_bottom_right" >
                <div className="xinwen_bottom_right_one" ></div>
                <div className="xinwen_bottom_right_one" ></div>
                <div className="xinwen_bottom_right_one" ></div>
            </div>
        </div>
    </div>
);

export default Page;
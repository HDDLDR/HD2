import React from 'react';
import './HF.css';
import {Carousel} from 'react-bootstrap';
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
            <Route path="/profile" component={profile}/>
            <Route path="/contact" component={contact}/>
            <Route path="/team" component={TeamTab}/>
            <Route path="/contact" component={contact}/>
            <Route path="/talent" component={talent}/>
            <Route path="/research" component={research}/>
            <Route path="/news" component={SchooolNews}/>
    </div>
    </Router>
    <MeFooter/>
    </div>
);

//联系我们
const contact= () => (
    <div className="contact">
        <div className="pro_head">
            <h2>联系我们</h2>
            <p>——    CONTACT  US    ——</p>
        </div>
        <div className="message_type">
            <section>
                <h1></h1>
                <h2>555</h2>
                <p>XXXXXXX</p>
            </section>
            <section>
                <h1></h1>
                <h2>555</h2>
                <p>XXXXXXX</p>
            </section>
            <section>
                <h1></h1>
                <h2>555</h2>
                <p>XXXXXXX</p>
            </section>
        </div>
        <div className="message_board">
            <div>
                <p className="message_tip">kkk</p>
                <label>发表您的留言：</label>
                <section className="person_msg">
                    <p>
                        <label for="uname">姓名: </label>
                        <input type="text" id="uname"/><span>*</span>
                    </p>
                    <p>
                        <label for="Email">邮箱: </label>
                        <input type="email" id="Email"/>
                    </p>
                    <p>
                        <label for="phone">电话: </label>
                        <input type="text" id="phone"/>
                    </p>
                </section>
                <section className="message_con">
                    <label for="messages">内容:</label>
                    <input stype="textarea" id="messages" placeholder="留言需要审核"/>
                </section>
                <button>提交留言</button>

            </div>
        </div>
    </div>
)


//联系我们
const contact= () => (
    <div className="contact">
        <div className="pro_head">
            <h2>联系我们</h2>
            <p>——    CONTACT  US    ——</p>
        </div>
        <div className="message_type">
            <section>
                <h1></h1>
                <h2>555</h2>
                <p>XXXXXXX</p>
            </section>
            <section>
                <h1></h1>
                <h2>555</h2>
                <p>XXXXXXX</p>
            </section>
            <section>
                <h1></h1>
                <h2>555</h2>
                <p>XXXXXXX</p>
            </section>
        </div>
        <div className="message_board">
            <div>
                <p className="message_tip">kkk</p>
                <label>发表您的留言：</label>
                <section className="person_msg">
                    <p>
                        <label for="uname">姓名: </label>
                        <input type="text" id="uname"/><span>*</span>
                    </p>
                    <p>
                        <label for="Email">邮箱: </label>
                        <input type="email" id="Email"/>
                    </p>
                    <p>
                        <label for="phone">电话: </label>
                        <input type="text" id="phone"/>
                    </p>
                </section>
                <section className="message_con">
                    <label for="messages">内容:</label>
                    <input stype="textarea" id="messages" placeholder="留言需要审核"/>
                </section>
                <button>提交留言</button></div>
        </div>
    </div>
)


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

//学校概况
const profile = () => (
    <div id="Profile">
        <div className="banner"></div>
        {/*学校概况*/}
        <div className="profile">
            <div className="pro_head">
                <h2>学校概况</h2>
                <p>——   DETAILS OF THE INSTITUTE   ——</p>
            </div>
            <div className="pro_foot">
                <div className="pro_foot_left">
                    <p>培养人才的目标，我认为，首先应该注重人格的陶冶，使每个戏剧青年都有健全的人格，
                        是一个堂堂正正的“人”，爱民族，爱国家，辨是非，有情操的人。
                        <span>——校长</span></p>
                </div>
                 <ul className="pro_foot_right">
                        <li></li>
                        <li></li>
                        <li></li>
                        <li className="li_f"></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li className="li_f"></li>
                </ul>
            </div>
        </div>
        {/* 团结勤奋求实创新 */}
        <div className="speak">
            <h1>&#x3000;团结&#x3000;勤奋&#x3000;求实&#x3000;创新&#x3000;</h1>
        </div>
        <div className="leader">
            <div className="xinwen">
                <h2>现任领导</h2>
                <p>——   THE PRESENT LEADER   ——</p>
            </div>
            <div className="leaderList">
                <section>
                    <h3></h3>
                    <p>党书记</p>
                    <p>宫宝荣GONGBAOROGN</p>
                </section>
                <section>
                    <h3></h3><p>党委副书记</p><p>何超HECHAO</p>
                </section>
                <section>
                    <h3></h3><p>校长</p><p>梁荣LIANGRONG</p>
                </section>
                <section className="ss">
                    <h3></h3><p>副校长</p><p>张敏ZHANGMIN</p>
                </section>
                <section>
                    <h3></h3>
                    <p>副校长</p>
                    <p>易荣YIRONG</p>
                </section>
                <section>
                    <h3></h3>
                    <p>副校长</p>
                    <p>何佳HEJIA</p>
                </section>
                <section>
                    <h3></h3>
                    <p>副校长 </p>
                    <p>吕瑞军LVRUIJUN</p>
                </section>
                <section  className="ss">
                    <h3></h3>
                    <p>总会计师</p>
                    <p>蒋玉JIANGYU</p>
                </section>
            </div>
        </div>
        {/* 学校相关数据 */}
        <div className="datas">
            <div className="data">
                <h1>学校相关数据</h1>
                <span className="descr">SCHOOL RELATED DATA</span><br/>
                <span>校本部专任教师 3501人</span><br/>
                >正高级 1283人<br/>
                >副高级 1165人<br/>
                <span>全日制学生 50869人</span><br/>
                >普通本科生 32660人<br/>
                >硕士研究生 12871人<br/>
                >博士研究生 5338人<br/>
               <span>本科专业 126个</span><br/>
               <span>博士学位授权点（一级学科） 43个</span><br/>
               <span>硕士学位授权点（一级学科） 53个</span><br/>
               <span>专业学位类别 28种</span><br/>
               <span>博士后科研流动站 41个</span><br/>
               <span>校园 5个</span><br/>
                >广州校区（含南、北、东三个校园） 3个<br/>
                >珠海校区 1个<br/>
                >深圳校区 1个<br/>
            </div>
        </div>

        {/*校园环境*/}
        <div className="school">
            <div className="xinwen">
                <h2>校园环境</h2>
                <p>——     CAMPUS ENVIRONMENT     ——</p>
            </div>
            <div className="mySchool">
                <img src="img/school.jpg" alt="加载失败" className="sc_pic1"/>
                <img src="img/schoo2.jpg" alt="加载失败" className="sc_pic2"/>
                <img src="img/schoo3.jpg" alt="加载失败" className="sc_pic3"/>
                <img src="img/schoo4.jpg" alt="加载失败" className="sc_pic4"/>
                <img src="img/schoo5.jpg" alt="加载失败" className="sc_pic5"/>
                <img src="img/schoo5.jpg" alt="加载失败" className="sc_pic5"/>
            </div>
        </div>
    </div>
);

//教师团队
const TeamTab=React.createClass({
    getInitialState(){
        return{
            arr:[
                {name:"在职教师",
                    con:[
                        {pic:'img/ZZteacher1.jpg',message:'111'},
                        {pic:'img/ZZteacher2.jpg',message:'222'},
                        {pic:'img/ZZteacher3.jpg',message:'333'},
                        {pic:'img/ZZteach er4.jpg',message:'444'},
                        {pic:'img/ZZteacher5.jpg',message:'555'},
                        {pic:'img/ZZteacher5.jpg',message:'666'}
                    ]
                },
                {name:"名誉博士",
                    con:[
                        {pic:'img/ZZteacher1.jpg',message:'kkk111'},
                        {pic:'img/ZZteacher2.jpg',message:'kkk222'},
                        {pic:'img/ZZteacher3.jpg',message:'kkk333'},
                        {pic:'img/ZZteach er4.jpg',message:'kkk444'},
                        {pic:'img/ZZteacher5.jpg',message:'kkk555'},
                        {pic:'img/ZZteacher5.jpg',message:'kkk666'}
                    ]
                },
                {name:"东方学者",
                    con:[
                        {pic:'img/ZZteacher1.jpg',message:'东方111'},
                        {pic:'img/ZZteacher2.jpg',message:'东方222'},
                        {pic:'img/ZZteacher3.jpg',message:'东方333'},
                        {pic:'img/ZZteach er4.jpg',message:'东方444'},
                        {pic:'img/ZZteacher5.jpg',message:'东方555'},
                        {pic:'img/ZZteacher5.jpg',message:'东方666'}
                    ]
                },
                {name:"千人计划",
                    con:[
                        {pic:'img/ZZteacher1.jpg',message:'千人111'},
                        {pic:'img/ZZteacher2.jpg',message:'千人222'},
                        {pic:'img/ZZteacher3.jpg',message:'千人333'},
                        {pic:'img/ZZteach er4.jpg',message:'千人444'},
                        {pic:'img/ZZteacher5.jpg',message:'千人555'},
                        {pic:'img/ZZteacher5.jpg',message:'千人666'}
                    ]
                },
                {name:"名誉教授",
                    con:[
                        {pic:'img/ZZteacher1.jpg',message:'名誉111'},
                        {pic:'img/ZZteacher2.jpg',message:'名誉222'},
                        {pic:'img/ZZteacher3.jpg',message:'名誉333'},
                        {pic:'img/ZZteach er4.jpg',message:'名誉444'},
                        {pic:'img/ZZteacher5.jpg',message:'名誉555'},
                        {pic:'img/ZZteacher5.jpg',message:'名誉666'}
                    ]
                }
            ],
            index:0,
        }
    },
    handleMouseMove(key){
        this.setState({index:key});
    },
    render(){
        let arrs =this.state.arr;
        let n =this.state.index;
        let con=arrs[n].con;
//                console.log(arrs);
        return  <div>
            <div id="team_banner"></div>
            <div id="TeamTab">
                <ul className="teachers_type">
                    {arrs.map((item,k)=>{
                        return <li className={n==k?'on':""}
                                   index={k}
                                   onMouseOver={this.handleMouseMove.bind(this,k)}
                        >{item.name}</li>

                    })
                    }</ul>
                <div className="teacher_msg">
                    {con.map((x,k)=>{
                        return <div className="every_teacher">
                            <img src={x.pic} alt="加载失败"/>
                            <p>{x.message}</p>
                        </div>
                    })}
                </div>
            </div>
        </div>
    }
});




//人才培养
const talent = () => (
    <div>
        <div className="rencai_picker"></div>
        <div className="rencai_text">
            <p className="rencai_text_one">过去30年来，一直致力于推动中国的高等教育改革。复旦是全国首批建立研究生院的学校，
                最早实施完全学分制改革、通识教育改革、大类培养和自主招生改革，率先成立复旦学院（本科生院），
                率先启动通识教育课程体系和住宿书院建设。</p>
            <p>学校关注每一位学生的发展，强调复旦精神传统的熏陶，为大家提供良好的发展空间、
                多样的选择机会和自由的学习环境。目前，全校共有全职专任教师2700人；本科生1.41万人，
                研究生1.48万人，其中包括来自120个国家的近3000名学历留学生。全校每年提供5650门次的本科课程，
                2300多人次的中长期出国交流名额，超过人民币1亿元的奖助学金以及完备的助学服务。学生有充裕的机会，
                选择申请本科生望道计划、研究生创新计划各个平台的资源和服务，选择参与310多个社团、
                数以千计的社会实践实习和志愿服务项目。复旦希望每一位在校学生，通过系统学习、学术训练、
                自由探索和丰富体验，坚定自己的兴趣、志向和生涯规划。</p>
        </div>
        <div className="RC_jy">
        <div className="rencai_jiaoyu">
            <div className="rencai_jiaoyu_tu">本科教育</div>
            <p>是以通识教育为基础的宽口径专业教育。复旦学院（本科生院）负责通识教育核心课程建设、书院建设，
                领导各院系的专业教育，统筹管理全校本科教育教学工作。详情参见：本科生招生网、本科生奖助体系.</p>
        </div>
        <div className="rencai_jiaoyu">
            <div className="rencai_jiaoyu_tu">研究生教育</div>
            <p>强调科研创新能力与高层次专门人才培养并重。复旦大学研究生院负责总体规划、统筹管理全校的学位与
                研究生教育工作。各院系和科研单位是实施研究生教育的主体机构。详情参见：研究生招生网、研究生奖助体系。</p>
        </div>
        <div className="rencai_jiaoyu">
            <div className="rencai_jiaoyu_tu">留学生教育</div>
            <p>高质量的留学生教育，是复旦实施国际化战略的重要内容。外国留学生工作处负责攻读学位、进修、
                交流等各类留学生从招生到离校的全过程管理协调工作。对外汉语教学和推广，由国际文化交流学院承担。
                详情参见：外国留学生招生网、外国留学生奖助体系。</p>
        </div>
        <div className="rencai_jiaoyu">
            <div className="rencai_jiaoyu_tu">继续教育</div>
            <p>高质量的留学生教育，是复旦实施国际化战略的重要内容。外国留学生工作处负责攻读学位、进修、
                交流等各类留学生从招生到离校的全过程管理协调工作。对外汉语教学和推广，由国际文化交流学院承担。
                详情参见：外国留学生招生网、外国留学生奖助体系。</p>
        </div>
        </div>
    </div>
);

//学术研究
const research = () => (
    <div>
        <div className="xueshu_banner"></div>
        <div className="xueshu_end">
            <div className="xueshu_end_one"></div>
            <p className="xueshu_end_two">现有一级学科国家重点学科11个，二级学科国家重点学科19个，国家重点
                学科覆盖的二级学科博士点占全校博士点总数的61.8%；有15个学科领域进入ESI全球前1%，数量位居全国第二，
                理工科有3个学科进入了世界前100名，临床医学也初步具备冲击世界一流学科的实力。学校有一大批高水准的科研
                机构。全校有科研机构410个，其中国家重点实验室5个，省部级重点实验室32个、省部级工程研究中心6个，教育部
                人文社会科学重点研究基地8个。</p>
        </div>
        <div className="XS_yj">
        <div className="xueshu_text">
            <div className="xueshu_text_o">学科建设</div>
            <p>学科建设的中期目标是，所有在建学科进入国内前列，一批学科达到国际先进水平，学科国际影响力显著增强。
                发展规划处负责学科规划、重点学科及学科项目建设的遴选、评估检查和验收。</p>
        </div>
        <div className="xueshu_text">
            <div className="xueshu_text_o">人文与社会科学</div>
            <p>人文与社会科学研究，以文化传承创新为己任，以“国家建设”为核心主题，以中国传统文化和中国问题研究为
                重心加强国际学术对话与合作。文科科研处是负责全校人文社会科学科研管理的综合性职能部门。</p>
        </div>
        <div className="xueshu_text">
            <div className="xueshu_text_o">自然科学与工程</div>
            <p>自然科学与工程研究，积极面向国际学术前沿，面向国家重大需求和重要问题，注重重大的原创科技成果和质
                量导向，注重团队的整体学术表现，注重学术成果综合评价。科技处是学校科技管理工作的职能部门。</p>
        </div>
        <div className="xueshu_text">
            <div className="xueshu_text_o">医学</div>
            <p>医学科学长期处于中国的领军位置，传统优良、基础雄厚、学科齐整。上海医学院作为学校党政的派出
                机构，根据学校授权，管理医科各学院、研究院所和附属医院的人才培养、科学研究、学科建设、
                对外交流、发展规划。</p>
        </div>
        </div>
    </div>
);

//校内新闻
const SchooolNews=React.createClass({
    getInitialState(){
        return{
            arr:[
                {name:"校园新闻",
                    con:[
                        {title:'深入思考 理性表述',
                            textmsg:'利用假期这段比较长的时间进行教育教学理论学习，对自己教学实践的反思、梳理，提高自己的教科研能力, 已经成为苏外教师的必修课。正如上海市优秀校长郑杰所说：让老师写文章，就是让老师思考...'},
                        {title:'计算机软件技术就业前景',
                            textmsg:'以软件企业人才需求为导向，面向国民经济信息化建设和发展的需要，培养掌握扎实的计算机基础理论知识和较宽的工程专业知识、具有创新能力、有较强的工程实践能力和团队协作能力、德智体全面发展的有国际竞争力...'},
                        {title:'国际名校赛艇挑战赛我校首次亮...',
                            textmsg:'此外，国际名校赛艇挑战赛上届冠军阿姆斯特丹大学以2分12秒59获得亚军，成都新津站冠军帕维亚大学以2分13秒56收获季军。参加男子决赛的国内外高校还有：美国耶鲁大学、英国伦敦大学、德国麦克米迪亚...'},
                        {title:'我院被全国创新教育活动组委会，誉为”全国创新教育实验基底',
                            textmsg:'校园心理节是我校心理健康教育的一项传统活动，通过形式多样的途径，为孩子们创设丰富多彩的心理教育文化。本学期的“缤纷心理，你我共享”心理节系列活动在5月份陆续开展...'}
                    ]
                },
                {name:"重要公告",
                    con:[
                        {title:'理性表述',
                            textmsg:'对自己教学实践的反思、梳理，提高自己的教科研能力, 已经成为苏外教师的必修课。正如上海市优秀校长郑杰所说：让老师写文章，就是让老师思考...'},
                        {title:'件技术就业前景',
                            textmsg:'扎实的计算机基础理论知识和较宽的工程专业知识、具有创新能力、有较强的工程实践能力和团队协作能力、德智体全面发展的有国际竞争力...'},
                        {title:'我校首次亮...',
                            textmsg:'姆斯特丹大学以2分12秒59获得亚军，成都新津站冠军帕维亚大学以2分13秒56收获季军。参加男子决赛的国内外高校还有：美国耶鲁大学、英国伦敦大学、德国麦克米迪亚...'},
                        {title:'誉为”全国创新教育实验基底',
                            textmsg:'通过形式多样的途径，为孩子们创设丰富多彩的心理教育文化。本学期的“缤纷心理，你我共享”心理节系列活动在5月份陆续开展...'}
                    ]
                },
                {name:"学术报告",
                    con:[
                        {title:'述',
                            textmsg:'利 已经成为苏外教师的必修课。正如上海市优秀校长郑杰所说：让老师写文章，就是让老师思考...'},
                        {title:'就业前景',
                            textmsg:'专业知识、具有创新能力、有较强的工程实践能力和团队协作能力、德智体全面发展的有国际竞争力...'},
                        {title:'战赛我校首次亮...',
                            textmsg:'新津站冠军帕维亚大学以2分13秒56收获季军。参加男子决赛的国内外高校还有：美国耶鲁大学、英国伦敦大学、德国麦克米迪亚...'},
                        {title:'誉为”全国创新教育实验基底',
                            textmsg:'孩子们创设丰富多彩的心理教育文化。本学期的“缤纷心理，你我共享”心理节系列活动在5月份陆续开展...'}
                    ]
                }
            ],
            index:0,
        }
    },
    handleMouseMove(key){
        this.setState({index:key});
    },
    render(){
        let arrs =this.state.arr;
        let n =this.state.index;
        let con=arrs[n].con;
//                console.log(arrs);
        return  <div>
            <div id="team_banner"></div>
            <div id="NewsTab">
                <ul className="news_type">
                    {arrs.map((item,k)=>{
                        return <li className={n==k?'on':""}
                                   index={k}
                                   onMouseOver={this.handleMouseMove.bind(this,k)}
                        >{item.name}</li>
                    })
                    }</ul>
                <div className="news_con">
                    {con.map((x,k)=>{
                        return <div className="every_news">
                            <p className="_left"><span>28</span>
                                2017/03</p>
                            <div className="_right">
                                <a href="#">{x.title}</a>
                                <p>{x.textmsg}</p>
                            </div>
                        </div>
                    })}
                </div>
            </div>
        </div>
    }
});

//关于我们、版权
const MeFooter =() =>(
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
 );








// const Topics = ({ match }) => (
//     <div>
//         <h2>Topics</h2>
//         <ul>
//             <li>
//                 <Link to={`${match.url}/rendering`}>
//                     Rendering with React
//                 </Link>
//             </li>
//             <li>
//                 <Link to={`${match.url}/components`}>
//                     Components
//                 </Link>
//             </li>
//             <li>
//                 <Link to={`${match.url}/props-v-state`}>
//                     Props v. State
//                 </Link>
//             </li>
//         </ul>
//
//         <Route path={`${match.url}/:topicId`} component={Topic}/>
//         <Route exact path={match.url} render={() => (
//             <h3>Please select a topic.</h3>
//         )}/>
//     </div>
// )
//
// const Topic = ({ match }) => (
//     <div>
//         <h3>{match.params.topicId}</h3>
//     </div>
// )

export default Page;
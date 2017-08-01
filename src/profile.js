import React,{Component} from 'react';
import './profile.css';
import $ from 'jquery';





//学校概况
class Profile extends Component {
   constructor(){
            super()
            this.state={
                pro:[]
            }
   }
   componentDidMount(){
        $.ajax({
            type:'get',
            url:'http://localhost:3000/profile/pro',
            success:function (x) {
                console.log(x);
                this.setState({pro:Array.of(x)});
            }.bind(this)
        });
    }
   render(){
    return (
    <div id="Profile">
          {this.state.pro.map(function(item,x){
             return <div dangerouslySetInnerHTML={{__html:item[x].content}} key={x}/>
          })}
    </div>)
     }
}

export default Profile;

// VS
        // <div className="banner"></div>
        // {/*学校概况*/}
        // <div className="profile">
        //     <div className="pro_head">
        //         <h2>学校概况</h2>
        //         <p>——   DETAILS OF THE INSTITUTE   ——</p>
        //     </div>
        //     <div className="pro_foot">
        //         <div className="pro_foot_left">
        //             <p>培养人才的目标，我认为，首先应该注重人格的陶冶，使每个戏剧青年都有健全的人格，
        //                 是一个堂堂正正的“人”，爱民族，爱国家，辨是非，有情操的人。
        //                 <span>——校长</span></p>
        //         </div>
        //          <ul className="pro_foot_right">
        //                 <li></li>
        //                 <li></li>
        //                 <li></li>
        //                 <li className="li_f"></li>
        //                 <li></li>
        //                 <li></li>
        //                 <li></li>
        //                 <li className="li_f"></li>
        //         </ul>
        //     </div>
        // </div>
        // {/* 团结勤奋求实创新 */}
        // <div className="speak">
        //     <h1>&#x3000;团结&#x3000;勤奋&#x3000;求实&#x3000;创新&#x3000;</h1>
        // </div>
        // <div className="leader">
        //     <div className="xinwen">
        //         <h2>现任领导</h2>
        //         <p>——   THE PRESENT LEADER   ——</p>
        //     </div>
        //     <div className="leaderList">
        //         <section>
        //             <h3></h3>
        //             <p>党书记</p>
        //             <p>宫宝荣GONGBAOROGN</p>
        //         </section>
        //         <section>
        //             <h3></h3><p>党委副书记</p><p>何超HECHAO</p>
        //         </section>
        //         <section>
        //             <h3></h3><p>校长</p><p>梁荣LIANGRONG</p>
        //         </section>
        //         <section className="ss">
        //             <h3></h3><p>副校长</p><p>张敏ZHANGMIN</p>
        //         </section>
        //         <section>
        //             <h3></h3>
        //             <p>副校长</p>
        //             <p>易荣YIRONG</p>
        //         </section>
        //         <section>
        //             <h3></h3>
        //             <p>副校长</p>
        //             <p>何佳HEJIA</p>
        //         </section>
        //         <section>
        //             <h3></h3>
        //             <p>副校长 </p>
        //             <p>吕瑞军LVRUIJUN</p>
        //         </section>
        //         <section  className="ss">
        //             <h3></h3>
        //             <p>总会计师</p>
        //             <p>蒋玉JIANGYU</p>
        //         </section>
        //     </div>
        // </div>
        // {/* 学校相关数据 */}
        // <div className="datas">
        //     <div className="data">
        //         <h1>学校相关数据</h1>
        //         <span className="descr">SCHOOL RELATED DATA</span><br/>
        //         <span>校本部专任教师 3501人</span><br/>
        //         >正高级 1283人<br/>
        //         >副高级 1165人<br/>
        //         <span>全日制学生 50869人</span><br/>
        //         >普通本科生 32660人<br/>
        //         >硕士研究生 12871人<br/>
        //         >博士研究生 5338人<br/>
        //        <span>本科专业 126个</span><br/>
        //        <span>博士学位授权点（一级学科） 43个</span><br/>
        //        <span>硕士学位授权点（一级学科） 53个</span><br/>
        //        <span>专业学位类别 28种</span><br/>
        //        <span>博士后科研流动站 41个</span><br/>
        //        <span>校园 5个</span><br/>
        //         >广州校区（含南、北、东三个校园） 3个<br/>
        //         >珠海校区 1个<br/>
        //         >深圳校区 1个<br/>
        //     </div>
        // </div>

        // {/*校园环境*/}
        // <div className="school">
        //     <div className="xinwen">
        //         <h2>校园环境</h2>
        //         <p>——     CAMPUS ENVIRONMENT     ——</p>
        //     </div>
        //     <div className="mySchool">
        //         <img src="img/school.jpg" alt="加载失败" className="sc_pic1"/>
        //         <img src="img/schoo2.jpg" alt="加载失败" className="sc_pic2"/>
        //         <img src="img/schoo3.jpg" alt="加载失败" className="sc_pic3"/>
        //         <img src="img/schoo4.jpg" alt="加载失败" className="sc_pic4"/>
        //         <img src="img/schoo5.jpg" alt="加载失败" className="sc_pic5"/>
        //         <img src="img/schoo5.jpg" alt="加载失败" className="sc_pic5"/>
        //     </div>
        // </div>






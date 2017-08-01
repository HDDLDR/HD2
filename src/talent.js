import React,{Component } from 'react';
import './talent.css';
import $ from 'jquery';

//人才培养
class Talent extends Component {
    constructor(){
        super()
        this.state={
                talents:[]
        }
    }
    componentDidMount(){
        $.ajax({
            type:'get',
            url:'http://localhost:3000/talent/ttt',
            success:function (x) {
                // console.log(x);
                this.setState({talents:Array.of(x)});
            }.bind(this)
        });
    }
     // {this.state.talents.map(function(item,x){})}
    render() {
        {this.state.talents.map(function(item,x){
            console.log(item[x].content);
        })}
        return (<div>
            <div id="rencai_picker"></div>
           {this.state.talents.map(function(item,x){
            return <div dangerouslySetInnerHTML={{__html:item[x].content}} key={x}/>
             })}
        </div>)
    }
};

export default Talent;


// <div className="rencai_picker">一张图</div>
// <div className="rencai_text">
//     <p className="rencai_text_one">
// 过去30年来，一直致力于推动中国的高等教育改革。复旦是全国首批建立研究生院的学校，最早实施完全学分制改革、通识教育改革、大类培养和自主招生改革，率先成立复旦学院（本科生院），率先启动通识教育课程体系和住宿书院建设。</p>
//     <p>学校关注每一位学生的发展，强调复旦精神传统的熏陶，为大家提供良好的发展空间、多样的选择机会和自由的学习环境。目前，全校共有全职专任教师2700人；本科生1.41万人，研究生1.48万人，其中包括来自120个国家的近3000名学历留学生。全校每年提供5650门次的本科课程，2300多人次的中长期出国交流名额，超过人民币1亿元的奖助学金以及完备的助学服务。学生有充裕的机会，选择申请本科生望道计划、研究生创新计划各个平台的资源和服务，选择参与310多个社团、数以千计的社会实践实习和志愿服务项目。复旦希望每一位在校学生，通过系统学习、学术训练、自由探索和丰富体验，坚定自己的兴趣、志向和生涯规划。</p>
// </div>
// <div className = "rencai_jiaoyu">
//     <div className = "rencai_jiaoyu_tu" > 本科教育</div>
//      <p>是以通识教育为基础的宽口径专业教育。复旦学院（本科生院）负责通识教育核心课程建设、书院建设，领导各院系的专业教育，统筹管理全校本科教育教学工作。详情参见：本科生招生网、本科生奖助体系。</p >
// < /div>
// <div className="rencai_jiaoyu">
//          <div className="rencai_jiaoyu_tu">研究生教育</div>
//          <p>强调科研创新能力与高层次专门人才培养并重。复旦大学研究生院负责总体规划、统筹管理全校的学位与研究生教育工作。各院系和科研单位是实施研究生教育的主体机构。详情参见：研究生招生网、研究生奖助体系。</p>
// </div>
// <div className="rencai_jiaoyu">
//          <div className="rencai_jiaoyu_tu">留学生教育</div>
//          <p>高质量的留学生教育，是复旦实施国际化战略的重要内容。外国留学生工作处负责攻读学位、进修、交流等各类留学生从招生到离校的全过程管理协调工作。对外汉语教学和推广，由国际文化交流学院承担。详情参见：外国留学生招生网、外国留学生奖助体系。</p>
// </div>
// <div className="rencai_jiaoyu">
//          <div className="rencai_jiaoyu_tu">继续教育</div>
//          <p>高质量的留学生教育，是复旦实施国际化战略的重要内容。外国留学生工作处负责攻读学位、进修、交流等各类留学生从招生到离校的全过程管理协调工作。对外汉语教学和推广，由国际文化交流学院承担。详情参见：外国留学生招生网、外国留学生奖助体系。</p>
// </div>











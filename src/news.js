import React,{Component } from 'react';
import './news.css';
import $ from 'jquery';


//校内新闻
class SchoolNews extends Component {
    constructor(){
        super()
        this.state={
            news:[],
            key:0
        }
    }
      componentDidMount(){
        $.ajax({
            type:'get',
            url:'http://localhost:3000/news/schoolnews',
            success:function (x) {
                console.log(x);
                this.setState({ news:x });
            }.bind(this)
        });
    }
    handleMouseMove(index){
        console.log(this.state.key);
        this.setState({key:index});
    }
    render(){
        let arrs =this.state.news;
        let n =this.state.key;
        // console.log(arrs[n]);
        return  (<div>
            <div id="News_banner"></div>
              <div id="NewsTab">
                <ul className="news_type">
                {arrs.map((item,k)=>{
                    var KO=eval(`(${item.content})`);
                       return <li className={n===k?'on':""}
                                   key={k}
                                  onMouseOver={this.handleMouseMove.bind(this,k)}
                       >{KO.name}</li>
                    })
                    }</ul>
                         <NewsCon cons={this.state.news} x={this.state.key}/>
           </div>
        </div>)
    }
};




class NewsCon extends Component {
    constructor(){
        super()
        this.state={ }
    }
    render(){
        return( <div className="news_con">
          {this.props.cons.map((item,s)=>{
            // console.log(item.content);
             var KO=eval(`(${item.content})`);
                  return  <div className={this.props.x===s?'show':'hidden'} key={s}>
                    {KO.con.map((child,j)=>{
                     return <div className="every_news" key={j}>
                            <p className="_left"><span>28</span>2017/03</p>
                             <div className="_right">
                                <a href="#">{child.title}</a>
                                <p>{child.textmsg}</p>
                            </div>
                       </div>
                      })}
                    </div>

             })}
        </div>)
    }

}


export default SchoolNews;



//VS
//<div id="News_banner"></div>
           //  <div id="NewsTab">
           //      <ul className="news_type">
           //          {arrs.map((item,k)=>{
           //             return <li className={n===k?'on':""}
           //                         index={onMouseOver={this.handleMouseMove.bind(this,k)}
           //             >{item.name}</li>
           //          })
           //          }</ul>
           //      <div className="news_con">
           //         {con.map((x,k)=>{
           //             return <div className="every_news">
           //               <p className="_left"><span>28</span>
           //                     2017/03</p>
           //                 <div className="_right">
           //                      <a href="#">{x.title}</a>
           //                      <p>{x.textmsg}</p>
           //                 </div>
           //             </div>
           //          })}
           //     </div>
           // </div>





            // arr:[
                // {name:"校园新闻",
                //     con:[
                //         {title:'深入思考 理性表述',
                //             textmsg:'利用假期这段比较长的时间进行教育教学理论学习，对自己教学实践的反思、梳理，提高自己的教科研能力, 已经成为苏外教师的必修课。正如上海市优秀校长郑杰所说：让老师写文章，就是让老师思考...'},
                //         {title:'计算机软件技术就业前景',
                //             textmsg:'以软件企业人才需求为导向，面向国民经济信息化建设和发展的需要，培养掌握扎实的计算机基础理论知识和较宽的工程专业知识、具有创新能力、有较强的工程实践能力和团队协作能力、德智体全面发展的有国际竞争力...'},
                //         {title:'国际名校赛艇挑战赛我校首次亮...',
                //             textmsg:'此外，国际名校赛艇挑战赛上届冠军阿姆斯特丹大学以2分12秒59获得亚军，成都新津站冠军帕维亚大学以2分13秒56收获季军。参加男子决赛的国内外高校还有：美国耶鲁大学、英国伦敦大学、德国麦克米迪亚...'},
                //         {title:'我院被全国创新教育活动组委会，誉为”全国创新教育实验基底',
                //             textmsg:'校园心理节是我校心理健康教育的一项传统活动，通过形式多样的途径，为孩子们创设丰富多彩的心理教育文化。本学期的“缤纷心理，你我共享”心理节系列活动在5月份陆续开展...'}
            //         ]
            //     },
                // {name:"重要公告",
                //     con:[
                //         {title:'理性表述',
                //             textmsg:'对自己教学实践的反思、梳理，提高自己的教科研能力, 已经成为苏外教师的必修课。正如上海市优秀校长郑杰所说：让老师写文章，就是让老师思考...'},
                //         {title:'件技术就业前景',
                //             textmsg:'扎实的计算机基础理论知识和较宽的工程专业知识、具有创新能力、有较强的工程实践能力和团队协作能力、德智体全面发展的有国际竞争力...'},
                //         {title:'我校首次亮...',
                //             textmsg:'姆斯特丹大学以2分12秒59获得亚军，成都新津站冠军帕维亚大学以2分13秒56收获季军。参加男子决赛的国内外高校还有：美国耶鲁大学、英国伦敦大学、德国麦克米迪亚...'},
                //         {title:'誉为”全国创新教育实验基底',
                //             textmsg:'通过形式多样的途径，为孩子们创设丰富多彩的心理教育文化。本学期的“缤纷心理，你我共享”心理节系列活动在5月份陆续开展...'}
                //     ]
                // },
            //     {name:"学术报告",
            //         con:[
            //             {title:'述',
            //                 textmsg:'利 已经成为苏外教师的必修课。正如上海市优秀校长郑杰所说：让老师写文章，就是让老师思考...'},
            //             {title:'就业前景',
            //                 textmsg:'专业知识、具有创新能力、有较强的工程实践能力和团队协作能力、德智体全面发展的有国际竞争力...'},
            //             {title:'战赛我校首次亮...',
            //                 textmsg:'新津站冠军帕维亚大学以2分13秒56收获季军。参加男子决赛的国内外高校还有：美国耶鲁大学、英国伦敦大学、德国麦克米迪亚...'},
            //             {title:'誉为”全国创新教育实验基底',
            //                 textmsg:'孩子们创设丰富多彩的心理教育文化。本学期的“缤纷心理，你我共享”心理节系列活动在5月份陆续开展...'}
            //         ]
            //     }
            // ],
            // index:0,






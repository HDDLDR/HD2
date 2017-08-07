import React,{Component} from 'react';
import './research.css';
import $ from 'jquery';


//学术研究
class Research extends Component {
   constructor(){
            super()
            this.state={
                resPic:[],
                resCon:[]
            }
   }
   componentDidMount(){
        $.ajax({
            type:'get',
            url:'http://localhost:3000/research/resPic',
            success:function (x) {
                // console.log(x);
                this.setState({ resPic:x });
            }.bind(this)
        });

        $.ajax({
            type:'get',
            url:'http://localhost:3000/research/resCon',
            success:function (x) {
                // console.log(x);
                this.setState({ resCon:x });
            }.bind(this)
        });
    }
   render(){
    return ( <div>
        <div className="xueshu_banner">
               {this.state.resPic.map(function(item,x){
                return  <img src={item.bannerpic} key={x}/>
               })}
          </div>

           {this.state.resPic.map(function(item,x){
            return  <div className="xueshu_end" key={x}>
                     <div className="xueshu_end_one"><img src={item.contentpic}/></div>
                        <p className="xueshu_end_two">{item.msg}</p>
                    </div>
           })}

           <div className="XS_yj">
           {this.state.resCon.map(function(item,x){
            return  <div className="xueshu_text" dangerouslySetInnerHTML={{__html:item.content}} key={x} />
           })}
           </div>



    </div>)
     }
}

export default Research;



  // <div className="xueshu_banner"></div>
  //       <div className="xueshu_end">
  //           <div className="xueshu_end_one"></div>
  //           <p className="xueshu_end_two">现有一级学科国家重点学科11个，二级学科国家重点学科19个，国家重点
  //               学科覆盖的二级学科博士点占全校博士点总数的61.8%；有15个学科领域进入ESI全球前1%，数量位居全国第二，
  //               理工科有3个学科进入了世界前100名，临床医学也初步具备冲击世界一流学科的实力。学校有一大批高水准的科研
  //               机构。全校有科研机构410个，其中国家重点实验室5个，省部级重点实验室32个、省部级工程研究中心6个，教育部
  //               人文社会科学重点研究基地8个。</p>
  //       </div>
  //       <div className="XS_yj">
  //       <div className="xueshu_text">
  //           <div className="xueshu_text_o">学科建设</div>
  //           <p>学科建设的中期目标是，所有在建学科进入国内前列，一批学科达到国际先进水平，学科国际影响力显著增强。
  //               发展规划处负责学科规划、重点学科及学科项目建设的遴选、评估检查和验收。</p>
  //       </div>
  //       <div className="xueshu_text">
  //           <div className="xueshu_text_o">人文与社会科学</div>
  //           <p>人文与社会科学研究，以文化传承创新为己任，以“国家建设”为核心主题，以中国传统文化和中国问题研究为
  //               重心加强国际学术对话与合作。文科科研处是负责全校人文社会科学科研管理的综合性职能部门。</p>
  //       </div>
  //       <div className="xueshu_text">
  //           <div className="xueshu_text_o">自然科学与工程</div>
  //           <p>自然科学与工程研究，积极面向国际学术前沿，面向国家重大需求和重要问题，注重重大的原创科技成果和质
  //               量导向，注重团队的整体学术表现，注重学术成果综合评价。科技处是学校科技管理工作的职能部门。</p>
  //       </div>
  //       <div className="xueshu_text">
  //           <div className="xueshu_text_o">医学</div>
  //           <p>医学科学长期处于中国的领军位置，传统优良、基础雄厚、学科齐整。上海医学院作为学校党政的派出
  //               机构，根据学校授权，管理医科各学院、研究院所和附属医院的人才培养、科学研究、学科建设、
  //               对外交流、发展规划。</p>
  //       </div>
  //       </div>












import React,{Component } from 'react';
import './team.css';
import $ from 'jquery';

//教师团队
class Team extends Component {
    constructor(){
        super()
        this.state={
            teamBanner:[],
            teamList:[],
            teamCon:[],
            key:0
        }
    }
       componentDidMount(){
        $.ajax({
            type:'get',
            url:'http://localhost:3000/team/teamBanner',
            success:function (x) {
                console.log(x);
                this.setState({ teamBanner:x });
            }.bind(this)
        });
        // Tab
        $.ajax({
            type:'get',
            url:'http://localhost:3000/team/teamList',
            success:function (x) {
                // console.log(x);
                this.setState({ teamList:x });
            }.bind(this)
        });

 $.ajax({
            type:'post',
            url:'http://localhost:3000/team/teamCon',
            data:{
              'idx':0,
            },
            success:function (x) {
                console.log(x);
                this.setState({ teamCon:x });
            }.bind(this)
        });




    }
    handleMouseMove(index){
       $.ajax({
            type:'post',
            url:'http://localhost:3000/team/teamCon',
            data:{
              'idx':index,
            },
            success:function (x) {
                console.log(x);
                this.setState({ teamCon:x });
            }.bind(this)
        });
        this.setState({key:index});
        console.log(index);

    }
    render(){
        let arrs =this.state.teamList;
        let n =this.state.key;
        // console.log(arrs[n]);
        return  (<div>
                <div id="team_banner">
                   {this.state.teamBanner.map((item,k)=>{
                    return <img src={item.bannerpic} alt="加载失败" key={k}/>
                   })}
                </div>
              <div id="TeamTab">
                  <ul className="teachers_type">
                    {this.state.teamList.map((item,k)=>{
                          // console.log(item);
                        return <li  className={n===k?'on':''}
                                   key={k}
                                   onMouseOver={this.handleMouseMove.bind(this,k)}
                        >{item.teamlist}</li>
                    })}</ul>
                       <TeamCon cons={this.state.teamCon} x={this.state.key}/>
            </div>
        </div>)
    }
};




class TeamCon extends Component {
    constructor(){
        super()
        this.state={ }
    }
    render(){
        return(<div className='teacher_msg'>
        {this.props.cons.map((item,s)=>{
          // console.log(item);
            return  <div className={this.props.x===s?'show':'hidden'} key={s}>
            {this.props.cons.map((child,k)=>{
                    return <div className="every_teacher" key={k}>
                           <p className="et_pic"><img src={child.teamcon_pic} alt="加载失败"/></p>
                           <p className="et_text">{child.teamcon_name}</p>
                     </div>
             })}
              </div>
         })}
         </div>)
    }

}
export default Team;





//  VS
 // <div id="team_banner"></div>

            //   <div id="TeamTab">
            //     <ul className="teachers_type">
            //         {this.state.team.map((item,k)=>{
            //             return <li className={n===k?'on':""}
            //                        index={k}
            //                        onMouseOver={this.handleMouseMove.bind(this,k)}
            //             >{item.name}</li>
            //         })
            //         }</ul>
                // <div className="teacher_msg">
                //      {con.map((x,k)=>{
                //         return <div className="every_teacher">
                //             <img src={x.pic} alt="加载失败"/>
                //             <p>{x.message}</p>
                //         </div>
                //     })}
                // </div>
            // </div>





   // {name:"在职教师",
   //                  con:[
   //                      {pic:'img/ZZteacher1.jpg',message:'111'},
   //                      {pic:'img/ZZteacher2.jpg',message:'222'},
   //                      {pic:'img/ZZteacher3.jpg',message:'333'},
   //                      {pic:'img/ZZteach er4.jpg',message:'444'},
   //                      {pic:'img/ZZteacher5.jpg',message:'555'},
   //                      {pic:'img/ZZteacher5.jpg',message:'666'}
   //                  ]
   //              },
   //              {name:"名誉博士",
   //                  con:[
   //                      {pic:'img/ZZteacher1.jpg',message:'kkk111'},
   //                      {pic:'img/ZZteacher2.jpg',message:'kkk222'},
   //                      {pic:'img/ZZteacher3.jpg',message:'kkk333'},
   //                      {pic:'img/ZZteach er4.jpg',message:'kkk444'},
   //                      {pic:'img/ZZteacher5.jpg',message:'kkk555'},
   //                      {pic:'img/ZZteacher5.jpg',message:'kkk666'}
   //                  ]
   //              },
   //              {name:"东方学者",
   //                  con:[
   //                      {pic:'img/ZZteacher1.jpg',message:'东方111'},
   //                      {pic:'img/ZZteacher2.jpg',message:'东方222'},
   //                      {pic:'img/ZZteacher3.jpg',message:'东方333'},
   //                      {pic:'img/ZZteach er4.jpg',message:'东方444'},
   //                      {pic:'img/ZZteacher5.jpg',message:'东方555'},
   //                      {pic:'img/ZZteacher5.jpg',message:'东方666'}
   //                  ]
   //              },
   //              {name:"千人计划",
   //                  con:[
   //                      {pic:'img/ZZteacher1.jpg',message:'千人111'},
   //                      {pic:'img/ZZteacher2.jpg',message:'千人222'},
   //                      {pic:'img/ZZteacher3.jpg',message:'千人333'},
   //                      {pic:'img/ZZteach er4.jpg',message:'千人444'},
   //                      {pic:'img/ZZteacher5.jpg',message:'千人555'},
   //                      {pic:'img/ZZteacher5.jpg',message:'千人666'}
   //                  ]
   //              },
   //              {name:"名誉教授",
   //                  con:[
   //                      {pic:'img/ZZteacher1.jpg',message:'名誉111'},
   //                      {pic:'img/ZZteacher2.jpg',message:'名誉222'},
   //                      {pic:'img/ZZteacher3.jpg',message:'名誉333'},
   //                      {pic:'img/ZZteach er4.jpg',message:'名誉444'},
   //                      {pic:'img/ZZteacher5.jpg',message:'名誉555'},
   //                      {pic:'img/ZZteacher5.jpg',message:'名誉666'}
   //                      ]
   //              }














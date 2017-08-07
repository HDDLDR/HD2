import React,{Component} from 'react';
import './profile.css';
import $ from 'jquery';





//学校概况
class Profile extends Component {
   constructor(){
            super()
            this.state={
                banner:[],
                homePro:[],
                homeProRt:[],
                profileSpeak:[],
                leaderTitle:[],
                leaderList:[],
                proDatas:[],
                schoolTitle:[],
                schoolpic:[],
            }
   }
   componentDidMount(){
         $.ajax({
            type:'get',
            url:'http://localhost:3000/profile/proBanner',
            success:function (x) {
                // console.log(x);
                this.setState({banner:x});
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
            url:'http://localhost:3000/profile/proSpeak',
            success:function (x) {
                // console.log(x);
                this.setState({profileSpeak:x});
            }.bind(this)
        });

         $.ajax({
            type:'get',
            url:'http://localhost:3000/profile/leaderTitle',
            success:function (x) {
                // console.log(x);
                this.setState({leaderTitle:x});
            }.bind(this)
        });

         $.ajax({
            type:'get',
            url:'http://localhost:3000/profile/leaderList',
            success:function (x) {
                // console.log(x);
                this.setState({leaderList:x});
            }.bind(this)
        });

     $.ajax({
            type:'get',
            url:'http://localhost:3000/profile/proDatas',
            success:function (x) {
                // console.log(x);
                this.setState({proDatas:x});
            }.bind(this)
        });

      $.ajax({
            type:'get',
            url:'http://localhost:3000/profile/schoolTitle',
            success:function (x) {
                // console.log(x);
                this.setState({schoolTitle:x});
            }.bind(this)
        });

      $.ajax({
            type:'get',
            url:'http://localhost:3000/profile/schoolPic',
            success:function (x) {
                // console.log(x);
                this.setState({schoolpic:x});
            }.bind(this)
        });




    }
   render(){
    return (
    <div id="Profile">
          {this.state.banner.map(function(item,x){
                console.log(item);
           return <div className="banner" key={x}>
                   <img src={item.bannerpic} alt="加载失败" /></div>
          })}

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


         {/************************* 团结勤奋求实创新 *****************/}
        <div className="speak">
              {this.state.profileSpeak.map((item,x)=>{
                  return <h1 dangerouslySetInnerHTML={{__html:item.speak}} key={x} />
            })}
        </div>
        <div className="leader">
            {this.state.leaderTitle.map((item,x)=>{
                  return <div className="xinwen" dangerouslySetInnerHTML={{__html:item.title}} key={x}/>
            })}
            <div className="leaderList">
             {this.state.leaderList.map((item,x)=>{
                return <section key={x}>
                        <h3><img src={item.pic}/></h3>
                        <p>{item.job}</p>
                        <p>{item.uname}</p>
                </section>
            })}
            </div>
        </div>


            {/*************************** 学校相关数据 *******************************/}
        <div className="datas">
            {this.state.proDatas.map((item,x)=>{
              return <div key={x}>
                    <img src={item.pic} alt="加载失败"/>
                    <div className="data" dangerouslySetInnerHTML={{__html:item.content}}/>
              </div>
            })}
        </div>


            {/*************************** 校园环境 *******************************/}
             <div className="school">
              {this.state.schoolTitle.map((item,x)=>{
                  return <div className="xinwen" dangerouslySetInnerHTML={{__html:item.title}} key={x}/>
               })}
              <div className="mySchool">
              {this.state.schoolpic.map((item,x)=>{
                  return  <img src={item.pic} alt="加载失败" key={x} /> })}
                </div>
                </div>

           </div>)
     }
}

export default Profile;







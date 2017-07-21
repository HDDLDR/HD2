import React from 'react';

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

export default TeamTab;
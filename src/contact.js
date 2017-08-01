import React,{Component} from 'react';
import './contact.css';
import $ from 'jquery';


//联系我们
class Contact extends Component {
   constructor(){
            super()
            this.state={
                        contacts:[]
            }
   }
     componentDidMount(){
        $.ajax({
            type:'get',
            url:'http://localhost:3000/contact/contactus',
            success:function (x) {
                console.log(x);
                this.setState({ contacts:Array.of(x) });
            }.bind(this)
        });
    }
   render(){
    return (<div>
         <div className="conBanner"></div>
        <div className="pro_head">
            <h2>联系我们</h2>
            <p>——    CONTACT  US    ——</p>
        </div>
        <div className="message_type">
            {this.state.contacts.map(function(item,x){
             return <section>
                        <h1><img src=""/></h1>
                        <h2>555</h2>
                        <p>XXXXXXX</p>
                    </section>
          })}
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
    </div>)
   }
}




export default Contact;

//VS
// <div className="conBanner"></div>
//         <div className="pro_head">
//             <h2>联系我们</h2>
//             <p>——    CONTACT  US    ——</p>
//         </div>
//         <div className="message_type">
//             <section>
//                 <h1></h1>
//                 <h2>555</h2>
//                 <p>XXXXXXX</p>
//             </section>
//             <section>
//                 <h1></h1>
//                 <h2>555</h2>
//                 <p>XXXXXXX</p>
//             </section>
//             <section>
//                 <h1></h1>
//                 <h2>555</h2>
//                 <p>XXXXXXX</p>
//             </section>
//         </div>
//         <div className="message_board">
//             <div>
//                 <p className="message_tip">kkk</p>
//                 <label>发表您的留言：</label>
//                 <section className="person_msg">
//                     <p>
//                         <label for="uname">姓名: </label>
//                         <input type="text" id="uname"/><span>*</span>
//                     </p>
//                     <p>
//                         <label for="Email">邮箱: </label>
//                         <input type="email" id="Email"/>
//                     </p>
//                     <p>
//                         <label for="phone">电话: </label>
//                         <input type="text" id="phone"/>
//                     </p>
//                 </section>
//                 <section className="message_con">
//                     <label for="messages">内容:</label>
//                     <input stype="textarea" id="messages" placeholder="留言需要审核"/>
//                 </section>
//                 <button>提交留言</button></div>
//         </div>









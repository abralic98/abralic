import classes from "./ContactPage.module.css"
import Navigation from "../components/Navigation"
import {ImMail4} from "react-icons/im"
import {SiWhatsapp, SiGithub, SiLinkedin} from "react-icons/si"
import {useRef, useState} from "react"

const ContactPage = () =>{
    function github(){
        window.open(
            "https://github.com/abralic98",
            '_blank'
          );
    }
    function linkedIn(){
        window.open(
            "https://www.linkedin.com/in/ante-bralic-bb6bb320b/",
            '_blank'
          );
    }
    function whap(){
        window.open(
            "https://wa.me/+385955183303/?text=Hello I Checked your portfolio and I would like to speak with you",
            '_blank'
          );
    }
    const nameInputRef = useRef()
    const mailInputRef = useRef()
    const subjectInputRef = useRef()
    const messageInputRef = useRef()
    const [sendMessage,setSendMessage] = useState(false);

    function sendMailCustomer(e){
        e.preventDefault()
        if(nameInputRef.current.value==="" || mailInputRef===""){
            setSendMessage((prev)=>prev="no message")
            return;
        }
        setSendMessage((prev)=>prev=true)
        const name = nameInputRef.current.value;
        const email = mailInputRef.current.value;
        sendMailToMe();
        window.Email.send({
            Host : "smtp.gmail.com",
            Username : "balkanflix98@gmail.com",
            Password : "balkanflix123",
            To : email,
            From : "balkanflix98@gmail.com",
            Subject : "no-reply",
            Body : `Thank you for contacting me ${name}. I recieved your message and I will respond as soon as possible`
        })
        .then(
            nameInputRef.current.value="",
            mailInputRef.current.value="",
            subjectInputRef.current.value="",
            messageInputRef.current.value=""
        )
        
    }
    function sendMailToMe(){
        const name = nameInputRef.current.value;
        const email = mailInputRef.current.value;
        const subject = subjectInputRef.current.value;
        const message = messageInputRef.current.value
    
        window.Email.send({
            Host : "smtp.gmail.com",
            Username : "balkanflix98@gmail.com",
            Password : "balkanflix123",
            To : "ante.bralic2@gmail.com",
            From : "balkanflix98@gmail.com",
            Subject : "You have new message from ",
            Body : `Some ${name} wants to contact you from ${email} and his subject is ${subject} and message ${message}`
        })
    }
    return (
        <div className={classes.background}>
            <Navigation/>
            <div className={classes.content}>
                <h1>Lets Make Something Great</h1>
                <h2>Contact Me</h2>
                {sendMessage===true ? <p className={classes.sent} >Message Sent</p> : sendMessage==="no message" ? <p className={classes.fail} >Please fill in all fields</p> : null}
                <form onSubmit={sendMailCustomer} className={classes.form}action="">
                    <div  className={classes.inputBlock}>
                        <label htmlFor="">Your Name</label>
                        <input ref={nameInputRef} type="text" />
                    </div>
                    <div  className={classes.inputBlock}>
                        <label htmlFor="">Your Email</label>
                        <input ref={mailInputRef} type="email" />
                    </div>
                    <div  className={classes.inputBlock}>
                        <label htmlFor="">Subject</label>
                        <input ref={subjectInputRef} type="text" />
                    </div>
                    <div  className={classes.inputBlock}>
                        <label htmlFor="">Your Message</label>
                        <textarea ref={messageInputRef}  ></textarea>
                    </div>
                    <div onClick={sendMailCustomer} className={classes.btn}>
                        <button>Send Message</button>
                        <ImMail4 className={classes.btnIcon}/>
                    </div>
                </form>

                <h2 className={classes.reach}>Feel free to reach out throught any platforms below</h2>
                <div className={classes.contactIcons}>
                    <SiWhatsapp onClick={whap} className={classes.icon}/>
                    <SiGithub onClick={github} className={classes.icon}/>
                    <SiLinkedin onClick={linkedIn} className={classes.icon}/>
                </div>
            </div>
            
        </div>
    )
}

export default ContactPage
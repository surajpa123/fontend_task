import React from 'react'
import style from "./cavalox.module.css"
const Cavalox = () => {
 
  return (

    <div className={style.main}>

<div className={style.navbar}>
     <div className={style.left}>
       <img src="../Images/logo.PNG" />  
     </div>
     <div className={style.right}>
       <div className={style.wallet}>
         <button>Connect to a wallet</button>
       </div>
       <div style={style.sound1}>
       <img style={{marginTop:"17%"}} src="../Images/sound.JPG"/>
       </div>
     </div>
     </div>
<div className={style.CAVALOXIAN}>
<p>CAVALOXIAN</p>
</div>

<div className={style.child2}>
<h3>BE A</h3>
<h1>CAVALOXIAN !</h1>

</div>


<div className={style.inputs}>

  <div className={style.first}>
    <input type="text" placeholder='FIRST NAME'/>
    <input className={style.second} type="text" placeholder='LAST NAME'/>
  </div>
  <input  className={style.email}  type="text"  placeholder='EMAIL'/>


<div>
   <select  name="" id="">

   
   <option ></option>
  
   </select>
  <input  className={style.mobile}  type="text"  placeholder='+91'/>

  </div>

  <select name="" id="country" className={style.country}>

    <option value="">Country</option>
    
    <option value="India">India</option>
    
    <option value="USA">USA</option>
    
    <option value="China">China</option>
  </select>
  <div class={style.tacbox}>
  <input class={style.tacbox2} type="radio" />
  <label class="tacbox" for="checkbox"> I AGREE TO TERMS AND CONDITIONS <a style={{color:"green"}} href="#">T&C</a></label>
</div>


<div>

   
   <div className={style.button3}>
  <button className={style.button1}>Submit</button>

  </div>
</div>
</div>


<div className={style.footer}>
<img src="../Images/Screenshot (65).png" alt="" />


<div className={style.footerRight}>

<div className={style.content}>

<h2>Buy</h2> 

<hr/>

<h2>About</h2>
<hr />

<h2>Terms</h2>
<hr />
<h2>
  Contact
</h2>
</div>

<div className={style.logos}>

  <div>

<img height={"50px"} width={"50px"} src="https://img.icons8.com/external-tal-revivo-bold-tal-revivo/24/000000/external-telegram-is-a-cloud-based-instant-messaging-and-voice-over-ip-service-logo-bold-tal-revivo.png"/>

</div>

<div>
<img height={"50px"} width={"50px"}  src="https://img.icons8.com/external-tal-revivo-bold-tal-revivo/24/000000/external-discord-freeware-application-and-digital-video-gaming-community-logo-bold-tal-revivo.png"/>
</div>

<div>
<img height={"50px"} width={"50px"}  src="https://img.icons8.com/ios-filled/50/000000/medium-new.png"/>

</div>

<div>
<img height={"50px"} width={"50px"}  src="https://img.icons8.com/external-tal-revivo-bold-tal-revivo/24/000000/external-linkedin-a-business-and-employment-oriented-service-mobile-app-logo-bold-tal-revivo.png"/>
</div>

<div>
<img height={"50px"} width={"50px"}    src="https://img.icons8.com/material-rounded/24/000000/facebook-f--v2.png"/>
</div>

<div>
<img  height={"50px"} width={"50px"} src="https://img.icons8.com/metro/26/000000/twitter.png"/>
</div>


<div>
<img  height={"50px"} width={"50px"} src="https://img.icons8.com/windows/32/000000/instagram.png"/>
</div>

<div>
<img  height={"50px"} width={"50px"}  src="https://img.icons8.com/ios-filled/50/000000/youtube-play.png"/>
</div>


</div>


<div className={style.copyright}>

  <h6>COPYRIGHT © 2021 CAVALOX</h6>

  <div>

  <h5>PRIVACY POLICY TERMS & CONDITIONS</h5>

  </div>

  
</div>





</div>
</div>





    </div>
   
  )
}

export default Cavalox
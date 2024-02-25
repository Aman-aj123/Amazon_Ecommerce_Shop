import React from 'react'
import devImage from "./images/dev-img.jpg"
import "../css/utility.css"

const Developer = () => {
     return (
          <>
               {/* <!-- Starting Developer Section --> */}
               <div id="developer">
                    <h1>Who <span>build's</span> this site?</h1>
                    <div className="dev-cont flex flex-around flex-wrap">
                         <div className="dev-img">
                              <img src={devImage} alt="" />
                         </div>
                         <div className="dev-txt">
                              <h3>About <span>Developer</span> </h3>
                              <p><b>Aman Raj</b> He is the owner of this website. he is 14 years old and he is tried to build the amazon clone with his skill HTML, CSS, and JavaScript. It is not completely like Amazon but only the frontend part of this is built by him. He is from Aurangabad, (Bihar) From a small family. See this site and Rate for his work...</p>
                         </div>
                    </div>
               </div>
               {/* <!-- Ending Developer Section --> */}
          </>
     )
}

export default Developer

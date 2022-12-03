import React from 'react'

function Achievements() {
  return (
    <section id="achievement" className="achievement">
        <h2 className="line contact">ACHIEVEMENTS</h2>
        <p>I have a Bachelors degree in Mathematics from Machakos University, which I don't talk much about. </p>
        <p>I'm proficient in ReactJS, Laravel and Rails and I have been able to deploy (or participate in deploying) a few projects;</p>
            <div className='my-4 text-center'>
                <figure className="achievement mb-0" id="codes">
                    <img src="./images/codes.jpg" alt="JS-codes"/>
                </figure>
                    a <a href="https://github.com/Michael-Murage-projects/phase-4-project-pos"> point of sale
                    app</a>
            </div>
            <div className='my-4 text-center'>
                <figure className="achievement mb-0" id="codes">
                    <img src="./images/codes.jpg" alt="JS-codes"/>
                </figure>
                an <a href='https://github.com/Michael-Murage/assets-management'>assets management application</a> 
            </div>
            <div className='my-4 text-center'>
                <figure className="achievement mb-0" id="codes">
                    <img src="./images/codes.jpg" alt="JS-codes"/>
                </figure>
                an <a href="https://github.com/Miriam-Naomi-Anyango/auctioning-platform">auctioning platform</a> 
            </div>
            <div className='my-4 text-center'>
                <figure className="achievement mb-0" id="codes">
                    <img src="./images/codes.jpg" alt="JS-codes"/>
                </figure>
                a <a href="https://github.com/Michael-Murage/admissions-system-project">school admissions system</a> 
            </div>
             <div className='my-4 text-center'>
                <figure className="achievement mb-0" id="codes">
                    <img src="./images/codes.jpg" alt="JS-codes"/>
                </figure>
                 a <a href="https://github.com/Michael-Murage/phase-4-mini-project-pizza">pizza app</a> 
             </div>

        
    </section>
  )
}

export default Achievements
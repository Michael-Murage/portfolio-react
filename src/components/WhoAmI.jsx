import React from 'react'

function WhoAmI() {
  return (
    <>
        <section id="whoami" class="whoami">
            <h2 class="line contact">WHO IS MICHAEL MURAGE?</h2>
            <p>I am a 5 foot 9 proactive and enthusiastic individual in my mid 20s 
                (at the time of writing).
            </p>
            <figure id="processor" class="whoami">
            <img src="./images/processorchip.jpg" alt="finger touching processor chip" />
            </figure>
        </section>

        <section id="do" class="do">
            <h2 class="line contact">WHAT DO YOU DO?</h2>
            <p>I am a full-stack software developer, graduated from Moringa School.
            </p>
            <figure class="do">
                <img src="./images/binary.jpg" alt="binarycodes"/>
            </figure>
        </section>

        <section id="like" class="like">
            <h2 class="line contact">WHAT DO YOU LIKE?/WHAT ARE YOUR HOBBIES?</h2>
            <p>
                I like generally almost anything tech related, be it computers, servers, sattelites name it, 
                there's little in the tech industry that I am uninterested in.
                I like or rather I am into a range of activities, some of which I did some of which I still do.
            </p>
            <figure class="like" id="giant">
                <img src="./images/giantprocessor.jpg" alt="giant processor chip"/>
            </figure>
            <ul>
                <li>Singing*</li>
                <li>Acting</li>
                <li>Travelling</li>
                <li>Nature*</li>
                <li>Relating with people (not all the time)*</li>
            </ul>
            <p><span id="span">*</span></p>
        </section>
    </>
  )
}

export default WhoAmI
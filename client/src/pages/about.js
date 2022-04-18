import React from 'react';

function About() {

    return (
        
        <section class="hero">
            <div class="about-container">
                {/* about section */}
                <aside className='about'>
                    <h1>
                        Welcome to Breaking Code! <br />
                    </h1>
                    <p>
                        If you are either getting ready to do a technical web development interview for the first time, <br />
                        or even the 100th, then Breaking Code is the place to test your coding knowledge! <br />
                        {/* <br />
                    <br />
                    Your Goal is to match the correct square to the question given and for each correct question <br />
                    the user will receive points and at the end of the quiz see how they did out of array of questions. <br />
                    You will also be able to share your score!
                    <br />
                    <br />
                    Future developments will allow users to test through several different quiz types as well as study <br />
                    with flashcards on a user dashboard depending on the desired interview topic.
                    Feel free to Contact us if you have any questions, request, or suggestions for future development! */}
                    </p>
                </aside>
            </div>
        </section>
    );
}

export default About;
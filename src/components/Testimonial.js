import React from 'react'

const Testimonial = () => {
  return (
    <div id='testimonial'>
        <h2>Testimonial</h2>
        <section>
            <TestimonialCard name={"Sundar Pichai"} feedback={"Would like to connect with you"} />
            <TestimonialCard name={"Shivam"} feedback={"Great job!! In love the animation effects"} />
            <TestimonialCard name={"Sourabh"} feedback={"Very Creative Portfolio. Hats Off!!"} />
        </section>
    </div>
  )
}

const TestimonialCard=({name, feedback})=>(
    <article>
        <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="User" />
        <h4>{name}</h4>
        <p>{feedback}</p>
    </article>
)

export default Testimonial

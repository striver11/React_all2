import React from 'react'
import { useState } from 'react'

const TogglePara =()=>{
    let [state,setState]=useState(true)
    function handleClick(){
        setState(!state)
    }

    return(
        <>
        <br />
        <button onClick={handleClick}>

            {state? "Hide":"show"}
        </button>

        {
            state?<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt nostrum dolore excepturi asperiores cupiditate modi eos ab, veritatis maiores velit deserunt laborum? Temporibus pariatur deserunt similique quibusdam, necessitatibus dolor minima unde, repudiandae labore sapiente cumque asperiores ullam officia? Reprehenderit, ipsa sapiente corporis officia veritatis recusandae temporibus unde necessitatibus molestias soluta illum et sint consequatur aspernatur asperiores obcaecati expedita, laboriosam labore mollitia. Iusto reprehenderit illum, explicabo voluptates aut maxime soluta dicta voluptatibus voluptatum vero quis nesciunt vitae dolore, est dolor veniam fugiat consequatur, tempora quibusdam facere. Laudantium dicta aliquid, alias tempora commodi doloribus amet praesentium porro sit. Quam, a repudiandae unde repellendus aspernatur quisquam voluptas excepturi voluptate delectus at, officia dolore quod eligendi ab culpa dicta accusamus natus perspiciatis ducimus alias sint debitis ea! Doloribus facilis quas, debitis nihil et alias dolor odit iste illum enim earum ad minus placeat sit corporis doloremque sunt molestiae consequatur vitae velit explicabo. Beatae, exercitationem quas ducimus alias dolorum quo perspiciatis est sunt sit, earum vel minus architecto ratione itaque, omnis dicta laboriosam! Ipsum, animi voluptates officia corrupti iste tempore consequuntur nisi accusantium laborum, voluptas iusto neque nemo quasi. Ab aliquid ipsam ex dolores vitae, officia voluptatibus laboriosam necessitatibus, officiis voluptatem voluptatum, soluta vel quos.</p>:""
        }
        </>
    )
}

export default TogglePara
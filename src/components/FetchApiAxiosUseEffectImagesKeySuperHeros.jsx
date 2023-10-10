import React, { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'


const FetchApiAxiosUseEffectImagesKeySuperHeros = () => {
    let [state,setState]=useState([])
    console.log(state)
    useEffect(()=>{
        axios.get("https://akabab.github.io/superhero-api/api/all.json")
        .then(res=>setState(res.data))
    },[])
  return (
    // <>

    // {
    //     state.map((user)=>
    //     console.log(user.login),
    //     console.log(user.avatar_url)


    //     )
    // }
    // </>
    <>
    <h1 className='text-center py-5' >Super Heros</h1>
    <div style={{display:"grid",gridTemplateColumns:"auto auto auto auto auto ",rowGap:"30px"}}>
        {
            state.map((user)=>{
                return <div className='card text-center' style={{width:"14rem"}}>
                    <img src={user.images.lg} className='card-img-top' alt="" />
                    <div className='card-body'>
                        <h4 className='card-title' style={{textTransform:"uppercase"}}>{user.name}</h4>
                        <h6>Gernder :{user.appearance.gender}</h6>
                        <p>Powers</p>
                        {
                            <ul>
                                <li><p> Combat:{user.powerstats.combat}</p></li>
                                <li><p> durability:{user.powerstats.durability}</p></li>
                                <li><p> intelligence:{user.powerstats.intelligence}</p></li>
                                <li><p> power:{user.powerstats.power}</p></li>
                                <li><p> speed:{user.powerstats.speed}</p></li>
                                <li><p> strength:{user.powerstats.strength}</p></li>
                            </ul>
                        }
                    </div>

                </div>

            })
        }


    </div>
    
    
    </>
    
  )
}

export default FetchApiAxiosUseEffectImagesKeySuperHeros

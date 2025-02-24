import React from 'react'
import Carousel from './Carousel'
import { ImageCard } from './ImageCard'
import {ArrowLeft } from './icons'
import { useNavigate } from 'react-router-dom'
import cutie from '../assets/cutie.jpg';
import cutiepie from '../assets/cutiepie.jpg';
import us from '../assets/us.jpg';

function Picture() {
  const navigate = useNavigate();

  const pictures = [
    { Image: cutie, title: '14 Fevereiro, 2024', description: "Primeiro Dia dos Namorados juntos!!!! não podia pedir melhor do que passar este dia contigo."},   
    { Image: cutiepie, title: '18 Janeiro, 2025', description: "Até o presente sempre juntos e a amar cada vez mais um ao outro.(adoro esta foto estás tão fofa) "},
    { Image: us, title: '18 Janeiro, 2025', description: "Cada momento ao teu lado é uma memória incrível que guardo para sempre."},
  ]
  return (
  
    <div className="min-h-screen bg-black/20 flex flex-col items-center justify-center">

      <div className="w-[90%] max-w-[400px]">
        <h1 className="text-2xl sm:text-2xl font-bold -mb-4 drop-shadow-lg text-white text-center">
            Our Pictures
          </h1>
        <Carousel>
          {pictures.map(({Image,title,description,index}) => (
            <ImageCard
              key={index}
              imageUrl={Image}
              altText="Placeholder image"
              title={title}
              description={description}
            />
          ))}
        </Carousel>

        <div className="flex justify-center w-full mt-12">
          <button
            className="px-4 py-2 flex justify-center items-center bg-white/20 gap-2 hover:bg-white/30 backdrop-blur-sm text-white text-sm border border-white/50 rounded-lg"
            onClick={() => navigate('/recap')}
          >
            <ArrowLeft /> Página anterior
          </button>

        </div>
      </div>
    </div>


  )
}

export default Picture
import React from 'react'
import {picture} from '../assets'
import Carousel from './Carousel'
import { ImageCard } from './ImageCard'
import {ArrowLeft } from './icons'
import { useNavigate } from 'react-router-dom'
import mensagens from '../assets/mensagens.png';
import dislexia from '../assets/dislexia.jpg';
import imagem from '../assets/imagem.jpg';

function Message() {
  const navigate = useNavigate();

  // customize your own picture, title and subtext. You can also add more picture.
  const pictures = [
    { Image: mensagens, title: '26 Fevereiro, 2023', description: "Dias depois do nosso primeiro encontro e abraço. Onde a saudade falava mais alto :3"},   
    { Image: dislexia, title: 'Dislexias', description: "Não pode ser só coisas lamexas, que tal uma compilação dos teus melhores fails"},
    { Image: imagem, title: '21 Junho, 2023', description: "Mensagem que fica marcada para sempre."},

  ]
  return (
    <div className="min-h-screen bg-black/20 flex flex-col items-center justify-center">

      <div className="w-[90%] max-w-[400px]">
        <h1 className="text-2xl sm:text-2xl font-bold -mb-4 drop-shadow-lg text-white text-center">
            As nossas mensagens
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

export default Message
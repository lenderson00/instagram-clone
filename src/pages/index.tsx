import type { NextPage } from 'next'
import React, { useEffect, useRef, useState } from 'react'

const Home: NextPage = () => {
  return (
    <h1 className="w-full min-h-screen bg-gray-100">
      
      <Header />
      <div className='max-w-3xl mx-auto sm:hidden'>
         <UserInfo />
        <UserStatistics />
        <ViewBar />
      </div>
      <div className='hidden sm:flex max-w-3xl mx-auto flex-col'>
      <UserDataLarge />
      <UserStatisticsLarge />
      </div>
      <div className='max-w-3xl mx-auto'>
        
        <GridImages />
      </div>
      
      <Banner />
   
    </h1>
  )
}

const Header: React.FC = () => {
  return (
    <div className='  w-full h-[60px] bg-white border-b-[1px] border-solid border-gray-300'>


        
    
    <div className='max-w-3xl mx-auto flex items-center justify-between px-[4vw] sm:px-0 h-full'>
      
      <p className='text-2xl font-bold'>Instagram</p>
      <div className='flex gap-2 items-center'>
        <div className=' cursor-pointer py-1 px-2 bg-blue-400 text-white font-semibold rounded-sm'>Entrar</div>
        <div className=' cursor-pointer py-1 px-2 text-blue-400 font-semibold rounded-sm'>Cadastre-se</div>
      </div>
    </div>
    </div>
  )
}

const UserInfo: React.FC = () => {
  return (
    <div className='px-[4vw] mt-2 flex flex-col gap-5'>
      <div className='flex gap-6 items-center'>
        <div className=' w-20 h-20 bg-gray-600 rounded-full'></div>
        <div className='flex flex-col gap-2'>
          <div className='text-2xl font-light'>lenderson.macedo</div>
          <div className=' cursor-pointer min-w-full w-56 bg-blue-400 py-1 grid place-content-center font-semibold rounded-lg text-white '>Seguir</div>
        </div>
      </div>
      <div className='text-sm leading-[17px]'>
        <h1 className='font-semibold'>Lenderson Macedo</h1>
        <p className='text-gray-400 '>Criador(a) de conteúdo digital</p>
        <p>
          Programador e UI/Ux Designer (FullStack) <br />
          Busco melhorar o futuro tendo atitudes no presente, <br />
          Vamos mudar o mundo galera!
        </p>
        <p className='text-blue-700 font-semibold cursor-pointer'>blog.lenderson.com.br</p>
      </div>
    </div>
  )
}

const UserStatistics: React.FC = () => {
  return (
    <div className='mt-8 border-y-[1px] border-solid border-gray-300'>
      <div className='py-2 flex text-sm '>
        <div className='flex-1 text-center'>
          <span className='font-semibold'>12</span>
          <p className='text-gray-400'>publicações</p>
        </div>
        <div className='flex-1 text-center'>
          <span className='font-semibold'>139</span>
          <p className='text-gray-400'>seguidores</p>
        </div>
        <div className='flex-1 text-center'>
          <span className='font-semibold'>7</span>
          <p className='text-gray-400'>seguindo</p>
        </div>
      </div>
    </div>
  )
}

const UserStatisticsLarge: React.FC = () => {
  return (
    <div className='mt-8 border-t-[1px] border-solid border-gray-300'>
      <div className='py-4 text-sm  flex justify-center gap-8 '>
        <div className='cursor-pointer flex gap-2 uppercase items-center relative'>
          <div className='absolute w-full h-[0.5px] bg-slate-500 top-0 -translate-y-[17px]'></div>
          <GridIcon color={'#777'}/>
          <p> Publicações </p>
        </div>
        <div></div>
        <div className='cursor-pointer flex gap-2 uppercase  items-center text-[#b4b4b8]'>
          <UserIcon color={'#b4b4b8'} />
          <p> Marcados </p>
        </div>
      </div>
    </div>
  )
}

const GridIcon: React.FC<{color?: string}> = ({ color = '#0095f6'}) => {
  return (
    <svg aria-label="Publicações" className="_8-yf5 " color={color} fill={color} height="24" role="img" viewBox="0 0 24 24" width="24"><rect fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" width="18" x="3" y="3"></rect><line fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="9.015" x2="9.015" y1="3" y2="21"></line><line fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="14.985" x2="14.985" y1="3" y2="21"></line><line fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="21" x2="3" y1="9.015" y2="9.015"></line><line fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="21" x2="3" y1="14.985" y2="14.985"></line></svg>
  )
}

const UserIcon: React.FC<{color?: string}> = ({ color = '#8e8e8e'}) => {
  return (
    <svg aria-label="Marcados" className="_8-yf5 " color={color} fill={color} height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M10.201 3.797L12 1.997l1.799 1.8a1.59 1.59 0 001.124.465h5.259A1.818 1.818 0 0122 6.08v14.104a1.818 1.818 0 01-1.818 1.818H3.818A1.818 1.818 0 012 20.184V6.08a1.818 1.818 0 011.818-1.818h5.26a1.59 1.59 0 001.123-.465z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path><path d="M18.598 22.002V21.4a3.949 3.949 0 00-3.948-3.949H9.495A3.949 3.949 0 005.546 21.4v.603" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path><circle cx="12.072" cy="11.075" fill="none" r="3.556" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></circle></svg>
  )
}

const ViewBar: React.FC = () => {
  return (
    <div className='py-3 px-[4vw] flex justify-evenly border-b-[1px] border-solid border-gray-300'>
      <div className='cursor-pointer'>
        <GridIcon />
      </div>
      <div></div>
      <div className='cursor-pointer'>
        <UserIcon />
      </div>
    </div>
  )
}

const GridImages: React.FC = () => {
  return (
    <div className='grid gap-1 grid-cols-3 sm:gap-6'>
    
      <GridImagesItem />
      <GridImagesItem />
      <GridImagesItem />
      <GridImagesItem />
      <GridImagesItem />
      <GridImagesItem />
      <GridImagesItem />
      <GridImagesItem />
      <GridImagesItem />

      <GridImagesItem />
      <GridImagesItem />
      <GridImagesItem />
      <GridImagesItem />
      <GridImagesItem />
      <GridImagesItem />
      <GridImagesItem />
      <GridImagesItem />
    </div>
  )
}


const GridImagesItem: React.FC = () => {
  const [width, setWidth] = useState(0)
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if(ref.current) {
      setWidth(ref.current.offsetWidth);
    } 
    function updateSize() {
      if(ref.current) {
        setWidth(ref.current.offsetWidth);
      }     
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize)
  }, [width]);
  
  return (
    <div ref={ref} className='w-full bg-slate-300 grid place-content-center font-bold text-3xl text-white' style={{height: width}}>
      Image
    </div>
  )
}


const Banner: React.FC = () => {
  return (
    <div className='text-sm fixed bottom-0 min-h-fit w-full bg-black/80 px-5 py-4 text-white backdrop-blur-sm'>
      <div className=' cursor-pointer absolute p-4 top-0 right-4 text-gray-300'>x</div>
      <div className='flex flex-col'>
        <div className='flex gap-3 items-center w-full'>
          <div className=' w-14 h-14 rounded-full bg-white'></div>
          <div className='w-full'>
            <h1 className='font-semibold'>Entrar no Instagram</h1>
            <p className='min-w-full'>Entre para ver fotos e vídeos de amigos e descubra outras contas que você vai adorar.</p>
          </div>
        </div>
        <div className=' ml-16  mt-6 flex gap-2 flex-col'>
          <div className='flex justify-center cursor-pointer py-1 px-2 w-full bg-blue-400 text-white font-semibold rounded-md'>Entrar</div>
          <div className='flex justify-center cursor-pointer py-1 px-2 w-full text-blue-400  font-semibold rounded-md'>Cadastre-se</div>
        </div>
      </div>
    
      
    </div>
  )
}

const UserDataLarge: React.FC = () => {
  return (
    <div className='flex gap-5 mt-6 mb-11 '>
      <div className=' w-60'>
        <div className=' w-36 h-36 bg-slate-500 mx-auto rounded-full'></div>
      </div>
      <div>
        <div className='flex gap-3 items-end mb-5'>
          <div className='text-3xl font-light'>lenderson.macedo</div>
          <div className=' cursor-pointer w-fit px-2 bg-blue-400 py-1 grid place-content-center font-semibold rounded-lg text-white '>Seguir</div>
        </div>

        <div className='flex justify-between mb-5'> 
          <div className='flex gap-1'>
            <span className='font-semibold'>12</span>
            <p>publicações</p>
          </div>
          <div className='flex gap-1'>
            <span className='font-semibold'>139</span>
            <p>seguidores</p>
          </div>
          <div className='flex gap-1'>
            <span className='font-semibold'>7</span>
            <p>seguindo</p>
          </div>
        </div>

        <div className=''>
          <h1 className='font-semibold'>Lenderson Macedo</h1>
          <p className='text-gray-400 '>Criador(a) de conteúdo digital</p>
          <p>
            Programador e UI/Ux Designer (FullStack) <br />
            Busco melhorar o futuro tendo atitudes no presente, <br />
            Vamos mudar o mundo galera!
          </p>
          <p className='text-blue-700 font-semibold cursor-pointer'>blog.lenderson.com.br</p>
        </div>
      </div>
    </div>
  )
}
export default Home

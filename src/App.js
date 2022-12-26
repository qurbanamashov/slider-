import React, { useState } from 'react';
import './App.css';

function App() {
  const imgs = [
    {src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSo23S7pldjYuuayfbdmoEOEvUDfHb1CSL-YQ&usqp=CAU"},
    {src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTl06J2kgbHLfesMTHo-dbRQaDPA5DDloxUOw&usqp=CAU"},
    {src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrXfbdfhPzEnJO8EDTW1rwEvsle5fKAduSJQ&usqp=CAU"}
  ]
  const [imgvalue, setImgvalue] = useState(imgs[0])
  const fotoclick = (deyer) => {
    const slider = imgs[deyer]
    setImgvalue(slider)
  }
  return (
    <>


      <div className='foto-screen'>
        
        <img src={imgvalue.src}/>

      </div>

      <div className='fotos-flex'>

        {
          imgs.map((data, i) =>

            <div className='fotos-click'>

              <img src={data.src} onClick={() => fotoclick(i)} />

            </div>

          )

        }

      </div>
    </>
  )
}

export default App;

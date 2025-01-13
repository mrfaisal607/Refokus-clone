import React from 'react';
import Button from './Button'; 

function Product({ val ,idx,mover}) {
  return (
    <div className="w-full py-20 h-[23rem] text-white">
      <div onMouseEnter={()=>{mover(idx)}} className="max-w-screen-xl mx-auto flex items-center justify-between">
        <h1 className="text-6xl font-semibold">{val.title}</h1>
        <div className="dets w-1/3">
          <p className="pb-4">{val.description}</p>
          <div className='flex items-center gap-5'>

            {val.live && <Button />}
            {val.case && <Button title='Case Stdudy' />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;

import React, { useState } from 'react';
import AddCategory from './components/AddCategory';
import GiftGrid from './components/GifGrid';


const GifExpertApp = () => {

  const [categories, setCategories] = useState(['One Punch'])

  console.log(`Hola ${categories}`)

  return(
    <>
      <h2>GifExpertApp</h2>
      <hr/>
      <AddCategory setCategories = { setCategories }/>
      <ol>
        {
          categories.map( category => (
              <GiftGrid 
                key = { category }
                category = { category }
              />
            ))
        }
      </ol>

    </>

  )
}

export default GifExpertApp
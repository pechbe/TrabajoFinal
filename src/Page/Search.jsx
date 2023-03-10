// import React, { useState } from 'react'
// import allProductos from '../data/allProductos'
// import { arraySearch } from '../utils'
// import Card from '../Components/card'

// const Search = (handleClick) => {
//   const [population, setPopulation] = useState(allProductos)
//   const [count, setCount] = useState(allProductos.length)

//   const handleOnChange = async (e) => {
//     let value = e.target.value;
//     if (value.length > 2) {
//       let search = await arraySearch(population, value);
//       setPopulation(search)
//       setCount(search.length)
//     } else {
//       setPopulation(allProductos)
//       setCount(allProductos.length)
//     }
//   }

//   return (
//     <div>
//     <div>Count: {count}
//       <Search type="text" name="search" id="search" placeholder="Search Filter" onChange={handleOnChange}/>
//       </div>

//     <div className='box__container-principal'>
//         <div className="box__container-card">
//           <h3>Motores</h3>
//           <div className="box__section-card">

            
//           </div>
//         </div>
      
//     </div>

//     </div>
//   )
// }

// export default Search

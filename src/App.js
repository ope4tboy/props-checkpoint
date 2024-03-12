// // import logo from './logo.svg';
// // import './App.css';
// // import { BrowserRouter, Routes, Route } from 'react-router-dom'
// // import HomePages from './Pages/HomePages';
// // import AboutPages from './Pages/AboutPages';
// // import ContactsPages from './Pages/ContactsPages';
// // import ProjectsPages from './Pages/ProjectsPages';
// // import Testimonials from './Pages/Testimonials';


// // function App() {
// //   return (
// //     <>
// //       <BrowserRouter>
// //         <Routes>
// //           <Route path='/' element={<HomePages />} />
// //           <Route path='/about' element={<AboutPages />} />
// //           <Route path='/contacts' element={<ContactsPages />} />
// //           <Route path='/projects' element={<ProjectsPages />} />
// //           <Route path='/testimonials' element={<Testimonials />} />
// //         </Routes>
// //       </BrowserRouter>
// //     </>
// //   );
// // }

// export default App;

// import React from 'react'
// import Props from './components/Props'

// const App = () => {
//   return (
//     <div>
//       <Props name='Toheeb' job='web devloper' worth='millionaire' />
//       <Props name='David' job='frontend developer' worth='millionaire' />
//       <Props name='Nike' job='backend developer' worth='millionaire' />
//       <Props name='Femi' job='Data analyst' worth='millionaire' />
//       <Props name='Xtriana' job='Data Management' worth='millionaire' />
//       <Props name='Victor' job='hacker' worth='millionaire' />
//     </div>
//   )
// }

// export default App

// import React from 'react'
// import Tboy from './components/Tboy'

// const App = () => {
//   return (
//     <div>
//       <Tboy name='Toheeb' job='web devloper' salary={10000000}/>
//       <Tboy name='Nike' job='web devloper' salary={10000000} />
//       <Tboy name='David' job='web devloper' salary={10000000}/>
//       <Tboy name='Omoh' job='web devloper' salary={10000000}/>
//       <Tboy name='Victor' job='web devloper' salary={10000000}/>
//       <Tboy/>
    
//     </div>
//   )
// }

// export default App

import React from 'react'
import Card from './components/Card'
import './App.css'

const App = () => {
  const image1 = 'https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/04/4685192/1.jpg?1723'
  const image2 = 'https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/68/3355072/1.jpg?5389'
  const image3 = 'https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/98/1142352/1.jpg?6986'
  const image4 = 'https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/87/1218882/1.jpg?3148'
  const image5 = 'https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/20/2221591/1.jpg?8659'
    return (
    <div className='d-flex flex.wrap gap-3'>
      <Card image={image1} name='Mobile phone' description='Nec phone' price={150000} />
      <Card image={image2} name='Mobile phone' description='Techno phone' price={450000} />
      <Card image={image3} name='Mobile phone' description='David phone' price={550000} />
      <Card image={image4} name='Mobile phone' description='Femi phone' price={750000} />
      <Card image={image5} name='Mobile phone' description='Omoh phone' price={500000} />
    </div>
  )
}

export default App
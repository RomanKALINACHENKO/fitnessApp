import React from 'react'
import { Header } from './SearchPage/Header'
import { SpringGrid, measureItems, layout } from 'react-stonecutter'


const Grid = measureItems(SpringGrid, { measureImages: true })

const data = [
  {
    name: 'Dr. Hibbert',
    image: require('./images/2.png')
  },
  {
    name: 'Jasper',
    image: require('./images/2.png')
  },
  {
    name: 'Lenny',
    image: require('./images/2.png')
  },
  {
    name: 'Carl',
    image: require('./images/2.png')
  },
  {
    name: 'Moe',
    image: require('./images/2.png')
  },
  {
    name: 'Mayor Quimby',
    image: require('./images/2.png')
  },
  {
    name: 'Mr. Burns',
    image: require('./images/2.png')
  },
  {
    name: 'Krusty the Clown',
    image: require('./images/2.png')
  },
  {
    name: 'Chief Wiggum',
    image: require('./images/2.png')
  },
  {
    name: 'Waylon Smithers',
    image: require('./images/2.png')
  },
  {
    name: 'Kent Brockman',
    image: require('./images/2.png')
  },
  {
    name: 'Arnie Pye',
    image: require('./images/2.png')
  },
  {
    name: 'Disco Stu',
    image: require('./images/2.png')
  },
  {
    name: 'Willie',
    image: require('./images/2.png')
  },
  {
    name: 'Abe Simpson',
    image: require('./images/2.png')
  },
  {
    name: 'Professor Frink',
    image: require('./images/2.png')
  },
  {
    name: 'Seymour Skinner',
    image: require('./images/2.png')
  },
  {
    name: 'Homer Simpson',
    image: require('./images/2.png')
  }
]

const Card = ({ title, image }) => (
  <div className="Card">
    <h3>{title}</h3>
    <img src={image} alt={title} />
  </div>
)



export const SearchPage = () => {
  
   
    return (
      <div>
        <Header/>
        <div className="mainSearchPage ">

        <div className="nav-scroller bg-white box-shadow">
          <nav className="nav nav-underline">
            <a className="nav-link" href="!#">rwerwe 
            <span className="badge badge-pill bg-danger text-white align-text-top">
              245
              </span>
              </a>
            <a className="nav-link" href="!#">rwerwe
            <span className="badge badge-pill bg-danger text-white align-text-top">
              2
              </span>
            </a>
            <a className="nav-link" href="!#">rwerwe</a>
            <a className="nav-link" href="!#">rwerwe</a>
            <a className="nav-link" href="!#">rwerwe</a>
            <a className="nav-link" href="!#">rwerwe</a>
            <a className="nav-link" href="!#">rwerwe</a>
            <a className="nav-link" href="!#">rwerwe</a>

          </nav>
        </div>
        <div className="container d-flex ">
        <Grid
        
          component="ul"
          columns={3}
          columnWidth={115}
          gutterWidth={5}
          gutterHeight={5}
          layout={layout.pinterest}
          duration={800}
        >
          {data.map(({ name, image }) => (
            <li key={name} >
              <Card title={name} image={image} />
            </li>
          ))}
        </Grid>
        </div>
        
        </div>
      </div>
    )
  }
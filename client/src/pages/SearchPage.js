import React from 'react'
import { NavLink } from 'react-router-dom'
import { Header } from './SearchPage/Header'


const data = [
  {
    name: 'Dr. Hibbert',
    Program_logo: require('./images/2.png'),
    programType: 'for girls',
    authorLink: '!#',
    AuthorUsername: 'Roman Kalinachenko',
    aboutProgram: 'weiriewkrwejkrijweirjiwerjiwe irwej irjwe iwej ulwp ulrwe ul90weul  90lurq 9wru welru el ge 9',
    typeTraining: 'hard training'

  },
  {
    name: 'Dr. Hibbert',
    Program_logo: require('./images/2.png'),
    programType: 'for girls',
    authorLink: '!#',
    AuthorUsername: 'Roman Kalinachenko',
    aboutProgram: 'weiriewkrwejkrijweirjiwerjiwe irwej irjwe iwej ulwp ulrwe ul90weul  90lurq 9wru welru el ge 9',
    typeTraining: 'hard training'

  },
  {
    name: 'Dr. Hibbert',
    Program_logo: require('./images/2.png'),
    programType: 'for girls',
    authorLink: '!#',
    AuthorUsername: 'Roman Kalinachenko',
    aboutProgram: 'weiriewkrwejkrijweirjiwerjiwe irwej irjwe iwej ulwp ulrwe ul90weul  90lurq 9wru welru el ge 9',
    typeTraining: 'hard training'

  },
  {
    name: 'Dr. Hibbert',
    Program_logo: require('./images/2.png'),
    programType: 'for girls',
    authorLink: '!#',
    AuthorUsername: 'Roman Kalinachenko',
    aboutProgram: 'weiriewkrwejkrijweirjiwerjiwe irwej irjwe iwej ulwp ulrwe ul90weul  90lurq 9wru welru el ge 9',
    typeTraining: 'hard training'

  },
  {
    name: 'Dr. Hibbert',
    Program_logo: require('./images/2.png'),
    programType: 'for girls',
    authorLink: '!#',
    AuthorUsername: 'Roman Kalinachenko',
    aboutProgram: 'weiriewkrwejkrijweirjiwerjiwe irwej irjwe iwej ulwp ulrwe ul90weul  90lurq 9wru welru el ge 9',
    typeTraining: 'hard training'

  }
]
// нужно взять сортировку с моего прошлого проэкта который редактирование таблиц и сделать поиск и фильтрацию + заменить уже те категории что сверху
// сделать страницу деталей програмы и ещё нужно сделать кнопку добавления к юзеру програми, но перед этим изменить модель базы данных тоесть внести  ещё ключ чо будет связывать юзера и эту прогу
// также реализовать кнопку предосмотра на странице моя колекция при добавлении своего комплекса тренеровок и заносить его в БД а потом только научиться возвращать для страницы поиска

const Card = ({ title, image, authorLink, AuthorUsername, aboutProgram, typeTraining, programType  }) => (
  
    
  
  <div className="Card">
    <div className="headerCard">
      <NavLink to={"link to details"}>
      <h3>{title}</h3>
      </NavLink>
      <div className="header2Card">
        <p>
          Author: 
          <NavLink to={authorLink}>{AuthorUsername}</NavLink>
        </p>
        <p>
          Тип программы: 
          <NavLink  to={authorLink}>{programType}</NavLink>
        </p>
      </div>
    
    </div>
    
    <img src={image} alt={title} />
    <div className="bodyCard">
      <div>
        {aboutProgram}
      </div>
      <div>
        <p>Тип тренеровки: {typeTraining}</p>
      </div>
    </div>
    
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
        <div className="container d-flex  ">
        <ul className="">
      {data.map(({ name, Program_logo, programType, authorLink, AuthorUsername, aboutProgram, typeTraining  }) => (
          <li key={name} >
            <Card title={name} image={Program_logo} authorLink={authorLink}
             AuthorUsername={AuthorUsername} aboutProgram={aboutProgram} 
             typeTraining={typeTraining} programType={programType} />
          </li>
        ))}
      </ul>
        </div>
      
        

        </div>
      </div>
    )
  }
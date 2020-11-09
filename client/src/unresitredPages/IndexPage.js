import React from 'react'
import './temp.scss'
import {NavComponent} from './NavComponent'

export const  IndexPage = () => {
    return (
        <div className="IndexPage">
                        <NavComponent/>
            <div>
              <div>
                  <img src="logo.png" className = "mainLogo" alt="Logo" />
                  </div> 

            </div>

                    <div className="container py-5">
            <h1 className="text-white ">Особенности</h1>
            <p className="lead text-muted px-2">Взаимодействие Клиент и Тренер </p>
            <p className="lead text-light ">
                
                Зарегистрируясь вы получаете возможность создать свою тренеровку из своих упражнений,
            загрузив к ним картинки или не делая этого.
            Но одновременно с этим вы можете воспользываться услугами тренера. 
            Указав о себе нужные параметры такие как:
            <strong>Уровень тренерованости</strong>, <strong>Опыт</strong>, <strong>Физическое состояние в данный момент</strong> и так далее...<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;
            После этого ваш тренер составит вам програму тренеровок исходя из своего проффесионального опыта.
            А вы в свою очередь буде вести дневник и по желанию, передавать данные тренеру и он может или коректировать составленую програму или наблюдать и радоваться вашему успеху!
            С определённым интервалом будет проводиться статистика в виде графиков для удобного анализа проделаной роботы!  
                </p>
        </div>

            <div className="container py-5">
            <h1 className="text-white ">Передовые технологии взаимодействия</h1>
      <p className="lead text-muted px-2">Этот сайт является SPA</p>
      <p className="lead text-light ">SPA - single page application, то есть вы можете добавить его на своё рабочее пространство.<br/>
       И передавать данные OFFLINE. При подключении к интернету, эти данные автоматически сохранятся.</p>
            </div>


            <div className="container py-5">
            <h1 className="text-white ">Недостатки и Преимущества FitColab</h1>
      <p className="lead text-muted px-2 ">Преимущеста</p>
      <div className="lead text-light ">
	  	<ul className="liCircle" >
			<li className="text-light ">Простота использывания</li>
			<li  className="text-light  ">Малый вес приложения</li>
			<li  className="text-light ">Быстрая загрузка</li>
			<li  className="text-light ">Возможность создания своих упражнений</li>
			<li  className="text-light ">Возможность создания своей тренеровки</li>
			<li  className="text-light ">Наличие дневника</li>
			<li  className="text-light ">Продвинутая статистика</li>
			<li  className="text-light ">Возможность взаимодествовать как со своим тренером, <br/> так и с удаленным,так и без него</li>
		</ul>  
	  </div>
	  
	  <p className="lead text-muted px-2 ">Недостатки</p>
      <div className="lead text-muted ">
	  	<ul className="liCircle">
			<li  className="text-light ">Необходимость авторизации при певом запуске</li>
			<li  className="text-light ">Отсутствие перенастройки на другие языки</li>
			<li  className="text-light ">Отсутствие справочника упражнений и тренеровок</li>
			<li  className="text-light ">Недостаточная адаптация для людей с ограниченными возможностями</li>
		</ul>
	  </div>
            </div>

            <div className="container py-5">
            <h1 className="text-white ">Как пользоваться</h1>
      <p className="lead text-muted px-2">CHECK THIS PROMO VIDEO</p>
        <div className="container" id="videoBrand">
        <p className="m-0 text-center text-white">
        Засунуть сюда Видео пример как зарегаться и сделать акк
        </p>
        
        </div>
            </div>

            <footer className="py-5  BcBlack">
    <div className="container">
      <p className="m-0 text-center text-white">Copyright &copy; FitColab 2020</p>
    </div>
    
        </footer>

      </div>

      
 
    )
}
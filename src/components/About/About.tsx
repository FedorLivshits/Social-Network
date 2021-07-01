import React from 'react'
import './About.css'
import about_img from "../../images/about-img.png"
import advant_1 from "../../images/advant-1.png"
import advant_2 from "../../images/advant-2.png"
import login_img from "../../images/login-img.svg"


const About: React.FC = () => {
    return (
        <section className="about__content">
            <div className="advantages-box">
                <div className="advantages-box__info">
                    <div className="advantages-box__title">
                        Проект соц сети
                    </div>
                    <div className="advantages-box__text">
                        <p>Представленная социальная сеть является почти что венцом React приложений. В этой социальной
                            сети можно:
                        </p>
                        <p>
                            Во вкладке "Пользователи":<br/>
                            1. Добавлять других пользователей в друзья, а также их удалять (синхронизировано с сервером
                            и Вашим логином)<br/>
                            2. Смотреть профиль других пользователей (синхронизировано с сервером, каждый день новые
                            пользователи)<br/>
                            3. Переключаться между десятками страниц на каждой из которых можно увидеть до 12
                            потенциальных друзей<br/>
                            4. Переключение оформлено в юзабельный и симпатичный пагинатор<br/>
                            5. При слабом интернет соединении вы увидите специальный загрузчик, а при добавлении в
                            друзья, кнопка будет дизейблиться, чтобы не было соблазна нажать на неё 829 раз<br/>
                        </p>
                    </div>
                </div>
                <div className="advantages-box__images">
                    <img src={about_img} alt=""/>
                </div>
            </div>
            <div className="advantages-box advantages-box--reverse">
                <div className="advantages-box__info">
                    <div className="advantages-box__title">
                        Information Architect &
                        Visual Prototyping
                    </div>
                    <div className="advantages-box__text">
                        <p> Поиграться с логином
                            1. Обязательно придётся войти в свой (чужой) профиль, потому что посмотреть профиль свой
                            можно только, если вы залогинены, как иначе? Мы должны знать, кто вы. Редактирование также
                            только при успешном входе
                            2. Много раз введёте неправильные логин/пароль, придётся отправить на сервер капчу, она
                            здесь также успешно реализована
                            3. Надоест смотреть другие профили и редактировать свой - можно вылогиниться, но тогда не
                            найдетесь остаться на странице своего профиля</p>
                        <p>Планы на будущее
                            Развития UI социальной сети полностью зависит от развития серверной части. При реализации на
                            сервере упомянутых выше возможностей, они сразу же будут реализованы и здесь
                            Удачного просмотра чужих профилей! Это довольно забавно</p>

                    </div>
                </div>
                <div className="advantages-box__images">
                    <img src={advant_1} alt=""/>
                </div>

            </div>
            <div className="advantages-box">
                <div className="advantages-box__info">
                    <div className="advantages-box__title">
                        Проект соц сети
                    </div>
                    <div className="advantages-box__text">
                        <p>Представленная социальная сеть является почти что венцом React приложений. В этой социальной
                            сети можно:

                        </p>
                        <p>
                            Во вкладке "Пользователи":<br/>
                            1. Добавлять других пользователей в друзья, а также их удалять (синхронизировано с сервером
                            и Вашим логином)<br/>
                            2. Смотреть профиль других пользователей (синхронизировано с сервером, каждый день новые
                            пользователи)<br/>
                            3. Переключаться между десятками страниц на каждой из которых можно увидеть до 12
                            потенциальных друзей<br/>
                            4. Переключение оформлено в юзабельный и симпатичный пагинатор<br/>
                            5. При слабом интернет соединении вы увидите специальный загрузчик, а при добавлении в
                            друзья, кнопка будет дизейблиться, чтобы не было соблазна нажать на неё 829 раз<br/>
                        </p>
                    </div>
                </div>
                <div className="advantages-box__images">
                    <img src={advant_2} alt=""/>
                </div>
            </div>
            <div className="about__item-images">
                <img src={login_img} alt=""/>
                <div className="advantages-box__title-end">
                    "Спасибо!"
                </div>
            </div>
        </section>
    )
}


export default About;
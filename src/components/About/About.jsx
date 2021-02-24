import React from 'react'
import './About.css'
import about_img from "../../images/about-img.png"


const About = () => {
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
                            Во вкладке "Пользователи"
                            1. Добавлять других пользователей в друзья, а также их удалять (синхронизировано с сервером
                            и Вашим логином)
                            2. Смотреть профиль других пользователей (синхронизировано с сервером, каждый день новые
                            пользователи)
                            3. Переключаться между десятками страниц на каждой из которых можно увидеть до 12
                            потенциальных друзей
                            4. Переключение оформлено в юзабельный и симпатичный пагинатор
                            5. При слабом интернет соединении вы увидите специальный загрузчик, а при добавлении в
                            друзья, кнопка будет дизейблиться, чтобы не было соблазна нажать на неё 829 раз
                        </p>
                        <p>
                            Во вкладке "Профиль"
                            1. Загружать свою фотографию вместе заглушки-картинки - кнопка "Выбрать файл" (загрузка
                            производится на сервер)
                            2. Менять статус на любой, по желанию (почти на любой, стоит обязательная валидация). Для
                            этого нужно два раза кликнуть по статусу для редактирования, один раз в любое другое место
                            для отправки данных на сервер
                            3. Редактировать свой профиль начинай от имени, заканчивая контактами, все данные
                            валидируются, отправляются и хранятся на сервере
                            4. Писать посты о том, как прошёл день или о чём угодно, стоит валидация, но синхронизации с
                            сервером нет, нечего всем видеть как прошёл ваш день, мы уверены, что в нём ничего
                            интересного нет (шутка, просто возможности сервера ограничены и не позволяют отправлять на
                            него посты, посты хранятся в локальном стейте, тоже нормально)
                        </p>
                        <p> Во вкладке "Сообщения"
                            1. Иногда хочется пообщаться с умным человеком, мы предоставим такую возможность, можно
                            писать сообщения самому себе!
                            2. Мы были би рады доставить радость в виде общения, но поскольку сервер не поддерживает
                            (пока что) переписку между пользователя с сохранением сообщений на сервере, придётся писать
                            самом себе... Ну тоже неплохо!</p>

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
                    <img src={about_img} alt=""/>
                </div>
            </div>
        </section>
    )
}

export default About;
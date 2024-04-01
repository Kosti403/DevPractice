import { Module } from "../../entities/entitiens-moduleTypes";


export const modules: Module[] = [
  {
    id: "mod1",
    name: "Модуль 1",
    videos: [
      {
        title: "Вступительное видео",
        duration: "4 минуты 36 секунд",
      },
      {
        title: "Обзор курса - как проходит обучение",
        duration: "4 минуты 36 секунд",
      },
    ],
    list: [
      "Подготовка",
      "Основы веб-разработки (HTML&CSS)",
      "Основы JavaScript (Переменные, типы данных, операторы, функции и объекты)",
      "Javascript & DOM (Document Object Model)",
    ],
    description:
      "Научимся создавать веб-страницы с помощью HTML и CSS. Изучим основы JavaScript, чтобы делать страницы интерактивными. Научимся работать с DOM, что позволит нам изменять содержимое страницы и обрабатывать события. Этот модуль – старт в создании креативных и функциональных веб-страниц.",
  },
  {
    id: "mod2",
    name: "Модуль 2",
    videos: [],
    list: [
      "Основы React",
      "Способы подключения React к проекту",
      "Знакомство с JSX",
      "Виды компонентов",
      "Стилизация компонентов",
      "Обмен данными в приложении",
      "Обработка событий",
      "Жизненный цикл компонентов",
      "Работа с API",
      "Работа с формами",
    ],
    description:
      "В модуле вы изучите основы JavaScript-библиотеки React, которая позволяет создавать интерфейсы. Разберемся, как подключать React к своим проектам через различные методы, изучим JSX, научимся работать с состоянием, обрабатывать события, а также получать и отправлять данные на сервер.",
  },
  {
    id: "mod3",
    name: "Модуль 3",
    videos: [],
    list: [
      "React Hooks",
      "Кастомные Hooks",
      "Рефы",
      "useState, useEffects, useContext, для управления состоянием и выполнения побочных эффектов",
    ],
    description:
      "React Hooks – это своего рода магия, которая позволит нам удобно работать с состоянием и взаимодействовать с данными в наших React-проектах. Мы разберемся с разными видами 'крючков' - таких как useState, useEffect и useContext, которые позволят без труда контролировать информацию и внедрять полезные функции в ваши веб-приложения.",
  },
  {
    id: "mod4",
    name: "Модуль 4",
    videos: [],
    list: [
      "Продвинутое управление состоянием приложения",
      "React context",
      "Архитектура Flux",
      "Hooks useReducer",
      "Знакомство с библиотекой Redux",
      "Знакомство с библиотекой MobX",
    ],
    description:
      "В этом модуле мы рассмотрим разные методы и инструменты для более эффективного контроля состояния вашего приложения в React. Познакомимся с разными подходами и инструментами, которые помогут выбрать наилучший способ управления состоянием в ваших проектах.",
  },
  {
    id: "mod5",
    name: "Модуль 5",
    videos: [],
    list: [
      "Продвинутые концепции",
      "Асинхронные запросы к API",
      "Анимация",
      "Принципы интеграции с другими JS-библиотеками",
      "Изучения работы React “под капотом”",
    ],
    description:
      "Многие веб-приложения должны взаимодействовать с разными данными. В этом модуле мы научимся выполнять запросы к внешним источникам данных, что позволит получать информацию с других серверов. А также углубимся в создание анимаций, что сделает наши интерфейсы более привлекательными.",
  },
  {
    id: "mod6",
    name: "Модуль 6",
    videos: [],
    list: ["Soft skills/job interview"],
    description:
      "Никакие технические навыки не пригодятся, если у разработчика нет Soft skills. В последнем модуле курса мы разберем, какие навыки нужны для более продуктивной работы в команде. Разберем важность проектов в портфолио и CV. А также каждый студент попробует пройти свое первое техническое собеседование, чтобы 'прощупать почву'.",
  },
];
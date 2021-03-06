![title](/readme_images/navbar.png)

# Weather App ([Посмотреть демо](https://izmaelmag.github.io/resumeio_weather_test_demo/))
Тестовое задание для Resume.io

### Установка и запуск

Клонирование репозитория
```bash
git clone git@github.com:izmaelmag/resumeio_weather_test.git && cd resumeio_weather_test
```

Установка пакетов и запуск сервера на http://localhost:8080
```bash
yarn && yarn start
```

Билд в production
```bash
yarn build
```

## Процесс работы

Чтобы освежить знания о новых возможностях библиотек, я решил написать сборку самостоятельно вместо использования Create React App.

Для типизации использовал Flow, так как Typescript требует больше времени на конфигурацию.

Вебпак настроен на сборку для разработки и продакшена.

Для трекинга времени использовал [Timely App](https://timelyapp.com/). Суммарное время работы по активности в редакторе и консоли составило **22 часа**. Плюс еще суммарно час на отладку верстки в браузере и час на написание этого отчета.

### Организация кода

Глобальные стили, стили текста, константы цвета, методы для адаптивности и сниппеты анимаций выделены в файл `source/styles.js`. 

Стили компонентов описаны в конце файла и обернуты в **//#region**, чтобы их можно было скрыть.

Для лейаута страницы и карточек использовал CSS Grid Layout и легковесную библиотеку *styled-css-grid*.

Имена styled компонентов начинаются со знака **$**, чтобы отличать их от функциональных компонентов.

Вместо redux использовал контекст, так как в данном случае очень мало работы с данными. В некоторых местах добавил хуки вместо React.Component.

Фейковые данные для работы поиска и отображения карточек берутся из `source/data.js`.

Типы Flow вынесены в файл `source/typeDefs.js`, чтобы не мешать внутри компонентов.

SVG иконки загружаются как inline svg, чтобы с ними можно было работать через стили. Растровая иконка облака загружается как base64.

Шрифты подключены не через styled components, а отдельным css файлом. Проблема была в том, что styled components почему-то перезапрашивала шрифты при каждой необходимости, это нагружает трафик и вызывает эффект [FOIT](https://css-tricks.com/fighting-foit-and-fout-together/).

### Тестирование
Верстка протестирована в браузерах
* ✔️ **Chrome 78.0** — Windows 10, iOS 13, MacOS 10.15;
* ✔️ **Firefox 70, 71beta** — Windows 10, MacOS 10.15; 
* ✔️ **Safari 13.0** — isOS и MacOS: 70.0;
* ✔️ **Edge 44** — Windows 10; 

### Детали

#### Адаптив
Сверстал адаптивные версии для планшетов и телефонов, брейкпоинты — 768 и 1024px. В осоновном адавтиность касалась размеров текста и отступов. В мобильной версии заголовок, поиск и картоки растянуты на всю ширину, результаты поиска слегка вызодят за границы карточек, чтобы не сливаться с ними, а разделители между городами в поиске занимают всю ширину.

* [Мобильный список](https://github.com/izmaelmag/resumeio_weather_test/blob/master/readme_images/localhost_8080_(iPhone%206_7_8).png)
* [Мобильный поиск](https://github.com/izmaelmag/resumeio_weather_test/blob/master/readme_images/localhost_8080_(iPhone%206_7_8)%20search.png)

Для упрощения написания адаптивных стилей написал Media с методами, принимающими template со стилями. Это позволяет описывать адаптив, сохраняя стиль styled компонентов
```jsx
...
  const Media = {
    mobile: (cssSnippet: string[]) => css`
      @media screen and (max-width: 767px) {
        ${cssSnippet}
      }
    `,

    tablet: (cssSnippet: string[]) => css`
      @media screen and (min-width: 768px) and (max-width: 1023px) {
        ${cssSnippet}
      }
    `
  };
...
  ${Media.tablet`
    padding: 20px 80px 20px 20px;
  `}

  ${Media.mobile`
    padding: 16px 80px 16px 20px;
  `}
...
```
---
#### Лейаут
Если для настройки лейатуа компонента мне нужна была дополнительная разметка, я описывал эти компоненты как свойства основного styled компонента. Это помогает понять, что, например, **$Card.details** — это вспомогательная часть компонента **$Card**, а не самостоятельный компонент. Знак доллара в начале дает понять, что и то и другое — части оформления, а не логики.
```jsx
...
  <$Card isUnmounting={isUnmounting}>
    <$Card.main>
      {some components}
    </$Card.main>

    <$Card.details>
      {some components}
    </$Card.details>
  </$Card>
...
  const $Card = styled.div`...`;
  
  $Card.main = styled.div`...`;
  $Card.details = styled.div`...`;
...
```
---
#### Поиск
Так как логику работы поиска нужно было реализоввать, опираясь только на дизайн, я сделал следующее:
1. Поиск начинается только при нажатии на кнопку поиска или на Enter
2. В UI не показано и не описано как скрыть список городов и уведомление о не найденном городе. Поэтому список скрывается при выборе города и изменении строки поиска
---
#### Анимации
Чтобы элемента плавно появлялись и исчезали, добавил для них анимации

![Card appear](/readme_images/card_appear.gif)

![Card disappear](/readme_images/card_disappear.gif)

![Top content](/readme_images/header_appear.gif)

![Search results](/readme_images/search_results.gif)
---
### Что можно улучшить
1. Написать тесты. В рамках трехдневного тестового задания я бы не успел сделать их нормально.
2. Использовать Typescript вместо Flow. Typescript намного функциональнее и удобнее Flow, плюс с ним хорошо интегрирован VSCode.
3. Подключить Redux для работы с OpenWeatherMap API. Я ознакомился с этим API, но написание логики работы с ним заняло бы еще два дня_
4. Написать комментарии к хелперам стилей и компонентам со списком пропсов и назначением. В таком маленьком приложении это не нужно. А если подключить Typescript, он уже будет в некотором роде документацией к пропсам.
5. Настроить тулзы для UI Kit вроде react-styleguidist.
6. Скорее всего некоторые части css можно написать короче и поизящнее.
7. Добавить stylelint и повесить его вместе с проверкой flow на прекоммит.
8. Настроить темизацию и добавить поддержку темной темы устройства.

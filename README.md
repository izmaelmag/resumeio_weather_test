# Тестовое для resume.io

## Установка и запуск

Клонирование репозитория
```bash
git clone git@github.com:izmaelmag/resumeio_weather_test.git && cd resumeio_weather_test
```

Установка пакетов и запуск сервера
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

### Организация кода

Глобальные стили, стили текста, константы цвета, методы для адаптивности и сниппеты анимаций выделены в файл `source/styles.js`. 

Стили компонентов описаны в конце файла и обернуты в **//#region**, чтобы их можно было скрыть.

Имена styled компонентов начинаются со знака **$**, чтобы отличать их от функциональных компонентов.

Вместо redux использовал контекст, так как в данном случае очень мало работы с данными. В некоторых местах добавил хуки вместо React.Component.

Фейковые данные для работы поиска и отображения карточек берутся из `source/data.js`.

Типы Flow вынесены в файл `source/typeDefs.js`, чтобы не мешать внутри компонентов.

SVG иконки загружаются как inline svg, чтобы с ними можно было работать через стили. Растровая иконка облака загружается как base64.

Шрифты подключены не через styled components, а отдельным css файлом. Проблема была в том, что styled components почему-то перезапрашивала шрифты при каждой необходимости, это нагружает трафик и вызывает эффект [FOIT](https://css-tricks.com/fighting-foit-and-fout-together/).

### Детали

##### Адаптив
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
##### Лейаут
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
##### Поиск
Так как логику работы поиска нужно было реализоввать, опираясь только на дизайн, я сделал следующее:
1. Поиск начинается только при нажатии на кнопку поиска или на Enter
2. В UI не показано и не описано как скрыть список городов и уведомление о ненайденном городе. Поэтому списко скрывается при выборе города и изменении строки поиска

##### Анимации
Чтобы элемента плавно появлялись и исчезали, добавил для них анимации

![Card appearance](/animations_demo/card_appear.gif)

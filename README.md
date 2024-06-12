## Задачи

1. Создайте базовую заготовку React-приложения любым удобным для вас способом
2. Разделите [страницы](https://www.notion.so/617b323ef4434c34b7906c9270015da2?pvs=21), [компоненты](https://www.notion.so/617b323ef4434c34b7906c9270015da2?pvs=21) между собой (кто чем будет заниматься) и разработайте сайт команды
3. В проекте нужно использовать знания и навыки, полученные в ходе курса
> [!IMPORTANT]
> Для стилизации разрешается использовать любые css фреймворки (например, bootstrap) или любой кастомный css  
> Расположение блоков (шаблоны страниц) на ваше усмотрение, важно наличие необходимых компонентов  
> C помощью Pull Request все совмещается в один проект на **GitHub**  
> Итоговый проект необходимо выгрузить на хостинг **GitHub Pages**
## Структура сайта

Сайт состоит из нескольких страниц

### Минимальный набор страниц

- **Главная**
  - Отобразить информацию о команде (минимум - просто текстовая информация)
  - Представить каждого участника команды (список с карточками)
- **Страница участника**
  - Отобразить информацию о человеке
    - Имя, фамилия
    - Возраст
    - О себе
    - Фото (если нет фотографии, то любимая картинка)
    - Социальные сети
    - Чем занимался в разработке данного проекта
  - Использовать общие компоненты
    - **Progress**
      Указываем, какие технологии знает человек и на сколько процентов
    - **Badge**
      Например можно пометить, что человек является тимлидом
    - **Свой компонент** (по желанию)
    - **Slider** (по желанию)
      Например, вывести в slider работы из портфолио
  - Реализовать возможность _добавления в избранное_ (кнопка)  
    Добавление происходит в localStorage, избранные участники должны отображаться в виде карточек на странице "**Избранные**".  
    Также должна быть возможность **удалить из избранных**.
- **Избранные**
  - Вывод избранных участников из localStorage (список с **карточками**)
  - Возможность удаления из избранного

### Обязательные компоненты

Вы можете улучшать текущие компоненты на свое усмотрение, но необходимо сохранить минимальный базовый функционал.

- **Progress**
  - Компонент принимает:
	  - Процент, на который будет заполнена шкала
    - Название шкалы  
      Например HTML. Тогда шкала будет показывать уровень владения HTML.
    - Цвет  
      		![Пример](https://file.notion.so/f/f/4c8a7a76-f839-431a-aed6-1f9189e1c691/0af5b550-d073-45e7-91fc-36c5299ab5df/Untitled.png?id=295102e8-3a0e-4dca-ae87-8bfe950fde5a&table=block&spaceId=4c8a7a76-f839-431a-aed6-1f9189e1c691&expirationTimestamp=1718251200000&signature=F4orKXl_APej9L64btVLYVWcfAwfo7pEyXD32kE9K-w&downloadName=Untitled.png)  
<sub>Пример реализации</sub>
  - Дополнительно\*
		Добавить передачу параметра type (например, bar, circle и тд)  
		С помощью него можно будет выбрать тип

	![Пример](https://file.notion.so/f/f/4c8a7a76-f839-431a-aed6-1f9189e1c691/0847cc1f-ba3d-4466-a880-0c25bef6c7d2/Untitled.png?id=3d29b962-2665-4d76-9894-1169870ea953&table=block&spaceId=4c8a7a76-f839-431a-aed6-1f9189e1c691&expirationTimestamp=1718251200000&signature=vNLoozt2IKfcoCp-6991ptLKGOG-sQGVrYzeIiHngio&downloadName=Untitled.png)  
<sub>type = bar</sub>

	![Пример](https://file.notion.so/f/f/4c8a7a76-f839-431a-aed6-1f9189e1c691/f758239d-43b5-472d-833d-21eb4a987a03/Untitled.png?id=7097ff08-fed6-48f7-90df-016f70547915&table=block&spaceId=4c8a7a76-f839-431a-aed6-1f9189e1c691&expirationTimestamp=1718251200000&signature=SRKUvuQgCu6bBYctiTdBdyzMiwTGkeRK_XDQZGLmN4I&downloadName=Untitled.png)  
<sub>type = circle</sub>

- **Button**
  - Компонент принимает:
    1. Цвет
    2. Функцию, при клике
    3. Название кнопки
    4. Тип (скругленные углы или квадратные) \*_дополнительно_
- **Карточка человека**
  - Отображает
    - Имя, фамилия
    - Возраст
    - Фотография (если нет фотографии, то любимая картинка)
    - О себе (2-3 предложения)
    - Кнопка "открыть"
    - Кнопка "добавить в избранное"
- **Breadcrumbs**  
  Хлебные крошки до текущей страницы  
  ![Пример](https://file.notion.so/f/f/4c8a7a76-f839-431a-aed6-1f9189e1c691/560f8ff5-907d-4edf-ab97-4875e0ee3dcf/Untitled.png?id=a34b052a-ea19-45f1-ab15-5a54cd0eb4fd&table=block&spaceId=4c8a7a76-f839-431a-aed6-1f9189e1c691&expirationTimestamp=1718251200000&signature=l2V2MMhLAU75UanwvjIHJ7MXrofxlErvaGH2gUuO_64&downloadName=Untitled.png)
- **Badge**
  - Компонент принимает:
    - Цвет
    - Контент
       ![Пример](https://file.notion.so/f/f/4c8a7a76-f839-431a-aed6-1f9189e1c691/2be01eb3-bb4c-4baf-80c3-60dd06781756/Untitled.png?id=b148aa25-8e39-4aca-b9af-f2939dc6ff09&table=block&spaceId=4c8a7a76-f839-431a-aed6-1f9189e1c691&expirationTimestamp=1718251200000&signature=xGqnPVYSJATmcqIIdJzi6WCAuAOv-yeIFGHn5SDUpkg&downloadName=Untitled.png)  
      ![Пример](https://file.notion.so/f/f/4c8a7a76-f839-431a-aed6-1f9189e1c691/ceee1672-6d6b-4572-a7ad-a8b78a38b272/Untitled.png?id=1eb0c3c4-0d4b-41cd-af95-c3a1510e2ed4&table=block&spaceId=4c8a7a76-f839-431a-aed6-1f9189e1c691&expirationTimestamp=1718251200000&signature=G1hNI0W5cFv2QTyCdgH3WgrFnzmCXAh9lsNebRMcCJE&downloadName=Untitled.png)
- **Navbar**  
  Навигационное меню со всеми страницами сайта  
  ![Пример](https://file.notion.so/f/f/4c8a7a76-f839-431a-aed6-1f9189e1c691/03e3e6fa-899b-43d3-973e-52867cc0076a/Untitled.png?id=fa2fc766-8c50-4f9f-ad64-c78c076498da&table=block&spaceId=4c8a7a76-f839-431a-aed6-1f9189e1c691&expirationTimestamp=1718251200000&signature=35unpYW0cFeNZzI_gS33PXo6sIHW79gEnu9nGpRc1UU&downloadName=Untitled.png)

### Компоненты по желанию (будет плюсом):

- **Свой компонент**  
  Если у вас есть идеи для своих компонентов, то вы можете их реализовать :)
- **Slider**  
  Слайдер с какими-либо элементами (например, работы из портфолио)  
  ![Пример](https://file.notion.so/f/f/4c8a7a76-f839-431a-aed6-1f9189e1c691/51620f77-57a3-491c-b538-ef491f795c17/Untitled.png?id=caa15a56-e8a0-4183-97a7-0879166d247d&table=block&spaceId=4c8a7a76-f839-431a-aed6-1f9189e1c691&expirationTimestamp=1718251200000&signature=5uSe7OF5bLNyn9Su_78XW_JC--ziOX9QU2JvtEKicpw&downloadName=Untitled.png)

> [!WARNING]
>Все компоненты должны быть в **единственном экземпляре**, без дублирования.  
>Например, после того, как вы разработали **progress**, все участники команды используют его, а не разрабатывают свой.
## Критерии оценивания

- Качество кода
- Универсальные компоненты
- Архитектура
- Использование [PropTypes](https://www.npmjs.com/package/prop-types)
- Визуальное оформление
- Собственные компоненты (креативность компонентов и их количество)

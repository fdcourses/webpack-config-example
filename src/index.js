// const TextBlock = require('./TextBlock');

// const root = document.getElementById('root');

// const reactElem = React.createElement(TextBlock, {
//   articleTitle: 'ЗАголовок',
//   firstPar: 'lorem ipsum',
//   headingLevel: 4
// });

// const reactElem1 = React.createElement(TextBlock);
// const reactElem2 = React.createElement(TextBlock);

// ReactDOM.render(reactElem, root);

// const pow = require('./MyMath');
import MyMath from './MyMath' // - импорт значения по умолчанию

import { pow } from './MyMath'; // - импорт именнованный

console.log(pow(10, 3));

console.log(MyMath.div(10,2));

// import MyMath, * as NonDefaultIMports from './MyMath'; - все в куче импортируем
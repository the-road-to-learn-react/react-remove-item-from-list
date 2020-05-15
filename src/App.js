import React from 'react';

const initialList = [
  {
    id: 'a',
    firstname: 'Robin',
    lastname: 'Wieruch',
    year: 1988,
  },
  {
    id: 'b',
    firstname: 'Dave',
    lastname: 'Davidds',
    year: 1990,
  },
];

// ** with useState Hook ** //

// const App = () => {
//   const [list, setList] = React.useState(initialList);

//   function handleRemove(id) {
//     const newList = list.filter((item) => item.id !== id);

//     setList(newList);
//   }

//   return <List list={list} onRemove={handleRemove} />;
// };

// const List = ({ list, onRemove }) => (
//   <ul>
//     {list.map((item) => (
//       <Item key={item.id} item={item} onRemove={onRemove} />
//     ))}
//   </ul>
// );

// const Item = ({ item, onRemove }) => (
//   <li>
//     <span>{item.firstname}</span>
//     <span>{item.lastname}</span>
//     <span>{item.year}</span>
//     <button type="button" onClick={() => onRemove(item.id)}>
//       Remove
//     </button>
//   </li>
// );

// ** with useReducer Hook ** //

// const listReducer = (state, action) => {
//   switch (action.type) {
//     case 'REMOVE_ITEM':
//       return state.filter((item) => item.id !== action.id);
//     default:
//       throw new Error();
//   }
// };

// const App = () => {
//   const [list, dispatchList] = React.useReducer(
//     listReducer,
//     initialList
//   );

//   function handleRemove(id) {
//     dispatchList({ type: 'REMOVE_ITEM', id });
//   }

//   return <List list={list} onRemove={handleRemove} />;
// };

// const List = ({ list, onRemove }) => (
//   <ul>
//     {list.map((item) => (
//       <Item key={item.id} item={item} onRemove={onRemove} />
//     ))}
//   </ul>
// );

// const Item = ({ item, onRemove }) => (
//   <li>
//     <span>{item.firstname}</span>
//     <span>{item.lastname}</span>
//     <span>{item.year}</span>
//     <button type="button" onClick={() => onRemove(item.id)}>
//       Remove
//     </button>
//   </li>
// );

// ** with useState Hook and complex object ** //

// const App = () => {
//   const [listData, setListData] = React.useState({
//     list: initialList,
//     isShowList: true,
//   });

//   function handleRemove(id) {
//     const newList = listData.list.filter((item) => item.id !== id);

//     setListData({ ...listData, list: newList });
//   }

//   if (!listData.isShowList) {
//     return null;
//   }

//   return <List list={listData.list} onRemove={handleRemove} />;
// };

// const List = ({ list, onRemove }) => (
//   <ul>
//     {list.map((item) => (
//       <Item key={item.id} item={item} onRemove={onRemove} />
//     ))}
//   </ul>
// );

// const Item = ({ item, onRemove }) => (
//   <li>
//     <span>{item.firstname}</span>
//     <span>{item.lastname}</span>
//     <span>{item.year}</span>
//     <button type="button" onClick={() => onRemove(item.id)}>
//       Remove
//     </button>
//   </li>
// );

// ** with useReducer Hook and complex object ** //

const listReducer = (state, action) => {
  switch (action.type) {
    case 'REMOVE_ITEM':
      return {
        ...state,
        list: state.list.filter((item) => item.id !== action.id),
      };
    default:
      throw new Error();
  }
};

const App = () => {
  const [listData, dispatchListData] = React.useReducer(listReducer, {
    list: initialList,
    isShowList: true,
  });

  function handleRemove(id) {
    dispatchListData({ type: 'REMOVE_ITEM', id });
  }

  if (!listData.isShowList) {
    return null;
  }

  return <List list={listData.list} onRemove={handleRemove} />;
};

const List = ({ list, onRemove }) => (
  <ul>
    {list.map((item) => (
      <Item key={item.id} item={item} onRemove={onRemove} />
    ))}
  </ul>
);

const Item = ({ item, onRemove }) => (
  <li>
    <span>{item.firstname}</span>
    <span>{item.lastname}</span>
    <span>{item.year}</span>
    <button type="button" onClick={() => onRemove(item.id)}>
      Remove
    </button>
  </li>
);

export default App;

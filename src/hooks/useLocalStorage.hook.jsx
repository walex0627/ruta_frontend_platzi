import React from 'react';


function useLocalStorage(itemName, initialValue) {



  const [state, dispatch] = React.useReducer(reducer, initialState({initialValue}))

  const {
    item,
    loading,
    error,
  } = state

  // Action Creators
  const onError = (error) => dispatch({type: actionTypes.error, payload: error})
  const onSuccess = (item) => dispatch({type: actionTypes.success, payload: item})
  const onSave = (item) => dispatch({type: actionTypes.save, payload: item})


  React.useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName)

        let parsedItem;

        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue))
          parsedItem = initialValue
          onSave(parsedItem)
          // setItem(parsedItem)
        } else {
          parsedItem = JSON.parse(localStorageItem)
          onSave(parsedItem)
          // setItem(parsedItem)
        }
        onSuccess(parsedItem)
        // setLoading(false)
      } catch (error) {
        onError(error)
      }
    }, 3000);
  }, []);

  const saveItem = (newItem) => {
    try {
      localStorage.setItem(itemName, JSON.stringify(newItem));
      // setItem(newItem)
      onSave(newItem)
    } catch (error) {
      onError(error)
    }
  }


  return {
    item,
    saveItem,
    loading,
    error
  }
}


  const initialState = ({initialValue})=>({
    item: initialValue,
    loading: true,
    error: false,
  })

    const actionTypes ={
      error: 'ERROR',
      success: 'SUCCESS',
      save: 'SAVE',
    }

  const reducerObject = (state, payload) =>({
  [actionTypes.error]: {
    ...state,
    error: true,
    loading:false
  },
    [actionTypes.success]: {
    ...state,
    error: false,
    loading:false,
    item: payload,
  },
  [actionTypes.save]: {
    ...state,
    error: false,
    loading:false,
    item: payload,
  }})



  const reducer= (state, action) =>{
    return reducerObject(state,action.payload)[action.type] || state;
  }

export { useLocalStorage }
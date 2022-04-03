export const AppReducer =(state,action) =>{
    switch (action.type) {
      case'Delate_Transaction':
      return{
          ...state,
          transaction:state.transaction.filter(transaction=>transaction.id!==action.playload)
      }
      case'Add_Transaction':
      return{
         
          transaction:[...state.transaction,action.playload]
      }
    
    }
}
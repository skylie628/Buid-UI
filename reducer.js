const init = {
    cars : ['BWM','Poser',"Lambo"]
}
export default function reducer(state = init, action ,args){
    switch (action) {
        case 'DELETE' :
            state.cars = state.cars.filter((car)=>car !== args[0])
            return state
        case 'ADD' :
            state.cars = [...state.cars,args[0]]
            return state
        default :
            return state
    }

}
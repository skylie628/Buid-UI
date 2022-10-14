export default function html([first,...strings],...values){
    return values.reduce(
        (acc,cur)=>acc.concat(cur,strings.shift()),
        [first]
    ).filter(x=> x && x !== true || x == 0).join('')
}

export function createStore(reducer){
    let state = reducer()
    const roots  = new Map() // contains object have component to render to view {element : function ,.....}
    function render(){
        for ( const [root,component] of roots){
            console.log(component)
            const output = component()
            root.innerHTML = output
        }
    }
    return {
        attach(component,root){
            roots.set(root,component)
            render()
        },
        /*
         function connect(selector) {
            return function(component) {
                return function(props,...args){
                    var object = {...pros,selector(state),...args}
                    return component(object)
                }
            }
         }
        */
        connect(selector = (state) => state){
            return component => (props, ...args) =>{
            return component(Object.assign({},props,selector(state),...args)) }
            // obj = {...pros,...state,...args}; component(obj); 
        },
        dispatch(action,...args){
            state = reducer(state,action,args)
            render()
        }

    }
}
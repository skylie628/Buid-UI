export default function html([first,...strings],...values){
    console.log(strings);
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
            const output = component()
            root.innerHTML = output
        }
    }
    return {
        attach(component,root){
            roots.set(root,component)
            render()
        },
        connect(selector = state => state){
            return component => (props, ...args) =>
            component(Object.assign({},props,selector(state))) // obj = {props : selector(state)} 
        }
    }
}
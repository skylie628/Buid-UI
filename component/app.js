import html from '../core.js'
import { connect } from '../store.js'
const connector = connect()
function App(pros){
    return html`
    <ul>
    ${pros.cars.map(car => `<li>${car}</li>  <button onclick = dispatch('DELETE','${car}')>Delete</button>`)}
    </ul>
    <button onclick = dispatch('ADD','Car') >Add Car </button>
    `
}

export default connector(App)
//
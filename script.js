import html from './core.js'
const cars =['BMW','Porsche','Mercedes']
const isSuccess = false
const output = html`
<h1>${0}</h1>
<ul>
${cars.map(car => `<li>${car}</li>`)}
</ul>
`
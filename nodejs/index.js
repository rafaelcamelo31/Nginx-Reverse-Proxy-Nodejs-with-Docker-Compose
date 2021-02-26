const express = require('express')
const faker = require('faker')
const app = express()
const port = 3000
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
}

const mysql = require('mysql')
const connection = mysql.createConnection(config)

app.get('/', (req, res) => {
    const name = faker.name.findName()
    connection.query(`INSERT INTO people(name) values('${name}')`)

    connection.query(`SELECT * FROM people`, (err, rows, fields) => {
        if (err) throw err
        res.send(`
        <h1>Full Cycle Rocks!</h1>
          <ul>
            ${rows.length > 0 ? rows.map(row => `<li>${row.name}</li>`).join('') : ''}
          </ul>
        `)
    })
})

app.listen(port, () => {
    console.log(`Rodando na porta ${port}`)
})
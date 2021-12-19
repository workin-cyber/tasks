const Tasks = require('./tasks')

module.exports = app => {

    app.get('/task', (req, res) =>
        res.send(Tasks.read())
    )

    app.post('/task', (req, res) =>
        res.send(Tasks.create(req.body))
    )

    app.put('/task/:id', (req, res) =>
        res.send(Tasks.update(req.params.id))
    )

    app.delete('/task/:id', (req, res) =>
        res.send(Tasks.delete(req.params.id))
    )

}
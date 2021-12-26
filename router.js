const Tasks = require('./BL/TaskController')

module.exports = app => {

    app.get('/task', async (req, res) =>
        res.send(await Tasks.read())
    )

    app.post('/task', async (req, res) => {
        try {
            res.send(await Tasks.create(req.body))
        } catch (error) {
            res.send({
                code: 400,
                message: error.message || error
            })
        }
    })

    app.put('/task/:id', async (req, res) =>
        res.send(await Tasks.update(req.params.id))
    )

    app.delete('/task/:id', async (req, res) =>
        res.send(await Tasks.delete(req.params.id))
    )

}
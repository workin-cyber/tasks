require('./db')
const TaskModel = require('./models/TaskModel')

function create(data) {
    return TaskModel.create(data)
}

function read() {
    return TaskModel.find()
}

function update(_id, newData) {
    return TaskModel.findByIdAndUpdate(
        _id,
        newData,
        { new: true, runValidators: true }
    )
}

function remove(_id) {
    return TaskModel.findByIdAndDelete(_id)
}

//EXPORT
module.exports = {
    read,
    create,
    update,
    delete: remove
}
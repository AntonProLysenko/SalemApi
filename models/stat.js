const mongoose = require('mongoose')
const {Schema, model} = mongoose

const statSchema = new Schema({
  visitors: [[]],
  responce:""
},{timestamps: true
})

const Statistic = model("Statistic", statSchema)

module.exports = Statistic
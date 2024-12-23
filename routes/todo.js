const express = require("express")
const router = express.Router()            //creating sub route.. replaced app with router (app.get to router.get)       
const todo = require("../controllers/todo")

router.get("/", todo.homeController)

router.get("/add-todo", todo.addTodoFomeController)

router.get("/update-todo", todo.updateTodoFormController)

router.get("/delete-todo", todo.deleteTodoFormController)

router.post("/add-todo",todo.addTodoController)

router.post("/update-todo/:id" , todo.updateTodoController)

router.get("/confirm-delete" , todo.deleteTodoController)

module.exports = router
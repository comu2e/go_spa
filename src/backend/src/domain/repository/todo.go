package repository

import "domain/model"

type TodoRepository interface {
	Create(todo *model.Todo) (*model.Todo, error)
	FindBy(id int) (*model.Todo, error)
	Update(todo *model.Todo) (*model.Todo, error)
	Delete(todo *model.Todo) error
}

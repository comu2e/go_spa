package handler

import (
	"net/http"
	"sample/usecase"
	"strconv"

	"github.com/labstack/echo"
)

type TodoHandler interface {
	Post() echo.HandlerFunc
	Get() echo.HandlerFunc
	Put() echo.HandlerFunc
	Delete() echo.HandlerFunc
}
type todoHandler struct {
	todoUsecase usecase.TodoUsecase
}

func NewTodohandler(todoUsecase usecase.TodoUsecase) TodoHandler {
	return &todoHandler{todoUsecase: todoUsecase}
}

type requestTodo struct {
	Title   string `json:"title"`
	Content string `json:"content"`
	isDone  bool   `json:"isdone"`
}

type responseTodo struct {
	ID      int    `json:"id"`
	Title   string `json:"title"`
	Content string `json:"content"`
	isDone  string `json:"isdone"`
}

func (th *todoHandler) Post() echo.HandlerFunc {
	return func(c echo.Context) error {
		var req requestTodo
		if err := c.Bind(&req); err != nil {
			return c.JSON(http.StatusBadRequest, err.Error())
		}
		createdTodo, err := th.todoUsecase.Create(req.Title, req.Content, req.isDone)
		if err != nil {
			return c.JSON(http.StatusBadRequest, err.Error())
		}
		res := responseTodo{
			ID:      createdTodo.ID,
			Title:   createdTodo.Title,
			Content: createdTodo.Content,
			isDone:  createdTodo.isDone,
		}
		return c.JSON(http.StatusCreated, res)
	}
}

func (th *todoHandler) Put() echo.HandlerFUnc {
	return func(c echo.Context) error {
		id, err := strconv.Atoi(c.Param("id"))
		if err != nil {
			return c.JSON(http.StatusBadRequest, err.Error())
		}
		var req requestTodo
		if err := c.Bind(&req); err != nil {
			return c.JSON(http.StatusBadRequest, err.Error())
		}
		updatedTodo, err := th.todoUsecase.Update(id, req.Title, req.Content, req.isDone)
		if err != nil {
			return c.JSON(http.StatusBadRequest, err.Error())
		}
		res := responseTodo{
			ID:      updatedTodo.ID,
			Title:   updatedTodo.Title,
			Content: updatedTodo.Content,
			isDone:  updatedTodo.isDone,
		}
		return c.JSON(http.StatusOK, res)
	}
}

// Delete todoを削除するときのハンドラー
func (th *todoHandler) Delete() echo.HandlerFunc {
	return func(c echo.Context) error {
		id, err := strconv.Atoi(c.Param("id"))
		if err != nil {
			return c.JSON(http.StatusBadRequest, err.Error())
		}

		err = th.todoUsecase.Delete(id)
		if err != nil {
			return c.JSON(http.StatusBadRequest, err.Error())
		}

		return c.NoContent(http.StatusNoContent)
	}
}

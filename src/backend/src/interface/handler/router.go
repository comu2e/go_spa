package handler

import (
	"github.com/labstack/echo"
)

func InitRouting(e *echo.Echo, todoHandler TodoHandler) {
	e.POST("/todo", todoHandler.Post())
	e.GET("/todo/:id", todoHandler.Get())
	e.PUT("/todo:id", todoHandler.Put())
	e.DELETE("/todo:id", todoHandler.Delete())
}

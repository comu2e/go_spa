package model

import "errors"

type Todo struct {
	ID      int
	Title   string
	Content string
	isDone  bool
}

func NewTodo(title, content string, isDone bool) (*Todo, error) {
	if title == "" {
		return nil, errors.New("Titleを入力して下さい")
	}

	task := &Todo{
		Title:   title,
		Content: content,
		isDone:  isdone,
	}
	return todo, nil
}

func (t *Todo) Set(title, content string, isdone bool) error {
	if title == "" {
		return errors.New("titleを入力してください")
	}

	t.Title = title
	t.Conent = content
	t.isDone = isdone
	return niol
}

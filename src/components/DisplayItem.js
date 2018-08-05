
                todos.map(todo => (
                    <TodoListItem 
                        key={ todo.id }
                        todo={todo}
                        apertouTodo={() => dispatchToggleTodo(todo.id)}
                        cliqueLongo={() => dispatchEditarTodo(todo)}
                    />
                ))
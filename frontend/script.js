var database = firebase.database();



var ul = document.getElementById('Todo-list')
var todoData = JSON.parse(localStorage.getItem("todoData")) || []


function render () {
	ReactDOM.render(<ul>
		{todoData.map(function (todo, index) {
			function searchingOnGoogle (){
				window.location = 'https://www.google.com/search?q=' + todo.text
			}

			function deleteTodo (){
				todoData.splice(index, 1)
				save()
				render()

			}
			function markTodoFinished (){
				todoData[index].finished = !todoData[index].finished
				render()
				save()
	
			}
			return <li className={todo.finished && 'finished'}>
				<input type="checkbox" checked={todo.finished} onClick={markTodoFinished} />
				<span>{todo.text}</span>

				<div class="buttons">
					<button onClick={deleteTodo}>delete</button>
					<button onClick={searchingOnGoogle}>search</button>
				</div>
			</li>
		})}
	</ul>, ul)
}

render()

function save (){
	localStorage.setItem("todoData", JSON.stringify(todoData))
}


function addTodo (event) {
	event.preventDefault()
	var input = document.getElementById('Todo-input')
	var TodoText = input.value
	var todo = {
		text: TodoText,
		finished: false
	}

	todoData.push(todo)
	input.value = ""
	save()
	render()


}
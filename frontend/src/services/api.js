
// const url = 'http://localhost:3333'

export const getData = async () => {
    fetch('http://localhost:3333')
        .then(res => res.json())
        .then((data) => {
            console.log(data)
            return data
        })
        .catch(console.log)
    }


// state = {
//     todos: []
//   }

// componentDidMount() {
// fetch(url)
// .then(res => res.json())
// .then((data) => {
//     setState({ todos: data })
//     console.log(state.todos)
// })
// .catch(console.log)
// }

// fetch(url)
//   .then(response => response.json())
//   .then((jsonData) => {
//     export default jsonData
//   })
//   .catch((error) => {
//     console.error(error)
//   })

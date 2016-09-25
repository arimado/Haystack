
// const initialMainState = {
//   isFetching: false,
//   stacks: [],
//   questions: [],
//   answers: [],
//   users: [],
//   counter: 0
// }

var users = [
    { name: 'Jeremy'
    , age:      '24'
    , id:        '1' },
    { name:  'Alice'
    , age:      '24'
    , id:        '2' },
    { name: 'Justin'
    , age:      '26'
    , id:        '3' },
    { name:  'Jesse'
    , age:      '23'
    , id:        '4' },
]

var stacks = [
    { id: '1'
    , userId: '1'
    , colorScheme: 'blue' },
    { id: '2'
    , userId: '2'
    , colorScheme: 'blue' },
    { id: '3'
    , userId: '3'
    , colorScheme: 'blue' },
    { id: '4'
    , userId: '4'
    , colorScheme: 'blue' },
]

var questions = [
    { id: '1'
    , stackId: '1'
    , value: 'What is your favourite color?' },
    { id: '2'
    , stackId: '1'
    , value: 'What is your favourite color?' },
    { id: '3'
    , stackId: '1'
    , value: 'What is your favourite color?' },
    { id: '4'
    , stackId: '1'
    , value: 'What is your favourite color?' },
    { id: '1'
    , stackId: '2'
    , value: 'What is your favourite color?' },
    { id: '2'
    , stackId: '2'
    , value: 'What is your favourite color?' },
    { id: '3'
    , stackId: '2'
    , value: 'What is your favourite color?' },
    { id: '4'
    , stackId: '2'
    , value: 'What is your favourite color?' },
    { id: '1'
    , stackId: '3'
    , value: 'What is your favourite color?' },
    { id: '2'
    , stackId: '3'
    , value: 'What is your favourite color?' },
    { id: '3'
    , stackId: '3'
    , value: 'What is your favourite color?' },
    { id: '4'
    , stackId: '3'
    , value: 'What is your favourite color?' },
    { id: '1'
    , stackId: '4'
    , value: 'What is your favourite color?' },
    { id: '2'
    , stackId: '4'
    , value: 'What is your favourite color?' },
    { id: '3'
    , stackId: '4'
    , value: 'What is your favourite color?' },
    { id: '4'
    , stackId: '4'
    , value: 'What is your favourite color?' },
]

var answers = [
    { id: '1'
    , questionId: '1'
    , value: 'Blue'
    , isCorrect: 'true' },
    { id: '1'
    , questionId: '1'
    , value: 'Blue'
    , isCorrect: 'true' },
]


default export { users, stacks, questions, answers }

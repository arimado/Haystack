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
    , colorScheme: 'gold' },
    { id: '2'
    , userId: '2'
    , colorScheme: 'darkseagreen' },
    { id: '3'
    , userId: '3'
    , colorScheme: 'slateblue' },
    { id: '4'
    , userId: '4'
    , colorScheme: 'crimson' },
    { id: '5'
    , userId: '5'
    , colorScheme: 'gold' },
    { id: '6'
    , userId: '6'
    , colorScheme: 'darkseagreen' },
    { id: '7'
    , userId: '7'
    , colorScheme: 'slateblue' },
    { id: '8'
    , userId: '8'
    , colorScheme: 'crimson' },
    { id: '9'
    , userId: '9'
    , colorScheme: 'gold' },
    { id: '10'
    , userId: '10'
    , colorScheme: 'darkseagreen' },
    { id: '11'
    , userId: '11'
    , colorScheme: 'slateblue' },
    { id: '12'
    , userId: '12'
    , colorScheme: 'crimson' },
    { id: '13'
    , userId: '13'
    , colorScheme: 'gold' },
    { id: '14'
    , userId: '14'
    , colorScheme: 'darkseagreen' },
    { id: '15'
    , userId: '15'
    , colorScheme: 'slateblue' },
    { id: '16'
    , userId: '16'
    , colorScheme: 'crimson' },
    { id: '17'
    , userId: '17'
    , colorScheme: 'gold' },
    { id: '18'
    , userId: '18'
    , colorScheme: 'darkseagreen' },
    { id: '19'
    , userId: '19'
    , colorScheme: 'slateblue' },
    { id: '20'
    , userId: '20'
    , colorScheme: 'crimson' },
    { id: '21'
    , userId: '21'
    , colorScheme: 'gold' },
    { id: '22'
    , userId: '22'
    , colorScheme: 'darkseagreen' },
    { id: '23'
    , userId: '23'
    , colorScheme: 'slateblue' },
    { id: '24'
    , userId: '24'
    , colorScheme: 'crimson' },
    { id: '25'
    , userId: '25'
    , colorScheme: 'gold' },
    { id: '26'
    , userId: '26'
    , colorScheme: 'darkseagreen' },
    { id: '27'
    , userId: '27'
    , colorScheme: 'slateblue' },
    { id: '28'
    , userId: '28'
    , colorScheme: 'crimson' },
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
    , isCorrect: 'true' }
]

const db = { users: users, stacks: stacks, questions: questions, answers: answers }

export default db;

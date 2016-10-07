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
    { name: 'Pablo'
    , age:      '24'
    , id:        '5' },
    { name:  'Abu Nazir'
    , age:      '24'
    , id:        '6' },
    { name: 'Flaskman'
    , age:      '26'
    , id:        '7' },
    { name:  'Taylor'
    , age:      '23'
    , id:        '8' },
    { name:    'Raw'
    , age:      '24'
    , id:        '9' },
    { name:   'Mary'
    , age:      '24'
    , id:        '10' },
    { name: 'Justin'
    , age:      '26'
    , id:        '11' },
    { name:  'Jesse'
    , age:      '23'
    , id:        '12' },
    { name: 'Jeremy'
    , age:      '24'
    , id:        '13' },
    { name:  'Alice'
    , age:      '24'
    , id:        '13' },
    { name: 'Justin'
    , age:      '26'
    , id:        '14' },
    { name:  'Jesse'
    , age:      '23'
    , id:        '15' },
    { name: 'Jeremy'
    , age:      '24'
    , id:        '16' },
    { name:  'Alice'
    , age:      '24'
    , id:        '17' },
    { name: 'Justin'
    , age:      '26'
    , id:        '18' },
    { name:  'Jesse'
    , age:      '23'
    , id:        '19' },
    { name: 'Jeremy'
    , age:      '24'
    , id:        '20' },
    { name:  'Alice'
    , age:      '24'
    , id:        '21' },
    { name: 'Justin'
    , age:      '26'
    , id:        '22' },
    { name:  'Jesse'
    , age:      '23'
    , id:        '23' },
    { name:  'Jesse'
    , age:      '23'
    , id:        '24' },
    { name:  'Jesse'
    , age:      '23'
    , id:        '25' },
    { name:  'Jesse'
    , age:      '23'
    , id:        '26' },
    { name:  'Jesse'
    , age:      '23'
    , id:        '27' },
    { name:  'Jesse'
    , age:      '23'
    , id:        '28' },
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
    , position: '4'
    , value: 'What is your favourite color?' },
    { id: '2'
    , stackId: '1'
    , position: '2'
    , value: 'What is your favourite car?' },
    { id: '3'
    , stackId: '1'
    , position: '3'
    , value: 'What is your favourite chair?' },
    { id: '4'
    , stackId: '1'
    , position: '1'
    , value: 'What is your favourite bus?' },
    { id: '5'
    , stackId: '2'
    , position: '1'
    , value: 'What is your favourite color?' },
    { id: '6'
    , stackId: '2'
    , position: '2'
    , value: 'What is your favourite color?' },
    { id: '7'
    , stackId: '2'
    , position: '3'
    , value: 'What is your favourite color?' },
    { id: '8'
    , stackId: '2'
    , position: '4'
    , value: 'What is your favourite color?' },
    { id: '9'
    , stackId: '3'
    , position: '1'
    , value: 'What is your favourite color?' },
    { id: '10'
    , stackId: '3'
    , position: '2'
    , value: 'What is your favourite color?' },
    { id: '11'
    , stackId: '3'
    , position: '3'
    , value: 'What is your favourite color?' },
    { id: '12'
    , stackId: '3'
    , position: '4'
    , value: 'What is your favourite color?' },
    { id: '13'
    , stackId: '4'
    , position: '1'
    , value: 'What is your favourite color?' },
    { id: '14'
    , stackId: '4'
    , position: '2'
    , value: 'What is your favourite color?' },
    { id: '15'
    , stackId: '4'
    , position: '3'
    , value: 'What is your favourite color?' },
    { id: '4'
    , stackId: '4'
    , position: '4'
    , value: 'What is your favourite color?' },
]

var answers = [
    { id: '1'
    , questionId: '1'
    , value: 'Blue'
    , isCorrect: 'true' },
    { id: '2'
    , questionId: '1'
    , value: 'Blue'
    , isCorrect: 'true' },
    { id: '3'
    , questionId: '2'
    , value: 'Blue'
    , isCorrect: 'true' },
    { id: '4'
    , questionId: '2'
    , value: 'Blue'
    , isCorrect: 'true' },
    { id: '5'
    , questionId: '3'
    , value: 'Blue'
    , isCorrect: 'true' },
    { id: '6'
    , questionId: '3'
    , value: 'Blue'
    , isCorrect: 'true' },
    { id: '7'
    , questionId: '3'
    , value: 'Blue'
    , isCorrect: 'true' },
    { id: '8'
    , questionId: '3'
    , value: 'Blue'
    , isCorrect: 'true' },
    { id: '9'
    , questionId: '4'
    , value: 'Blue'
    , isCorrect: 'true' },
    { id: '10'
    , questionId: '4'
    , value: 'Blue'
    , isCorrect: 'true' },
]

const db = { users: users, stacks: stacks, questions: questions, answers: answers }

export default db;

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
    , colorScheme: 'darkorange' },
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
    , position: '1'
    , value: 'Star Wars or Star Trek' },
    { id: '2'
    , stackId: '1'
    , position: '2'
    , value: 'Who would you fight?' },
    { id: '3'
    , stackId: '1'
    , position: '3'
    , value: 'Who should be president of the US?' },
    { id: '4'
    , stackId: '1'
    , position: '4'
    , value: 'Choose a Frank Ocean song' },
    { id: '5'
    , stackId: '2'
    , position: '1'
    , value: 'Bey or Jay?' },
    { id: '6'
    , stackId: '2'
    , position: '2'
    , value: 'Tay or Ye?' },
    { id: '7'
    , stackId: '2'
    , position: '3'
    , value: 'Are you the dude? Do you abide?' },
    { id: '8'
    , stackId: '2'
    , position: '4'
    , value: 'What do you do on Monday nights?' },
    { id: '9'
    , stackId: '3'
    , position: '1'
    , value: 'FUCK ' },
    { id: '10'
    , stackId: '3'
    , position: '2'
    , value: 'MARRY ' },
    { id: '11'
    , stackId: '3'
    , position: '3'
    , value: 'KILL ' },
    { id: '12'
    , stackId: '3'
    , position: '4'
    , value: 'WHERE CAN I PURCHASE DRUGS?' },
    { id: '13'
    , stackId: '4'
    , position: '1'
    , value: 'How do you say hello in german?' },
    { id: '14'
    , stackId: '4'
    , position: '2'
    , value: 'Does he look like a bitch?' },
    { id: '15'
    , stackId: '4'
    , position: '3'
    , value: 'Object Oriented or Functional' },
    { id: '4'
    , stackId: '4'
    , position: '4'
    , value: 'What is your favourite color?' },
]

var answers = [
    { id: '1'
    , questionId: '1'
    , value: 'War'
    , isCorrect: 'true'
    , isSelected: 'false'},
    { id: '2'
    , questionId: '1'
    , value: 'Trek'
    , isCorrect: 'true'
    , isSelected: 'false'},
    { id: '3'
    , questionId: '2'
    , value: 'William Shatner'
    , isCorrect: 'true'
    , isSelected: 'false'},
    { id: '4'
    , questionId: '2'
    , value: 'Shooter McGavin from Happy Gilmore'
    , isCorrect: 'true'
    , isSelected: 'false'},
    { id: '5'
    , questionId: '3'
    , value: 'MAKE AMERICA GREAT AGAIN'
    , isCorrect: 'true'
    , isSelected: 'false'},
    { id: '6'
    , questionId: '3'
    , value: 'IM WITH HER'
    , isCorrect: 'true'
    , isSelected: 'false'},
    { id: '7'
    , questionId: '3'
    , value: "Paris Hilton's dog"
    , isCorrect: 'true'
    , isSelected: 'false'},
    { id: '8'
    , questionId: '4'
    , value: 'Pyramids'
    , isCorrect: 'true'
    , isSelected: 'false'},
    { id: '9'
    , questionId: '4'
    , value: 'Forrest Gump'
    , isCorrect: 'true'
    , isSelected: 'false'},
    { id: '10'
    , questionId: '4'
    , value: 'Lost'
    , isCorrect: 'true'
    , isSelected: 'false'},
    { id: '11'
    , questionId: '5'
    , value: 'Bey'
    , isCorrect: 'true'
    , isSelected: 'false'},
    { id: '12'
    , questionId: '5'
    , value: 'Jay'
    , isCorrect: 'true'
    , isSelected: 'false'},
    { id: '13'
    , questionId: '6'
    , value: 'Tay'
    , isCorrect: 'true'
    , isSelected: 'false'},
    { id: '14'
    , questionId: '6'
    , value: 'Ye'
    , isCorrect: 'true'
    , isSelected: 'false'},
    { id: '15'
    , questionId: '7'
    , value: 'Yes'
    , isCorrect: 'true'
    , isSelected: 'false'},
    { id: '16'
    , questionId: '8'
    , value: 'Writing Raps'
    , isCorrect: 'true'
    , isSelected: 'false'},
    { id: '17'
    , questionId: '8'
    , value: 'Writing Code'
    , isCorrect: 'true'
    , isSelected: 'false'},
    { id: '18'
    , questionId: '8'
    , value: 'Layin fake ass gangstas down'
    , isCorrect: 'true'
    , isSelected: 'false'},
    { id: '19'
    , questionId: '9'
    , value: 'Casio Watch'
    , isCorrect: 'true'
    , isSelected: 'false'},
    { id: '20'
    , questionId: '9'
    , value: 'Shooter McGavin from Happy Gilmore'
    , isCorrect: 'true'
    , isSelected: 'false'},
    { id: '21'
    , questionId: '10'
    , value: 'Beyonce Knowles'
    , isCorrect: 'true'
    , isSelected: 'false'},
    { id: '22'
    , questionId: '10'
    , value: 'Ryan Renolds'
    , isCorrect: 'true'
    , isSelected: 'false'},
    { id: '23'
    , questionId: '10'
    , value: 'Barack Obama'
    , isCorrect: 'true'
    , isSelected: 'false'},
    { id: '24'
    , questionId: '11'
    , value: 'Your Hopes and Dreams'
    , isCorrect: 'true'
    , isSelected: 'false'},
    { id: '25'
    , questionId: '12'
    , value: 'FUCK'
    , isCorrect: 'true'
    , isSelected: 'false'},
    { id: '26'
    , questionId: '12'
    , value: 'FUCK'
    , isCorrect: 'true'
    , isSelected: 'false'},
    { id: '27'
    , questionId: '12'
    , value: 'FUCK'
    , isCorrect: 'true'
    , isSelected: 'false'},
]

const db = { users: users, stacks: stacks, questions: questions, answers: answers }

export default db;

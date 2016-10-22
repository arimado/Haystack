var users = [
    { name: 'Alice'
    , age:      '24'
    , id:        '1' },
    { name:  'Tom'
    , age:      '24'
    , id:        '2' },
    { name: 'Bill Murray'
    , age:      '26'
    , id:        '3' },
    { name:  'Lisa Simpson'
    , age:      '23'
    , id:        '4' },
    { name: 'Denarys Stormborn'
    , age:      '24'
    , id:        '5' },
    { name:  'Jeremy'
    , age:      '24'
    , id:        '6' },
    { name: 'Kendrick'
    , age:      '26'
    , id:        '7' },
    { name:  'Heisenburg'
    , age:      '23'
    , id:        '8' },
    { name:    'Gob'
    , age:      '24'
    , id:        '9' },
    { name:   'Beyonce Knowles'
    , age:      '24'
    , id:        '10' },
    { name: 'Jon Snow'
    , age:      '26'
    , id:        '11' },
    { name:  'Tobias Funke'
    , age:      '23'
    , id:        '12' },
    { name: 'Eleven'
    , age:      '23'
    , id:        '13' }
]

var stacks = [
    { id: '1'
    , userId: '1'
    , attempted: 'false'
    , result: 'null'
    , colorScheme: 'darkorange' },
    { id: '2'
    , userId: '2'
    , attempted: 'false'
    , result: 'null'
    , colorScheme: 'darkseagreen' },
    { id: '3'
    , userId: '3'
    , attempted: 'false'
    , result: 'null'
    , colorScheme: 'slateblue' },
    { id: '4'
    , userId: '4'
    , attempted: 'false'
    , result: 'null'
    , colorScheme: 'crimson' },
    { id: '5'
    , userId: '5'
    , attempted: 'false'
    , result: 'null'
    , colorScheme: 'gold' },
    { id: '6'
    , userId: '6'
    , attempted: 'false'
    , result: 'null'
    , colorScheme: 'darkseagreen' },
    { id: '7'
    , userId: '7'
    , attempted: 'false'
    , result: 'null'
    , colorScheme: 'slateblue' },
    { id: '8'
    , userId: '8'
    , attempted: 'false'
    , result: 'null'
    , colorScheme: 'crimson' },
    { id: '9'
    , userId: '9'
    , attempted: 'false'
    , result: 'null'
    , colorScheme: 'gold' },
    { id: '10'
    , userId: '10'
    , attempted: 'false'
    , result: 'null'
    , colorScheme: 'darkseagreen' },
    { id: '11'
    , userId: '11'
    , attempted: 'false'
    , result: 'null'
    , colorScheme: 'slateblue' },
    { id: '12'
    , userId: '12'
    , attempted: 'false'
    , result: 'null'
    , colorScheme: 'crimson' },
    { id: '13'
    , userId: '13'
    , attempted: 'false'
    , result: 'null'
    , colorScheme: 'gold' }
]

var questions = [

    // Stack 1 -----------------------------------------------------------------

    { id: '1'
    , stackId: '1'
    , position: '1'
    , value: 'Star Wars or Star Trek' },
    { id: '2'
    , stackId: '1'
    , position: '2'
    , value: 'Are you a dog person?' },
    { id: '3'
    , stackId: '1'
    , position: '3'
    , value: 'Who should be president of the US?' },
    { id: '4'
    , stackId: '1'
    , position: '4'
    , value: 'Choose a Frank Ocean song' },
    { id: '5'
    , stackId: '1'
    , position: '4'
    , value: 'Travel to the US or EU' },

    // Stack 2 -----------------------------------------------------------------

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

    // Stack 3 -----------------------------------------------------------------

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

    // Stack 4 -----------------------------------------------------------------

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

    // Stack 5 -----------------------------------------------------------------

    // Stack 6 -----------------------------------------------------------------

    // Stack 7 -----------------------------------------------------------------

    // Stack 8 -----------------------------------------------------------------

    // Stack 9 -----------------------------------------------------------------

    // Stack 10 ----------------------------------------------------------------

    // Stack 11 ----------------------------------------------------------------

    // Stack 12 ----------------------------------------------------------------

    // Stack 13 ----------------------------------------------------------------

]

var answers = [

    // Question 1 --------------------------------------------------------------

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

    // Question 2 --------------------------------------------------------------

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

    // Question 3 --------------------------------------------------------------

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

    // Question 4 --------------------------------------------------------------

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

    // Question 5 --------------------------------------------------------------

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

    // Question 6 --------------------------------------------------------------

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

    // Question 7 --------------------------------------------------------------

    { id: '15'
    , questionId: '7'
    , value: 'Yes'
    , isCorrect: 'true'
    , isSelected: 'false'},

    // Question 8 --------------------------------------------------------------
    
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

    // Question 9 --------------------------------------------------------------

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

    // Question 10 -------------------------------------------------------------

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

    // Question 11 -------------------------------------------------------------

    { id: '24'
    , questionId: '11'
    , value: 'Your Hopes and Dreams'
    , isCorrect: 'true'
    , isSelected: 'false'},

    // Question 12 -------------------------------------------------------------

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

    // Question 13 -------------------------------------------------------------
    // Question 14 -------------------------------------------------------------
    // Question 15 -------------------------------------------------------------
    // Question 16 -------------------------------------------------------------
    // Question 17 -------------------------------------------------------------
    // Question 18 -------------------------------------------------------------
    // Question 19 -------------------------------------------------------------
    // Question 20 -------------------------------------------------------------
    // Question 21 -------------------------------------------------------------
    // Question 22 -------------------------------------------------------------
    // Question 23 -------------------------------------------------------------
    // Question 24 -------------------------------------------------------------
    // Question 25 -------------------------------------------------------------
    // Question 26 -------------------------------------------------------------
    // Question 27 -------------------------------------------------------------
    // Question 28 -------------------------------------------------------------
    // Question 29 -------------------------------------------------------------

]

// { id: '1'
// , user: 'userId'
// , stackId: ''
// , result: Bool } // pass, fail, skipped

var results = []

var matches = [
  { id: '1'
  , questionId: '1'
  , value: 'War'
  , isCorrect: 'true'
  , isSelected: 'false'},
]

var messages = [
  { id: '1'
  , questionId: '1'
  , value: 'War'
  , isCorrect: 'true'
  , isSelected: 'false'},
]

const db = { users: users, stacks: stacks, questions: questions, answers: answers, results: results }

export default db;

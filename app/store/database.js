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
    // --

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
    , value: 'Who should represent the American People?' },
    { id: '4'
    , stackId: '1'
    , position: '4'
    , value: 'Choose a Frank Ocean song' },
    { id: '5'
    , stackId: '1'
    , position: '4'
    , value: 'Travel to the US or EU' },

    // Stack 2 -----------------------------------------------------------------
    // --

    { id: '6'
    , stackId: '2'
    , position: '1'
    , value: 'Bey or Jay?' },
    { id: '7'
    , stackId: '2'
    , position: '2'
    , value: 'Tay or Ye?' },
    { id: '8'
    , stackId: '2'
    , position: '3'
    , value: 'How much do you squat? (KG)' },
    { id: '9'
    , stackId: '2'
    , position: '4'
    , value: 'How much drinks till tipsy?' },
    { id: '10'
    , stackId: '2'
    , position: '5'
    , value: 'What do you do on Monday nights?' },

    // Stack 3 -----------------------------------------------------------------
    // --

    { id: '11'
    , stackId: '3'
    , position: '1'
    , value: 'Did you see the movie drive?' },
    { id: '12'
    , stackId: '3'
    , position: '2'
    , value: 'Marry someone' },
    { id: '13'
    , stackId: '3'
    , position: '3'
    , value: 'Punch somone in the face' },
    { id: '14'
    , stackId: '3'
    , position: '4'
    , value: 'What does this mean: ||+<><>+|| ?' },

    // Stack 4 -----------------------------------------------------------------

    { id: '15'
    , stackId: '4'
    , position: '1'
    , value: 'Who sand this line "Lisa its your birthday, Happy Birthday Lisa"' },
    { id: '16'
    , stackId: '4'
    , position: '2'
    , value: 'Pick the worst person in the world' },
    { id: '17'
    , stackId: '4'
    , position: '3'
    , value: 'Pick a date for me' },
    { id: '18'
    , stackId: '4'
    , position: '4'
    , value: 'Choose a book' },

    // Stack 5 -----------------------------------------------------------------
    // --

    { id: '19'
    , stackId: '5'
    , position: '1'
    , value: 'WHO IS THE RIGHTFUL RULER OF THE SEVEN KINGDOMS?' },
    { id: '20'
    , stackId: '5'
    , position: '2'
    , value: 'Leggings or Jeans' },
    { id: '21'
    , stackId: '5'
    , position: '3'
    , value: 'If you had to eat chocolate ice-cream out of a human head - whos head would it be?' },
    { id: '22'
    , stackId: '5'
    , position: '4'
    , value: 'What Operating System do you use?' },
    { id: '23'
    , stackId: '5'
    , position: '5'
    , value: 'What do you think about being a parent to dragons?' },


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
    // --

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
    // --

    { id: '3'
    , questionId: '2'
    , value: 'William Shatner'
    , isCorrect: 'false'
    , isSelected: 'false' },
    { id: '4'
    , questionId: '2'
    , value: 'Shooter McGavin from Happy Gilmore'
    , isCorrect: 'true'
    , isSelected: 'false' },
    { id: '5'
    , questionId: '2'
    , value: 'Joe Biden'
    , isCorrect: 'false'
    , isSelected: 'false' },

    // Question 3 --------------------------------------------------------------
    // --

    { id: '6'
    , questionId: '3'
    , value: 'Trump'
    , isCorrect: 'false'
    , isSelected: 'false'},

    { id: '7'
    , questionId: '3'
    , value: 'HIllary'
    , isCorrect: 'false'
    , isSelected: 'false'},
    { id: '8'
    , questionId: '3'
    , value: "Paris Hilton's dog"
    , isCorrect: 'true'
    , isSelected: 'false'},

    // Question 4 --------------------------------------------------------------
    // --

    { id: '9'
    , questionId: '4'
    , value: 'Pyramids'
    , isCorrect: 'true'
    , isSelected: 'false'},
    { id: '10'
    , questionId: '4'
    , value: 'Forrest Gump'
    , isCorrect: 'false'
    , isSelected: 'false'},
    { id: '11'
    , questionId: '4'
    , value: 'Lost'
    , isCorrect: 'false'
    , isSelected: 'false'},
    { id: '12'
    , questionId: '4'
    , value: 'Thinkin Bout You'
    , isCorrect: 'false'
    , isSelected: 'false'},

    // Question 5 --------------------------------------------------------------
    // --

    { id: '13'
    , questionId: '5'
    , value: 'EU'
    , isCorrect: 'false'
    , isSelected: 'false'},
    { id: '14'
    , questionId: '5'
    , value: 'US'
    , isCorrect: 'false'
    , isSelected: 'false'},
    { id: '15'
    , questionId: '5'
    , value: 'North Korea'
    , isCorrect: 'true'
    , isSelected: 'false'},

    // Question 6 --------------------------------------------------------------
    // --

    { id: '16'
    , questionId: '6'
    , value: 'Bey'
    , isCorrect: 'true'
    , isSelected: 'false'},
    { id: '17'
    , questionId: '6'
    , value: 'Jay'
    , isCorrect: 'false'
    , isSelected: 'false'},

    // Question 7 --------------------------------------------------------------

    { id: '18'
    , questionId: '7'
    , value: 'Tay'
    , isCorrect: 'true'
    , isSelected: 'false'},
    { id: '19'
    , questionId: '7'
    , value: 'Ye'
    , isCorrect: 'true'
    , isSelected: 'false'},

    // Question 8 --------------------------------------------------------------
    // --

    { id: '20'
    , questionId: '8'
    , value: '20+'
    , isCorrect: 'false'
    , isSelected: 'false'},

    { id: '21'
    , questionId: '8'
    , value: '60+'
    , isCorrect: 'false'
    , isSelected: 'false'},

    { id: '22'
    , questionId: '8'
    , value: '80+'
    , isCorrect: 'false'
    , isSelected: 'false'},

    { id: '23'
    , questionId: '8'
    , value: '100+'
    , isCorrect: 'true'
    , isSelected: 'false'},

    // Question 9 --------------------------------------------------------------
    // --

    { id: '24'
    , questionId: '9'
    , value: '1+ (Super Lightweight)'
    , isCorrect: 'true'
    , isSelected: 'false'},
    { id: '25'
    , questionId: '9'
    , value: '4+ (Still Lightweight)'
    , isCorrect: 'true'
    , isSelected: 'false'},
    { id: '26'
    , questionId: '9'
    , value: '20+ (Yeah still Lightweight)'
    , isCorrect: 'true'
    , isSelected: 'false'},
    { id: '27'
    , questionId: '9'
    , value: '40+ (Ok)'
    , isCorrect: 'true'
    , isSelected: 'false'},

    // Question 10 --------------------------------------------------------------
    // --

    { id: '28'
    , questionId: '10'
    , value: 'Writing Raps'
    , isCorrect: 'false'
    , isSelected: 'false'},
    { id: '29'
    , questionId: '10'
    , value: 'Writing Code'
    , isCorrect: 'false'
    , isSelected: 'false'},
    { id: '30'
    , questionId: '10'
    , value: 'Layin fake ass gangstas down'
    , isCorrect: 'true'
    , isSelected: 'false'},

    // Question 11 --------------------------------------------------------------
    // --

    { id: '31'
    , questionId: '11'
    , value: 'Yes (It was good)'
    , isCorrect: 'false'
    , isSelected: 'false'},
    { id: '32'
    , questionId: '11'
    , value: 'Yes (It was bad)'
    , isCorrect: 'false'
    , isSelected: 'false'},
    { id: '33'
    , questionId: '11'
    , value: 'No (Im a bad person)'
    , isCorrect: 'true'
    , isSelected: 'false'},


    // Question 11 --------------------------------------------------------------
    // --

    { id: '31'
    , questionId: '11'
    , value: 'Yes (It was good)'
    , isCorrect: 'false'
    , isSelected: 'false'},
    { id: '32'
    , questionId: '11'
    , value: 'Yes (It was bad)'
    , isCorrect: 'false'
    , isSelected: 'false'},
    { id: '33'
    , questionId: '11'
    , value: 'No (Im a bad person)'
    , isCorrect: 'true'
    , isSelected: 'false'},

    // Question 12 -------------------------------------------------------------
    // --

    { id: '34'
    , questionId: '12'
    , value: 'Beyonce Knowles'
    , isCorrect: 'false'
    , isSelected: 'false'},
    { id: '35'
    , questionId: '12'
    , value: 'Ryan Renolds'
    , isCorrect: 'false'
    , isSelected: 'false'},
    { id: '36'
    , questionId: '12'
    , value: 'Barack Obama'
    , isCorrect: 'false'
    , isSelected: 'false'},
    { id: '37'
    , questionId: '12'
    , value: 'Michelle Obama'
    , isCorrect: 'true'
    , isSelected: 'false'},

    // Question 13 -------------------------------------------------------------
    // --

    { id: '38'
    , questionId: '13'
    , value: 'Justin Beiber'
    , isCorrect: 'false'
    , isSelected: 'false'} ,

    { id: '39'
    , questionId: '13'
    , value: 'Donald Trump'
    , isCorrect: 'false'
    , isSelected: 'false'} ,

    { id: '40'
    , questionId: '13'
    , value: 'Ellen Degenerous'
    , isCorrect: 'false'
    , isSelected: 'false'} ,

    { id: '41'
    , questionId: '13'
    , value: 'Yourself'
    , isCorrect: 'true'
    , isSelected: 'false'} ,

    // Question 14 -------------------------------------------------------------
    // --

    { id: '42'
    , questionId: '14'
    , value: 'Love'
    , isCorrect: 'false'
    , isSelected: 'false'} ,
    { id: '43'
    , questionId: '14'
    , value: 'Anger'
    , isCorrect: 'false'
    , isSelected: 'false'} ,
    { id: '44'
    , questionId: '14'
    , value: 'Ja Rule'
    , isCorrect: 'true'
    , isSelected: 'false'} ,

    // Question 15 -------------------------------------------------------------

    { id: '45'
    , questionId: '15'
    , value: 'Michael Jackson'
    , isCorrect: 'true'
    , isSelected: 'false'} ,
    { id: '46'
    , questionId: '15'
    , value: 'Willie Nelson'
    , isCorrect: 'false'
    , isSelected: 'false'} ,
    { id: '47'
    , questionId: '15'
    , value: 'Flume'
    , isCorrect: 'false'
    , isSelected: 'false'} ,

    // Question 16 -------------------------------------------------------------

    { id: '48'
    , questionId: '16'
    , value: 'Bart Simpson'
    , isCorrect: 'true'
    , isSelected: 'false'} ,
    { id: '49'
    , questionId: '16'
    , value: 'Crusty The Clown'
    , isCorrect: 'false'
    , isSelected: 'false'} ,
    { id: '50'
    , questionId: '16'
    , value: 'Mono-brow baby'
    , isCorrect: 'false'
    , isSelected: 'false'} ,

    // Question 17 -------------------------------------------------------------

    { id: '51'
    , questionId: '17'
    , value: 'Ralph Wiggum'
    , isCorrect: 'true'
    , isSelected: 'false'} ,
    { id: '52'
    , questionId: '17'
    , value: 'Milhouse'
    , isCorrect: 'false'
    , isSelected: 'false'} ,
    { id: '53'
    , questionId: '17'
    , value: 'Lil Wayne'
    , isCorrect: 'false'
    , isSelected: 'false'} ,

    // Question 18 -------------------------------------------------------------

    { id: '54'
    , questionId: '18'
    , value: 'Lord of The Rings'
    , isCorrect: 'false'
    , isSelected: 'false'} ,
    { id: '55'
    , questionId: '18'
    , value: 'The Bible'
    , isCorrect: 'false'
    , isSelected: 'false'} ,
    { id: '56'
    , questionId: '18'
    , value: 'Femboo: Perspectives on Feminist discourse within bamboo structured spaces'
    , isCorrect: 'true'
    , isSelected: 'false'} ,



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

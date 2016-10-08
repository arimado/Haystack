// DATA ------------------------------------------------------------------------

// ANIMATION -------------------------------------------------------------------

export const offsetRotationEvery = (number, reset) => {
  if ( number === 0 ) return '0deg'
  if ( number % reset > 0 ) return number % reset / 2 + 'deg'
  return 4 / 2 + 'deg'
}

// COMPONENT -------------------------------------------------------------------

export const getCurrentQuestions = (questions, stackId) => {
  return questions.filter(q => q.stackId === stackId)
    .sort((q1, q2) => {
      let q1Pos = parseInt(q1.position);
      let q2Pos = parseInt(q2.position);
      if (q1Pos > q2Pos) return 1;
      if (q1Pos < q2Pos) return -1;
      return 0;
    })
}

export const getCurrentAnswers = (answers, questionId) => {
  return answers.filter(a => a.questionId === questionId)
}

// sort(entities)
//
// sortBy = sort(entities)
//
// sortByQuestions = sortBy('questions')
//
//
//
// export const sortByQuestion = sortBy('question')

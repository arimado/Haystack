import _ from 'lodash';

// DATA ------------------------------------------------------------------------

// setValueOnEntity --
// updates value on a specified entity in an array and returns a new array with
// that updated entity
//          params --
// -    entities: array of entities
// -       idObj: object with identifier key and value
// - transformCB: function that takes the found entity as a paramater
//                the return value is the updated entity
//

export const setValueOnEntity = (entities, idObj, transformCB ) => {
    let i = _.findIndex(entities, idObj)
    let entity = entities[i];
    let updatedEntity = Object.assign({}, entity, transformCB(entity))
    return [
        ...entities.slice(0, i),
        updatedEntity,
        ...entities.slice(i + 1)
    ]
}


// set all answers with a certain questionID to isSelected===false

export const setValueOnEntities = (entities, idObj, transformCB) => {
  let selectedEntities = _.filter(entities, idObj);
  let updatedEntities = entities;
  selectedEntities.forEach((selectedEntity) => {
    updatedEntities = setValueOnEntity(updatedEntities, { id: selectedEntity.id} , transformCB)
  });
  return updatedEntities;
}

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

export {

}

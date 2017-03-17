import { StyleSheet } from 'react-native';

/**
  * ****************************************************************************
  * SHARED STYLE CONSTRUCTOR ***************************************************
  * ****************************************************************************
  */


/**
  * Common Globals Styles
  * Used as paramater in stylesCallback witihn the constructur function below
  */

export const commonStyles = {
  base: {
    flex: 1
  }
}

/**
  * Constructor function with styles passed in as a paramteers.
  *
  * To be used like so:
  * const style = componentContext => createStyleSheet(commonStyles => ({
  *   container: commonStyles.base
  *   border: componentContext.color
  * }))
  *
  */

export default stylesCallback => componentContext => StyleSheet.create(
  stylesCallback(commonStyles)
);

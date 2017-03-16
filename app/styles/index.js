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

export const commonStyles = StyleSheet.create({
  base: {
    flex: 1
  }
})

/**
  * Constructor function with styles passed in as a paramteers.
  *
  * To be used like so:
  * const style = c => createStyleSheet(common => ({
  *   container: common.base
  * }))
  *
  */

export default function (stylesObject) {
  return function (stylesCallback) {
    return StyleSheet.create(stylesCallback(commonStyles))
  }
}

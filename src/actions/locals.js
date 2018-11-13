
import { LOCALS_SET } from "../types";

export const localeSet = language => ({
  type: LOCALS_SET,
  language
});

export const setLocals = language => dispatch => {
  localStorage.gbLanguage = language;
  dispatch(localeSet(language));
};
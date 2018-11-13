
import { LOCALS_SET } from "../types";

export default function locale(state = { language: "en" }, action = {}) {
  switch (action.type) {
    case LOCALS_SET:
      return { language: action.language };
    default:
      return state;
  }
}  
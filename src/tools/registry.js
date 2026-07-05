import SGPA from "./SGPA";
import CGPA from "./CGPA";
import Attendance from "./Attendance";
import JSONFormatter from "./JSONFormatter";
import PasswordGenerator from "./PasswordGenerator";

export const toolRegistry = {
  sgpa: SGPA,
  cgpa: CGPA,
  attendance: Attendance,
  json: JSONFormatter,
  password: PasswordGenerator,
};
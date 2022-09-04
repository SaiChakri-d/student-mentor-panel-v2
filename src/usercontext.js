import { createContext, useState } from "react";

let UserContext = createContext();
export const UserProvider = ({ children }) => {
  let [user, setUser] = useState([]);
  let [teachers, setTeachers] = useState([]);
  let [students, setStudents] = useState([]);

  return (
    <UserContext.Provider
      value={{ user, setUser, teachers, setTeachers, students, setStudents }}
    >
      {children}
    </UserContext.Provider>
  );
};
export default UserContext;

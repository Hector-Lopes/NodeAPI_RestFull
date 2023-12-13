import { sql } from "../database/db.js";

const Login_User = async ({ user, password }) => {
  const result = await sql`
  select userr,namee,id from users where userr =${user} and passwordd =${password}
`;

  const rowcount = result.length;

  if (rowcount >= 1) {
    return result[0];
  } else {
    return 0;
  }
};

export default Login_User;

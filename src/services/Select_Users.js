import { sql } from "../database/db.js";

const Select_Users = async () => {
  const result = await sql`
  select * from users 
`;

  const rowcount = result.length;

  if (rowcount >= 1) {
    return result;
  } else {
    return 0;
  }
};

export default Select_Users;

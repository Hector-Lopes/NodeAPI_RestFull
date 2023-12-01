// db.js
import postgres from "postgres";
import "dotenv/config";

const { PGDATABASE, PGUSER, PGPASSWORD, ENDPOINT_ID } = process.env;

const URL = `postgres://${PGUSER}:${PGPASSWORD}@${process.env.PGHOST}/${PGDATABASE}?options=endpoint%3D${ENDPOINT_ID}`;

export const sql = postgres(URL, { ssl: "require" });
console.log(URL);

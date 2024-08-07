import { type ClientSchema, a, defineData } from "@aws-amplify/backend";

import { preSignUp } from "../auth/pre-sign-up/resource";
import { myDynamoDBFunction } from "../functions/dynamoDB-function/resource";

/*== STEP 1 ===============================================================
The section below creates a Todo database table with a "content" field. Try
adding a new "isDone" field as a boolean. The authorization rule below
specifies that any unauthenticated user can "create", "read", "update", 
and "delete" any "Todo" records.
=========================================================================*/
const schema = a
  .schema({
    User: a
      .model({
        id: a.id().required(),
        email: a.string(),
        firstName: a.string(),
        lastName: a.string(),
        role: a.string().default("FirstTimeUser"),
        totalEarnings: a.float(),
        completedRegistration: a.boolean(),
        numberSessionsAttended: a.integer(),
        profileOwner: a
          .string()
          .authorization((allow) => [
            allow.ownerDefinedIn("profileOwner").to(["read"]),
          ]),
        sessionsAttended: a.hasMany("SessionAttended", "sessionAttendedId"),
      })
      .authorization((allow) => [
        allow.group("GuestUser").to(["read"]),
        allow.ownerDefinedIn("profileOwner").to(["read", "update"]),
        allow.group("AdminUser").to(["read", "update", "delete", "create"]),
        allow.group("FirstTimeUser").to(["read"]),
      ]),
    SessionAttended: a
      .model({
        id: a.id().required(),
        sessionAttendedId: a.id().required(),
        earningsThatSession: a.float(),
        date: a.date().required(),
        user: a.belongsTo("User", "sessionAttendedId"),
      })
      .authorization((allow) => [
        allow.group("GuestUser").to(["read"]),
        allow.group("AdminUser").to(["read", "update", "delete", "create"]),
      ]),
    Timer: a
      .model({
        id: a.id().required(),
        nextSessionDate: a.string(),
        nextSessionTime: a.string(),
      })
      .authorization((allow) => [
        allow.group("GuestUser").to(["read"]),
        allow.group("AdminUser").to(["read", "update", "delete", "create"]),
      ]),
  })
  .authorization((allow) => [
    allow.resource(preSignUp).to(["mutate"]),
    allow.resource(myDynamoDBFunction),
  ]);

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: "userPool",
    apiKeyAuthorizationMode: {
      expiresInDays: 30,
    },
  },
});

/*== STEP 2 ===============================================================
Go to your frontend source code. From your client-side code, generate a
Data client to make CRUDL requests to your table. (THIS SNIPPET WILL ONLY
WORK IN THE FRONTEND CODE FILE.)

Using JavaScript or Next.js React Server Components, Middleware, Server 
Actions or Pages Router? Review how to generate Data clients for those use
cases: https://docs.amplify.aws/gen2/build-a-backend/data/connect-to-API/
=========================================================================*/

/*
"use client"
import { generateClient } from "aws-amplify/data";
import type { Schema } from "@/amplify/data/resource";

const client = generateClient<Schema>() // use this Data client for CRUDL requests
*/

/*== STEP 3 ===============================================================
Fetch records from the database and use them in your frontend component.
(THIS SNIPPET WILL ONLY WORK IN THE FRONTEND CODE FILE.)
=========================================================================*/

/* For example, in a React component, you can use this snippet in your
  function's RETURN statement */
// const { data: todos } = await client.models.Todo.list()

// return <ul>{todos.map(todo => <li key={todo.id}>{todo.content}</li>)}</ul>

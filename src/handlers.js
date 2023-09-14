import { rest } from "msw";

const handlers = [
  rest.get("http://localhost:8080/api/user", (req, res, context) => {
    return res(
      context.status(200),
      context.json({ username: "Redhwan Nacef" })
    );
  })
];

export { handlers, rest };

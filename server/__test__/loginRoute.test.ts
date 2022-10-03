import express from "express";
import request from "supertest";
import loginRoute from "../src/routes/loginRoute";
import { describe, expect, test } from "@jest/globals";

const app = express();
app.use(express.json());
app.use(loginRoute);

describe("POST/login", () => {
  //testing login without password or email
  test("should return status 400 if there isn't fields in the body", async () => {
    const response = await request(app).post("/login").send({});
    expect(response.status).toEqual(400);
    expect(response.error.text).toEqual(
      "Falta el correu electrònic o la contrasenya"
    );
  });
});

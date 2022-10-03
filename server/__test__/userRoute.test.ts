import express from "express";
import request from "supertest";
import userRoute from "../src/routes/userRoute";
import { describe, expect, test } from "@jest/globals";

const app = express();
app.use(express.json());
app.use(userRoute);

describe("userRoute", () => {
  describe("POST/user", () => {
    //testing register without password
    test("should return status 400 if there is no password in body", 
    async () => {
      const response = await request(app).post("/user").send({});
      expect(response.status).toEqual(400);
      expect(response.error.text).toEqual("Falta la contrasenya");
    });
    //testing register without mandatory fields
    test("should return status 400 if there are missing fields in the request", async () => {
      const response = await request(app).post("/user").send({
        email: "patatasswordtop@admin.com",
        rol: "admin",
        nombre: "esa patata",
        password: "1245",
        nombre_artista_espacio: "La freidora",
        descripcion: "Un espacio muy caliente",
      });
      expect(response.status).toEqual(400);
      expect(response.error.text).toEqual(
        "Falten camps obligatoris. Els camps obligatoris son: email, rol (artista o espai), password, nom, nom d'artista o espai, descripció, link"
      );
    });
  });

  describe("GET/users", () => {
    //testing test GET users without token
    test("should return status 403 if there is no bearer token", async () => {
      const response = await request(app).get("/users");
      expect(response.status).toEqual(403);
    });
    //testing GET users with bad tokken
    test("should return status 403 if the token is invalid", async () => {
      const response = await request(app).get("/users").set("authorization","bearer patata");
      expect(response.status).toEqual(403);
      expect(response.error.text).toEqual(
        "El token no és vàlid"
      );
    });
  });
});

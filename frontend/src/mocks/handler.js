import { http, HttpResponse } from "msw";

export const handlers = [
  http.get("http://localhost:3000/driver/1", async () => {
    return HttpResponse.json([
      {
        fullName: "Felipe Gabriel Costa de Oliveira",
        email: "felipe@gmail.com",
        country: "Brasil",
        city: "São Paulo",
        code: "ABC-123",
        carType: "Sedan",
      },
    ]);
  }),
  http.delete("http://localhost:3000/driver/1", async () => {
    return HttpResponse.json([
      {
        message: "Ok",
      },
    ]);
  }),
];

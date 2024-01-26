import "@testing-library/jest-dom";
import "jest-styled-components";

import { beforeAll, afterEach, afterAll } from "vitest";
import { server } from "./src/mocks/server";

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

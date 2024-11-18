import { jest } from "@jest/globals";
import { Figtree } from "next/font/google";
module.exports = {
  Staatliches: jest.fn(() => ({
    className: "mocked-staatliches-font",
  })),
  Mulish: jest.fn(() => ({
    className: "mocked-mulish-font",
  })),

  Figtree: jest.fn(() => ({
    className: "mocked-figtree-font",
  })),
};

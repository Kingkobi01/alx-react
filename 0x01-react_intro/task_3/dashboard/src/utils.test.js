import { getFooterCopy, getFullYear, getLatestNotification } from "./utils";

test("should return current year", () => {
  expect(getFullYear()).toBe(new Date().getFullYear());
});

test("should return correct footer copy", () => {
  expect(getFooterCopy(true)).toBe("Holberton School");
  expect(getFooterCopy(false)).toBe("Holberton Schoolmain dashboard");
});

test("should return correct notification", () => {
  expect(getLatestNotification()).toBe(
    "<strong>Urgent requirement</strong> - complete by EOD"
  );
});

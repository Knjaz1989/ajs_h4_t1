import checkHealth from "../src/js/foorball";


test.each([
  [{name: "Ivan", health: 99}, "healthy"],
  [{name: "Vasya", health: 5}, "critical"],
  [{name: "Igor", health: 16}, "wounded"]
])(
  "Check health", (data, expected) => {
    const status = checkHealth(data);
    expect(status).toBe(expected);
  }
);


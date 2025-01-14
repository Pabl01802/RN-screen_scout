const expectedTypes = [
  "feat",
  "fix",
  "test",
  "chore",
  "build",
  "refactor",
  "docs",
  "ci",
];

module.exports = {
  plugins: [
    {
      rules: {
        "conventional-config": ({ type }) => {
          if (!expectedTypes.includes(type)) {
            return [
              false,
              `Type must be one of: ${expectedTypes.join(
                ", "
              )} \n Example: feat: add new feature`,
            ];
          }
          return [true];
        },
      },
    },
  ],
  rules: {
    "conventional-config": [2, "always"],
  },
};

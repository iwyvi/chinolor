module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "type-enum": [
      2,
      "always",
      [
        "build", // Changes that affect the build system or external dependencies
        "docs", // Documentation only changes, including the changes of images and changelog
        "palette", // Changes about palette
        "scheme", // Changes about scheme
        "add", // Set some colors to new scopes
        "remove", // Delete some scopes
        "change", // Change some colors of scopes that already exist
        "fix", // A bug or typo fix
        "style" // Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
      ]
    ]
  }
};

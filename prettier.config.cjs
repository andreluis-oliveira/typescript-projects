module.exports = {
  overrides: [
    {
      "files": ["*.html"],
      "options": {
      "tabWidth": 2,
		  "printWidth": 80,
		  "singleQuote": false,
          "tabWidth": 2,
          "semi": false
      }
    },
    {
      "files": ["*.scss", "*.css"],
      "options": {
        "tabWidth": 2,
		    "printWidth": 80,
		    "singleQuote": false,
      }
    }
  ]
}

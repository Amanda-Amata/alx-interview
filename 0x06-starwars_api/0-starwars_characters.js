#!/usr/bin/node

const request = require('request');

const req = (arr, i) => {
  if (i === arr.length) return; // Base case for recursion
  request(arr[i], (err, response, body) => {
    if (err) {
      throw err; // Handle request error
    } else {
      const characterData = JSON.parse(body);
      console.log(characterData.name); // Log character name
      req(arr, i + 1); // Recursive call to process the next character
    }
  });
};

// Main request to get film details
request(`https://swapi-api.hbtn.io/api/films/${process.argv[2]}`, (err, response, body) => {
  if (err) {
    throw err; // Handle request error
  } else {
    const data = JSON.parse(body);
    const chars = data.characters;

    // Check if characters is defined and is an array
    if (Array.isArray(chars) && chars.length > 0) {
      req(chars, 0); // Call req with the characters array
    } else {
      console.log('No characters found for this film.');
    }
  }
});

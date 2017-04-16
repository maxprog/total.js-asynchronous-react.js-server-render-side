"use strict";

const API_URL='http://localhost:8000/api/';
const fetch = require('isomorphic-fetch');

module.exports = (url) => { 
                              return fetch(API_URL+url)
                                    .then(response => response.json());
                           }
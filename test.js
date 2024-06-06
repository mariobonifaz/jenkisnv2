const request = require('supertest');
const express = require('express');

const app =express();
app.get('/api/v1/welcome', (req,res) => {
    res.status(200).send('hello, world');
});

describe('GET /api/v1/welcome', () => {
    it('respond with hello world', (done) => {
        request(app)
        .get('/api/v1/welcome')
        .expect('hello, world', done);
    });
});
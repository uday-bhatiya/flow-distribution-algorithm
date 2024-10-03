import express, { request, response } from 'express';
import Astrologer from '../models/astrologer.model.js';
import User from '../models/user.model.js';
import { distributeUser } from '../controllers/distribution.controller.js';

const router = express.Router();

// sample atrologers & users
let astrologers = [
    new Astrologer(1, 'Astro 1'),
    new Astrologer(2, 'Astro 2', true) // this is top astrologer
]

let users = [
    new User(1, 'User 1'),
    new User(2, 'User 2')
]

// route for distribute users among astrologers
router.post('/distribure', ( request, response ) => {
    distributeUser(users, astrologers);
    response.send(" Users have been distributed among astrologers");

});

// route for change top astrologer status
router.put('/change-top-status/:id', ( request, response ) => {
    let astrologer = astrologers.find( astrologer => astrologer.id === parseInt(request.params.id));
    if (astrologer) {
        astrologer.isTopAtrologer = !astrologer.isTopAtrologer;
        response.send(` Astrologer ${astrologer.name} top astrologer status change to ${astrologer.isTopAtrologer}`);
    } else {
        response.status(404).send("Astrologer not found");
    }
});

export default router;
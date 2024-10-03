import { distributeUser } from '../src/controllers/distribution.controller.js';
import Astrologer from '../src/models/astrologer.model.js';
import User from '../src/models/user.model.js';

test('distribute users evenly among the astrologers', () => {
    const astrologers = [
        new Astrologer(1, 'Astro 1'),
        new Astrologer(2, 'Astro 2', true) // this is top astrologer
    ];

    const users = [
        new User(1, 'User 1'),
        new User(2, 'User 2'),
        new User(3, 'User 3'),
    ];

    distributeUser( users, astrologers );

    expect(astrologers[0].flowCount).toBe(2);
    expect(astrologers[1].flowCount).toBe(1);
});

test('give extra users to top astrologers', () => {
    const astrologers = [
        new Astrologer(1, 'Astro 1'),
        new Astrologer(2, 'Astro 2', true) // this is top astrologer
    ];
    
    const users = [
        new User(1, 'User 1'),
        new User(2, 'User 2'),
        new User(3, 'User 3'),
        new User(4, 'User 4'),
        new User(5, 'User 5'),
        new User(6, 'User 6'),
        new User(7, 'User 7'),
    ];

    distributeUser( users, astrologers );

    expect(astrologers[0].flowCount).toBeGreaterThan(astrologers[1].flowCount);
});

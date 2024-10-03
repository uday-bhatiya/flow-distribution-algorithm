// this func distribute users evenly among astrologers

export function distributeUser(users, astrologers) {
    users.forEach(user => {
        // finding the astroleger with least flow count
        let selectedAstrologer = astrologers.reduce((min, current) =>
            current.flowCount < min.flowCount ? current : min
        )

        selectedAstrologer.flowCount += 1;
        console.log(`User ${user.name} assigned to Atrologer ${selectedAstrologer.name}`);

        // giving exrta users to top astrologers
        astrologers.filter(astrologer => astrologer.topAstrologer).forEach(astrologer => {
            console.log(`Top astrologer ${astrologer.name} receives extra users`);
            astrologer.flowCount += 1;
        })
    });
}
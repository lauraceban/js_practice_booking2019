const { 
    sumDigits,
    createRange,
    getScreentimeAlertList,
    hexToRGB,
    findWinner
} = require("../challenges/week10");



describe.only("sumDigits", () => {
    test("returns the sum of all digits of any given numbers", () => {
        expect(sumDigits(1234)).toEqual(10);
        expect(sumMultiples(210)).toEqual(3);
        expect(sumMultiples(333)).toEqual(9);
    });
});




describe("createRange", () => {

    test("returns a range of numbers based on the start number, end number and step provided where step is the gap between numbers in the range", () => {
        expect(createRange(3, 11, 2)).toEqual([3, 5, 7, 9, 11]);
    });
    
    test("assumes step is equal to 1 if step is not provided", () => {
        expect(createRange(3, 11)).toEqual([3, 4, 5, 6, 7, 8, 9, 10, 11]);
    });

    test("returns a range of numbers based on the start number, end number and step provided where step is the gap between numbers in the range", () => {
        expect(createRange(0, 4, 2)).toEqual([0, 2, 4]);
    });
    
});



describe("getScreentimeAlertList", () => {
    test("returns an array of usernames of users who have used more than 100 minutes of screentime for a given date", () => {
        expect(getScreentimeAlertList("2019-05-04", 

            [
                {
                username: "beth_1234",
                name: "Beth Smith",
                screenTime: [
                             { date: "2019-05-01", usage: { twitter: 34, instagram: 22, facebook: 40} },
                             { date: "2019-05-02", usage: { twitter: 56, instagram: 40, facebook: 31} },
                             { date: "2019-05-03", usage: { twitter: 12, instagram: 15, facebook: 19} },
                             { date: "2019-05-04", usage: { twitter: 10, instagram: 56, facebook: 61} },
                            ]
                },
                {
                username: "sam_j_1989",
                name: "Sam Jones",
                screenTime: [
                             { date: "2019-06-11", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 10} },
                             { date: "2019-06-13", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16} },
                             { date: "2019-06-14", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31} },
                            ]
                },
            ]
                 
        )).toEqual(["beth_1234"]);
    });
    
    test("returns null if no user has exceeded 100 minutes of screentime on a given date", () => {
        expect(getScreentimeAlertList("2019-06-11", 

            [
                {
                username: "beth_1234",
                name: "Beth Smith",
                screenTime: [
                             { date: "2019-05-01", usage: { twitter: 34, instagram: 22, facebook: 40} },
                             { date: "2019-05-02", usage: { twitter: 56, instagram: 40, facebook: 31} },
                             { date: "2019-05-03", usage: { twitter: 12, instagram: 15, facebook: 19} },
                             { date: "2019-05-04", usage: { twitter: 10, instagram: 56, facebook: 61} },
                            ]
                },
                {
                username: "sam_j_1989",
                name: "Sam Jones",
                screenTime: [
                             { date: "2019-06-11", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 10} },
                             { date: "2019-06-13", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16} },
                             { date: "2019-06-14", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31} },
                            ]
                },
            ]
                 
        )).toEqual(null);
    }); 
       
    test("returns unknown if the date given follows the YYYY-MM-DD format but does not match any user dates", () => {
        expect(getScreentimeAlertList("2019-01-01", 

            [
                {
                username: "beth_1234",
                name: "Beth Smith",
                screenTime: [
                             { date: "2019-05-01", usage: { twitter: 34, instagram: 22, facebook: 40} },
                             { date: "2019-05-02", usage: { twitter: 56, instagram: 40, facebook: 31} },
                             { date: "2019-05-03", usage: { twitter: 12, instagram: 15, facebook: 19} },
                             { date: "2019-05-04", usage: { twitter: 10, instagram: 56, facebook: 61} },
                            ]
                },
                {
                username: "sam_j_1989",
                name: "Sam Jones",
                screenTime: [
                             { date: "2019-06-11", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 10} },
                             { date: "2019-06-13", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16} },
                             { date: "2019-06-14", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31} },
                            ]
                },
            ]
                 
        )).toEqual("unknown");
    }); 
});



describe("hexToRGB", () => {
    test("returns each hexadecimal value for R, G and B into its decimal equivalent", () => {
        expect(hexToRGB("#FF1133")).toEqual(rgb(255,17,51));
    });
    
    test("returns each hexadecimal value for R, G and B into its decimal equivalent", () => {
        expect(hexToRGB("#00FF00")).toEqual(rgb(0,255,0));
    });
    
});



describe("findWinner", () => {
    test("returns X if player X has won", () => {
        expect(findWinner([
            ["X", "0", null],
            ["X", null, "0"],
            ["X", null, "0"]
        ]).toEqual("X");
    });
    
    test("returns 0 if player 0 has won", () => {
        expect(findWinner([
            ["0", "X", null],
            ["X", "0", null],
            ["X", null, "0"]
        ]).toEqual("0");
    });
    
    test("returns null if all boxes full and no winner", () => {
        expect(findWinner(
            [["X", "0", "0"],
            ["0", "X", "X"],
            ["X", "X", "0"]]
            ).toEqual(null);
    });

    test("returns null if game still in progress and no winner yet", () => {
        expect(findWinner([
            ["X", null, "0"],
            ["0", null, "X"],
            [null, "X", "0"]
        ]).toEqual(null);
    });
});


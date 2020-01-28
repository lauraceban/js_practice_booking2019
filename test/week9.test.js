const { 
    sumMultiples,
    isValidDNA,
    getComplementaryDNA,
    isItPrime,
    createMatrix,
    areWeCovered
} = require("../challenges/week9");


describe("sumMultiples", () => {
    test("returns the sum of any numbers which are a multiple of 3 or 5", () => {
        expect(sumMultiples([3, 5, 10, 15])).toEqual(33);
        expect(sumMultiples([0, 1, 2, 3, 4, 5])).toEqual(8);
        expect(sumMultiples([4, 15])).toEqual(15);
    });
});



describe("isValidDNA", () => {
    test("returns true if the string contains only characters C, G, T or A", () => {
        expect(isValidDNA('CGAT')).toEqual(true);
    });
    
    test("returns true if the string contains only characters C, G, T or A multiple times", () => {
        expect(isValidDNA('CAATT')).toEqual(true);
    });

    test("returns true if the string contains some of the valid characters C, G, T or A and no invalid characters", () => {
        expect(isValidDNA('cat!')).toEqual(true);
    });

    
    test("returns false if the string contains any other characters than C, G, T or A", () => {
        expect(isValidDNA('CATS')).toBe(false);
    });
    
    test("returns false if the string contains any other characters than C, G, T or A", () => {
        expect(isValidDNA('cats')).toBe(false);
    });
});



describe("getComplementaryDNA", () => {
    test("returns a complementary string replacing characater A with T, T with A, G with C and C with G", () => {
        expect(getComplementaryDNA('ACTG')).toEqual('TGAC');
        expect(getComplementaryDNA('CAT')).toEqual('GTA');
    });

    test("if the string entered contains characters A, T, C or G multiple times, returns a complementary string replacing characater A with T, T with A, G with C and C with G", () => {
        expect(getComplementaryDNA('ATAC')).toEqual('TATG');
    });
});



describe("isItPrime", () => {
    test("returns true if n cannot divide evenly to any numbers except 1 and n", () => {
        expect(isItPrime(5)).toEqual(true);
        expect(isItPrime(7)).toEqual(true);
        expect(isItPrime(3)).toEqual(true);
    });

    test("returns true if n cannot divide evenly to any numbers except 1 and n", () => {
        expect(isItPrime(12)).toEqual(false);
        expect(isItPrime(105)).toEqual(false);
        expect(isItPrime(63)).toEqual(false);
    });

    test("if the number is 0 or 1, returns null", () => {
        expect(isItPrime(0)).toBe(null);
    });
});



describe("createMatrix", () => {
    test("returns an array of n arrays, each filled with n items, where the item is replaced with the fill word", () => {
        expect(createMatrix(3, foo)).toEqual(
            [
                ["foo", "foo", "foo"],
                ["foo", "foo", "foo"],
                ["foo", "foo", "foo"]
            ]
        );

        expect(createMatrix(1, foo)).toEqual(
            [
                ["foo"]
            ]
        );

        expect(createMatrix(5, foo)).toEqual(
            [
                ["foo", "foo", "foo", "foo", "foo"],
                ["foo", "foo", "foo", "foo", "foo"],
                ["foo", "foo", "foo", "foo", "foo"],
                ["foo", "foo", "foo", "foo", "foo"],
                ["foo", "foo", "foo", "foo", "foo"]
            ]
        );
    });

    test("if n is 0, returns null", () => {
        expect(createMatrix(0, foo)).toBe(null);
    });

});



describe("areWeCovered", () => {
    test("returns true if the sum of staff present on chosen day is equal to 3 or more", () => {
        expect(areWeCovered(
            [
                { name: "Sally", rota: ["Monday", "Tuesday", "Friday"] },
                { name: "Pedro", rota: ["Tuesday", "Wednesday", "Saturday", "Sunday"] },
                { name: "Laura", rota: ["Monday", "Wednesday", "Thurday", "Friday", "Saturday"] },
                { name: "Cathy", rota: ["Thursday", "Friday", "Saturday"] },
                { name: "Chris", rota: ["Thursday", "Saturday", "Sunday"] }
            ]
        , Friday)).toEqual(true);


        expect(areWeCovered(
            [
                { name: "Sally", rota: ["Monday", "Tuesday", "Friday"] },
                { name: "Pedro", rota: ["Tuesday", "Wednesday", "Saturday", "Sunday"] },
                { name: "Laura", rota: ["Monday", "Wednesday", "Thurday", "Friday", "Saturday"] },
                { name: "Cathy", rota: ["Thursday", "Friday", "Saturday"] },
                { name: "Chris", rota: ["Thursday", "Saturday", "Sunday"] }
            ]
        , Saturday)).toEqual(true);
    });
    

    test("returns false if the sum of staff present on chosen day is less than 3", () => {
        expect(areWeCovered(
            [
                { name: "Sally", rota: ["Monday", "Tuesday", "Friday"] },
                { name: "Pedro", rota: ["Tuesday", "Wednesday", "Saturday", "Sunday"] },
                { name: "Laura", rota: ["Monday", "Wednesday", "Thurday", "Friday", "Saturday"] },
                { name: "Cathy", rota: ["Thursday", "Friday", "Saturday"] },
                { name: "Chris", rota: ["Thursday", "Saturday", "Sunday"] }
            ]
        , Monday)).toEqual(false);


        expect(areWeCovered(
            [
                { name: "Sally", rota: ["Monday", "Tuesday", "Friday"] },
                { name: "Pedro", rota: ["Tuesday", "Wednesday", "Saturday", "Sunday"] },
                { name: "Laura", rota: ["Monday", "Wednesday", "Thurday", "Friday", "Saturday"] },
                { name: "Cathy", rota: ["Thursday", "Friday", "Saturday"] },
                { name: "Chris", rota: ["Thursday", "Saturday", "Sunday"] }
            ]
        , Sunday)).toEqual(false);
        
    });

    
    test("returns null if the day entered does not match the days of the week", () => {
        expect(areWeCovered(
            [
                { name: "Sally", rota: ["Monday", "Tuesday", "Friday"] },
                { name: "Pedro", rota: ["Tuesday", "Wednesday", "Saturday", "Sunday"] },
                { name: "Laura", rota: ["Monday", "Wednesday", "Thurday", "Friday", "Saturday"] },
                { name: "Cathy", rota: ["Thursday", "Friday", "Saturday"] },
                { name: "Chris", rota: ["Thursday", "Saturday", "Sunday"] }
            ]
        , Someday)).toBe(null);
    });


    test("counts each object name in the array even if it repeats itself and returns true if the sum of staff on the day chosen is equal to 3 or more", () => {
        expect(areWeCovered(
            [
                { name: "Sally", rota: ["Monday", "Tuesday", "Friday"] },
                { name: "Sally", rota: ["Tuesday", "Wednesday", "Saturday", "Sunday"] },
                { name: "Laura", rota: ["Monday", "Wednesday", "Thurday", "Friday", "Saturday"] },
                { name: "Cathy", rota: ["Thursday", "Friday", "Saturday"] },
                { name: "Chris", rota: ["Thursday", "Saturday", "Sunday"] }
            ]
        , Friday)).toBe(true);
    });


    test("ignores uppercase or lowercase characters in day", () => {
        expect(areWeCovered(
            [
                { name: "Sally", rota: ["Monday", "Tuesday", "Friday"] },
                { name: "Pedro", rota: ["Tuesday", "Wednesday", "Saturday", "Sunday"] },
                { name: "Laura", rota: ["Monday", "Wednesday", "Thurday", "Friday", "Saturday"] },
                { name: "Cathy", rota: ["Thursday", "Friday", "Saturday"] },
                { name: "Chris", rota: ["Thursday", "Saturday", "Sunday"] }
            ]
        , friday)).toBe(true);

        expect(areWeCovered(
            [
                { name: "Sally", rota: ["Monday", "Tuesday", "Friday"] },
                { name: "Pedro", rota: ["Tuesday", "Wednesday", "Saturday", "Sunday"] },
                { name: "Laura", rota: ["Monday", "Wednesday", "Thurday", "Friday", "Saturday"] },
                { name: "Cathy", rota: ["Thursday", "Friday", "Saturday"] },
                { name: "Chris", rota: ["Thursday", "Saturday", "Sunday"] }
            ]
        , FRIDAY)).toBe(true);
    });
});
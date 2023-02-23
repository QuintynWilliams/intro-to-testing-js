// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});

describe('sayHello', function() {
    it('should be a defined function', function() {
        expect(typeof sayHello).toBe('function');
    });
    it('should return a string when called', function() {
        expect(typeof sayHello()).toBe("string");
    });
    it('should return the string "Hello, !" when executed', function() {
        expect(sayHello('')).toBe("Hello, !");
    });
    it("should never return 'undefined' when called", function() {
        expect(sayHello()).not.toBe(undefined);
    });
    it (`should return "Hello, Jane" when called`, function() {
        expect(sayHello("Jane")).toBe("Hello, Jane!");
    })
    it(`should return "Hello, Alex!" when called`, function() {
        expect(sayHello("Alex")).toBe(`Hello, Alex!`)
    })
    it(`should return "Hello, Pat!" when called`, function() {
        expect(sayHello("Pat")).toBe(`Hello, Pat!`)
    })
    it(`should return "Hello, World!" when called`, function() {
        expect(sayHello(true)).toBe(`Hello, World!`)
    })
    it(`should return "Hello, World!" when called`, function() {
        expect(sayHello(false)).toBe(`Hello, World!`)
    })
});

describe('isFive', function() {
    it('should be a defined function', function() {
        expect(typeof isFive).toBe('function');
    });
});

describe('isEven', function() {
    it('should be a defined function', function() {
        expect(typeof isEven).toBe('function');
    });
    it('should return a boolean when called', function() {
        expect(typeof isEven()).toBe("boolean");
    });
    it("should never return 'undefined' when called", function() {
        expect(isEven()).not.toBe(undefined);
    });
    it (`should return true when called`, function() {
        expect(isEven(2)).toBe(true);
    })
    it(`should return true when called`, function() {
        expect(isEven(-4)).toBe(true)
    })
    it(`should return false when called`, function() {
        expect(isEven(3)).toBe(false)
    })
    it(`should return false when called`, function() {
        expect(isEven("banana")).toBe(false)
    })
    it(`should return false when called`, function() {
        expect(isEven(true)).toBe(false)
    })
});

describe('isVowel', function() {
    it('should be a defined function', function() {
        expect(typeof isVowel).toBe('function');
    });
    it (`should return true when called`, function() {
        expect(isVowel("a")).toBe(true);
    })
    it(`should return true when e is called`, function() {
        expect(isVowel("e")).toBe(true)
    })
    it(`should return true when o is called`, function() {
        expect(isVowel("o")).toBe(true)
    })
    it(`should return false when b is called`, function() {
        expect(isVowel("b")).toBe(false)
    })
    it(`should return false when called`, function() {
        expect(isVowel(true)).toBe(false)
    })
});

describe('add', function() {
    it('should be a defined function', function() {
        expect(typeof add).toBe('function');
    });
    it (`should return 5 when called`, function() {
        expect(add(2, 3)).toBe(5);
    })
    it(`should return -12 when called`, function() {
        expect(add(-3, -9)).toBe(-12)
    })
    it(`should return 11 when called`, function() {
        expect(add("5", 6)).toBe(11)
    })
    it(`should return 6 when called`, function() {
        expect(add("-4", "10")).toBe(6)
    })
    it(`should return NaN when strings called`, function() {
        expect(add("banana", "split")).toBe("NaN")
    })
    it(`should return NaN when string called`, function() {
        expect(add(2, "apples")).toBe("NaN")
    })
    it(`should return NaN when nothing is called`, function() {
        expect(add()).toBe("NaN")
    })
});
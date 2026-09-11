class SecretRule {
    static #nextId = 1;

    constructor(name, description, additionalPointsFn, pointMultiplierFn) {
        this.id = SecretRule.#nextId++;
        this.name = name;
        this.description = description;
        this.additionalPointsFn = additionalPointsFn;
        this.pointMultiplierFn = pointMultiplierFn;
    }

    getAdditionalPoints(shirt) {
        return this.additionalPointsFn(shirt);
    }

    getPointMultiplier(shirt) {
        return this.pointMultiplierFn(shirt);
    }

    // Pre-defined master list of SecretRules
    static POOL = [
        new SecretRule(
            "Vowel Power",
            "+10 points per vowel in the caption.",
            (shirt) => (shirt.caption.match(/[aeiou]/gi) || []).length * 10,
            () => 1
        ),
        new SecretRule(
            "E-xcellent E",
            "Points equal to number of 'E's, multiplier increases by total 'E' count + 1.",
            (shirt) => (shirt.caption.match(/e/gi) || []).length,
            (shirt) => (shirt.caption.match(/e/gi) || []).length + 1
        ),
        new SecretRule(
            "A-mazing A",
            "Points equal to number of 'A's, multiplier increases by total 'A' count + 1.",
            (shirt) => (shirt.caption.match(/a/gi) || []).length,
            (shirt) => (shirt.caption.match(/a/gi) || []).length + 1
        ),
        new SecretRule(
            "I-conic I",
            "Points equal to number of 'I's, multiplier increases by total 'I' count + 1.",
            (shirt) => (shirt.caption.match(/i/gi) || []).length,
            (shirt) => (shirt.caption.match(/i/gi) || []).length + 1
        ),
        new SecretRule(
            "O-verpowered O",
            "Points equal to number of 'O's, multiplier increases by total 'O' count + 1.",
            (shirt) => (shirt.caption.match(/o/gi) || []).length,
            (shirt) => (shirt.caption.match(/o/gi) || []).length + 1
        ),
        new SecretRule(
            "U-nique U",
            "Points equal to number of 'U's, multiplier increases by total 'U' count + 1.",
            (shirt) => (shirt.caption.match(/u/gi) || []).length,
            (shirt) => (shirt.caption.match(/u/gi) || []).length + 1
        ),
        new SecretRule(
            "Y-Not Y?",
            "Points equal to number of 'Y's, multiplier increases by total 'Y' count + 1.",
            (shirt) => (shirt.caption.match(/y/gi) || []).length,
            (shirt) => (shirt.caption.match(/y/gi) || []).length + 1
        ),
        new SecretRule(
            "Minimalist",
            "2x multiplier if the caption is 12 characters or fewer.",
            () => 0,
            (shirt) => (shirt.caption.length > 0 && shirt.caption.length <= 12 ? 2 : 1)
        ),
        new SecretRule(
            "Sesquipedalian",
            "2x multiplier if the caption is 24 characters or more.",
            () => 0,
            (shirt) => (shirt.caption.length > 0 && shirt.caption.length >= 24 ? 2 : 1)
        ),
        new SecretRule(
            "Wordy Design",
            "+5 points per word in the caption.",
            (shirt) => (shirt.caption.trim() ? shirt.caption.trim().split(/\s+/).length * 5 : 0),
            () => 1
        ),
        new SecretRule(
            "LOUD",
            "+60 points if caption is written entirely in UPPERCASE.",
            (shirt) => (shirt.caption && shirt.caption === shirt.caption.toUpperCase() ? 60 : 0),
            () => 1
        ),
        new SecretRule(
            "quiet",
            "+60 points if caption is written entirely in lowercase.",
            (shirt) => (shirt.caption && shirt.caption === shirt.caption.toLowerCase() ? 60 : 0),
            () => 1
        ),
        new SecretRule(
            "CAPITAL GAINS",
            "+5 points for every uppercase letter in the caption.",
            (shirt) => (shirt.caption.match(/[A-Z]/g) || []).length * 5,
            () => 1
        ),
        new SecretRule(
            "lowercase living",
            "+5 points for every lowercase letter in the caption.",
            (shirt) => (shirt.caption.match(/[a-z]/g) || []).length * 5,
            () => 1
        ),
        new SecretRule(
            "Off-White Canvas",
            "+50 points if the shirt background is not white.",
            (shirt) => (shirt.color !== "white" && shirt.color !== "#ffffff" ? 50 : 0),
            () => 1
        ),
        new SecretRule(
            "Details",
            "+75 points for every tag attached to the shirt.",
            (shirt) => shirt.tagList.length * 75,
            () => 1
        ),
        new SecretRule(
            "Dark Mode",
            "1.5x multiplier if the shirt color is black.",
            () => 0,
            (shirt) => (shirt.color === "black" || shirt.color === "#000000" ? 1.5 : 1)
        ),
        new SecretRule(
            "Tag Collector",
            "+25 points for every unique tag applied.",
            (shirt) => shirt.tagList.length * 25,
            () => 1
        ),
        new SecretRule(
            "Feline Friendly",
            "+100 points if the shirt is tagged with 'cat'.",
            (shirt) => (shirt.tagList.includes("cat") ? 100 : 0),
            () => 1
        ),
        new SecretRule(
            "Canine Companion",
            "+100 points if tagged with 'dog'.",
            (shirt) => (shirt.tagList.includes("dog") ? 100 : 0),
            () => 1
        )
    ];

    // Randomly picks 3 unique SecretRules from the pool
    static getDailySecretRules() {
        const shuffled = [...SecretRule.POOL].sort(() => 0.5 - Math.random());
        return shuffled.slice(0, 3);
    }
}
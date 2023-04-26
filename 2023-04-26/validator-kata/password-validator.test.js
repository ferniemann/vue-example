describe("Password Validator", function () {
  it("hasConsecutiveNumbers should return true", function () {
    const result = hasConsecutiveNumbers("ab124");
    chai.expect(result).to.equal(true);
  });

  it("hasConsecutiveCharacters should return true", function () {
    const result = hasConsecutiveCharacters("13ab4");
    chai.expect(result).to.equal(true);
  });

  it("hasConsecutiveCharacters should return false", function () {
    const result = hasConsecutiveCharacters("13ac4");
    chai.expect(result).to.equal(false);
  });

  it("hasConsecutiveCharactersOrNumbers should return true", function () {
    const result = hasConsecutiveNumbers("12");
    chai.expect(result).to.equal(true);
  });

  it("hasConsecutiveCharactersOrNumbers should return true", function () {
    const result = hasConsecutiveCharacters("ab");
    console.log(result);
    chai.expect(result).to.equal(true);
  });

  // it("should test password ...", function () {
  //   const result = validatePassword("!a1b2c3c4#");
  //   chai.expect(result.valid).to.equal(true);
  //   chai.expect(result.reasons.length).to.equal(0);
  // });

  // it("should test password ...", function () {
  //   const result = validatePassword("!!a1b2c3c4");
  //   chai.expect(result.valid).to.equal(false);
  //   chai.expect(result.reasons.length).to.equal(1);
  //   chai
  //     .expect(result.reasons.includes("duplicate special character"))
  //     .to.equal(true);
  // });

  // TODO: add your own tests here for all possible error messages (not combinations)

  // it("should test password ...", function () {
  // ...
  // });
});

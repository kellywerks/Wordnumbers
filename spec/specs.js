describe('numberToWord', function() {
  it('gives us the string "one" when we input the number 1', function() {
    numberToWord(1).should.equal("one");
  });

  it('gives us the string name for any single digit entry', function() {
    numberToWord(5).should.equal("five");
  });

  it('gives us the string name for any tens digit number', function() {
    numberToWord(10).should.equal("ten");
  });

  it('gives us the string name for a number >9 and less than 20', function() {
    numberToWord(19).should.equal("nineteen");
  });

  it('gives us the string name for twenty', function() {
    numberToWord(20).should.equal("twenty");
  });

  it('gives us the string name for 22', function() {
    numberToWord(22).should.equal("twenty-two");
  });

  it('gives us the string name for numbers < 100', function() {
    numberToWord(64).should.equal("sixty-four");
  });

  it('gives us the string name for numbers between 100 and 199', function(){
    numberToWord(144).should.equal("one hundred forty-four");
  });

});
  





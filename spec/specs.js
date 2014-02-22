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

  it('gives us the string name for 100', function(){
    numberToWord(100).should.equal("one hundred ");
  });

   it('gives us the string name for 100 thru 109', function(){
    numberToWord(109).should.equal("one hundred nine");
  });
   it('gives us the string name for 100 to 999', function() {
    numberToWord(244).should.equal('two hundred forty-four');
   })

});
  

describe('last2Digits', function(x,y) {
  it('gives us the string name for the last two digits of a number with 2 or more digits', function() {
    last2Digits(2,0).should.equal("twenty");
  });

});




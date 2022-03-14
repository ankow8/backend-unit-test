const formatFullname = require('../formatFullname');
const expect = require('chai').expect;

describe('FormatFullName', () => {
  it('should return an error if "fullName" arg is not a string', () => {
    expect(formatFullname(undefined)).to.equal('Error');
    expect(formatFullname(3)).to.equal('Error');
    expect(formatFullname({})).to.equal('Error');
    expect(formatFullname([])).to.equal('Error');
    expect(formatFullname(function() {})).to.equal('Error');
  });
  it('should return an error if "fullName" arg is 0', () => {
    expect(formatFullname('')).to.equal('Error');
  });
  it('should return an error when arg has more than one spaces', () => {
    expect(formatFullname('Junior John Doe')).to.equal('Error');
    expect(formatFullname('John')).to.equal('Error');
  });
  it('should return correctly converted firstName and lastName', () => {
    expect(formatFullname('jOHN dOE')).to.equal('John Doe');
    expect(formatFullname('john doe')).to.equal('John Doe');
    expect(formatFullname('JOHN DOE')).to.equal('John Doe');
  });
});

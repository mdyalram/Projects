
it('should calculate the monthly rate correctly', function () {
  const values = {
    amount: 1000,
    years: 8,
    rate: 5.8
  };
  expect(calculateMonthlyPayment(values)).toEqual('13.04');
});


it("should return a result with 2 decimal places", function() {
  const values = {
    amount: 1000,
    years: 8,
    rate: 5.8
  };
  expect(calculateMonthlyPayment(values)).toEqual('13.04');
  
});

it("should have a low interest rate", function(){ 
  const values = {
    amount: 1000,
    years: 10,
    rate: 1
  };
  expect(calculateMonthlyPayment(values)).toEqual('8.76');
});

it("should have no interest rate", function() {
  const values = {
    amount: 0,
    years: 8,
    rate: 5.8
  };
  expect(calculateMonthlyPayment(values)).toEqual('0.00');
});

/// etc

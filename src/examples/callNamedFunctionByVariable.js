const objTest = {
  testCall() {
    console.log('call');
  }
};

const funcName = 'testCall';

objTest[funcName]();

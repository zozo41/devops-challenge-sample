let É = 2, ó = 3, Ë = É << É, þ = Ë + ~[];

let getChar = (exp) => eval(exp);

let payload =
  getChar("(!'' + '')[ó - É]") +  // "r"
  getChar("(!'' + '')[ó]") +      // "u"
  getChar("(!'' + '')[ó - ó]") +  // "t"
  getChar("(!'' + '')[É]");       // "e"
// etc...

console.log(payload);

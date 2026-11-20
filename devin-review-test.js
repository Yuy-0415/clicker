// devin-review-test.js
// 用于验证 Devin Review 是否会把 comment 写回 PR

function add(a, b) {
  return a + b;
}

// 故意留一个「潜在安全问题」让 review 有东西可说
function unsafeEval(userInput) {
  return eval(userInput);   // 明显的 eval 注入
}

function divide(a, b) {
  return a / b;             // 潜在的除零
}

module.exports = { add, unsafeEval, divide };

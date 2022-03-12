// 程式碼寫在這裡
// 提示：BMI = 體重(kg) / 身高(m) 平方

function bmiCalculator(height, weight) {
  var w = parseInt(weight)
  var h = parseInt(height) / 100
  return (w / (h * h)).toFixed(2)
}

document.addEventListener("DOMContentLoaded", () => {
  const btn = document.querySelector("button")

  btn.addEventListener("click", () => {
    const height = document.querySelector("#bodyHeight").value
    const weight = document.querySelector("#bodyWeight").value
    const resultArea = document.querySelector("#resultText")

    if (height != "" && weight != "") {
      resultArea.innerHTML = bmiCalculator(height, weight)
    }
  })
})

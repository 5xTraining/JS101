// 程式碼寫在這裡
document.addEventListener("DOMContentLoaded", () => {
  const plusBtn = document.querySelector("#plus")
  const minusBtn = document.querySelector("#minus")
  const counter = document.querySelector("#counter")

  plusBtn.addEventListener("click", () => {
    let currentValue = parseInt(counter.value)
    counter.value = currentValue + 1
  })

  minusBtn.addEventListener("click", () => {
    let currentValue = parseInt(counter.value)
    if (currentValue > 0) {
      counter.value = currentValue - 1
    }
  })
})

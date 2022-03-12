// 程式碼寫這裡

document.addEventListener("DOMContentLoaded", () => {
  const keyword = document.querySelector("#searchKeyword")
  const form = document.querySelector("#searchForm")

  form.addEventListener("submit", (e) => {
    // 把原本 Form 的行為先停下來
    e.preventDefault()

    const query = keyword.value.trim()

    if (query !== "") {
      const api =
        "https://tcgbusfs.blob.core.windows.net/dotapp/youbike/v2/youbike_immediate.json"

      fetch(api)
        .then((resp) => resp.json())
        .then((sites) => {
          const bikeList = document.querySelector(".siteList")
          bikeList.innerHTML = ""

          sites
            .filter((site) => site.ar.includes(query))
            .forEach((site) => {
              const item = `<li class="list-group-item fs-5">
                <i class="fas fa-bicycle"></i>
                ${site.sna.replace("YouBike2.0_", "")} (${site.sbi})<br />
                <small class="text-muted">${site.ar}</small>
              </li>`
              bikeList.insertAdjacentHTML("beforeend", item)
            })
        })
    }
  })
})

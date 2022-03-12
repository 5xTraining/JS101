// 程式碼寫這裡

$().ready(() => {
  const keyword = $("#searchKeyword")
  const form = $("#searchForm")

  form.submit((e) => {
    // 把原本 Form 的行為先停下來
    e.preventDefault()

    const query = keyword.val()

    if (query !== "") {
      const url =
        "https://tcgbusfs.blob.core.windows.net/dotapp/youbike/v2/youbike_immediate.json"

      $.ajax({ url }).done((sites) => {
        const bikeList = $(".siteList")
        bikeList.html = ""

        sites
          .filter((site) => site.ar.includes(query))
          .forEach((site) => {
            const item = `<li class="list-group-item fs-5">
                <i class="fas fa-bicycle"></i>
                ${site.sna.replace("YouBike2.0_", "")} (${site.sbi})<br />
                <small class="text-muted">${site.ar}</small>
              </li>`
            bikeList.append(item)
          })
      })
    }
  })
})

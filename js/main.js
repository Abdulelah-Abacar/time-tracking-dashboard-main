let lis = document.querySelectorAll(".card1 ul li"),
    cur = document.querySelectorAll(".hours span"),
    howLong = document.querySelectorAll(".more-info span:first-of-type"),
    prev = document.querySelectorAll(".more-info span:last-of-type");

let reg = new XMLHttpRequest();
reg.open('GET', '../data.json');
reg.send()

reg.onreadystatechange = function () {
  if (this.readyState === 4 && this.status === 200) {
    let mainData = JSON.parse(this.responseText);
    lis.forEach(li => {
      li.addEventListener("click", () => {
        lis.forEach(ele => {
          ele.classList.remove("active")
        })
        li.classList.add("active")
        if (li.classList.contains("active")) {
          if (li.textContent == "Daily") {
            howLong.forEach((ele) => ele.textContent = "Yesterday");
            cur.forEach((hour) => {
              for (let i = 0; i < mainData.length; i++) {
                if (hour.parentElement.parentElement.parentElement.parentElement.classList.contains(mainData[i].title.toLowerCase())) {
                  hour.textContent = mainData[i]['timeframes'][li.textContent.toLowerCase()].current;
                }
              }
            })
            prev.forEach((hour) => {
              for (let i = 0; i < mainData.length; i++) {
                if (hour.parentElement.parentElement.parentElement.parentElement.classList.contains(mainData[i].title.toLowerCase())) {
                  hour.textContent = mainData[i]['timeframes'][li.textContent.toLowerCase()].previous;
                }
              }
            })
          } else if (li.textContent == "Weekly") {
            howLong.forEach((ele) => ele.textContent = "Last Week");
            cur.forEach((hour) => {
              for (let i = 0; i < mainData.length; i++) {
                if (hour.parentElement.parentElement.parentElement.parentElement.classList.contains(mainData[i].title.toLowerCase())) {
                  hour.textContent = mainData[i]['timeframes'][li.textContent.toLowerCase()].current;
                }
              }
            })
            prev.forEach((hour) => {
              for (let i = 0; i < mainData.length; i++) {
                if (hour.parentElement.parentElement.parentElement.parentElement.classList.contains(mainData[i].title.toLowerCase())) {
                  hour.textContent = mainData[i]['timeframes'][li.textContent.toLowerCase()].previous;
                }
              }
            })
          } else if (li.textContent == "Monthly") {
            howLong.forEach((ele) => ele.textContent = "Last Month");
            cur.forEach((hour) => {
              for (let i = 0; i < mainData.length; i++) {
                if (hour.parentElement.parentElement.parentElement.parentElement.classList.contains(mainData[i].title.toLowerCase())) {
                  hour.textContent = mainData[i]['timeframes'][li.textContent.toLowerCase()].current;
                }
              }
            })
            prev.forEach((hour) => {
              for (let i = 0; i < mainData.length; i++) {
                if (hour.parentElement.parentElement.parentElement.parentElement.classList.contains(mainData[i].title.toLowerCase())) {
                  hour.textContent = mainData[i]['timeframes'][li.textContent.toLowerCase()].previous;
                }
              }
            })
          } 
        }
      })
    })

  }
}

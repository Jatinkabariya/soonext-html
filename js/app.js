
/**
 * @var launchDate should be Day of month
 * @var launchMonth should be month year
 * @var launchYear launching Year
 */
const
    launchDate = "12",
    launchMonth = "12",
    launchYear = "2025";

// countdown
(function () {
    const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;

    let today = new Date(),
        dd = String(today.getDate()).padStart(2, "0"),
        mm = String(today.getMonth() + 1).padStart(2, "0"),
        yyyy = today.getFullYear(),
        launchingDate = `${launchDate}/${launchMonth}/${launchYear}`;

    today = mm + "/" + dd + "/" + yyyy;
    if (today > launchingDate) {
        launchingDate = `${launchDate}/${launchMonth}/${parseInt(launchYear) + 1}`;;
    }
    //end

    const countDown = new Date(launchingDate).getTime(),
        x = setInterval(function () {

            const now = new Date().getTime(),
                distance = countDown - now;

            if (document.getElementById("days")) document.getElementById("days").innerText = Math.floor(distance / (day))
            if (document.getElementById("hours")) document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour))
            if (document.getElementById("minutes")) document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute))
            if (document.getElementById("seconds")) document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second)

            //do something later when date is reached
            if (distance < 0) {
                document.getElementById("headline").innerText = "Well Come!";
                document.getElementById("countdown").style.display = "none";
                document.getElementById("content").style.display = "block";
                clearInterval(x);
            }
            //seconds
        }, 0)
}());
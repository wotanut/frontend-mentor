var actual_JSON;
var timeframe = "";
var daily;
var weekly;
var monthly;
var details;

function loadJSON(callback) {
  var xobj = new XMLHttpRequest();
  xobj.overrideMimeType("application/json");
  xobj.open(
    "GET",
    "https://playgrounds.sambot.dev/time-tracking/data.json",
    true
  );
  xobj.onreadystatechange = function () {
    if (xobj.readyState == 4 && xobj.status == "200") {
      // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
      callback(xobj.responseText);
    }
  };
  xobj.send(null);
}

document.addEventListener("DOMContentLoaded", function () {
  daily = document.getElementById("daily");
  weekly = document.getElementById("weekly");
  monthly = document.getElementById("monthly");
  details = document.getElementsByClassName("details");

  loadJSON((response) => {
    // Parse JSON string into object
    actual_JSON = JSON.parse(response);
    loadDetails("weekly");
  });

  daily.onclick = function () {
    changeState(daily);
    loadDetails("daily");
  };

  weekly.onclick = function () {
    changeState(weekly);
    loadDetails("weekly");
  };

  monthly.onclick = function () {
    changeState(monthly);
    loadDetails("monthly");
  };

  function loadDetails(timeFrame) {
    for (let index = 0; index < details.length; index++) {
      const element = details[index];
      const json = actual_JSON[index];
      var current = "";
      var previous = "";

      if (timeFrame == "daily") {
        current = json.timeframes.daily.current + "hrs";
        previous = "Yesterday - " + json.timeframes.daily.previous + "hrs";
      }

      if (timeFrame == "weekly") {
        current = json.timeframes.weekly.current + "hrs";
        previous = "Last Week - " + json.timeframes.weekly.previous + "hrs";
      }

      if (timeFrame == "monthly") {
        current = json.timeframes.monthly.current + "hrs";
        previous = "Last Month - " + json.timeframes.monthly.previous + "hrs";
      }

      element.children[0].innerText = current;
      element.children[1].innerText = previous;
    }
  }

  function changeState(newTimeframe) {
    daily.classList.remove("active");
    monthly.classList.remove("active");
    weekly.classList.remove("active");
    newTimeframe.classList.add("active");
  }
});

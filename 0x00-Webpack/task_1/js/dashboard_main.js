import $ from "jquery";
import _ from "lodash";
$("body").append("<p>Holberton Dashboard</p>");
$("body").append("<p>Dashboard data for the students</p>");
$("body").append("<p id='count'></p>");
$("body").append("<button>Click here to get started</button>");
$("body").append("<p>Copyright - Holberton School</p>");

function updateCounter() {
  let clickCount = 0;
  $("button").click(
    _.debounce(() => {
      clickCount += 1;

      $("#count").text(`(${clickCount}) clicks on the button`);
    })
  );
}

updateCounter();

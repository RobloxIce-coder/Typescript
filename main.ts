import { Logger } from './log';

let teleport = $("#teleport");

$(document).ready(function() {
Logger.log("Typescript bekerja dengan sempurna :D!");
Logger.log("Horeee🎉🎉🎉");

teleport.on("click", () => {
  $("div").css("display", "flex");
  $("#iya").css("display", "flex");
  $("#tidak").css("display", "flex");
});

$("#iya").on("click", () => {
  $("div").css("display", "none");
  window.location.href = "https://terraria-flow.vercel.app/";
});

$("#tidak").on("click", () => {
  $("div").css("display", "none");
});
});

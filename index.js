var homeIcon = $("#homeIcon");
var leftArrowIcon = $("#leftArrowIcon");
var rightArrowIcon = $("#rightArrowIcon");
var reloadIcon = $("#reloadIcon");
var searchBarInput = $("#searchBar input");
var starIconUnFilled = $("#starIconUnFilled");
var starIconFilled = $("#starIconFilled");
var downloadIcon = $("downloadIcon");
var plusIcon = $("#plusIcon");
var tabNumIcon = $("#tabNumIcon");
var micIcon = $("#micIcon");
var kebabMenuIcon = $("#kebabMenuIcon");

var mainIframe = $("#mainIframe");
var allTabs = $("#allTabs");
var bookmarkPage = $("#bookmarkPage");
var allTabsIframe = document.getElementById("allTabsiframe");
var numOfTabs = 1;
var numOfBookmarks = 0;

function alertGuide() {
  alert("Hello, thankyou for visiting my clone of Google Chrome! \n \nFor source code, visit https://github.com/yadavv101/Google-Chrome-Clone");
}
$(function() {
  setInterval(checkNumOfTabs);
  setInterval(checkNumOfBookmarks);
  starIconFilled.hide();
  allTabs.hide();
  bookmarkPage.hide();
  alertGuide();
});
function checkNumOfTabs() {
  tabNumIcon.html(numOfTabs);
  if (numOfTabs >= 6) {
    plusIcon.css("visibility", "hidden");
    $("main #allTabs #plusIcon, #newTabText").css("visibility", "hidden");
  }
  else if (numOfTabs <= 0) {
    createNewTab();
  }
  else {
    plusIcon.css("visibility", "initial");
    $("main #allTabs #plusIcon, #newTabText").css("visibility", "initial");
  }
}
function checkNumOfBookmarks() {
  $("#numOfBookmarks").html(numOfBookmarks);
}

function navigateHomePage() {
  mainIframe.attr("src", "https://www.google.com/webhp?igu=1");
  searchBarInput.attr("value", "https://www.google.com/webhp?igu=1");
  mainIframe.show();
  allTabs.hide();
  bookmarkPage.hide();
}
function navigatePreviousPage() {
  history.go(-1);
}
function navigateFollowingPage() {
  history.go(1);
}
function reloadPage() {
  document.location.reload();
  //It will also work the same:
  //history.go();
}
function searchSite() {
  mainIframe.attr("src", searchBarInput.val());
  mainIframe.show();
}
function bookmarkPage() {
  starIconUnFilled.hide();
  starIconFilled.show();
  numOfBookmarks++;
}
function unBookmarkPage() {
  starIconUnFilled.show();
  starIconFilled.hide();
  numOfBookmarks--;
}
function createNewTab() {
  document.getElementById("tabs").innerHTML += '<div class="tab bg-dark alert alert-dismissible"><span id="site">New Tab</span><button type="button" class="bg-dark text-white" data-bs-dismiss="alert" onclick="numOfTabs--;">&times;</button></div>';
  numOfTabs++;
  searchBarInput.attr("value", "");
  starIconFilled.hide();
  starIconUnFilled.show();
  mainIframe.hide();
  //For #allTabs:
  document.getElementById("allTabsSites").innerHTML += ' <div class="alert alert-dismissible p3-border-round-large p3-padding mx-auto"><span class="siteName">Tab</span><button type="button" class="text-white p3-border-none" data-bs-dismiss="alert">&times;</button><iframe src="" frameborder="0" id="allTabsIframe"></iframe></div>';
}
function closeTab() {
  numOfTabs--;
  starIconFilled.hide();
  starIconUnFilled.show();
  Toast({
    text: 'Cloased Tab',
    position: 'Bottom',
    timer: 2000,
    theme: 'dark',
    animation: 'right',
  });
}
function openAllTabsPage() {
  mainIframe.hide();
  bookmarkPage.hide();
  allTabs.show();
}
function closeAllTabsPage() {
  mainIframe.show();
  allTabs.hide();
}
function openBookmarkPage() {
  bookmarkPage.show();
  allTabs.hide();
  mainIframe.hide();
}
function closeBookmarkPage() {
  bookmarkPage.hide();
  mainIframe.show();
}
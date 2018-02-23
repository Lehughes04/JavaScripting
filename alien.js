//set up document variables
var $alien = document.getElementById("alien");
var $submit = document.querySelector("#submission");
var $dTime = document.querySelector("#dtime");
var $city = document.querySelector("#city");
var $state = document.querySelector("#state");
var $country = document.querySelector("#country");
var $shape = document.querySelector("#shape");

//Event listener
$submit.addEventListener("click",handleSubmission)
var filteredAliens = dataSet;

//create table variable
var tbl = document.createElement("table")
tbl.innerHTML = "<thead></thead><tbody></tbody>"

//append child table to div element.  Add thead/tbody
$alien.appendChild(tbl);

//Set up thead/tbody
var $thead = document.querySelector("thead")
var $tbody = document.querySelector("tbody")

//Set up for loops
var rw = dataSet.length;
console.log(rw);

var keyArr = Object.keys(dataSet[0])
console.log(keyArr)

var col = keyArr.length;
console.log(col)

//add fields
var $row = $thead.insertRow(0);

for (var k = 0;k < col; k++){
	var $cell = $row.insertCell(k);
	$cell.innerText = keyArr[k];
}

for (var i=0;i < rw;i++){
	var $brow = $tbody.insertRow(i);
	var bcurrentData = dataSet[i]
	for (var j=0;j < col;j++){
		var $bcell = $brow.insertCell(j)
		$bcell.innerText = bcurrentData[keyArr[j]]
	}
}

function reloadTable(){
  $tbody.innerHTML = "";
  for (var x = 0; x < filteredAliens.length; x++) {

    var alien = filteredAliens[x];
    var fields = Object.keys(alien);

    var $rows = $tbody.insertRow(x);
    for (var y = 0; y < fields.length; y++) {

      var field = fields[y];
      var $cells = $row.insertCell(y);
      $cells.innerText = alien[field];
    }
  }
}

function handleSubmission(event){
  // Format the user's search by removing leading and trailing whitespace, lowercase the string
	var filterTime = $dTime.value.trim().toLowerCase();
	var filterCity = $city.value.trim().toLowerCase();
	var filterState = $state.value.trim().toLowerCase();
	var filterCountry = $country.value.trim().toLowerCase();
	var filterShape = $shape.value.trim().toLowerCase();


	filteredAliens = dataSet.filter(function(aliens) {
    var alienTime = aliens.datetime.substring(0, filterTime.length).toLowerCase();
	var alienCity = aliens.city.substring(0, filterCity.length).toLowerCase();
	var alienState = aliens.state.substring(0, filterState.length).toLowerCase();
	var alienCountry = aliens.country.substring(0, filterCountry.length).toLowerCase();
	var alienShape = aliens.shape.substring(0, filterShape.length).toLowerCase();

    if (alienTime == filterTime || alienCity == filterCity || alienState == filterState || alienCountry == filterCountry || alienShape == filterShape){
	return true
	}
	return false
  });
  reloadTable();
}

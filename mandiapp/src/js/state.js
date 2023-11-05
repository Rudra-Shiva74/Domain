document.getElementById("state").addEventListener("change", function () {
    var stateSelect = document.getElementById("state");
    var districtSelect = document.getElementById("district");

    // Get the selected state
    var selectedState = stateSelect.options[stateSelect.selectedIndex].value;

    // Clear existing district options
    districtSelect.innerHTML = "";

    // Populate district options based on the selected state
    if (selectedState === "state1") {
        // Add options for State 1 districts
        var districtOptions = ["District 1", "District 2", "District 3"];
    } else if (selectedState === "state2") {
        // Add options for State 2 districts
        var districtOptions = ["District A", "District B", "District C"];
    }
    // Add more state-to-district mappings as needed

    // Populate the district select element with options
    for (var i = 0; i < districtOptions.length; i++) {
        var option = document.createElement("option");
        option.value = districtOptions[i];
        option.text = districtOptions[i];
        districtSelect.appendChild(option);
    }
});

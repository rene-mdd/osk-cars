function mainFunc() {
  // get input value
  const minValue = document.getElementById("minValue").value;
  console.log(minValue);
  const maxValue = document.getElementById("maxValue").value;
  console.log(maxValue);
  const vehicleSpec = document.getElementById("vehicle-spec").value;
  let table,
    tr,
    vehicles,
    i,
    range,
    batteryCapacity,
    powerConsumption,
    rangeRatioCapacity,
    presentation,
    basePrice,
    euroKwh,
    vMax,
    outputPower;
  let vehiclesInfo = {};
  let vehicleArray = [];
  input = document.getElementById("myInput");
  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");
  for (i = 1; i < tr.length; i++) {
    // assign its column value to every vehicle especification
    vehicles = tr[i].getElementsByTagName("td")[0];
    range = tr[i].getElementsByTagName("td")[1];
    batteryCapacity = tr[i].getElementsByTagName("td")[2];
    powerConsumption = tr[i].getElementsByTagName("td")[3];
    rangeRatioCapacity = tr[i].getElementsByTagName("td")[4];
    presentation = tr[i].getElementsByTagName("td")[5];
    basePrice = tr[i].getElementsByTagName("td")[6];
    euroKwh = tr[i].getElementsByTagName("td")[7];
    vMax = tr[i].getElementsByTagName("td")[8];
    outputPower = tr[i].getElementsByTagName("td")[9];
    if (vehicles) {
      // creates an array of objects with the vehicles info in the table
      vehiclesInfo["name"] = vehicles.textContent || vehicles.innerText;
      vehiclesInfo["range"] = range.textContent || range.innerText;
      vehiclesInfo["batteryCapacity"] =
        batteryCapacity.textContent || batteryCapacity.innerText;
      vehiclesInfo["powerConsumption"] =
        powerConsumption.textContent || powerConsumption.innerText;
      vehiclesInfo["rangeRatioCapacity"] =
        rangeRatioCapacity.textContent || rangeRatioCapacity.innerText;
      vehiclesInfo["presentation"] =
        presentation.textContent || presentation.innerText;
      vehiclesInfo["basePrice"] = basePrice.textContent || basePrice.innerText;
      vehiclesInfo["euroKwh"] = euroKwh.textContent || euroKwh.innerText;
      vehiclesInfo["vMax"] = vMax.textContent || vMax.innerText;
      vehiclesInfo["outputPower"] =
        outputPower.textContent || outputPower.innerText;
      vehiclesInfo["index"] = i;
      vehicleArray.push({ ...vehiclesInfo });
      tr[i].style.display = "none";
    }
  }
  // Filter input range
  vehicleArray
    .filter((vh) => {
      if (vehicleSpec === "basePrice") {
        return (
          Number(vh[vehicleSpec]) >
            Number(minValue.split(/[.,\s]/g).join("")) &&
          Number(vh[vehicleSpec]) <
            Number(maxValue.split(/[.,\s]/g).join(""))
        );
      } else {
        return (
          Number(vh[vehicleSpec].replace(",", ".")) >
            Number(minValue.replace(",", ".")) &&
          Number(vh[vehicleSpec].replace(",", ".")) <
            Number(maxValue.replace(",", "."))
        );
      }
    })
    .forEach((vh) => {
      return (tr[vh.index].style.display = "");
    });
}

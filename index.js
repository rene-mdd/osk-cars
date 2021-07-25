
    function myFunction() {
        // get input value
        const minValue = Number(document.getElementById("minValue").value);
        const maxValue = Number(document.getElementById("maxValue").value);
        const vehicleSpec = document.getElementById("vehicle-spec").value;
        let input,
          table,
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
            vehiclesInfo["batteryCapacity"] = batteryCapacity.textContent || batteryCapacity.innerText;
            vehiclesInfo["powerConsumption"] = powerConsumption.textContent || powerConsumption.innerText;
            vehiclesInfo["rangeRatioCapacity"] = rangeRatioCapacity.textContent || rangeRatioCapacity.innerText;
            vehiclesInfo["presentation"] = presentation.textContent || presentation.innerText;
            vehiclesInfo["basePrice"] = basePrice.textContent || basePrice.innerText;
            vehiclesInfo["euroKwh"] = euroKwh.textContent || euroKwh.innerText;
            vehiclesInfo["vMax"] = vMax.textContent || vMax.innerText;
            vehiclesInfo["outputPower"] = outputPower.textContent || outputPower.innerText;
            vehiclesInfo["index"] = i;
            vehicleArray.push({ ...vehiclesInfo });
            tr[i].style.display = "none";
          }
        }
        // Filter input range
        vehicleArray.filter((vh) => {
          console.log(parseInt(vh.euroKwh))
          return (parseInt(vh[vehicleSpec]) > minValue) && (parseInt(vh[vehicleSpec]) < maxValue);
        }).forEach((vh) => {
          return tr[vh.index].style.display = "";
        })
      }
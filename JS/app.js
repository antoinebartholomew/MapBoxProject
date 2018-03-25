
function getData(datasetId) {
    $.ajax({
      url : 'https://evening-sierra-80988.herokuapp.com/dataset?datasetId=' + datasetId,
      type : 'GET',
      dataType: 'json'
    })
    .done(function(oldData){
        geoJsonFeatures = oldData;
        source.setData(geoJsonFeatures);
        return geoJsonFeatures;
    });
}

function uploadFeatures(){
    var drawnData = Draw.getAll();
    for(i = 0; i < drawnData.features.length; i++){

        var xmlhttp = new XMLHttpRequest();   // new HttpRequest instance
        xmlhttp.open("POST", 'https://evening-sierra-80988.herokuapp.com/dataset');
        xmlhttp.setRequestHeader("Content-Type", "application/json");
        xmlhttp.send(JSON.stringify({"feature":drawnData.features[i], "datasetId": "cirqs92m00hu8fgm8piqgihok"}));

        xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200 && i == drawnData.features.length) {
            alert('upload successful!');

            getData(datasetId);
        } else if (xmlhttp.readyState == 4 && xmlhttp.status !== 200){
            alert('looks like something went wrong');
        }
    };
    }
}


var tsServer = 'https://localhost:8080';
var geeServer = 'https://localhost:8888';
var osuServer = 'https://timesync.forestry.oregonstate.edu/_ts3';

/**
 * FIXME: disect this funtion into fuction for each url.
 * @param {*} sessionInfo 
 * @param {*} year 
 */
function getUrls(sessionInfo, year){
    var urls = {
        // "annualSpec":   `${geeServer}/ts/spectrals/year/${year}/${sessionInfo.currentLocation.coordinates[0]}/${sessionInfo.currentLocation.coordinates[1]}`,
        "allSpec":      `${geeServer}/ts/spectrals/${sessionInfo.currentLocation.coordinates[0]}/${sessionInfo.currentLocation.coordinates[1]}`,
        "selectedSpec": `${geeServer}/ts/spectrals/day/${sessionInfo.tsTargetDay}/${sessionInfo.currentLocation.coordinates[0]}/${sessionInfo.currentLocation.coordinates[1]}`,
        "projectList":  `${tsServer}/get-all-projects`,
        "plotList":     `${tsServer}/get-project-plots/${sessionInfo.projectID}/${sessionInfo.numPlots}`,
        "vertInfoSave": `${tsServer}/timesync/vertex/save`,
        "vertices":     `${tsServer}/timesync/vertex/${sessionInfo.userID}/${sessionInfo.projectID}/${sessionInfo.plotID}/${sessionInfo.packet}`,

        "plotInterp":   osuServer + '/index.php/vertex/'+sessionInfo.userID+'/'+sessionInfo.projectID+'/'+sessionInfo.tsa+'/'+sessionInfo.plotID,
        "plotComment":  osuServer + '/comment/'+sessionInfo.userID+'/'+sessionInfo.projectID+'/'+sessionInfo.tsa+'/'+sessionInfo.plotID,
        "respDesign":   osuServer + '/config/response/'+sessionInfo.projectID,
        "chipOverRide": osuServer + '/image/override',
        // "vertInfoSave": osuServer + '/vertex/save',
        "commentSave":  osuServer + '/comment/save'
    }
    return urls;
}

function getImageChip(iid, coordinates) {
  //Either use https://localhost:8888/ts/chip/:lng/:lat/:year/:day/:vis
  // or https://localhost:8888/ts/image_chip/:lng/:lat/:iid/:vis/:size
  //TODO: note the hard coded tc and 255
  return `${geeServer}/ts/image_chip/${coordinates[0]}/${coordinates[1]}/${iid}/tc/255`;
}

onmessage = function(e) {
  e.data.plots.map(p => {
    let sinfo = {
      tsTargetDay: e.data.tsTargetDay,
      currentLocation: JSON.parse(p.center)
    };
    this.console.log(sinfo);
    let urls = getUrls(sinfo);
    fetch(urls.selectedSpec)
     .then(res=>res.json())
     .then(response => {
       response.timeseries.map(spec => {
         console.log('fetch ', spec.iid);
         fetch(getImageChip(spec.iid, sinfo.currentLocation.coordinates), {mode: "no-cors"});
       });
     })
     .catch(err=>this.console.log(err));
  });
}
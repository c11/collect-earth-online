import React from 'react';
import ReactDOM from 'react-dom';

class TimeSync extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            documentRoot: props.documentRoot,
            userId: props.userId,
            version: "",
            // tsDashMessage: new URLSearchParams(window.location.search).keys().next().value,

            tsServer: "https://localhost:8080",
            geeServer: "https://localhost:8888",

            //UI
            spectralIndex: 'TCW', //default index to display
            chipStripWindow: null, //keep track of whether the chipstrip window is open or not so it is not opened in multiple new window on each chip click
            highLightColor: "#32CD32",
            activeRedSpectralIndex: "TCB",
            activeGreenSpectralIndex: "TCG",
            activeBlueSpectralIndex: "TCW",
            chipDisplayProps: {
                box: 1,
                boxZoom: 1,
                chipSize: 195,
                halfChipSize: 97.5,
                offset: 30,
                canvasHeight: 195,
                zoomLevel: 20,
                plotColor: "#FFFFFF"
            },

            minZoom: 0,
            maxZoom: 40,
            stopZoom: 40,
            sAjd: [0],
            // lwAdj: [chipDisplayProps.box],
            zoomIn: 0,

            //windowH: $(window).height(); //NOT state variable, should get it on the fly
            //windowW: $(window).width(); //NOT state variable, should get it on the fly


            //Interpretation
            vertInfo: [],   //vertices
            comment: "",    //plot comment
            isExample: 0,   //is current plot an explanatory plot, -- DELETE
            selectThese: [],         //strange way of keeping index of vertices, -- REFACTORY


            //D3
            rgbColor: [],        //annual color used for spectral trajectory -- changed to on-the-fly calculation
            allDataRGBColor: [], //color used for spectral trajectory -- changed to on-the-fly calculation
            selectedCircles: [], //index of selected data points?
            lineData: [],        //used to draw trajectory line
            ylabel: "",


            //Spectral
            data: {values: []},     //selected annual data, why dictionary is used?
            allData: {values: []},  //all spectral data, why dictionary is used?
            nChips: 0,               //number of chips, in general equal to length of data, but if only a few chips are displayed for performance, this could be different.
            lastIndex: 0,            //used for ?
            origData: [],            //this variable can be eleminated!!!
            yearList: [],

            //Session
            sessionInfo: {          //REFACTORY THIS!!!
                projectID: -1,
                projectCode: "",
                plotID: -1,
                packet: -1,
                isDirty: false,
                plotSize: 1,
                tsTargetDay: 215,
                currentLocation: { "coordinates": [0, 0] },
                plots: []
            },

            packetInfo: {},

            chipInfo: {
                useThisChip: [],
                canvasIDs: [],
                imgIDs: [],
                sxOrig: [],
                syOrig: [],
                sWidthOrig: [],
                sxZoom: [],
                syZoom: [],
                sWidthZoom: [],
                chipsInStrip: [],
                year: [],
                julday: [],
                src: [],
                sensor: []
            },



        };
        console.log(this.state);
    }

    componentDidMount() {
        fetch(this.state.documentRoot + "/timesync/version")
            .then(response => {
                let d = response.text();
                console.log(d);
                if (response.ok) {
                    return d;
                } else {
                    alert("Error retrieving the TimeSync info. See console for details.");
                }
            })
            .then(data => this.setState({version: data}));
    }

    render() {
        return (
            <div>
                <h1>TimeSync</h1>
                <MainToolbar/>
                <MainPanel/>

                <ChipGallery/>


                {/* where should the following code go? */}

                <div id="img-gallery"></div>

                <div id="contextMenu" style={{display: "none", position: "absolute"}}>
                    <p className="subHeader">Copy options:</p>
                    <ul id="contextMenuList">
                        <li id="copyPrev">Copy from previous</li>
                        <li id="fillDown">Copy to all following</li>
                        <li id="fillCancel">Cancel</li>
                    </ul>
                </div>
            </div>
        );
    }
}

class MainToolbar extends React.Component {
    render() {
        return (
            <div id="topSection">
                <p id="title" style={{display:"inline-block"}}>TimeSync - v3.0</p>
                <p style={{display:"inline-block"}}>Project:</p>
                <div className="dropdown" style={{display:"inline-block", marginRight:"15px"}}>
                    <button id="projBtn" className="btn btn-default btn-xs dropdown-toggle"
                            type="button" data-toggle="dropdown"
                            style={{fontSize:"11px", marginBottom:"2px", height: "21.7167px", width: "100px", textAlign: "left"}}>
                        <span className="caret projBtn"></span>
                    </button>
                    <ul id="projectList" className="dropdown-menu"></ul>
                </div>
                <p style={{display: "inline-block"}}>Packet:</p>
                <div className="dropdown" style={{display: "inline-block", marginRight: "15px"}}>
                    <button id="packetBtn" className="btn btn-default btn-xs dropdown-toggle"
                            type="button" data-toggle="dropdown"
                            style={{fontSize: "11px", marginBottom: "2px", height: "21.7167px", width: "100px", textAlign: "left"}}>
                        <span className="caret projBtn"></span>
                    </button>
                    <ul id="packetList" className="dropdown-menu"></ul>
                </div>
                <div id="chipOptionHolder">
                    <div className="chipOptions" id="chipSizeDiv">
                        <p style={{display: "inline-block"}}>Chip Size:</p>
                        <input id="chipSize" autoComplete="off" type="number" name="chipSize" min="135" max="255" step="10" defaultValue="195" />
                    </div>
                    <div className="chipOptions" id="plotSizeDiv" style={{display: "none"}}>
                        <p style={{display: "inline-block"}}>Plot Size:</p>
                        <input id="plotSize" autoComplete="off" type="number" name="plotSize" min="1" max="5" step="2" defaultValue="1" />
                    </div>
                    <div className="chipOptions">
                        <p style={{display: "inline-block"}}>Zoom:</p>
                        <span className="glyphicon glyphicon-minus"></span>
                        <input id="zoomSize" autoComplete="off" type="range" name="zoomSize" min="0" max="40" defaultValue="20" />
                        <span className="glyphicon glyphicon-plus"></span>
                    </div>
                    <div className="chipOptions colorOptions" style={{display: "none"}}>
                        <input id="selectedColor" autoComplete="off" type="color" name="selectedColor" defaultValue="#ED2939" />
                        <p style={{display: "inline-block"}}>Selected</p>
                    </div>
                    <div className="chipOptions colorOptions" style={{display: "none"}}>
                        <input id="highlightColor" autoComplete="off" type="color" name="highlightColor" defaultValue="#32CD32" />
                        <p style={{display: "inline-block"}}>Highlight</p>
                    </div>
                    <div className="chipOptions colorOptions" style={{display: "none"}}>
                        <input id="plotColor" autoComplete="off" type="color" name="plotColor" defaultValue="#FFFFFF" />
                        <p style={{display: "inline-block"}}>Plot</p>
                    </div>
                </div>

                <div className="dropdown" style={{display: "inline-block", marginRight: "15px"}}>
                    <button id="helpBtn" className="btn btn-default btn-xs dropdown-toggle"
                            type="button" data-toggle="dropdown"
                            style={{fontSize: "11px", marginBottom: "2px", height: "21.7167px", textAlign: "left"}}>
                        Help
                    </button>
                    <ul id="helpList" className="dropdown-menu">
                        <li id="doyCalLi">Calendar</li>
                        <li id="toolTips">
                            Tool Tips<span id="toolTipsCheck" className="glyphicon glyphicon-none" style={{marginLeft: "4px"}}></span>
                        </li>
                    </ul>
                </div>

                <button id="exportBtn" className="btn btn-default btn-xs dropdown-toggle" type="button" data-toggle="dropdown"
                    style={{fontSize: "11px", marginBottom: "2px", height: "21.7167px", textAlign: "left"}}>
                    Export Data
                </button>
                <div style={{display: "inline-block"}}>
                    <label className="switch switch-left-right">
                        <input id="examplePlots" className="switch-input" type="checkbox" autoComplete="off" />
                        Example Plots
                    </label>
                </div>

                <div style={{display: "inline-block"}}>
                    <label className="switch switch-left-right">
                        <input id="showAnomaly" className="switch-input" type="checkbox" defaultChecked autoComplete="off" />
                        Clear Pixels only
                    </label>
                </div>

                <div style={{display: "inline-block"}}>
                    <label className="switch switch-left-right">
                        <button id="syncWithCEO">Sync with Collect Earth Online</button>
                    </label>
                </div>
            </div>
        );
    }
}

class MainPanel extends React.Component {
    render() {
        return (
            <div id="containerDiv">
                <PlotPanel/>
                <TrajectoryPanel/>
                <InterpretationPanel/>
            </div>
        );
    }
}

class PlotPanel extends React.Component {
    render() {
        return (
            <div id="plotSelectionDiv" className="sectionDiv">
                <p className="header">Plots</p>
                <ul id="plotList"/>
            </div>
        );
    }
}

class TrajectoryPanel extends React.Component {
    render() {
        return (
            <div id="plot" className="sectionDiv">
                <p className="header">Spectral Trajectory</p>
                <svg id="svg" width="740" height="250"></svg>
                <SpectralToolbar/>
            </div>
        );
    }
}

class SpectralToolbar extends React.Component {
    render() {
        return (
            <div className="btn-group" role="group" aria-label="..." style={{margin: "-1px", display: "inline-block"}}>
                <div className="btn-group specPlotDrop" role="group">
                    <button id="btnIndex" className="btn btn-default dropdown-toggle specPlotBtn"
                            type="button" style={{borderTopLeftRadius: "0px"}}>
                     <div>
                         <strong>Index/Band</strong>:<br /><small>TC Wetness</small><span className="caret specPlot"></span>
                     </div>
                 </button>
                 <ul className="dropdown-menu specPlot indexList" id="indexList">
                     <li id="B1">Blue</li>
                     <li id="B2">Green</li>
                     <li id="B3">Red</li>
                     <li id="B4">NIR</li>
                     <li id="B5">SWIR1</li>
                     <li id="B7">SWIR2</li>
                     <li id="TCB">TC Brightness</li>
                     <li id="TCG">TC Greenness</li>
                     <li className="active" href="#" id="TCW">TC Wetness</li>
                     <li id="TCA">TC Angle</li>
                     <li id="NDVI">NDVI</li>
                     <li id="NBR">NBR</li>
                 </ul>
                </div>

                <div className="btn-group specPlotDrop" role="group">
                    <button id="btnChipSet" className="btn btn-default dropdown-toggle specPlotBtn" type="button">
                        <div>
                            <strong>Chip Set</strong>:<br/><small>SWIR2,NIR,Red</small>
                            <span className="caret specPlot"></span>
                        </div>
                    </button>
                    <ul className="dropdown-menu specPlot chipSetList" id="chipSetList">
                        <li id="chipSetBGW">TM TC</li>
                        <li className="active" id="chipSet743">SWIR2,NIR,Red</li>
                        <li id="chipSet432">NIR,Red,Green</li>
                    </ul>
                </div>

                <div className="btn-group" role="group">
                    <button id="btnLine" className="btn btn-default specPlotBtn" type="button">
                        <strong>Show Line</strong><br />
                        <span id="lineDisplayThumb" className="glyphicon glyphicon-thumbs-up" aria-hidden="true"></span>
                    </button>
                </div>
                <div className="btn-group" role="group">
                    <button id="btnPoints" className="btn btn-default specPlotBtn" type="button">
                        <strong>Show All</strong><br />
                        <span id="allPointsDisplayThumb" className="glyphicon glyphicon-thumbs-down" aria-hidden="true"></span>
                    </button>
                </div>
                <div className="btn-group" role="group">
                    <button id="btnResetGlobal" className="btn btn-default specPlotBtn" type="button">
                        <strong>Global Stretch</strong><br />
                        <span className="glyphicon glyphicon-refresh" aria-hidden="true"></span>
                    </button>
                </div>
                <div className="btn-group" role="group">
                    <button id="btnResetLocal" className="btn btn-default specPlotBtn" type="button" style={{borderBottomRightRadius: "0px"}}>
                        <strong>Local Stretch</strong><br />
                        <span className="glyphicon glyphicon-repeat" aria-hidden="true"></span>
                    </button>
                </div>
            </div>
        );
    }
}

class InterpretationPanel extends React.Component {
    render() {
        return (
            <div id="formsDiv" className="sectionDiv">
                <div className="header">
                    Interpretation Forms
                    <button id="saveBtn" className="btn btn-default btn-xs" type="button"
                            style={{fontSize: "11px", marginBottom: "2px", height:"21.7167px", textAlign: "left"}}>
                        Save
                    </button>
                </div>
                <ul className="test">
                    <li id="segmentsFormTab" className="selected"
                        style={{borderTopLeftRadius: "4px", textAlign: "center"}}>
                        Segments
                    </li>
                    <li id="verticesFormTab" className="unselected"
                        style={{marginLeft: "-1px", textAlign: "center"}}>
                        Vertices
                    </li>
                    <li id="CommentsFormTab" className="unselected"
                        style={{marginLeft: "-1px", borderTopRightRadius: "4px", textAlign: "center"}}>
                        Comments
                    </li>
                </ul>

                <div id="segmentsFormDiv">
                    <table id="segmentsFormTbl">
                        <colgroup>
                            <col width="19" />
                            <col width="38" />
                            <col width="38" />
                        </colgroup>
                        <tbody>
                            <tr className="trHeader">
                                <th></th>
                                <th>Start</th>
                                <th>End</th>
                                <th>Change Process</th>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div id="changeProcessDiv" className="dropThis">
                    <p className="subHeader" style={{marginTop: "3px"}}>Change Process:</p>
                    <ul id="changeProcessList">
                        <li id="fire">Fire</li>
                        <li id="harvest">Harvest</li>
                        <li id="acuteDecline">Structural Decline</li>
                        <li id="conditionDecline">Spectral Decline</li>
                        <li id="wind">Wind</li>
                        <li id="hydro">Hydrology</li>
                        <li id="debris">Debris</li>
                        <li id="growth">Growth/Recovery</li>
                        <li id="stable">Stable</li>
                        <li id="mechanical">Mechanical</li>
                        <li id="otherCP">Other</li>
                    </ul>
                    <p className="subHeader">Notes:</p>
                    <ul id="CPnotesList" className="notesList">
                        <li><input id="natural" className="natural forFire" type="checkbox" name="changeProcess" defaultValue="natural"
                                   autoComplete="off"/> Natural</li>
                        <li><input id="clearcut" className="clearcut forHarvest" type="checkbox" name="changeProcess" defaultValue="clearcut"
                                   autoComplete="off"/> Clearcut</li>
                        <li><input id="thinning" className="thinning forHarvest" type="checkbox" name="changeProcess" defaultValue="thinning"
                                   autoComplete="off"/> Thinning</li>
                        <li><input id="prescribed" className="prescribed forFire" type="checkbox" name="changeProcess" defaultValue="prescribed"
                                   autoComplete="off"/> Prescribed</li>
                        <li><input id="sitePrepFire" className="sitePrepFire forFire forHarvest" type="checkbox" name="changeProcess"
                                   defaultValue="sitePrepFire" autoComplete="off"/> Site-prep fire</li>
                        <li><input id="flooding" className="flooding forHydro" type="checkbox" name="changeProcess" defaultValue="flooding"
                                   autoComplete="off"/> Flooding</li>
                        <li><input id="reserviorLakeFlux" className="reserviorLakeFlux forHydro" type="checkbox" name="changeProcess"
                                   defaultValue="reserviorLakeFlux" autoComplete="off"/> Reservoir/Lake flux</li>
                        <li><input id="wetlandDrainage" className="wetlandDrainage forConserv" type="checkbox" name="changeProcess"
                                   defaultValue="wetlandDrainage" autoComplete="off"/> Wetland drainage</li>
                        <li><input id="airphotoOnly"
                                   className="airphotoOnly forFire forHarvest forDecline forAcuteDecline forConditionDecline forWind forHydro forDebris forGrowth forStable forMechanical forOther"
                                   type="checkbox" name="changeProcess" defaultValue="airphotoOnly" autoComplete="off"/> Airphoto only
                        </li>
                    </ul>
                </div>

                <div id="verticesFormDiv">
                    <table id="verticesFormTbl">
                        <colgroup>
                            <col width="19"/>
                            <col width="38"/>
                            <col width="140"/>
                        </colgroup>
                        <tbody>
                            <tr className="trHeader">
                                <th></th>
                                <th>Year</th>
                                <th>Land Use</th>
                                <th>Land Cover</th>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div id="lulc" className="dropThis">
                    <table style={{border: "none"}}>
                        <tbody>
                            <tr>
                                <td style={{padding: "0px 0px 0px 0px", border: "none"}}>
                                    <div id="landUseDiv" style={{margin: "4px 2px 0px 4px"}}>
                                        <p className="subHeader">Land Use:</p>
                                        <ul id="luLevelSwitchHolder" className="lulcLevelSwitchHolder">
                                            <li id="LUprimaryTab" className="selected" style={{borderTopLeftRadius: "4px", textAlign: "center"}}>
                                                Primary
                                            </li>
                                            <li id="LUsecondaryTab" style={{marginLeft: "-1px", borderTopRightRadius: "4px", textAlign: "center"}}>
                                                Secondary
                                            </li>
                                        </ul>

                                        <ul id="landUseList" className="LUlist">
                                            <li id="forest" className="forest">Forest</li>
                                            <li id="developed" className="developed">Developed</li>
                                            <li id="ag" className="ag">Agriculture</li>
                                            <li id="nonForWet" className="nonForWet">Non-forest Wetland</li>
                                            <li id="rangeland" className="rangeland">Rangeland</li>
                                            <li id="otherLU" className="otherLU">Other</li>
                                        </ul>

                                        <ul id="landUseListSec" className="LUlist" style={{display: "none"}}>
                                            <li id="forest" className="forest">Forest</li>
                                            <li id="developed" className="developed">Developed</li>
                                            <li id="ag" className="ag">Agriculture</li>
                                            <li id="nonForWet" className="nonForWet">Non-forest Wetland</li>
                                            <li id="rangeland" className="rangeland">Rangeland</li>
                                            <li id="otherLU" className="otherLU">Other</li>
                                        </ul>

                                        <p className="subHeader">Notes:</p>
                                        <ul id="LUnotesList" className="notesList">
                                            <li><input id="wetland" className="wetland forForest" type="checkbox" name="landUse" defaultValue="wetland" autoComplete="off"/> Wetland</li>
                                            <li><input id="mining" className="mining forDeveloped" type="checkbox" name="landUse" defaultValue="mining" autoComplete="off"/> Mining</li>
                                            <li><input id="rowCrop" className="rowCrop forAg" className="rowCrop forAg" type="checkbox" name="landUse" defaultValue="rowCrop" autoComplete="off"/> Row crop</li>
                                            <li><input id="orchardTreeFarm" className="orchardTreeFarm forAg" type="checkbox" name="landUse" defaultValue="orchardTreeFarm" autoComplete="off"/> Orchard/Tree farm/Vineyard</li>
                                        </ul>

                                        <ul id="LUnotesListSec" className="notesList" style={{display: "none"}}>
                                            <li><input id="wetland" className="wetland forForest" type="checkbox" name="landUse" defaultValue="wetland" autoComplete="off"/> Wetland</li>
                                            <li><input id="mining" className="mining forDeveloped" type="checkbox" name="landUse" defaultValue="mining" autoComplete="off"/> Mining</li>
                                            <li><input id="rowCrop" className="rowCrop forAg" className="rowCrop forAg" type="checkbox" name="landUse" defaultValue="rowCrop" autoComplete="off"/> Row crop</li>
                                            <li><input id="orchardTreeFarm" className="orchardTreeFarm forAg" type="checkbox" name="landUse" defaultValue="orchardTreeFarm" autoComplete="off"/> Orchard/Tree farm/Vineyard</li>
                                        </ul>
                                    </div>
                                </td>
                                <td style={{padding: "0px 0px 0px 0px", border: "none"}}>
                                    <div id="landCoverDiv" style={{margin: "4px 4px 0px 3px"}}>
                                        <p className="subHeader">Land Cover:</p>
                                        <ul id="lcLevelSwitchHolder" className="lulcLevelSwitchHolder">
                                            <li id="LCprimaryTab" className="selected" style={{borderTopLeftRadius: "4px", borderTopRightRadius: "4px", textAlign: "center"}}> Primary</li>
                                        </ul>

                                        <ul id="landCoverList">
                                            <li id="treesLC">Trees</li>
                                            <li id="shrubsLC">Shrubs</li>
                                            <li id="gfhLC">Grass/forb/herb</li>
                                            <li id="imperviousLC">Impervious</li>
                                            <li id="natBarLC">Barren</li>
                                            <li id="snowIceLC">Snow/ice</li>
                                            <li id="waterLC">Water</li>
                                        </ul>
                                        <p className="subHeader">Other:</p>
                                        <ul id="LCnotesList" className="notesList">
                                            <li className="trees"><input id="trees" type="checkbox" name="landCover" defaultValue="trees" autoComplete="off"/> Trees</li>
                                            <li className="shrubs"><input id="shrubs" type="checkbox" name="landCover" defaultValue="shrubs" autoComplete="off"/> Shrubs</li>
                                            <li className="grassForbHerb"><input id="grassForbHerb" type="checkbox" name="landCover" defaultValue="grassForbHerb" autoComplete="off"/> Grass/forb/herb</li>
                                            <li className="impervious"><input id="impervious" type="checkbox" name="landCover" defaultValue="impervious" autoComplete="off"/> Impervious</li>
                                            <li className="naturalBarren"><input id="naturalBarren" type="checkbox" name="landCover" defaultValue="naturalBarren" autoComplete="off"/> Barren</li>
                                            <li className="snowIce"><input id="snowIce" type="checkbox" name="landCover" defaultValue="snowIce" autoComplete="off"/> Snow/ice</li>
                                            <li className="water"><input id="water" type="checkbox" name="landCover" defaultValue="water" autoComplete="off"/> Water</li>
                                        </ul>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div id="CommentsFormDiv">
                    <div id="commentInputDiv">
                        <textarea id="commentInput" autoComplete="off"></textarea>
                    </div>
                    <div id="exampleCheckBox">
                        <input type="checkbox" id="isExampleCheckbox" defaultValue="True" autoComplete="off"/> Example
                    </div>
                </div>

            </div>
        );
    }
}

class ChipViewer extends React.Component {
    render() {
        return (
            <div>Individual Chip Viewer</div>
        );
    }
}

class ChipGallery extends React.Component {
    render() {
        return (
            <div id="chipGallerySection">
                <div>
                    <p className="header" style={{display: "inline-block"}}>Image Chip Selection</p>
                    <span id="targetDOY" className="header"></span>
                </div>
                <div id="chip-gallery"></div>
                <div id="spinner" className="loader stop"></div>
            </div>
        );
    }
}

export function renderTimeSyncPage(args) {
    ReactDOM.render(
        <TimeSync
            documentRoot={args.documentRoot}
            userId={args.userId === "" ? -1 : parseInt(args.userId)}
        />,
        document.getElementById("timesync")
    );
}

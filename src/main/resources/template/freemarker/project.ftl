<#include "header.ftl">
<#include "navbar.ftl">
<#include "start-content.ftl">
<script type="text/javascript" src="${root}/js/project.js"></script>
<#if project_id == "">
    <#assign project_id = "0">
</#if>
<#if institution_id == "">
    <#assign institution_id = "0">
</#if>
<#if project_id == "0">
    <#assign project_stats_visibility = "d-none">
    <#assign project_template_visibility = "visible">
<#else>
    <#assign project_stats_visibility = "visible">
    <#assign project_template_visibility = "d-none">
</#if>
<div id="project" class="row justify-content-center" ng-app="project" ng-controller="ProjectController as project"
     ng-init="project.initialize('${root}', '${userid}', '${project_id}', '${institution_id}')">
    <div id="project-design" class="col-xl-6 col-lg-8 border bg-lightgray mb-5">
 		<div class="bg-darkgreen mb-3 no-container-margin">
            <#if project_id == "0">
                <h1>Create Project</h1>
            <#else>
                <h1>Review Project</h1>
            </#if>
        </div>
        <div class="row mb-3">
	        <div id="project-stats" class="col ${project_stats_visibility}">
	            <button class="btn btn-outline-lightgreen btn-sm btn-block mb-1" data-toggle="collapse"
                        href="#project-stats-collapse" role="button" aria-expanded="false" aria-controls="project-stats-collapse">
					Project Stats
            	</button>
	            <div class="collapse col-xl-12" id="project-stats-collapse">
		            <table class="table table-sm">
		                <tbody>
		                    <tr>
		                        <td>Members</td>
		                        <td>{{ project.stats.members }}</td>
		                        <td>Contributors</td>
		                        <td>{{ project.stats.contributors }}</td>
		                    </tr>
		                    <tr>
		                        <td>Total Plots</td>
		                        <td>{{ project.details.numPlots || 0 }}</td>
		                        <td>Date Created</td>
		                        <td>{{ project.dateCreated }}</td>
		                    </tr>
		                    <tr>
		                        <td>Flagged Plots</td>
		                        <td>{{ project.stats.flaggedPlots }}</td>
		                        <td>Date Published</td>
		                        <td>{{ project.datePublished }}</td>
		                    </tr>
		                    <tr>
		                        <td>Analyzed Plots</td>
		                        <td>{{ project.stats.analyzedPlots }}</td>
		                        <td>Date Closed</td>
		                        <td>{{ project.dateClosed }}</td>
		                    </tr>
		                    <tr>
		                        <td>Unanalyzed Plots</td>
		                        <td>{{ project.stats.unanalyzedPlots }}</td>
		                        <td>Date Archived</td>
		                        <td>{{ project.dateArchived }}</td>
		                    </tr>
		                </tbody>
		            </table>
	            </div>
        	</div>
   		</div>
        <form id="project-design-form" class="px-2 pb-2" method="post" action="${root}/create-project" enctype="multipart/form-data">
        	<div class="row ${project_template_visibility}">
	 			<div class="col">
	 				<h2 class="header px-0">Use Project Template (Optional)</h2>
	        		<div id="project-template-selector">
	  					<div class="form-group">
			                <h3 for="project-template">Select Project</h3>
		                    <select class="form-control form-control-sm" id="project-template" name="project-template"
                                    size="1" ng-model="project.templateId" ng-change="project.setProjectTemplate()">
		                        <option ng-repeat="proj in project.projectList" value="{{ proj.id }}">{{ proj.name }}</option>
		                    </select>
			            </div>
		            </div>
	            </div>
            </div>
        	<div class="row">
	 			<div class="col">
	 				<h2 class="header px-0">Project Info</h2>
	        		<div id="project-info" >
	  					<div class="form-group">
			                <h3 for="project-name">Name</h3>
			                <input class="form-control form-control-sm" type="text" id="project-name" name="name" autocomplete="off" ng-model="project.details.name">
			            </div>
	  					<div class="form-group">
			                <h3 for="project-description">Description</h3>
			                <textarea class="form-control form-control-sm"  id="project-description" name="description" ng-model="project.details.description"></textarea>
			            </div>
		            </div>
	            </div>
            </div>
			<div class="row">
	            <div class="col">
					<h2 class="header px-0">Project Visibility</h2>
					<h3>Privacy Level</h3>
		            <div id="project-visibility" class="mb-3">
						<div class="form-check form-check-inline">
	                    	<input class="form-check-input"  type="radio" id="privacy-public" name="privacy-level" value="public" ng-click="project.setPrivacyLevel('public')">
	                    	<label class="form-check-label small" for="privacy-public">Public: <i>All Users</i></label>
						</div>
						<div class="form-check form-check-inline">
		                	<input class="form-check-input"  type="radio" id="privacy-private" name="privacy-level" value="private" ng-click="project.setPrivacyLevel('private')" checked>
		                	<label class="form-check-label small" for="privacy-private">Private: <i>Group Admins</i></label>
						</div>
						<div class="form-check form-check-inline">
		                	<input class="form-check-input"  type="radio" id="privacy-institution" name="privacy-level" value="institution" ng-click="project.setPrivacyLevel('institution')">
		                	<label class="form-check-label small" for="privacy-institution">Institution: <i>Group Members</i></label>
						</div>
						<div class="form-check form-check-inline">
		                	<input class="form-check-input"  type="radio" id="privacy-invitation" name="privacy-level" value="invitation" ng-click="project.setPrivacyLevel('invitation')" disabled>
		                	<label class="form-check-label small" for="privacy-invitation">Invitation: <i>Coming Soon</i></label>
						</div>
		            </div>
	            </div>
			</div>
			<div class="row">
	 			<div class="col">
	                <h2 class="header px-0">Project AOI</h2>
			        <div id="project-aoi">
                        <div id="project-map"></div>
                        <#if project_id == "0">
			                <div class="row">
							    <div class="col small text-center mb-2">Hold CTRL and click-and-drag a bounding box on the map</div>
			                </div>
                        </#if>
              			<div class="form-group mx-4">
			                <div class="row">  
			                	<div class="col-md-6 offset-md-3">
			                		<input class="form-control form-control-sm" type="number" id="lat-max" name="lat-max" ng-model="project.latMax" placeholder="North" autocomplete="off" min="-90.0" max="90.0" step="any">
								</div>
			                </div>
			                <div class="row">
			                	<div class="col-md-6">
			               			<input class="form-control form-control-sm" type="number" id="lon-min" name="lon-min" ng-model="project.lonMin" placeholder="West" autocomplete="off" min="-180.0" max="180.0" step="any">
			                	</div>
			                	<div class="col-md-6">
			               		 	<input class="form-control form-control-sm" type="number" id="lon-max" name="lon-max" ng-model="project.lonMax" placeholder="East" autocomplete="off" min="-180.0" max="180.0" step="any">
			                	</div>
			                </div>
			                <div class="row">  
			                	<div class="col-md-6 offset-md-3">
	              		        	<input class="form-control form-control-sm" type="number" id="lat-min" name="lat-min" ng-model="project.latMin" placeholder="South" autocomplete="off" min="-90.0" max="90.0" step="any">
								</div>
			                </div>
		                </div>
		            </div>
	            </div>
            </div>
			<div class="row mb-3">
	 			<div class="col">
	                <h2 class="header px-0">Project Imagery</h2>
		            <div id="project-imagery">
		                <div class="form-group mb-1">
		                    <h3 for="base-map-source">Basemap Source</h3>
		                    <select class="form-control form-control-sm" id="base-map-source" name="base-map-source" size="1"
                                    ng-model="project.details.baseMapSource" ng-change="project.setBaseMapSource()">
		                        <option ng-repeat="imagery in project.imageryList" value="{{ imagery.title }}">{{ imagery.title }}</option>
		                    </select>
	               		</div>
		            </div>
	            </div>
			</div>
            <div class="row mb-3">
                <div class="col">
                    <h2 class="header px-0">TimeSync Configuration</h2>
                    <div id="project-ts">
                        <div class="form-group mb-1">
                            <div class="form-group mb-1">
                                <p for="num-plots">Start Year</p>
                                <input class="form-control form-control-sm" type="number" id="ts-start-year" name="ts-start-year" autocomplete="off" min="1985" step="1">
                            </div>
                            <div class="form-group mb-1">
                                <p for="num-plots">Start Year</p>
                                <input class="form-control form-control-sm" type="number" id="ts-end-year" name="ts-end-year" autocomplete="off" min="1985" step="1">
                            </div>
                            <div class="form-group mb-1">
                                <p for="num-plots">Target Day</p>
                                <input class="form-control form-control-sm" type="number" id="ts-target-day" name="ts-target-day" autocomplete="off" min="1" max="365" step="1">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
			<div class="row mb-3">
				<div class="col">
	                <h2 class="header px-0">Plot Design</h2>
		            <div id="plot-design">
	            		<div class="row">
			                <div id="plot-design-col1" class="col">
			                   <h3>Spatial Distribution</h3>
											<div class="form-check form-check-inline">
			                                    <input class="form-check-input" type="radio" id="plot-distribution-random" name="plot-distribution"	 value="random" ng-click="project.setPlotDistribution('random')" checked>
			                                    <label class="form-check-label small" for="plot-distribution-random">Random</label>
		                                    </div>
											<div class="form-check form-check-inline">
			                                    <input class="form-check-input" type="radio" id="plot-distribution-gridded" name="plot-distribution" value="gridded" ng-click="project.setPlotDistribution('gridded')">
			                                    <label class="form-check-label small"for="plot-distribution-gridded">Gridded</label>
		                                    </div>
											<div class="form-check form-check-inline">
			                                    <input class="form-check-input" type="radio" id="plot-distribution-csv" name="plot-distribution" value="csv" ng-click="project.setPlotDistribution('csv')">
			                                    <label class="btn btn-sm btn-block btn-outline-lightgreen btn-file py-0 my-0" id="custom-csv-upload">
			                                        <small>Upload CSV</small>
			                                        <input type="file" accept="text/csv" id="plot-distribution-csv-file"  style="display: none;">
			                                    </label>
											</div>
							              <div class="form-group mb-1">
						                    <p for="num-plots">Number of plots</p>
						                    <input class="form-control form-control-sm" type="number" id="num-plots" name="num-plots" autocomplete="off" min="0" step="1" ng-model="project.details.numPlots">
					                    </div>
	           						   <div class="form-group mb-1">
						                    <p for="plot-spacing">Plot spacing (m)</p>
						                    <input class="form-control form-control-sm" type="number" id="plot-spacing" name="plot-spacing" autocomplete="off" min="0.0" step="any" ng-model="project.details.plotSpacing" disabled>
					                    </div>
			                </div>
		                </div>
						<hr />
	            		<div class="row">
			                <div id="plot-design-col2" class="col">
			                    <h3>Plot Shape</h3>
								<div class="form-check form-check-inline">
                                    <input class="form-check-input" type="radio" id="plot-shape-circle" name="plot-shape" value="circle" ng-click="project.setPlotShape('circle')" checked>
                                    <label class="form-check-label small" for="plot-shape-circle">Circle</label>
								</div>				
								<div class="form-check form-check-inline">
                                    <input class="form-check-input" type="radio" id="plot-shape-square" name="plot-shape" value="square" ng-click="project.setPlotShape('square')">
                                    <label class="form-check-label small" for="plot-shape-square">Square</label>
								</div>		
			                    <p for="plot-size">Plot {{ project.details.plotShape == 'circle' ? 'Diameter' : 'Width' }} (m)</p>
			                    <input class="form-control form-control-sm" type="number" id="plot-size" name="plot-size" autocomplete="off" min="0.0" step="any" ng-model="project.details.plotSize">
			                </div>
		                </div>
		            </div>
		    	</div>
			</div>
            <div class="row mb-3">
				<div class="col">
		            <div id="sample-design">
		                <h2 class="header px-0">Sample Design</h2>
		                <h3>Spatial Distribution</h3>
						<div class="form-check form-check-inline">
	                         <input class="form-check-input" type="radio" id="sample-distribution-random" name="sample-distribution" value="random" ng-click="project.setSampleDistribution('random')" checked>
	                         <label class="form-check-label small" for="sample-distribution-random">Random</label>
                        </div>
						<div class="form-check form-check-inline">
	                         <input class="form-check-input" type="radio" id="sample-distribution-gridded" name="sample-distribution" value="gridded" ng-click="project.setSampleDistribution('gridded')">
	                         <label class="form-check-label small" for="sample-distribution-gridded">Gridded</label>
	                    </div>
			            <div class="form-group mb-1">
			                <p for="samples-per-plot">Samples per plot</p>
			                <input class="form-control form-control-sm" type="number" id="samples-per-plot" name="samples-per-plot" autocomplete="off" min="0" step="1" ng-model="project.details.samplesPerPlot">
		                </div>
		                <div class="form-group mb-1">
			                <p for="sample-resolution">Sample resolution (m)</p>
			                <input class="form-control form-control-sm" type="number" id="sample-resolution" name="sample-resolution" autocomplete="off" min="0.0" step="any" ng-model="project.details.sampleResolution" disabled>
		                </div>
		            </div>
	            </div>
			</div>
            <div class="sample-value-info" ng-repeat="sampleValueGroup in project.details.sampleValues">
                <h2 class="header px-0">
                    <#if project_id == "0">
                        <input id="remove-sample-value-group" type="button" class="button" value="-"
                               ng-click="project.removeSampleValueGroup(sampleValueGroup.name)">
                    </#if>
                    Sample Value Group: {{ sampleValueGroup.name }}
                </h2>
                <table class="table table-sm">
                    <thead>
                        <tr>
                            <th scope="col"></th>
                            <th scope="col">Name</th>
                            <th scope="col">Color</th>
                            <!-- <th scope="col">Reference Image</th> -->
                            <th scope="col">&nbsp;</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr ng-repeat="sampleValue in project.topoSort(sampleValueGroup.values)">
                            <td>
                                <#if project_id == "0">
                                    <input type="button" class="button" value="-"
                                           ng-click="project.removeSampleValueRow(sampleValueGroup.name, sampleValue.name)">
                                <#else>
                                    &nbsp;
                                </#if>
                            </td>
                            <td style="{{ sampleValue.parent == null || sampleValue.parent == ''
                                          ? 'font-style:normal'
                                          : 'font-style:italic;text-indent:10px' }}">
                                {{ sampleValue.name }}
                            </td>
                            <td>
                                <div class="circle" style="background-color:{{ sampleValue.color }};border:solid 1px;"></div>
                            </td>
                            <!-- <td>
                              {{ sampleValue.image }}
                              </td> -->
                            <td>
                                &nbsp;
                            </td>
                        </tr>
                        <#if project_id == "0">
                            <tr>
                                <td>
                                    <input type="button" class="button" value="+"
                                           ng-click="project.addSampleValueRow(sampleValueGroup.name)">
                                </td>
                                <td>
                                    <input type="text" class="value-name" autocomplete="off"
                                           ng-model="project.newValueEntry[sampleValueGroup.name].name">
                                </td>
                                <td>
                                    <input type="color" class="value-color"
                                           ng-model="project.newValueEntry[sampleValueGroup.name].color">
                                </td>
                                <!-- <td>
                                  <input type="file" class="value-image" accept="image/*"
                                  ng-model="project.newValueEntry[sampleValueGroup.name].image">
                                  </td> -->
                                <td>
                                    <label for="value-parent">Parent:</label>
                                    <select id="value-parent" class="form-control form-control-sm" size="1"
                                            ng-model="project.newValueEntry[sampleValueGroup.name].parent">
                                        <option value="">None</option>
                                        <option ng-repeat="parentSampleValue in project.getParentSampleValues(sampleValueGroup.values)"
                                                value="{{ parentSampleValue.name }}">{{ parentSampleValue.name }}</option>
                                    </select>
                                </td>
                            </tr>
                        </#if>
                    </tbody>
                </table>
            </div>
            <#if project_id == "0">
                <div id="add-sample-value-group">
                    <input type="button" class="button" value="Add Sample Value Group" ng-click="project.addSampleValueGroup()">
                    <input type="text" autocomplete="off" ng-model="project.newSampleValueGroupName">
                </div>
            </#if>
        </form>
        <div id="project-management" class="col mb-3">
			<h2 class="header px-0">Project Management</h2>
           	<div class="row">
                <#if project_id == "0">
	                <input type="button" id="create-project" class="btn btn-outline-danger btn-sm btn-block"
	                       name="create-project" value="Create Project"
	                       ng-click="project.createProject()">
                <#else>
	                <input type="button" id="configure-geo-dash" class="btn btn-outline-lightgreen btn-sm btn-block"
	                       name="configure-geo-dash" value="Configure Geo-Dash"
	                       ng-click="project.configureGeoDash()"
                           style="display: {{ project.details.availability == 'unpublished' || project.details.availability == 'published' ? 'block' : 'none' }}">
	                <input type="button" id="download-plot-data" class="btn btn-outline-lightgreen btn-sm btn-block"
	                       name="download-plot-data" value="Download Plot Data"
	                       ng-click="project.downloadPlotData()"
	                       style="display: {{ project.details.availability == 'published' || project.details.availability == 'closed' ? 'block' : 'none' }}">
	                <input type="button" id="download-sample-data" class="btn btn-outline-lightgreen btn-sm btn-block"
	                       name="download-sample-data" value="Download Sample Data"
	                       ng-click="project.downloadSampleData()"
	                       style="display: {{ project.details.availability == 'published' || project.details.availability == 'closed' ? 'block' : 'none' }}">
	                <input type="button" id="change-availability" class="btn btn-outline-danger btn-sm btn-block"
	                       name="change-availability" value="{{ project.stateTransitions[project.details.availability] }} Project"
	                       ng-click="project.changeAvailability()">
                </#if>
                <div id="spinner"></div>
            </div>
        </div>
    </div>
</div>
<#include "end-content.ftl">
<#include "footer.ftl">

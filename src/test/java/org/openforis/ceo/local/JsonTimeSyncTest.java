package org.openforis.ceo.local;

//import org.jboss.arquillian.container.test.api.Deployment;
//import org.jboss.arquillian.junit.Arquillian;
//import org.jboss.shrinkwrap.api.ShrinkWrap;
//import org.jboss.shrinkwrap.api.asset.EmptyAsset;
//import org.jboss.shrinkwrap.api.spec.JavaArchive;
import org.junit.Test;
import org.junit.runner.RunWith;

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;

import static org.junit.Assert.*;


import static org.openforis.ceo.utils.JsonUtils.addElementToJsonFile;
import static org.openforis.ceo.utils.JsonUtils.parseJson;

//@RunWith(Arquillian.class)
public class JsonTimeSyncTest {
//    @Deployment
//    public static JavaArchive createDeployment() {
//        return ShrinkWrap.create(JavaArchive.class)
//                .addClass(JsonTimeSync.class)
//                .addAsManifestResource(EmptyAsset.INSTANCE, "beans.xml");
//    }

    @Test
    public void saveVertex() throws IOException {
        var jsonFile = "/Users/yang/MWorkspace/MDocker/collect-earth-online-ceo-update/debugging/timesync_vertices.json";
//        var reader = new BufferedReader(new FileReader(jsonFile));
        var strJson = new String(Files.readAllBytes(Paths.get(jsonFile)));

        System.out.println(strJson);

        var jsonInputs = parseJson(strJson).getAsJsonObject();
        var projectId = jsonInputs.get("projectId").getAsString();
        var plotId = jsonInputs.get("plotId").getAsString();
        var userName = jsonInputs.get("userId").getAsString();
        var packet = jsonInputs.get("packet").getAsString();

        //NOTE: this is not an efficient implementation.
        var tsFile = "timesync-data-" + projectId + ".json";
        addElementToJsonFile(tsFile, jsonInputs,
                plot -> !plot.get("plotId").getAsString().equals(plotId)
                        || !plot.get("userId").getAsString().equals(userName)
                        || !plot.get("packet").getAsString().equals(packet));
    }
}

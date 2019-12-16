<#include "header.ftl">
<#--<#include "timesync-navbar.ftl">-->
<#include "start-content.ftl">
<div id="timesync"></div>

<!-- Auto Inserted Bundles -->

<!-- End Auto Inserted Bundles -->

<script type="text/javascript">
    window.onload = function () {
        timesync.renderTimeSyncPage({
            documentRoot: "${root}",
            userId:       "${userid}"
        });
    };
</script>

<#include "end-content.ftl">
<#include "footer.ftl">

<#--<#include "ts_main.ftl">-->
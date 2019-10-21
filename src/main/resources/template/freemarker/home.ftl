<#include "header.ftl">
<#include "navbar.ftl">
<#include "announcements.ftl">
<#include "start-content.ftl">
<div id="home"></div>

<!-- Auto Inserted Bundles -->

<!-- End Auto Inserted Bundles -->

<script type="text/javascript">
 window.onload = function () {
     home.renderHomePage({
         documentRoot: "${root}",
         userId:       "${userid}"
     });
 };
 
//navigator.serviceWorker.register('/ts_sw.js', {scope: '/'});
//navigator.serviceWorker.ready.then(()=>console.log("service worker ready!"));

</script>
<#include "end-content.ftl">
<#include "footer.ftl">

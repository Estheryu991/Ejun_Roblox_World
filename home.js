


<!DOCTYPE html>
<!--[if IE 8]><html class="ie8" ng-app="robloxApp"><![endif]-->
<!--[if gt IE 8]><!-->
<html>
<!--<![endif]-->
<head data-machine-id="WEB410">
    <!-- MachineID: WEB410 -->
    <title>Home - Roblox</title>
    <meta http-equiv="X-UA-Compatible" content="IE=edge,requiresActiveX=true" />
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="author" content="Roblox Corporation" />
<meta name="description" content="Roblox is a global platform that brings people together through play." />
<meta name="keywords" content="free games, online games, building games, virtual worlds, free mmo, gaming cloud, physics engine" />

    <meta name="apple-itunes-app" content="app-id=431946152" />




<script type="application/ld+json">
    {
    "@context" : "http://schema.org",
    "@type" : "Organization",
    "name" : "Roblox",
    "url" : "https://www.roblox.com/",
    "logo": "https://images.rbxcdn.com/cece570e37aa8f95a450ab0484a18d91",
    "sameAs" : [
    "https://www.facebook.com/roblox/",
    "https://twitter.com/roblox",
    "https://www.linkedin.com/company/147977",
    "https://www.instagram.com/roblox/",
    "https://www.youtube.com/user/roblox",
    "https://plus.google.com/+roblox",
    "https://www.twitch.tv/roblox"
    ]
    }
</script>    <meta name="user-data"
          data-userid="3283830159"
          data-name="Esthislove"
          data-displayName="Esthislove"
          data-isunder13="false" 
          data-created="2/3/2022 2:35:23 AM" 
          data-isPremiumUser="false"/>

<meta name="locale-data" 
      data-language-code="en_us" 
      data-language-name="English" /><meta name="device-meta"
      data-device-type="computer"
      data-is-in-app="false"
      data-is-desktop="true"
      data-is-phone="false"
      data-is-tablet="false"
      data-is-console="false"
      data-is-android-app="false"
      data-is-ios-app="false"
      data-is-uwp-app="false"
      data-is-xbox-app="false"
      data-is-amazon-app="false"
      data-is-win32-app="false"
      data-is-studio="false"
      data-is-game-client-browser="false"
      data-is-ios-device="false"
      data-is-android-device="false"
      data-is-universal-app="false"
      data-app-type="unknown"
/>
<meta name="environment-meta"
      data-is-testing-site="false" />

<meta id="roblox-display-names" data-enabled="true"></meta><meta name="page-meta" data-internal-page-name="Home" />
<meta name="performance" data-ui-performance-relative-value="1"
                         data-ui-performance-endpoint="https://metrics.roblox.com/v1/performance/send-measurement"
                         data-ui-performance-metrics-batch-wait-time="00:00:30"
                         data-ui-performance-metrics-batch-size="100"/>
    

<script type="text/javascript">
    var Roblox = Roblox || {};

    Roblox.BundleVerifierConstants = {
        isMetricsApiEnabled: true,
        eventStreamUrl: "//ecsv2.roblox.com/pe?t=diagnostic",
        deviceType: "Computer",
        cdnLoggingEnabled: JSON.parse("true")
    };
</script>        <script type="text/javascript">
            var Roblox = Roblox || {};

Roblox.BundleDetector = (function () {
    var isMetricsApiEnabled = Roblox.BundleVerifierConstants && Roblox.BundleVerifierConstants.isMetricsApiEnabled;

    var loadStates = {
        loadSuccess: "loadSuccess",
        loadFailure: "loadFailure",
        executionFailure: "executionFailure"
    };

    var bundleContentTypes = {
        javascript: "javascript",
        css: "css"
    };

    var ephemeralCounterNames = {
        cdnPrefix: "CDNBundleError_",
        unknown: "CDNBundleError_unknown",
        cssError: "CssBundleError",
        jsError: "JavascriptBundleError",
        jsFileError: "JsFileExecutionError",
        resourceError: "ResourcePerformance_Error",
        resourceLoaded: "ResourcePerformance_Loaded"
    };

    return {
        jsBundlesLoaded: {},
        bundlesReported: {},

        counterNames: ephemeralCounterNames,
        loadStates: loadStates,
        bundleContentTypes: bundleContentTypes,

        timing: undefined,

        setTiming: function (windowTiming) {
            this.timing = windowTiming;
        },

        getLoadTime: function () {
            if (this.timing && this.timing.domComplete) {
                return this.getCurrentTime() - this.timing.domComplete;
            }
        },

        getCurrentTime: function () {
            return new Date().getTime();
        },

        getCdnProviderName: function (bundleUrl, callBack) {
            if (Roblox.BundleVerifierConstants.cdnLoggingEnabled) {
                var xhr = new XMLHttpRequest();
                xhr.open('GET', bundleUrl, true);

                xhr.onreadystatechange = function () {
                    if (xhr.readyState === xhr.HEADERS_RECEIVED) {
                        try {
                            var headerValue = xhr.getResponseHeader("rbx-cdn-provider");
                            if (headerValue) {
                                callBack(headerValue);
                            } else {
                                callBack();
                            }
                        } catch (e) {
                            callBack();
                        }
                    }
                };

                xhr.onerror = function () {
                    callBack();
                };

                xhr.send();
            } else {
                callBack();
            }
        },

        getCdnProviderAndReportMetrics: function (bundleUrl, bundleName, loadState, bundleContentType) {
            this.getCdnProviderName(bundleUrl, function (cdnProviderName) {
                Roblox.BundleDetector.reportMetrics(bundleUrl, bundleName, loadState, bundleContentType, cdnProviderName);
            });
        },

        reportMetrics: function (bundleUrl, bundleName, loadState, bundleContentType, cdnProviderName) {
            if (!isMetricsApiEnabled
                || !bundleUrl
                || !loadState
                || !loadStates.hasOwnProperty(loadState)
                || !bundleContentType
                || !bundleContentTypes.hasOwnProperty(bundleContentType)) {
                return;
            }

            var xhr = new XMLHttpRequest();
            var metricsApiUrl = (Roblox.EnvironmentUrls && Roblox.EnvironmentUrls.metricsApi) || "https://metrics.roblox.com";

            xhr.open("POST", metricsApiUrl + "/v1/bundle-metrics/report", true);
            xhr.setRequestHeader("Content-Type", "application/json");
            xhr.withCredentials = true;
            xhr.send(JSON.stringify({
                bundleUrl: bundleUrl,
                bundleName: bundleName || "",
                bundleContentType: bundleContentType,
                loadState: loadState,
                cdnProviderName: cdnProviderName,
                loadTimeInMilliseconds: this.getLoadTime() || 0
            }));
        },

        logToEphemeralStatistics: function (sequenceName, value) {
            var deviceType = Roblox.BundleVerifierConstants.deviceType;
            sequenceName += "_" + deviceType;

            var xhr = new XMLHttpRequest();
            xhr.open('POST', '/game/report-stats?name=' + sequenceName + "&value=" + value, true);
            xhr.withCredentials = true;
            xhr.send();
        },

        logToEphemeralCounter: function (ephemeralCounterName) {
            var deviceType = Roblox.BundleVerifierConstants.deviceType;
            ephemeralCounterName += "_" + deviceType;
            //log to ephemeral counters - taken from eventTracker.js
            var xhr = new XMLHttpRequest();
            xhr.open('POST', '/game/report-event?name=' + ephemeralCounterName, true);
            xhr.withCredentials = true;
            xhr.send();
        },

        logToEventStream: function (failedBundle, ctx, cdnProvider, status) {
            var esUrl = Roblox.BundleVerifierConstants.eventStreamUrl,
                currentPageUrl = encodeURIComponent(window.location.href);

            var deviceType = Roblox.BundleVerifierConstants.deviceType;
            ctx += "_" + deviceType;
            //try and grab performance data.
            //Note that this is the performance of the xmlhttprequest rather than the original resource load.
            var duration = 0;
            if (window.performance) {
                var perfTiming = window.performance.getEntriesByName(failedBundle);
                if (perfTiming.length > 0) {
                    var data = perfTiming[0];
                    duration = data.duration || 0;
                }
            }
            //log to event stream (diagnostic)
            var params = "&evt=webBundleError&url=" + currentPageUrl +
                "&ctx=" + ctx + "&fileSourceUrl=" + encodeURIComponent(failedBundle) +
                "&cdnName=" + (cdnProvider || "unknown") +
                "&statusCode=" + (status || "unknown") +
                "&loadDuration=" + Math.floor(duration);
            var img = new Image();
            img.src = esUrl + params;
        },

        getCdnInfo: function (failedBundle, ctx, fileType) {
            if (Roblox.BundleVerifierConstants.cdnLoggingEnabled) {
                var xhr = new XMLHttpRequest();
                var counter = this.counterNames;
                xhr.open('GET', failedBundle, true);
                var cdnProvider;

                //succesful request
                xhr.onreadystatechange = function () {
                    if (xhr.readyState === xhr.HEADERS_RECEIVED) {
                        cdnProvider = xhr.getResponseHeader("rbx-cdn-provider");
                        if (cdnProvider && cdnProvider.length > 0) {
                            Roblox.BundleDetector.logToEphemeralCounter(counter.cdnPrefix + cdnProvider + "_" + fileType);
                        }
                        else {
                            Roblox.BundleDetector.logToEphemeralCounter(counter.unknown + "_" + fileType);
                        }
                    }
                    else if (xhr.readyState === xhr.DONE) {
                        // append status to cdn provider so we know its not related to network error. 
                        Roblox.BundleDetector.logToEventStream(failedBundle, ctx, cdnProvider, xhr.status);
                    }
                };

                //attach to possible things that can go wrong with the request.
                //additionally a network error will trigger this callback
                xhr.onerror = function () {
                    Roblox.BundleDetector.logToEphemeralCounter(counter.unknown + "_" + fileType);
                    Roblox.BundleDetector.logToEventStream(failedBundle, ctx, counter.unknown);
                };

                xhr.send();
            }
            else {
                this.logToEventStream(failedBundle, ctx);
            }
        },

        reportResourceError: function (resourceName) {
            var ephemeralCounterName = this.counterNames.resourceError + "_" + resourceName;
            this.logToEphemeralCounter(ephemeralCounterName);
        },

        reportResourceLoaded: function (resourceName) {
            var loadTimeInMs = this.getLoadTime();
            if (loadTimeInMs) {
                var sequenceName = this.counterNames.resourceLoaded + "_" + resourceName;
                this.logToEphemeralStatistics(sequenceName, loadTimeInMs);
            }
        },

        reportBundleError: function (bundleTag) {
            var ephemeralCounterName, failedBundle, ctx, contentType;
            if (bundleTag.rel && bundleTag.rel === "stylesheet") {
                ephemeralCounterName = this.counterNames.cssError;
                failedBundle = bundleTag.href;
                ctx = "css";
                contentType = bundleContentTypes.css;
            } else {
                ephemeralCounterName = this.counterNames.jsError;
                failedBundle = bundleTag.src;
                ctx = "js";
                contentType = bundleContentTypes.javascript;
            }

            //mark that we logged this bundle
            this.bundlesReported[failedBundle] = true;

            //e.g. javascriptBundleError_Computer
            this.logToEphemeralCounter(ephemeralCounterName);
            //this will also log to event stream
            this.getCdnInfo(failedBundle, ctx, ctx);

            var bundleName;
            if (bundleTag.dataset) {
                bundleName = bundleTag.dataset.bundlename;
            }
            else {
                bundleName = bundleTag.getAttribute('data-bundlename');
            }

            this.getCdnProviderAndReportMetrics(failedBundle, bundleName, loadStates.loadFailure, contentType);
        },

        bundleDetected: function (bundleName) {
            this.jsBundlesLoaded[bundleName] = true;
        },

        verifyBundles: function (document) {
            var ephemeralCounterName = this.counterNames.jsFileError,
                eventContext = ephemeralCounterName;
            //grab all roblox script tags in the page. 
            var scripts = (document && document.scripts) || window.document.scripts;
            var errorsList = [];
            var bundleName;
            var monitor;
            for (var i = 0; i < scripts.length; i++) {
                var item = scripts[i];

                if (item.dataset) {
                    bundleName = item.dataset.bundlename;
                    monitor = item.dataset.monitor;
                }
                else {
                    bundleName = item.getAttribute('data-bundlename');
                    monitor = item.getAttribute('data-monitor');
                }

                if (item.src && monitor && bundleName) {
                    if (!Roblox.BundleDetector.jsBundlesLoaded.hasOwnProperty(bundleName)) {
                        errorsList.push(item);
                    }
                }
            }
            if (errorsList.length > 0) {
                for (var j = 0; j < errorsList.length; j++) {
                    var script = errorsList[j];
                    if (!this.bundlesReported[script.src]) {
                        //log the counter only if the file is actually corrupted, not just due to failure to load
                        //e.g. JsFileExecutionError_Computer
                        this.logToEphemeralCounter(ephemeralCounterName);
                        this.getCdnInfo(script.src, eventContext, 'js');

                        if (script.dataset) {
                            bundleName = script.dataset.bundlename;
                        }
                        else {
                            bundleName = script.getAttribute('data-bundlename');
                        }

                        this.getCdnProviderAndReportMetrics(script.src, bundleName, loadStates.executionFailure, bundleContentTypes.javascript);
                    }
                }
            }
        }
    };
})();

window.addEventListener("load", function (evt) {
    Roblox.BundleDetector.verifyBundles();
});

Roblox.BundleDetector.setTiming(window.performance.timing);
            //# sourceURL=somename.js
        </script>
    
<link href="https://images.rbxcdn.com/3b43a5c16ec359053fef735551716fc5.ico" rel="icon" />


        <link rel="manifest" href="https://notifications.roblox.com/v2/push-notifications/chrome-manifest" crossorigin="use-credentials">
    <link rel="stylesheet" onerror="Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)" data-bundlename="StyleGuide" data-bundle-source="Main" href="https://css.rbxcdn.com/661dd77ed3defca1f23c2fac7dde1344604b9636944ebbe59ebe99745b6689ee.css" />
<link rel="stylesheet" onerror="Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)" data-bundlename="Thumbnails" data-bundle-source="Main" href="https://css.rbxcdn.com/9517d686dc47015c200496d77e2b18146ee37652d18e25ecf9e1ed230310ea13.css" />
<link rel="stylesheet" onerror="Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)" data-bundlename="VerificationUpsell" data-bundle-source="Main" href="https://css.rbxcdn.com/d41f2dd08e2e54efa22d6e04120af18e4ca32b65227e62cf6f33933a7899241d.css" />
<link rel="stylesheet" onerror="Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)" data-bundlename="Navigation" data-bundle-source="Main" href="https://css.rbxcdn.com/bbfa8678c5dc8467d00c4a99038f3b73d7e45b31d571be1c9eb16ca5a3708ac6.css" />
<link rel="stylesheet" onerror="Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)" data-bundlename="Footer" data-bundle-source="Main" href="https://css.rbxcdn.com/d5344f38053922e5936f0d7e2d3496ee4f83b46f0bb40d1d2c253b80ac82668e.css" />
<link rel="stylesheet" onerror="Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)" data-bundlename="CookieBannerV3" data-bundle-source="Main" href="https://css.rbxcdn.com/2c2a709240897ce382b7ff55be4347cd0994ab1e2d6ed3b56649e54b0e97e13a.css" />
<link rel="stylesheet" onerror="Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)" data-bundlename="ConfigureWebApps" data-bundle-source="Main" href="https://css.rbxcdn.com/08def520152a575438e73a81aa9a310c2415c327df7b624a24aa6e794d24dba3.css" />


    <link rel="canonical" href="https://www.roblox.com/home?nu=true" />
    
<link onerror='Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)' rel='stylesheet'  href='https://static.rbxcdn.com/css/leanbase___5e469c309d1eeddf42cc9d36a50f82e0_m.css/fetch' />


    
<link onerror='Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)' rel='stylesheet'  href='https://static.rbxcdn.com/css/page___4e5bc24beb5bb7d93261444c755ed2e4_m.css/fetch' />


<link rel="stylesheet" onerror="Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)" data-bundlename="AccountSecurityPrompt" data-bundle-source="Main" href="https://css.rbxcdn.com/3f7284cbce996cc411b5bdadad270358a4b76d48bd2f0347702a9952cad06e71.css" />
<link rel="stylesheet" onerror="Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)" data-bundlename="PeopleList" data-bundle-source="Main" href="https://css.rbxcdn.com/5b78f24a5404361865e0b4270f7a5f530983e00cb93db4587fd8204050dc3cc7.css" />
<link rel="stylesheet" onerror="Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)" data-bundlename="AvatarShopHomepageRecommendations" data-bundle-source="Main" href="https://css.rbxcdn.com/50e5507408c6acb726bd15f4b6a06f0bca2abecca3471ee526ef90b351aadfcd.css" />
<link rel="stylesheet" onerror="Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)" data-bundlename="PlacesList" data-bundle-source="Main" href="https://css.rbxcdn.com/592815092e1ab6f65e1bad18263cc732459937d16dd718b825632919e2e90e85.css" />
<link rel="stylesheet" onerror="Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)" data-bundlename="FacebookSunsetModal" data-bundle-source="Main" href="https://css.rbxcdn.com/d042af17d4ccd36b8f91a8ba854943526df6e0d0eec445d67f3dbe6ed82c21f9.css" />
<link rel="stylesheet" onerror="Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)" data-bundlename="HomePageUpsellCard" data-bundle-source="Main" href="https://css.rbxcdn.com/9337c6fee216619ce78d77353e855060e50f7063eb263657bc1a47dea21f3bca.css" />
<link rel="stylesheet" onerror="Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)" data-bundlename="HomeHeader" data-bundle-source="Main" href="https://css.rbxcdn.com/a1d4b368a41f21931b21c8f2270d2d81aa4e0dce426c9ca040ff3da6497facc2.css" />

    <link rel="stylesheet" onerror="Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)" data-bundlename="RobuxIcon" data-bundle-source="Main" href="https://css.rbxcdn.com/2f599b9e9ca20ee3c155684adbf1cdcb7220bab681b55b4505123a0c34e81969.css" />


<link rel="stylesheet" onerror="Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)" data-bundlename="NotificationStream" data-bundle-source="Main" href="https://css.rbxcdn.com/20b23a9720f64e268de49bae69783981ce6e3a97acbfc09506b669aaefe0c74f.css" />
    <link rel="stylesheet" onerror="Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)" data-bundlename="Chat" data-bundle-source="Main" href="https://css.rbxcdn.com/9ff00644c2caa1890ea1e1bc39ba8258c850ed19ba4fece90c16c38c73569bed.css" />





    <script type="text/javascript">
    var Roblox = Roblox || {};
    Roblox.RealTimeSettings = Roblox.RealTimeSettings ||
        {
            NotificationsEndpoint: "https://realtime.roblox.com",
            MaxConnectionTime: "21600000",
            IsEventPublishingEnabled: false,
            IsDisconnectOnSlowConnectionDisabled: true,
            IsSignalRClientTransportRestrictionEnabled: true,
            IsLocalStorageInRealTimeEnabled: true,
            IsDebuggerEnabled: "False"
        }
    </script>





<script type="text/javascript">
    var Roblox = Roblox || {};
    Roblox.EnvironmentUrls = Roblox.EnvironmentUrls || {};
    Roblox.EnvironmentUrls = {"abtestingApiSite":"https://abtesting.roblox.com","accountInformationApi":"https://accountinformation.roblox.com","accountSettingsApi":"https://accountsettings.roblox.com","adConfigurationApi":"https://adconfiguration.roblox.com","adsApi":"https://ads.roblox.com","apiGatewayCdnUrl":"https://apis.rbxcdn.com","apiGatewayUrl":"https://apis.roblox.com","apiProxyUrl":"https://api.roblox.com","assetDeliveryApi":"https://assetdelivery.roblox.com","authApi":"https://auth.roblox.com","avatarApi":"https://avatar.roblox.com","badgesApi":"https://badges.roblox.com","billingApi":"https://billing.roblox.com","captchaApi":"https://captcha.roblox.com","catalogApi":"https://catalog.roblox.com","chatApi":"https://chat.roblox.com","chatModerationApi":"https://chatmoderation.roblox.com","contactsApi":"https://contacts.roblox.com","contentStoreApi":"https://contentstore.roblox.com","developApi":"https://develop.roblox.com","domain":"roblox.com","economyApi":"https://economy.roblox.com","economycreatorstatsApi":"https://economycreatorstats.roblox.com","engagementPayoutsApi":"https://engagementpayouts.roblox.com","followingsApi":"https://followings.roblox.com","friendsApi":"https://friends.roblox.com","gameInternationalizationApi":"https://gameinternationalization.roblox.com","gamesApi":"https://games.roblox.com","groupsApi":"https://groups.roblox.com","groupsModerationApi":"https://groupsmoderation.roblox.com","helpSite":"http://help.roblox.com","inventoryApi":"https://inventory.roblox.com","itemConfigurationApi":"https://itemconfiguration.roblox.com","localeApi":"https://locale.roblox.com","localizationTablesApi":"https://localizationtables.roblox.com","metricsApi":"https://metrics.roblox.com","midasApi":"https://midas.roblox.com","notificationApi":"https://notifications.roblox.com","premiumFeaturesApi":"https://premiumfeatures.roblox.com","presenceApi":"https://presence.roblox.com","privateMessagesApi":"https://privatemessages.roblox.com","publishApi":"https://publish.roblox.com","restrictedHoursServiceApi":"https://apis.roblox.com/restricted-hours-service","screenTimeApi":"https://apis.rcs.roblox.com/screen-time-api","shareApi":"https://share.roblox.com","thumbnailsApi":"https://thumbnails.roblox.com","tradesApi":"https://trades.roblox.com","translationRolesApi":"https://translationroles.roblox.com","twoStepVerificationApi":"https://twostepverification.roblox.com","universalAppConfigurationApi":"https://apis.roblox.com/universal-app-configuration","userAgreementsServiceApi":"https://apis.roblox.com/user-agreements","userModerationApi":"https://usermoderation.roblox.com","usersApi":"https://users.roblox.com","voiceApi":"https://voice.roblox.com","websiteUrl":"https://www.roblox.com"};

    // please keep the list in alphabetical order
    var additionalUrls = {
        amazonStoreLink: "https://www.amazon.com/Roblox-Corporation/dp/B00NUF4YOA",
        amazonWebStoreLink: "https%3a%2f%2fwww.amazon.com%2froblox%3f%26_encoding%3dUTF8%26tag%3dr05d13-20%26linkCode%3dur2%26linkId%3d5562fc29c05b45562a86358c198356eb%26camp%3d1789%26creative%3d9325",
        appProtocolUrl: "robloxmobile://",
        appStoreLink: "https://itunes.apple.com/us/app/roblox-mobile/id431946152",
        googlePlayStoreLink: "https://play.google.com/store/apps/details?id=com.roblox.client&amp;hl=en",
        iosAppStoreLink: "https://itunes.apple.com/us/app/roblox-mobile/id431946152",
        windowsStoreLink: "https://www.microsoft.com/en-us/store/games/roblox/9nblgggzm6wm",
        xboxStoreLink: "https://www.microsoft.com/en-us/p/roblox/bq1tn1t79v9k"
    }

    for (var urlName in additionalUrls) {
        Roblox.EnvironmentUrls[urlName] = additionalUrls[urlName];
    }
    
</script>



<script type="text/javascript">
    var Roblox = Roblox || {};
    Roblox.GaEventSettings = {
        gaDFPPreRollEnabled: "false" === "true",
        gaLaunchAttemptAndLaunchSuccessEnabled: "false" === "true",
        gaPerformanceEventEnabled: "false" === "true"
    };
</script>



    <script onerror='Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)' data-monitor='true' data-bundlename='headerinit' type='text/javascript' src='https://js.rbxcdn.com/a67ddd9413db88f4124e2c4f25d8cb1f.js'></script>

    <script type="text/javascript" onerror="Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)" data-monitor="true" data-bundlename="Polyfill" data-bundle-source="Main" src="https://js.rbxcdn.com/772034db167d3f4260047db4a7f2b8a58cf448709327013541e47c8962b6e556.js"></script>


    <script type="text/javascript" onerror="Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)" data-monitor="true" data-bundlename="XsrfProtection" data-bundle-source="Main" src="https://js.rbxcdn.com/4db2f741b7a3ec36d11fec999ce33f708ae85641cabfd27e11e0935928f7d9c4.js"></script>


    <script type="text/javascript" onerror="Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)" data-monitor="true" data-bundlename="HeaderScripts" data-bundle-source="Main" src="https://js.rbxcdn.com/97cb9ac7262155c329a259fce9f940f9bcfa852a6a1ccb44bd8a41c31e84e54b.js"></script>



<meta name="sentry-meta"
      data-env-name="production"
      data-dsn="https://6750adeb1b1348e4a10b13e726d5c10b@sentry.io/1539367"
      data-sample-rate="0" /><script type="text/javascript" onerror="Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)" data-monitor="true" data-bundlename="Sentry" data-bundle-source="Main" src="https://js.rbxcdn.com/edc66704bd1974195d8c60f4a163441bec82f1bcb11c492e7df07c43f45a4d49.js"></script>

<meta name="roblox-tracer-meta-data"
      data-access-token="S3EXjCZQQr6OixnmKu+hoa3OSfpvPP5qgU0esiWgwreFUUMBnPhEaoS5yIIrf9bdYlSgW0XKCb1So9Rhtj1eMzt/MJWcyKZ4TwIckHVj"
      data-service-name="Web"
      data-tracer-enabled="false"
      data-api-sites-request-allow-list="friends.roblox.com,chat.roblox.com,thumbnails.roblox.com,games.roblox.com"
      data-sample-rate="5"
      data-is-instrument-page-performance-enabled="true"/><script type="text/javascript" onerror="Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)" data-monitor="true" data-bundlename="RobloxTracer" data-bundle-source="Main" src="https://js.rbxcdn.com/ca2261fe9ad840ce9ed16c2b34a21f45a3bfaaf229bdab564a169aa3d505f92d.js"></script>

<script type="text/javascript" onerror="Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)" data-monitor="true" data-bundlename="RealTime" data-bundle-source="Main" src="https://js.rbxcdn.com/89f30f6701e04efb9dad1b1fb75ebd7cfe55257af8c8cefbd609039c4d66d8a8.js"></script>
<script type="text/javascript" onerror="Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)" data-monitor="true" data-bundlename="CrossTabCommunication" data-bundle-source="Main" src="https://js.rbxcdn.com/948f3bfc9bbd152f537592b51c1a7765cdc0dfc538d74b7e5fc696c476c8792b.js"></script>
    
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0" />

<script type="text/javascript">
    var Roblox = Roblox || {};
    Roblox.AdsHelper = Roblox.AdsHelper || {};
    Roblox.AdsLibrary = Roblox.AdsLibrary || {};

    Roblox.AdsHelper.toggleAdsSlot = function (slotId, GPTRandomSlotIdentifier) {
        var gutterAdsEnabled = false;
        if (gutterAdsEnabled) {
            googletag.display(GPTRandomSlotIdentifier);
            return;
        }
        
        if (typeof slotId !== 'undefined' && slotId && slotId.length > 0) {
            var slotElm = $("#"+slotId);
            if (slotElm.is(":visible")) {
                googletag.display(GPTRandomSlotIdentifier);
            }else {
                var adParam = Roblox.AdsLibrary.adsParameters[slotId];
                if (adParam) {
                    adParam.template = slotElm.html();
                    slotElm.empty();
                }
            }
        }
    }
</script>    <script type="text/javascript">
        $(function () {
            RobloxEventManager.triggerEvent('rbx_evt_newuser', {});
        });

    </script>



    
    <!--[if lt IE 9]>
        <script src="//oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
        <script src="//oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->

<script>
    //Set if it browser's do not track flag is enabled
    var Roblox = Roblox || {};
    (function() {
        var dnt = navigator.doNotTrack || window.doNotTrack || navigator.msDoNotTrack;
        if (typeof window.external !== "undefined" &&
            typeof window.external.msTrackingProtectionEnabled !== "undefined") {
            dnt = dnt || window.external.msTrackingProtectionEnabled();
        }
        Roblox.browserDoNotTrack = dnt == "1" || dnt == "yes" || dnt === true;
    })();
</script>


    <script type="text/javascript">

        var _gaq = _gaq || [];

                window.GoogleAnalyticsDisableRoblox2 = true;
        _gaq.push(['b._setAccount', 'UA-486632-1']);
            _gaq.push(['b._setSampleRate', '10']);
        _gaq.push(['b._setCampSourceKey', 'rbx_source']);
        _gaq.push(['b._setCampMediumKey', 'rbx_medium']);
        _gaq.push(['b._setCampContentKey', 'rbx_campaign']);

            _gaq.push(['b._setDomainName', 'roblox.com']);

            _gaq.push(['b._setCustomVar', 1, 'Visitor', 'Member', 2]);
                _gaq.push(['b._setPageGroup', 1, 'Home']);
            _gaq.push(['b._trackPageview']);

        _gaq.push(['c._setAccount', 'UA-26810151-2']);
            _gaq.push(['c._setSampleRate', '1']);
                    _gaq.push(['c._setDomainName', 'roblox.com']);
                    _gaq.push(['c._setPageGroup', 1, 'Home']);
                    
            (function() {
                if (!Roblox.browserDoNotTrack) {
                    var ga = document.createElement('script');
                    ga.type = 'text/javascript';
                    ga.async = true;
                    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
                    var s = document.getElementsByTagName('script')[0];
                    s.parentNode.insertBefore(ga, s);
                }
        })();
        
     </script>
        <script async src='https://www.googletagmanager.com/gtag/js?id=AW-1065449093'></script>
        <script type="text/javascript">
            var accountCode = "AW-1065449093";
            var signupConversionEventKey = "wmuJCO3CZBCF7YX8Aw";
            var webPurchaseConversionEventKey = "XDQ_CJme6s0BEIXthfwD";
            window.dataLayer = window.dataLayer || [];

            function gtag() { dataLayer.push(arguments); }
            gtag.conversionEvents = {
                signupConversionEvent: accountCode + '/' + signupConversionEventKey,
                webPurchaseConversionEvent: accountCode + '/' + webPurchaseConversionEventKey
            }
            gtag ('set', 'allow_ad_personalization_signals', false) ;
            gtag('js', new Date());
            gtag('config', accountCode);
        </script>

            <script type="text/javascript">
            if (Roblox && Roblox.EventStream) {
                Roblox.EventStream.Init("//ecsv2.roblox.com/www/e.png",
                    "//ecsv2.roblox.com/www/e.png",
                    "//ecsv2.roblox.com/pe?t=studio",
                    "//ecsv2.roblox.com/pe?t=diagnostic");
            }
        </script>



<script type="text/javascript">
    if (Roblox && Roblox.PageHeartbeatEvent) {
        Roblox.PageHeartbeatEvent.Init([2,8,20,60]);
    }
</script>    
    <script type="text/javascript">
if (typeof(Roblox) === "undefined") { Roblox = {}; }
Roblox.Endpoints = Roblox.Endpoints || {};
Roblox.Endpoints.Urls = Roblox.Endpoints.Urls || {};
Roblox.Endpoints.Urls['/asset/'] = 'https://assetgame.roblox.com/asset/';
Roblox.Endpoints.Urls['/client-status/set'] = 'https://www.roblox.com/client-status/set';
Roblox.Endpoints.Urls['/client-status'] = 'https://www.roblox.com/client-status';
Roblox.Endpoints.Urls['/game/'] = 'https://assetgame.roblox.com/game/';
Roblox.Endpoints.Urls['/game/edit.ashx'] = 'https://assetgame.roblox.com/game/edit.ashx';
Roblox.Endpoints.Urls['/game/placelauncher.ashx'] = 'https://assetgame.roblox.com/game/placelauncher.ashx';
Roblox.Endpoints.Urls['/game/preloader'] = 'https://assetgame.roblox.com/game/preloader';
Roblox.Endpoints.Urls['/game/report-stats'] = 'https://assetgame.roblox.com/game/report-stats';
Roblox.Endpoints.Urls['/game/report-event'] = 'https://assetgame.roblox.com/game/report-event';
Roblox.Endpoints.Urls['/game/updateprerollcount'] = 'https://assetgame.roblox.com/game/updateprerollcount';
Roblox.Endpoints.Urls['/login/default.aspx'] = 'https://www.roblox.com/login/default.aspx';
Roblox.Endpoints.Urls['/my/avatar'] = 'https://www.roblox.com/my/avatar';
Roblox.Endpoints.Urls['/my/money.aspx'] = 'https://www.roblox.com/my/money.aspx';
Roblox.Endpoints.Urls['/navigation/userdata'] = 'https://www.roblox.com/navigation/userdata';
Roblox.Endpoints.Urls['/chat/chat'] = 'https://www.roblox.com/chat/chat';
Roblox.Endpoints.Urls['/chat/data'] = 'https://www.roblox.com/chat/data';
Roblox.Endpoints.Urls['/friends/list'] = 'https://www.roblox.com/friends/list';
Roblox.Endpoints.Urls['/navigation/getcount'] = 'https://www.roblox.com/navigation/getCount';
Roblox.Endpoints.Urls['/regex/email'] = 'https://www.roblox.com/regex/email';
Roblox.Endpoints.Urls['/catalog/browse.aspx'] = 'https://www.roblox.com/catalog/browse.aspx';
Roblox.Endpoints.Urls['/catalog/html'] = 'https://search.roblox.com/catalog/html';
Roblox.Endpoints.Urls['/catalog/json'] = 'https://search.roblox.com/catalog/json';
Roblox.Endpoints.Urls['/catalog/contents'] = 'https://search.roblox.com/catalog/contents';
Roblox.Endpoints.Urls['/catalog/lists.aspx'] = 'https://search.roblox.com/catalog/lists.aspx';
Roblox.Endpoints.Urls['/catalog/items'] = 'https://search.roblox.com/catalog/items';
Roblox.Endpoints.Urls['/asset-hash-thumbnail/image'] = 'https://assetgame.roblox.com/asset-hash-thumbnail/image';
Roblox.Endpoints.Urls['/asset-hash-thumbnail/json'] = 'https://assetgame.roblox.com/asset-hash-thumbnail/json';
Roblox.Endpoints.Urls['/asset-thumbnail-3d/json'] = 'https://assetgame.roblox.com/asset-thumbnail-3d/json';
Roblox.Endpoints.Urls['/asset-thumbnail/image'] = 'https://assetgame.roblox.com/asset-thumbnail/image';
Roblox.Endpoints.Urls['/asset-thumbnail/json'] = 'https://assetgame.roblox.com/asset-thumbnail/json';
Roblox.Endpoints.Urls['/asset-thumbnail/url'] = 'https://assetgame.roblox.com/asset-thumbnail/url';
Roblox.Endpoints.Urls['/asset/request-thumbnail-fix'] = 'https://assetgame.roblox.com/asset/request-thumbnail-fix';
Roblox.Endpoints.Urls['/avatar-thumbnail-3d/json'] = 'https://www.roblox.com/avatar-thumbnail-3d/json';
Roblox.Endpoints.Urls['/avatar-thumbnail/image'] = 'https://www.roblox.com/avatar-thumbnail/image';
Roblox.Endpoints.Urls['/avatar-thumbnail/json'] = 'https://www.roblox.com/avatar-thumbnail/json';
Roblox.Endpoints.Urls['/avatar-thumbnails'] = 'https://www.roblox.com/avatar-thumbnails';
Roblox.Endpoints.Urls['/avatar/request-thumbnail-fix'] = 'https://www.roblox.com/avatar/request-thumbnail-fix';
Roblox.Endpoints.Urls['/bust-thumbnail/json'] = 'https://www.roblox.com/bust-thumbnail/json';
Roblox.Endpoints.Urls['/headshot-thumbnail/json'] = 'https://www.roblox.com/headshot-thumbnail/json';
Roblox.Endpoints.Urls['/item-thumbnails'] = 'https://www.roblox.com/item-thumbnails';
Roblox.Endpoints.Urls['/outfit-thumbnail/json'] = 'https://www.roblox.com/outfit-thumbnail/json';
Roblox.Endpoints.Urls['/place-thumbnails'] = 'https://www.roblox.com/place-thumbnails';
Roblox.Endpoints.Urls['/thumbnail/asset/'] = 'https://www.roblox.com/thumbnail/asset/';
Roblox.Endpoints.Urls['/thumbnail/avatar-headshot'] = 'https://www.roblox.com/thumbnail/avatar-headshot';
Roblox.Endpoints.Urls['/thumbnail/avatar-headshots'] = 'https://www.roblox.com/thumbnail/avatar-headshots';
Roblox.Endpoints.Urls['/thumbnail/user-avatar'] = 'https://www.roblox.com/thumbnail/user-avatar';
Roblox.Endpoints.Urls['/thumbnail/resolve-hash'] = 'https://www.roblox.com/thumbnail/resolve-hash';
Roblox.Endpoints.Urls['/thumbnail/place'] = 'https://www.roblox.com/thumbnail/place';
Roblox.Endpoints.Urls['/thumbnail/get-asset-media'] = 'https://www.roblox.com/thumbnail/get-asset-media';
Roblox.Endpoints.Urls['/thumbnail/remove-asset-media'] = 'https://www.roblox.com/thumbnail/remove-asset-media';
Roblox.Endpoints.Urls['/thumbnail/set-asset-media-sort-order'] = 'https://www.roblox.com/thumbnail/set-asset-media-sort-order';
Roblox.Endpoints.Urls['/thumbnail/place-thumbnails'] = 'https://www.roblox.com/thumbnail/place-thumbnails';
Roblox.Endpoints.Urls['/thumbnail/place-thumbnails-partial'] = 'https://www.roblox.com/thumbnail/place-thumbnails-partial';
Roblox.Endpoints.Urls['/thumbnail_holder/g'] = 'https://www.roblox.com/thumbnail_holder/g';
Roblox.Endpoints.Urls['/users/{id}/profile'] = 'https://www.roblox.com/users/{id}/profile';
Roblox.Endpoints.Urls['/service-workers/push-notifications'] = 'https://www.roblox.com/service-workers/push-notifications';
Roblox.Endpoints.Urls['/notification-stream/notification-stream-data'] = 'https://www.roblox.com/notification-stream/notification-stream-data';
Roblox.Endpoints.Urls['/api/friends/acceptfriendrequest'] = 'https://www.roblox.com/api/friends/acceptfriendrequest';
Roblox.Endpoints.Urls['/api/friends/declinefriendrequest'] = 'https://www.roblox.com/api/friends/declinefriendrequest';
Roblox.Endpoints.Urls['/authentication/is-logged-in'] = 'https://www.roblox.com/authentication/is-logged-in';
Roblox.Endpoints.addCrossDomainOptionsToAllRequests = true;
</script>

    <script type="text/javascript">
if (typeof(Roblox) === "undefined") { Roblox = {}; }
Roblox.Endpoints = Roblox.Endpoints || {};
Roblox.Endpoints.Urls = Roblox.Endpoints.Urls || {};
</script>

    <script>
    Roblox = Roblox || {};
    Roblox.AbuseReportPVMeta = {
        desktopEnabled: true,
        phoneEnabled: false,
        inAppEnabled: false
    };
</script>


<meta name="thumbnail-meta-data" 
      data-is-webapp-cache-enabled="False"
      data-webapp-cache-expirations-timespan="00:01:00"
      data-request-min-cooldown="1000"
      data-request-max-cooldown="30000"
      data-request-max-retry-attempts="5"
      data-request-batch-size="100"
      data-thumbnail-metrics-sample-size="20"
      data-concurrent-thumbnail-request-count="4"/>
                          

</head>
<body id="rbx-body"
      class="rbx-body   light-theme gotham-font"
      data-performance-relative-value="0.005"
      data-internal-page-name="Home"
      data-send-event-percentage="0">
    
    <meta name="csrf-token" data-token="wmDOnY8YCfb9" />

    <div id="roblox-linkify" data-enabled="true" data-regex="(https?\:\/\/)?(?:www\.)?([a-z0-9-]{2,}\.)*(((m|de|www|web|api|blog|wiki|corp|polls|bloxcon|developer|devforum|forum|status)\.roblox\.com|robloxlabs\.com)|(www\.shoproblox\.com)|(roblox\.status\.io)|(rblx\.co)|help\.roblox\.com(?![A-Za-z0-9\/.]*\/attachments\/))(?!\/[A-Za-z0-9-+&amp;@#\/=~_|!:,.;]*%)((\/[A-Za-z0-9-+&amp;@#\/%?=~_|!:,.;]*)|(?=\s|\b))" data-regex-flags="gm" data-as-http-regex="(([^.]help|polls)\.roblox\.com)"></div>

<div id="image-retry-data"
     data-image-retry-max-times="30"
     data-image-retry-timer="500"
     data-ga-logging-percent="10">
</div>
<div id="http-retry-data"
     data-http-retry-max-timeout="0"
     data-http-retry-base-timeout="0"
     data-http-retry-max-times="1">
</div>
                <div id="TosAgreementInfo"
                 data-terms-check-needed="False">
            </div>

    



<div id="fb-root"></div>

<div id="wrap" class="wrap no-gutter-ads logged-in"
     data-gutter-ads-enabled="false">


<div id="navigation-container" class="light-theme gotham-font" data-number-of-autocomplete-suggestions="7">
    <div id="header" class="navbar-fixed-top rbx-header" role="navigation">
  <div class="container-fluid">
    <div class="rbx-navbar-header">
      <div id="header-menu-icon" role="button" tabindex="0" class="rbx-nav-collapse">
        <span class="icon-nav-menu"></span>
      </div>
      <div class="navbar-header">
        <a class="navbar-brand" href="/home"
          ><span class="icon-logo"></span><span class="icon-logo-r"></span
        ></a>
      </div>
    </div>
    <ul class="nav rbx-navbar hidden-xs hidden-sm col-md-5 col-lg-4">
      <li class="cursor-pointer">
        <a class="font-header-2 nav-menu-title text-header" href="/discover">Discover</a>
      </li>
      <li class="cursor-pointer">
        <a class="font-header-2 nav-menu-title text-header" href="/catalog">Avatar Shop</a>
      </li>
      <li class="cursor-pointer">
        <a class="font-header-2 nav-menu-title text-header" href="/develop">Create</a>
      </li>
      <li class="cursor-pointer">
        <a class="font-header-2 nav-menu-title text-header" href="/robux?ctx-nav"
          >Robux</a
        >
      </li>
    </ul>

    <ul class="nav rbx-navbar hidden-md hidden-lg col-xs-12">
      <li class="cursor-pointer">
        <a class="font-header-2 nav-menu-title text-header" href="/discover">Discover</a>
      </li>
      <li class="cursor-pointer">
        <a class="font-header-2 nav-menu-title text-header" href="/catalog">Avatar Shop</a>
      </li>
      <li class="cursor-pointer">
        <a class="font-header-2 nav-menu-title text-header" href="/develop">Create</a>
      </li>
      <li class="cursor-pointer">
        <a class="font-header-2 nav-menu-title text-header" href="/robux?ctx=nav"
          >Robux</a
        >
      </li>
    </ul>
    <div id="right-navigation-header"></div>
  </div>
</div>
<div id="left-navigation-container"></div>
<div id="verificationUpsell-container">
  <div verificationUpsell-container></div>
</div>
<div id="accountRecoveryModal-container">
  <div accountRecoveryModal-container></div>
</div>

</div>

<script type="text/javascript">
    var Roblox = Roblox || {};
    (function () {
        if (Roblox && Roblox.Performance) {
            Roblox.Performance.setPerformanceMark("navigation_end");
        }
    })();
</script>

    <div class="container-main 
                
                
                
                
                
                "
         id="container-main">
            <script type="text/javascript">
                if (top.location != self.location) {
                    top.location = self.location.href;
                }
            </script>

        <div class="alert-container">
            <noscript><div><div class="alert-info" role="alert">Please enable Javascript to use all the features on this site.</div></div></noscript>


                <div id="account-security-prompt-container"></div>


        </div>


        <div class="content">

                <div id="Skyscraper-Abp-Left" class="abp abp-container left-abp">
                    

<iframe name="Roblox_MyHome_Left_160x600" 
        allowtransparency="true"
        frameborder="0"
        height="612"
        scrolling="no"
        data-src=""
        src="https://www.roblox.com/user-sponsorship/2"
        width="160"
        data-js-adtype="iframead"
        data-ad-slot="Roblox_MyHome_Left_160x600"></iframe>
                </div>
                        


<div id="HomeContainer" class="row home-container">


        <div id="home-header" class="col-xs-12 home-header-container">
            <div id="home-header-shimmer" class="home-header-shimmer">
                <span class="placeholder shimmer shimmer-home-avatar"></span>
                <span class="shimmer-lines shimmer-home-user-info"><div class="placeholder shimmer-line"></div></span>
            </div>
        </div>

    <div id="people-list-container" people-list-container></div>


    <div id="place-list" class="place-list-container"></div>
</div>

                <div id="Skyscraper-Abp-Right" class="abp abp-container right-abp">
                    

<iframe name="Roblox_MyHome_Right_160x600" 
        allowtransparency="true"
        frameborder="0"
        height="612"
        scrolling="no"
        data-src=""
        src="https://www.roblox.com/user-sponsorship/2"
        width="160"
        data-js-adtype="iframead"
        data-ad-slot="Roblox_MyHome_Right_160x600"></iframe>
                </div>

        </div>
            </div> 
<!--Bootstrap Footer React Component -->

<footer class="container-footer" id="footer-container"
        data-is-giftcards-footer-enabled="True">
</footer></div> 

    <div id="chat-container"
         class="chat chat-container"
         chat-base>
    </div>
<div id="cookie-banner-wrapper" class="cookie-banner-wrapper"></div>


    <script type="text/javascript">function urchinTracker() {}</script>


<script type="text/javascript">
    if (typeof Roblox === "undefined") {
        Roblox = {};
    }
    if (typeof Roblox.PlaceLauncher === "undefined") {
        Roblox.PlaceLauncher = {};
    }
    var isRobloxIconEnabledForRetheme = "True";
    var robloxIcon = isRobloxIconEnabledForRetheme === 'True' ? "<span class='icon-logo-r-95'></span>" : "<img src='https://images.rbxcdn.com/8e7879f99cfa7cc3b1fce74f8191be03.svg' width='90' height='90' alt='R'/>";
    Roblox.PlaceLauncher.Resources = {
        RefactorEnabled: "True",
        IsProtocolHandlerBaseUrlParamEnabled: "False",
        ProtocolHandlerAreYouInstalled: {
            play: {
                content: robloxIcon + "<p>You&#39;re moments away from getting into the experience!</p>",
                buttonText: "Download and Install Roblox",
                footerContent: "<a href='https://assetgame.roblox.com/game/help'class= 'text-name small' target='_blank' >Click here for help</a> "
            },
            studio: {
                content: "<img src='https://images.rbxcdn.com/f25e4cadae29ae9a57a962126b2d2e2a.png' width='95' height='95' alt='R' /><p>Get started creating your own experiences!</p>",
                buttonText: "Download Studio"
            }
        },
        ProtocolHandlerStartingDialog: {
            play: {
                content: robloxIcon + "<p>Roblox is now loading. Get ready!</p>"
            },
            studio: {
                content: "<img src='https://images.rbxcdn.com/f25e4cadae29ae9a57a962126b2d2e2a.png' width='95' height='95' alt='R' /><p>Checking for Roblox Studio...</p>"
            },
            loader: "<span class='spinner spinner-default'></span>"
        }
    };
</script>
<div id="PlaceLauncherStatusPanel" style="display:none;width:300px"
     data-new-plugin-events-enabled="True"
     data-event-stream-for-plugin-enabled="True"
     data-event-stream-for-protocol-enabled="True"
     data-is-game-launch-interface-enabled="True"
     data-is-protocol-handler-launch-enabled="True"
     data-is-duar-auto-opt-in-enabled="false"
     data-is-duar-opt-out-disabled="false"
     data-is-user-logged-in="True"
     data-os-name="Unknown"
     data-protocol-name-for-client="roblox-player"
     data-protocol-name-for-studio="roblox-studio"
     data-protocol-roblox-locale="en_us"
     data-protocol-game-locale="en_us"
     data-protocol-url-includes-launchtime="true"
     data-protocol-detection-enabled="true"
     data-protocol-separate-script-parameters-enabled="true"
     data-protocol-avatar-parameter-enabled="true"
     data-protocol-channel-name="LIVE"
     data-protocol-studio-channel-name=""
     data-protocol-player-channel-name="">
    <div class="modalPopup blueAndWhite PlaceLauncherModal" style="min-height: 160px">
        <div id="Spinner" class="Spinner" style="padding:20px 0;">
            <img data-delaysrc="https://images.rbxcdn.com/e998fb4c03e8c2e30792f2f3436e9416.gif" height="32" width="32" alt="Progress" />
        </div>
        <div id="status" style="min-height:40px;text-align:center;margin:5px 20px">
            <div id="Starting" class="PlaceLauncherStatus MadStatusStarting" style="display:block">
                Starting Roblox...
            </div>
            <div id="Waiting" class="PlaceLauncherStatus MadStatusField">Connecting to People...</div>
            <div id="StatusBackBuffer" class="PlaceLauncherStatus PlaceLauncherStatusBackBuffer MadStatusBackBuffer"></div>
        </div>
        <div style="text-align:center;margin-top:1em">
            <input type="button" class="Button CancelPlaceLauncherButton translate" value="Cancel" />
        </div>
    </div>
</div>
<div id="ProtocolHandlerClickAlwaysAllowed"
     class="ph-clickalwaysallowed"
     
     style="display:none;">
    <p class="larger-font-size">
        <span class="icon-moreinfo"></span>
                
                    Check <strong>Always open links for URL: Roblox Protocol</strong> and click <strong>Open URL: Roblox Protocol</strong> in the dialog box above to join experiences faster in the future!
                
    </p>
</div>

<script type="text/javascript">
function checkRobloxInstall() {
             window.location = 'https://www.roblox.com/unsupported?osx=10.5'; return false;
}
</script>


    <div id="InstallationInstructions" class="" style="display:none;">
        <div class="ph-installinstructions">
            <div class="ph-modal-header">
                    <span class="icon-close simplemodal-close"></span>
                    <h3 class="title">Thanks for visiting Roblox</h3>
            </div>
            <div class="modal-content-container"> 
                <div class="ph-installinstructions-body ">


        <ul class="modal-col-4">
            <li class="step1-of-4">
                <h2>1</h2>
                <p class="larger-font-size">Click <strong>RobloxPlayer.exe</strong> to run the Roblox installer, which just downloaded via your web browser.</p>
                <img data-delaysrc="https://images.rbxcdn.com/28eaa93b899b93461399aebf21c5346f.png" />
            </li>
            <li class="step2-of-4">
                <h2>2</h2>
                <p class="larger-font-size">Click <strong>Run</strong> when prompted by your computer to begin the installation process.</p>
                <img data-delaysrc="https://images.rbxcdn.com/51328932dedb5d8d61107272cc1a27db.png" />
            </li>
            <li class="step3-of-4">
                <h2>3</h2>
                <p class="larger-font-size">Click <strong>Ok</strong> once you've successfully installed Roblox.</p>
                <img data-delaysrc="https://images.rbxcdn.com/3797745629baca2d1b9496b76bc9e6dc.png" />
            </li>
            <li class="step4-of-4">
                <h2>4</h2>
                <p class="larger-font-size">After installation, click <strong>Join</strong> below to join the action!</p>
                <div class="VisitButton VisitButtonContinueGLI">
                    <a class="btn btn-primary-lg disabled btn-full-width">Join</a>
                </div>
            </li>
        </ul>

                </div>
            </div>
            <div class="xsmall">
                The Roblox installer should download shortly. If it doesn’t, start the <a id="GameLaunchManualInstallLink" href="#" class="text-link">download now.</a>
 <script>
                       if (Roblox.ProtocolHandlerClientInterface && typeof Roblox.ProtocolHandlerClientInterface.attachManualDownloadToLink === 'function') {
                           Roblox.ProtocolHandlerClientInterface.attachManualDownloadToLink();
                       }
                   </script>
            </div>
        </div>
    </div>
    <div class="InstallInstructionsImage" data-modalwidth="970" style="display:none;"></div>


<div id="pluginObjDiv" style="height:1px;width:1px;visibility:hidden;position: absolute;top: 0;"></div>
<iframe id="downloadInstallerIFrame" name="downloadInstallerIFrame" style="visibility:hidden;height:0;width:1px;position:absolute"></iframe>

<script onerror='Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)' data-monitor='true' data-bundlename='clientinstaller' type='text/javascript' src='https://js.rbxcdn.com/f424a786e3d883cff747a034605fa09d.js'></script>

<script type="text/javascript">
    Roblox.Client._skip = '/unsupported';
    Roblox.Client._CLSID = '';
    Roblox.Client._installHost = '';
    Roblox.Client.ImplementsProxy = false;
    Roblox.Client._silentModeEnabled = false;
    Roblox.Client._bringAppToFrontEnabled = false;
    Roblox.Client._currentPluginVersion = '';
    Roblox.Client._eventStreamLoggingEnabled = false;

        
        Roblox.Client._installSuccess = function() {
            if(GoogleAnalyticsEvents){
                GoogleAnalyticsEvents.ViewVirtual('InstallSuccess');
                GoogleAnalyticsEvents.FireEvent(['Plugin','Install Success']);
                if (Roblox.Client._eventStreamLoggingEnabled && typeof Roblox.GamePlayEvents != "undefined") {
                    Roblox.GamePlayEvents.SendInstallSuccess(Roblox.Client._launchMode, play_placeId);
                }
            }
        }
        
            
        if ((window.chrome || window.safari) && window.location.hash == '#chromeInstall') {
            window.location.hash = '';
            var continuation = '(' + $.cookie('chromeInstall') + ')';
            play_placeId = $.cookie('chromeInstallPlaceId');
            Roblox.GamePlayEvents.lastContext = $.cookie('chromeInstallLaunchMode');
            $.cookie('chromeInstallPlaceId', null);
            $.cookie('chromeInstallLaunchMode', null);
            $.cookie('chromeInstall', null);
            RobloxLaunch._GoogleAnalyticsCallback = function() { var isInsideRobloxIDE = 'website'; if (Roblox && Roblox.Client && Roblox.Client.isIDE && Roblox.Client.isIDE()) { isInsideRobloxIDE = 'Studio'; };GoogleAnalyticsEvents.FireEvent(['Plugin Location', 'Launch Attempt', isInsideRobloxIDE]);GoogleAnalyticsEvents.FireEvent(['Plugin', 'Launch Attempt', 'Play']);EventTracker.fireEvent('GameLaunchAttempt_Unknown', 'GameLaunchAttempt_Unknown_Plugin'); if (typeof Roblox.GamePlayEvents != 'undefined') { Roblox.GamePlayEvents.SendClientStartAttempt(null, play_placeId); }  }; 
            Roblox.Client.ResumeTimer(eval(continuation));
        }
        
</script>


<div class="ConfirmationModal modalPopup unifiedModal smallModal" data-modal-handle="confirmation" style="display:none;">
    <a class="genericmodal-close ImageButton closeBtnCircle_20h"></a>
    <div class="Title"></div>
    <div class="GenericModalBody">
        <div class="TopBody">
            <div class="ImageContainer roblox-item-image" data-image-size="small" data-no-overlays data-no-click>
                <img class="GenericModalImage" alt="generic image" />
            </div>
            <div class="Message"></div>
        </div>
        <div class="ConfirmationModalButtonContainer GenericModalButtonContainer">
            <a href id="roblox-confirm-btn"><span></span></a>
            <a href id="roblox-decline-btn"><span></span></a>
        </div>
        <div class="ConfirmationModalFooter">
        
        </div>  
    </div>  
    <script type="text/javascript">
        Roblox = Roblox || {};
        Roblox.Resources = Roblox.Resources || {};
        
        Roblox.Resources.GenericConfirmation = {
            yes: "Yes",
            No: "No",
            Confirm: "Confirm",
            Cancel: "Cancel"
        };
    </script>
</div>

<div id="modal-confirmation" class="modal-confirmation" data-modal-type="confirmation">
    <div id="modal-dialog"  class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal">
                    <span aria-hidden="true"><span class="icon-close"></span></span><span class="sr-only">Close</span>
                </button>
                <h5 class="modal-title"></h5>
            </div>

            <div class="modal-body">
                <div class="modal-top-body">
                    <div class="modal-message"></div>
                    <div class="modal-image-container roblox-item-image" data-image-size="medium" data-no-overlays data-no-click>
                        <img class="modal-thumb" alt="generic image"/>
                    </div>
                    <div class="modal-checkbox checkbox">
                        <input id="modal-checkbox-input" type="checkbox"/>
                        <label for="modal-checkbox-input"></label>
                    </div>
                </div>
                <div class="modal-btns">
                    <a href id="confirm-btn"><span></span></a>
                    <a href id="decline-btn"><span></span></a>
                </div>
                <div class="loading modal-processing">
                    <img class="loading-default" src='https://images.rbxcdn.com/4bed93c91f909002b1f17f05c0ce13d1.gif' alt="Processing..." />
                </div>
            </div>
            <div class="modal-footer text-footer">

            </div>
        </div>
    </div>
</div>





<script type="text/javascript">
    var Roblox = Roblox || {};
    Roblox.jsConsoleEnabled = false;
</script>



    <script type="text/javascript">
        $(function () {
            Roblox.CookieUpgrader.domain = 'roblox.com';
            Roblox.CookieUpgrader.upgrade("GuestData", { expires: Roblox.CookieUpgrader.thirtyYearsFromNow });
            Roblox.CookieUpgrader.upgrade("RBXSource", { expires: function (cookie) { return Roblox.CookieUpgrader.getExpirationFromCookieValue("rbx_acquisition_time", cookie); } });
            Roblox.CookieUpgrader.upgrade("RBXViralAcquisition", { expires: function (cookie) { return Roblox.CookieUpgrader.getExpirationFromCookieValue("time", cookie); } });
                
                Roblox.CookieUpgrader.upgrade("RBXMarketing", { expires: Roblox.CookieUpgrader.thirtyYearsFromNow });
                
                            
                Roblox.CookieUpgrader.upgrade("RBXSessionTracker", { expires: Roblox.CookieUpgrader.fourHoursFromNow });
                
                            
                Roblox.CookieUpgrader.upgrade("RBXEventTrackerV2", {expires: Roblox.CookieUpgrader.thirtyYearsFromNow});
                
        });
    </script>


    

    
    <script onerror='Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)' data-monitor='true' data-bundlename='intl-polyfill' type='text/javascript' src='https://js.rbxcdn.com/d44520f7da5ec476cfb1704d91bab327.js'></script>


    <script type="text/javascript" onerror="Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)" data-monitor="true" data-bundlename="InternationalCore" data-bundle-source="Main" src="https://js.rbxcdn.com/95044be3ff42e3dc429313faca1316cea62f328a39e29689ffeda9002f3a8bc6.js"></script>

    <script type="text/javascript" onerror="Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)" data-monitor="true" data-bundlename="TranslationResources" data-bundle-source="Main" src="https://js.rbxcdn.com/83d836a661ff433d5b7ce719c489e43af590ff75ab39ccc6d393546fe91b766a.js"></script>


    <script onerror='Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)' data-monitor='true' data-bundlename='leanbase' type='text/javascript' src='https://js.rbxcdn.com/bf0b6f742f1ddd505188ffa678e64c7f.js'></script>


    <script type="text/javascript" onerror="Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)" data-monitor="true" data-bundlename="CoreUtilities" data-bundle-source="Main" src="https://js.rbxcdn.com/277bc1c2c3f6867fac70a6561b87bbcc6a874a7274319303cdd87ada099bb07e.js"></script>

    <script type="text/javascript" onerror="Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)" data-monitor="true" data-bundlename="CoreRobloxUtilities" data-bundle-source="Main" src="https://js.rbxcdn.com/3dbdd710733380f428cd4fb7b4e08865b0f9083d1869c7d02478008e6b8c83d8.js"></script>



    <script type="text/javascript" onerror="Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)" data-monitor="true" data-bundlename="React" data-bundle-source="Main" src="https://js.rbxcdn.com/4c9a00164d9242bd60de5451a22f502c0c221a896d3a555470c03712d5ee4aa1.js"></script>

    <script type="text/javascript" onerror="Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)" data-monitor="true" data-bundlename="ReactUtilities" data-bundle-source="Main" src="https://js.rbxcdn.com/cf340fb618d9a73913b30dfc624ae60d68b9e59723746e6c08d06d14ebdd6dca.js"></script>

    <script type="text/javascript" onerror="Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)" data-monitor="true" data-bundlename="ReactStyleGuide" data-bundle-source="Main" src="https://js.rbxcdn.com/96b48e00d033e9279bbac63204d0d4fadabee3f4647a0171b33b24a56539fe21.js"></script>

    <script type="text/javascript" onerror="Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)" data-monitor="true" data-bundlename="ConfigureWebApps" data-bundle-source="Main" src="https://js.rbxcdn.com/5259cfe8a3e36118bd61120693dbba3ba87f2c3641f84bb07e29f1d69fe87523.js"></script>


    
    <script onerror='Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)' data-monitor='true' data-bundlename='angular' type='text/javascript' src='https://js.rbxcdn.com/ae3d621886e736e52c97008e085fa286.js'></script>

    <script type="text/javascript" onerror="Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)" data-monitor="true" data-bundlename="AngularJsUtilities" data-bundle-source="Main" src="https://js.rbxcdn.com/1def1215d613b6c60b2d90af16a987c364c7d32789a3b1055b7f20895ad60120.js"></script>

    <script type="text/javascript" onerror="Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)" data-monitor="true" data-bundlename="InternationalAngularJs" data-bundle-source="Main" src="https://js.rbxcdn.com/90f18784a43a70553e967191b948f70b0193df565f1605762c3c1e245ab4b55a.js"></script>

    <script type="text/javascript" onerror="Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)" data-monitor="true" data-bundlename="Thumbnails" data-bundle-source="Main" src="https://js.rbxcdn.com/b8ca5fe1ee9471c974d39c4d847c3c8f35f972ffd4a99005fab1fd80f23f997d.js"></script>



<script type="text/javascript" onerror="Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)" data-monitor="true" data-bundlename="PresenceStatus" data-bundle-source="Main" src="https://js.rbxcdn.com/bc21a1cb026cbbe9d57b77c1811f0925ca574a53a55a656c4ca4e216dda96eb3.js"></script>



<div id="presence-registration-bootstrap-data"
     data-is-enabled="True"
     data-interval="15000"></div><script type="text/javascript" onerror="Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)" data-monitor="true" data-bundlename="PresenceRegistration" data-bundle-source="Main" src="https://js.rbxcdn.com/0a83202cf5f2310227e607928f73a26cdaa7d5c27f892b99ef51ec3b863a694d.js"></script>
    <div ng-modules="baseTemplateApp">
        <script type="text/javascript" src="https://js.rbxcdn.com/ffcc04436179c6b2a6668fdfcfbf62b1.js"></script>
    </div>

    <div ng-modules="pageTemplateApp">
        <!-- Template bundle: page -->
<script type="text/javascript">
"use strict"; angular.module("pageTemplateApp", []).run(['$templateCache', function($templateCache) { 

 }]);
</script>

    </div>

<script type="text/javascript" onerror="Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)" data-monitor="true" data-bundlename="VerificationUpsell" data-bundle-source="Main" src="https://js.rbxcdn.com/a6f10b80c999059e6d87f6a62efcf22db2d28a6189edc37260c61ff92a66efa8.js"></script>
<script type="text/javascript" onerror="Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)" data-monitor="true" data-bundlename="DynamicLocalizationResourceScript_Feature.VerificationUpsell" data-bundle-source="Unknown" src="https://js.rbxcdn.com/13f8bff3ba1af1ad7b045061cca5f5d6462370c06107fa5dac0a13e1853f2a46.js"></script>
<script type="text/javascript" onerror="Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)" data-monitor="true" data-bundlename="DynamicLocalizationResourceScript_Feature.VerificationUpsell" data-bundle-source="Unknown" src="https://js.rbxcdn.com/e7f95ca44104711e9837e209a1ee7513bf32e4510cb712db1e13b434a83fa9bb.js"></script>
<script type="text/javascript" onerror="Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)" data-monitor="true" data-bundlename="Navigation" data-bundle-source="Main" src="https://js.rbxcdn.com/90d1616c8649ec47340b1abea7c6ac45eaf4894476e486ab32e34091847b507c.js"></script>
<script type="text/javascript" onerror="Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)" data-monitor="true" data-bundlename="DynamicLocalizationResourceScript_Common.AlertsAndOptions" data-bundle-source="Unknown" src="https://js.rbxcdn.com/03a64d3850925b52ee73bd27b41658f4a35a2b33b4a499fcb2ce72dcbd98020f.js"></script>
<script type="text/javascript" onerror="Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)" data-monitor="true" data-bundlename="DynamicLocalizationResourceScript_Common.AlertsAndOptions" data-bundle-source="Unknown" src="https://js.rbxcdn.com/8f06fef33a61a6c67e1e6d93829b9bb03476bc976102d7bcebe4bfe85a3d4328.js"></script>
<script type="text/javascript" onerror="Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)" data-monitor="true" data-bundlename="DynamicLocalizationResourceScript_Feature.ShopDialog" data-bundle-source="Unknown" src="https://js.rbxcdn.com/95fdafe5af749e388de603b9ee7f67bb092c3c790badc572db4e2bca0c32b49a.js"></script>
<script type="text/javascript" onerror="Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)" data-monitor="true" data-bundlename="DynamicLocalizationResourceScript_Feature.ShopDialog" data-bundle-source="Unknown" src="https://js.rbxcdn.com/c0606e8d6eb4487cdc70d318e6de3d9aaeeb465ddb84acd95139011e56c5e5c6.js"></script>
<script type="text/javascript" onerror="Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)" data-monitor="true" data-bundlename="DynamicLocalizationResourceScript_CommonUI.Features" data-bundle-source="Unknown" src="https://js.rbxcdn.com/c629f6739d6903fec0d935d26a9cea02ff757856d4ed73a83fd1535affea0300.js"></script>
<script type="text/javascript" onerror="Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)" data-monitor="true" data-bundlename="DynamicLocalizationResourceScript_CommonUI.Features" data-bundle-source="Unknown" src="https://js.rbxcdn.com/5370e5e55fc9993ec53b0a4195e82290b8c1c5f95a1fb5cd11a2ec82d5d07809.js"></script>

    

    
    <script type='text/javascript'>Roblox.config.externalResources = [];Roblox.config.paths['Pages.Catalog'] = 'https://js.rbxcdn.com/109d883fe3988fca757e26e341ed0fe8.js';Roblox.config.paths['Pages.CatalogShared'] = 'https://js.rbxcdn.com/8680a449ea23b2b842200032b01e95ff.js';Roblox.config.paths['Widgets.AvatarImage'] = 'https://js.rbxcdn.com/7d49ac94271bd506077acc9d0130eebb.js';Roblox.config.paths['Widgets.DropdownMenu'] = 'https://js.rbxcdn.com/da553e6b77b3d79bec37441b5fb317e7.js';Roblox.config.paths['Widgets.HierarchicalDropdown'] = 'https://js.rbxcdn.com/4a0af9989732810851e9e12809aeb8ad.js';Roblox.config.paths['Widgets.ItemImage'] = 'https://js.rbxcdn.com/61a0490ba23afa17f9ecca2a079a6a57.js';Roblox.config.paths['Widgets.PlaceImage'] = 'https://js.rbxcdn.com/a6df74a754523e097cab747621643c98.js';</script>

        <script>
            $(function () {
                Roblox.DeveloperConsoleWarning.showWarning();
            });
        </script>
    

<script type="text/javascript">
    $(function(){
        function trackReturns() {
            function dayDiff(d1, d2) {
                return Math.floor((d1-d2)/86400000);
            }
            if (!localStorage) {
                return false;
            }

            var cookieName = 'RBXReturn';
            var cookieOptions = {expires:9001};
            var cookieStr = localStorage.getItem(cookieName) || "";
            var cookie = {};

            try {
                cookie = JSON.parse(cookieStr);
            } catch (ex) {
                // busted cookie string from old previous version of the code
            }

            try {
                if (typeof cookie.ts === "undefined" || isNaN(new Date(cookie.ts))) {
                    localStorage.setItem(cookieName, JSON.stringify({ ts: new Date().toDateString() }));
                    return false;
                }
            } catch (ex) {
                return false;
            }

            var daysSinceFirstVisit = dayDiff(new Date(), new Date(cookie.ts));
            if (daysSinceFirstVisit == 1 && typeof cookie.odr === "undefined") {
                RobloxEventManager.triggerEvent('rbx_evt_odr', {});
                cookie.odr = 1;
            }
            if (daysSinceFirstVisit >= 1 && daysSinceFirstVisit <= 7 && typeof cookie.sdr === "undefined") {
                RobloxEventManager.triggerEvent('rbx_evt_sdr', {});
                cookie.sdr = 1;
            }
            try {
                localStorage.setItem(cookieName, JSON.stringify(cookie));
            } catch (ex) {
                return false;
            }
        }

        GoogleListener.init();


    
        RobloxEventManager.initialize(true);
        RobloxEventManager.triggerEvent('rbx_evt_pageview');
        trackReturns();
        

    
        RobloxEventManager._idleInterval = 450000;
        RobloxEventManager.registerCookieStoreEvent('rbx_evt_initial_install_start');
        RobloxEventManager.registerCookieStoreEvent('rbx_evt_ftp');
        RobloxEventManager.registerCookieStoreEvent('rbx_evt_initial_install_success');
        RobloxEventManager.registerCookieStoreEvent('rbx_evt_fmp');
        

    });

</script>


    
    

<script type="text/javascript">
    var Roblox = Roblox || {};
    Roblox.UpsellAdModal = Roblox.UpsellAdModal || {};

    Roblox.UpsellAdModal.Resources = {
        title: "Remove Ads Like This",
        body: "Builders Club members do not see external ads like these.",
        accept: "Upgrade Now",
        decline: "No, thanks"
    };
</script>

    
    <script onerror='Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)' data-monitor='true' data-bundlename='page' type='text/javascript' src='https://js.rbxcdn.com/9f39cc574de0855309f6bed3deffeab6.js'></script>


    <script type="text/javascript" onerror="Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)" data-monitor="true" data-bundlename="StyleGuide" data-bundle-source="Main" src="https://js.rbxcdn.com/0e7668e93997cad9845b8b89557e3510ea0f33d229b569a463c3766feb16ee09.js"></script>

<script type="text/javascript" onerror="Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)" data-monitor="true" data-bundlename="Footer" data-bundle-source="Main" src="https://js.rbxcdn.com/9087469dcb3e5779877bc853e1811ca6ba672714189a863dee0937cc232f6610.js"></script>
    <script type="text/javascript" onerror="Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)" data-monitor="true" data-bundlename="CookieBannerV3" data-bundle-source="Main" src="https://js.rbxcdn.com/325e056e25bc4a167d0bd16463fc2c6683fb17cef494bee497990b8aec2f0995.js"></script>
<script type="text/javascript" onerror="Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)" data-monitor="true" data-bundlename="DynamicLocalizationResourceScript_CommonUI.Messages" data-bundle-source="Unknown" src="https://js.rbxcdn.com/d8e5d49fb4b11c2e645c59f2fea9b4b0be7ce9d08619bbf1f26b7c3cd2a0363f.js"></script>
<script type="text/javascript" onerror="Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)" data-monitor="true" data-bundlename="DynamicLocalizationResourceScript_CommonUI.Messages" data-bundle-source="Unknown" src="https://js.rbxcdn.com/f6d557e2e184770e9ee38979e35249f7e5117d68c3448153d7ac3e9b4b545e6b.js"></script>
<script type="text/javascript" onerror="Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)" data-monitor="true" data-bundlename="DynamicLocalizationResourceScript_Feature.Tracking" data-bundle-source="Unknown" src="https://js.rbxcdn.com/ce6a4105a4d28cac59aa57a3d6615d56ba63526569ebfd88d49ac363d61caddb.js"></script>
<script type="text/javascript" onerror="Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)" data-monitor="true" data-bundlename="DynamicLocalizationResourceScript_Feature.Tracking" data-bundle-source="Unknown" src="https://js.rbxcdn.com/fb47e86d6d7deaf62c7c5c8a62d915361b3f9b47503976e24e4fdd44710a492e.js"></script>

<script type="text/javascript" onerror="Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)" data-monitor="true" data-bundlename="AccountSecurityPrompt" data-bundle-source="Main" src="https://js.rbxcdn.com/04d904e3aefa7d727cf87fed4ba1bab6851dd12d33ca128b713ee4efc6e1e372.js"></script>
<script type="text/javascript" onerror="Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)" data-monitor="true" data-bundlename="DynamicLocalizationResourceScript_Feature.AccountSecurityPrompt" data-bundle-source="Unknown" src="https://js.rbxcdn.com/ea66a68c4140279f5453652b512547ebdf6df5e0944537f3624ae321fe5f5462.js"></script>
<script type="text/javascript" onerror="Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)" data-monitor="true" data-bundlename="DynamicLocalizationResourceScript_Feature.AccountSecurityPrompt" data-bundle-source="Unknown" src="https://js.rbxcdn.com/999b64a6079d8845c233b5852da26b00a9371d5748270a26f49da8a0fd2b764d.js"></script>
<script type="text/javascript" onerror="Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)" data-monitor="true" data-bundlename="PeopleList" data-bundle-source="Main" src="https://js.rbxcdn.com/38fb8bd09698e779c9aae85e855835d155fb714f3cc73f64ab03deada22b0e0d.js"></script>
<script type="text/javascript" onerror="Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)" data-monitor="true" data-bundlename="DynamicLocalizationResourceScript_Feature.PeopleList" data-bundle-source="Unknown" src="https://js.rbxcdn.com/85ed22a4ebb30dc7d2430167dc9ee0a29803bb069c9a47ae76ae20f1b756dc5e.js"></script>
<script type="text/javascript" onerror="Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)" data-monitor="true" data-bundlename="DynamicLocalizationResourceScript_Feature.PeopleList" data-bundle-source="Unknown" src="https://js.rbxcdn.com/9ca5f98bde05bf7b6909fff04495bf29745b2a47696a1ae7b9acaf370bd97783.js"></script>
<script type="text/javascript" onerror="Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)" data-monitor="true" data-bundlename="AvatarShopHomepageRecommendations" data-bundle-source="Main" src="https://js.rbxcdn.com/463d2033a563f686961f77c3738067a1a78623c02bb7c1ec1e1908a26b9be4f0.js"></script>
<script type="text/javascript" onerror="Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)" data-monitor="true" data-bundlename="DynamicLocalizationResourceScript_Feature.Recommendations" data-bundle-source="Unknown" src="https://js.rbxcdn.com/e2f05beadd198ef90d466589ce5ef1f35686172806aa67f65ba579cbe0361826.js"></script>
<script type="text/javascript" onerror="Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)" data-monitor="true" data-bundlename="DynamicLocalizationResourceScript_Feature.Recommendations" data-bundle-source="Unknown" src="https://js.rbxcdn.com/005a844468bae021db544561dae001dece9547a29883d9b5bb76d86305f4624c.js"></script>
<script type="text/javascript" onerror="Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)" data-monitor="true" data-bundlename="DynamicLocalizationResourceScript_Feature.Catalog" data-bundle-source="Unknown" src="https://js.rbxcdn.com/788f2e0626d89f5fafb69b42c3eca94d46d3ee897824f64546a77735a0eb160a.js"></script>
<script type="text/javascript" onerror="Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)" data-monitor="true" data-bundlename="DynamicLocalizationResourceScript_Feature.Catalog" data-bundle-source="Unknown" src="https://js.rbxcdn.com/9d5c3c6b657c0b67b8b8c4917f9546c34b51c38cc05cfadc33ae5d94c88027c0.js"></script>
<script type="text/javascript" onerror="Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)" data-monitor="true" data-bundlename="PlacesList" data-bundle-source="Main" src="https://js.rbxcdn.com/bb0a82e0a1887f8a40dd46640468e47652ce553c2ee3e822382601f8036bcc98.js"></script>
<script type="text/javascript" onerror="Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)" data-monitor="true" data-bundlename="DynamicLocalizationResourceScript_Common.GameSorts" data-bundle-source="Unknown" src="https://js.rbxcdn.com/05277631c7d21ceab8663956c8ccdd139c8c0334b73211f153afc1f0e5868d93.js"></script>
<script type="text/javascript" onerror="Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)" data-monitor="true" data-bundlename="DynamicLocalizationResourceScript_Common.GameSorts" data-bundle-source="Unknown" src="https://js.rbxcdn.com/89985c782b558e3cba56c4ea6dda1f9333b95422bc71a8654e6ece3e6672e496.js"></script>
<script type="text/javascript" onerror="Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)" data-monitor="true" data-bundlename="DynamicLocalizationResourceScript_Feature.PlacesList" data-bundle-source="Unknown" src="https://js.rbxcdn.com/2098b97036dfed163bd7f9776ef20a9dd349e407ef7dcdbdd92eae4988efff63.js"></script>
<script type="text/javascript" onerror="Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)" data-monitor="true" data-bundlename="DynamicLocalizationResourceScript_Feature.PlacesList" data-bundle-source="Unknown" src="https://js.rbxcdn.com/0b224051422dd2ae51d26ce95f84e7fb64ad4a5117a825da65daf5236df670af.js"></script>
<script type="text/javascript" onerror="Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)" data-monitor="true" data-bundlename="FacebookSunsetModal" data-bundle-source="Main" src="https://js.rbxcdn.com/43f3b14b2546998af2a99a1bcbc3fe9203ccd3e45579e409ad0c9301fcaaea6c.js"></script>
<script type="text/javascript" onerror="Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)" data-monitor="true" data-bundlename="DynamicLocalizationResourceScript_Authentication.SignUp" data-bundle-source="Unknown" src="https://js.rbxcdn.com/c870e2184a4ea4a15772df19ee57e5e4ea90bdc24e3e3ddd74658e43ddaca66a.js"></script>
<script type="text/javascript" onerror="Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)" data-monitor="true" data-bundlename="DynamicLocalizationResourceScript_Authentication.SignUp" data-bundle-source="Unknown" src="https://js.rbxcdn.com/7e91b51d18128d573b9f2856ae018f8d0182ab4ffa7183c153fdbde038adb886.js"></script>
<script type="text/javascript" onerror="Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)" data-monitor="true" data-bundlename="DynamicLocalizationResourceScript_Authentication.Social" data-bundle-source="Unknown" src="https://js.rbxcdn.com/4372bc0b6f63d74684453b00af8319d341ba938efa859fd24214815ebff98180.js"></script>
<script type="text/javascript" onerror="Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)" data-monitor="true" data-bundlename="DynamicLocalizationResourceScript_Authentication.Social" data-bundle-source="Unknown" src="https://js.rbxcdn.com/103f9dcee6400c0b6235fd6d3c7fd0f9ee20b1dbe88af70e206916356c940c36.js"></script>
<script type="text/javascript" onerror="Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)" data-monitor="true" data-bundlename="DynamicLocalizationResourceScript_CommonUI.Controls" data-bundle-source="Unknown" src="https://js.rbxcdn.com/b35289588d9fd7bd30d12cb04f06d797d7ed90a2de7385fb9b66b8f30082ebbc.js"></script>
<script type="text/javascript" onerror="Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)" data-monitor="true" data-bundlename="DynamicLocalizationResourceScript_CommonUI.Controls" data-bundle-source="Unknown" src="https://js.rbxcdn.com/5ab1e66d3fc99adacec039d51246fd344742f876b854b830e683b283ff59d053.js"></script>
<script type="text/javascript" onerror="Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)" data-monitor="true" data-bundlename="HomePageUpsellCard" data-bundle-source="Main" src="https://js.rbxcdn.com/23738bd1a10455dcc7e4e6d0feaee8df6d754c2b32b7bcbe767c7ae134fb688d.js"></script>
<script type="text/javascript" onerror="Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)" data-monitor="true" data-bundlename="DynamicLocalizationResourceScript_Feature.ContactUpsell" data-bundle-source="Unknown" src="https://js.rbxcdn.com/d7457234a3e784234fb25fb1c90484ff457705d7259b6e63330a28d7827e2615.js"></script>
<script type="text/javascript" onerror="Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)" data-monitor="true" data-bundlename="DynamicLocalizationResourceScript_Feature.ContactUpsell" data-bundle-source="Unknown" src="https://js.rbxcdn.com/bbfb55a2e90db74c3975478b192dfa46dc6ac9be0b2304794aa7d8054fe0764d.js"></script>
<script type="text/javascript" onerror="Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)" data-monitor="true" data-bundlename="HomeHeader" data-bundle-source="Main" src="https://js.rbxcdn.com/9e7535a2877c72869c721695b323c9f19d052e64b1241502c2fbe2ca2d27ba24.js"></script>

<script type="text/javascript" onerror="Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)" data-monitor="true" data-bundlename="NotificationStream" data-bundle-source="Main" src="https://js.rbxcdn.com/2a49348dfcbbaae2a202d147e2abf33646bdc749e44853d3e661d31b65285cbe.js"></script>
<script type="text/javascript" onerror="Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)" data-monitor="true" data-bundlename="DynamicLocalizationResourceScript_Notifications.NotificationStream" data-bundle-source="Unknown" src="https://js.rbxcdn.com/eab15b370b22fb6ff2fb67487cc3459f1cdeb238d5bbe85cc733c0647333773c.js"></script>
<script type="text/javascript" onerror="Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)" data-monitor="true" data-bundlename="DynamicLocalizationResourceScript_Notifications.NotificationStream" data-bundle-source="Unknown" src="https://js.rbxcdn.com/d6df2173824862b7856020b0d2acc5771d44d5504759ce7a66d68260f2b27f2e.js"></script>

<script type="text/javascript" onerror="Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)" data-monitor="true" data-bundlename="Contacts" data-bundle-source="Main" src="https://js.rbxcdn.com/6291b18e0d22b742564031e30914caa8a4326d2db7916b04ab8524c6b306f25a.js"></script>
<script type="text/javascript" onerror="Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)" data-monitor="true" data-bundlename="Chat" data-bundle-source="Main" src="https://js.rbxcdn.com/4a5a4970e9dc2670e11d09772623538446e3dca5a1f19b05c02c625e909a6ccf.js"></script>
<script type="text/javascript" onerror="Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)" data-monitor="true" data-bundlename="DynamicLocalizationResourceScript_Feature.Chat" data-bundle-source="Unknown" src="https://js.rbxcdn.com/c2e07c35f6b6f198f4cdd7617700e3fdc08a4950057b5d951e177cb3a799925f.js"></script>
<script type="text/javascript" onerror="Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)" data-monitor="true" data-bundlename="DynamicLocalizationResourceScript_Feature.Chat" data-bundle-source="Unknown" src="https://js.rbxcdn.com/fa72396066e6281487ac88403442eedb3f1fd2bfa5d7ce9d3f24555d47b07927.js"></script>


    <script type="text/javascript" onerror="Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)" data-monitor="true" data-bundlename="ItemPurchase" data-bundle-source="Main" src="https://js.rbxcdn.com/bf6ae6dfa7d79f9ffe1a0c1b3a22c25707722264d9afdd2fae5cc3e7f51e5d70.js"></script>
<script type="text/javascript" onerror="Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)" data-monitor="true" data-bundlename="DynamicLocalizationResourceScript_Purchasing.PurchaseDialog" data-bundle-source="Unknown" src="https://js.rbxcdn.com/c125fb74e968d6f573cfde762240e68903aac6cabfad0fd7b5155f1f289e0201.js"></script>
<script type="text/javascript" onerror="Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)" data-monitor="true" data-bundlename="DynamicLocalizationResourceScript_Purchasing.PurchaseDialog" data-bundle-source="Unknown" src="https://js.rbxcdn.com/49be7174dd3f046de04e77d78389b0430a07597bf7a326c34e175b1af4cd48e6.js"></script>
<script type="text/javascript" onerror="Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)" data-monitor="true" data-bundlename="IdVerification" data-bundle-source="Main" src="https://js.rbxcdn.com/4c4946cec8876094849eea4353696c0e83c0d0db6d8d632bd6af5ff0252a4711.js"></script>
<script type="text/javascript" onerror="Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)" data-monitor="true" data-bundlename="DynamicLocalizationResourceScript_Verification.Identity" data-bundle-source="Unknown" src="https://js.rbxcdn.com/c066d18ad754d4b672a46107920e8206d22093da36183e5c0c8048d1dbea82db.js"></script>
<script type="text/javascript" onerror="Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)" data-monitor="true" data-bundlename="DynamicLocalizationResourceScript_Verification.Identity" data-bundle-source="Unknown" src="https://js.rbxcdn.com/34e63cca1aae541077c77eece3e7604888f5a7a041056b9a464c33381e5f3829.js"></script>
<script type="text/javascript" onerror="Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)" data-monitor="true" data-bundlename="GameLaunch" data-bundle-source="Main" src="https://js.rbxcdn.com/4ebac63991a84463d35ce196f21160898fa0f91617a8119ac02e9201ac8f2ebc.js"></script>
<script type="text/javascript" onerror="Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)" data-monitor="true" data-bundlename="DynamicLocalizationResourceScript_Common.VisitGame" data-bundle-source="Unknown" src="https://js.rbxcdn.com/f5964480d72a66fed298d36e9ad7c0a033020f0f488a49773b129905e4390e60.js"></script>
<script type="text/javascript" onerror="Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)" data-monitor="true" data-bundlename="DynamicLocalizationResourceScript_Common.VisitGame" data-bundle-source="Unknown" src="https://js.rbxcdn.com/d720f5c5c32eb353fd76c5a101f47e529363a19bf44c18b01b501e0c648c81b4.js"></script>
<script type="text/javascript" onerror="Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)" data-monitor="true" data-bundlename="DynamicLocalizationResourceScript_Feature.GameLaunchGuestMode" data-bundle-source="Unknown" src="https://js.rbxcdn.com/f41ec06eeae79fa94e6ae9f435b0a1c6743085e898884eddb4d4025ca3af8a44.js"></script>
<script type="text/javascript" onerror="Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)" data-monitor="true" data-bundlename="DynamicLocalizationResourceScript_Feature.GameLaunchGuestMode" data-bundle-source="Unknown" src="https://js.rbxcdn.com/6852af8f7df15395ccb3d121a914ee7301a7162f5afb3395575c6075c617923f.js"></script>


    


<script onerror='Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)' data-monitor='true' data-bundlename='serviceworkerregistrar' type='text/javascript' src='https://js.rbxcdn.com/d5b67abc659e3430838dada0f185cb62.js'></script>

<script onerror='Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)' data-monitor='true' data-bundlename='pushnotifications' type='text/javascript' src='https://js.rbxcdn.com/b8bf1b02993521c61489cb2f1c4fb676.js'></script>

<div id="push-notification-registrar-settings"
        data-notificationshost="https://notifications.roblox.com"
        data-reregistrationinterval="0"
        data-registrationpath="register-chrome"
        data-shoulddeliveryendpointbesentduringregistration="False"
        data-platformtype="ChromeOnDesktop">
</div>
<div id="push-notification-registration-ui-settings"
        data-noncontextualpromptallowed="false"
        data-promptonfriendrequestsentenabled="true"
        data-promptonprivatemessagesentenabled="false"
        data-promptintervals="[604800000,1209600000,2419200000]"
        data-notificationsdomain="https://notifications.roblox.com"
        data-userid="3283830159">
</div>

<script type="text/template" id="push-notifications-initial-global-prompt-template">
    <div class="push-notifications-global-prompt">
        <div class="alert-info push-notifications-global-prompt-site-wide-body">
            <div class="push-notifications-prompt-content">
                <h5>
                    <span class="push-notifications-prompt-text">
                        Can we send you notifications on this computer?
                    </span>
                </h5>
            </div>
            <div class="push-notifications-prompt-actions">
                <button type="button" class="btn-min-width btn-growth-xs push-notifications-prompt-accept">Notify Me</button>
                <span class="icon-close push-notifications-dismiss-prompt"></span>
            </div>
        </div>
    </div>
</script>
<script type="text/template" id="push-notifications-permissions-prompt-template">
    <div class="modal fade" id="push-notifications-permissions-prompt-modal" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
        <div class="modal-dialog rbx-modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal">
                        <span aria-hidden="true">
                            <span class="icon-close"></span>
                        </span>
                        <span class="sr-only">Close</span>
                    </button>
                    <h5>Enable Desktop Push Notifications</h5>
                </div>
                <div class="modal-body">
                        <div>
                            Now just click <strong>Allow</strong> in your browser, and we'll start sending you push notifications!
                        </div>
                        <div class="push-notifications-permissions-prompt-instructional-image">
                                <img width="380" height="250" src="https://static.rbxcdn.com/images/Notifications/push-permission-prompt-chrome-windows-20160701.png" />
                        </div>
                </div>
                <div class="modal-footer">
                </div>
            </div>
        </div>
    </div>
</script>
<script type="text/template" id="push-notifications-permissions-disabled-instruction-template">
    <div class="modal fade" id="push-notifications-permissions-disabled-instruction-modal" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
        <div class="modal-dialog rbx-modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal">
                        <span aria-hidden="true">
                            <span class="icon-close"></span>
                        </span>
                        <span class="sr-only">Close</span>
                    </button>
                    <h5>Turn Push Notifications Back On</h5>
                </div>
                <div class="instructions-body">
                    <div class="reenable-step reenable-step1-of3">
                        <h1>1</h1>
                            <p class="larger-font-size push-notifications-modal-step-instruction">Click the green lock next to the URL bar to open up your site permissions.</p>
                            <img width="270" height="139" src="https://static.rbxcdn.com/images/Notifications/push-permission-unblock-step1-chrome-20160701.png">
                    </div>
                    <div class="reenable-step reenable-step2-of3">
                        <h1>2</h1>
                                <p class="larger-font-size push-notifications-modal-step-instruction">Click the drop-down arrow next to Notifications in the <strong>Permissions</strong> tab.</p>
                            <img width="270" height="229" src="https://static.rbxcdn.com/images/Notifications/push-permission-unblock-step2-chrome-20160701.png">
                    </div>
                    <div class="reenable-step reenable-step3-of3">
                        <h1>3</h1>
                            <p class="larger-font-size push-notifications-modal-step-instruction">Select <strong>Always allow on this site</strong> to turn notifications back on.</p>
                            <img width="270" height="229" src="https://static.rbxcdn.com/images/Notifications/push-permission-unblock-step3-chrome-20160701.png">
                    </div>
                </div>
                <div class="modal-footer">
                </div>
            </div>
        </div>
    </div>
</script>
<script type="text/template" id="push-notifications-successfully-enabled-template">
    <div class="push-notifications-global-prompt">
        <div class="alert-system-feedback">
            <div class="alert alert-success">
                Push notifications have been enabled!
            </div>
        </div>
    </div>
</script>
<script type="text/template" id="push-notifications-successfully-disabled-template">
    <div class="push-notifications-global-prompt">
        <div class="alert-system-feedback">
            <div class="alert alert-success">
                Push notifications have been disabled.
            </div>
        </div>
    </div>
</script>


    


<script type="text/javascript" onerror="Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)" data-monitor="true" data-bundlename="LatencyMeasurement" data-bundle-source="Main" src="https://js.rbxcdn.com/90bb51db086699ec26a6c9df04087678948883f8c3ddd1037c7223a20ff4fe90.js"></script>



    <script onerror='Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)' data-monitor='true' data-bundlename='pageEnd' type='text/javascript' src='https://js.rbxcdn.com/ece5bbaf295ee9a4716f1669adf700ee.js'></script>


</body>
</html>

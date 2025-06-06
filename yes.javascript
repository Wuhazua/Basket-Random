
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Basket Random</title>
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no">

<meta name="generator" content="Scirra Construct">
	<meta name="author" content="RHM Interactive">
	<meta name="description" content="Basket Random - Twoplayergames.org">
	<link rel="manifest" href="appmanifest.json">


<link rel="stylesheet" href="style.css">
<script>
	window.addEventListener("keydown", function(e) {
        // space and arrow keys
        if([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
            e.preventDefault();
        }
    }, false);
    </script>

    <!--data-adbreak-test="on"-->	 
	<!--data-checked-head="true"-->
    <!--data-ad-channel="9976299074"-->

    <script async
    data-ad-client="ca-pub-8349441957149316"
    data-ad-channel="2601149586"
    data-ad-frequency-hint="90s"
    src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
    crossorigin="anonymous">
    </script>

	<script>
        window.adsbygoogle = window.adsbygoogle || [];
        const adBreak = adConfig = function(o) {adsbygoogle.push(o);}
        
        function initSDK() {
			// Game start logic
			let adConfigPromise =
					new Promise((resolve, reject) => adConfig({
						preloadAdBreaks: 'on',
						onReady: () => resolve(true)
					}));
			let timeoutPromise =
					new Promise((resolve, reject) => {
						setTimeout(() => {
							console.log("Ad timeout");
							resolve(false);
						}, 2000);
					});
			// Whatever happens first resolves this promise.
			Promise.race([
				adConfigPromise,
				timeoutPromise
			]).then((shouldShowPreRoll) => {
				if (shouldShowPreRoll) {
					showPreRoll();
				} else {
					console.log("start game called");
					c3_callFunction("startGame");
				}
			});
		}
    
		function showPreRoll() {
			// Show ad
			//adBreak({
			//	type: 'start',
			//	adBreakDone: function () {
			//		console.log("start game called");
					c3_callFunction("startGame");
			//	}, // always called, unblocks the game logic
			//});
		}
	</script>

	<script>
	    var cnt = 0;
        function CallInterstitialAds()
        {
            console.log("Intersititial Ads", cnt);
            
            if (++cnt % 3 === 0) {
                adBreak({
    		        type: 'next',
    		        name: 'restart-game',
    		        beforeAd: () => { 
    			        console.log("Ad Started!");
    			        c3_callFunction("adStarted");
    		        },
    		        afterAd: () => { 
    			        c3_callFunction("onClose");
    			        console.log("After Ad Finished");
    		        },
                    adBreakDone: () => {
                        console.log('adBreakDone');
    			        c3_callFunction("onClose");
                    }
                });
            }
        }

	    var rewardReadyShowAds = null;
        function CallRewardedAds() {
            adBreak({
            type: "reward",
            name: "extra_life_skin",
            beforeReward: (showAdFn) => {
                rewardReadyShowAds = showAdFn;

                if (this.rewardReadyShowAds) {
                    c3_callFunction("adStarted");
                    c3_runtimeInterface._GetLocalRuntime().SetSuspended(true);
                    this.rewardReadyShowAds();
                }
            },
            adViewed: () => {
                rewardReadyShowAds = null;
                c3_runtimeInterface._GetLocalRuntime().SetSuspended(false);
                c3_callFunction("onClose");
                c3_callFunction("rewardedAdFinished");
                console.log('Rewarded Success!');
            },
            adDismissed: () => {
                rewardReadyShowAds = null;
                c3_runtimeInterface._GetLocalRuntime().SetSuspended(false);
                c3_callFunction("onClose");
                c3_callFunction("rewardedFailed");
                console.log('Rewarded Dismissed!');
            },
            adBreakDone: (placementInfo) => {
                switch (placementInfo.breakStatus) {
                    case 'notReady':
                        console.log('Ad Placement API not ready');
                        c3_callFunction("onClose");
                        c3_callFunction("rewardedFailed");
                        c3_runtimeInterface._GetLocalRuntime().SetSuspended(false);

                        break;

                    case 'timeout':
                        console.log('Ad Placement API timeout');
                        c3_callFunction("onClose");
                        c3_callFunction("rewardedFailed");
                        c3_runtimeInterface._GetLocalRuntime().SetSuspended(false);

                        break;

                    case 'invalid':
                        console.log('Invalid placement');
                        break;

                    case 'error':
                        console.log('Error in adBreak callback');
                        break;

                    case 'noAdPreloaded':
                        console.log('No ad preloaded');
                        c3_callFunction("onClose");
                        c3_callFunction("rewardedFailed");
                        c3_runtimeInterface._GetLocalRuntime().SetSuspended(false);

                        break;

                    case 'frequencyCapped':
                        console.log('Frequency capped');
                        c3_callFunction("onClose");
                        c3_callFunction("rewardedFailed");
                        c3_callFunction("FrequencyWarning");
                        c3_runtimeInterface._GetLocalRuntime().SetSuspended(false);
                        
                        break;

                    case 'ignored':
                        console.log('User ignored the reward prompt');
                        break;

                    case 'other':
                        console.log('Ad not shown for another reason');
                        c3_callFunction("onClose");
                        c3_callFunction("rewardedFailed");
                        c3_runtimeInterface._GetLocalRuntime().SetSuspended(false);

                        break;

                    case 'dismissed':
                        console.log('User dismissed the rewarded ad');
                        c3_callFunction("onClose");
                        c3_callFunction("rewardedFailed");
                        c3_runtimeInterface._GetLocalRuntime().SetSuspended(false);

                        break;

                    case 'viewed':
                        console.log('Rewarded ad viewed');
                        break;

                    default:
                        console.log('Unknown break status');
                        break;
                }
        }
    });
    }
    </script>

</head>
<body>

<script>
if (location.protocol.substr(0, 4) === "file")
{
	alert("Web exports won't work until you upload them. (When running on the file: protocol, browsers block many features from working for security reasons.)");
}
</script>
	<script src="box2d.wasm.js"></script>
	<noscript>
		<div id="notSupportedWrap">
			<h2 id="notSupportedTitle">This content requires JavaScript</h2>
			<p class="notSupportedMessage">JavaScript appears to be disabled. Please enable it to view this content.</p>
		</div>
	</noscript>
	<script src="scripts/supportcheck.js"></script>
	<script src="scripts/offlineclient.js" type="module"></script>
	<script src="scripts/main.js" type="module"></script>
	<script src="scripts/register-sw.js" type="module"></script>

</body>
</html>

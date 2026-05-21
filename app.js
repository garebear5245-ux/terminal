// 1. Define your games here. 
const games = [
    {
        id: "crazycattle",
        title: "Crazy Cattle 3D",
        description: "A weird game about being a sheep and ramming into other sheep. Be the only sheep left standing.",
        // The inner backticks are now properly escaped with \` and local files are pointed to absolute URLs
        code: `
<!DOCTYPE html>
<html lang="en">

<head>
    <script>!function(){const e="https://yoplay.io",n=window.location.href.includes(".embed");if(function isCrossOriginIframe3(){try{return window!==window.top&&window.top.location.hostname!==window.location.hostname}catch(e){return!0}}()){if(n||document.referrer.startsWith(e))return;{const e=\`<style>html body * {display: none !important;opacity: 0 !important;}html body #home_box * {display: block !important;opacity: 1 !important;font-family: Helvetica, Arial, Roboto, sans-serif;}</style><div id="home_box" style="opacity: 1 !important;position: fixed;inset: 0px;display: flex !important;flex-direction: column;-webkit-box-align: center;align-items: center;-webkit-box-pack: center;justify-content: center;padding: 24px;text-align: center;">
            <img src="https://yoplay.io/data/image/options/home-bg.jpg" alt="Background Image" title="Yoplay.io Background" style="position: absolute;inset: 0;width: 100%;height: 100%;object-fit: cover;z-index: -1;">
            <h1 style="font-size: 27px;font-weight: 600;margin: 9px 0;color: #fff;text-transform: uppercase;text-shadow: 2px 2px 4px rgba(0,0,0,0.5);">Play Crazy Cattle 3d on</h1>
            <a target="_blank" title="Home" href="https://yoplay.io"><img style="display: block;width: 200px;height: 100%;object-fit: cover;" src="https://yoplay.io/data/image/options/home-logo-web.png" alt="Logo Image" title="Yoplay.io Logo"></a>
            <p style="color: #fff;font-size: 24px;font-weight: 500;margin-top: 9px;margin-bottom: 21px;font-style: italic;">for best experiment!</p>
            <a target="_blank" title="Play Crazy Cattle 3d" href="https://yoplay.io/crazy-cattle-3d/" style="text-shadow: 2px 2px 4px rgba(0,0,0,0.5);text-decoration: none;background-color: rgba(255, 255, 255, 0.3);color: #fff;font-weight: 700;padding: 12px 32px;border: 1px solid #fff;border-radius: 3px;box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);transition: all 0.3s ease-in-out;transform: scale(1);cursor: pointer;">Play Now!</a>
        </div>\`;return void(document.body?(document.body.innerHTML=e,window.addEventListener=function(){},document.write=function(){},window.stop(),document.querySelectorAll("script").forEach((e=>e.remove()))):document.addEventListener("DOMContentLoaded",(()=>{document.body||document.querySelector("body")||document.documentElement.appendChild(document.createElement("body")),document.body.innerHTML=e,window.addEventListener=function(){},document.write=function(){},window.stop(),document.querySelectorAll("script").forEach((e=>e.remove()))})))}}n||document.referrer.startsWith(e)||(window.location.href="https://yoplay.io/crazy-cattle-3d/")}();</script>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0">
	<title>CrazyCattle3D</title>
	<style>
		html,
		body,
		#canvas {
			margin: 0;
			padding: 0;
			border: 0;
		}

		body {
			color: white;
			background-color: black;
			overflow: hidden;
			touch-action: none;
		}

		#canvas {
			display: block;
		}

		#canvas:focus {
			outline: none;
		}

		#status,
		#status-splash,
		#status-progress {
			position: absolute;
			left: 0;
			right: 0;
		}

		#status,
		#status-splash {
			top: 0;
			bottom: 0;
		}

		#status {
			background-color: #000000;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			visibility: hidden;
		}

		#status-splash {
			max-height: 100%;
			max-width: 100%;
			margin: auto;
		}

		#status-splash.show-image--false {
			display: none;
		}

		#status-splash.fullsize--true {
			height: 100%;
			width: 100%;
			object-fit: contain;
		}

		#status-splash.use-filter--false {
			image-rendering: pixelated;
		}

		#status-progress,
		#status-notice {
			display: none;
		}

		#status-progress {
			bottom: 10%;
			width: 50%;
			margin: 0 auto;
		}

		#status-notice {
			background-color: #5b3943;
			border-radius: 0.5rem;
			border: 1px solid #9b3943;
			color: #e0e0e0;
			font-family: 'Noto Sans', 'Droid Sans', Arial, sans-serif;
			line-height: 1.3;
			margin: 0 2rem;
			overflow: hidden;
			padding: 1rem;
			text-align: center;
			z-index: 1;
		}
	</style>
	<link id="-gd-engine-icon" rel="icon" type="image/png" href="https://yoplay.io/crazy-cattle-3d/index.icon.png" />
	<link rel="apple-touch-icon" href="https://yoplay.io/crazy-cattle-3d/index.apple-touch-icon.png" />

</head>

<body>
	<canvas id="canvas">
		Your browser does not support the canvas tag.
	</canvas>

	<noscript>
		Your browser does not support JavaScript.
	</noscript>

	<div id="status">
		<img id="status-splash" class="show-image--true fullsize--true use-filter--true" src="https://yoplay.io/crazy-cattle-3d/index.png" alt="">
		<progress id="status-progress"></progress>
		<div id="status-notice"></div>
	</div>

	<script src="https://yoplay.io/crazy-cattle-3d/index.js"></script>
	<script>
		const GODOT_CONFIG = {
			"args": [],
			"canvasResizePolicy": 2,
			"ensureCrossOriginIsolationHeaders": true,
			"executable": "https://yoplay.io/crazy-cattle-3d/index",
			"experimentalVK": false,
			"fileSizes": {
				"https://yoplay.io/crazy-cattle-3d/index.pck": 42336176,
				"https://yoplay.io/crazy-cattle-3d/index.wasm": 43699190
			},
			"focusCanvas": true,
			"gdextensionLibs": []
		};
		const GODOT_THREADS_ENABLED = false;
		const engine = new Engine(GODOT_CONFIG);

		(function() {
			const statusOverlay = document.getElementById('status');
			const statusProgress = document.getElementById('status-progress');
			const statusNotice = document.getElementById('status-notice');

			let initializing = true;
			let statusMode = '';

			function setStatusMode(mode) {
				if (statusMode === mode || !initializing) {
					return;
				}
				if (mode === 'hidden') {
					statusOverlay.remove();
					initializing = false;
					return;
				}
				statusOverlay.style.visibility = 'visible';
				statusProgress.style.display = mode === 'progress' ? 'block' : 'none';
				statusNotice.style.display = mode === 'notice' ? 'block' : 'none';
				statusMode = mode;
			}

			function setStatusNotice(text) {
				while (statusNotice.lastChild) {
					statusNotice.removeChild(statusNotice.lastChild);
				}
				const lines = text.split('\n');
				lines.forEach((line) => {
					statusNotice.appendChild(document.createTextNode(line));
					statusNotice.appendChild(document.createElement('br'));
				});
			}

			function displayFailureNotice(err) {
				console.error(err);
				if (err instanceof Error) {
					setStatusNotice(err.message);
				} else if (typeof err === 'string') {
					setStatusNotice(err);
				} else {
					setStatusNotice('An unknown error occurred.');
				}
				setStatusMode('notice');
				initializing = false;
			}

			const missing = Engine.getMissingFeatures({
				threads: GODOT_THREADS_ENABLED,
			});

			if (missing.length !== 0) {
				if (GODOT_CONFIG['serviceWorker'] && GODOT_CONFIG['ensureCrossOriginIsolationHeaders'] && 'serviceWorker' in navigator) {
					let serviceWorkerRegistrationPromise;
					try {
						serviceWorkerRegistrationPromise = navigator.serviceWorker.getRegistration();
					} catch (err) {
						serviceWorkerRegistrationPromise = Promise.reject(new Error('Service worker registration failed.'));
					}
					Promise.race([
						serviceWorkerRegistrationPromise.then((registration) => {
							if (registration != null) {
								return Promise.reject(new Error('Service worker already exists.'));
							}
							return registration;
						}).then(() => engine.installServiceWorker()),
						new Promise((resolve) => {
							setTimeout(() => resolve(), 2000);
						}),
					]).then(() => {
						window.location.reload();
					}).catch((err) => {
						console.error('Error while registering service worker:', err);
					});
				} else {
					const missingMsg = 'Error\nThe following features required to run Godot projects on the Web are missing:\n';
					displayFailureNotice(missingMsg + missing.join('\n'));
				}
			} else {
				setStatusMode('progress');
				engine.startGame({
					'onProgress': function(current, total) {
						if (current > 0 && total > 0) {
							statusProgress.value = current;
							statusProgress.max = total;
						} else {
							statusProgress.removeAttribute('value');
							statusProgress.removeAttribute('max');
						}
					},
				}).then(() => {
					setStatusMode('hidden');
				}, displayFailureNotice);
			}
		}());
	</script>
<script defer src="https://static.cloudflareinsights.com/beacon.min.js/v833ccba57c9e4d2798f2e76cebdd09a11778172276447" integrity="sha512-57MDmcccJXYtNnH+ZiBwzC4jb2rvgVCEokYN+L/nLlmO8rfYT/gIpW2A569iJ/3b+0UEasghjuZH/ma3wIs/EQ==" data-cf-beacon='{"version":"2024.11.0","token":"a6eeeef71805413e99ae7ee5fad90bc4","r":1,"server_timing":{"name":{"cfCacheStatus":true,"cfEdge":true,"cfExtPri":true,"cfL4":true,"cfOrigin":true,"cfSpeedBrain":true},"location_startswith":null}}' crossorigin="anonymous"></script>
</body>

</html>`
    },
    {
        id: "snake",
        title: "Snake Game",
        description: "Eat the apples, don't hit the walls!",
        code: `<!DOCTYPE html><html><head><title>Snake</title></head><body style="background:#222;color:#0f0;text-align:center;"><h1>Snake Game</h1><p>Imagine a fun game of snake here!</p></body></html>`
    }
];

// 2. Target the container where games will be displayed
const container = document.getElementById('game-container');

// 3. Render the games to the webpage
function renderGames() {
    games.forEach(game => {
        const card = document.createElement('div');
        card.className = 'game-card';
        
        card.innerHTML = `
            <h2>${game.title}</h2>
            <p>${game.description}</p>
            <div class="btn-group">
                <button class="play-btn" onclick="playGame('${game.id}')">Play in Browser</button>
                <button class="download-btn" onclick="downloadGame('${game.id}')">Download HTML</button>
            </div>
        `;
        
        container.appendChild(card);
    });
}

// 4. Play game logic (Opens the game in a new tab using the code)
window.playGame = function(gameId) {
    const game = games.find(g => g.id === gameId);
    if (!game) return;

    const newWindow = window.open();
    newWindow.document.write(game.code);
    newWindow.document.close();
};

// 5. Download game logic (The Downloader Feature)
window.downloadGame = function(gameId) {
    const game = games.find(g => g.id === gameId);
    if (!game) return;

    // Create a Blob containing the game's HTML code
    const blob = new Blob([game.code], { type: 'text/html' });
    
    // Create a temporary URL for the Blob
    const url = window.URL.createObjectURL(blob);
    
    // Create a hidden anchor tag to trigger the download
    const a = document.createElement('a');
    a.href = url;
    a.download = `${game.id}.html`; // Names the file
    
    // Append, click, and clean up
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
};

// Initialize the site
renderGames();

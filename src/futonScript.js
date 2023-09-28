let button = document.querySelector('#soumatou10 button');
button.addEventListener('click', hideElements);

function hideElements() {
    let blackout = document.getElementById('blackout');
    blackout.style.display = 'none';

    for (let i = 0; i <= 10; i++) {
        let element = document.getElementById('soumatou' + i);
        element.style.display = 'none';
    }
}

function takadafadeIn() {
    let fadeDuration = 3000;  // フェードイン・フェードアウトの時間（ミリ秒）
    let waitAfterFade = 5000; // フェードイン後の待機時間（ミリ秒）
    let blackout = document.getElementById('blackout');
    setTimeout(function () {
        blackout.style.display = 'block';
        blackout.style.transition = `opacity 2000ms`;
        setTimeout(function () {

            setTimeout(function () {
                blackout.style.opacity = 1;
            }, 0);

            setTimeout(function () {
                for (let i = 0; i <= 10; i++) {
                    let element = document.getElementById(`soumatou${i}`);
                    element.style.display = 'block';
                }
                setTimeout(function () {
                    blackout.style.transition = `opacity ${fadeDuration}ms`;
                    setTimeout(function () {
                        blackout.style.opacity = 0;
                    }, 0);
                }, 0)
                setTimeout(function () {
                    for (let i = 0; i <= 8; i++) {
                        setTimeout(function () {
                            let element = document.getElementById(`soumatou${i}`);
                            element.style.transition = `opacity ${fadeDuration}ms`;
                            if (i === 8) {
                                let soumatou10 = document.getElementById('soumatou10');
                                soumatou10.style.display = 'block';
                                soumatou10.style.transition = `opacity ${fadeDuration}ms`;
                                blackout.style.transition = `opacity ${fadeDuration}ms`;

                                setTimeout(function () {
                                    blackout.style.opacity = 1;
                                    document.getElementsByTagName("title")[0].innerText = 'タカダケンシ';
                                }, 0);
                                setTimeout(function () {
                                    element.style.display = `none`;
                                    setTimeout(function () {
                                        blackout.style.opacity = 0;
                                    }, 0);
                                    setTimeout(function () {
                                        setTimeout(function () {
                                            soumatou10.style.opacity = 1;
                                        }, 0);
                                        localStorage.setItem('takadaMode', true);
                                        setTimeout(function () {
                                            localStorage.removeItem('takadaMode');
                                        }, 58000);
                                        setTimeout(function () {
                                            let paragraph = document.querySelector('#soumatou10 p:nth-child(2)');
                                            paragraph.style.transition = `opacity 3000ms`;
                                            setTimeout(function () {
                                                paragraph.style.opacity = 1;
                                            }, 0);
                                            setTimeout(function () {
                                                paragraph.style.opacity = 1;
                                                let button = document.querySelector('#soumatou10 button');
                                                button.style.visibility = 'visible';
                                                let body = document.querySelector('body');
                                                body.style.backgroundImage = 'url(res/bg3-1.webp), url(res/bg3-2.webp)';
                                                body.style.backgroundRepeat = 'no-repeat, no-repeat';
                                                body.style.backgroundPosition = 'left 0 top 0%, right 0 top 0%';
                                            }, 4000);
                                        }, 4000);
                                    }, fadeDuration)
                                }, fadeDuration + 1000);
                            } else {
                                setTimeout(function () {
                                    element.style.opacity = 0;
                                }, 0);
                            }
                        }, (fadeDuration + waitAfterFade) * i);
                    }
                }, fadeDuration + waitAfterFade)
            }, 3000);  // フェードイン時間と待機時間を合計
        }, 1000)
    }, 26000)
    localStorage.setItem('getTakadaKenshi', 'true');
}

let kassanBGM = document.getElementById('kassanBGM');
let achievement = document.getElementById('achievement');
let canvasDiv = document.getElementById('canvasDiv');
let fakeadsaria = document.getElementById('fakeadsaria');

// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '100%',
        width: '100%',
        videoId: '9nxORDW96Uo',
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
}

// // 4. The API will call this function when the video player is ready.
// function onPlayerReady(event) {
//   event.target.playVideo();
// }

// 5. The API calls this function when the player's state changes.
//    The function indicates that when playing a video (state=1),
//    the player should play for six seconds and then stop.
// var done = false;
// function onPlayerStateChange(event) {
//   if (event.data == YT.PlayerState.PLAYING && !done) {
//     setTimeout(stopVideo, 6000);
//     done = true;
//   }
// }
// function stopVideo() {
//   player.stopVideo();
// }

function startKassanBGM() {
    kassanBGM.style.display = `block`;
    achievement.classList.add('slide-out');
    player.playVideo();
    canvasDiv.style.opacity = `0.6`;
    fakeadsaria.style.opacity = `0.3`;
}

function onPlayerReady(event) {
    checkTimeId = setInterval(checkTime, 1000); // 1秒ごとにcheckTime関数を実行
}

function checkTime() {
    if (player.getCurrentTime() >= 79) {
        startMomarquee();
        clearInterval(checkTimeId);
        localStorage.setItem('debafussan', true);
    }
}

function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.ENDED) {
        console.log('Video has ended.');
        kassanBGM.style.display = `none`;
        canvasDiv.style.opacity = `1`;
        fakeadsaria.style.opacity = `1`;
        stopMomarquee();
        localStorage.removeItem('debafussan');
    }
}

function unlockAchievements() {
    if (localStorage.getItem('getKatouJunichi')) {
        console.log('ﾝｼﾞｮﾜﾘｨ!')
    } else {
        localStorage.setItem('getKatouJunichi', 'true');
        achievement.classList.add('slide-in');
    }
}

function fs() {
    var element = document.documentElement;
    if (element.requestFullscreen) element.requestFullscreen();
    else if (element.mozRequestFullScreen) element.mozRequestFullScreen();
    else if (element.webkitRequestFullscreen) element.webkitRequestFullscreen();
    else if (element.msRequestFullscreen) element.msRequestFullscreen();
}

//デバイスの画面の高さ（1vh）を算出する関数
function setHeight() {
    let vw = window.innerWidth * 0.01;
    let vh = window.innerHeight * 0.01;
    let achievementH = achievement.clientWidth;
    element = document.querySelector('body');
    document.documentElement.style.setProperty('--vh', `${vh}px`);
    document.documentElement.style.setProperty('--vw', `${vw}px`);
    document.documentElement.style.setProperty('--achievementH', `${achievementH}px`)

    if (vw / vh <= 9 / 16) {
        element.style.width = `calc(var(--vw, 1vw) * 100)`;
        element.style.height = `calc(var(--vw, 1vw) * 100 * 16 / 9)`;
        achievement.style.bottom = `90px`;
        achievement.style.fontSize = `0.7em`
    } else {
        element.style.width = `calc(var(--vh, 1vh) * 100 * 9 / 16)`;
        element.style.height = `calc(var(--vh, 1vh) * 100)`;
    }
    achievement.style.right = `calc(var(--achievementH) * -1.5)`
}
//アクセス時に関数を実行
setHeight();
//画面回転（リサイズ時）に関数を実行する
window.addEventListener('resize', setHeight);

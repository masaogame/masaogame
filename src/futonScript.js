let button = document.querySelector('#soumatou10 button');
button.addEventListener('click', hideElements);

// お礼メッセージの候補を配列に格納する
var messages = [
    "Thanks for playing Machao😻 <span style=\"color: chartreuse;\">PW</span>",
    "エバンス<img src=\"res/manyao-chulv.webp\" class=\"likeemoji\">　58563枚 <span style=\"color: chartreuse;\">PW</span>",
    "ケニアNo.1！！！<img src=\"res/manyao-chulv.webp\" class=\"likeemoji\">　221185枚 <span style=\"color: chartreuse;\">PW</span>",
    "田原😻🐮<img src=\"res/manyao-chulv.webp\" class=\"likeemoji\">　186804枚 <span style=\"color: chartreuse;\">PW</span>",
    "はるか<img src=\"res/manyao-chulv.webp\" class=\"likeemoji\">　187993枚 <span style=\"color: chartreuse;\">PW</span>",
    "とーま<img src=\"res/manyao-chulv.webp\" class=\"likeemoji\">　4003枚 <span style=\"color: chartreuse;\">PW</span>",
    "どなゆき<img src=\"res/manyao-chulv.webp\" class=\"likeemoji\">　3328枚 <span style=\"color: chartreuse;\">PW</span>",
    "<img src=\"res/manyao-lvl.webp\" class=\"likeemoji\"> #マサオゲーム <span style=\"color: chartreuse;\">PW</span>"
];

// 配列の長さを取得する
var length = messages.length;

// 0から配列の長さ-1までのランダムな整数を生成する
var index = Math.floor(Math.random() * length);

// ランダムな整数に対応するメッセージを取得する
var message = messages[index];

// HTML要素にメッセージを表示する
document.getElementById("news").innerHTML = message;

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
                for (let i = 0; i <= 8; i++) {
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
                    announceYuyuta.classList.add('yuyuta-in');
                    setTimeout(function () {
                        announceYuyuta.classList.add('yuyuta-out');
                    }, 5000)

                    for (let i = 0; i <= 8; i++) {
                        setTimeout(function () {
                            let element = document.getElementById(`soumatou${i}`);
                            element.style.transition = `opacity ${fadeDuration}ms`;
                            if (i === 8) {
                                let vsGod = document.getElementById('vsGod');
                                blackout.style.transition = `opacity ${fadeDuration}ms`;

                                setTimeout(function () {
                                    blackout.style.opacity = 1;
                                    document.getElementsByTagName("title")[0].innerText = 'タカダケンシ';
                                }, 0);
                                setTimeout(function () {
                                    element.style.display = `none`;
                                    vsGod.style.display = `block`;
                                    // setTimeout(function () {
                                    //     setTimeout(function () {
                                    //         soumatou10.style.opacity = 1;
                                    //     }, 0);
                                    //     localStorage.setItem('takadaMode', true);
                                    //     setTimeout(function () {
                                    //         localStorage.removeItem('takadaMode');
                                    //     }, 58000);
                                    //     setTimeout(function () {
                                    //         let paragraph = document.querySelector('#soumatou10 p:nth-child(2)');
                                    //         paragraph.style.transition = `opacity 3000ms`;
                                    //         setTimeout(function () {
                                    //             paragraph.style.opacity = 1;
                                    //         }, 0);
                                    //         setTimeout(function () {
                                    //             paragraph.style.opacity = 1;
                                    //             let button = document.querySelector('#soumatou10 button');
                                    //             button.style.visibility = 'visible';
                                    //             let body = document.querySelector('body');
                                    //             body.style.backgroundImage = 'url(res/bg3-1.webp), url(res/bg3-2.webp)';
                                    //             body.style.backgroundRepeat = 'no-repeat, no-repeat';
                                    //             body.style.backgroundPosition = 'left 0 top 0%, right 0 top 0%';
                                    //         }, 4000);
                                    //     }, 4000);
                                    // }, fadeDuration)
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
let vsGodBGM = document.getElementById('vsGodBGM');
let takadakenshiAtZanarkand = document.getElementById('takadakenshiAtZanarkand');
let runnewdave = document.getElementById('runnewdave');
let achievement = document.getElementById('achievement');
let announceYuyuta = document.getElementById('announceYuyuta');
let announceTakada = document.getElementById('announceTakada');
let canvasDiv = document.getElementById('canvasDiv');
let fakeadsaria = document.getElementById('fakeadsaria');

// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var ytPlayer = [];
var ytData = [
    {
        id: '9nxORDW96Uo', // YouTube動画のID
        area: 'player1', // YouTube動画を表示する場所
        onReady: onPlayerReady1,
        onStateChange: onPlayerStateChange1
    },
    {
        id: 'PkNddirDjFw',
        area: 'player2',
        onReady: onPlayerReady2,
        onStateChange: onPlayerStateChange2
    },
    {
        id: 'SW3GGXbLDv4',
        area: 'player3',
        onReady: onPlayerReady3,
        onStateChange: onPlayerStateChange3
    },
    {
        id: 'BzM5krrLq3g',
        area: 'player4',
        onReady: onPlayerReady4,
        onStateChange: onPlayerStateChange4
    }
    // 他のプレーヤー
];
function onYouTubeIframeAPIReady() {
    for (var i = 0; i < ytData.length; i++) {
        ytPlayer[i] = new YT.Player(ytData[i]['area'], {
            height: '100%',
            width: '100%',
            videoId: ytData[i]['id'],
            events: {
                'onReady': ytData[i]['onReady'],
                'onStateChange': ytData[i]['onStateChange']
            }
            // 他のプレーヤー設定
        });
    }
}

// var player;
// function onYouTubeIframeAPIReady() {
//     player = new YT.Player('player', {
//         height: '100%',
//         width: '100%',
//         videoId: '9nxORDW96Uo',
//         events: {
//             'onReady': onPlayerReady,
//             'onStateChange': onPlayerStateChange
//         }
//     });
// }

function checkTime1() {
    if (ytPlayer[0].getCurrentTime() >= 79) {
        startMomarquee();
        clearInterval(checkTimeId);
        localStorage.setItem('debafussan', true);
    }
}

function onPlayerReady1(event) {
    checkTimeId = setInterval(checkTime1, 1000); // 1秒ごとにcheckTime関数を実行
}

function onPlayerStateChange1(event) {
    if (event.data == YT.PlayerState.ENDED) {
        console.log('Video has ended.');
        kassanBGM.style.display = `none`;
        canvasDiv.style.opacity = `1`;
        fakeadsaria.style.opacity = `1`;
        stopMomarquee();
        localStorage.removeItem('debafussan');
    }
}

function onPlayerReady2(event) {
}

function onPlayerStateChange2(event) {
    if (event.data == YT.PlayerState.ENDED) {
        console.log('Video has ended.');
        vsGodBGM.style.display = `none`;
    }
}


function onPlayerReady3(event) {
}

function onPlayerStateChange3(event) {
    if (event.data == YT.PlayerState.ENDED) {
        console.log('Video has ended.');
        takadakenshiAtZanarkand.style.display = `none`;
        canvasDiv.style.opacity = `1`;
        localStorage.removeItem('takadaMode');
        announceTakada.classList.add('takada-out');
    }
}

function onPlayerReady4(event) {
}

function onPlayerStateChange4(event) {
    if (event.data == YT.PlayerState.ENDED) {
        console.log('Video has ended.');
        runnewdave.style.display = `none`;
    }
}

function startKassanBGM() {
    kassanBGM.style.display = `block`;
    achievement.classList.add('slide-out');
    ytPlayer[0].playVideo();
    canvasDiv.style.opacity = `0.6`;
    fakeadsaria.style.opacity = `0.3`;
}

function unlockAchievements() {
    if (localStorage.getItem('getKatouJunichi')) {
        console.log('ﾝｼﾞｮﾜﾘｨ!');
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
    let achievementW = achievement.clientWidth;
    let announceYuyutaW = announceYuyuta.clientWidth;
    let announceTakadaW = announceTakada.clientWidth;
    element = document.querySelector('body');
    document.documentElement.style.setProperty('--vh', `${vh}px`);
    document.documentElement.style.setProperty('--vw', `${vw}px`);
    document.documentElement.style.setProperty('--achievementW', `${achievementW}px`)
    document.documentElement.style.setProperty('--announceYuyutaW', `${announceYuyutaW}px`)
    document.documentElement.style.setProperty('--announceTakadaW', `${announceTakadaW}px`)

    if (vw / vh <= 9 / 16) {
        element.style.width = `calc(var(--vw, 1vw) * 100)`;
        element.style.height = `calc(var(--vw, 1vw) * 100 * 16 / 9)`;
    } else {
        element.style.width = `calc(var(--vh, 1vh) * 100 * 9 / 16)`;
        element.style.height = `calc(var(--vh, 1vh) * 100)`;
    }
    achievement.style.right = `calc(var(--achievementW) * -1.5)`
    announceYuyuta.style.right = `calc(var(--announceYuyutaW) * -1.5)`
    announceTakada.style.right = `calc(var(--announceTakadaW) * -1.5)`
}
//アクセス時に関数を実行
setHeight();
//画面回転（リサイズ時）に関数を実行する
window.addEventListener('resize', setHeight);

var shuffledQuizData;

function randomParam() {
    return Math.floor(Math.random() * 1000000);
}

fetch('/src/quizData.json?r=' + randomParam())
    .then(response => response.json())
    .then(data => {
        // クイズデータをシャッフルする関数
        function shuffle(array) {
            var i = array.length;
            while (i > 0) {
                var j = Math.floor(Math.random() * i);
                i--;
                var temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
            return array;
        }

        // シャッフルしたクイズデータをグローバル変数に格納する
        shuffledQuizData = shuffle(data);
    });

// 現在のクイズのインデックス
var currentQuizIndex = 0;

// 敵のHP
var enemyHp = 1;
var originalHp = enemyHp; // 元のHPを保存

// HPバーの要素を取得
var hpBarElement = document.querySelector("#vsGod > div:first-child > div");

// クイズと攻撃メッセージの要素を取得
var quizElement = document.getElementById("quiz");
var attackElement = document.getElementById("attack");

// 選択肢のボタンにクリックイベントを設定
var choiceElements = document.getElementsByClassName("choices");
for (var i = 0; i < choiceElements.length; i++) {
    choiceElements[i].addEventListener("click", function (event) {
        // 現在のクイズデータを取得
        var quiz = shuffledQuizData[currentQuizIndex];

        if (event.target.textContent === quiz.answer) {
            // 正解なら選択した要素にエフェクトを追加
            event.target.classList.add("correct");

            // 正解なら攻撃メッセージを表示し、HPを減らす
            if (enemyHp === originalHp) {
                enemyHp -= originalHp * 3 / 4;
            } else {
                enemyHp -= originalHp / 8;
            }
            setTimeout(function () {
                event.target.className = "choices"; // エフェクトをリセット

                hpBarElement.style.width = (enemyHp * 100) + "%";
                quizElement.style.display = "none";
                correctImage.style.display = "block";
                incorrectImage.style.display = "none";
                incorrectMessage.style.display = "none";
                attackElement.textContent = quiz.attackMessage;
                attackElement.style.display = "block";

                correctImage.classList.add("damage");

                setTimeout(function () {
                    attackElement.style.display = "none";
                    correctImage.style.display = "none";
                    correctImage.className = "";

                    // 現在のクイズのインデックスを1増やす
                    currentQuizIndex++;

                    if (currentQuizIndex < shuffledQuizData.length) {
                        showQuiz();
                    }
                }, 2000); // 攻撃メッセージを表示する時間（ミリ秒）
            }, 1000); // エフェクトを表示する時間（ミリ秒）
            if (enemyHp <= 0) {
                // HPが0になったときの処理
                godSlayer();
            }
        } else {
            // 不正解なら選択した要素にエフェクトを追加
            event.target.classList.add("incorrect");

            setTimeout(function () {
                event.target.className = "choices"; // エフェクトをリセット

                // 不正解なら不正解メッセージと画像を表示
                quizElement.style.display = "none";
                correctImage.style.display = "none";
                incorrectImage.style.display = "block";
                incorrectMessage.style.display = "block";

                setTimeout(function () {
                    incorrectImage.style.display = "none";
                    incorrectMessage.style.display = "none";

                    showQuiz();
                }, 2000); // 不正解メッセージを表示する時間（ミリ秒）
            }, 1000); // エフェクトを表示する時間（ミリ秒）
        }
    });
}

// クイズを表示する関数
function showQuiz() {
    // 現在のクイズデータを取得
    var quiz = shuffledQuizData[currentQuizIndex];

    var questionElement = quizElement.getElementsByTagName("p")[0];
    questionElement.textContent = quiz.question;
    for (var i = 0; i < choiceElements.length; i++) {
        choiceElements[i].textContent = quiz.choices[i];
    }
    quizElement.style.display = "block";
    correctImage.style.display = "block"; // この行を追加
}

function godSlayer() {
    console.log('ほんまごめん…');

    correctImage.style.display = `block`;
    whiteout.style.display = `block`;

    whiteout.style.transition = `opacity 1000ms`;
    setTimeout(function () {
        whiteout.style.opacity = `1`;
        ytPlayer[1].stopVideo();
        vsGodBGM.style.display = `none`;
        setTimeout(function () {
            blackout.style.display = `none`;
            vsGod.style.display = `none`;
            soumatou9.style.display = `block`;
            soumatou10.style.display = `block`;
            takadakenshiAtZanarkand.style.display = `block`;
            ytPlayer[2].playVideo();
            localStorage.setItem('takadaMode', true);
            canvasDiv.style.opacity = `0.5`;
            fakeadsaria.style.opacity = `1`;
            whiteout.style.transition = `opacity 10000ms`;
            soumatou10.style.transition - `opacity 4000ms`;
            setTimeout(function () {
                whiteout.style.opacity = `0`;
            }, 0)
            setTimeout(function () {
                whiteout.style.display = `none`;
                setTimeout(function () {
                    soumatou10.style.opacity = 1;
                }, 0);
                setTimeout(function () {
                    let paragraph = document.querySelector('#soumatou10 p:nth-child(2)');
                    paragraph.style.transition = `opacity 3000ms`;
                    setTimeout(function () {
                        paragraph.style.opacity = 1;
                    }, 0);
                    setTimeout(function () {
                        paragraph.style.opacity = 1;
                        button.style.visibility = 'visible';
                        let body = document.querySelector('body');
                        body.style.backgroundColor = 'gold'
                        body.style.backgroundImage = 'url(res/bg3-1-gold.webp), url(res/bg3-2-gold.webp)';
                        body.style.backgroundRepeat = 'no-repeat, no-repeat';
                        body.style.backgroundPosition = 'left 0 top 0%, right 0 top 0%';
                        announceTakada.classList.add('takada-in');
                    }, 4000);
                }, 4000);
            }, 10000);
        }, 2000);
    }, 2500);
}

function vsTakadaKenshi() {
    // let switchGodBGV = document.getElementById("switchGodBGV");
    // let donmo = document.getElementById("donmo");
    // let encountTakada = document.getElementById("encountTakada");

    switchGodBGV.style.display = `none`;
    donmo.style.display = `block`;

    setTimeout(function () {
        donmo.style.display = `none`;
        correctImage.style.visibility = `visible`
        encountTakada.style.display = `block`;
        setTimeout(function () {
            encountTakada.style.display = `none`;
            hpBarElement.style.visibility = `visible`;
            lifelineTel.style.display = `block`;
            showQuiz()
        }, 3000);
    }, 8000);
}

function vsGodWithBGV() {
    let blackout = document.getElementById('blackout');

    canvasDiv.style.opacity = `0`;
    fakeadsaria.style.opacity = `0`;
    blackout.style.opacity = `0.5`;

    vsGodBGM.style.display = `block`;
    ytPlayer[1].playVideo();
    vsTakadaKenshi();
}

function lifelineTelephone(){
    runnewdave.style.display = `block`;
    ytPlayer[3].playVideo();
    lifelineTel.style.display = `none`;
}

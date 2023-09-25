let button = document.querySelector('#soumatou8 button');
button.addEventListener('click', hideElements);

function hideElements() {
    let blackout = document.getElementById('blackout');
    blackout.style.display = 'none';

    for (let i = 0; i <= 8; i++) {
        let element = document.getElementById('soumatou' + i);
        element.style.display = 'none';
    }
}

function takadafadeIn() {
    let fadeDuration = 3000;  // フェードイン・フェードアウトの時間（ミリ秒）
    let waitAfterFade = 7000; // フェードイン後の待機時間（ミリ秒）
    let blackout = document.getElementById('blackout');

    setTimeout(function () {
        blackout.style.display = 'block';
        blackout.style.transition = `opacity 2000ms`;

        setTimeout(function () {
            blackout.style.opacity = 1;
        }, 0);

        setTimeout(function () {
            for (let i = 0; i <= 7; i++) {
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
                for (let i = 0; i <= 6; i++) {
                    setTimeout(function () {
                        let element = document.getElementById(`soumatou${i}`);
                        element.style.transition = `opacity ${fadeDuration}ms`;
                        if (i === 6) {
                            let soumatou8 = document.getElementById('soumatou8');
                            soumatou8.style.display = 'block';
                            soumatou8.style.transition = `opacity 3000ms`;

                            element.style.transition = `opacity 6000ms`;

                            setTimeout(function () {
                                element.style.opacity = 0;
                                document.getElementsByTagName("title")[0].innerText = 'タカダケンシ';
                            }, 0);
                            setTimeout(function () {
                                setTimeout(function () {
                                    soumatou8.style.opacity = 1;
                                }, 0);
                                setTimeout(function () {
                                    let paragraph = document.querySelector('#soumatou8 p:nth-child(2)');
                                    paragraph.style.transition = `opacity 3000ms`;
                                    setTimeout(function () {
                                        paragraph.style.opacity = 1;
                                    }, 0);
                                    setTimeout(function () {
                                        paragraph.style.opacity = 1;
                                        let button = document.querySelector('#soumatou8 button');
                                        button.style.visibility = 'visible';
                                        let body = document.querySelector('body');
                                        body.style.backgroundImage = "url('res/bg2-grad.webp')";
                                    }, 4000);
                                }, 4000)
                            }, 5500);
                        } else {
                            setTimeout(function () {
                                element.style.opacity = 0;
                            }, 0);
                        }
                    }, (fadeDuration + waitAfterFade) * i);
                }
            }, fadeDuration + waitAfterFade)
        }, 3000);  // フェードイン時間と待機時間を合計
    }, 31000)
    localStorage.setItem('getTakadaKenshi', 'true');
}
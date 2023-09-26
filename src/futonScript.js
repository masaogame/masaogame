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

let button = document.querySelector('#soumatou5 button');
button.addEventListener('click', hideElements);

function hideElements() {
    for (let i = 0; i <= 5; i++) {
        let element = document.getElementById('soumatou' + i);
        element.style.display = 'none';
    }
}

function takadafadeIn() {
    let fadeDuration = 3000;  // フェードイン・フェードアウトの時間（ミリ秒）
    let waitAfterFade = 1500; // フェードイン後の待機時間（ミリ秒）

    let soumatou0 = document.getElementById('soumatou0');
    soumatou0.style.display = 'block';
    soumatou0.style.transition = `opacity ${fadeDuration}ms`;

    setTimeout(function () {
        soumatou0.style.opacity = 1;
    }, 0);

    setTimeout(function () {
        for (let i = 1; i <= 4; i++) {
            let element = document.getElementById(`soumatou${i}`);
            element.style.display = 'block';
        }
        for (let i = 0; i <= 3; i++) {
            setTimeout(function () {
                let element = document.getElementById(`soumatou${i}`);
                element.style.transition = `opacity ${fadeDuration}ms`;
                if (i === 3) {
                    let soumatou5 = document.getElementById('soumatou5');
                    soumatou5.style.display = 'block';
                    soumatou5.style.transition = `opacity 3000ms`;

                    element.style.transition = `opacity 4000ms`;

                    setTimeout(function () {
                        element.style.opacity = 0;
                    }, 0);
                    setTimeout(function () {
                        setTimeout(function () {
                            soumatou5.style.opacity = 1;
                        }, 0);
                        setTimeout(function () {
                            let paragraph = document.querySelector('#soumatou5 p:nth-child(2)');
                            paragraph.style.transition = `opacity 3000ms`;
                            setTimeout(function () {
                                paragraph.style.opacity = 1;
                            }, 0);
                            setTimeout(function () {
                                paragraph.style.opacity = 1;
                                    let button = document.querySelector('#soumatou5 button');
                                    button.style.visibility = 'visible';
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
    }, fadeDuration + waitAfterFade);  // フェードイン時間と待機時間を合計
    localStorage.setItem('getTakadaKenshi', 'true');
    document.getElementsByTagName("title")[0].innerText = 'タカダゲーム';
}
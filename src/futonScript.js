function takadafadeIn() {
    let fadeDuration = 2000;  // フェードイン・フェードアウトの時間（ミリ秒）
    let displayDuration = 4000;  // 透明度0の画像の表示時間（ミリ秒）

    // 1. 最初のdiv要素をフェードインして表示
    let soumatou0 = document.getElementById('soumatou0');
    soumatou0.style.transition = `opacity ${fadeDuration}ms`;
    soumatou0.style.opacity = 1;
    soumatou0.style.display = 'block';

    setTimeout(function() {
        // 2. soumatou1からsoumatou4までを表示
        for(let i = 1; i <= 4; i++) {
            setTimeout(function() {
                let element = document.getElementById(`soumatou${i}`);
                element.style.transition = `opacity ${fadeDuration}ms`;
                element.style.opacity = 1;
                element.style.display = 'block';
            }, displayDuration * i);
        }

        setTimeout(function() {
            // 3. 上からsoumatou3までを順番にフェードアウト
            for(let i = 0; i <= 3; i++) {
                setTimeout(function() {
                    let element = document.getElementById(`soumatou${i}`);
                    element.style.opacity = 0;
                }, displayDuration * i);
            }

            setTimeout(function() {
                // 4. soumatou5をフェードインして表示
                let soumatou5 = document.getElementById('soumatou5');
                soumatou5.style.transition = `opacity ${fadeDuration}ms`;
                soumatou5.style.opacity = 1;
                soumatou5.style.display = 'block';

                // 5. buttonが押された場合soumatou1からsoumatou5を非表示にする
                document.querySelector('#soumatou5 button').addEventListener('click', function() {
                    for(let i = 1; i <= 5; i++) {
                        let element = document.getElementById(`soumatou${i}`);
                        element.style.opacity = 0;
                        setTimeout(function() {
                            element.style.display = 'none';
                        }, fadeDuration);
                    }
                });
            }, displayDuration * 4);
        }, displayDuration * 4);
    }, fadeDuration);
}

{/* 
add
<style>
    .marquee {
        position: absolute;
        white-space: nowrap;
        overflow: hidden;
        pointer-events: none;
    }
</style>
 */}

const comments = [
    "ハム君モード突入！",
    "ハム君モード突入！",
    "ハム君モード突入！",
    "ハム君モード突入！",
    "ハム君モード突入！",
    "加藤純一差別発言まとめ https://dic.nicovideo.jp/id/5578487",
    "加藤純一違法ダウンロード一覧 https://dic.nicovideo.jp/id/5563002",
    "陣内「どこが最強やねん！」",
    "ﾓﾉｶﾞﾁｶﾞｳ…",
    "ﾝｼﾞｮﾜﾘｨ!",
    "ｸｶｶｶｶwww",
    "ｸﾞｷﾞｬｷﾞｬｷﾞｬｷﾞｬwww",
    "ｲﾔﾁｶﾞｯ",
    "ｱﾘｶﾞﾄﾈﾝ",
    "ｵﾚﾄﾓｺｳ",
    "ｵﾚﾄｵﾆﾔ",
    "ｵﾂｶﾚｼﾀ",
    "ｳﾝ",
    "ﾏﾀﾈ",
    "うぃ～w",
    "🐹🐹🐹🐹くん🐹🐹🐹🐹くん",
    "🐹🐹🐹🐹くん！🐹🐹🐹🐹くん！",
    "🐹🐹🐹🐹🐹🐹🐹🐹🐹🐹🐹🐹",
    "🐹🐹🐹🐹🐹🐹🐹🐹🐹🐹🐹🐹🐹🐹🐹🐹🐹🐹🐹🐹🐹🐹🐹🐹",   
    "🐹🐹🐹🐹🐹🐹🐹🐹🐹🐹🐹🐹🐹🐹🐹🐹🐹🐹🐹🐹🐹🐹🐹🐹🐹🐹🐹🐹🐹🐹🐹🐹🐹🐹🐹🐹",
    "🐹？🐹君って何？",
    "甘🫵ギャハハ",
    "ｵ~ﾚ~♪ｵ~ﾚ~♪((ง ｡෴°.)ว゛ｼｶｹﾝｻﾝﾊﾞ~♪ ｵ~ﾚ~♪ｵ~ﾚ~♪((ง ｡෴°.)ว゛ｼｶｹﾝｻﾝﾊﾞ~♪",
    "(V)　 _,,..,,,,_.　 (V)\nヽ/ ༼⁠◡⁠´⁠༎ຶ⁠ ᯅ ⁠༎ຶ◡⁠༽ﾓﾉｶﾞﾁｶﾞﾆ\nニl　　　　 lニ\n　/`'ｰ---‐ヘ",
    "🟥🟧🟨🟩🟦🟪🟥🟧🟨🟩🟦🟪🟥🟧🟨🟩\n🟥🟧🟨🟩🟦🟪(⌒,_ゝ⌒)🟩🟦🟪🟥🟧🟨🟩\n🟥🟧🟨🟩🟦🟪もこレインボー🟪🟥🟧🟨🟩\n🟥🟧🟨🟩🟦🟪🟥🟧🟨🟩🟦🟪🟥🟧🟨🟩",
    "あ",
    "まずい",
    "やめべ",
    "ひん",
    "よくないね不正解専卒",
    "なっさんの負けwww",
    "糖質じゃんwww",
    "加藤純一の信者、他の配信者を荒らしまくって開示請求されてしまうwwwwww",
    "加藤純一の信者さん、Vtuberのコラボ商品に業務妨害ツイート→法的措置検討へ",
    "【悲報】ぺコーラに喧嘩を売った加藤純一信者さん、親付き添いで謝罪の上賠償金を支払う",
    "外食でとんかつの衣を剥がして食べるのは極刑に値しますか？",
    "ア゛ァ゛！？衣だ！！！！あ゛あ゛言ったッ！僕が今すっ･･･僕のトレンドの衣だ！！！！",
    "あぁ衣衣ころもコロモォ！朝起きても衣昼起きても衣夜でも衣！！",
    "僕は衣という名前が出たらも～居ても立っていられないッ！！",
    "衣だ！衣だ！！かっさん！とんかつ！コロモ！う゛あ゛あ゛あ゛あ゛あ゛あ゛あ゛あ゛あ゛！！！！！！！",
    "高田健志のぉ！？お通りだああああああああああああああぁ！！！",
    "高田健志を知った熱心なキリシタンは次の日聖書で尻を拭いた",
    "高田健志はなぁ！16000コメ中14850コメがアンチコメだったのに絶体絶命都市3をやり切ったんだぞ！！！！",
    "すべ…❤",
    "ベロチューすべーよ！",
    "テレスクポコチエル松本"
    // "首大事にしてねマジでほんとに"
]; // コメントリスト
const container = document.getElementById('marquee-container');

function createMarquee(comment) {
    const marquee = document.createElement('div');
    marquee.innerHTML = comment.replace(/\n/g, '<br>');
    marquee.classList.add('marquee');
    marquee.style.top = `${Math.random() * 90}vh`;
    marquee.style.color = `hsl(${Math.random() * 360}, 100%, 50%)`;
    marquee.style.fontSize = `${Math.random() * 24 + 16}px`;
    container.appendChild(marquee);

    const totalWidth = marquee.offsetWidth + window.innerWidth;
    const duration = totalWidth / (150 + comment.length * 5); // 長いコメントほど早く流れます

    marquee.animate([
        { transform: `translateX(${window.innerWidth}px)` },
        { transform: `translateX(-${totalWidth}px)` }
    ], {
        duration: duration * 1000,
        easing: 'linear'
    });

    setTimeout(() => container.removeChild(marquee), duration * 1000);
}

let timerId;

function startMomarquee() {
    timerId = setInterval(() => {
        const comment = comments[Math.floor(Math.random() * comments.length)];
        createMarquee(comment);
    }, 25);
}

function stopMomarquee() {
    clearInterval(timerId);
    setTimeout( function() {
        const comment = "おい！！おめえら！！あんまり…責めねぇでな……？"
        createMarquee(comment);
    }, 3000);
}

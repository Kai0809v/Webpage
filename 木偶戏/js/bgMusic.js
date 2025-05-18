document.addEventListener('DOMContentLoaded', () => {

    // 音乐播放状态保持
    let audio = document.getElementById('bgm');
    let isPlaying = localStorage.getItem('isPlaying') === 'true';

    // 初始化播放状态
    if(isPlaying) {
        audio.play().catch(() => {/* 处理自动播放被阻止的情况 */});
        document.getElementById('playBtn').innerHTML = '<i class="fas fa-pause"></i>';
    }

    // 播放/暂停控制
    document.getElementById('playBtn').addEventListener('click', () => {
        if(audio.paused) {
            audio.play();
            localStorage.setItem('isPlaying', 'true');
            this.innerHTML = '<i class="fas fa-pause"></i>';
        } else {
            audio.pause();
            localStorage.setItem('isPlaying', 'false');
            this.innerHTML = '<i class="fas fa-play"></i>';
        }
    });

    // 进度条更新
    audio.ontimeupdate = () => {
        document.getElementById('progress').value = 
            (audio.currentTime / audio.duration) * 100;
    };

    // 进度条拖拽控制
    document.getElementById('progress').addEventListener('input', (e) => {
        audio.currentTime = (e.target.value / 100) * audio.duration;
    });

});
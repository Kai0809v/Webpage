// 使用和风天气API（需注册获取key）
const WEATHER_API_KEY = '3d3034562d6b4da5881e311f4058c926';
const CITY_ID = '101270301'; // 内江市代码

async function updateWeather() {
    try {
        const response = await fetch(
            `https:/k64d92a3pj.re.qweatherapi.com/v7/weather/now?location=${CITY_ID}&key=${WEATHER_API_KEY}`
            /* 如果你用的其他网站的API，这个也要换。具体看其API使用文档*/
        );
        const data = await response.json();
        
        const weatherBox = document.querySelector('.weather-box');
        if(data.code === '200') {
            const { temp, text, iconType } = data.now;
            weatherBox.querySelector('.temp').textContent = `${temp}°C`;
            weatherBox.querySelector('.weather-detail').textContent = text;
            weatherBox.querySelector('.weather-icon').className = `weather-icon fas ${getIconClass(iconType)}`;
        } else {
            weatherBox.querySelector('.weather-detail').textContent = '天气服务暂不可用';
        }
    } catch (error) {
        console.error('天气请求失败:', error);
    }
}

function getIconClass(iconType) {
    const iconMap = {
        '100': 'fa-sun',         // 晴
        '101': 'fa-cloud',       // 多云
        '103': 'fa-cloud-rain',  // 阵雨
        '104': 'fa-snowflake',   // 雪
        '305': 'fa-cloud-showers-heavy' // 大雨
    };
    return iconMap[iconType] || 'fa-question-circle';
}

// 每小时更新一次
setInterval(updateWeather, 3600000);
updateWeather();

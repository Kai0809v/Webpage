document.addEventListener("DOMContentLoaded", function () {
    const weatherBox = document.getElementById("weather-widget");

    // 替换为你的天气 API URL 和密钥
    const apiKey = "YOUR_API_KEY";
    const city = "Luzhou";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=zh_cn`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const { main, weather } = data;
            weatherBox.innerHTML = `
                <h4>${city} 天气</h4>
                <p>${weather[0].description}</p>
                <p>温度：${main.temp}°C</p>
                <p>湿度：${main.humidity}%</p>
            `;
        })
        .catch(error => {
            weatherBox.innerHTML = `<p>无法加载天气信息</p>`;
            console.error("天气 API 错误:", error);
        });
});
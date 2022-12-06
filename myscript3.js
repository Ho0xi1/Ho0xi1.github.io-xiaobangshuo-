let arr = []
for (let i=1; i <= 4;i++){
    arr.push(prompt(`请输入这周第${i}天想她的次数Please fill in the number of artworks seen on day i of this week`))
}
document.write(` <div class="box">`)
    for(let i=0;i<arr.length;i++){
        document.write(`
        <div style="height:${arr[i]}px;color:'white';">
<span style="color:white;">${arr[i]}</span>
<h4 style="color:white;">第${i+1}天</h4>
</div>
        `)
    }
document.write(`</div>`)
let heart = document.querySelector('.heart')
let card = document.querySelector('.card')
let box = document.querySelector('#box')
heart.addEventListener('click',function(){
    card.setAttribute("style","opacity:0");
    let x = document.createElement("audio");
     x.setAttribute("src", "qlx.mp3");
     x.setAttribute("autoplay","autoplay");

// 打字效果
let i =0
let str = '王老师生日快乐啊～我最近情况呢，一方面是太忙啦<另一方面你也知道，最近小弟囊中羞涩，本来想送王老师礼物，可碎银几两，还是有点压力大。<所以我想给你一封信，不过是一份用前端美化过的信<东拼西凑，bug改啊改，成品就是这样啦，还不错是吧嘻嘻<emmmm<启信佳，亲爱的王老师、你在我心中一直都很优秀的～<其实在我没有明确方向、没有找到自己的兴趣爱好前<王老师一直都是我十分仰慕的偶像<王老师说觉得我也很优秀<真的感觉特别特别荣幸<人的一生、知己难逢。我会和王老师成为知己吗？我不知道<反正我现在愿意花时间给王老师写信，愿意忙里偷闲敲着枯燥的标签语言<真的很感谢你，我喜欢你做我的笔友，每次你都不会嫌我烦，其实我真的很无聊<可能你会，但你没有表现出来哈哈哈哈<最后还是祝王老师生日快乐～<以及<我们不到万不得已千万不要见面<只因我！极其社恐！！！！！！！！！！！！！！'
let strp = ''

function print()
{
 if(str[i]=='<')
 {
     document.getElementById("box").innerHTML=strp+"<br><br>+'|'";
     strp+="<br>";
 }
 else
 {
     strp+=str[i];
     box.innerHTML=strp + '|';
 }
 i++;
}
setTimeout(() => {
    let printid=setInterval(() => {
        print();
        if(i==str.length)
        clearInterval(printid);
        },190);  // 190毫秒打一个字，其实细心发现的话，这个项目还是有个小小的bug，无法用语言描述这个bug，如果你想优化的话 有一种简单的方法就是调快打字的速度，这样那个bug看起来就不会很明显,我太菜了 不会改那个bug
}, 5500);  //5500毫秒开始打字
// 背景出现
function appearBackground(){
setTimeout(()=>{
box.style.opacity=1
},1500)
}
appearBackground()

})

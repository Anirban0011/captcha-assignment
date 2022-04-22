var n = Math.floor(Math.random()*1);
var names = ["lights"];
document.getElementById('obj').textContent = ""+names[n];
document.getElementById('run').addEventListener('click', function()
{
    var list = document.querySelectorAll('#hid');
    list[0].setAttribute('id','eee');
    list[1].setAttribute('id','eeee');
    var imp = document.getElementById('run');
    imp.setAttribute('id','hid');
})
var imgs = document.getElementsByTagName('img');
for(var i=0;i<imgs.length;i++)
{
    imgs[i].addEventListener('click', myFun);
}
var arr = [];
function myFun()
{
    this.setAttribute('src','https://t4.ftcdn.net/jpg/02/82/47/15/360_F_282471590_t5qkff4R08fuLwL23snKhyIbc8bsXVOH.jpg');
    arr.push(this.className);
}
document.getElementsByClassName('drun')[0].addEventListener('click',function()
{
        var flag=0;
        for(i=0;i<arr.length;i++)
        {
            if(arr[i] != names[n])
            {
                flag = 1;
                document.getElementById('result').textContent = "You Failed the Captcha";
                break;
            }
        }
        if(flag != 1)
        {
            document.getElementById('result').textContent = "You Cleared the Captcha Successfully";
        }
});

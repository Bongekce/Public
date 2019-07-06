//<![CDATA[
var key = window.location.href.split("gp/product")[1].replace("/","")
var urls={
    {
'asin':'https://google.com',
    'gplus':'https://plus.google.com/+KangIsmet1',
    'twitter':"https://twitter.com/kangismetdotnet" /* yang terakhir tanpa koma */
}
if(key){
    if(urls[key]){
        window.location.href=urls[key]
    }else{
        document.write("'"+key+"' not found :(");
    }
}
//]]>

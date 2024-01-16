code=prompt("홈피 접속 코드를 입력하세요. (접속코드는 홈피 작성자 이름입니다.)");
if(code=='김규리'){
    location.href="Term_Project.html"
}
else{
    hint_code=prompt('힌트: "김규리"의 홈피입니다 ^^');
    if(hint_code=='김규리'){
        location.href="Term_Project.html"
    }
    else{
        last_code=prompt('이 홈피의 작성자는 "김규리" 입니다!!!');
        if(last_code=='김규리'){
            location.href="Term_Project.html"
        }
        else{
            location.href="Term_Error_Start.html"
        }
    }
}
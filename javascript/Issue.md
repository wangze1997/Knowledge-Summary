## 一些常见的细节问题

```javascript
const settings = {
  username: "lydiahallie",
  level: 19,
  health: 90
};

const data = JSON.stringify(settings, ["level", "health"]);
console.log(data);
```



```javascript
 <script>
        // 当一个函数出生在块中时，不存在函数提升，只将其变量提升一下。
        // 他所找变量先从其块内找，再从其作用域找
        var a =3;
        console.log(add) //undefinde
        {
            function add(){
                console.log(a)
            }
            let a = 4;   
        }
        a = 5;
        console.log(add()) //4        
</script>
```


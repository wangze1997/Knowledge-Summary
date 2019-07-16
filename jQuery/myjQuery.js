(function (){
    window.$ = window.jQuery = jQuery;
    function jQuery(selector){
        return new jQuery.prototype.init(selector);
    }
    jQuery.prototype.init = function(selector){
        var dom;
        this.length = 0;
        if(selector == null){
            return this;
        }
        if(typeof selector == "string" && selector[0] == "."){
            dom = document.getElementsByClassName(selector.slice(1))
        }else if(typeof selector == "string" && selector[0] == "#"){
            dom = document.getElementById(selector.slice(1))
        }
        if(selector instanceof Element || dom.length == undefined){
            this[0] = dom || selector;
            this.length ++;                        
        }else{
            for(let i = 0; i < dom.length; i++){
                this.length ++;
                this[i] = dom[i]
            }
        }
        return this;
    }
    jQuery.prototype.pushStack = function(obj){
        if(obj.constructor != jQuery){
            obj = jQuery(obj)
        }
        obj.prevObject = this;  
        return obj;                  
    }
    jQuery.prototype.css = function(obj){
        if(typeof obj !== "object"){
            return this;
        }else{
            for(let i = 0; i < this.length; i++){
               for(let prop in obj){
                    this[i].style[prop] = obj[prop]
               }
            }
        }
        return this;
    }
    jQuery.prototype.get = function(n){
        return n != null ? (n >= 0 ? this[n] : this[this.length + n]) : [].slice.call(this,0);
    }
    jQuery.prototype.eq = function(n){
        var dom  = n != null ? (n >= 0 ? this[n] : this[this.length + n]) : null;
        return this.pushStack(dom)
    }
    jQuery.prototype.add = function(selector){
        var curObj = jQuery(selector),
            baseObj = this,
            newObj = jQuery();
            for(let i = 0; i < curObj.length; i++){
                newObj[newObj.length ++] = curObj[i]
            }
            for(let i = 0; i < baseObj.length; i++){
                newObj[newObj.length ++] = baseObj[i]
            }
            this.pushStack(newObj);
            return newObj;
    }
    jQuery.prototype.edd = function(){
        return this.prevObject;
    }
    jQuery.myCallbacks = function(){
        // once memory null
        var options = arguments[0] || "";
        // 记录有没有被fire过、
        var fired = false;
        // 通过add来加入的方法。
        var list = [];
        var fireIndex = 0;
        var args = [];
        function fire(){
            for(;fireIndex < list.length;fireIndex++){
                list[fireIndex].apply(window,args)
            }
            if(options.indexOf("once") != -1){
                list = [];
            }
        }
        return {
            add : function(fn){
                list.push(fn)
                if(options.indexOf("momery") != -1 && fired){
                    fire();
                    fireIndex = 0;
                }
                return this;
            },
            fire : function(){
                fireIndex = 0;
                args = arguments;
                fire();
                if(options == "momery"){
                    fired = true;
                }
                return this;
            }
        }
    }
    jQuery.myDeferred = function(){
        var arrCallbacks = [
            [$.myCallbacks(),"done","resolve"],
            [$.myCallbacks(),"fail","reject"],
            [$.myCallbacks(),"progress","notify"]
        ]
        var pending = true;
        var deferred = {};
        for(var i = 0 ; i < arrCallbacks.length; i++){  
            deferred[arrCallbacks[i][1]] = (function(index){
                return function(fn){
                    arrCallbacks[index][0].add(fn); 
                    return deferred;
                }
            })(i) 
            deferred[arrCallbacks[i][2]] =  (function(index ){
                return function(){
                    if(pending === true){
                        arrCallbacks[index][0].fire.apply(window,arguments); 
                        arrCallbacks[index][2] == "notify" ? pending = true : pending = false; 
                        console.log(pending)
                    } 
                    return deferred;                               
                }
            })(i) 
        }
        return deferred;                
    }   
    jQuery.prototype.init.prototype = jQuery.prototype;
})()
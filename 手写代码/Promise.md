```javascript
function myPromise(executor) {
        var _this = this;
        _this.status = "pending";
        _this.value = undefined;
        _this.reason = undefined;
        _this.resolvedCallbacks = [];
        _this.rejectedCallbacks = [];
        function resolved(value) {
            if (_this.status == "pending") {
                _this.status = "resolved"
                _this.value = value
                _this.resolvedCallbacks.forEach(fn => fn());
            }
        }
        function rejected(reason) {
            if (_this.status == "pending") {
                _this.status = "rejected"
                _this.reason = reason
                _this.rejectedCallbacks.forEach(fn => fn());
            }
        }
        try {
            executor(resolved, rejected);
        } catch (e) {
            rejected(e);
        }
}
myPromise.prototype.then = function (resolvedFn, rejectedFn) {
        let promise;
        let _this = this;
        if (_this.status == "resolved") {
            promise = new myPromise(function (resolved, rejected) {
                _this.resolvedCallbacks.push(function () {
                    setTimeout(function () {
                        try {
                            var a = resolvedFn(_this.value);
                            resolvedPromise(promise, a, resolved, rejected)
                        } catch (e) {
                            rejected(e)
                        }
                    })
                })
            });
        }
        if (_this.status == "rejected") {
            promise = new myPromise(function (resolved, rejected) {
                _this.rejectedCallbacks.push(function () {
                    try {
                        var a = rejected(_this.reason)
                        resolvedPromise(promise, a, resolved, rejected)
                    } catch (e) {
                        rejected(e)
                    }
                })
            });
        }
        if (_this.status == "pending") {
            promise = new myPromise(function (resolved, rejected) {
                _this.rejectedCallbacks.push(function () {
                    setTimeout(function () {
                        try {
                            var a = rejectedFn(_this.reason);
                            resolvedPromise(promise, a, resolved, rejected)
                        } catch (e) {
                            rejected(e)
                        }
                    })
                })
                _this.resolvedCallbacks.push(function () {
                    setTimeout(function () {
                        try {
                            var a = resolvedFn(_this.value);
                            resolvedPromise(promise, a, resolved, rejected)
                        } catch (e) {
                            rejected(e)
                        }
                    })
                })
            });
        }
        return promise;
}
function resolvedPromise(promise, a, resolved, rejected) {
        if (a !== null && typeof a == "object") {
            try {
                a.then.call(a, function (e) {
                    resolved(e);
                }, function (e) {
                    rejected(e);
                })
            } catch (e) {
                rejected(a)
            }
        } else {
            resolved(a);
        }
}
```


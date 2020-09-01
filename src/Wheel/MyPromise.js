function MyPromise(executor) {
  this.status = "PENDING";
  this.value = null;
  this.reason = null;

  this.resolves = [];
  this.rejects = [];

  this.resolve = value => {
    if (this.status === "PENDING") {
      this.status = "RESOLVED";
      this.value = value;
    }

    while (this.resolves.length) {
      const tem = this.resolves.shift();
      tem(value);
    }
  };

  this.reject = reason => {
    if (this.status === "PENDING") {
      this.status = "REJECTED";
      this.reason = reason;
    }

    while (this.rejects.length) {
      const tem = this.rejects.shift();
      tem(reason);
    }
  };

  this.then = (resolve, reject) => {
    resolve =
      typeof resolve === "function" ? resolve : (resolve = value => value);
    reject =
      typeof reject === "function"
        ? reject
        : (reject = reason => {
            throw new Error(reason);
          });

    return new MyPromise((resolveFn, rejectFn) => {
      const fulfilled = value => {
        try {
          const res = resolve(value);
          res instanceof MyPromise
            ? MyPromise.then(resolveFn, rejectFn)
            : resolveFn(res);
        } catch (error) {
          reject(error);
        }
      };

      const rejected = value => {
        try {
          const res = reject(value);
          res instanceof MyPromise
            ? MyPromise.then(resolveFn, rejectFn)
            : rejectFn(res);
        } catch (error) {
          reject(error);
        }
      };

      switch (this.status) {
        case "RESOLVED":
          fulfilled(this.value);
          break;
        case "REJECTED":
          rejected(this.value);
          break;
        case "PENDING":
        default:
          this.resolves.push(fulfilled);
          this.rejects.push(rejected);
          break;
      }
    });
  };

  try {
    executor(this.resolve, this.reject);
  } catch (error) {
    this.reject(error);
  }
}

export default MyPromise;

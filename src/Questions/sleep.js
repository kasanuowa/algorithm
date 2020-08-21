const sleep = list => {
  return {
    list: [...list].flat(Infinity),
    async run(cb = () => {}) {
      for (const key in this.list) {
        if (typeof this.list[key] === "function") {
          await this.list[key]();
        } else {
          await this.list[key].run();
        }
      }
      cb();
    },
  };
};

export default sleep;

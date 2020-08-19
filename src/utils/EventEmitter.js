export default function EventEmitter() {
  let handlers = {};

  this.subscript = (type, cb) => {
    if (handlers[type]) {
      handlers[type].push(cb);
    } else {
      handlers[type] = [cb];
    }

    return () => {
      const index = handlers[type].indexOf(cb);
      handlers[type].splice(index, 1);
    };
  };

  this.unSubscript = type => {
    handlers[type] = [];
  };

  this.emit = (type, ...params) => {
    if (handlers[type]) {
      handlers[type].foreach(cb => cb(...params));
    }
  };
}

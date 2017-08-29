class LocalStorage {
  constructor(namespace) {
    this.namespace = namespace;
  }

  setJSON(key, object) {
    localStorage.setItem(`${this.namespace}/${key}`, JSON.stringify(object));
  }

  getJSON(key) {
    const jsonString = localStorage.getItem(`${this.namespace}/${key}`);
    return JSON.parse(jsonString);
  }
}

export default new LocalStorage('APP');

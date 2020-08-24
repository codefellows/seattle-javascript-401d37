class BaseModel {

  constructor(schema) {
    this.schema = schema;
  }

  async get(id) {

    if(id) {
      return this.schema.findById(id);
    } else {
      return this.schema.find({});
    }
  }

  post(info) {
    return this.schema.create(info);
  }

  put(id, info) {
    return this.schema.findByIdAndUpdate(id, info, { new: true });
  }

  patch(id, info) {
    return this.schema.findByIdAndUpdate(id, info, { new: true });
  }

  delete(id) {
    return this.schema.findByIdAndDelete(id);
  }
}

module.exports = BaseModel;

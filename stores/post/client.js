const mongo = require('../../databases/mongo');
const moneo = require('../../databases/moneo');
const addSyncHook = require('../../lib/sync-elasticsearch-hook');
const schema = require('./schema');
const addIndex = require('./plugin/add-index');

const Schema = mongo.Schema;
const storeSchema = new Schema(schema);
storeSchema.plugin(moneo);
addSyncHook(storeSchema);
addIndex(storeSchema);
const storeModel = mongo.model('post', storeSchema);

module.exports = storeModel;

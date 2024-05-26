import { createStore } from "tinybase/cjs";
import { createIndexedDbPersister } from "tinybase/cjs/persisters/persister-indexed-db";

const store = createStore().setTablesSchema({
  contact: {
    name: {
      type: "string",
    },
  },
});

const persister = createIndexedDbPersister(store, "solidtron_db", 5);

persister.save();
persister.startAutoSave();

export default store;

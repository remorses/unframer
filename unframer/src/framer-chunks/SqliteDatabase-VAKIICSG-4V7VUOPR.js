import "./chunk-2DZGP7C2.js";

// /:https://app.framerstatic.com/SqliteDatabase-VAKIICSG.mjs
var __unframerWindow = typeof window !== "undefined" ? window : void 0;
var SQLITE_GROWTH_PADDING_BYTES = 1048576;
var databaseSession;
var databaseSessionPromise;
async function createDatabaseSession() {
  if (typeof __unframerWindow === "undefined") {
    throw new Error("The CMS SQLite database can only be loaded in a browser environment.");
  }
  const [{ default: initSqlite3 }, { default: defaultBlogDatabaseBytes }, { default: sqliteWasmBytes }] = await Promise.all([
    import("./sqlite-wasm-FGP37EAY-6O2O4F23.js"),
    import("./default-blog-sqlite-7ZHEY3GT-27R5KAAW.js"),
    import("./sqlite3-SISQ6ENZ-KMXYXSSV.js")
  ]);
  const initOptions = {
    wasmBinary: sqliteWasmBytes
  };
  const sqlite3 = await initSqlite3(initOptions);
  const bytes = new Uint8Array(defaultBlogDatabaseBytes);
  const db = new sqlite3.oo1.DB(":memory:");
  const bufferSize = Math.max(bytes.byteLength * 2, bytes.byteLength + SQLITE_GROWTH_PADDING_BYTES);
  const dataPointer = sqlite3.capi.sqlite3_malloc(bufferSize);
  try {
    sqlite3.wasm.heap8u().fill(0, dataPointer, dataPointer + bufferSize);
    sqlite3.wasm.heap8u().set(bytes, dataPointer);
    db.checkRc(
      sqlite3.capi.sqlite3_deserialize(
        db,
        "main",
        dataPointer,
        bytes.byteLength,
        bufferSize,
        sqlite3.capi.SQLITE_DESERIALIZE_FREEONCLOSE | sqlite3.capi.SQLITE_DESERIALIZE_RESIZEABLE
      )
    );
    return {
      db
    };
  } catch (error) {
    sqlite3.capi.sqlite3_free(dataPointer);
    db.close();
    throw error;
  }
}
async function getDatabaseSession() {
  if (databaseSession) return databaseSession;
  if (!databaseSessionPromise) {
    databaseSessionPromise = createDatabaseSession().then((session) => {
      databaseSession = session;
      return session;
    }).catch((error) => {
      databaseSessionPromise = void 0;
      throw error;
    });
  }
  return databaseSessionPromise;
}
function executeSqlQuery(db, sql) {
  const columnNames = [];
  const executedSql = [];
  const rows = db.exec({
    sql,
    columnNames,
    resultRows: [],
    returnValue: "resultRows",
    rowMode: "object",
    saveSql: executedSql
  });
  return {
    columnNames,
    executedSql,
    rows,
    changes: db.changes(),
    totalChanges: db.changes(true)
  };
}
async function executeServerDatabaseQuery(sql) {
  const trimmedSql = sql.trim();
  if (!trimmedSql) {
    throw new Error("Enter a SQL statement to run.");
  }
  const session = await getDatabaseSession();
  return executeSqlQuery(session.db, trimmedSql);
}
async function resetSqliteDatabase() {
  if (databaseSession) {
    databaseSession.db.close();
  }
  databaseSession = void 0;
  databaseSessionPromise = void 0;
}
export {
  executeServerDatabaseQuery,
  resetSqliteDatabase
};
